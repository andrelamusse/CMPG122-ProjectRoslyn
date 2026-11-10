/**
 * NWU CMPG122 — Automated Unit & Module Integration Test Suite
 * Run via: node --test CMPG122_App/tests/unit_and_integration.test.js
 */
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const APP_ROOT = path.resolve(__dirname, '..');
const DATA = require(path.join(APP_ROOT, 'js', 'data.js'));
const CSharpEngine = require(path.join(APP_ROOT, 'js', 'csharp_engine.js'));
const PersistenceMod = require(path.join(APP_ROOT, 'js', 'modules', 'persistence.js'));
const AnalyticsMod = require(path.join(APP_ROOT, 'js', 'modules', 'analytics.js'));
const DefsMod = require(path.join(APP_ROOT, 'js', 'modules', 'definitions_engine.js'));
const ExamMod = require(path.join(APP_ROOT, 'js', 'modules', 'exam_engine.js'));
const ShortcutsMod = require(path.join(APP_ROOT, 'js', 'modules', 'keyboard_shortcuts.js'));
const Renderer = require(path.join(APP_ROOT, 'js', 'modules', 'question_renderer.js'));

function createMemoryStorage() {
  const map = new Map();
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
    removeItem: (k) => map.delete(k)
  };
}

describe('1. Answer Evaluation, Mark Calculations & Exam State Machine', () => {
  it('awards exact question marks on correct answer and 0 on wrong or unanswered', () => {
    const q6 = { id: 't1', su: 'SU5', topic: 'su5_t4_ref_and_out', marks: 6, options: ['A', 'B', 'C', 'D'], answer: 2 };
    assert.deepEqual(ExamMod.evaluateObjectiveQuestion(q6, 2), { answered: true, isCorrect: true, earnedMarks: 6, maxMarks: 6 });
    assert.deepEqual(ExamMod.evaluateObjectiveQuestion(q6, 0), { answered: true, isCorrect: false, earnedMarks: 0, maxMarks: 6 });
    assert.deepEqual(ExamMod.evaluateObjectiveQuestion(q6, null), { answered: false, isCorrect: false, earnedMarks: 0, maxMarks: 6 });
  });

  it('tracks unseen -> seen -> answered_unsubmitted -> submitted transitions and blocks duplicate marks', () => {
    const sample = DATA.questions.slice(0, 4);
    const sess = new ExamMod.ExamSession({
      mode: 'practice',
      questions: sample,
      allowInstantSubmit: true
    });

    assert.equal(sess.getQuestionState(sample[0].id).status, 'seen');
    assert.equal(sess.getQuestionState(sample[1].id).status, 'unseen');

    sess.goToIndex(1);
    assert.equal(sess.getQuestionState(sample[1].id).status, 'seen');

    assert.equal(sess.selectOption(sample[1].id, sample[1].answer), true);
    assert.equal(sess.getQuestionState(sample[1].id).status, 'answered_unsubmitted');

    const sub1 = sess.submitSingleQuestion(sample[1].id, 1000);
    assert.equal(sub1.duplicate, false);
    assert.equal(sub1.status, 'submitted');
    assert.equal(sub1.outcome, 'correct');
    assert.equal(sub1.earnedMarks, sample[1].marks);

    // Duplicate submission must be flagged duplicate and must not change marks
    const sub2 = sess.submitSingleQuestion(sample[1].id, 2000);
    assert.equal(sub2.duplicate, true);
    assert.equal(sess.selectOption(sample[1].id, (sample[1].answer + 1) % 4), false);
  });

  it('computes raw marks, total marks, unanswered count, and unit breakdown on final exam submission', () => {
    const qs = [
      { id: 'e1', su: 'SU2', topic: 'su2_t1', topicTitle: 'Types', marks: 4, options: ['a', 'b'], answer: 1 },
      { id: 'e2', su: 'SU5', topic: 'su5_t4', topicTitle: 'ref/out', marks: 6, options: ['a', 'b'], answer: 0 },
      { id: 'e3', su: 'SU6', topic: 'su6_t2', topicTitle: 'Modal', marks: 8, options: ['a', 'b'], answer: 1 }
    ];
    const exam = new ExamMod.ExamSession({
      mode: 'full_exam',
      questions: qs,
      allowInstantSubmit: false,
      durationMinutes: 60,
      nowMs: 10000
    });

    exam.selectOption('e1', 1); // correct (+4)
    exam.selectOption('e2', 1); // wrong (0)
    exam.toggleFlag('e3');      // unanswered (0)

    const pre = exam.getPreSubmitSummary();
    assert.equal(pre.answeredCount, 2);
    assert.equal(pre.unansweredCount, 1);
    assert.equal(pre.unansweredNumbers[0].number, 3);
    assert.equal(pre.flaggedCount, 1);

    const res = exam.submitExamination(70000);
    assert.equal(res.rawMarks, 4);
    assert.equal(res.totalMarks, 18);
    assert.equal(res.correctCount, 1);
    assert.equal(res.incorrectCount, 1);
    assert.equal(res.unansweredCount, 1);
    assert.equal(res.durationSeconds, 60);
    assert.equal(res.byUnit.SU2.percentage, 100);
    assert.equal(res.byUnit.SU5.percentage, 0);

    // Idempotent double-submit check
    const resAgain = exam.submitExamination(99000);
    assert.equal(resAgain.rawMarks, 4);
    assert.equal(resAgain.durationSeconds, 60);
  });
});

