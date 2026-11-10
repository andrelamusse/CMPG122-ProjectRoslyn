/**
 * NWU CMPG122 — Standalone Examination & Practice Engine Subsystem
 * Implements per-question state tracking, timestamp-accurate countdown timer
 * with pause/refresh recovery, mark-weighted exam generation, custom quiz
 * generation, and comprehensive unit/topic result diagnostics.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_EXAM_ENGINE = api;
    if (root.window) root.window.CMPG122_EXAM_ENGINE = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const DEFAULT_WEIGHTS = {
    SU7: 10,
    SU1: 10,
    SU2: 15,
    SU3: 20,
    SU4: 20,
    SU5: 15,
    SU6: 10
  };

  function createRng(seed) {
    if (typeof seed !== 'number') return Math.random;
    let s = seed >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  function shuffleArray(arr, rng = Math.random) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function evaluateObjectiveQuestion(question, selectedIndex) {
    if (!question || typeof selectedIndex !== 'number' || selectedIndex < 0) {
      return {
        answered: false,
        isCorrect: false,
        earnedMarks: 0,
        maxMarks: Number(question && question.marks) || 2
      };
    }
    const correctIdx = question.answer !== undefined ? question.answer : question.ans;
    const maxMarks = Number(question.marks) || 2;
    const isCorrect = selectedIndex === correctIdx;
    return {
      answered: true,
      isCorrect,
      earnedMarks: isCorrect ? maxMarks : 0,
      maxMarks
    };
  }

  /**
   * Selects questions so each Study Unit contributes marks matching `allocations`
   * (e.g. 100-mark Full Exam -> SU7:10, SU1:10, SU2:15, SU3:20, SU4:20, SU5:15, SU6:10).
   */
  function generateWeightedExam(allQuestions, allocations = DEFAULT_WEIGHTS, targetMarks = 100, options = {}) {
    const rng = createRng(options.seed);
    const excludeSet = new Set(options.excludeIds || []);
    const pool = (allQuestions || []).filter(q => !q.examPaperId && !excludeSet.has(q.id));
    const fallbackPool = (allQuestions || []).filter(q => !excludeSet.has(q.id));
    const activePool = pool.length >= 30 ? pool : fallbackPool;

    const weightEntries = Object.entries(allocations).filter(([, w]) => w > 0);
    const weightSum = weightEntries.reduce((s, [, w]) => s + w, 0) || 100;

    const selected = [];
    const usedIds = new Set();

    for (const [su, weight] of weightEntries) {
      const unitTargetMarks = Math.max(2, Math.round((weight / weightSum) * targetMarks));
      const candidates = shuffleArray(activePool.filter(q => q.su === su), rng);
      let unitMarks = 0;

      // Greedily pick questions to match unitTargetMarks closely
      for (const q of candidates) {
        if (usedIds.has(q.id)) continue;
        const m = Number(q.marks) || 2;
        if (unitMarks + m <= unitTargetMarks) {
          selected.push(q);
          usedIds.add(q.id);
          unitMarks += m;
          if (unitMarks === unitTargetMarks) break;
        }
      }

      // If 1 mark short (e.g. odd target like 15 with 2/3/4-mark items), swap or top up cleanly
      if (unitMarks < unitTargetMarks) {
        const diffNeeded = unitTargetMarks - unitMarks;
        const exact = candidates.find(q => !usedIds.has(q.id) && (Number(q.marks) || 2) === diffNeeded);
        if (exact) {
          selected.push(exact);
          usedIds.add(exact.id);
        } else if (diffNeeded === 1 && selected.length > 0) {
          // Swap a 2-mark question in this SU for a 3-mark question (or 3 for 4) to hit exact target!
          const swapIdx = selected.findIndex(sq => sq.su === su && (Number(sq.marks) || 2) === 2);
          const threeMark = candidates.find(q => !usedIds.has(q.id) && (Number(q.marks) || 2) === 3);
          if (swapIdx !== -1 && threeMark) {
            usedIds.delete(selected[swapIdx].id);
            selected[swapIdx] = threeMark;
            usedIds.add(threeMark.id);
          } else {
            const swap3 = selected.findIndex(sq => sq.su === su && (Number(sq.marks) || 2) === 3);
            const fourMark = candidates.find(q => !usedIds.has(q.id) && (Number(q.marks) || 2) === 4);
            if (swap3 !== -1 && fourMark) {
              usedIds.delete(selected[swap3].id);
              selected[swap3] = fourMark;
              usedIds.add(fourMark.id);
            }
          }
        }
      }
    }

    return options.preserveUnitOrder ? selected : shuffleArray(selected, rng);
  }

  /**
   * Custom Examination & Practice Generator supporting Study Units, Topics,
   * Difficulty, Question Count / Target Marks, Weighting, Randomisation, and Exclusions.
   */
  function generateCustomExam(allQuestions, config = {}) {
    const rng = createRng(config.seed);
    const units = Array.isArray(config.units) && config.units.length > 0 ? new Set(config.units) : null;
    const topics = Array.isArray(config.topics) && config.topics.length > 0 ? new Set(config.topics) : null;
    const difficulties = Array.isArray(config.difficulties) && config.difficulties.length > 0 ? new Set(config.difficulties) : null;
    const excludeIds = new Set(config.excludeIds || []);
    const randomize = config.randomize !== false;

    let candidates = (allQuestions || []).filter(q => {
      if (excludeIds.has(q.id)) return false;
      if (units && !units.has(q.su)) return false;
      if (topics && !topics.has(q.topic)) return false;
      if (difficulties && !difficulties.has(q.difficulty)) return false;
      return true;
    });

    // Fallback without exclusions if exclusion emptied the matching pool
    if (candidates.length === 0 && excludeIds.size > 0) {
      candidates = (allQuestions || []).filter(q => {
        if (units && !units.has(q.su)) return false;
        if (topics && !topics.has(q.topic)) return false;
        if (difficulties && !difficulties.has(q.difficulty)) return false;
        return true;
      });
    }

    if (config.useWeightedDistribution && (!topics || topics.size === 0)) {
      const subWeights = {};
      for (const [su, w] of Object.entries(DEFAULT_WEIGHTS)) {
        if (!units || units.has(su)) subWeights[su] = w;
      }
      if (config.targetMarks && Number(config.targetMarks) >= 10) {
        return generateWeightedExam(candidates, subWeights, Number(config.targetMarks), {
          seed: config.seed,
          preserveUnitOrder: !randomize
        });
      }
    }

    const ordered = randomize ? shuffleArray(candidates, rng) : candidates.slice();

    if (config.targetMarks && Number(config.targetMarks) > 0 && !config.questionCount) {
      const targetM = Number(config.targetMarks);
      const picked = [];
      let sum = 0;
      for (const q of ordered) {
        const m = Number(q.marks) || 2;
        if (sum + m <= targetM || picked.length === 0) {
          picked.push(q);
          sum += m;
          if (sum >= targetM) break;
        }
      }
      return picked;
    }

    const count = Math.max(1, Math.min(ordered.length, Number(config.questionCount) || 15));
    return ordered.slice(0, count);
  }

  class ExamSession {
    constructor(options = {}) {
      this.id = options.id || `session_${Date.now()}`;
      this.mode = options.mode || 'practice'; // 'practice' | 'custom_quiz' | 'full_exam' | 'past_paper' | 'review'
      this.title = options.title || 'Practice Session';
      this.layout = options.layout || (this.mode === 'past_paper' ? 'continuous' : 'card');
      this.allowInstantSubmit = options.allowInstantSubmit !== undefined
        ? Boolean(options.allowInstantSubmit)
        : (this.mode === 'practice' || this.mode === 'custom_quiz' || this.mode === 'review');
      this.scenarioHtml = options.scenarioHtml || '';
      this.examPaperId = options.examPaperId || null;

      const questions = Array.isArray(options.questions) ? options.questions : [];
      this.questions = questions;
      this.questionMap = new Map(questions.map(q => [q.id, q]));
      this.questionIds = questions.map(q => q.id);

      this.currentIndex = Math.max(0, Math.min(Math.max(0, questions.length - 1), Number(options.currentIndex) || 0));
      this.isCompleted = Boolean(options.isCompleted);
      this.isReviewMode = Boolean(options.isReviewMode);

      // Timer state (timestamp-based for exact refresh & background-tab accuracy)
      const now = options.nowMs || Date.now();
      this.timed = Boolean(options.durationMinutes && Number(options.durationMinutes) > 0);
      this.durationMs = this.timed ? Math.round(Number(options.durationMinutes) * 60 * 1000) : 0;
      this.startedAtMs = Number(options.startedAtMs) || now;
      this.pausedAtMs = options.pausedAtMs ? Number(options.pausedAtMs) : null;
      this.accumulatedPausedMs = Number(options.accumulatedPausedMs) || 0;
      this.completedAtMs = options.completedAtMs ? Number(options.completedAtMs) : null;

      // Per-question state dictionary
      this.states = {};
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const saved = (options.states && options.states[q.id]) || null;
        this.states[q.id] = {
          status: saved ? saved.status : (i === this.currentIndex ? 'seen' : 'unseen'),
          outcome: saved ? saved.outcome : null,
          selectedAnswer: saved && typeof saved.selectedAnswer === 'number' ? saved.selectedAnswer : null,
          flagged: saved ? Boolean(saved.flagged) : false,
          earnedMarks: saved && typeof saved.earnedMarks === 'number' ? saved.earnedMarks : 0,
          maxMarks: Number(q.marks) || 2,
          submittedAtMs: saved ? (saved.submittedAtMs || null) : null
        };
      }

      this.finalResult = options.finalResult || null;
    }

    getCurrentQuestion() {
      return this.questions[this.currentIndex] || null;
    }

    getQuestionState(questionId) {
      return this.states[questionId] || null;
    }

    goToIndex(index) {
      if (index < 0 || index >= this.questions.length) return this.currentIndex;
      this.currentIndex = index;
      const q = this.questions[index];
      if (q && this.states[q.id] && this.states[q.id].status === 'unseen') {
        this.states[q.id].status = 'seen';
      }
      return this.currentIndex;
    }

    selectOption(questionId, optionIndex) {
      if (this.isCompleted) return false;
      const q = this.questionMap.get(questionId);
      const st = this.states[questionId];
      if (!q || !st) return false;
      // In single-card instant practice mode, once submitted do not overwrite graded answer
      if (this.allowInstantSubmit && st.status === 'submitted') return false;
      const opts = q.options || q.opts || [];
      if (typeof optionIndex !== 'number' || optionIndex < 0 || optionIndex >= opts.length) return false;

      st.selectedAnswer = optionIndex;
      if (st.status !== 'submitted') {
        st.status = 'answered_unsubmitted';
      }
      return true;
    }

    submitSingleQuestion(questionId, nowMs = Date.now()) {
      if (this.isCompleted) return null;
      const q = this.questionMap.get(questionId);
      const st = this.states[questionId];
      if (!q || !st) return null;
      if (st.status === 'submitted') {
        // Prevent duplicate submissions from re-scoring
        return { ...st, duplicate: true };
      }
      if (typeof st.selectedAnswer !== 'number') {
        return null;
      }

      const evalRes = evaluateObjectiveQuestion(q, st.selectedAnswer);
      st.status = 'submitted';
      st.outcome = evalRes.isCorrect ? 'correct' : 'incorrect';
      st.earnedMarks = evalRes.earnedMarks;
      st.maxMarks = evalRes.maxMarks;
      st.submittedAtMs = nowMs;
      return { ...st, duplicate: false, question: q };
    }

    toggleFlag(questionId) {
      const st = this.states[questionId];
      if (!st) return false;
      st.flagged = !st.flagged;
      return st.flagged;
    }

    pauseTimer(nowMs = Date.now()) {
      if (!this.timed || this.isCompleted || this.pausedAtMs !== null) return;
      this.pausedAtMs = nowMs;
    }

    resumeTimer(nowMs = Date.now()) {
      if (!this.timed || this.isCompleted || this.pausedAtMs === null) return;
      this.accumulatedPausedMs += Math.max(0, nowMs - this.pausedAtMs);
      this.pausedAtMs = null;
    }

    getElapsedSeconds(nowMs = Date.now()) {
      const endRef = this.completedAtMs || this.pausedAtMs || nowMs;
      const activeMs = Math.max(0, (endRef - this.startedAtMs) - this.accumulatedPausedMs);
      return Math.floor(activeMs / 1000);
    }

    getRemainingSeconds(nowMs = Date.now()) {
      if (!this.timed) return null;
      const endRef = this.completedAtMs || this.pausedAtMs || nowMs;
      const activeMs = Math.max(0, (endRef - this.startedAtMs) - this.accumulatedPausedMs);
      const remMs = Math.max(0, this.durationMs - activeMs);
      return Math.ceil(remMs / 1000);
    }

    isTimeExpired(nowMs = Date.now()) {
      if (!this.timed) return false;
      return this.getRemainingSeconds(nowMs) <= 0;
    }

    getPreSubmitSummary() {
      const unansweredNumbers = [];
      const flaggedNumbers = [];
      let answeredCount = 0;

      this.questions.forEach((q, idx) => {
        const st = this.states[q.id];
        const hasAns = st && typeof st.selectedAnswer === 'number';
        if (hasAns) answeredCount += 1;
        else unansweredNumbers.push({ index: idx, number: idx + 1, id: q.id });
        if (st && st.flagged) flaggedNumbers.push({ index: idx, number: idx + 1, id: q.id });
      });

      return {
        totalQuestions: this.questions.length,
        answeredCount,
        unansweredCount: unansweredNumbers.length,
        unansweredNumbers,
        flaggedCount: flaggedNumbers.length,
        flaggedNumbers
      };
    }

    submitExamination(nowMs = Date.now()) {
      if (this.isCompleted && this.finalResult) {
        return this.finalResult;
      }

      if (this.pausedAtMs !== null) {
        this.resumeTimer(nowMs);
      }
      this.isCompleted = true;
      this.isReviewMode = true;
      this.completedAtMs = nowMs;

      let rawMarks = 0;
      let totalMarks = 0;
      let correctCount = 0;
      let incorrectCount = 0;
      let unansweredCount = 0;
      const byUnit = {};
      const byTopic = {};
      const detailedItems = [];

      for (let i = 0; i < this.questions.length; i++) {
        const q = this.questions[i];
        const st = this.states[q.id];
        const maxM = Number(q.marks) || 2;
        totalMarks += maxM;

        if (!byUnit[q.su]) {
          byUnit[q.su] = { su: q.su, earnedMarks: 0, totalMarks: 0, correct: 0, total: 0, percentage: 0 };
        }
        if (!byTopic[q.topic]) {
          byTopic[q.topic] = { topic: q.topic, title: q.topicTitle || q.topic, su: q.su, earnedMarks: 0, totalMarks: 0, correct: 0, total: 0, percentage: 0 };
        }
        byUnit[q.su].totalMarks += maxM;
        byUnit[q.su].total += 1;
        byTopic[q.topic].totalMarks += maxM;
        byTopic[q.topic].total += 1;

        if (typeof st.selectedAnswer === 'number') {
          const evalRes = evaluateObjectiveQuestion(q, st.selectedAnswer);
          st.status = 'submitted';
          st.outcome = evalRes.isCorrect ? 'correct' : 'incorrect';
          st.earnedMarks = evalRes.earnedMarks;
          st.submittedAtMs = st.submittedAtMs || nowMs;

          if (evalRes.isCorrect) {
            rawMarks += evalRes.earnedMarks;
            correctCount += 1;
            byUnit[q.su].earnedMarks += evalRes.earnedMarks;
            byUnit[q.su].correct += 1;
            byTopic[q.topic].earnedMarks += evalRes.earnedMarks;
            byTopic[q.topic].correct += 1;
          } else {
            incorrectCount += 1;
          }
        } else {
          st.status = 'submitted';
          st.outcome = 'incorrect';
          st.earnedMarks = 0;
          unansweredCount += 1;
        }

        detailedItems.push({
          number: i + 1,
          questionId: q.id,
          su: q.su,
          topic: q.topic,
          topicTitle: q.topicTitle,
          selectedAnswer: st.selectedAnswer,
          correctAnswer: q.answer !== undefined ? q.answer : q.ans,
          outcome: typeof st.selectedAnswer === 'number' ? st.outcome : 'unanswered',
          earnedMarks: st.earnedMarks,
          maxMarks: maxM,
          flagged: st.flagged
        });
      }

      for (const u of Object.values(byUnit)) {
        u.percentage = u.totalMarks > 0 ? Math.round((u.earnedMarks / u.totalMarks) * 100) : 0;
      }
      for (const t of Object.values(byTopic)) {
        t.percentage = t.totalMarks > 0 ? Math.round((t.earnedMarks / t.totalMarks) * 100) : 0;
      }

      const recommendedRevisionAreas = Object.values(byTopic)
        .filter(t => t.percentage < 70)
        .sort((a, b) => a.percentage - b.percentage)
        .slice(0, 5);

      const percentage = totalMarks > 0 ? Math.round((rawMarks / totalMarks) * 100) : 0;

      this.finalResult = {
        id: this.id,
        mode: this.mode,
        title: this.title,
        rawMarks,
        totalMarks,
        percentage,
        correctCount,
        incorrectCount,
        unansweredCount,
        durationSeconds: this.getElapsedSeconds(nowMs),
        completedAt: nowMs,
        byUnit,
        byTopic,
        recommendedRevisionAreas,
        detailedItems
      };

      return this.finalResult;
    }

    toSnapshot() {
      return {
        id: this.id,
        mode: this.mode,
        title: this.title,
        layout: this.layout,
        allowInstantSubmit: this.allowInstantSubmit,
        scenarioHtml: this.scenarioHtml,
        examPaperId: this.examPaperId,
        questionIds: this.questionIds,
        currentIndex: this.currentIndex,
        isCompleted: this.isCompleted,
        isReviewMode: this.isReviewMode,
        timed: this.timed,
        durationMinutes: this.timed ? this.durationMs / 60000 : 0,
        startedAtMs: this.startedAtMs,
        pausedAtMs: this.pausedAtMs,
        accumulatedPausedMs: this.accumulatedPausedMs,
        completedAtMs: this.completedAtMs,
        states: this.states,
        finalResult: this.finalResult
      };
    }

    static fromSnapshot(snapshot, allQuestions) {
      if (!snapshot || !Array.isArray(snapshot.questionIds)) return null;
      const qMap = new Map((allQuestions || []).map(q => [q.id, q]));
      const questions = snapshot.questionIds.map(id => qMap.get(id)).filter(Boolean);
      if (questions.length === 0) return null;
      return new ExamSession({
        ...snapshot,
        questions
      });
    }
  }

  function formatCountdown(totalSeconds) {
    const s = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    const pad = n => String(n).padStart(2, '0');
    return hrs > 0 ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
  }

  return {
    DEFAULT_WEIGHTS,
    evaluateObjectiveQuestion,
    generateWeightedExam,
    generateCustomExam,
    ExamSession,
    formatCountdown
  };
});
