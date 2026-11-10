/**
 * NWU CMPG122 — Persistence, IndexedDB Storage, Migration & Data Integrity Module
 * Uses IndexedDB for structured learning/exam records and localStorage strictly
 * for lightweight UI preferences, with graceful fallback, versioned migrations,
 * and strict schema validation on JSON import/restore.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_PERSISTENCE = api;
    if (root.window) root.window.CMPG122_PERSISTENCE = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const CURRENT_SCHEMA_VERSION = 2;
  const DB_NAME = 'cmpg122_platform_db';
  const DB_VERSION = 2;
  const STORE_NAME = 'records';
  const PREFS_KEY = 'cmpg122_ui_prefs_v2';
  const FALLBACK_STATE_KEY = 'cmpg122_state_fallback_v2';

  function createDefaultPreferences() {
    return {
      theme: 'dark',
      keyboardShortcutsEnabled: true,
      letterShortcutsEnabled: true,
      reducedMotion: false,
      fontScale: 100
    };
  }

  function createDefaultState() {
    return {
      schemaVersion: CURRENT_SCHEMA_VERSION,
      updatedAt: null,
      studyTimeSeconds: 0,
      lastRoute: 'home',
      lastStudyUnit: 'SU7',
      lastTopicId: null,
      completedTopics: {},      // { [topicId]: timestampMs }
      completedUnits: {},       // { [su]: timestampMs }
      understoodQuestions: {},  // { [questionId]: timestampMs }
      flaggedQuestions: {},     // { [questionId]: true }
      unansweredQuestions: {},  // { [questionId]: timestampMs } from submitted exams until answered
      questionHistory: {},      // { [questionId]: { attempts, correct, incorrect, lastSelected, isCorrect, lastAttemptAt, totalTimeMs, su, topic, questionType } }
      examResults: [],          // [{ id, mode, title, rawMarks, totalMarks, percentage, correctCount, incorrectCount, unansweredCount, durationSeconds, completedAt, byUnit, byTopic }]
      recentActivity: [],       // [{ type, label, detail, timestamp }]
      activeExamSession: null,  // Persisted active exam paper session for refresh recovery
      activePracticeSession: null // Persisted active Custom Quiz / practice session for refresh recovery
    };
  }

  function migrateState(raw) {
    const base = createDefaultState();
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
      return base;
    }
    const ver = Number(raw.schemaVersion) || 1;
    const out = { ...base };

    if (typeof raw.studyTimeSeconds === 'number' && raw.studyTimeSeconds >= 0 && isFinite(raw.studyTimeSeconds)) {
      out.studyTimeSeconds = Math.floor(raw.studyTimeSeconds);
    }
    if (typeof raw.lastRoute === 'string' && raw.lastRoute.length < 40) {
      out.lastRoute = raw.lastRoute;
    }
    if (typeof raw.lastStudyUnit === 'string' && /^SU[1-7]$/.test(raw.lastStudyUnit)) {
      out.lastStudyUnit = raw.lastStudyUnit;
    }
    if (typeof raw.lastTopicId === 'string' && raw.lastTopicId.length < 80) {
      out.lastTopicId = raw.lastTopicId;
    }

    const copySafeMap = (src, validator) => {
      const res = {};
      if (!src || typeof src !== 'object' || Array.isArray(src)) return res;
      for (const k of Object.keys(src)) {
        if (k === '__proto__' || k === 'constructor' || k === 'prototype' || k.length > 100) continue;
        if (validator(src[k])) res[k] = src[k];
      }
      return res;
    };

    out.completedTopics = copySafeMap(raw.completedTopics, v => typeof v === 'number' || typeof v === 'boolean');
    out.completedUnits = copySafeMap(raw.completedUnits, v => typeof v === 'number' || typeof v === 'boolean');
    out.understoodQuestions = copySafeMap(raw.understoodQuestions, v => typeof v === 'number' || typeof v === 'boolean');
    out.flaggedQuestions = copySafeMap(raw.flaggedQuestions, v => Boolean(v) === true);
    out.unansweredQuestions = copySafeMap(raw.unansweredQuestions, v => typeof v === 'number' || typeof v === 'boolean');

    // Migrate v1 solvedIds array if present
    if (ver < 2 && Array.isArray(raw.solvedIds)) {
      for (const qId of raw.solvedIds) {
        if (typeof qId === 'string' && qId.length < 80) {
          out.questionHistory[qId] = {
            attempts: 1,
            correct: 1,
            incorrect: 0,
            lastSelected: null,
            isCorrect: true,
            lastAttemptAt: Date.now(),
            totalTimeMs: 0
          };
        }
      }
    }

    if (raw.questionHistory && typeof raw.questionHistory === 'object' && !Array.isArray(raw.questionHistory)) {
      for (const qId of Object.keys(raw.questionHistory)) {
        if (qId === '__proto__' || qId === 'constructor' || qId === 'prototype' || qId.length > 80) continue;
        const h = raw.questionHistory[qId];
        if (!h || typeof h !== 'object') continue;
        out.questionHistory[qId] = {
          attempts: Math.max(0, Math.floor(Number(h.attempts) || 0)),
          correct: Math.max(0, Math.floor(Number(h.correct) || 0)),
          incorrect: Math.max(0, Math.floor(Number(h.incorrect) || 0)),
          lastSelected: typeof h.lastSelected === 'number' ? h.lastSelected : null,
          isCorrect: Boolean(h.isCorrect),
          lastAttemptAt: Number(h.lastAttemptAt) || Date.now(),
          totalTimeMs: Math.max(0, Math.floor(Number(h.totalTimeMs) || 0)),
          su: typeof h.su === 'string' ? h.su.slice(0, 12) : '',
          topic: typeof h.topic === 'string' ? h.topic.slice(0, 80) : '',
          questionType: typeof h.questionType === 'string' ? h.questionType.slice(0, 40) : 'mcq'
        };
      }
    }

    if (Array.isArray(raw.examResults)) {
      out.examResults = raw.examResults.slice(-100).filter(r => r && typeof r === 'object').map(r => ({
        id: String(r.id || `exam_${Date.now()}`).slice(0, 80),
        mode: String(r.mode || 'exam').slice(0, 40),
        title: String(r.title || 'Assessment').slice(0, 140),
        rawMarks: Math.max(0, Number(r.rawMarks) || 0),
        totalMarks: Math.max(1, Number(r.totalMarks) || 1),
        percentage: Math.max(0, Math.min(100, Math.round(Number(r.percentage) || 0))),
        correctCount: Math.max(0, Math.floor(Number(r.correctCount) || 0)),
        incorrectCount: Math.max(0, Math.floor(Number(r.incorrectCount) || 0)),
        unansweredCount: Math.max(0, Math.floor(Number(r.unansweredCount) || 0)),
        durationSeconds: Math.max(0, Math.floor(Number(r.durationSeconds) || 0)),
        completedAt: Number(r.completedAt) || Date.now(),
        byUnit: (r.byUnit && typeof r.byUnit === 'object' && !Array.isArray(r.byUnit)) ? r.byUnit : {},
        byTopic: (r.byTopic && typeof r.byTopic === 'object' && !Array.isArray(r.byTopic)) ? r.byTopic : {}
      }));
    }

    if (Array.isArray(raw.recentActivity)) {
      out.recentActivity = raw.recentActivity.slice(0, 30).filter(a => a && typeof a === 'object').map(a => ({
        type: String(a.type || 'study').slice(0, 30),
        label: String(a.label || '').slice(0, 140),
        detail: String(a.detail || '').slice(0, 140),
        timestamp: Number(a.timestamp) || Date.now()
      }));
    }

    if (raw.activeExamSession && typeof raw.activeExamSession === 'object' && !Array.isArray(raw.activeExamSession)) {
      if (Array.isArray(raw.activeExamSession.questionIds) && raw.activeExamSession.questionIds.length > 0) {
        out.activeExamSession = raw.activeExamSession;
      }
    }
    if (raw.activePracticeSession && typeof raw.activePracticeSession === 'object' && !Array.isArray(raw.activePracticeSession)) {
      if (Array.isArray(raw.activePracticeSession.questionIds) && raw.activePracticeSession.questionIds.length > 0) {
        out.activePracticeSession = raw.activePracticeSession;
      }
    }

    out.schemaVersion = CURRENT_SCHEMA_VERSION;
    out.updatedAt = Number(raw.updatedAt) || Date.now();
    return out;
  }

  function validateImportedBackup(jsonStringOrObj) {
    let parsed = jsonStringOrObj;
    if (typeof jsonStringOrObj === 'string') {
      if (jsonStringOrObj.length > 5 * 1024 * 1024) {
        return { valid: false, error: 'Backup file exceeds maximum safe size (5 MB).' };
      }
      if (jsonStringOrObj.includes('__proto__')) {
        return { valid: false, error: 'Rejected unsafe prototype property in imported JSON.' };
      }
      try {
        parsed = JSON.parse(jsonStringOrObj);
      } catch (_e) {
        return { valid: false, error: 'Invalid JSON format. Please select a valid CMPG122 backup file.' };
      }
    }

    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { valid: false, error: 'Backup root must be a JSON object.' };
    }

    const stateCandidate = parsed.state ? parsed.state : parsed;
    if (!stateCandidate || typeof stateCandidate !== 'object' || Array.isArray(stateCandidate)) {
      return { valid: false, error: 'Missing valid learner state object in backup.' };
    }

    const hasKnownKeys = ['questionHistory', 'completedTopics', 'examResults', 'schemaVersion', 'solvedIds']
      .some(k => k in stateCandidate);
    if (!hasKnownKeys) {
      return { valid: false, error: 'Unrecognized backup schema: missing CMPG122 progress fields.' };
    }

    const migrated = migrateState(stateCandidate);
    const prefsRaw = (parsed.preferences && typeof parsed.preferences === 'object') ? parsed.preferences : {};
    const defaultPrefs = createDefaultPreferences();
    const cleanPrefs = {
      theme: ['dark', 'light', 'system'].includes(prefsRaw.theme) ? prefsRaw.theme : defaultPrefs.theme,
      keyboardShortcutsEnabled: typeof prefsRaw.keyboardShortcutsEnabled === 'boolean' ? prefsRaw.keyboardShortcutsEnabled : defaultPrefs.keyboardShortcutsEnabled,
      letterShortcutsEnabled: typeof prefsRaw.letterShortcutsEnabled === 'boolean' ? prefsRaw.letterShortcutsEnabled : defaultPrefs.letterShortcutsEnabled,
      reducedMotion: typeof prefsRaw.reducedMotion === 'boolean' ? prefsRaw.reducedMotion : defaultPrefs.reducedMotion,
      fontScale: [90, 100, 110, 120].includes(Number(prefsRaw.fontScale)) ? Number(prefsRaw.fontScale) : defaultPrefs.fontScale
    };

    return {
      valid: true,
      state: migrated,
      preferences: cleanPrefs
    };
  }

  class PersistenceManager {
    constructor(options = {}) {
      this._storage = options.localStorage || (typeof localStorage !== 'undefined' ? localStorage : null);
      this._idbFactory = options.indexedDB || (typeof indexedDB !== 'undefined' ? indexedDB : null);
      this._db = null;
      this._prefs = createDefaultPreferences();
      this._state = createDefaultState();
      this._initialized = false;
    }

    async init() {
      this._loadPreferencesSync();
      // Hydrate fallback snapshot first so state is immediately available even before IDB resolves
      const fallbackState = this._loadFallbackSync();
      if (fallbackState) {
        this._state = migrateState(fallbackState);
      }

      if (this._idbFactory) {
        try {
          this._db = await this._openIdb();
          const idbState = await this._readFromIdb('learner_state');
          if (idbState) {
            const migratedIdb = migrateState(idbState);
            if (!this._state.updatedAt || (migratedIdb.updatedAt || 0) >= (this._state.updatedAt || 0)) {
              this._state = migratedIdb;
            }
          } else if (fallbackState) {
            await this._writeToIdb('learner_state', this._state);
          }
        } catch (_err) {
          this._db = null;
        }
      }

      this._initialized = true;
      return this._state;
    }

    _openIdb() {
      return new Promise((resolve, reject) => {
        try {
          const req = this._idbFactory.open(DB_NAME, DB_VERSION);
          req.onupgradeneeded = (ev) => {
            const db = ev.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              db.createObjectStore(STORE_NAME);
            }
          };
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(req.error);
        } catch (e) {
          reject(e);
        }
      });
    }

    _readFromIdb(key) {
      if (!this._db) return Promise.resolve(null);
      return new Promise((resolve) => {
        try {
          const tx = this._db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(key);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => resolve(null);
        } catch (_e) {
          resolve(null);
        }
      });
    }

    _writeToIdb(key, val) {
      if (!this._db) return Promise.resolve(false);
      return new Promise((resolve) => {
        try {
          const tx = this._db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          store.put(val, key);
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (_e) {
          resolve(false);
        }
      });
    }

    _loadPreferencesSync() {
      if (!this._storage) return;
      try {
        const raw = this._storage.getItem(PREFS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const def = createDefaultPreferences();
        this._prefs = {
          theme: ['dark', 'light', 'system'].includes(parsed.theme) ? parsed.theme : def.theme,
          keyboardShortcutsEnabled: typeof parsed.keyboardShortcutsEnabled === 'boolean' ? parsed.keyboardShortcutsEnabled : def.keyboardShortcutsEnabled,
          letterShortcutsEnabled: typeof parsed.letterShortcutsEnabled === 'boolean' ? parsed.letterShortcutsEnabled : def.letterShortcutsEnabled,
          reducedMotion: typeof parsed.reducedMotion === 'boolean' ? parsed.reducedMotion : def.reducedMotion,
          fontScale: [90, 100, 110, 120].includes(Number(parsed.fontScale)) ? Number(parsed.fontScale) : def.fontScale
        };
      } catch (_e) {
        this._prefs = createDefaultPreferences();
      }
    }

    _savePreferencesSync() {
      if (!this._storage) return;
      try {
        this._storage.setItem(PREFS_KEY, JSON.stringify(this._prefs));
      } catch (_e) {
        // Ignore quota errors gracefully
      }
    }

    _loadFallbackSync() {
      if (!this._storage) return null;
      try {
        const raw = this._storage.getItem(FALLBACK_STATE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (_e) {
        return null;
      }
    }

    _saveFallbackSync() {
      if (!this._storage) return;
      try {
        this._storage.setItem(FALLBACK_STATE_KEY, JSON.stringify(this._state));
      } catch (_e) {
        // Quota exceeded: IndexedDB remains primary store
      }
    }

    getPreferences() {
      return { ...this._prefs };
    }

    updatePreferences(patch) {
      if (!patch || typeof patch !== 'object') return this.getPreferences();
      if (['dark', 'light', 'system'].includes(patch.theme)) this._prefs.theme = patch.theme;
      if (typeof patch.keyboardShortcutsEnabled === 'boolean') this._prefs.keyboardShortcutsEnabled = patch.keyboardShortcutsEnabled;
      if (typeof patch.letterShortcutsEnabled === 'boolean') this._prefs.letterShortcutsEnabled = patch.letterShortcutsEnabled;
      if (typeof patch.reducedMotion === 'boolean') this._prefs.reducedMotion = patch.reducedMotion;
      if ([90, 100, 110, 120].includes(Number(patch.fontScale))) this._prefs.fontScale = Number(patch.fontScale);
      this._savePreferencesSync();
      return this.getPreferences();
    }

    getState() {
      return this._state;
    }

    async saveState(mutatorFnOrState) {
      if (typeof mutatorFnOrState === 'function') {
        mutatorFnOrState(this._state);
      } else if (mutatorFnOrState && typeof mutatorFnOrState === 'object') {
        this._state = migrateState(mutatorFnOrState);
      }
      this._state.updatedAt = Date.now();
      this._saveFallbackSync();
      await this._writeToIdb('learner_state', this._state);
      return this._state;
    }

    recordQuestionAttempt(question, selectedIndex, isCorrect, elapsedMs = 0) {
      if (!question || !question.id) return;
      const qId = question.id;
      const prev = this._state.questionHistory[qId] || {
        attempts: 0,
        correct: 0,
        incorrect: 0,
        lastSelected: null,
        isCorrect: false,
        lastAttemptAt: 0,
        totalTimeMs: 0,
        su: question.su || question.ch || '',
        topic: question.topic || '',
        questionType: question.questionType || 'mcq'
      };

      prev.attempts += 1;
      if (isCorrect) {
        prev.correct += 1;
      } else {
        prev.incorrect += 1;
        // Re-attempting wrong clears previous "understood" dismissal so review stays honest
        delete this._state.understoodQuestions[qId];
      }
      prev.lastSelected = selectedIndex;
      prev.isCorrect = Boolean(isCorrect);
      prev.lastAttemptAt = Date.now();
      prev.totalTimeMs += Math.max(0, Math.floor(Number(elapsedMs) || 0));
      prev.su = question.su || question.ch || prev.su;
      prev.topic = question.topic || prev.topic;
      prev.questionType = question.questionType || prev.questionType;

      this._state.questionHistory[qId] = prev;
      if (this._state.unansweredQuestions && this._state.unansweredQuestions[qId]) {
        delete this._state.unansweredQuestions[qId];
      }
      this._pushActivity('practice', `${question.su}: ${isCorrect ? 'Answered correctly' : 'Needs review'}`, question.topicTitle || question.id);
      return this.saveState();
    }

    toggleFlagQuestion(questionId) {
      if (!questionId) return false;
      const next = !this._state.flaggedQuestions[questionId];
      if (next) {
        this._state.flaggedQuestions[questionId] = true;
      } else {
        delete this._state.flaggedQuestions[questionId];
      }
      this.saveState();
      return next;
    }

    isQuestionFlagged(questionId) {
      return Boolean(this._state.flaggedQuestions[questionId]);
    }

    markConceptUnderstood(questionId, understood = true) {
      if (!questionId) return;
      if (understood) {
        this._state.understoodQuestions[questionId] = Date.now();
      } else {
        delete this._state.understoodQuestions[questionId];
      }
      return this.saveState();
    }

    toggleTopicCompleted(topicId, suId, allUnitTopicIds = []) {
      if (!topicId) return false;
      const next = !this._state.completedTopics[topicId];
      if (next) {
        this._state.completedTopics[topicId] = Date.now();
        this._pushActivity('study', `Completed topic in ${suId || 'Study'}`, topicId);
      } else {
        delete this._state.completedTopics[topicId];
      }
      if (suId && Array.isArray(allUnitTopicIds) && allUnitTopicIds.length > 0) {
        const allDone = allUnitTopicIds.every(id => Boolean(this._state.completedTopics[id]));
        if (allDone) this._state.completedUnits[suId] = Date.now();
        else delete this._state.completedUnits[suId];
      }
      this.saveState();
      return next;
    }

    recordExamResult(resultRecord) {
      if (resultRecord && Array.isArray(resultRecord.detailedItems)) {
        if (!this._state.unansweredQuestions) this._state.unansweredQuestions = {};
        const now = Date.now();
        resultRecord.detailedItems.forEach(item => {
          if (item && item.questionId && item.outcome === 'unanswered') {
            this._state.unansweredQuestions[item.questionId] = now;
          }
        });
      }
      const clean = migrateState({
        schemaVersion: CURRENT_SCHEMA_VERSION,
        examResults: [...this._state.examResults, resultRecord]
      }).examResults;
      this._state.examResults = clean;
      if (
        !this._state.activeExamSession ||
        !resultRecord ||
        !resultRecord.id ||
        this._state.activeExamSession.id === resultRecord.id
      ) {
        this._state.activeExamSession = null;
      }
      if (
        this._state.activePracticeSession &&
        resultRecord &&
        resultRecord.id &&
        this._state.activePracticeSession.id === resultRecord.id
      ) {
        this._state.activePracticeSession = null;
      }
      this._pushActivity('exam', `${resultRecord.title || 'Examination'}`, `Scored ${resultRecord.percentage}% (${resultRecord.rawMarks}/${resultRecord.totalMarks})`);
      return this.saveState();
    }

    saveActiveExamSession(sessionSnapshot) {
      this._state.activeExamSession = sessionSnapshot || null;
      return this.saveState();
    }

    saveActivePracticeSession(sessionSnapshot) {
      this._state.activePracticeSession = sessionSnapshot || null;
      return this.saveState();
    }

    addStudyTime(seconds) {
      const s = Math.max(0, Math.floor(Number(seconds) || 0));
      if (s > 0) {
        this._state.studyTimeSeconds += s;
        this.saveState();
      }
    }

    _pushActivity(type, label, detail) {
      this._state.recentActivity.unshift({
        type,
        label: String(label).slice(0, 140),
        detail: String(detail || '').slice(0, 140),
        timestamp: Date.now()
      });
      if (this._state.recentActivity.length > 25) {
        this._state.recentActivity.length = 25;
      }
    }

    exportBackupJson() {
      return JSON.stringify({
        module: 'CMPG122',
        exportedAt: new Date().toISOString(),
        schemaVersion: CURRENT_SCHEMA_VERSION,
        preferences: this.getPreferences(),
        state: this._state
      }, null, 2);
    }

    async importBackupJson(jsonPayload) {
      const check = validateImportedBackup(jsonPayload);
      if (!check.valid) {
        return check;
      }
      this._prefs = check.preferences;
      this._savePreferencesSync();
      this._state = check.state;
      this._saveFallbackSync();
      await this._writeToIdb('learner_state', this._state);
      return { valid: true, state: this._state, preferences: this._prefs };
    }

    async resetAllData() {
      this._state = createDefaultState();
      this._prefs = createDefaultPreferences();
      if (this._storage) {
        try {
          this._storage.removeItem(FALLBACK_STATE_KEY);
          this._storage.removeItem(PREFS_KEY);
        } catch (_e) {}
      }
      if (this._db) {
        await this._writeToIdb('learner_state', this._state);
      }
      return { state: this._state, preferences: this._prefs };
    }
  }

  return {
    CURRENT_SCHEMA_VERSION,
    createDefaultPreferences,
    createDefaultState,
    migrateState,
    validateImportedBackup,
    PersistenceManager
  };
});