describe('2. Timer Integrity, Pause/Resume & Snapshot Refresh Recovery', () => {
  it('calculates remaining time from timestamps, excludes paused duration, and never goes negative', () => {
    const sess = new ExamMod.ExamSession({
      mode: 'past_paper',
      questions: DATA.questions.slice(0, 3),
      durationMinutes: 10, // 600s
      nowMs: 1_000_000
    });

    assert.equal(sess.getRemainingSeconds(1_000_000), 600);
    assert.equal(sess.getRemainingSeconds(1_120_000), 480); // 120s elapsed

    // Pause for 300s (from 1_120_000 to 1_420_000)
    sess.pauseTimer(1_120_000);
    assert.equal(sess.getRemainingSeconds(1_300_000), 480);
    sess.resumeTimer(1_420_000);

    // 30s after resume -> total active elapsed = 150s -> 450s left
    assert.equal(sess.getElapsedSeconds(1_450_000), 150);
    assert.equal(sess.getRemainingSeconds(1_450_000), 450);

    // Snapshot & reload recovery
    sess.selectOption(DATA.questions[0].id, 1);
    const snap = sess.toSnapshot();
    const restored = ExamMod.ExamSession.fromSnapshot(snap, DATA.questions);
    assert.equal(restored.getRemainingSeconds(1_450_000), 450);
    assert.equal(restored.getQuestionState(DATA.questions[0].id).selectedAnswer, 1);

    // Past expiry -> clamped to 0, never negative
    assert.equal(restored.getRemainingSeconds(9_999_999), 0);
    assert.equal(restored.isTimeExpired(9_999_999), true);
    assert.equal(ExamMod.formatCountdown(-50), '00:00');
  });
});

describe('3. Mark-Weighted Exam Generation & Custom Quiz Selection', () => {
  it('generates 100-mark full exams matching verified SU allocations across multiple seeds', () => {
    const allocs = DATA.examWeightingModel.allocations;
    for (const seed of [1, 7, 42, 101, 2026]) {
      const paper = ExamMod.generateWeightedExam(DATA.questions, allocs, 100, { seed });
      const marksBySu = {};
      let sum = 0;
      const ids = new Set();
      for (const q of paper) {
        assert.equal(ids.has(q.id), false, 'No duplicate questions in generated exam');
        ids.add(q.id);
        marksBySu[q.su] = (marksBySu[q.su] || 0) + q.marks;
        sum += q.marks;
      }
      assert.equal(sum, 100);
      assert.deepEqual(marksBySu, allocs);
    }
  });

  it('filters custom quizzes accurately by Study Unit, difficulty, count, and exclusions', () => {
    const su5Adv = ExamMod.generateCustomExam(DATA.questions, {
      units: ['SU5', 'SU6'],
      difficulties: ['Advanced'],
      questionCount: 10,
      seed: 19
    });
    assert.equal(su5Adv.length, 10);
    su5Adv.forEach(q => {
      assert.ok(q.su === 'SU5' || q.su === 'SU6');
      assert.equal(q.difficulty, 'Advanced');
    });
  });
});

