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

  function isCodingQuestion(question) {
    if (!question) return false;
    const qt = question.questionType || question.type;
    return qt === 'short-answer' ||
      qt === 'code-cloze' ||
      qt === 'code-snippet' ||
      qt === 'code-full';
  }

  function renderShortAnswerInteractiveBlock(question, qState, _csharpEngine, icons, isGraded, allowInstantSubmit, isCompleted) {
    const currentAns = (qState && typeof qState.codeAnswer === 'string')
      ? qState.codeAnswer
      : '';
    const disabledAttr = ((isGraded && allowInstantSubmit) || isCompleted) ? ' readonly' : '';
    return `<div class="q-short-answer-wrap">
      <div class="q-short-answer-row">
        <input type="text" class="text-input q-short-answer-input" id="codeInput_${escapeHtml(question.id)}" data-code-q-id="${escapeHtml(question.id)}" value="${escapeHtml(currentAns)}" placeholder="Write your answer here..." autocomplete="off" spellcheck="false" aria-label="Written answer for question ${escapeHtml(question.id)}"${disabledAttr}>
        ${(allowInstantSubmit && !isGraded && !isCompleted) ? `<button type="button" class="btn-primary btn-sm" data-submit-coding-q="${escapeHtml(question.id)}">${icons ? icons.icon('check-circle', { size: 14 }) : ''} Submit Answer</button>` : ''}
        ${(!isGraded && !isCompleted && currentAns) ? `<button type="button" class="btn-ghost btn-sm" data-reset-coding-q="${escapeHtml(question.id)}">${icons ? icons.icon('repeat', { size: 14 }) : ''} Clear</button>` : ''}
      </div>
    </div>`;
  }

  function buildLineNumbersHtml(codeText, minLines = 5) {
    const lineCount = Math.max(minLines, String(codeText || '').split(/\r?\n/).length);
    const nums = [];
    for (let i = 1; i <= lineCount; i++) {
      nums.push(`<span>${i}</span>`);
    }
    return nums.join('');
  }

  function renderClozeInteractiveBlock(question, qState, csharpEngine, icons, isGraded, allowInstantSubmit, isCompleted) {
    const template = String(question.clozeTemplate || question.code || '');
    const blanks = Array.isArray(question.blanks) ? question.blanks : [];
    const clozeAnswers = (qState && qState.clozeAnswers) || {};
    const grading = (qState && qState.gradingResult) || null;
    const blankResults = (grading && Array.isArray(grading.blankResults)) ? grading.blankResults : [];
    const disabledAttr = ((isGraded && allowInstantSubmit) || isCompleted) ? ' disabled' : '';

    // Split template around {{BLANK_1}} or {{1}} markers
    const parts = template.split(/(\{\{(?:BLANK_)?\d+\}\})/g);
    const renderedTemplate = parts.map(part => {
      const m = part.match(/^\{\{(?:BLANK_)?(\d+)\}\}$/);
      if (!m) {
        return (csharpEngine && typeof csharpEngine.highlightCSharp === 'function')
          ? csharpEngine.highlightCSharp(part)
          : escapeHtml(part);
      }
      const oneBasedIdx = parseInt(m[1], 10);
      const idx = Math.max(0, oneBasedIdx - 1);
      const bDef = blanks[idx] || { id: `blank_${oneBasedIdx}`, expected: '', marks: 1 };
      const bId = bDef.id || `blank_${oneBasedIdx}`;
      const val = clozeAnswers[bId] !== undefined
        ? clozeAnswers[bId]
        : (clozeAnswers[idx] !== undefined ? clozeAnswers[idx] : '');
      const bRes = blankResults[idx] || null;

      let stateCls = '';
      let inlineFeedback = '';
      if (isGraded && bRes) {
        if (bRes.status === 'passed') {
          stateCls = 'cloze-input-correct';
          inlineFeedback = `<span class="cloze-inline-badge badge-pass" title="Correct">+${bRes.earnedMarks}/${bRes.maxMarks}</span>`;
        } else if (bRes.status === 'partial') {
          stateCls = 'cloze-input-partial';
          inlineFeedback = `<span class="cloze-inline-badge badge-partial" title="${escapeHtml(bRes.feedback)}">+${bRes.earnedMarks}/${bRes.maxMarks} (${escapeHtml(bDef.expected)})</span>`;
        } else {
          stateCls = 'cloze-input-incorrect';
          inlineFeedback = `<span class="cloze-inline-badge badge-fail" title="${escapeHtml(bRes.feedback)}">0/${bRes.maxMarks} (Ans: ${escapeHtml(bDef.expected)})</span>`;
        }
      }

      const widthCh = Math.max(10, Math.min(34, String(bDef.expected || 'expression').length + 4));
      return `<span class="cloze-slot-wrap"><span class="cloze-slot-num">[${oneBasedIdx}]</span><input type="text" class="cloze-blank-input ${stateCls}" style="width:${widthCh}ch" data-cloze-q-id="${escapeHtml(question.id)}" data-cloze-blank-id="${escapeHtml(bId)}" data-cloze-blank-idx="${idx}" value="${escapeHtml(val)}" placeholder="${escapeHtml(bDef.placeholder || ('Blank ' + oneBasedIdx))}" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Blank ${oneBasedIdx}: ${escapeHtml(bDef.hint || 'C# code completion')}"${disabledAttr}>${inlineFeedback}</span>`;
    }).join('');

    const hintsHtml = (allowInstantSubmit && blanks.some(b => b.hint))
      ? `<div class="cloze-hints-bar">
          ${blanks.map((b, i) => `<span class="cloze-hint-chip"><strong>[${i + 1}]</strong> ${escapeHtml(b.hint || 'Complete C# token')} <em>(${b.marks || 1}m)</em></span>`).join('')}
        </div>`
      : '';

    const actionsHtml = (!isGraded && !isCompleted)
      ? `<div class="coding-q-actions-bar">
          ${allowInstantSubmit ? `<button type="button" class="btn-primary btn-sm" data-submit-coding-q="${escapeHtml(question.id)}">
            ${icons ? icons.icon('check-circle', { size: 14 }) : ''} Submit &amp; Mark Blanks
          </button>` : ''}
          <button type="button" class="btn-ghost btn-sm" data-reset-coding-q="${escapeHtml(question.id)}">
            ${icons ? icons.icon('repeat', { size: 14 }) : ''} Clear Blanks
          </button>
        </div>`
      : '';

    return `<div class="cloze-interactive-wrap">
      <div class="code-block-bar">
        <span class="code-lang-tag">C# Interactive Code Completion (${blanks.length} Blanks)</span>
      </div>
      <pre class="code-pre cloze-code-pre" tabindex="0"><code>${renderedTemplate}</code></pre>
      ${hintsHtml}
      ${actionsHtml}
    </div>`;
  }

  function renderCodeEditorInteractiveBlock(question, qState, csharpEngine, icons, isGraded, allowInstantSubmit, isCompleted) {
    const isSnippet = question.questionType === 'code-snippet';
    const minLines = isSnippet ? 6 : 12;
    const currentCode = (qState && typeof qState.codeAnswer === 'string')
      ? qState.codeAnswer
      : (question.starterCode || '');
    const disabledAttr = ((isGraded && allowInstantSubmit) || isCompleted) ? ' readonly' : '';

    const controlsBar = Array.isArray(question.controls) && question.controls.length > 0
      ? `<div class="coding-controls-strip">
          <span class="coding-controls-label">Form Controls &amp; Objects:</span>
          ${question.controls.map(c => `<code class="coding-ctrl-chip">${escapeHtml(c)}</code>`).join('')}
        </div>`
      : '';

    const headerHtml = question.methodHeader
      ? `<pre class="coding-scaffolding-pre coding-scaffolding-header" aria-label="Read-only method header"><code>${(csharpEngine && csharpEngine.highlightCSharp) ? csharpEngine.highlightCSharp(question.methodHeader) : escapeHtml(question.methodHeader)}</code></pre>`
      : '';

    const footerHtml = question.methodFooter
      ? `<pre class="coding-scaffolding-pre coding-scaffolding-footer" aria-label="Read-only method footer"><code>${(csharpEngine && csharpEngine.highlightCSharp) ? csharpEngine.highlightCSharp(question.methodFooter) : escapeHtml(question.methodFooter)}</code></pre>`
      : '';

    const formatBadge = isSnippet ? 'Short C# Code Snippet' : 'Full C# Programming Question';

    return `<div class="q-code-editor-shell ${isSnippet ? 'editor-snippet' : 'editor-full'}">
      ${controlsBar}
      <div class="q-editor-toolbar">
        <span class="code-lang-tag">${escapeHtml(formatBadge)}</span>
        <div class="q-editor-btn-group">
          <button type="button" class="btn-secondary btn-xs" data-check-syntax-q="${escapeHtml(question.id)}" title="Run Roslyn-style C# syntax check">
            ${icons ? icons.icon('code', { size: 13 }) : ''} Check Syntax
          </button>
          <button type="button" class="btn-secondary btn-xs" data-run-snippet-q="${escapeHtml(question.id)}" title="Simulate execution against sample inputs">
            ${icons ? icons.icon('terminal', { size: 13 }) : ''} ${isSnippet ? 'Run Snippet' : 'Run Tests'}
          </button>
          ${(!isGraded && !isCompleted) ? `<button type="button" class="btn-ghost btn-xs" data-reset-coding-q="${escapeHtml(question.id)}" title="Reset to starter code">
            ${icons ? icons.icon('repeat', { size: 13 }) : ''} Reset
          </button>` : ''}
          ${(allowInstantSubmit && !isGraded && !isCompleted) ? `<button type="button" class="btn-primary btn-xs" data-submit-coding-q="${escapeHtml(question.id)}">
            ${icons ? icons.icon('check-circle', { size: 13 }) : ''} Submit Answer
          </button>` : ''}
        </div>
      </div>
      ${headerHtml}
      <div class="code-editor-with-lines">
        <div class="line-numbers-gutter" id="gutter_${escapeHtml(question.id)}" aria-hidden="true">${buildLineNumbersHtml(currentCode, minLines)}</div>
        <textarea class="q-code-textarea" id="codeInput_${escapeHtml(question.id)}" data-code-q-id="${escapeHtml(question.id)}" rows="${minLines}" spellcheck="false" autocomplete="off" autocapitalize="off" placeholder="// Write your C# code here..." aria-label="C# code editor for question ${escapeHtml(question.id)}"${disabledAttr}>${escapeHtml(currentCode)}</textarea>
      </div>
      ${footerHtml}
      <div class="q-live-sandbox-output hidden" id="liveSandbox_${escapeHtml(question.id)}" role="region" aria-live="polite"></div>
    </div>`;
  }

  function renderCodingExplanationPanel(question, qState, deps = {}) {
    const { csharpEngine, defsEngine, icons, showSimilarBtn, isUnderstood } = deps;
    const qt = question.questionType || question.type;
    let grading = qState && qState.gradingResult;
    if (!grading && csharpEngine) {
      grading = qt === 'code-cloze'
        ? csharpEngine.evaluateClozeQuestion(question, (qState && qState.clozeAnswers) || {}, { revealSolution: true })
        : (qt === 'short-answer' && typeof csharpEngine.evaluateShortAnswerQuestion === 'function')
          ? csharpEngine.evaluateShortAnswerQuestion(question, (qState && qState.codeAnswer) || '', { revealSolution: true })
          : csharpEngine.evaluateCodingQuestion(question, (qState && qState.codeAnswer) || '', { revealSolution: true });
    }

    const earned = grading ? grading.earnedMarks : (qState ? qState.earnedMarks : 0);
    const maxM = grading ? grading.maxMarks : (Number(question.marks) || 5);
    const pct = maxM > 0 ? Math.round((earned / maxM) * 100) : 0;
    const isCorrect = earned >= maxM;
    const isPartial = earned > 0 && earned < maxM;
    const isUnanswered = !grading || grading.answered === false;
    const isBookmarkedOnly = Boolean(qState && qState.bookmarkedReview && isUnanswered && earned === 0);

    const statusClass = isBookmarkedOnly ? 'feedback-neutral' : (isCorrect ? 'feedback-correct' : (isPartial ? 'feedback-partial' : 'feedback-incorrect'));
    const statusIcon = icons
      ? icons.icon(isBookmarkedOnly ? 'flag' : (isCorrect ? 'check-circle' : (isPartial ? 'flag' : 'x-circle')), { size: 18 })
      : '';
    const statusHeading = isBookmarkedOnly
      ? `Flagged for Review (Not Yet Attempted) — Official Memorandum Answer`
      : isCorrect
        ? `Full Memorandum Credit (+${earned} / ${maxM} marks — ${pct}%)`
        : isPartial
          ? `Partial Memorandum Credit (+${earned} / ${maxM} marks — ${pct}%)`
          : `0 / ${maxM} marks — Official Memorandum Answer`;

    const rubricRows = (grading && Array.isArray(grading.rubricResults) ? grading.rubricResults : []).map(r => {
      const badgeCls = r.status === 'passed' ? 'rubric-status-pass' : (r.status === 'partial' ? 'rubric-status-partial' : 'rubric-status-fail');
      const badgeLabel = r.status === 'passed' ? 'Passed' : (r.status === 'partial' ? 'Partial' : 'Failed');
      return `<tr>
        <td><strong>${escapeHtml(r.criterion)}</strong></td>
        <td class="rubric-marks-cell">${r.earnedMarks} / ${r.availableMarks}</td>
        <td><span class="rubric-status-pill ${badgeCls}">${badgeLabel}</span></td>
        <td>
          <div>${escapeHtml(r.explanation || '')}</div>
          ${r.suggestion ? `<div class="rubric-suggestion-note"><em>Fix:</em> ${escapeHtml(r.suggestion)}</div>` : ''}
        </td>
      </tr>`;
    }).join('');

    const rubricTableHtml = rubricRows
      ? `<div class="memo-rubric-section">
          <h4 class="memo-sub-heading">NWU Memorandum Marking Breakdown</h4>
          <div class="table-responsive-wrap">
            <table class="memo-rubric-table">
              <thead>
                <tr>
                  <th>Criterion / Checkpoint</th>
                  <th>Marks</th>
                  <th>Status</th>
                  <th>Diagnostic Feedback</th>
                </tr>
              </thead>
              <tbody>${rubricRows}</tbody>
            </table>
          </div>
        </div>`
      : '';

    const testRows = (grading && Array.isArray(grading.testResults) ? grading.testResults : []).map(tr => {
      const badgeCls = tr.passed ? 'rubric-status-pass' : 'rubric-status-fail';
      return `<tr>
        <td>${escapeHtml(tr.name)}</td>
        <td><code>${escapeHtml(tr.expected)}</code></td>
        <td><code>${escapeHtml(tr.actual)}</code></td>
        <td><span class="rubric-status-pill ${badgeCls}">${tr.passed ? 'Pass' : 'Fail'}</span></td>
      </tr>`;
    }).join('');

    const testTableHtml = testRows
      ? `<div class="memo-tests-section">
          <h4 class="memo-sub-heading">Behavioral Test Case Execution</h4>
          <div class="table-responsive-wrap">
            <table class="memo-rubric-table">
              <thead>
                <tr>
                  <th>Test Case</th>
                  <th>Expected Output</th>
                  <th>Actual Output</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>${testRows}</tbody>
            </table>
          </div>
        </div>`
      : '';

    const modelSol = question.modelSolution || question.expectedAnswer || '';
    const studentCodeStr = qt === 'code-cloze'
      ? Object.entries((qState && qState.clozeAnswers) || {}).map(([k, v]) => `${k}: ${v}`).join('\n')
      : ((qState && qState.codeAnswer) || (qt === 'short-answer' ? '(No answer submitted)' : '(No code submitted)'));

    const formatSol = (txt) => (qt !== 'short-answer' && csharpEngine && csharpEngine.highlightCSharp)
      ? csharpEngine.highlightCSharp(txt)
      : escapeHtml(txt);

    const sideBySideHtml = modelSol
      ? `<div class="memo-comparison-grid">
          <div class="memo-comparison-col">
            <div class="code-block-bar"><span class="code-lang-tag">${qt === 'short-answer' ? 'Your Answer' : 'Student Submission'}</span></div>
            <pre class="code-pre"><code>${formatSol(studentCodeStr)}</code></pre>
          </div>
          <div class="memo-comparison-col">
            <div class="code-block-bar"><span class="code-lang-tag">Official NWU Model Solution</span></div>
            <pre class="code-pre"><code>${formatSol(modelSol)}</code></pre>
          </div>
        </div>`
      : '';

    const rawExpHtml = defsEngine
      ? defsEngine.renderTextWithInlineLinks(question.explanation || question.exp || '', { maxLinks: 3 })
      : escapeHtml(question.explanation || question.exp || '');

    const detailsNoteHtml = rawExpHtml
      ? `<details class="distractor-details" data-panel-id="distractor_${escapeHtml(question.id)}">
          <summary>Memorandum Marking Notes</summary>
          <p>${rawExpHtml}</p>
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
      </div>
      ${sideBySideHtml}
      ${rubricTableHtml}
      ${testTableHtml}
      ${detailsNoteHtml}
      ${relDefs}
      ${reviewActions}
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
    if (isCodingQuestion(question)) {
      return renderCodingExplanationPanel(question, qState, deps);
    }
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

    const isGraded = Boolean(isCompleted || (qState && qState.status === 'submitted'));
    const stemHtml = defsEngine
      ? defsEngine.renderTextWithInlineLinks(question.stem || question.q || '', { maxLinks: 3 })
      : escapeHtml(question.stem || question.q || '');
    const flagIcon = icons ? icons.icon('flag', { size: 15 }) : '';
    const diffClass = `diff-${String(question.difficulty || 'Intermediate').toLowerCase()}`;

    if (isCodingQuestion(question)) {
      const qt = question.questionType || question.type;
      const formatLabel = qt === 'short-answer'
        ? 'Written Answer'
        : qt === 'code-cloze'
          ? 'Code Cloze'
          : (qt === 'code-snippet' ? 'C# Snippet' : 'Full C#');
      const refCodeHtml = (qt !== 'code-cloze' && question.code)
        ? renderCodeBlock(question.code, csharpEngine, icons, 'C# Code')
        : '';
      const interactiveBodyHtml = qt === 'short-answer'
        ? renderShortAnswerInteractiveBlock(question, qState, csharpEngine, icons, isGraded, allowInstantSubmit, isCompleted)
        : qt === 'code-cloze'
          ? renderClozeInteractiveBlock(question, qState, csharpEngine, icons, isGraded, allowInstantSubmit, isCompleted)
          : renderCodeEditorInteractiveBlock(question, qState, csharpEngine, icons, isGraded, allowInstantSubmit, isCompleted);

      const feedbackHtml = isGraded
        ? renderCodingExplanationPanel(question, qState, {
            csharpEngine,
            defsEngine,
            icons,
            showSimilarBtn: !compact,
            isUnderstood
          })
        : '';

      if (continuousMode) {
        return `<article class="paper-q-card paper-coding-q-card ${isFlagged ? 'is-flagged' : ''}" id="paperQuestion_${escapeHtml(question.id)}" data-question-id="${escapeHtml(question.id)}" data-question-type="${escapeHtml(qt)}">
          <div class="q-card-meta">
            <div class="q-meta-left">
              <span class="q-number-pill">Question ${index + 1}</span>
              <span class="q-su-pill">${escapeHtml(question.su)}</span>
              <span class="q-format-pill">${escapeHtml(formatLabel)}</span>
              <span class="q-diff-pill ${diffClass}">${escapeHtml(question.difficulty || 'Intermediate')}</span>
              <span class="q-marks-pill">[${question.marks || 5} marks]</span>
            </div>
            <button type="button" class="q-flag-btn ${isFlagged ? 'active' : ''}" data-flag-q="${escapeHtml(question.id)}"
              aria-pressed="${isFlagged ? 'true' : 'false'}" title="${isFlagged ? 'Remove flag' : 'Flag question for review'}">
              ${flagIcon} <span>${isFlagged ? 'Flagged' : 'Flag'}</span>
            </button>
          </div>
          <div class="q-stem-text">${stemHtml}</div>
          ${refCodeHtml}
          ${interactiveBodyHtml}
          ${feedbackHtml}
        </article>`;
      }

      return `<article class="single-q-card coding-q-card ${compact ? 'compact-q-card' : ''}" data-question-id="${escapeHtml(question.id)}" data-question-type="${escapeHtml(qt)}">
        <div class="q-card-meta">
          <div class="q-meta-left">
            <span class="q-su-pill">${escapeHtml(question.su)}</span>
            <span class="q-format-pill">${escapeHtml(formatLabel)}</span>
            ${!compact ? `<span class="q-topic-pill">${escapeHtml(question.topicTitle || '')}</span>` : ''}
            <span class="q-diff-pill ${diffClass}">${escapeHtml(question.difficulty || 'Intermediate')}</span>
            <span class="q-marks-pill">${question.marks || 5} marks</span>
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
        ${refCodeHtml}
        ${interactiveBodyHtml}
        ${feedbackHtml}
      </article>`;
    }

    const opts = question.options || question.opts || [];
    const correctIdx = question.answer !== undefined ? question.answer : question.ans;
    const selectedIdx = qState && typeof qState.selectedAnswer === 'number' ? qState.selectedAnswer : null;
    const codeHtml = renderCodeBlock(question.code, csharpEngine, icons, 'C# Fragment');

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
    isCodingQuestion,
    buildLineNumbersHtml,
    escapeHtml,
    renderCodeBlock,
    renderShortAnswerInteractiveBlock,
    renderClozeInteractiveBlock,
    renderCodeEditorInteractiveBlock,
    renderCodingExplanationPanel,
    renderExplanationPanel,
    renderQuestionCard
  };
});
