/**
 * NWU CMPG122 — Progress, Revision Analytics & Error-Correction Engine
 * Computes genuine, non-fabricated statistics, weak-topic diagnostics,
 * code-tracing/time-management trends, and smart related-question recommendations.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_ANALYTICS = api;
    if (root.window) root.window.CMPG122_ANALYTICS = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const CODE_TRACING_TYPES = new Set(['code-tracing', 'code-output', 'debugging', 'method-execution', 'loop-execution']);

  function computeAnalytics(state, data) {
    const units = (data && data.units) || [];
    const questions = (data && data.questions) || [];
    const qMap = new Map(questions.map(q => [q.id, q]));
    const history = (state && state.questionHistory) || {};
    const completedTopics = (state && state.completedTopics) || {};
    const flaggedMap = (state && state.flaggedQuestions) || {};
    const understoodMap = (state && state.understoodQuestions) || {};
    const examResults = Array.isArray(state && state.examResults) ? state.examResults : [];

    let totalAttempts = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let uniqueAttempted = 0;
    let uniqueMastered = 0;

    const unitStats = {};
    for (const u of units) {
      unitStats[u.id] = {
        id: u.id,
        shortTitle: u.shortTitle || u.title,
        title: u.title,
        examWeightPct: u.examWeightPct || 10,
        accentColor: u.accentColor || '#8b5cf6',
        iconId: u.iconId || 'study',
        totalTopics: (u.structuredTopics || []).length,
        completedTopics: (u.structuredTopics || []).filter(t => Boolean(completedTopics[t.id])).length,
        totalQuestions: 0,
        attemptedQuestions: 0,
        masteredQuestions: 0,
        attempts: 0,
        correct: 0,
        incorrect: 0,
        accuracyPct: null,
        progressPct: 0
      };
    }

    const topicStats = {};
    for (const u of units) {
      for (const t of (u.structuredTopics || [])) {
        topicStats[t.id] = {
          id: t.id,
          su: u.id,
          title: t.title,
          completed: Boolean(completedTopics[t.id]),
          totalQuestions: 0,
          attemptedQuestions: 0,
          attempts: 0,
          correct: 0,
          incorrect: 0,
          lastPracticedAt: 0,
          accuracyPct: null
        };
      }
    }

    for (const q of questions) {
      if (unitStats[q.su]) unitStats[q.su].totalQuestions += 1;
      if (topicStats[q.topic]) topicStats[q.topic].totalQuestions += 1;
    }

    const incorrectQueue = [];
    const repeatedMistakes = [];
    let tracingAttempts = 0;
    let tracingCorrect = 0;

    for (const [qId, h] of Object.entries(history)) {
      if (!h || !h.attempts) continue;
      const q = qMap.get(qId);
      const su = (q && q.su) || h.su;
      const topic = (q && q.topic) || h.topic;
      const qType = (q && q.questionType) || h.questionType;

      uniqueAttempted += 1;
      totalAttempts += h.attempts;
      totalCorrect += h.correct;
      totalIncorrect += h.incorrect;
      if (h.isCorrect) uniqueMastered += 1;

      if (CODE_TRACING_TYPES.has(qType)) {
        tracingAttempts += h.attempts;
        tracingCorrect += h.correct;
      }

      if (su && unitStats[su]) {
        const us = unitStats[su];
        us.attemptedQuestions += 1;
        if (h.isCorrect) us.masteredQuestions += 1;
        us.attempts += h.attempts;
        us.correct += h.correct;
        us.incorrect += h.incorrect;
      }

      if (topic && topicStats[topic]) {
        const ts = topicStats[topic];
        ts.attemptedQuestions += 1;
        ts.attempts += h.attempts;
        ts.correct += h.correct;
        ts.incorrect += h.incorrect;
        if ((h.lastAttemptAt || 0) > ts.lastPracticedAt) {
          ts.lastPracticedAt = h.lastAttemptAt;
        }
      }

      if ((!h.isCorrect || h.incorrect > 0) && !understoodMap[qId] && q) {
        if (!h.isCorrect) {
          incorrectQueue.push({ question: q, history: h });
        }
        if (h.incorrect >= 2) {
          repeatedMistakes.push({ question: q, history: h });
        }
      }
    }

    // Finalise per-unit progress & accuracy
    let totalTopicCount = 0;
    let doneTopicCount = 0;
    for (const u of units) {
      const us = unitStats[u.id];
      totalTopicCount += us.totalTopics;
      doneTopicCount += us.completedTopics;
      if (us.attempts > 0) {
        us.accuracyPct = Math.round((us.correct / us.attempts) * 100);
      }
      const topicRatio = us.totalTopics > 0 ? us.completedTopics / us.totalTopics : 0;
      // Target 20 mastered questions or full bank (whichever is smaller) for 100% practice mastery per SU
      const qTarget = Math.max(1, Math.min(20, us.totalQuestions));
      const qRatio = Math.min(1, us.masteredQuestions / qTarget);
      us.progressPct = Math.round((topicRatio * 0.5 + qRatio * 0.5) * 100);
    }

    for (const ts of Object.values(topicStats)) {
      if (ts.attempts > 0) {
        ts.accuracyPct = Math.round((ts.correct / ts.attempts) * 100);
      }
    }

    const overallProgressPct = units.length > 0
      ? Math.round(units.reduce((acc, u) => acc + unitStats[u.id].progressPct, 0) / units.length)
      : 0;

    const accuracyPct = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null;
    const hasActivity = totalAttempts > 0 || doneTopicCount > 0 || examResults.length > 0;

    // 1. Weakest Study Unit (among attempted units)
    const attemptedUnits = Object.values(unitStats).filter(u => u.attempts > 0);
    attemptedUnits.sort((a, b) => (a.accuracyPct - b.accuracyPct) || (b.incorrect - a.incorrect));
    const weakestUnit = attemptedUnits.length > 0 ? attemptedUnits[0] : null;

    // 2. Topics repeatedly producing incorrect answers
    const weakTopics = Object.values(topicStats)
      .filter(t => t.incorrect > 0)
      .sort((a, b) => (b.incorrect - a.incorrect) || ((a.accuracyPct ?? 100) - (b.accuracyPct ?? 100)))
      .slice(0, 6);

    // 3. Unpractised or stale topics (>7 days ago or 0 attempts)
    const sevenDaysAgo = Date.now() - 7 * 24 * 3600 * 1000;
    const unpractisedTopics = Object.values(topicStats)
      .filter(t => t.attempts === 0 || t.lastPracticedAt < sevenDaysAgo)
      .slice(0, 8);

    // 4. Exam trend & time-management insight
    let examDeltaPct = null;
    let pacingTrend = null;
    if (examResults.length >= 2) {
      const first = examResults[0];
      const latest = examResults[examResults.length - 1];
      examDeltaPct = latest.percentage - first.percentage;
      const firstQCount = Math.max(1, first.correctCount + first.incorrectCount + first.unansweredCount);
      const latestQCount = Math.max(1, latest.correctCount + latest.incorrectCount + latest.unansweredCount);
      const firstSecPerQ = first.durationSeconds / firstQCount;
      const latestSecPerQ = latest.durationSeconds / latestQCount;
      pacingTrend = {
        firstSecPerQ: Math.round(firstSecPerQ),
        latestSecPerQ: Math.round(latestSecPerQ),
        improving: latestSecPerQ <= firstSecPerQ && latest.unansweredCount <= first.unansweredCount
      };
    }

    // 5. Flagged, Unanswered & Understood queues
    const unansweredMap = (state && state.unansweredQuestions) || {};
    const unansweredQueue = Object.keys(unansweredMap)
      .filter(id => unansweredMap[id] && !understoodMap[id] && qMap.has(id))
      .map(id => qMap.get(id));

    const flaggedQueue = Object.keys(flaggedMap)
      .filter(id => flaggedMap[id] && qMap.has(id))
      .map(id => qMap.get(id));

    const understoodQueue = Object.keys(understoodMap)
      .filter(id => understoodMap[id] && qMap.has(id))
      .map(id => qMap.get(id));

    // Unattempted questions across bank
    const unattemptedCount = Math.max(0, questions.length - uniqueAttempted);

    return {
      hasActivity,
      overallProgressPct,
      totalQuestionsBank: questions.length,
      uniqueAttempted,
      uniqueMastered,
      unattemptedCount,
      totalAttempts,
      totalCorrect,
      totalIncorrect,
      accuracyPct,
      completedTopicsCount: doneTopicCount,
      totalTopicsCount: totalTopicCount,
      studyTimeSeconds: (state && state.studyTimeSeconds) || 0,
      unitStats,
      topicStats,
      weakestUnit,
      weakTopics,
      repeatedMistakes,
      unpractisedTopics,
      codeTracingAccuracyPct: tracingAttempts > 0 ? Math.round((tracingCorrect / tracingAttempts) * 100) : null,
      codeTracingAttempts: tracingAttempts,
      examResults,
      examDeltaPct,
      pacingTrend,
      incorrectQueue,
      unansweredQueue,
      flaggedQueue,
      understoodQueue,
      recentActivity: (state && state.recentActivity) || []
    };
  }

  /**
   * Finds related/similar questions on the SAME topic or Study Unit while
   * strictly excluding the source question ID so learners practise fresh problems.
   */
  function getSimilarQuestions(sourceQuestion, allQuestions, historyMap = {}, limit = 5) {
    if (!sourceQuestion || !Array.isArray(allQuestions)) return [];
    const sameTopic = [];
    const sameSu = [];
    for (const q of allQuestions) {
      if (q.id === sourceQuestion.id) continue;
      if (q.topic === sourceQuestion.topic) {
        sameTopic.push(q);
      } else if (q.su === sourceQuestion.su) {
        sameSu.push(q);
      }
    }
    const rank = (arr) => arr.slice().sort((a, b) => {
      const aSeen = historyMap[a.id] ? 1 : 0;
      const bSeen = historyMap[b.id] ? 1 : 0;
      return aSeen - bSeen;
    });
    return [...rank(sameTopic), ...rank(sameSu)].slice(0, limit);
  }

  return {
    computeAnalytics,
    getSimilarQuestions
  };
});