describe('4. Persistence, Schema Migrations, Corrupt Storage & Backup Security', () => {
  it('migrates v1 solvedIds cleanly to v2 schema without losing progress', () => {
    const migrated = PersistenceMod.migrateState({
      schemaVersion: 1,
      solvedIds: ['q_su7_001', 'q_su5_new_012'],
      studyTimeSeconds: 300
    });
    assert.equal(migrated.schemaVersion, PersistenceMod.CURRENT_SCHEMA_VERSION);
    assert.equal(migrated.questionHistory.q_su7_001.isCorrect, true);
    assert.equal(migrated.questionHistory.q_su5_new_012.correct, 1);
    assert.equal(migrated.studyTimeSeconds, 300);
  });

  it('rejects malformed JSON, prototype pollution, and invalid schemas on import', async () => {
    assert.equal(PersistenceMod.validateImportedBackup('{bad json').valid, false);
    assert.equal(PersistenceMod.validateImportedBackup('{"__proto__":{"polluted":true},"schemaVersion":2}').valid, false);
    assert.equal(PersistenceMod.validateImportedBackup('{"hello":"world"}').valid, false);

    const pm = new PersistenceMod.PersistenceManager({ localStorage: createMemoryStorage(), indexedDB: null });
    await pm.init();
    await pm.recordQuestionAttempt(DATA.questions[0], DATA.questions[0].answer, true, 1500);
    const exported = pm.exportBackupJson();

    const pm2 = new PersistenceMod.PersistenceManager({ localStorage: createMemoryStorage(), indexedDB: null });
    await pm2.init();
    const imp = await pm2.importBackupJson(exported);
    assert.equal(imp.valid, true);
    assert.equal(pm2.getState().questionHistory[DATA.questions[0].id].isCorrect, true);
  });
});

describe('5. Honest Analytics & Error-Correction Queue', () => {
  it('reports 0% progress and null accuracy when no activity exists (zero fabricated stats)', () => {
    const emptyState = PersistenceMod.createDefaultState();
    const stats = AnalyticsMod.computeAnalytics(emptyState, DATA);
    assert.equal(stats.hasActivity, false);
    assert.equal(stats.overallProgressPct, 0);
    assert.equal(stats.accuracyPct, null);
    assert.equal(stats.weakestUnit, null);
  });

  it('identifies weakest SU, separates incorrect vs flagged vs understood, and recommends distinct similar questions', async () => {
    const pm = new PersistenceMod.PersistenceManager({ localStorage: createMemoryStorage(), indexedDB: null });
    await pm.init();
    const qWrong = DATA.questions.find(q => q.su === 'SU5');
    const qRight = DATA.questions.find(q => q.su === 'SU1');
    const qFlag = DATA.questions.find(q => q.su === 'SU6');

    await pm.recordQuestionAttempt(qWrong, (qWrong.answer + 1) % 4, false, 2000);
    await pm.recordQuestionAttempt(qWrong, (qWrong.answer + 1) % 4, false, 2000);
    await pm.recordQuestionAttempt(qRight, qRight.answer, true, 1200);
    pm.toggleFlagQuestion(qFlag.id);

    let stats = AnalyticsMod.computeAnalytics(pm.getState(), DATA);
    assert.equal(stats.weakestUnit.id, 'SU5');
    assert.equal(stats.incorrectQueue.length, 1);
    assert.equal(stats.flaggedQueue.length, 1);
    assert.equal(stats.repeatedMistakes.length, 1);

    const similar = AnalyticsMod.getSimilarQuestions(qWrong, DATA.questions, pm.getState().questionHistory, 5);
    assert.equal(similar.length, 5);
    assert.equal(similar.some(sq => sq.id === qWrong.id), false, 'Must never repeat identical question as similar');

    await pm.markConceptUnderstood(qWrong.id, true);
    stats = AnalyticsMod.computeAnalytics(pm.getState(), DATA);
    assert.equal(stats.incorrectQueue.length, 0);
    assert.equal(stats.understoodQueue.length, 1);
  });
});

