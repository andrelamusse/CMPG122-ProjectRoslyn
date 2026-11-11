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

  function isCodingQuestion(question) {
    if (!question) return false;
    const qt = question.questionType || question.type;
    return qt === 'short-answer' ||
      qt === 'code-cloze' ||
      qt === 'code-snippet' ||
      qt === 'code-full';
  }

  function hasQuestionResponse(question, state) {
    if (!question || !state) return false;
    if (!isCodingQuestion(question)) {
      return typeof state.selectedAnswer === 'number' && state.selectedAnswer >= 0;
    }
    if (question.questionType === 'code-cloze') {
      if (!state.clozeAnswers || typeof state.clozeAnswers !== 'object') return false;
      return Object.values(state.clozeAnswers).some(v => String(v || '').trim().length > 0);
    }
    const code = typeof state.codeAnswer === 'string' ? state.codeAnswer.trim() : '';
    if (!code) return false;
    const starter = typeof question.starterCode === 'string' ? question.starterCode.trim() : '';
    if (starter && code === starter) return false;
    const strippedComments = code.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, '').trim();
    return strippedComments.length > 0;
  }

  function resolveCSharpEngine(explicitEngine) {
    if (explicitEngine) return explicitEngine;
    if (typeof globalThis !== 'undefined' && globalThis.CSharpEngine) return globalThis.CSharpEngine;
    if (typeof window !== 'undefined' && window.CSharpEngine) return window.CSharpEngine;
    if (typeof require === 'function') {
      try {
        return require('../csharp_engine.js');
      } catch (_e) {
        return null;
      }
    }
    return null;
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

  function evaluateQuestion(question, state, explicitEngine = null) {
    if (!question) {
      return { answered: false, isCorrect: false, isPartial: false, earnedMarks: 0, maxMarks: 2, gradingResult: null };
    }
    if (!isCodingQuestion(question)) {
      return evaluateObjectiveQuestion(question, state ? state.selectedAnswer : null);
    }
    const maxMarks = Number(question.marks) || 5;
    if (!hasQuestionResponse(question, state)) {
      return {
        answered: false,
        isCorrect: false,
        isPartial: false,
        earnedMarks: 0,
        maxMarks,
        gradingResult: null
      };
    }
    const engine = resolveCSharpEngine(explicitEngine);
    if (!engine) {
      return {
        answered: true,
        isCorrect: false,
        isPartial: false,
        earnedMarks: 0,
        maxMarks,
        gradingResult: null
      };
    }
    const qt = question.questionType || question.type;
    const gradingResult = qt === 'code-cloze'
      ? engine.evaluateClozeQuestion(question, (state && state.clozeAnswers) || {}, { revealSolution: true })
      : (qt === 'short-answer' && typeof engine.evaluateShortAnswerQuestion === 'function')
        ? engine.evaluateShortAnswerQuestion(question, (state && state.codeAnswer) || '', { revealSolution: true })
        : engine.evaluateCodingQuestion(question, (state && state.codeAnswer) || '', { revealSolution: true });

    return {
      answered: true,
      isCorrect: Boolean(gradingResult.isCorrect),
      isPartial: Boolean(gradingResult.isPartial),
      earnedMarks: Number(gradingResult.earnedMarks) || 0,
      maxMarks: Number(gradingResult.maxMarks) || maxMarks,
      gradingResult
    };
  }

  const UNIT_ORDER = ['SU7', 'SU1', 'SU2', 'SU3', 'SU4', 'SU5', 'SU6'];

  /**
   * Proportional largest-remainder (Hamilton) integer allocator with optional per-key caps and minimum floor.
   */
  function allocateProportionalCounts(weightEntries, totalTarget, capsByKey = null, minPerActive = 0) {
    const active = (weightEntries || []).filter(([k, w]) => w > 0 && (!capsByKey || (capsByKey[k] || 0) > 0));
    const result = {};
    if (active.length === 0 || totalTarget <= 0) return result;

    const maxPossible = capsByKey
      ? active.reduce((s, [k]) => s + (capsByKey[k] || 0), 0)
      : Infinity;
    const target = Math.min(totalTarget, maxPossible);
    const weightSum = active.reduce((s, [, w]) => s + w, 0) || 1;

    const items = active.map(([k, w], idx) => {
      const exact = (w / weightSum) * target;
      const cap = capsByKey ? (capsByKey[k] || 0) : Infinity;
      const floorVal = Math.min(cap, Math.floor(exact));
      return { key: k, weight: w, idx, exact, cap, count: floorVal, rem: exact - Math.floor(exact) };
    });

    // Enforce minPerActive when total budget can accommodate at least minPerActive per active unit
    if (minPerActive > 0 && target >= items.length * minPerActive) {
      for (const it of items) {
        const minWanted = Math.min(it.cap, minPerActive);
        if (it.count < minWanted) it.count = minWanted;
      }
      // If raising floors pushed sum above target, trim from units that exceed minPerActive with lowest exact surplus
      let currentSum = items.reduce((s, it) => s + it.count, 0);
      while (currentSum > target) {
        const trimmable = items
          .filter(it => it.count > Math.min(it.cap, minPerActive))
          .sort((a, b) => (a.exact - a.count) - (b.exact - b.count));
        if (trimmable.length === 0) break;
        trimmable[0].count -= 1;
        currentSum -= 1;
      }
    }

    let assigned = items.reduce((s, it) => s + it.count, 0);
    while (assigned < target) {
      const eligible = items
        .filter(it => it.count < it.cap)
        .sort((a, b) => (b.rem - a.rem) || (b.weight - a.weight) || (a.idx - b.idx));
      if (eligible.length === 0) break;
      let progressed = false;
      for (const it of eligible) {
        if (assigned >= target) break;
        if (it.count < it.cap) {
          it.count += 1;
          assigned += 1;
          progressed = true;
        }
      }
      if (!progressed) break;
    }

    for (const it of items) {
      result[it.key] = it.count;
    }
    return result;
  }

  /**
   * Interleaves grouped question arrays round-robin across Study Units so non-randomized
   * multi-unit sessions represent every selected Study Unit evenly from Question 1 onward.
   */
  function interleaveByUnit(questions, unitOrder = UNIT_ORDER) {
    const buckets = new Map();
    for (const u of unitOrder) buckets.set(u, []);
    for (const q of questions) {
      if (!buckets.has(q.su)) buckets.set(q.su, []);
      buckets.get(q.su).push(q);
    }
    const activeBuckets = [...buckets.values()].filter(arr => arr.length > 0);
    if (activeBuckets.length <= 1) return questions.slice();

    const out = [];
    let depth = 0;
    let added = true;
    while (added) {
      added = false;
      for (const arr of activeBuckets) {
        if (depth < arr.length) {
          out.push(arr[depth]);
          added = true;
        }
      }
      depth += 1;
    }
    return out;
  }

  /**
   * Selects questions so each Study Unit contributes marks matching `allocations`
   * (e.g. 100-mark Full Exam -> SU7:10, SU1:10, SU2:15, SU3:20, SU4:20, SU5:15, SU6:10).
   */
  function generateWeightedExam(allQuestions, allocations = DEFAULT_WEIGHTS, targetMarks = 100, options = {}) {
    const rng = createRng(options.seed);
    const excludeSet = new Set(options.excludeIds || []);
    const directPool = (allQuestions || []).filter(q => isCodingQuestion(q) && !excludeSet.has(q.id));
    const pool = (allQuestions || []).filter(q => !q.examPaperId && !excludeSet.has(q.id));
    const fallbackPool = (allQuestions || []).filter(q => !excludeSet.has(q.id));
    const activePool = (options.preferDirectExamFormat && directPool.length >= 15)
      ? directPool
      : (pool.length >= 30 ? pool : fallbackPool);

    const availMarksBySu = {};
    for (const q of activePool) {
      availMarksBySu[q.su] = (availMarksBySu[q.su] || 0) + (Number(q.marks) || 2);
    }
    const weightEntries = Object.entries(allocations).filter(([su, w]) => w > 0 && (availMarksBySu[su] || 0) > 0);
    const targetBySu = allocateProportionalCounts(
      weightEntries,
      targetMarks,
      availMarksBySu,
      targetMarks >= weightEntries.length * 2 ? 2 : 0
    );

    const selected = [];
    const usedIds = new Set();

    const unitSelectedMarks = {};
    for (const [su] of weightEntries) {
      unitSelectedMarks[su] = 0;
      const unitTargetMarks = targetBySu[su] || 0;
      if (unitTargetMarks <= 0) continue;
      const suPool = activePool.filter(q => q.su === su);
      const candidates = options.randomize === false ? suPool.slice() : shuffleArray(suPool, rng);
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

      // If short of unitTargetMarks, top up with an exact match, 1-for-1 swap, or 1-for-2 swap
      if (unitMarks < unitTargetMarks) {
        const diffNeeded = unitTargetMarks - unitMarks;
        const exact = candidates.find(q => !usedIds.has(q.id) && (Number(q.marks) || 2) === diffNeeded);
        if (exact) {
          selected.push(exact);
          usedIds.add(exact.id);
          unitMarks += diffNeeded;
        } else if (diffNeeded > 0 && selected.length > 0) {
          let swapped = false;
          for (let sIdx = 0; sIdx < selected.length; sIdx++) {
            if (selected[sIdx].su !== su) continue;
            const oldM = Number(selected[sIdx].marks) || 2;
            const wantM = oldM + diffNeeded;
            const replacement = candidates.find(q => !usedIds.has(q.id) && (Number(q.marks) || 2) === wantM);
            if (replacement) {
              usedIds.delete(selected[sIdx].id);
              selected[sIdx] = replacement;
              usedIds.add(replacement.id);
              unitMarks += diffNeeded;
              swapped = true;
              break;
            }
          }
          if (!swapped) {
            const unused = candidates.filter(q => !usedIds.has(q.id));
            for (let sIdx = 0; sIdx < selected.length && !swapped; sIdx++) {
              if (selected[sIdx].su !== su) continue;
              const wantPair = (Number(selected[sIdx].marks) || 2) + diffNeeded;
              for (let i = 0; i < unused.length && !swapped; i++) {
                const m1 = Number(unused[i].marks) || 2;
                if (m1 >= wantPair) continue;
                for (let j = i + 1; j < unused.length; j++) {
                  const m2 = Number(unused[j].marks) || 2;
                  if (m1 + m2 === wantPair) {
                    usedIds.delete(selected[sIdx].id);
                    selected[sIdx] = unused[i];
                    selected.push(unused[j]);
                    usedIds.add(unused[i].id);
                    usedIds.add(unused[j].id);
                    unitMarks += diffNeeded;
                    swapped = true;
                    break;
                  }
                }
              }
            }
          }
        }
      }
      unitSelectedMarks[su] = unitMarks;
    }

    // Cross-unit proportional shortfall top-up when item mark granularity (e.g. 4-mark Advanced items)
    // exceeds small per-SU sub-quotas (e.g. targetMarks = 6..30)
    let totalSelectedMarks = selected.reduce((s, q) => s + (Number(q.marks) || 2), 0);
    if (totalSelectedMarks < targetMarks && activePool.length > selected.length) {
      const weightSum = weightEntries.reduce((s, [, w]) => s + w, 0) || 1;
      const candidatesBySu = new Map();
      for (const [su] of weightEntries) {
        const suPool = activePool.filter(q => q.su === su && !usedIds.has(q.id));
        candidatesBySu.set(su, options.randomize === false ? suPool : shuffleArray(suPool, rng));
      }

      let progressed = true;
      while (totalSelectedMarks < targetMarks && progressed) {
        progressed = false;
        const rankedUnits = weightEntries
          .slice()
          .sort(([suA, wA], [suB, wB]) => {
            const defA = ((wA / weightSum) * targetMarks) - (unitSelectedMarks[suA] || 0);
            const defB = ((wB / weightSum) * targetMarks) - (unitSelectedMarks[suB] || 0);
            return (defB - defA) || (wB - wA);
          });

        for (const [su] of rankedUnits) {
          if (totalSelectedMarks >= targetMarks) break;
          const list = candidatesBySu.get(su) || [];
          const fitIdx = list.findIndex(q => !usedIds.has(q.id) && totalSelectedMarks + (Number(q.marks) || 2) <= targetMarks);
          if (fitIdx !== -1) {
            const chosen = list[fitIdx];
            const m = Number(chosen.marks) || 2;
            selected.push(chosen);
            usedIds.add(chosen.id);
            unitSelectedMarks[su] = (unitSelectedMarks[su] || 0) + m;
            totalSelectedMarks += m;
            progressed = true;
            break;
          }
        }
      }

      if (totalSelectedMarks < targetMarks) {
        const remDiff = targetMarks - totalSelectedMarks;
        for (let sIdx = 0; sIdx < selected.length; sIdx++) {
          const su = selected[sIdx].su;
          const oldM = Number(selected[sIdx].marks) || 2;
          const list = candidatesBySu.get(su) || [];
          const replacement = list.find(q => !usedIds.has(q.id) && (Number(q.marks) || 2) === oldM + remDiff);
          if (replacement) {
            usedIds.delete(selected[sIdx].id);
            selected[sIdx] = replacement;
            usedIds.add(replacement.id);
            unitSelectedMarks[su] = (unitSelectedMarks[su] || 0) + remDiff;
            totalSelectedMarks += remDiff;
            break;
          }
        }
      }

      // Guarantee at least 1 question when targetMarks > 0 is smaller than the minimum available item mark
      if (selected.length === 0 && activePool.length > 0) {
        const topSu = weightEntries.slice().sort((a, b) => b[1] - a[1])[0]?.[0];
        const fallbackList = (topSu && candidatesBySu.get(topSu)?.length) ? candidatesBySu.get(topSu) : activePool;
        const smallest = fallbackList.slice().sort((a, b) => (Number(a.marks) || 2) - (Number(b.marks) || 2))[0];
        if (smallest) selected.push(smallest);
      }
    }

    if (options.preserveUnitOrder) return selected;
    if (options.randomize === false) return interleaveByUnit(selected);
    return shuffleArray(selected, rng);
  }

  /**
   * Custom Examination & Practice Generator supporting Study Units, Topics,
   * Difficulty, Question Count / Target Marks, Weighting, Randomisation, and Exclusions.
   */
  function matchesFormatFilter(q, formatFilter) {
    if (!formatFilter || formatFilter === 'all') return true;
    const qType = q.questionType || 'mcq';
    if (Array.isArray(formatFilter)) {
      if (formatFilter.includes('all')) return true;
      if (formatFilter.includes('coding') && isCodingQuestion(q)) return true;
      return formatFilter.includes(qType);
    }
    if (formatFilter === 'mcq') return !isCodingQuestion(q);
    if (formatFilter === 'coding') return isCodingQuestion(q);
    return qType === formatFilter;
  }

  function orderMcqBeforeCoding(list) {
    if (!Array.isArray(list) || list.length <= 1) return list;
    const mcqs = list.filter(q => !isCodingQuestion(q));
    const coding = list.filter(q => isCodingQuestion(q));
    if (mcqs.length === 0 || coding.length === 0) return list;
    return [...mcqs, ...coding];
  }

  function generateCustomExam(allQuestions, config = {}) {
    const rng = createRng(config.seed);
    const orderedUnits = Array.isArray(config.units) && config.units.length > 0
      ? config.units.slice()
      : UNIT_ORDER.slice();
    const units = Array.isArray(config.units) && config.units.length > 0 ? new Set(config.units) : null;
    const topics = Array.isArray(config.topics) && config.topics.length > 0 ? new Set(config.topics) : null;
    const difficulties = Array.isArray(config.difficulties) && config.difficulties.length > 0 ? new Set(config.difficulties) : null;
    const excludeIds = new Set(config.excludeIds || []);
    const randomize = config.randomize !== false;
    const formatFilter = config.questionFormat || config.questionFormats || null;

    let candidates = (allQuestions || []).filter(q => {
      if (excludeIds.has(q.id)) return false;
      if (units && !units.has(q.su)) return false;
      if (topics && !topics.has(q.topic)) return false;
      if (difficulties && !difficulties.has(q.difficulty)) return false;
      if (formatFilter && !matchesFormatFilter(q, formatFilter)) return false;
      return true;
    });

    // Fallback without exclusions if exclusion emptied the matching pool
    if (candidates.length === 0 && excludeIds.size > 0) {
      candidates = (allQuestions || []).filter(q => {
        if (units && !units.has(q.su)) return false;
        if (topics && !topics.has(q.topic)) return false;
        if (difficulties && !difficulties.has(q.difficulty)) return false;
        if (formatFilter && !matchesFormatFilter(q, formatFilter)) return false;
        return true;
      });
    }

    if (candidates.length === 0) return [];

    const hasTopicFilter = Boolean(topics && topics.size > 0);
    const targetM = Number(config.targetMarks) || 0;
    const baseWeights = (config.allocations && typeof config.allocations === 'object')
      ? config.allocations
      : DEFAULT_WEIGHTS;

    if (config.useWeightedDistribution && !hasTopicFilter) {
      const subWeights = {};
      for (const su of orderedUnits) {
        if (baseWeights[su]) subWeights[su] = baseWeights[su];
      }
      for (const [su, w] of Object.entries(baseWeights)) {
        if ((!units || units.has(su)) && !subWeights[su]) subWeights[su] = w;
      }

      if (targetM > 0) {
        return generateWeightedExam(candidates, subWeights, targetM, {
          seed: config.seed,
          randomize,
          preserveUnitOrder: Boolean(config.preserveUnitOrder)
        });
      }

      // Question-count mode (e.g. targetMarks === 0) with weighted curriculum distribution!
      const desiredCount = Math.max(1, Math.min(candidates.length, Number(config.questionCount) || 15));
      const bySu = {};
      const caps = {};
      for (const q of candidates) {
        if (!bySu[q.su]) bySu[q.su] = [];
        bySu[q.su].push(q);
      }
      for (const [su, list] of Object.entries(bySu)) {
        caps[su] = list.length;
      }

      const weightEntries = Object.entries(subWeights).filter(([su, w]) => w > 0 && (caps[su] || 0) > 0);
      const activeUnitCount = weightEntries.length;
      const quotas = allocateProportionalCounts(
        weightEntries,
        desiredCount,
        caps,
        desiredCount >= activeUnitCount ? 1 : 0
      );

      const picked = [];
      for (const [su] of weightEntries) {
        const need = quotas[su] || 0;
        if (need <= 0) continue;
        const unitPool = randomize ? shuffleArray(bySu[su] || [], rng) : (bySu[su] || []).slice();
        picked.push(...unitPool.slice(0, need));
      }

      if (config.preserveUnitOrder) return orderMcqBeforeCoding(picked);
      const finalWeighted = randomize ? shuffleArray(picked, rng) : interleaveByUnit(picked, orderedUnits);
      return orderMcqBeforeCoding(finalWeighted);
    }

    const ordered = randomize
      ? shuffleArray(candidates, rng)
      : interleaveByUnit(candidates, orderedUnits);

    if (targetM > 0) {
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
      return orderMcqBeforeCoding(picked);
    }

    const count = Math.max(1, Math.min(ordered.length, Number(config.questionCount) || 15));
    return orderMcqBeforeCoding(ordered.slice(0, count));
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
          codeAnswer: saved && typeof saved.codeAnswer === 'string' ? saved.codeAnswer : (q.starterCode || ''),
          clozeAnswers: saved && saved.clozeAnswers && typeof saved.clozeAnswers === 'object' ? { ...saved.clozeAnswers } : {},
          gradingResult: saved && saved.gradingResult ? saved.gradingResult : null,
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
      if (this.allowInstantSubmit && st.status === 'submitted') return false;
      const opts = q.options || q.opts || [];
      if (typeof optionIndex !== 'number' || optionIndex < 0 || optionIndex >= opts.length) return false;

      st.selectedAnswer = optionIndex;
      if (st.status !== 'submitted') {
        st.status = 'answered_unsubmitted';
      }
      return true;
    }

    setCodeAnswer(questionId, codeText) {
      if (this.isCompleted) return false;
      const q = this.questionMap.get(questionId);
      const st = this.states[questionId];
      if (!q || !st) return false;
      if (this.allowInstantSubmit && st.status === 'submitted') return false;

      st.codeAnswer = String(codeText !== undefined && codeText !== null ? codeText : '');
      if (st.status !== 'submitted') {
        st.status = hasQuestionResponse(q, st) ? 'answered_unsubmitted' : 'seen';
      }
      return true;
    }

    setClozeAnswer(questionId, blankKey, value) {
      if (this.isCompleted) return false;
      const q = this.questionMap.get(questionId);
      const st = this.states[questionId];
      if (!q || !st) return false;
      if (this.allowInstantSubmit && st.status === 'submitted') return false;

      if (!st.clozeAnswers || typeof st.clozeAnswers !== 'object') {
        st.clozeAnswers = {};
      }
      st.clozeAnswers[blankKey] = String(value !== undefined && value !== null ? value : '');
      if (st.status !== 'submitted') {
        st.status = hasQuestionResponse(q, st) ? 'answered_unsubmitted' : 'seen';
      }
      return true;
    }

    submitSingleQuestion(questionId, nowMs = Date.now(), csharpEngine = null) {
      if (this.isCompleted) return null;
      const q = this.questionMap.get(questionId);
      const st = this.states[questionId];
      if (!q || !st) return null;
      if (st.status === 'submitted') {
        return { ...st, duplicate: true };
      }
      if (!hasQuestionResponse(q, st)) {
        return null;
      }

      const evalRes = evaluateQuestion(q, st, csharpEngine);
      st.status = 'submitted';
      st.outcome = evalRes.isCorrect ? 'correct' : (evalRes.isPartial ? 'partial' : 'incorrect');
      st.earnedMarks = evalRes.earnedMarks;
      st.maxMarks = evalRes.maxMarks;
      st.gradingResult = evalRes.gradingResult || null;
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
        const hasAns = hasQuestionResponse(q, st);
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

    submitExamination(nowMs = Date.now(), csharpEngine = null) {
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
      let partialCount = 0;
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

        const hasAns = hasQuestionResponse(q, st);
        if (hasAns) {
          const evalRes = evaluateQuestion(q, st, csharpEngine);
          st.status = 'submitted';
          st.outcome = evalRes.isCorrect ? 'correct' : (evalRes.isPartial ? 'partial' : 'incorrect');
          st.earnedMarks = evalRes.earnedMarks;
          st.gradingResult = evalRes.gradingResult || st.gradingResult || null;
          st.submittedAtMs = st.submittedAtMs || nowMs;

          rawMarks += evalRes.earnedMarks;
          byUnit[q.su].earnedMarks += evalRes.earnedMarks;
          byTopic[q.topic].earnedMarks += evalRes.earnedMarks;

          if (evalRes.isCorrect) {
            correctCount += 1;
            byUnit[q.su].correct += 1;
            byTopic[q.topic].correct += 1;
          } else if (evalRes.isPartial) {
            partialCount += 1;
            incorrectCount += 1;
          } else {
            incorrectCount += 1;
          }
        } else {
          st.status = 'submitted';
          st.outcome = 'incorrect';
          st.earnedMarks = 0;
          if (isCodingQuestion(q)) {
            const evalRes = evaluateQuestion(q, st, csharpEngine);
            st.gradingResult = evalRes.gradingResult || null;
          }
          unansweredCount += 1;
        }

        detailedItems.push({
          number: i + 1,
          questionId: q.id,
          questionType: q.questionType || 'mcq',
          su: q.su,
          topic: q.topic,
          topicTitle: q.topicTitle,
          selectedAnswer: st.selectedAnswer,
          codeAnswer: st.codeAnswer,
          clozeAnswers: st.clozeAnswers,
          gradingResult: st.gradingResult,
          correctAnswer: q.answer !== undefined ? q.answer : q.ans,
          outcome: hasAns ? st.outcome : 'unanswered',
          earnedMarks: st.earnedMarks,
          maxMarks: maxM,
          flagged: st.flagged
        });
      }

      rawMarks = Math.round(rawMarks * 100) / 100;

      for (const u of Object.values(byUnit)) {
        u.earnedMarks = Math.round(u.earnedMarks * 100) / 100;
        u.percentage = u.totalMarks > 0 ? Math.round((u.earnedMarks / u.totalMarks) * 100) : 0;
      }
      for (const t of Object.values(byTopic)) {
        t.earnedMarks = Math.round(t.earnedMarks * 100) / 100;
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
        partialCount,
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
    isCodingQuestion,
    hasQuestionResponse,
    evaluateObjectiveQuestion,
    evaluateQuestion,
    generateWeightedExam,
    generateCustomExam,
    ExamSession,
    formatCountdown
  };
});
