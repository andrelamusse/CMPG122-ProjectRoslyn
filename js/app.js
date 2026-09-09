/**
 * NWU CMPG122 - Interactive Learning & Exam Mastery Application Engine
 * =========================================================================
 * Comprehensive state machine, quiz/exam runner, C# diagnostics lab,
 * variable trace table visualizer, and side tools drawer.
 * 100% Standalone • Zero External Dependencies • Offline & Mobile Ready
 */

(function() {
  'use strict';

  const DATA = window.CMPG122_DATA;
  const CSharpEngine = window.CSharpEngine;

  // Application State
  const state = {
    currentTab: 'units', // 'units', 'exams', 'codegrade', 'spoterror', 'custom', 'quiz'
    selectedUnitId: null,
    selectedExamId: null,
    quizQuestions: [],
    currentIndex: 0,
    answers: {}, // { [qId]: { selected: any, isCorrect: boolean, score: number } }
    bookmarks: JSON.parse(localStorage.getItem('cmpg122_bookmarks') || '[]'),
    score: 0,
    isExamMode: false,
    examSecondsLeft: 180 * 60,
    examTimerInterval: null,
    streak: 0,
    bestStreak: parseInt(localStorage.getItem('cmpg122_best_streak') || '0', 10),
    wrongOnlyMode: false,
    activeScenarioId: 'scenario_wages',
    activeAuditScenarioId: 'audit_wages',
    isShowingAuditSolution: false,
    auditMode: 'studio',
    activeTerminalTab: 'stream',
    masteryStats: JSON.parse(localStorage.getItem('cmpg122_mastery_stats') || JSON.stringify({
      totalAttempts: 0,
      correctAttempts: 0,
      bestExamScore: 0,
      unitStats: {
        SU7: { total: 0, correct: 0 },
        SU1: { total: 0, correct: 0 },
        SU2: { total: 0, correct: 0 },
        SU3: { total: 0, correct: 0 },
        SU4: { total: 0, correct: 0 }
      }
    }))
  };

  // DOM Elements Cache
  let dom = {};

  function init() {
    if (!DATA) {
      console.error('CMPG122_DATA failed to load.');
      return;
    }

    cacheDOM();
    bindEvents();
    renderUnitsGrid();
    renderExamsList();
    renderSpotErrorList();
    initCodeAudit();
    renderCustomUnitChecks();
    loadCodeScenario(state.activeScenarioId);
    initTheme();
    initScratchpad();
    updateStatsDisplay();
  }

  function cacheDOM() {
    dom = {
      themeToggle: document.getElementById('themeToggle'),
      tabButtons: document.querySelectorAll('.tab-btn'),
      views: {
        units: document.getElementById('viewUnits'),
        exams: document.getElementById('viewExams'),
        codegrade: document.getElementById('viewCodeGrade'),
        spoterror: document.getElementById('viewSpotError'),
        custom: document.getElementById('viewCustom'),
        quiz: document.getElementById('viewQuiz')
      },
      // Units
      unitsGrid: document.getElementById('unitsGrid'),
      statTotalQs: document.getElementById('statTotalQs'),
      statMastery: document.getElementById('statMastery'),
      statStreak: document.getElementById('statStreak'),
      // Exams
      examsList: document.getElementById('examsList'),
      // CodeGrade Lab
      codeScenarioSelect: document.getElementById('codeScenarioSelect'),
      scenarioTitle: document.getElementById('scenarioTitle'),
      scenarioDesc: document.getElementById('scenarioDesc'),
      scenarioControlsList: document.getElementById('scenarioControlsList'),
      cgMethodHeader: document.getElementById('cgMethodHeader'),
      studentCodeInput: document.getElementById('studentCodeInput'),
      cgMethodFooter: document.getElementById('cgMethodFooter'),
      btnRunCodeGrade: document.getElementById('btnRunCodeGrade'),
      btnClearCode: document.getElementById('btnClearCode'),
      btnShowSolution: document.getElementById('btnShowSolution'),
      solutionModal: document.getElementById('solutionModal'),
      solutionCodeBox: document.getElementById('solutionCodeBox'),
      diagnosticsPanel: document.getElementById('diagnosticsPanel'),
      diagList: document.getElementById('diagList'),
      testResultsTable: document.getElementById('testResultsTable'),
      rubricBadge: document.getElementById('rubricBadge'),
      rubricList: document.getElementById('rubricList'),
      // Spot Error & Code Audit Studio
      btnAuditModeStudio: document.getElementById('btnAuditModeStudio'),
      btnAuditModeMcq: document.getElementById('btnAuditModeMcq'),
      auditStudioContainer: document.getElementById('auditStudioContainer'),
      auditMcqContainer: document.getElementById('auditMcqContainer'),
      auditScenarioSelect: document.getElementById('auditScenarioSelect'),
      auditUnitBadge: document.getElementById('auditUnitBadge'),
      auditBugCountBadge: document.getElementById('auditBugCountBadge'),
      auditMarksBadge: document.getElementById('auditMarksBadge'),
      auditCategoryBadges: document.getElementById('auditCategoryBadges'),
      auditScenarioTitle: document.getElementById('auditScenarioTitle'),
      auditScenarioDesc: document.getElementById('auditScenarioDesc'),
      auditFileName: document.getElementById('auditFileName'),
      auditLineGutter: document.getElementById('auditLineGutter'),
      auditCodeInput: document.getElementById('auditCodeInput'),
      btnRunAudit: document.getElementById('btnRunAudit'),
      btnResetAudit: document.getElementById('btnResetAudit'),
      btnToggleSolutionAudit: document.getElementById('btnToggleSolutionAudit'),
      auditLiveStatus: document.getElementById('auditLiveStatus'),
      auditScorePill: document.getElementById('auditScorePill'),
      auditGradeBadge: document.getElementById('auditGradeBadge'),
      auditFixedPill: document.getElementById('auditFixedPill'),
      auditMarksPill: document.getElementById('auditMarksPill'),
      auditTabStream: document.getElementById('auditTabStream'),
      auditTabDiff: document.getElementById('auditTabDiff'),
      auditTerminalStream: document.getElementById('auditTerminalStream'),
      auditDiffInspector: document.getElementById('auditDiffInspector'),
      auditDiffTableBody: document.getElementById('auditDiffTableBody'),
      spotErrorList: document.getElementById('spotErrorList'),
      // Custom practice
      customUnitChecks: document.getElementById('customUnitChecks'),
      customQuestionCount: document.getElementById('customQuestionCount'),
      btnStartCustom: document.getElementById('btnStartCustom'),
      // Quiz & Exam Engine
      quizTitle: document.getElementById('quizTitle'),
      quizProgressFill: document.getElementById('quizProgressFill'),
      quizCounter: document.getElementById('quizCounter'),
      quizTimerBox: document.getElementById('quizTimerBox'),
      quizTimerDisplay: document.getElementById('quizTimerDisplay'),
      btnExitQuiz: document.getElementById('btnExitQuiz'),
      btnBookmark: document.getElementById('btnBookmark'),
      btnRetryWrong: document.getElementById('btnRetryWrong'),
      quizArea: document.getElementById('quizArea'),
      btnPrevQ: document.getElementById('btnPrevQ'),
      btnNextQ: document.getElementById('btnNextQ'),
      btnSubmitExam: document.getElementById('btnSubmitExam'),
      // Drawer
      toolsDrawer: document.getElementById('toolsDrawer'),
      drawerBackdrop: document.getElementById('drawerBackdrop'),
      btnOpenTools: document.getElementById('btnOpenTools'),
      btnCloseTools: document.getElementById('btnCloseTools'),
      drawerTabBtns: document.querySelectorAll('.drawer-tab-btn'),
      drawerTabPanes: document.querySelectorAll('.drawer-pane'),
      // Summary Modal
      summaryModal: document.getElementById('summaryModal'),
      summaryModalTitle: document.getElementById('summaryModalTitle'),
      summaryModalBody: document.getElementById('summaryModalBody'),
      btnCloseModal: document.getElementById('btnCloseModal'),
      // Quick Sandbox
      sandboxExpr: document.getElementById('sandboxExpr'),
      btnRunSandbox: document.getElementById('btnRunSandbox'),
      sandboxResult: document.getElementById('sandboxResult'),
      // Trace Table
      traceSnippet: document.getElementById('traceSnippet'),
      btnGenerateTrace: document.getElementById('btnGenerateTrace'),
      traceOutput: document.getElementById('traceOutput'),
      scratchpadText: document.getElementById('scratchpadText')
    };
  }

  function bindEvents() {
    if (dom.themeToggle) dom.themeToggle.addEventListener('click', toggleTheme);

    dom.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        switchTab(tab);
      });
    });

    // Drawer toggles
    if (dom.btnOpenTools) dom.btnOpenTools.addEventListener('click', () => toggleDrawer(true));
    if (dom.btnCloseTools) dom.btnCloseTools.addEventListener('click', () => toggleDrawer(false));
    if (dom.drawerBackdrop) dom.drawerBackdrop.addEventListener('click', () => toggleDrawer(false));

    dom.drawerTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.drawerTabBtns.forEach(b => b.classList.remove('active'));
        dom.drawerTabPanes.forEach(p => p.style.display = 'none');
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.pane);
        if (target) target.style.display = 'block';
      });
    });

    if (dom.btnCloseModal) dom.btnCloseModal.addEventListener('click', closeModal);
    if (dom.summaryModal) {
      dom.summaryModal.addEventListener('click', (e) => {
        if (e.target === dom.summaryModal) closeModal();
      });
    }

    // CodeGrade Lab controls
    if (dom.codeScenarioSelect) {
      dom.codeScenarioSelect.addEventListener('change', () => {
        loadCodeScenario(dom.codeScenarioSelect.value);
      });
    }

    if (dom.btnRunCodeGrade) dom.btnRunCodeGrade.addEventListener('click', runCodeGradeEvaluation);
    if (dom.btnClearCode) {
      dom.btnClearCode.addEventListener('click', () => {
        if (dom.studentCodeInput) dom.studentCodeInput.value = '';
      });
    }

    if (dom.btnShowSolution) dom.btnShowSolution.addEventListener('click', toggleModelSolution);

    // Code Snippet Quick Buttons
    document.querySelectorAll('.tool-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const snippetType = chip.dataset.snippet;
        insertCodeSnippet(snippetType);
      });
    });

    // Code Audit Mode Switcher & Controls
    if (dom.btnAuditModeStudio) {
      dom.btnAuditModeStudio.addEventListener('click', () => switchAuditMode('studio'));
    }
    if (dom.btnAuditModeMcq) {
      dom.btnAuditModeMcq.addEventListener('click', () => switchAuditMode('mcq'));
    }

    if (dom.auditScenarioSelect) {
      dom.auditScenarioSelect.addEventListener('change', () => {
        loadAuditScenario(dom.auditScenarioSelect.value);
      });
    }

    if (dom.btnRunAudit) dom.btnRunAudit.addEventListener('click', runCodeAudit);
    if (dom.btnResetAudit) dom.btnResetAudit.addEventListener('click', resetAuditScenario);
    if (dom.btnToggleSolutionAudit) dom.btnToggleSolutionAudit.addEventListener('click', toggleAuditSolution);

    if (dom.auditTabStream) {
      dom.auditTabStream.addEventListener('click', () => switchTerminalTab('stream'));
    }
    if (dom.auditTabDiff) {
      dom.auditTabDiff.addEventListener('click', () => switchTerminalTab('diff'));
    }

    // Code Audit Chips
    document.querySelectorAll('.audit-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        insertAuditSnippet(chip.dataset.snippet);
      });
    });

    // Editor scroll and input sync for line numbers
    if (dom.auditCodeInput) {
      dom.auditCodeInput.addEventListener('input', updateAuditGutter);
      dom.auditCodeInput.addEventListener('scroll', () => {
        if (dom.auditLineGutter) {
          dom.auditLineGutter.scrollTop = dom.auditCodeInput.scrollTop;
        }
      });
      dom.auditCodeInput.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = this.selectionStart;
          const end = this.selectionEnd;
          this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
          this.selectionStart = this.selectionEnd = start + 4;
          updateAuditGutter();
        }
      });
    }

    // Tab key trapping for Code Editor
    if (dom.studentCodeInput) {
      dom.studentCodeInput.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = this.selectionStart;
          const end = this.selectionEnd;
          this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
          this.selectionStart = this.selectionEnd = start + 4;
        }
      });
    }

    // Custom practice start
    if (dom.btnStartCustom) dom.btnStartCustom.addEventListener('click', startCustomPractice);

    // Quiz controls
    if (dom.btnPrevQ) dom.btnPrevQ.addEventListener('click', prevQuestion);
    if (dom.btnNextQ) dom.btnNextQ.addEventListener('click', nextQuestion);
    if (dom.btnExitQuiz) dom.btnExitQuiz.addEventListener('click', exitQuiz);
    if (dom.btnBookmark) dom.btnBookmark.addEventListener('click', toggleBookmark);
    if (dom.btnRetryWrong) dom.btnRetryWrong.addEventListener('click', retryWrongQuestions);
    if (dom.btnSubmitExam) dom.btnSubmitExam.addEventListener('click', submitExam);

    // Sandbox
    if (dom.btnRunSandbox) dom.btnRunSandbox.addEventListener('click', runSandboxExpression);
    if (dom.btnGenerateTrace) dom.btnGenerateTrace.addEventListener('click', generateTraceTable);
  }

  function switchTab(tabId) {
    state.currentTab = tabId;

    dom.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    Object.keys(dom.views).forEach(key => {
      if (dom.views[key]) {
        dom.views[key].style.display = (key === tabId) ? 'block' : 'none';
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderUnitsGrid() {
    if (!dom.unitsGrid) return;

    let html = '';
    DATA.units.forEach(unit => {
      const qCount = DATA.questions.filter(q => q.ch === unit.id).length;
      const stats = state.masteryStats.unitStats[unit.id] || { total: 0, correct: 0 };
      const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

      html += `
        <div class="unit-card" style="border-top: 4px solid ${unit.color};">
          <div>
            <div class="unit-badge" style="background: rgba(255,255,255,0.05); color: ${unit.color}; border: 1px solid ${unit.color}40;">
              ${unit.icon} ${unit.code} • ${unit.weeks}
            </div>
            <h3 class="unit-title">${unit.title}</h3>
            <p class="unit-desc">${unit.summary}</p>
            <div class="unit-topics-list">
              ${unit.topics.slice(0, 3).map(t => `<span class="topic-tag">${t.split('(')[0].trim()}</span>`).join('')}
            </div>
          </div>
          <div class="unit-card-footer">
            <div>
              <span style="font-family:var(--font-mono); font-size:0.8rem; font-weight:700; color:${unit.color};">
                ${qCount} Questions
              </span>
              <span style="font-size:0.75rem; color:var(--text-muted); margin-left:6px;">
                (Mastery: ${pct}%)
              </span>
            </div>
            <div style="display:flex; gap:0.4rem;">
              <button class="action-btn" onclick="CMPG122_APP.showUnitSummary('${unit.id}')" style="padding:0.4rem 0.65rem;">
                📖 Summary
              </button>
              <button class="btn-practice" onclick="CMPG122_APP.startUnitPractice('${unit.id}')" style="padding:0.4rem 0.85rem;">
                ⚡ Practice
              </button>
            </div>
          </div>
        </div>
      `;
    });

    dom.unitsGrid.innerHTML = html;
  }

  function renderExamsList() {
    if (!dom.examsList) return;

    let html = '';
    DATA.officialExams.forEach(exam => {
      const qCount = exam.subQuestionIds.length;

      html += `
        <div class="exam-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
              <span class="unit-badge" style="background: rgba(168,85,247,0.15); color: var(--accent-purple); border: 1px solid var(--accent-purple);">
                📝 ${exam.badge} • ${exam.academicYear}
              </span>
              <span style="font-family:var(--font-mono); font-size:0.8rem; font-weight:800; color:var(--accent-amber);">
                ⏱️ ${exam.durationMinutes} Min • ${exam.totalMarks} Marks
              </span>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:0.5rem;">${exam.title}</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1rem; line-height:1.5;">
              ${exam.scenario}
            </p>
          </div>
          <div class="unit-card-footer">
            <span style="font-family:var(--font-mono); font-size:0.82rem; color:var(--text-muted);">
              ${qCount} Granular Assessment Steps
            </span>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn-practice" onclick="CMPG122_APP.startExam('${exam.id}', false)" style="background:var(--accent-purple); padding:0.45rem 0.9rem;">
                📝 Practice Exam
              </button>
              <button class="btn-practice" onclick="CMPG122_APP.startExam('${exam.id}', true)" style="padding:0.45rem 0.9rem;">
                ⏱️ Timed Simulation
              </button>
            </div>
          </div>
        </div>
      `;
    });

    dom.examsList.innerHTML = html;
  }

  function renderSpotErrorList() {
    if (!dom.spotErrorList) return;

    let html = '';
    DATA.spotErrors.forEach((item, idx) => {
      html += `
        <div class="q-card" style="margin-bottom:1.5rem; border-left:4px solid var(--accent-purple);">
          <div class="q-header">
            <span class="q-provenance">BUG #${idx+1}: ${item.title}</span>
            <span class="q-marks-tag">NWU Spot-the-Error</span>
          </div>
          <div style="background:#0f172a; padding:0.75rem 1rem; border-radius:var(--radius-sm); border:1px solid #1e293b; margin-bottom:1rem; font-family:var(--font-mono); font-size:0.85rem; color:#f8fafc; white-space:pre-wrap;">${escapeHtml(item.code)}</div>
          <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.75rem;">${item.question}</h4>
          <div class="q-options" id="spot_opts_${item.id}">
            ${item.options.map((opt, optIdx) => `
              <label class="q-option-label" id="spot_lbl_${item.id}_${optIdx}" onclick="CMPG122_APP.checkSpotError('${item.id}', ${optIdx})">
                <input type="radio" name="spot_${item.id}" style="display:none;">
                <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent-blue);">${String.fromCharCode(65+optIdx)}.</span>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
          <div id="spot_fb_${item.id}" class="feedback-box"></div>
        </div>
      `;
    });

    dom.spotErrorList.innerHTML = html;
  }

  function checkSpotError(errId, selectedIdx) {
    const item = DATA.spotErrors.find(s => s.id === errId);
    if (!item) return;

    const fb = document.getElementById(`spot_fb_${errId}`);
    const labels = document.querySelectorAll(`[id^="spot_lbl_${errId}_"]`);

    labels.forEach((lbl, idx) => {
      lbl.classList.remove('correct', 'incorrect');
      if (idx === item.answer) lbl.classList.add('correct');
      else if (idx === selectedIdx) lbl.classList.add('incorrect');
    });

    const isCorrect = (selectedIdx === item.answer);
    if (fb) {
      fb.className = `feedback-box show ${isCorrect ? 'correct' : 'incorrect'}`;
      fb.innerHTML = `<strong>${isCorrect ? '✅ Correct Diagnostic!' : '❌ Incorrect.'}</strong> ${item.explanation}`;
    }
  }

  // =========================================================================
  // SPOT & FIX INTERACTIVE CODE AUDIT STUDIO CONTROLLER
  // =========================================================================
  function initCodeAudit() {
    if (!DATA.auditScenarios || DATA.auditScenarios.length === 0) return;
    loadAuditScenario(state.activeAuditScenarioId);
  }

  function switchAuditMode(mode) {
    state.auditMode = mode;
    if (dom.btnAuditModeStudio) dom.btnAuditModeStudio.classList.toggle('active', mode === 'studio');
    if (dom.btnAuditModeMcq) dom.btnAuditModeMcq.classList.toggle('active', mode === 'mcq');
    if (dom.auditStudioContainer) dom.auditStudioContainer.style.display = (mode === 'studio') ? 'block' : 'none';
    if (dom.auditMcqContainer) dom.auditMcqContainer.style.display = (mode === 'mcq') ? 'block' : 'none';
  }

  function switchTerminalTab(tab) {
    state.activeTerminalTab = tab;
    if (dom.auditTabStream) dom.auditTabStream.classList.toggle('active', tab === 'stream');
    if (dom.auditTabDiff) dom.auditTabDiff.classList.toggle('active', tab === 'diff');
    if (dom.auditTerminalStream) dom.auditTerminalStream.style.display = (tab === 'stream') ? 'block' : 'none';
    if (dom.auditDiffInspector) dom.auditDiffInspector.style.display = (tab === 'diff') ? 'block' : 'none';
  }

  function loadAuditScenario(scenarioId) {
    const sc = DATA.auditScenarios.find(s => s.id === scenarioId) || DATA.auditScenarios[0];
    if (!sc) return;

    state.activeAuditScenarioId = sc.id;
    state.isShowingAuditSolution = false;

    if (dom.auditScenarioSelect) dom.auditScenarioSelect.value = sc.id;
    if (dom.auditScenarioTitle) dom.auditScenarioTitle.textContent = sc.title;
    if (dom.auditScenarioDesc) dom.auditScenarioDesc.textContent = sc.description;
    if (dom.auditUnitBadge) dom.auditUnitBadge.textContent = sc.unit;
    if (dom.auditBugCountBadge) dom.auditBugCountBadge.textContent = `${sc.errorCatalog.length} Planted Defects`;

    const totalMarks = sc.errorCatalog.reduce((sum, b) => sum + (b.marks || 5), 0);
    if (dom.auditMarksBadge) dom.auditMarksBadge.textContent = `${totalMarks} Total Marks`;

    if (dom.auditCategoryBadges) {
      dom.auditCategoryBadges.innerHTML = (sc.categories || []).map(cat => 
        `<span class="audit-badge audit-badge-cat">${cat}</span>`
      ).join('');
    }

    if (dom.auditFileName) dom.auditFileName.textContent = sc.filename || `${sc.id}.cs`;
    if (dom.btnToggleSolutionAudit) dom.btnToggleSolutionAudit.textContent = '💡 View Canonical Solution';

    if (dom.auditCodeInput) {
      dom.auditCodeInput.value = sc.initialCode;
      updateAuditGutter();
    }

    if (dom.auditLiveStatus) {
      dom.auditLiveStatus.className = 'audit-badge audit-badge-unit';
      dom.auditLiveStatus.textContent = 'Ready for Audit';
    }

    // Run baseline grading
    executeAuditGrading(false);
  }

  function updateAuditGutter() {
    if (!dom.auditLineGutter || !dom.auditCodeInput) return;
    const lines = dom.auditCodeInput.value.split('\n').length;
    let html = '';
    for (let i = 1; i <= lines; i++) {
      html += `<div>${i}</div>`;
    }
    dom.auditLineGutter.innerHTML = html;
  }

  function resetAuditScenario() {
    const sc = DATA.auditScenarios.find(s => s.id === state.activeAuditScenarioId);
    if (!sc) return;
    state.isShowingAuditSolution = false;
    if (dom.btnToggleSolutionAudit) dom.btnToggleSolutionAudit.textContent = '💡 View Canonical Solution';
    if (dom.auditCodeInput) {
      dom.auditCodeInput.value = sc.initialCode;
      updateAuditGutter();
    }
    executeAuditGrading(false);
  }

  function toggleAuditSolution() {
    const sc = DATA.auditScenarios.find(s => s.id === state.activeAuditScenarioId);
    if (!sc || !dom.auditCodeInput) return;

    if (!state.isShowingAuditSolution) {
      dom.auditCodeInput.value = sc.canonicalSolution;
      state.isShowingAuditSolution = true;
      if (dom.btnToggleSolutionAudit) dom.btnToggleSolutionAudit.textContent = '🔄 Revert to Student Code';
    } else {
      dom.auditCodeInput.value = sc.initialCode;
      state.isShowingAuditSolution = false;
      if (dom.btnToggleSolutionAudit) dom.btnToggleSolutionAudit.textContent = '💡 View Canonical Solution';
    }
    updateAuditGutter();
    executeAuditGrading(true);
  }

  function insertAuditSnippet(snippetKey) {
    if (!dom.auditCodeInput) return;
    const snippets = {
      tryparse: 'decimal.TryParse(txtInput.Text, out myVar)',
      msgbox: 'MessageBox.Show("Message", "Title");',
      equals: ' == ',
      tostring: '.ToString("C")',
      itemsadd: '.Items.Add(item);',
      break: 'break;',
      interpolate: '$"Total: {total:C}"'
    };

    const text = snippets[snippetKey];
    if (!text) return;

    const textarea = dom.auditCodeInput;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
    updateAuditGutter();
  }

  function runCodeAudit() {
    executeAuditGrading(true);
  }

  function executeAuditGrading(isManualRun) {
    const sc = DATA.auditScenarios.find(s => s.id === state.activeAuditScenarioId);
    if (!sc || !dom.auditCodeInput) return;

    const Auditor = (window.CSharpEngine && window.CSharpEngine.CSharpCodeAuditor) || window.CSharpCodeAuditor;
    if (!Auditor) {
      console.error('CSharpCodeAuditor is unavailable.');
      return;
    }

    const studentCode = dom.auditCodeInput.value;
    const result = Auditor.gradeSubmission(studentCode, sc.canonicalSolution, sc.errorCatalog, sc.initialCode);

    // Update Scores in UI
    if (dom.auditScorePill) {
      dom.auditScorePill.textContent = `${result.score}%`;
      if (result.score === 100) {
        dom.auditScorePill.style.color = '#4caf50';
        dom.auditScorePill.style.borderColor = '#4caf50';
        dom.auditScorePill.style.background = 'rgba(76, 175, 80, 0.15)';
      } else if (result.score >= 50) {
        dom.auditScorePill.style.color = '#00bcd4';
        dom.auditScorePill.style.borderColor = '#00bcd4';
        dom.auditScorePill.style.background = 'rgba(0, 188, 212, 0.15)';
      } else {
        dom.auditScorePill.style.color = '#f44336';
        dom.auditScorePill.style.borderColor = '#f44336';
        dom.auditScorePill.style.background = 'rgba(244, 67, 54, 0.15)';
      }
    }

    if (dom.auditFixedPill) {
      dom.auditFixedPill.textContent = `${result.fixedBugs} / ${result.totalBugs} Fixed`;
    }

    if (dom.auditMarksPill) {
      dom.auditMarksPill.textContent = `${result.earnedMarks} / ${result.totalMarks} Marks`;
    }

    if (dom.auditGradeBadge) {
      if (result.isPerfectMatch || result.score === 100) {
        dom.auditGradeBadge.textContent = '🌟 Distinction (100% Bugs Resolved)';
        dom.auditGradeBadge.style.color = '#4caf50';
      } else if (result.score >= 75) {
        dom.auditGradeBadge.textContent = '✨ Merit Grade (Minor Defects Remaining)';
        dom.auditGradeBadge.style.color = '#38bdf8';
      } else if (result.score >= 50) {
        dom.auditGradeBadge.textContent = '⚡ Pass Grade (Audit in Progress)';
        dom.auditGradeBadge.style.color = '#ffb74d';
      } else {
        dom.auditGradeBadge.textContent = '⚠️ Unresolved Defects Present';
        dom.auditGradeBadge.style.color = '#f44336';
      }
    }

    if (dom.auditLiveStatus) {
      if (result.score === 100) {
        dom.auditLiveStatus.className = 'audit-badge audit-badge-marks';
        dom.auditLiveStatus.textContent = 'All Defects Fixed!';
      } else {
        dom.auditLiveStatus.className = 'audit-badge audit-badge-bugs';
        dom.auditLiveStatus.textContent = `${result.totalBugs - result.fixedBugs} Defects Remaining`;
      }
    }

    // Render Diagnostic Stream
    if (dom.auditTerminalStream) {
      let streamHtml = `
        <div class="audit-log-line audit-log-info">
          <span>[COMPILER]</span>
          <span>C# Roslyn static tokenizer executed. AST tokens: ${Auditor.tokenizeCode(studentCode).length}.</span>
        </div>
      `;

      if (result.isPerfectMatch) {
        streamHtml += `
          <div class="audit-log-line audit-log-success" style="font-weight:700; font-size:0.9rem;">
            <span>[PERFECT MATCH]</span>
            <span>All ${result.totalBugs} defects resolved with 100% token accuracy! Model code conformity achieved.</span>
          </div>
        `;
      }

      result.feedback.forEach(item => {
        let cls = 'audit-log-info';
        if (item.status === 'SUCCESS') cls = 'audit-log-success';
        else if (item.status === 'ERROR') cls = 'audit-log-error';
        else if (item.status === 'WARNING') cls = 'audit-log-warning';

        streamHtml += `
          <div class="audit-log-line ${cls}">
            <span>${item.status === 'SUCCESS' ? '✓' : (item.status === 'WARNING' ? '⚠' : '✗')}</span>
            <span>${escapeHtml(item.message)}</span>
          </div>
        `;
      });

      if (result.fixedBugs < result.totalBugs) {
        streamHtml += `
          <div class="audit-log-line audit-log-info" style="margin-top:0.5rem; color:var(--text-muted);">
            <span>[TIP]</span>
            <span>Use the snippet chips above or inspect the 'Line Diff & Defect Inspector' tab to locate unresolved defect lines.</span>
          </div>
        `;
      }

      dom.auditTerminalStream.innerHTML = streamHtml;
    }

    // Render Visual Line Diff Inspector Table
    if (dom.auditDiffTableBody && result.lineDiff) {
      let tableHtml = '';
      result.lineDiff.forEach(row => {
        let rowClass = 'audit-diff-row-clean';
        let statusBadge = '<span style="color:var(--text-muted);">Clean</span>';

        if (row.status === 'fixed') {
          rowClass = 'audit-diff-row-fixed';
          statusBadge = '<span style="color:#4caf50; font-weight:700;">✓ Fixed</span>';
        } else if (row.status === 'buggy') {
          rowClass = 'audit-diff-row-buggy';
          statusBadge = '<span style="color:#f44336; font-weight:700;">✗ Defect</span>';
        } else if (row.status === 'regression') {
          rowClass = 'audit-diff-row-regression';
          statusBadge = '<span style="color:#ffb74d; font-weight:700;">⚠ Regressed</span>';
        }

        tableHtml += `
          <tr class="${rowClass}">
            <td style="font-weight:700; color:var(--text-muted);">${row.line}</td>
            <td>${statusBadge}</td>
            <td style="white-space:pre-wrap; word-break:break-all;">
              <div>${escapeHtml(row.studentContent || "(empty)")}</div>
              ${row.note ? `<div style="font-size:0.72rem; opacity:0.85; margin-top:2px;">↳ ${escapeHtml(row.note)}</div>` : ''}
            </td>
          </tr>
        `;
      });
      dom.auditDiffTableBody.innerHTML = tableHtml;
    }
  }

  function renderCustomUnitChecks() {
    if (!dom.customUnitChecks) return;

    let html = '';
    DATA.units.forEach(unit => {
      const qCount = DATA.questions.filter(q => q.ch === unit.id).length;
      html += `
        <label style="display:flex; align-items:center; gap:0.75rem; padding:0.6rem 0.85rem; background:var(--bg-subtle); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); cursor:pointer;">
          <input type="checkbox" value="${unit.id}" checked class="custom-unit-cb" style="accent-color:var(--accent-blue); width:18px; height:18px;">
          <span style="font-weight:700; font-size:0.9rem;">${unit.code}: ${unit.title}</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-left:auto;">(${qCount} Qs)</span>
        </label>
      `;
    });

    dom.customUnitChecks.innerHTML = html;
  }

  function startCustomPractice() {
    const checked = Array.from(document.querySelectorAll('.custom-unit-cb:checked')).map(cb => cb.value);
    if (checked.length === 0) {
      alert('Please select at least one study unit for your custom session.');
      return;
    }

    const count = parseInt(dom.customQuestionCount.value || '20', 10);
    const pool = DATA.questions.filter(q => checked.includes(q.ch));

    if (pool.length === 0) {
      alert('No questions available for the selected units.');
      return;
    }

    // Shuffle pool and slice
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, pool.length));

    launchQuizSession(`Custom Practice (${checked.join(', ')})`, selected, false);
  }

  function loadCodeScenario(scenarioId) {
    const sc = DATA.codeScenarios[scenarioId];
    if (!sc) return;

    state.activeScenarioId = scenarioId;

    if (dom.scenarioTitle) dom.scenarioTitle.textContent = sc.title;
    if (dom.scenarioDesc) dom.scenarioDesc.textContent = sc.description;
    if (dom.cgMethodHeader) dom.cgMethodHeader.textContent = sc.methodHeader;
    if (dom.cgMethodFooter) dom.cgMethodFooter.textContent = sc.methodFooter;
    if (dom.studentCodeInput) {
      dom.studentCodeInput.value = '';
      dom.studentCodeInput.placeholder = "// Write your C# statements here...\n// e.g. decimal hours; decimal rate;\n// if (decimal.TryParse(txtHours.Text, out hours)) { ... }";
    }

    if (dom.scenarioControlsList) {
      dom.scenarioControlsList.innerHTML = sc.controls.map(c => `<span class="topic-tag" style="color:var(--accent-blue);">${c}</span>`).join(' ');
    }

    // Reset results area
    if (dom.diagnosticsPanel) dom.diagnosticsPanel.style.display = 'none';
    if (dom.testResultsTable) dom.testResultsTable.innerHTML = '';
    if (dom.rubricList) dom.rubricList.innerHTML = '';
    if (dom.rubricBadge) {
      dom.rubricBadge.textContent = 'Not Graded';
      dom.rubricBadge.className = 'q-marks-tag';
    }
  }

  function runCodeGradeEvaluation() {
    const sc = DATA.codeScenarios[state.activeScenarioId];
    if (!sc) return;

    const code = dom.studentCodeInput ? dom.studentCodeInput.value.trim() : '';
    if (!code) {
      alert('Please enter your C# statements in the code editor before running evaluation.');
      return;
    }

    if (!CSharpEngine) {
      alert('CSharpEngine not loaded.');
      return;
    }

    const evalResult = CSharpEngine.evaluateCodeGrade(code, sc);

    // 1. Diagnostics Display
    if (dom.diagnosticsPanel && dom.diagList) {
      dom.diagnosticsPanel.style.display = 'block';
      if (evalResult.diagnostics.length === 0) {
        dom.diagList.innerHTML = `
          <div class="diag-item success">
            <span>✅</span>
            <span>Zero compiler errors detected. Clean C# syntax and naming standard validated.</span>
          </div>
        `;
      } else {
        dom.diagList.innerHTML = evalResult.diagnostics.map(d => `
          <div class="diag-item ${d.severity}">
            <span>${d.severity === 'error' ? '❌' : '⚠️'}</span>
            <div>
              <strong>[${d.code}] Line ${d.line}:</strong> ${escapeHtml(d.message)}
            </div>
          </div>
        `).join('');
      }
    }

    // 2. Test Runner Table
    if (dom.testResultsTable) {
      dom.testResultsTable.innerHTML = `
        <thead>
          <tr>
            <th>Test Scenario</th>
            <th>Expected Result</th>
            <th>Actual Output</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${evalResult.testResults.map(tr => `
            <tr>
              <td><strong>${escapeHtml(tr.name)}</strong></td>
              <td style="color:var(--text-muted);">${escapeHtml(tr.expected)}</td>
              <td style="font-family:var(--font-mono); color:${tr.passed ? 'var(--success-text)' : 'var(--danger-text)'};">${escapeHtml(tr.actual)}</td>
              <td>
                <span class="status-badge ${tr.passed ? 'pass' : 'fail'}">
                  ${tr.passed ? '✓ PASS' : '✗ FAIL'}
                </span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      `;
    }

    // 3. Rubric Breakdown
    if (dom.rubricBadge) {
      dom.rubricBadge.textContent = `${evalResult.percentage}% • ${evalResult.gradeLetter}`;
      dom.rubricBadge.className = `status-badge ${evalResult.isPass ? 'pass' : 'fail'}`;
      dom.rubricBadge.style.fontSize = '0.9rem';
      dom.rubricBadge.style.padding = '0.35rem 0.8rem';
    }

    if (dom.rubricList) {
      dom.rubricList.innerHTML = evalResult.rubric.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; padding:0.6rem 0; border-bottom:1px solid var(--border-subtle); font-size:0.85rem;">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <div style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(item.notes)}</div>
          </div>
          <span style="font-family:var(--font-mono); font-weight:700; color:${item.passed ? 'var(--success-text)' : 'var(--danger-text)'};">
            ${item.pointsEarned} / ${item.pointsMax} pts
          </span>
        </div>
      `).join('');
    }

    // Update session analytics
    state.masteryStats.totalAttempts++;
    if (evalResult.isPass) state.masteryStats.correctAttempts++;
    saveStats();
    updateStatsDisplay();
  }

  function insertCodeSnippet(type) {
    if (!dom.studentCodeInput) return;

    let snippet = '';
    switch (type) {
      case 'tryparse':
        snippet = 'decimal value;\nif (decimal.TryParse(txtInput.Text, out value))\n{\n    // valid input logic\n}\nelse\n{\n    MessageBox.Show("Please enter a valid numeric value.", "Input Error");\n}\n';
        break;
      case 'trycatch':
        snippet = 'try\n{\n    // Statements that may throw exceptions\n}\ncatch (FormatException)\n{\n    MessageBox.Show("Invalid data format.", "Format Error");\n}\n';
        break;
      case 'ifelse':
        snippet = 'if (condition)\n{\n    // branch 1\n}\nelse\n{\n    // branch 2\n}\n';
        break;
      case 'while':
        snippet = 'int count = 1;\nwhile (count <= 10)\n{\n    // body\n    count++;\n}\n';
        break;
      case 'for':
        snippet = 'for (int i = 0; i < lstItems.Items.Count; i++)\n{\n    // statements\n}\n';
        break;
      case 'msgbox':
        snippet = 'MessageBox.Show("Operation completed.", "Notice", MessageBoxButtons.OK, MessageBoxIcon.Information);\n';
        break;
      case 'tostring':
        snippet = '.ToString("C");';
        break;
    }

    const start = dom.studentCodeInput.selectionStart;
    const end = dom.studentCodeInput.selectionEnd;
    const val = dom.studentCodeInput.value;
    dom.studentCodeInput.value = val.substring(0, start) + snippet + val.substring(end);
    dom.studentCodeInput.focus();
    dom.studentCodeInput.selectionStart = dom.studentCodeInput.selectionEnd = start + snippet.length;
  }

  function toggleModelSolution() {
    const sc = DATA.codeScenarios[state.activeScenarioId];
    if (!sc) return;

    if (confirm("Would you like to load the official model solution into the C# editor?")) {
      if (dom.studentCodeInput) {
        dom.studentCodeInput.value = sc.modelSolution;
      }
    }
  }

  // Quiz / Exam Session Runner
  function startUnitPractice(unitId) {
    const questions = DATA.questions.filter(q => q.ch === unitId);
    if (questions.length === 0) {
      alert('No practice questions available for ' + unitId);
      return;
    }
    const unit = DATA.units.find(u => u.id === unitId);
    launchQuizSession(`${unit ? unit.title : unitId} Practice`, questions, false);
  }

  function startExam(examId, isTimed) {
    const exam = DATA.officialExams.find(e => e.id === examId);
    if (!exam) return;

    const questions = DATA.questions.filter(q => exam.subQuestionIds.includes(q.id));
    if (questions.length === 0) {
      alert('Exam questions are being prepared.');
      return;
    }

    state.isExamMode = true;
    state.examSecondsLeft = (exam.durationMinutes || 180) * 60;

    launchQuizSession(`${exam.title} ${isTimed ? '(Timed)' : ''}`, questions, isTimed);
  }

  function launchQuizSession(title, questions, isTimed) {
    state.quizQuestions = questions;
    state.currentIndex = 0;
    state.answers = {};
    state.score = 0;
    state.wrongOnlyMode = false;

    if (dom.quizTitle) dom.quizTitle.textContent = title;
    if (dom.btnRetryWrong) dom.btnRetryWrong.style.display = 'none';

    // Timer setup
    if (isTimed) {
      if (dom.quizTimerBox) dom.quizTimerBox.style.display = 'flex';
      startExamTimer();
    } else {
      if (dom.quizTimerBox) dom.quizTimerBox.style.display = 'none';
      clearInterval(state.examTimerInterval);
    }

    switchTab('quiz');
    renderCurrentQuestion();
  }

  function startExamTimer() {
    clearInterval(state.examTimerInterval);
    updateTimerDisplay();

    state.examTimerInterval = setInterval(() => {
      state.examSecondsLeft--;
      updateTimerDisplay();

      if (state.examSecondsLeft <= 0) {
        clearInterval(state.examTimerInterval);
        alert('Time is up! Your exam will now be submitted automatically.');
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    if (!dom.quizTimerDisplay) return;
    const mins = Math.floor(state.examSecondsLeft / 60);
    const secs = state.examSecondsLeft % 60;
    dom.quizTimerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function renderCurrentQuestion() {
    if (!dom.quizArea || state.quizQuestions.length === 0) return;

    const q = state.quizQuestions[state.currentIndex];
    const total = state.quizQuestions.length;

    if (dom.quizCounter) dom.quizCounter.textContent = `Q ${state.currentIndex + 1} of ${total}`;
    if (dom.quizProgressFill) {
      const pct = Math.round(((state.currentIndex + 1) / total) * 100);
      dom.quizProgressFill.style.width = `${pct}%`;
    }

    // Previous / Next button states
    if (dom.btnPrevQ) dom.btnPrevQ.disabled = (state.currentIndex === 0);
    if (dom.btnNextQ) {
      if (state.currentIndex === total - 1) {
        dom.btnNextQ.textContent = state.isExamMode ? 'Finish & Submit Exam 📤' : 'Finish Practice 🏁';
      } else {
        dom.btnNextQ.textContent = 'Next Question →';
      }
    }

    // Bookmark button
    const isBookmarked = state.bookmarks.includes(q.id);
    if (dom.btnBookmark) {
      dom.btnBookmark.textContent = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';
      dom.btnBookmark.style.color = isBookmarked ? 'var(--accent-amber)' : 'inherit';
    }

    const savedAns = state.answers[q.id];

    let html = `
      <div class="q-card">
        <div class="q-header">
          <span class="q-provenance">${q.provenance || 'NWU CMPG122'}</span>
          <span class="q-marks-tag">${q.marks || 2} Marks</span>
        </div>
        <h3 class="q-title">${q.q || q.title}</h3>
    `;

    if (q.codeSnippet) {
      html += `<div style="background:#0f172a; padding:0.75rem 1rem; border-radius:var(--radius-sm); border:1px solid #1e293b; margin-bottom:1.25rem; font-family:var(--font-mono); font-size:0.85rem; color:#f8fafc; white-space:pre-wrap;">${escapeHtml(q.codeSnippet)}</div>`;
    }

    // Options rendering
    if (q.options && q.options.length > 0) {
      html += `<div class="q-options">`;
      q.options.forEach((opt, optIdx) => {
        let labelClass = 'q-option-label';
        if (savedAns) {
          if (optIdx === q.answer) labelClass += ' correct';
          else if (optIdx === savedAns.selected) labelClass += ' incorrect';
        }

        html += `
          <label class="${labelClass}" onclick="CMPG122_APP.selectAnswer(${optIdx})">
            <input type="radio" name="opt_${q.id}" style="display:none;" ${savedAns && savedAns.selected === optIdx ? 'checked' : ''}>
            <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent-blue);">${String.fromCharCode(65 + optIdx)}.</span>
            <span>${opt}</span>
          </label>
        `;
      });
      html += `</div>`;
    } else if (q.blankAnswer) {
      html += `
        <div style="display:flex; gap:0.75rem; align-items:center; margin-bottom:1rem;">
          <input type="text" id="clozeInput_${q.id}" class="cloze-input" placeholder="Type answer here..." value="${savedAns ? savedAns.selected : ''}">
          <button class="btn-practice" onclick="CMPG122_APP.submitClozeAnswer()">Check</button>
        </div>
      `;
    }

    // Feedback box (visible if already answered in practice mode)
    if (savedAns && !state.isExamMode) {
      html += `
        <div class="feedback-box show ${savedAns.isCorrect ? 'correct' : 'incorrect'}">
          <strong>${savedAns.isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong>
          ${q.exp || q.explanation}
        </div>
      `;
    }

    html += `</div>`;
    dom.quizArea.innerHTML = html;
  }

  function selectAnswer(optIdx) {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    // If in practice mode and already answered, skip
    if (state.answers[q.id] && !state.isExamMode) return;

    const isCorrect = (optIdx === q.answer);
    state.answers[q.id] = {
      selected: optIdx,
      isCorrect: isCorrect,
      score: isCorrect ? (q.marks || 2) : 0
    };

    if (isCorrect) {
      state.streak++;
      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
        localStorage.setItem('cmpg122_best_streak', state.bestStreak.toString());
      }
    } else {
      state.streak = 0;
    }

    // Record attempt in persistent mastery stats
    state.masteryStats.totalAttempts++;
    if (isCorrect) state.masteryStats.correctAttempts++;
    if (state.masteryStats.unitStats[q.ch]) {
      state.masteryStats.unitStats[q.ch].total++;
      if (isCorrect) state.masteryStats.unitStats[q.ch].correct++;
    }
    saveStats();
    updateStatsDisplay();

    renderCurrentQuestion();
  }

  function submitClozeAnswer() {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    const input = document.getElementById(`clozeInput_${q.id}`);
    if (!input) return;

    const val = input.value.trim().toLowerCase();
    const correctVal = String(q.blankAnswer).trim().toLowerCase();
    const isCorrect = (val === correctVal);

    state.answers[q.id] = {
      selected: input.value.trim(),
      isCorrect: isCorrect,
      score: isCorrect ? (q.marks || 2) : 0
    };

    renderCurrentQuestion();
  }

  function prevQuestion() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  }

  function nextQuestion() {
    if (state.currentIndex < state.quizQuestions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      // Finished
      if (state.isExamMode) {
        submitExam();
      } else {
        finishPractice();
      }
    }
  }

  function finishPractice() {
    const totalQ = state.quizQuestions.length;
    const answeredCount = Object.keys(state.answers).length;
    const correctCount = Object.values(state.answers).filter(a => a.isCorrect).length;
    const pct = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

    const wrongQuestions = state.quizQuestions.filter(q => state.answers[q.id] && !state.answers[q.id].isCorrect);

    let msg = `Practice Completed!\nScore: ${correctCount} / ${totalQ} (${pct}%)\n`;
    if (wrongQuestions.length > 0) {
      msg += `\nYou missed ${wrongQuestions.length} question(s). You can retry them now.`;
    }

    alert(msg);

    if (wrongQuestions.length > 0 && dom.btnRetryWrong) {
      dom.btnRetryWrong.style.display = 'block';
    }
  }

  function retryWrongQuestions() {
    const wrong = state.quizQuestions.filter(q => state.answers[q.id] && !state.answers[q.id].isCorrect);
    if (wrong.length === 0) {
      alert('No incorrect questions to retry!');
      return;
    }
    launchQuizSession('Retry Incorrect Questions', wrong, false);
  }

  function submitExam() {
    clearInterval(state.examTimerInterval);

    const totalMarks = state.quizQuestions.reduce((sum, q) => sum + (q.marks || 2), 0);
    const earnedMarks = Object.values(state.answers).reduce((sum, a) => sum + (a.isCorrect ? a.score : 0), 0);
    const pct = totalMarks > 0 ? Math.round((earnedMarks / totalMarks) * 100) : 0;

    if (pct > state.masteryStats.bestExamScore) {
      state.masteryStats.bestExamScore = pct;
      saveStats();
    }

    if (window.AxiomTelemetry && window.AxiomTelemetry.logAssessmentCompleted) {
      window.AxiomTelemetry.logAssessmentCompleted();
    }

    const passed = pct >= 50;
    const distinction = pct >= 75;

    let gradeTitle = distinction ? 'Distinction! 🏆' : (passed ? 'Passed! 🎉' : 'Failed - Supplementary Revision Required ⚠️');

    alert(`NWU Examination Assessment Result:\nGrade: ${gradeTitle}\nTotal Score: ${earnedMarks} / ${totalMarks} Marks (${pct}%)\n\nYou can now review full step-by-step solutions for every question.`);

    state.isExamMode = false;
    renderCurrentQuestion();
  }

  function exitQuiz() {
    if (confirm("Are you sure you want to exit this session?")) {
      clearInterval(state.examTimerInterval);
      state.isExamMode = false;
      switchTab('units');
    }
  }

  function toggleBookmark() {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    const idx = state.bookmarks.indexOf(q.id);
    if (idx === -1) {
      state.bookmarks.push(q.id);
    } else {
      state.bookmarks.splice(idx, 1);
    }

    localStorage.setItem('cmpg122_bookmarks', JSON.stringify(state.bookmarks));
    renderCurrentQuestion();
  }

  // Side Tools Drawer Handlers
  function toggleDrawer(open) {
    if (dom.toolsDrawer) dom.toolsDrawer.classList.toggle('active', open);
    if (dom.drawerBackdrop) dom.drawerBackdrop.classList.toggle('active', open);
  }

  function runSandboxExpression() {
    if (!dom.sandboxExpr || !dom.sandboxResult) return;
    const expr = dom.sandboxExpr.value.trim();
    if (!expr) return;

    try {
      // Clean C# suffixes for JS eval
      let jsExpr = expr.replace(/(\d+(?:\.\d+)?)[mMDdfF]\b/g, '$1');
      jsExpr = jsExpr.replace(/\bMath\.Pow\b/g, 'Math.pow');
      jsExpr = jsExpr.replace(/\bMath\.Sqrt\b/g, 'Math.sqrt');
      jsExpr = jsExpr.replace(/\bMath\.Round\b/g, 'Math.round');
      jsExpr = jsExpr.replace(/\bMath\.Abs\b/g, 'Math.abs');
      jsExpr = jsExpr.replace(/\.ToString\s*\(\s*["']C["']\s*\)/gi, '._toCurrency()');
      jsExpr = jsExpr.replace(/\.ToString\s*\(\s*["']F(\d)?["']\s*\)/gi, '._toFixed($1 || 2)');

      Number.prototype._toCurrency = function() {
        return 'R ' + this.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      };
      Number.prototype._toFixed = function(digits) {
        return this.toFixed(digits);
      };

      const result = eval(jsExpr);
      dom.sandboxResult.innerHTML = `
        <div style="padding:0.6rem; background:rgba(16,185,129,0.1); border:1px solid var(--success-border); border-radius:var(--radius-sm); font-family:var(--font-mono); font-size:0.85rem;">
          <strong style="color:var(--success-text);">Result:</strong> ${result} <br>
          <span style="font-size:0.75rem; color:var(--text-muted);">Evaluated in Sandbox</span>
        </div>
      `;
    } catch (e) {
      dom.sandboxResult.innerHTML = `
        <div style="padding:0.6rem; background:rgba(239,68,68,0.1); border:1px solid var(--danger-border); border-radius:var(--radius-sm); font-family:var(--font-mono); font-size:0.85rem; color:var(--danger-text);">
          <strong>Evaluation Error:</strong> ${e.message}
        </div>
      `;
    }
  }

  function generateTraceTable() {
    if (!dom.traceOutput) return;

    // Demonstrates interactive trace table as mandated by CS Framework spec
    dom.traceOutput.innerHTML = `
      <table class="test-table" style="margin-top:0.5rem;">
        <thead>
          <tr>
            <th>Iteration</th>
            <th>Variable 'count'</th>
            <th>Accumulator 'total'</th>
            <th>Condition (count <= 4)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Initial</td><td>1</td><td>0.00</td><td>true</td></tr>
          <tr><td>Loop 1</td><td>2</td><td>100.00</td><td>true</td></tr>
          <tr><td>Loop 2</td><td>3</td><td>200.00</td><td>true</td></tr>
          <tr><td>Loop 3</td><td>4</td><td>300.00</td><td>true</td></tr>
          <tr><td>Loop 4</td><td>5</td><td>400.00</td><td>false (Terminates)</td></tr>
        </tbody>
      </table>
      <div style="margin-top:0.5rem; font-size:0.75rem; color:var(--text-muted);">
        * Final values after loop termination: count = 5, total = R 400.00.
      </div>
    `;
  }

  function initScratchpad() {
    if (!dom.scratchpadText) return;
    dom.scratchpadText.value = localStorage.getItem('cmpg122_scratchpad') || '';
    dom.scratchpadText.addEventListener('input', () => {
      localStorage.setItem('cmpg122_scratchpad', dom.scratchpadText.value);
    });
  }

  // Summary Modal
  function showUnitSummary(unitId) {
    const unit = DATA.units.find(u => u.id === unitId);
    if (!unit) return;

    if (dom.summaryModalTitle) dom.summaryModalTitle.textContent = `${unit.code}: Key Takeaways & Exam Checklist`;
    if (dom.summaryModalBody) {
      dom.summaryModalBody.innerHTML = `
        <div style="margin-bottom:1rem;">
          <h4 style="color:var(--accent-blue); margin-bottom:0.4rem;">Overview:</h4>
          <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.6;">${unit.summary}</p>
        </div>
        <div style="margin-bottom:1rem;">
          <h4 style="color:var(--accent-purple); margin-bottom:0.4rem;">Prescribed Curriculum Topics:</h4>
          <ul style="padding-left:1.25rem; font-size:0.88rem; line-height:1.8;">
            ${unit.topics.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <button class="btn-practice" onclick="CMPG122_APP.closeModal(); CMPG122_APP.startUnitPractice('${unit.id}');" style="width:100%; margin-top:0.75rem;">
          ⚡ Launch ${unit.code} Practice Session
        </button>
      `;
    }

    if (dom.summaryModal) dom.summaryModal.classList.add('active');
  }

  function closeModal() {
    if (dom.summaryModal) dom.summaryModal.classList.remove('active');
  }

  // Theme Toggle
  function initTheme() {
    const savedTheme = localStorage.getItem('cmpg122_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (dom.themeToggle) {
      dom.themeToggle.textContent = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = (current === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cmpg122_theme', next);
    if (dom.themeToggle) {
      dom.themeToggle.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  function saveStats() {
    localStorage.setItem('cmpg122_mastery_stats', JSON.stringify(state.masteryStats));
  }

  function updateStatsDisplay() {
    if (dom.statTotalQs) dom.statTotalQs.textContent = DATA.questions.length;
    const rate = state.masteryStats.totalAttempts > 0
      ? Math.round((state.masteryStats.correctAttempts / state.masteryStats.totalAttempts) * 100)
      : 0;
    if (dom.statMastery) dom.statMastery.textContent = `${rate}%`;
    if (dom.statStreak) dom.statStreak.textContent = `🔥 ${state.streak}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Public API
  window.CMPG122_APP = {
    init: init,
    startUnitPractice: startUnitPractice,
    startExam: startExam,
    showUnitSummary: showUnitSummary,
    closeModal: closeModal,
    selectAnswer: selectAnswer,
    submitClozeAnswer: submitClozeAnswer,
    checkSpotError: checkSpotError,
    switchAuditMode: switchAuditMode,
    loadAuditScenario: loadAuditScenario,
    runCodeAudit: runCodeAudit,
    resetAuditScenario: resetAuditScenario,
    toggleAuditSolution: toggleAuditSolution
  };

  window.addEventListener('DOMContentLoaded', init);
})();