describe('6. Definitions Lookup, Inline Linker & Exact Return Context', () => {
  it('searches definitions, links terms subtly without XSS, and protects Backspace inside inputs', () => {
    const eng = new DefsMod.DefinitionsEngine(DATA.definitions);
    assert.ok(eng.search('TryParse').length >= 1);
    assert.ok(eng.search('ShowDialog', 'SU6').length >= 1);

    const html = eng.renderTextWithInlineLinks('Use `TryParse` and StreamReader safely <script>alert(1)</script>.');
    assert.ok(!html.includes('<script>'));
    assert.ok(html.includes('data-def-id='));

    eng.pushReturnContext({
      route: 'practice',
      sourceLabel: 'Question',
      studyUnitId: 'SU3',
      questionId: 'q_su3_001',
      selectedAnswer: 2,
      scrollY: 420
    });

    // Blocked when typing in search input
    assert.equal(eng.shouldTriggerKeyboardReturn({ key: 'Backspace', target: { tagName: 'INPUT' } }, 'definitions'), false);
    // Allowed on non-editable page surface
    assert.equal(eng.shouldTriggerKeyboardReturn({ key: 'Escape', target: { tagName: 'DIV' } }, 'definitions'), true);

    const popped = eng.popReturnContext();
    assert.equal(popped.scrollY, 420);
    assert.equal(popped.selectedAnswer, 2);
  });
});

describe('7. Keyboard Shortcut System (A-E, 1-5, Enter & Guard Rules)', () => {
  it('enforces 1-5 select-only, A-E select+submit, Enter state machine, and input/disable guards', () => {
    let selected = null;
    let submitted = 0;
    let advanced = 0;
    let prefs = { keyboardShortcutsEnabled: true, letterShortcutsEnabled: true };

    const ctrl = new ShortcutsMod.KeyboardShortcutController({
      isPracticeShortcutContextActive: () => true,
      getPreferences: () => prefs,
      hasOpenModal: () => false,
      getCurrentQuestionContext: () => ({
        questionId: 'q1',
        optionCount: 4,
        selectedAnswer: selected,
        isSubmitted: submitted > 0
      }),
      onSelectOption: (idx) => { selected = idx; },
      onSubmitCurrent: () => { submitted += 1; },
      onNextQuestion: () => { advanced += 1; }
    });

    // Enter with nothing selected -> does nothing
    assert.equal(ctrl.handleKeyDown({ key: 'Enter', target: { tagName: 'BODY' } }), false);
    assert.equal(submitted, 0);

    // Typing inside INPUT or TEXTAREA -> ignored completely
    assert.equal(ctrl.handleKeyDown({ key: 'a', target: { tagName: 'INPUT' } }), false);
    assert.equal(selected, null);

    // Digit '2' -> selects index 1 WITHOUT submitting
    assert.equal(ctrl.handleKeyDown({ key: '2', target: { tagName: 'BODY' } }), true);
    assert.equal(selected, 1);
    assert.equal(submitted, 0);

    // Enter when selected & unsubmitted -> submits
    assert.equal(ctrl.handleKeyDown({ key: 'Enter', target: { tagName: 'BODY' } }), true);
    assert.equal(submitted, 1);

    // Letter 'C' after already graded -> no duplicate submit
    assert.equal(ctrl.handleKeyDown({ key: 'c', target: { tagName: 'BODY' } }), false);
    assert.equal(submitted, 1);

    // Enter when already graded -> advances to next question
    assert.equal(ctrl.handleKeyDown({ key: 'Enter', target: { tagName: 'BODY' } }), true);
    assert.equal(advanced, 1);

    // Reset & test single-key 'd' (case-insensitive) immediate select + submit
    selected = null;
    submitted = 0;
    assert.equal(ctrl.handleKeyDown({ key: 'd', target: { tagName: 'BODY' } }), true);
    assert.equal(selected, 3);
    assert.equal(submitted, 1);

    // Disabling letterShortcuts blocks 'a' while keeping '1' working
    selected = null;
    submitted = 0;
    prefs.letterShortcutsEnabled = false;
    assert.equal(ctrl.handleKeyDown({ key: 'a', target: { tagName: 'BODY' } }), false);
    assert.equal(ctrl.handleKeyDown({ key: '1', target: { tagName: 'BODY' } }), true);
    assert.equal(selected, 0);
  });
});

describe('8. C# Syntax Highlighter & XSS Safety', () => {
  it('highlights C# keywords and escapes raw HTML injection safely', () => {
    const out = CSharpEngine.highlightCSharp('decimal total = 19.99m; // <img src=x onerror=alert(1)>');
    assert.ok(out.includes('class="tok-type"'));
    assert.ok(out.includes('class="tok-num"'));
    assert.ok(!out.includes('<img'));
    assert.ok(out.includes('&lt;img'));
  });
});
