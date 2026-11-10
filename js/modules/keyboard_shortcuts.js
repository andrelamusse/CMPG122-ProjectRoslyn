/**
 * NWU CMPG122 — Keyboard Shortcut Subsystem (Section 11)
 * Implements A–E (immediate select & submit), 1–5 (select without submitting),
 * and Enter (submit selected OR advance if graded; no-op if unselected),
 * while respecting editable inputs, modals, accessibility focus, and OS modifiers.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_SHORTCUTS = api;
    if (root.window) root.window.CMPG122_SHORTCUTS = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const LETTER_MAP = { a: 0, b: 1, c: 2, d: 3, e: 4 };
  const DIGIT_MAP = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4 };

  function isEditableOrBlockedTarget(target, hasOpenModal = false) {
    if (hasOpenModal) return true;
    if (!target) return false;
    const tag = String(target.tagName || '').toUpperCase();
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
    if (target.isContentEditable) return true;
    if (typeof target.closest === 'function') {
      if (target.closest('[contenteditable="true"], .modal-backdrop.open, .slide-drawer.open, .app-sidebar.open, .exam-sticky-sidebar.drawer-open, dialog[open], .code-editor-surface')) {
        return true;
      }
    }
    return false;
  }

  class KeyboardShortcutController {
    constructor(delegate) {
      // delegate provides:
      // isPracticeShortcutContextActive() -> bool
      // getPreferences() -> { keyboardShortcutsEnabled, letterShortcutsEnabled }
      // hasOpenModal() -> bool
      // getCurrentQuestionContext() -> { questionId, optionCount, selectedAnswer, isSubmitted } | null
      // onSelectOption(optionIndex)
      // onSubmitCurrent()
      // onNextQuestion()
      this.delegate = delegate;
      this._processing = false;
    }

    handleKeyDown(event) {
      if (!event || !this.delegate) return false;
      if (event.ctrlKey || event.altKey || event.metaKey) return false;
      if (this._processing) return false;

      const prefs = this.delegate.getPreferences ? this.delegate.getPreferences() : { keyboardShortcutsEnabled: true, letterShortcutsEnabled: true };
      if (!prefs.keyboardShortcutsEnabled) return false;

      const modalOpen = this.delegate.hasOpenModal ? this.delegate.hasOpenModal() : false;
      if (isEditableOrBlockedTarget(event.target, modalOpen)) return false;

      if (!this.delegate.isPracticeShortcutContextActive || !this.delegate.isPracticeShortcutContextActive()) {
        return false;
      }

      const ctx = this.delegate.getCurrentQuestionContext ? this.delegate.getCurrentQuestionContext() : null;
      if (!ctx || !ctx.optionCount) return false;

      const rawKey = String(event.key || '');
      const lower = rawKey.toLowerCase();

      // 1..5 -> Select option ONLY (without submitting)
      if (Object.prototype.hasOwnProperty.call(DIGIT_MAP, rawKey)) {
        const idx = DIGIT_MAP[rawKey];
        if (idx < ctx.optionCount && !ctx.isSubmitted) {
          if (typeof event.preventDefault === 'function') event.preventDefault();
          this.delegate.onSelectOption(idx);
          return true;
        }
        return false;
      }

      // A..E -> Select AND immediately submit in one keypress
      if (Object.prototype.hasOwnProperty.call(LETTER_MAP, lower)) {
        if (prefs.letterShortcutsEnabled === false) return false;
        const idx = LETTER_MAP[lower];
        if (idx < ctx.optionCount && !ctx.isSubmitted) {
          if (typeof event.preventDefault === 'function') event.preventDefault();
          this._processing = true;
          try {
            this.delegate.onSelectOption(idx);
            this.delegate.onSubmitCurrent();
          } finally {
            this._processing = false;
          }
          return true;
        }
        return false;
      }

      // Enter -> Submit if selected & unsubmitted; Advance if already graded; No-op if unselected
      if (rawKey === 'Enter') {
        // Respect native keyboard Enter on interactive buttons (except option cards), links, and expandable <summary> elements
        const target = event.target;
        if (target) {
          const tName = String(target.tagName || '').toUpperCase();
          if (tName === 'SUMMARY' || tName === 'A' || tName === 'DETAILS') {
            return false;
          }
          if (tName === 'BUTTON' && (!target.hasAttribute || !target.hasAttribute('data-option-idx'))) {
            return false;
          }
          if (typeof target.closest === 'function' && target.closest('summary, a[href]')) {
            return false;
          }
        }

        if (ctx.isSubmitted) {
          if (typeof event.preventDefault === 'function') event.preventDefault();
          this._processing = true;
          try {
            this.delegate.onNextQuestion();
          } finally {
            this._processing = false;
          }
          return true;
        }

        if (typeof ctx.selectedAnswer === 'number' && ctx.selectedAnswer >= 0) {
          if (typeof event.preventDefault === 'function') event.preventDefault();
          this._processing = true;
          try {
            this.delegate.onSubmitCurrent();
          } finally {
            this._processing = false;
          }
          return true;
        }

        // Unselected -> explicitly do nothing
        return false;
      }

      return false;
    }
  }

  return {
    LETTER_MAP,
    DIGIT_MAP,
    isEditableOrBlockedTarget,
    KeyboardShortcutController
  };
});
