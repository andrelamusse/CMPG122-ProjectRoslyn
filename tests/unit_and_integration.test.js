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
    // Enter on <summary> or <a> must NOT be hijacked even when question is graded
    prefs.letterShortcutsEnabled = true;
    submitted = 1;
    advanced = 0;
    assert.equal(ctrl.handleKeyDown({ key: 'Enter', target: { tagName: 'SUMMARY' } }), false);
    assert.equal(ctrl.handleKeyDown({ key: 'Enter', target: { tagName: 'A' } }), false);
    assert.equal(advanced, 0);
  });
});

describe('8. C# Syntax Highlighter, Sandbox Edge Cases & Integer Division', () => {
  it('highlights C# keywords and escapes raw HTML injection safely', () => {
    const out = CSharpEngine.highlightCSharp('decimal total = 19.99m; // <img src=x onerror=alert(1)>');
    assert.ok(out.includes('class="tok-type"'));
    assert.ok(out.includes('class="tok-num"'));
    assert.ok(!out.includes('<img'));
    assert.ok(out.includes('&lt;img'));
  });

  it('halts braceless and nested-paren infinite loops cleanly without hanging', () => {
    const res1 = CSharpEngine.simulateExecution('int i = 0; while (i >= 0) i++;', [{ name: 't1', inputs: {}, expected: {} }]);
    assert.equal(res1.success, false);
    assert.match(res1.testResults[0].actual, /Infinite loop halted/);

    const res2 = CSharpEngine.simulateExecution('while (true);', [{ name: 't2', inputs: {}, expected: {} }]);
    assert.equal(res2.success, false);
    assert.match(res2.testResults[0].actual, /Infinite loop halted/);

    const res3 = CSharpEngine.simulateExecution('int k = 0; for (int i = 0; i < Math.Max(1, 5); i++) k += 2; lblOut.Text = k.ToString();', [
      { name: 't3', inputs: {}, expected: { lblOut: '10' } }
    ], { expectedOutputs: ['lblOut'] });
    assert.equal(res3.success, true);
  });

  it('truncates C# int / int division while preserving explicit casts and decimal literals, and allows // inside strings', () => {
    const diags = CSharpEngine.analyzeDiagnostics('string site = "https://nwu.ac.za";\nlblUrl.Text = site;');
    assert.equal(diags.filter(d => d.severity === 'error').length, 0, 'URL with // inside string must not trigger false CS1002');

    const divCode = `
      int a = 7, b = 2;
      double truncVar = a / b;
      double castFloat = (double)a / b;
      decimal decDiv = 7m / 2m;
      lblA.Text = truncVar.ToString("F1");
      lblB.Text = castFloat.ToString("F1");
      lblC.Text = decDiv.ToString("F1");
    `;
    const sim = CSharpEngine.simulateExecution(divCode, [{
      name: 'int_div',
      inputs: {},
      expected: { lblA: '3.0', lblB: '3.5', lblC: '3.5' }
    }], { expectedOutputs: ['lblA', 'lblB', 'lblC'] });
    assert.equal(sim.success, true, JSON.stringify(sim.testResults));

    // Prototype helpers must be non-enumerable
    assert.deepEqual(Object.keys(new String('hi')), ['0', '1']);
  });
});

