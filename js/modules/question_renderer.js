/**
 * NWU CMPG122 — Accessible Question, Syntax-Highlighted C# Code & Feedback Renderer
 * Supports Single-Card Practice, Dashboard Quick-Practice, and Continuous Single-Sheet
 * Past Examination Papers with WCAG 2.2 AA non-colour indicators and inline definitions.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_RENDERER = api;
    if (root.window) root.window.CMPG122_RENDERER = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function escapeHtml(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCodeBlock(code, csharpEngine, icons, label = 'C#') {
    if (!code || !String(code).trim()) return '';
    const highlighted = (csharpEngine && typeof csharpEngine.highlightCSharp === 'function')
      ? csharpEngine.highlightCSharp(code)
      : escapeHtml(code);
    const copyIcon = icons ? icons.icon('copy', { size: 14 }) : '';
    const encoded = encodeURIComponent(code);
    return `<div class="code-block-wrap">
      <div class="code-block-bar">
        <span class="code-lang-tag">${escapeHtml(label)}</span>
        <button type="button" class="code-copy-btn" data-copy-encoded="${encoded}" aria-label="Copy C# code snippet" title="Copy code">
          ${copyIcon} <span>Copy</span>
        </button>
      </div>
      <pre class="code-pre" tabindex="0"><code>${highlighted}</code></pre>
    </div>`;
  }

  function formatOptionContent(optText, csharpEngine, defsEngine) {
    const raw = String(optText ?? '');
    if (raw.includes('\n')) {
      const hi = (csharpEngine && csharpEngine.highlightCSharp) ? csharpEngine.highlightCSharp(raw) : escapeHtml(raw);
      return `<pre class="opt-code-pre"><code>${hi}</code></pre>`;
    }
    if (defsEngine) {
      return defsEngine.renderTextWithInlineLinks(raw, { maxLinks: 0 });
    }
    return escapeHtml(raw);
  }

  function renderExplanationPanel(question, qState, deps = {}) {
    const { defsEngine, icons, showSimilarBtn, isUnderstood } = deps;
    const correctIdx = question.answer !== undefined ? question.answer : question.ans;
    const opts = question.options || question.opts || [];
    const isCorrect = qState && qState.selectedAnswer === correctIdx;
    const unanswered = !qState || typeof qState.selectedAnswer !== 'number';
    const isBookmarkedOnly = Boolean(qState && qState.bookmarkedReview && unanswered);

    const statusClass = isBookmarkedOnly ? 'feedback-neutral' : (isCorrect ? 'feedback-correct' : 'feedback-incorrect');
    const statusIcon = icons
      ? icons.icon(isBookmarkedOnly ? 'flag' : (isCorrect ? 'check-circle' : 'x-circle'), { size: 18 })
      : '';
    const statusHeading = isBookmarkedOnly
      ? `Flagged for Review (Not Yet Attempted) — Correct Answer: ${LETTERS[correctIdx]}`
      : isCorrect
        ? `Correct (+${question.marks || 2} marks)`
        : unanswered
          ? `Unanswered (0 / ${question.marks || 2} marks) — Correct Answer: ${LETTERS[correctIdx]}`
          : `Incorrect (0 / ${question.marks || 2} marks) — Correct Answer: ${LETTERS[correctIdx]}`;

    const expHtml = defsEngine
      ? defsEngine.renderTextWithInlineLinks(question.explanation || question.exp || '', { maxLinks: 3 })
      : escapeHtml(question.explanation || question.exp || '');

    const distractorHtml = question.distractorRationale
      ? `<details class="distractor-details" data-panel-id="distractor_${escapeHtml(question.id)}">
          <summary>Why other options are incorrect</summary>
          <p>${defsEngine ? defsEngine.renderTextWithInlineLinks(question.distractorRationale, { maxLinks: 2 }) : escapeHtml(question.distractorRationale)}</p>
        </details>`
      : '';

    const relDefs = Array.isArray(question.definitions) && question.definitions.length > 0 && defsEngine
      ? `<div class="feedback-defs-row">
          <span class="feedback-defs-label">Related Definitions:</span>
          ${question.definitions.map(dId => {
            const d = defsEngine.getById(dId);
            return d ? `<button type="button" class="def-chip-btn" data-def-id="${escapeHtml(d.id)}">${escapeHtml(d.term)}</button>` : '';
          }).join('')}
        </div>`
      : '';

    const reviewActions = showSimilarBtn
      ? `<div class="feedback-review-actions">
          <button type="button" class="btn-secondary btn-sm" data-practise-similar="${escapeHtml(question.id)}">
            ${icons ? icons.icon('repeat', { size: 14 }) : ''} Practise Similar Topic Questions
          </button>
          ${!isCorrect ? `<button type="button" class="btn-ghost btn-sm" data-mark-understood="${escapeHtml(question.id)}">
            ${icons ? icons.icon('check', { size: 14 }) : ''} ${isUnderstood ? 'Marked Understood' : 'Mark Concept Understood'}
          </button>` : ''}
        </div>`
      : '';

    return `<div class="paper-q-explanation q-feedback-panel ${statusClass}" role="status" aria-live="polite">
      <div class="q-feedback-header">
        <span class="q-feedback-status-icon">${statusIcon}</span>
        <strong>${escapeHtml(statusHeading)}</strong>
        ${opts[correctIdx] ? `<span class="q-correct-summary">Option ${LETTERS[correctIdx]}</span>` : ''}
      </div>
      <div class="q-feedback-body">${expHtml}</div>
      ${distractorHtml}
      ${relDefs}
      ${reviewActions}
    </div>`;
  }

  function renderQuestionCard(question, qState, options = {}) {
    const {
      index = 0,
      total = 1,
      csharpEngine,
      defsEngine,
      icons,
      compact = false,
      continuousMode = false,
      allowInstantSubmit = true,
      isCompleted = false,
      isFlagged = false,
      isUnderstood = false
    } = options;

    const opts = question.options || question.opts || [];
    const correctIdx = question.answer !== undefined ? question.answer : question.ans;
    const isGraded = Boolean(isCompleted || (qState && qState.status === 'submitted'));
    const selectedIdx = qState && typeof qState.selectedAnswer === 'number' ? qState.selectedAnswer : null;

    const stemHtml = defsEngine
      ? defsEngine.renderTextWithInlineLinks(question.stem || question.q || '', { maxLinks: 3 })
      : escapeHtml(question.stem || question.q || '');

    const codeHtml = renderCodeBlock(question.code, csharpEngine, icons, 'C# Fragment');
    const flagIcon = icons ? icons.icon('flag', { size: 15 }) : '';

    const optionsHtml = opts.map((optText, optIdx) => {
      const letter = LETTERS[optIdx] || String(optIdx + 1);
      const isSelected = selectedIdx === optIdx;
      let cls = 'q-option-btn';
      let badgeHtml = '';

      if (isGraded) {
        if (optIdx === correctIdx) {
          cls += ' opt-correct';
          badgeHtml = `<span class="opt-state-tag tag-correct">${icons ? icons.icon('check', { size: 13 }) : ''} Correct</span>`;
        } else if (isSelected && optIdx !== correctIdx) {
          cls += ' opt-incorrect';
          badgeHtml = `<span class="opt-state-tag tag-incorrect">${icons ? icons.icon('close', { size: 13 }) : ''} Your Answer</span>`;
        }
      } else if (isSelected) {
        cls += ' opt-selected';
      }

      const disabledAttr = (isGraded && allowInstantSubmit) || isCompleted ? ' disabled' : '';
      return `<button type="button"
        class="${cls}"
        data-q-id="${escapeHtml(question.id)}"
        data-option-idx="${optIdx}"
        aria-pressed="${isSelected ? 'true' : 'false'}"${disabledAttr}>
        <span class="opt-radio-ring" aria-hidden="true"><span class="opt-key-letter">${letter}</span></span>
        <span class="opt-text">${formatOptionContent(optText, csharpEngine, defsEngine)}</span>
        ${badgeHtml}
      </button>`;
    }).join('');

    const feedbackHtml = isGraded
      ? renderExplanationPanel(question, qState, {
          defsEngine,
          icons,
          showSimilarBtn: !compact,
          isUnderstood
        })
      : '';

    const diffClass = `diff-${String(question.difficulty || 'Intermediate').toLowerCase()}`;

    if (continuousMode) {
      return `<article class="paper-q-card ${isFlagged ? 'is-flagged' : ''}" id="paperQuestion_${escapeHtml(question.id)}" data-question-id="${escapeHtml(question.id)}">
        <div class="q-card-meta">
          <div class="q-meta-left">
            <span class="q-number-pill">Question ${index + 1}</span>
            <span class="q-su-pill">${escapeHtml(question.su)}</span>
            <span class="q-diff-pill ${diffClass}">${escapeHtml(question.difficulty || 'Intermediate')}</span>
            <span class="q-marks-pill">[${question.marks || 2} marks]</span>
          </div>
          <button type="button" class="q-flag-btn ${isFlagged ? 'active' : ''}" data-flag-q="${escapeHtml(question.id)}"
            aria-pressed="${isFlagged ? 'true' : 'false'}" title="${isFlagged ? 'Remove flag' : 'Flag question for review'}">
            ${flagIcon} <span>${isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>
        <div class="q-stem-text">${stemHtml}</div>
        ${codeHtml}
        <div class="q-options-list" role="group" aria-label="Question ${index + 1} options">
          ${optionsHtml}
        </div>
        ${feedbackHtml}
      </article>`;
    }

    return `<article class="single-q-card ${compact ? 'compact-q-card' : ''}" data-question-id="${escapeHtml(question.id)}">
      <div class="q-card-meta">
        <div class="q-meta-left">
          <span class="q-su-pill">${escapeHtml(question.su)}</span>
          ${!compact ? `<span class="q-topic-pill">${escapeHtml(question.topicTitle || '')}</span>` : ''}
          <span class="q-diff-pill ${diffClass}">${escapeHtml(question.difficulty || 'Intermediate')}</span>
          <span class="q-marks-pill">${question.marks || 2} marks</span>
        </div>
        <div class="q-meta-right">
          <span class="q-progress-label">Question ${index + 1} of ${total}</span>
          <button type="button" class="q-flag-btn ${isFlagged ? 'active' : ''}" data-flag-q="${escapeHtml(question.id)}"
            aria-pressed="${isFlagged ? 'true' : 'false'}" title="Flag question for review">
            ${flagIcon} <span>${isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>
      </div>
      <div class="q-stem-text">${stemHtml}</div>
      ${codeHtml}
      <div class="q-options-list" role="group" aria-label="Answer options">
        ${optionsHtml}
      </div>
      ${feedbackHtml}
    </article>`;
  }

  return {
    LETTERS,
    escapeHtml,
    renderCodeBlock,
    renderExplanationPanel,
    renderQuestionCard
  };
});
