/**
 * NWU CMPG122 — Searchable Definitions Engine, Inline Term Linker &
 * Context-Preserving Return Navigation Stack
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_DEFS_ENGINE = api;
    if (root.window) root.window.CMPG122_DEFS_ENGINE = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function escapeHtml(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  class DefinitionsEngine {
    constructor(definitions = []) {
      this.definitions = Array.isArray(definitions) ? definitions : [];
      this.byId = new Map(this.definitions.map(d => [d.id, d]));
      this._returnStack = [];
      this._matchers = this._buildInlineMatchers();
    }

    _buildInlineMatchers() {
      // Curated specific multi-character technical terms (avoiding overly generic common words)
      const skipGeneric = new Set(['Form', 'Button', 'Label', 'int', 'out', 'ref', 'bool', 'string', 'double']);
      const entries = [];
      for (const d of this.definitions) {
        const candidates = [d.term, ...(d.aliases || [])];
        for (const raw of candidates) {
          const clean = String(raw || '').trim();
          if (clean.length < 5 || skipGeneric.has(clean)) continue;
          entries.push({ phrase: clean, id: d.id });
        }
      }
      // Longest phrases first so "MessageBox.Show()" matches before "MessageBox"
      entries.sort((a, b) => b.phrase.length - a.phrase.length);
      return entries.map(e => ({
        id: e.id,
        phrase: e.phrase,
        regex: new RegExp(`(^|[^a-zA-Z0-9_])(${escapeRegex(e.phrase)})(?![a-zA-Z0-9_])`)
      }));
    }

    getById(id) {
      return this.byId.get(id) || null;
    }

    search(query = '', unitFilter = 'ALL', categoryFilter = 'ALL') {
      const q = String(query || '').trim().toLowerCase();
      return this.definitions.filter(d => {
        if (unitFilter && unitFilter !== 'ALL' && d.su !== unitFilter) return false;
        if (categoryFilter && categoryFilter !== 'ALL' && d.category !== categoryFilter) return false;
        if (!q) return true;
        const hay = [
          d.term,
          ...(d.aliases || []),
          d.plainEnglish,
          d.technicalDefinition,
          d.syntax,
          d.category,
          d.su
        ].join(' ').toLowerCase();
        return hay.includes(q);
      });
    }

    getCategories() {
      return [...new Set(this.definitions.map(d => d.category).filter(Boolean))];
    }

    /**
     * Converts plain text (with optional inline `code` backticks) into safe HTML
     * where at most the first occurrence of up to `maxLinks` technical terms is
     * wrapped in a subtle, keyboard-accessible inline definition button.
     */
    renderTextWithInlineLinks(rawText, options = {}) {
      if (!rawText) return '';
      const maxLinks = options.maxLinks !== undefined ? options.maxLinks : 3;
      const linkedDefIds = new Set();

      // Split on inline backtick code spans first so code spans stay untouched
      const parts = String(rawText).split(/(`[^`]+`)/g);
      return parts.map(part => {
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          const inner = part.slice(1, -1);
          // Check if exact inline code token matches a known definition
          const exactDef = this.definitions.find(d =>
            d.term === inner || (d.aliases || []).includes(inner)
          );
          if (exactDef && linkedDefIds.size < maxLinks && !linkedDefIds.has(exactDef.id)) {
            linkedDefIds.add(exactDef.id);
            return `<button type="button" class="inline-def-link inline-code-def" data-def-id="${escapeHtml(exactDef.id)}" title="View definition: ${escapeHtml(exactDef.term)}"><code>${escapeHtml(inner)}</code></button>`;
          }
          return `<code class="inline-code">${escapeHtml(inner)}</code>`;
        }

        let safe = escapeHtml(part);
        if (linkedDefIds.size >= maxLinks) return safe;

        // Replace using placeholder tokens so we never nest tags inside tags
        const placeholders = [];
        for (const m of this._matchers) {
          if (linkedDefIds.size >= maxLinks) break;
          if (linkedDefIds.has(m.id)) continue;
          if (m.regex.test(safe)) {
            safe = safe.replace(m.regex, (_full, prefix, matchedWord) => {
              linkedDefIds.add(m.id);
              const tok = `\x00DEF_${placeholders.length}\x00`;
              const defObj = this.byId.get(m.id);
              placeholders.push(
                `<button type="button" class="inline-def-link" data-def-id="${escapeHtml(m.id)}" title="View definition: ${escapeHtml(defObj ? defObj.term : matchedWord)}">${matchedWord}</button>`
              );
              return `${prefix}${tok}`;
            });
          }
        }
        placeholders.forEach((html, idx) => {
          safe = safe.replace(`\x00DEF_${idx}\x00`, html);
        });
        return safe;
      }).join('');
    }

    pushReturnContext(contextSnapshot) {
      if (!contextSnapshot || typeof contextSnapshot !== 'object') return;
      const snap = {
        route: contextSnapshot.route || 'home',
        sourceLabel: contextSnapshot.sourceLabel || 'Question / Study Note',
        studyUnitId: contextSnapshot.studyUnitId || null,
        topicId: contextSnapshot.topicId || null,
        questionId: contextSnapshot.questionId || null,
        selectedAnswer: contextSnapshot.selectedAnswer !== undefined ? contextSnapshot.selectedAnswer : null,
        submissionStatus: contextSnapshot.submissionStatus || null,
        scrollY: Number(contextSnapshot.scrollY) || 0,
        activeSection: contextSnapshot.activeSection || null,
        examState: contextSnapshot.examState || null,
        expandedPanels: Array.isArray(contextSnapshot.expandedPanels) ? [...contextSnapshot.expandedPanels] : [],
        timestamp: Date.now()
      };
      this._returnStack.push(snap);
      if (this._returnStack.length > 15) this._returnStack.shift();
    }

    peekReturnContext() {
      return this._returnStack.length > 0 ? this._returnStack[this._returnStack.length - 1] : null;
    }

    popReturnContext() {
      return this._returnStack.length > 0 ? this._returnStack.pop() : null;
    }

    clearReturnContext() {
      this._returnStack.length = 0;
    }

    /**
     * Handles Escape / Backspace return shortcut when viewing Definitions with an active return context.
     * Strictly ignores events inside inputs, textareas, selects, or contenteditable elements.
     */
    shouldTriggerKeyboardReturn(event, currentRoute) {
      if (currentRoute !== 'definitions' || !this.peekReturnContext()) return false;
      if (!event || event.ctrlKey || event.altKey || event.metaKey) return false;
      const target = event.target;
      if (target) {
        const tag = (target.tagName || '').toUpperCase();
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable) {
          return false;
        }
      }
      return event.key === 'Escape' || event.key === 'Backspace';
    }
  }

  return {
    DefinitionsEngine
  };
});