describe('9. Markdown Emphasis Rendering, Unanswered Review Queue & Answer-Key Calibration', () => {
  it('renders **bold** and *italic* cleanly without raw asterisks and preserves $ characters', () => {
    const eng = new DefsMod.DefinitionsEngine(DATA.definitions);
    const rendered = eng.renderTextWithInlineLinks('Because `Show()` is **modeless**, execution continues *immediately* with $"R {total:F2}".');
    assert.ok(rendered.includes('<strong>modeless</strong>'));
    assert.ok(rendered.includes('<em>immediately</em>'));
    assert.ok(!rendered.includes('**modeless**'));
    assert.ok(rendered.includes('$&quot;R {total:F2}&quot;'));
  });

  it('tracks unanswered exam items until answered and distinguishes unattempted flagged bookmarks', async () => {
    const pm = new PersistenceMod.PersistenceManager({ localStorage: createMemoryStorage(), indexedDB: null });
    await pm.init();
    const q1 = DATA.questions[0];
    const q2 = DATA.questions[1];

    await pm.recordExamResult({
      id: 'ex_1',
      mode: 'past_paper',
      title: 'Sample Exam',
      rawMarks: 2,
      totalMarks: 4,
      percentage: 50,
      correctCount: 1,
      incorrectCount: 0,
      unansweredCount: 1,
      durationSeconds: 120,
      completedAt: Date.now(),
      detailedItems: [
        { questionId: q1.id, outcome: 'correct' },
        { questionId: q2.id, outcome: 'unanswered' }
      ]
    });

    let stats = AnalyticsMod.computeAnalytics(pm.getState(), DATA);
    assert.equal(stats.unansweredQueue.length, 1);
    assert.equal(stats.unansweredQueue[0].id, q2.id);

    // Once learner answers q2 in practice, it leaves unansweredQueue
    await pm.recordQuestionAttempt(q2, q2.answer, true, 1000);
    stats = AnalyticsMod.computeAnalytics(pm.getState(), DATA);
    assert.equal(stats.unansweredQueue.length, 0);

    // Unattempted flagged bookmark must NOT claim "Correct (+marks)"
    const panelHtml = Renderer.renderExplanationPanel(q1, { status: 'submitted', selectedAnswer: null, bookmarkedReview: true }, {});
    assert.ok(panelHtml.includes('Flagged for Review (Not Yet Attempted)'));
    assert.ok(!panelHtml.includes('Correct (+'));
  });

  it('maintains balanced A/B/C/D answer keys across all 7 Study Units and Spot-the-Error challenges', () => {
    const bySu = {};
    for (const q of DATA.questions) {
      bySu[q.su] = bySu[q.su] || [0, 0, 0, 0];
      bySu[q.su][q.answer]++;
    }
    for (const [su, dist] of Object.entries(bySu)) {
      const n = dist.reduce((a, b) => a + b, 0);
      for (const c of dist) {
        assert.ok(c / n >= 0.18 && c / n <= 0.32, `${su} answer distribution imbalanced: ${dist}`);
      }
    }
    const spotDist = [0, 0, 0, 0];
    DATA.spotErrors.forEach(s => spotDist[s.answer]++);
    assert.deepEqual(spotDist, [6, 6, 6, 6]);
  });

  it('preserves C# multiplication (*), wildcard filters (*.txt, *.*), standalone ** tokens, and bold-wrapped `backticks`', () => {
    const eng = new DefsMod.DefinitionsEngine(DATA.definitions);

    // 1. Multiplication operators must never be swallowed into <em>
    const multHtml = eng.renderTextWithInlineLinks('Evaluating 3 * 2 * 2 yields 12, whereas a++ * 2 uses the post-increment value.');
    assert.ok(multHtml.includes('3 * 2 * 2'), `Expected literal 3 * 2 * 2 in: ${multHtml}`);
    assert.ok(multHtml.includes('a++ * 2'), `Expected literal a++ * 2 in: ${multHtml}`);
    assert.ok(!multHtml.includes('<em>'), `Must not convert C# * into <em>: ${multHtml}`);

    // 2. OpenFileDialog / SaveFileDialog wildcard filters must keep every * intact
    const filterRaw = '"Text Files (*.txt)|*.txt|All Files (*.*)|*.*"';
    const filterHtml = eng.renderTextWithInlineLinks(filterRaw);
    assert.ok(filterHtml.includes('(*.txt)|*.txt|All Files (*.*)|*.*'), `Wildcard corrupted: ${filterHtml}`);
    assert.ok(!filterHtml.includes('<em>'), `Wildcard must not produce <em>: ${filterHtml}`);

    // 3. Bold wrapping inline backtick code spans (e.g. **Step Into (`F11`)** and **`Load`**)
    const boldCodeNoLinks = eng.renderTextWithInlineLinks('Press **Step Into (`F11`)** before the **`Load`** event fires.', { maxLinks: 0 });
    assert.ok(boldCodeNoLinks.includes('<strong>Step Into (<code class="inline-code">F11</code>)</strong>'), `Failed bold+code (no links): ${boldCodeNoLinks}`);
    assert.ok(boldCodeNoLinks.includes('<strong><code class="inline-code">Load</code></strong>'), `Failed bold-only code: ${boldCodeNoLinks}`);

    const boldCodeLinked = eng.renderTextWithInlineLinks('Press **Step Into (`F11`)** before the **`Load`** event fires.');
    assert.ok(boldCodeLinked.includes('data-def-id="def_debugger_stepping"'), `Expected Step Into inline link inside bold: ${boldCodeLinked}`);
    assert.ok(boldCodeLinked.includes('(<code class="inline-code">F11</code>)</strong>'), `Failed bold+code (linked): ${boldCodeLinked}`);
    assert.ok(!boldCodeLinked.includes('**'), `Raw ** leaked: ${boldCodeLinked}`);

    // 4. Standalone ** operator distractor token must remain literal **
    assert.equal(eng.renderTextWithInlineLinks('**'), '**');
  });
});

describe('10. Custom Exam Weighted Count Selection, Schema Completeness & Code Lab Signatures', () => {
  it('applies Study Unit weights when targetMarks is 0 and interleaves multi-unit pools when randomize is false', () => {
    const allUnits = ['SU7', 'SU1', 'SU2', 'SU3', 'SU4', 'SU5', 'SU6'];

    // Default Custom Quiz UI state: targetMarks = 0 ("0 = use count"), useWeightedDistribution = true
    const weighted20 = ExamMod.generateCustomExam(DATA.questions, {
      units: allUnits,
      questionCount: 20,
      targetMarks: 0,
      useWeightedDistribution: true,
      allocations: DATA.examWeightingModel.allocations,
      seed: 2026
    });
    assert.equal(weighted20.length, 20);
    const countsBySu = {};
    weighted20.forEach(q => { countsBySu[q.su] = (countsBySu[q.su] || 0) + 1; });
    assert.deepEqual(countsBySu, { SU7: 2, SU1: 2, SU2: 3, SU3: 4, SU4: 4, SU5: 3, SU6: 2 });

    // Unweighted deterministic multi-unit selection (randomize: false) must cover all 7 units, not 20x SU7
    const deterministic20 = ExamMod.generateCustomExam(DATA.questions, {
      units: allUnits,
      questionCount: 20,
      targetMarks: 0,
      useWeightedDistribution: false,
      randomize: false
    });
    assert.equal(deterministic20.length, 20);
    const detUnits = new Set(deterministic20.map(q => q.su));
    assert.equal(detUnits.size, 7, `Expected all 7 SUs represented, got: ${[...detUnits]}`);
  });

  it('enforces numeric estimatedDifficulty, unique distractorRationale, and zero textbook citations across all 585 questions', () => {
    assert.equal(DATA.questions.length, 585);
    const citationRe = /\bch(?:apters?|\.)?\s+\d|\bch\.\d|\bshneiderman\s+ch\b|\bvisual\s+c#\s+ch\b/i;
    const rationales = new Set();

    for (const q of DATA.questions) {
      assert.equal(typeof q.estimatedDifficulty, 'number', `${q.id} missing numeric estimatedDifficulty`);
      assert.ok(q.estimatedDifficulty >= 0.15 && q.estimatedDifficulty <= 0.95, `${q.id} out-of-range estimatedDifficulty`);
      assert.equal(typeof q.distractorRationale, 'string', `${q.id} missing distractorRationale`);
      assert.ok(q.distractorRationale.trim().length >= 25, `${q.id} distractorRationale too short`);
      const normDr = q.distractorRationale.trim().toLowerCase();
      assert.equal(rationales.has(normDr), false, `${q.id} has duplicate distractorRationale`);
      rationales.add(normDr);

      const textBlob = [q.stem, q.explanation, q.distractorRationale, ...(q.options || [])].join(' ');
      assert.equal(citationRe.test(textBlob), false, `${q.id} still contains textbook chapter citation`);
    }
  });

  it('defines matching methodSignature and methodHeader across all 15 CodeGrade scenarios', () => {
    const keys = Object.keys(DATA.codeScenarios || {});
    assert.equal(keys.length, 15);
    const norm = s => String(s || '').replace(/\s*\{\s*$/, '').trim();
    for (const key of keys) {
      const sc = DATA.codeScenarios[key];
      assert.ok(sc.methodSignature && sc.methodHeader, `${key} missing signature/header`);
      assert.equal(norm(sc.methodSignature), norm(sc.methodHeader), `${key} signature/header mismatch`);
    }
    assert.match(DATA.codeScenarios.scenario_racing_light.methodSignature, /btnStop_Click/);
    assert.match(DATA.codeScenarios.scenario_file_sales.methodSignature, /btnSaveSale_Click/);
    assert.match(DATA.codeScenarios.scenario_multiform_dispatch.methodSignature, /btnShowSummary_Click/);
  });
});


