/**
 * NWU CMPG122 — Main Application Controller
 * Orchestrates Home Dashboard, 7 Study Units, Practice & Custom Quiz Engine,
 * C# Code & Tracing Lab, Continuous Past Exam Papers, Searchable Definitions
 * with Exact Context-Preserving Return, Analytics & Review Queue, and Settings.
 */
(function (root) {
  'use strict';

  const DATA = (root && root.CMPG122_DATA) || (typeof require === 'function' ? require('./data.js') : {});
  const CSharpEngine = (root && root.CSharpEngine) || (typeof require === 'function' ? require('./csharp_engine.js') : {});
  const Icons = (root && root.CMPG122_ICONS) || (typeof require === 'function' ? require('./modules/icons_and_diagrams.js') : {});
  const PersistenceMod = (root && root.CMPG122_PERSISTENCE) || (typeof require === 'function' ? require('./modules/persistence.js') : {});
  const AnalyticsMod = (root && root.CMPG122_ANALYTICS) || (typeof require === 'function' ? require('./modules/analytics.js') : {});
  const DefsMod = (root && root.CMPG122_DEFS_ENGINE) || (typeof require === 'function' ? require('./modules/definitions_engine.js') : {});
  const ExamMod = (root && root.CMPG122_EXAM_ENGINE) || (typeof require === 'function' ? require('./modules/exam_engine.js') : {});
  const ShortcutsMod = (root && root.CMPG122_SHORTCUTS) || (typeof require === 'function' ? require('./modules/keyboard_shortcuts.js') : {});
  const Renderer = (root && root.CMPG122_RENDERER) || (typeof require === 'function' ? require('./modules/question_renderer.js') : {});

  const esc = Renderer.escapeHtml;

  class Cmpg122PlatformApp {
    constructor() {
      this.data = DATA;
      this.persistence = new PersistenceMod.PersistenceManager();
      this.defsEngine = new DefsMod.DefinitionsEngine(this.data.definitions || []);

      this.currentRoute = 'home';
      this.activeStudyUnit = 'SU7';
      this.practiceSubTab = 'session'; // 'session' | 'custom' | 'codelab'
      this.practiceViewMode = 'card';   // 'card' | 'continuous'
      this.codelabSubTab = 'sandbox';   // 'sandbox' | 'spot' | 'auditor'
      this.reviewSubTab = 'incorrect';  // 'incorrect' | 'flagged' | 'understood'
      this.highlightedDefId = null;

      this.homeSession = null;
      this.practiceSession = null;
      this.examSession = null;

      this.activeCodeScenarioKey = Object.keys(this.data.codeScenarios || {})[0] || '';
      this.spotIndex = 0;
      this.spotSelected = null;
      this.spotSubmitted = false;
      this.activeAuditIndex = 0;

      this._timerInterval = null;
      this._practiceTimerInterval = null;
      this._studyTicker = null;
      this._paperScrollObserver = null;
      this._lastUnansweredJumpIdx = -1;
      this._modalOpen = false;
      this._modalTriggerEl = null;
      this._modalConfirmHandler = null;

      this.shortcuts = new ShortcutsMod.KeyboardShortcutController({
        isPracticeShortcutContextActive: () => (
          this.currentRoute === 'home' ||
          (this.currentRoute === 'practice' && this.practiceSubTab === 'session' && this.practiceViewMode === 'card')
        ),
        getPreferences: () => this.persistence.getPreferences(),
        hasOpenModal: () => this._modalOpen || this._hasAnyOpenDrawer(),
        getCurrentQuestionContext: () => this._getActiveCardQuestionContext(),
        onSelectOption: (idx) => this._handleShortcutSelect(idx),
        onSubmitCurrent: () => this._handleShortcutSubmit(),
        onNextQuestion: () => this._handleShortcutNext()
      });
    }

    _getAllQuestionsPool() {
      if (Array.isArray(this.data.allQuestions) && this.data.allQuestions.length > 0) {
        return this.data.allQuestions;
      }
      return [...(this.data.questions || []), ...(this.data.codingQuestions || [])];
    }

    async init() {
      if (typeof document === 'undefined') return;
      await this.persistence.init();

      const st = this.persistence.getState();
      if (st.lastStudyUnit) this.activeStudyUnit = st.lastStudyUnit;

      this._applyPreferencesToDocument();
      this._hydrateStaticIcons();
      this._initHomeQuickSession();
      this._initDefaultPracticeSession();

      // Recover interrupted examination or Custom Quiz session if present
      const allPool = this._getAllQuestionsPool();
      if (st.activeExamSession) {
        const recovered = ExamMod.ExamSession.fromSnapshot(st.activeExamSession, allPool);
        if (recovered && !recovered.isCompleted) {
          this.examSession = recovered;
        }
      }
      if (st.activePracticeSession) {
        const recoveredPrac = ExamMod.ExamSession.fromSnapshot(st.activePracticeSession, allPool);
        if (recoveredPrac && !recoveredPrac.isCompleted) {
          this.practiceSession = recoveredPrac;
          this.practiceSubTab = 'session';
          this.practiceViewMode = recoveredPrac.layout === 'continuous' ? 'continuous' : 'card';
        }
      }

      this._bindGlobalEvents();
      this._populatePracticeFilters();
      this._populateCustomBuilderControls();
      this._populateDefsFilters();
      this._populateCodeLabControls();
      this._renderExamLobbyCards();

      const hashRoute = (window.location.hash || '').replace(/^#/, '').trim();
      const validRoutes = ['home', 'study', 'practice', 'exams', 'definitions', 'progress', 'settings'];
      if (validRoutes.includes(hashRoute)) {
        this.navigate(hashRoute, { skipHash: true });
      } else {
        this.renderCurrentRoute();
      }

      this._startStudyTimeTracker();
      this._registerServiceWorkerSafely();
    }

    _hydrateStaticIcons() {
      document.querySelectorAll('[data-icon]').forEach(el => {
        const name = el.getAttribute('data-icon');
        el.innerHTML = Icons.icon(name, { size: 17 });
      });
      const codeMark = document.getElementById('topbarCodeIcon');
      if (codeMark) codeMark.innerHTML = Icons.icon('codelab', { size: 19 });
      const modeMark = document.getElementById('topbarModeIcon');
      if (modeMark) modeMark.innerHTML = Icons.icon('graduation-cap', { size: 16 });
      const menuSlot = document.getElementById('mobileMenuIconSlot');
      if (menuSlot) menuSlot.innerHTML = Icons.icon('menu', { size: 19 });
      const nwuSlot = document.getElementById('sidebarNwuMark');
      if (nwuSlot) nwuSlot.innerHTML = Icons.renderNwuMark();
      const shieldSlot = document.getElementById('heroCSharpShield');
      if (shieldSlot) shieldSlot.innerHTML = Icons.renderCSharpShield(74);
    }

    _applyPreferencesToDocument() {
      if (typeof document === 'undefined') return;
      const prefs = this.persistence.getPreferences();
      let resolvedTheme = prefs.theme;
      if (resolvedTheme === 'system') {
        const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        resolvedTheme = prefersLight ? 'light' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', resolvedTheme);
      document.documentElement.setAttribute('data-reduced-motion', prefs.reducedMotion ? 'true' : 'false');
      document.documentElement.style.setProperty('--ui-font-scale', `${prefs.fontScale || 100}%`);

      const btnLight = document.getElementById('btnThemeLight');
      const btnDark = document.getElementById('btnThemeDark');
      if (btnLight && btnDark) {
        btnLight.classList.toggle('active', resolvedTheme === 'light');
        btnDark.classList.toggle('active', resolvedTheme === 'dark');
      }
    }

    _initHomeQuickSession() {
      const qs = this.data.questions || [];
      // Curated balanced 10-question starter deck across all 7 Study Units (starting with a decimal currency item)
      const decStarter = qs.find(q => q.su === 'SU2' && /decimal/i.test(q.q) && (q.options || []).length >= 4);
      const rest = ExamMod.generateCustomExam(qs, {
        units: ['SU7', 'SU1', 'SU3', 'SU4', 'SU5', 'SU6', 'SU2'],
        questionCount: decStarter ? 9 : 10,
        useWeightedDistribution: true,
        randomize: false,
        excludeIds: decStarter ? [decStarter.id] : []
      });
      const deck = decStarter ? [decStarter, ...rest] : rest.slice(0, 10);
      this.homeSession = new ExamMod.ExamSession({
        id: 'home_quick_practice',
        mode: 'practice',
        title: 'Quick Practice',
        questions: deck,
        allowInstantSubmit: true
      });
    }

    _initDefaultPracticeSession(su = 'ALL', topic = '', format = 'all') {
      const isMixedAll = (!su || su === 'ALL') && !topic && (!format || format === 'all' || format === 'mcq');
      const pool = this._getAllQuestionsPool();
      const qs = ExamMod.generateCustomExam(pool, {
        units: su && su !== 'ALL' ? [su] : [],
        topics: topic ? [topic] : [],
        questionFormat: format || 'all',
        questionCount: 20,
        useWeightedDistribution: isMixedAll,
        randomize: false
      });
      const formatLabel = format === 'coding' ? ' (Interactive C# Coding)'
        : format === 'code-cloze' ? ' (Code Cloze)'
        : format === 'code-snippet' ? ' (Short C# Snippets)'
        : format === 'code-full' ? ' (Full C# Programming)'
        : '';
      this.practiceSession = new ExamMod.ExamSession({
        id: `prac_${su}_${Date.now()}`,
        mode: 'practice',
        title: (su === 'ALL' ? 'Mixed Curriculum Practice' : `${su} Study Unit Practice`) + formatLabel,
        questions: qs,
        allowInstantSubmit: true
      });
    }

    /* ==================== NAVIGATION & ROUTING ==================== */

    navigate(route, options = {}) {
      const target = route === 'codelab' ? 'practice' : route;
      if (route === 'codelab') {
        this.practiceSubTab = 'codelab';
      }
      this.currentRoute = target;
      this.persistence.saveState(s => { s.lastRoute = target; });

      if (typeof document !== 'undefined') {
        // Close any open sidebar, scenario reference drawer, or mobile palette drawer
        this._closeAllDrawers();

        document.querySelectorAll('.sidebar-link').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-route') === target);
        });
        document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-route') === target);
        });

        const modeSel = document.getElementById('quickModeSelect');
        if (modeSel) {
          const modeVal = (target === 'practice' && this.practiceSubTab === 'codelab') ? 'codelab'
            : (['home', 'study', 'practice', 'exams'].includes(target) ? target : 'home');
          modeSel.value = modeVal;
        }

        const sectionMap = {
          home: 'viewHome',
          study: 'viewStudy',
          practice: 'viewPractice',
          exams: 'viewExams',
          definitions: 'viewDefinitions',
          progress: 'viewProgress',
          settings: 'viewSettings'
        };
        Object.entries(sectionMap).forEach(([rKey, domId]) => {
          const sec = document.getElementById(domId);
          if (sec) sec.classList.toggle('active', rKey === target);
        });

        if (!options.skipHash && window.history && window.history.replaceState) {
          window.history.replaceState(null, '', `#${target}`);
        }
      }

      this.renderCurrentRoute();
      if (!options.preserveScroll && typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }

    renderCurrentRoute() {
      this._updateSidebarBadges();
      switch (this.currentRoute) {
        case 'home': this.renderHomeView(); break;
        case 'study': this.renderStudyView(); break;
        case 'practice': this.renderPracticeView(); break;
        case 'exams': this.renderExamsView(); break;
        case 'definitions': this.renderDefinitionsView(); break;
        case 'progress': this.renderProgressView(); break;
        case 'settings': this.renderSettingsView(); break;
        default: this.renderHomeView();
      }
    }

    _updateSidebarBadges() {
      if (typeof document === 'undefined') return;
      const stats = AnalyticsMod.computeAnalytics(this.persistence.getState(), this.data);
      const badge = document.getElementById('navReviewBadge');
      if (badge) {
        const count = stats.incorrectQueue.length;
        badge.textContent = String(count);
        badge.style.display = count > 0 ? 'inline-block' : 'none';
      }
    }

    /* ==================== 1. HOME DASHBOARD ==================== */

    renderHomeView() {
      const stats = AnalyticsMod.computeAnalytics(this.persistence.getState(), this.data);
      const overallEl = document.getElementById('homeOverallPct');
      if (overallEl) overallEl.textContent = `${stats.overallProgressPct}%`;

      // Momentum / Quick Resume Card (Honest 0% state when no activity exists)
      const momEl = document.getElementById('heroMomentumCard');
      if (momEl) {
        const hasSavedExam = this.examSession && !this.examSession.isCompleted;
        let title = 'Ready to begin';
        let sub = 'Select a Study Unit or answer your first question below.';
        let barPct = stats.overallProgressPct;

        if (hasSavedExam) {
          title = 'Examination in progress';
          sub = `${this.examSession.title} — resume where you left off.`;
        } else if (stats.hasActivity) {
          title = stats.overallProgressPct >= 75 ? 'Strong momentum!' : 'Building mastery';
          sub = `${stats.uniqueAttempted} questions practised • ${stats.completedTopicsCount}/${stats.totalTopicsCount} topics completed`;
        }

        momEl.innerHTML = `
          <div class="momentum-top">
            <span class="momentum-trophy">${Icons.icon('trophy', { size: 22 })}</span>
            <div>
              <p class="momentum-title">${esc(title)}</p>
              <p class="momentum-sub">${esc(sub)}</p>
            </div>
          </div>
          <div class="progress-bar-row">
            <div class="progress-track" role="progressbar" aria-valuenow="${barPct}" aria-valuemin="0" aria-valuemax="100" aria-label="Overall curriculum completion">
              <div class="progress-fill" style="width:${barPct}%;"></div>
            </div>
            <span class="progress-pct-text">${barPct}%</span>
          </div>
          ${hasSavedExam ? `<button type="button" class="btn-primary btn-sm" style="margin-top:0.75rem;width:100%;" data-resume-exam="true">${Icons.icon('play', { size: 14 })} Resume Active Examination</button>` : ''}
        `;
      }

      // 7 Study Units Circular Ring Grid
      const gridEl = document.getElementById('homeSuRingsGrid');
      if (gridEl) {
        gridEl.innerHTML = (this.data.units || []).map(u => {
          const us = stats.unitStats[u.id] || { progressPct: 0 };
          return `<button type="button" class="su-ring-card" data-open-su="${esc(u.id)}" aria-label="${esc(u.id)} ${esc(u.shortTitle)}, ${us.progressPct}% complete">
            <span class="su-card-icon" style="color:${esc(u.accentColor)};">${Icons.icon(u.iconId, { size: 22 })}</span>
            <span class="su-card-code">${esc(u.id)}</span>
            <span class="su-card-title">${esc(u.shortTitle)}</span>
            <span class="su-card-weight">(~${u.examWeightPct}%)</span>
            ${Icons.renderProgressRing(us.progressPct, u.accentColor, 60)}
          </button>`;
        }).join('');
      }

      // Revision Focus, Recent Exam Results & Recent Activity Card (Section 9.1)
      const revEl = document.getElementById('homeRevisionFocusCard');
      if (revEl) {
        if (stats.hasActivity) {
          const weakHtml = stats.weakTopics.length > 0
            ? `<div style="margin-bottom:0.8rem;">
                <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;">Weak Topics</div>
                <div style="display:flex;flex-direction:column;gap:0.4rem;">
                  ${stats.weakTopics.slice(0, 3).map(wt => `
                    <button type="button" class="btn-secondary btn-sm btn-align-start" data-retest-topic="${esc(wt.id)}" data-retest-su="${esc(wt.su)}">
                      <span class="q-su-pill">${esc(wt.su)}</span>
                      <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(wt.title)} (${wt.accuracyPct ?? 0}%)</span>
                    </button>
                  `).join('')}
                </div>
              </div>`
            : '';

          const latestExams = stats.examResults.slice(-2).reverse();
          const examHtml = latestExams.length > 0
            ? `<div style="margin-bottom:0.8rem;">
                <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:0.3rem;">Recent Exam Results</div>
                <div style="display:flex;flex-direction:column;gap:0.28rem;font-size:0.82rem;color:var(--text-secondary);">
                  ${latestExams.map(ex => `<div style="display:flex;justify-content:space-between;gap:0.5rem;">
                    <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(ex.title)}</span>
                    <strong>${ex.percentage}%</strong>
                  </div>`).join('')}
                </div>
              </div>`
            : '';

          const recentItems = stats.recentActivity.slice(0, 3);
          const activityHtml = recentItems.length > 0
            ? `<div>
                <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:0.3rem;">Recent Activity</div>
                <div style="display:flex;flex-direction:column;gap:0.25rem;font-size:0.8rem;color:var(--text-secondary);">
                  ${recentItems.map(act => `<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">• ${esc(act.label)}</div>`).join('')}
                </div>
              </div>`
            : '';

          revEl.innerHTML = `
            <h3 class="panel-title">${Icons.icon('clock', { size: 17 })} <span>Revision &amp; Activity</span></h3>
            ${weakHtml}${examHtml}${activityHtml}
          `;
        } else {
          revEl.innerHTML = `
            <h3 class="panel-title">${Icons.icon('info', { size: 17 })} <span>Study Guidance</span></h3>
            <p style="margin:0;font-size:0.84rem;color:var(--text-secondary);">
              Start with <strong>SU7 (HCI Principles)</strong> and <strong>SU1 (GUI &amp; IDE)</strong>, use inline technical definitions as you read, and verify C# logic in the Code Lab.
            </p>
          `;
        }
      }

      this._renderHomeQuickPracticeCard();
      this._renderHomeQuickDefs();
    }

    _renderHomeQuickPracticeCard() {
      const host = document.getElementById('homeQuickPracticeHost');
      if (!host || !this.homeSession) return;
      const q = this.homeSession.getCurrentQuestion();
      if (!q) return;
      const qState = this.homeSession.getQuestionState(q.id);
      const isGraded = qState && qState.status === 'submitted';
      const canSubmit = qState && typeof qState.selectedAnswer === 'number' && !isGraded;

      host.innerHTML = `
        <div class="section-bar" style="margin-bottom:0.75rem;">
          <h3 class="panel-title" style="margin:0;">
            ${Icons.icon('help-circle', { size: 18 })}
            <span>Practice Question</span>
          </h3>
          <button type="button" class="btn-ghost btn-sm" data-expand-full-practice="true">Full Practice View</button>
        </div>
        ${Renderer.renderQuestionCard(q, qState, {
          index: this.homeSession.currentIndex,
          total: this.homeSession.questions.length,
          csharpEngine: CSharpEngine,
          defsEngine: this.defsEngine,
          icons: Icons,
          compact: true,
          allowInstantSubmit: true,
          isFlagged: this.persistence.isQuestionFlagged(q.id),
          isUnderstood: Boolean(this.persistence.getState().understoodQuestions[q.id])
        })}
        <div class="q-nav-footer">
          <button type="button" class="btn-secondary" id="btnHomePrevQ" ${this.homeSession.currentIndex === 0 ? 'disabled' : ''}>
            ${Icons.icon('arrow-left', { size: 15 })} <span>Previous</span>
          </button>
          <button type="button" class="btn-primary" id="btnHomeSubmitQ" ${!canSubmit ? 'disabled' : ''}>
            <span>Submit Answer</span> ${Icons.icon('check', { size: 15 })}
          </button>
          <button type="button" class="btn-secondary" id="btnHomeNextQ" ${this.homeSession.currentIndex >= this.homeSession.questions.length - 1 ? 'disabled' : ''}>
            <span>Next</span> ${Icons.icon('arrow-right', { size: 15 })}
          </button>
        </div>
      `;
    }

    _renderHomeQuickDefs(filterText = '') {
      const listEl = document.getElementById('homeQuickDefsList');
      if (!listEl) return;
      const featuredIds = ['def_windows_form', 'def_button_control', 'def_event_handler', 'def_tryparse', 'def_messagebox_show', 'def_ref_vs_out', 'def_modal_vs_modeless'];
      const matches = filterText.trim()
        ? this.defsEngine.search(filterText).slice(0, 6)
        : featuredIds.map(id => this.defsEngine.getById(id)).filter(Boolean).slice(0, 5);

      if (matches.length === 0) {
        listEl.innerHTML = `<div style="padding:0.6rem 0;font-size:0.83rem;color:var(--text-muted);">No matching terms.</div>`;
        return;
      }
      listEl.innerHTML = matches.map(d => `
        <button type="button" class="quick-def-item" data-def-id="${esc(d.id)}">
          <span>${esc(d.term)}</span>
          ${Icons.icon('chevron-right', { size: 15 })}
        </button>
      `).join('');
    }

    /* ==================== 2. STUDY UNITS ENVIRONMENT ==================== */

    selectStudyUnit(suId) {
      this.activeStudyUnit = suId;
      this.persistence.saveState(s => { s.lastStudyUnit = suId; });
      if (this.currentRoute !== 'study') {
        this.navigate('study');
      } else {
        this.renderStudyView();
      }
    }

    renderStudyView(restoreExpandedPanels = null) {
      const bar = document.getElementById('studyUnitSelectorBar');
      const host = document.getElementById('studyUnitContentHost');
      if (!bar || !host) return;

      const units = this.data.units || [];
      const unit = units.find(u => u.id === this.activeStudyUnit) || units[0];
      if (!unit) return;

      bar.innerHTML = units.map(u => `
        <button type="button" role="tab" aria-selected="${u.id === unit.id ? 'true' : 'false'}"
          aria-controls="studyUnitContentHost" tabindex="${u.id === unit.id ? '0' : '-1'}"
          class="unit-pill-btn ${u.id === unit.id ? 'active' : ''}" data-select-su="${esc(u.id)}">
          ${Icons.icon(u.iconId, { size: 15 })}
          <span>${esc(u.id)}: ${esc(u.shortTitle)}</span>
        </button>
      `).join('');

      const state = this.persistence.getState();
      const stats = AnalyticsMod.computeAnalytics(state, this.data);
      const us = stats.unitStats[unit.id] || { completedTopics: 0, totalTopics: 0, progressPct: 0 };
      const expSet = restoreExpandedPanels ? new Set(restoreExpandedPanels) : null;
      const openAttr = (pId, defaultOpen) => {
        if (expSet) return expSet.has(pId) ? ' open' : '';
        return defaultOpen ? ' open' : '';
      };

      const topicsHtml = (unit.structuredTopics || []).map((t, idx) => {
        const isDone = Boolean(state.completedTopics[t.id]);
        const p1 = `${t.id}_syntax`;
        const p2 = `${t.id}_example`;
        const p3 = `${t.id}_mistakes`;
        const p4 = `${t.id}_exam`;

        return `<article class="topic-card ${isDone ? 'completed' : ''}" id="topicCard_${esc(t.id)}">
          <div class="topic-header">
            <div>
              <span class="q-su-pill">${esc(unit.id)} • Topic ${idx + 1}</span>
              <h3 class="topic-title" style="margin-top:0.35rem;">${esc(t.title)}</h3>
            </div>
            <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
              <button type="button" class="btn-secondary btn-sm" data-toggle-topic-done="${esc(t.id)}" data-topic-su="${esc(unit.id)}">
                ${Icons.icon(isDone ? 'check-circle' : 'check', { size: 14 })}
                <span>${isDone ? 'Completed' : 'Mark Complete'}</span>
              </button>
              <button type="button" class="btn-ghost btn-sm" data-practise-topic="${esc(t.id)}" data-topic-su="${esc(unit.id)}">
                ${Icons.icon('play', { size: 14 })} <span>Practise Topic</span>
              </button>
              <button type="button" class="btn-ghost btn-sm" data-practise-topic-coding="${esc(t.id)}" data-topic-su="${esc(unit.id)}">
                ${Icons.icon('codelab', { size: 14 })} <span>C# Exercise</span>
              </button>
            </div>
          </div>

          <p class="topic-plain-english">${this.defsEngine.renderTextWithInlineLinks(t.plainEnglish, { maxLinks: 3 })}</p>

          <div class="topic-expand-group">
            <details class="topic-details" data-panel-id="${esc(p1)}"${openAttr(p1, idx === 0)}>
              <summary>Technical Terminology &amp; C# Syntax</summary>
              <div class="topic-details-body">
                <p style="margin-top:0;">${this.defsEngine.renderTextWithInlineLinks(t.terminology, { maxLinks: 4 })}</p>
                ${Renderer.renderCodeBlock(t.syntax, CSharpEngine, Icons, 'C# Syntax Pattern')}
              </div>
            </details>

            <details class="topic-details" data-panel-id="${esc(p2)}"${openAttr(p2, false)}>
              <summary>Minimal Example (${t.exampleScope === 'complete' ? 'Complete Compiling Program' : 'Event-Handler / Class Fragment'}) &amp; How It Works</summary>
              <div class="topic-details-body">
                ${Renderer.renderCodeBlock(t.minimalExample, CSharpEngine, Icons, t.exampleScope === 'complete' ? 'Complete C# Program' : 'C# Code Fragment (inside Form1 class)')}
                <p style="margin-bottom:0;">${this.defsEngine.renderTextWithInlineLinks(t.howItWorks, { maxLinks: 3 })}</p>
              </div>
            </details>

            <details class="topic-details" data-panel-id="${esc(p3)}"${openAttr(p3, false)}>
              <summary>Common Mistakes &amp; Important Distinctions</summary>
              <div class="topic-details-body">
                <div class="callout-box callout-warning">
                  <strong>Common Mistakes:</strong>
                  <ul style="margin:0.35rem 0 0;padding-left:1.2rem;">
                    ${(t.commonMistakes || []).map(cm => `<li>${this.defsEngine.renderTextWithInlineLinks(cm, { maxLinks: 2 })}</li>`).join('')}
                  </ul>
                </div>
                <div class="callout-box callout-info">
                  <strong>Important Distinction:</strong> ${this.defsEngine.renderTextWithInlineLinks(t.importantDistinctions, { maxLinks: 2 })}
                </div>
              </div>
            </details>

            <details class="topic-details" data-panel-id="${esc(p4)}"${openAttr(p4, false)}>
              <summary>Examination Application &amp; Related Definitions</summary>
              <div class="topic-details-body">
                <p style="margin-top:0;">${this.defsEngine.renderTextWithInlineLinks(t.examExample, { maxLinks: 2 })}</p>
                <div class="feedback-defs-row">
                  <span class="feedback-defs-label">Related Definitions:</span>
                  ${(t.relatedDefinitions || []).map(dId => {
                    const d = this.defsEngine.getById(dId);
                    return d ? `<button type="button" class="def-chip-btn" data-def-id="${esc(d.id)}" data-from-topic="${esc(t.id)}">${esc(d.term)}</button>` : '';
                  }).join('')}
                </div>
              </div>
            </details>
          </div>
        </article>`;
      }).join('');

      host.innerHTML = `
        <div class="study-unit-banner">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;">
            <div>
              <span class="q-su-pill">${esc(unit.weeks)} • Target Exam Weighting: ${unit.examWeightPct}%</span>
              <h3 style="margin:0.4rem 0 0.3rem;font-size:1.25rem;">${esc(unit.title)}</h3>
              <p style="margin:0;color:var(--text-secondary);font-size:0.9rem;">${esc(unit.summary)}</p>
            </div>
            <div style="min-width:190px;">
              <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.25rem;">
                Topics Completed: <strong>${us.completedTopics} / ${us.totalTopics}</strong> (${us.progressPct}% Mastery)
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:${us.progressPct}%;"></div></div>
            </div>
          </div>
          <details class="topic-details" data-panel-id="${esc(unit.id)}_objectives" style="margin-top:0.9rem;"${openAttr(`${unit.id}_objectives`, false)}>
            <summary>Official Learning Objectives (${(unit.learningObjectives || []).length})</summary>
            <ul class="objectives-list">
              ${(unit.learningObjectives || []).map(o => `<li>${esc(o)}</li>`).join('')}
            </ul>
          </details>
        </div>

        <div class="edu-svg-wrap">
          <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.04em;">
            Visual Architecture Diagram — ${esc(unit.id)}
          </div>
          ${Icons.renderDiagram(unit.diagramId)}
        </div>

        ${topicsHtml}

        ${unit.cheatSheetHtml ? `
          <div class="panel-card">
            <h3 class="panel-title">${Icons.icon('file-text', { size: 18 })} <span>${esc(unit.id)} Quick-Reference Summary &amp; C# Cheat Sheet</span></h3>
            <div class="cheatsheet-host">${unit.cheatSheetHtml}</div>
          </div>
        ` : ''}
      `;
    }

    /* ==================== 3. PRACTICE, CUSTOM QUIZ & CODE LAB ==================== */

    _populatePracticeFilters() {
      const unitSel = document.getElementById('practiceUnitSelect');
      if (!unitSel) return;
      unitSel.innerHTML = `<option value="ALL">All Study Units (SU7, SU1–SU6)</option>` +
        (this.data.units || []).map(u => `<option value="${esc(u.id)}">${esc(u.id)} — ${esc(u.shortTitle)}</option>`).join('');
      this._syncPracticeTopicDropdown('ALL');
    }

    _syncPracticeTopicDropdown(suVal) {
      const topicSel = document.getElementById('practiceTopicSelect');
      if (!topicSel) return;
      const units = (this.data.units || []).filter(u => suVal === 'ALL' || u.id === suVal);
      const opts = [`<option value="">All Topics</option>`];
      units.forEach(u => {
        (u.structuredTopics || []).forEach(t => {
          opts.push(`<option value="${esc(t.id)}">${esc(u.id)}: ${esc(t.title)}</option>`);
        });
      });
      topicSel.innerHTML = opts.join('');
    }

    _populateCustomBuilderControls() {
      const ug = document.getElementById('customUnitsGroup');
      const tf = document.getElementById('customTopicFilter');
      if (ug) {
        ug.innerHTML = (this.data.units || []).map(u => `
          <label class="check-chip">
            <input type="checkbox" value="${esc(u.id)}" checked>
            <span>${esc(u.id)} (${u.examWeightPct}%)</span>
          </label>
        `).join('');
      }
      if (tf) {
        const opts = [`<option value="">All Topics in Selected Units</option>`];
        (this.data.units || []).forEach(u => {
          (u.structuredTopics || []).forEach(t => {
            opts.push(`<option value="${esc(t.id)}">${esc(u.id)} — ${esc(t.title)}</option>`);
          });
        });
        tf.innerHTML = opts.join('');
      }
    }

    startUnitPractice(suId = 'ALL', topicId = '', format = 'all') {
      this._initDefaultPracticeSession(suId, topicId, format);
      this.persistence.saveActivePracticeSession(null);
      this.practiceSubTab = 'session';
      const unitSel = document.getElementById('practiceUnitSelect');
      if (unitSel) {
        unitSel.value = suId || 'ALL';
        this._syncPracticeTopicDropdown(unitSel.value);
      }
      const topicSel = document.getElementById('practiceTopicSelect');
      if (topicSel) topicSel.value = topicId || '';
      const fmtSel = document.getElementById('practiceFormatSelect');
      if (fmtSel) fmtSel.value = format || 'all';

      const toggleGrp = document.getElementById('viewModeToggleGroup');
      if (toggleGrp) toggleGrp.style.display = 'inline-flex';

      this.navigate('practice');
    }

    setViewMode(mode) {
      this.practiceViewMode = mode === 'continuous' ? 'continuous' : 'card';
      const singleArea = document.getElementById('singleCardArea');
      const contArea = document.getElementById('practiceContinuousArea');
      const btnCard = document.getElementById('btnViewCard');
      const btnCont = document.getElementById('btnViewContinuous');

      if (singleArea) singleArea.style.display = this.practiceViewMode === 'card' ? 'block' : 'none';
      if (contArea) contArea.style.display = this.practiceViewMode === 'continuous' ? 'block' : 'none';
      if (btnCard) btnCard.className = this.practiceViewMode === 'card' ? 'btn-secondary btn-sm' : 'btn-ghost btn-sm';
      if (btnCont) btnCont.className = this.practiceViewMode === 'continuous' ? 'btn-secondary btn-sm' : 'btn-ghost btn-sm';

      this._renderPracticeSessionArea();
    }

    renderPracticeView() {
      document.querySelectorAll('[data-practice-sub]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-practice-sub') === this.practiceSubTab);
      });
      const sPane = document.getElementById('practiceSubSession');
      const cPane = document.getElementById('practiceSubCustom');
      const lPane = document.getElementById('practiceSubCodelab');
      if (sPane) sPane.style.display = this.practiceSubTab === 'session' ? 'block' : 'none';
      if (cPane) cPane.style.display = this.practiceSubTab === 'custom' ? 'block' : 'none';
      if (lPane) lPane.style.display = this.practiceSubTab === 'codelab' ? 'block' : 'none';

      if (this.practiceSubTab === 'session') {
        this.setViewMode(this.practiceViewMode);
      } else {
        this._stopPracticeTimerLoop();
        if (this.practiceSubTab === 'codelab') {
          this._renderCodeLabView();
        }
      }
    }

    _renderPracticeSessionArea() {
      if (!this.practiceSession) this._initDefaultPracticeSession();
      const sess = this.practiceSession;
      if (!sess || sess.questions.length === 0) return;

      const showQuizControls = sess.timed || sess.mode === 'custom_quiz';
      const timerBarHtml = showQuizControls
        ? `<div style="display:inline-flex;align-items:center;gap:0.45rem;flex-wrap:wrap;">
            ${sess.timed ? `<span class="timer-badge" id="practiceTimerBadge" style="font-size:0.86rem;padding:0.2rem 0.55rem;">${ExamMod.formatCountdown(sess.getRemainingSeconds())}</span>` : ''}
            ${sess.timed && !sess.isCompleted ? `<button type="button" class="btn-ghost btn-sm" id="btnPauseResumePracticeTimer">${sess.pausedAtMs ? 'Resume' : 'Pause'}</button>` : ''}
            ${!sess.isCompleted ? `<button type="button" class="btn-secondary btn-sm" id="btnFinishTimedQuiz">Finish Quiz</button>` : ''}
          </div>`
        : '';

      const quizDoneBanner = (sess.isCompleted && sess.finalResult)
        ? this._renderExamResultsBannerHtml(sess.finalResult)
        : '';

      if (this.practiceViewMode === 'continuous') {
        const contArea = document.getElementById('practiceContinuousArea');
        if (!contArea) return;
        contArea.innerHTML = `
          ${timerBarHtml ? `<div style="margin-bottom:0.75rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;"><strong>${esc(sess.title)}</strong>${timerBarHtml}</div>` : ''}
          ${quizDoneBanner}
          ${sess.questions.map((q, idx) => {
            const st = sess.getQuestionState(q.id);
            const hasResp = ExamMod.hasQuestionResponse ? ExamMod.hasQuestionResponse(q, st) : (st && typeof st.selectedAnswer === 'number');
            const canSub = !sess.isCompleted && st && hasResp && st.status !== 'submitted';
            return `
              <div>
                ${Renderer.renderQuestionCard(q, st, {
                  index: idx,
                  total: sess.questions.length,
                  csharpEngine: CSharpEngine,
                  defsEngine: this.defsEngine,
                  icons: Icons,
                  continuousMode: true,
                  allowInstantSubmit: true,
                  isCompleted: sess.isCompleted,
                  isFlagged: this.persistence.isQuestionFlagged(q.id),
                  isUnderstood: Boolean(this.persistence.getState().understoodQuestions[q.id])
                })}
                ${!sess.isCompleted && st && st.status !== 'submitted' ? `
                  <div style="margin:-0.5rem 0 1.25rem;display:flex;justify-content:flex-end;">
                    <button type="button" class="btn-primary btn-sm" data-submit-sheet-q="${esc(q.id)}" ${!canSub ? 'disabled' : ''}>Check Answer</button>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        `;
        this._startPracticeTimerLoop();
        return;
      }

      const singleArea = document.getElementById('singleCardArea');
      if (!singleArea) return;
      const q = sess.getCurrentQuestion();
      const qState = sess.getQuestionState(q.id);
      const isGraded = sess.isCompleted || (qState && qState.status === 'submitted');
      const hasResp = ExamMod.hasQuestionResponse ? ExamMod.hasQuestionResponse(q, qState) : (qState && typeof qState.selectedAnswer === 'number');
      const canSubmit = !sess.isCompleted && qState && hasResp && !isGraded;

      singleArea.innerHTML = `
        ${quizDoneBanner}
        <div style="margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
            <strong style="font-size:0.95rem;">${esc(sess.title)}</strong>
            ${timerBarHtml}
          </div>
          <span style="font-size:0.8rem;color:var(--text-muted);">
            Shortcuts: <span class="kbd-tag">1–5</span> Select • <span class="kbd-tag">A–E</span> Select &amp; Submit • <span class="kbd-tag">Enter</span> Submit/Next
          </span>
        </div>
        ${Renderer.renderQuestionCard(q, qState, {
          index: sess.currentIndex,
          total: sess.questions.length,
          csharpEngine: CSharpEngine,
          defsEngine: this.defsEngine,
          icons: Icons,
          allowInstantSubmit: true,
          isCompleted: sess.isCompleted,
          isFlagged: this.persistence.isQuestionFlagged(q.id),
          isUnderstood: Boolean(this.persistence.getState().understoodQuestions[q.id])
        })}
        <div class="q-nav-footer">
          <button type="button" class="btn-secondary" id="btnPracPrevQ" ${sess.currentIndex === 0 ? 'disabled' : ''}>
            ${Icons.icon('arrow-left', { size: 15 })} <span>Previous</span>
          </button>
          <button type="button" class="btn-primary" id="btnPracSubmitQ" ${!canSubmit ? 'disabled' : ''}>
            <span>Submit Answer</span> ${Icons.icon('check', { size: 15 })}
          </button>
          <button type="button" class="btn-secondary" id="btnPracNextQ" ${sess.currentIndex >= sess.questions.length - 1 ? 'disabled' : ''}>
            <span>Next Question</span> ${Icons.icon('arrow-right', { size: 15 })}
          </button>
        </div>
      `;
      this._startPracticeTimerLoop();
    }

    _startPracticeTimerLoop() {
      this._stopPracticeTimerLoop();
      if (typeof document === 'undefined' || !this.practiceSession || !this.practiceSession.timed || this.practiceSession.isCompleted) {
        return;
      }
      const tick = () => {
        const sess = this.practiceSession;
        if (!sess || !sess.timed || sess.isCompleted || this.currentRoute !== 'practice' || this.practiceSubTab !== 'session') {
          this._stopPracticeTimerLoop();
          return;
        }
        const badge = document.getElementById('practiceTimerBadge');
        const rem = sess.getRemainingSeconds();
        if (badge) {
          badge.textContent = ExamMod.formatCountdown(rem);
          badge.classList.toggle('timer-urgent', rem <= 120);
        }
        if (rem <= 0) {
          this._finalizeTimedPracticeQuiz(true);
        }
      };
      tick();
      this._practiceTimerInterval = setInterval(tick, 1000);
    }

    _stopPracticeTimerLoop() {
      if (this._practiceTimerInterval) {
        clearInterval(this._practiceTimerInterval);
        this._practiceTimerInterval = null;
      }
    }

    _finalizeTimedPracticeQuiz(autoExpired = false) {
      const sess = this.practiceSession;
      if (!sess || sess.isCompleted) return;
      // Track which questions weren't already recorded individually
      const unsubmittedAnswered = sess.questions.filter(q => {
        const st = sess.getQuestionState(q.id);
        const hasResp = ExamMod.hasQuestionResponse ? ExamMod.hasQuestionResponse(q, st) : (st && typeof st.selectedAnswer === 'number');
        return st && st.status !== 'submitted' && hasResp;
      });
      const result = sess.submitExamination();
      unsubmittedAnswered.forEach(q => {
        const st = sess.getQuestionState(q.id);
        const ansVal = ExamMod.isCodingQuestion && ExamMod.isCodingQuestion(q)
          ? (q.questionType === 'code-cloze' ? st.clozeAnswers : st.codeAnswer)
          : st.selectedAnswer;
        this.persistence.recordQuestionAttempt(q, ansVal, st.outcome === 'correct', 0);
      });
      this.persistence.recordExamResult(result);
      this._stopPracticeTimerLoop();
      this._updateSidebarBadges();
      this._renderPracticeSessionArea();
      this.showToast(
        autoExpired
          ? `Time expired — Custom Quiz graded: ${result.rawMarks}/${result.totalMarks} (${result.percentage}%)`
          : `Custom Quiz completed: ${result.rawMarks}/${result.totalMarks} (${result.percentage}%)`
      );
    }

    /* ==================== C# CODE LAB, SPOT-THE-ERROR & CODE AUDITOR ==================== */

    _getCodeLabCatalog() {
      const map = new Map();
      for (const [key, sc] of Object.entries(this.data.codeScenarios || {})) {
        map.set(key, {
          ...sc,
          _key: key,
          _source: 'scenario',
          su: sc.su || 'SU3'
        });
      }
      for (const cq of (this.data.codingQuestions || [])) {
        if (cq.questionType === 'code-snippet' || cq.questionType === 'code-full') {
          map.set(cq.id, {
            ...cq,
            _key: cq.id,
            _source: 'codingQuestion',
            title: `[${cq.su}] ${cq.topicTitle || cq.id} (${cq.questionType === 'code-full' ? 'Full C#' : 'Snippet'})`,
            description: cq.stem || cq.q || '',
            methodSignature: cq.methodHeader || 'private void btnAction_Click(object sender, EventArgs e)'
          });
        }
      }
      return map;
    }

    _getCodeLabItem(scKey) {
      const cat = this._getCodeLabCatalog();
      return cat.get(scKey) || (this.data.codeScenarios || {})[scKey] || null;
    }

    _populateCodeLabControls(unitFilter = 'ALL') {
      const sel = document.getElementById('codeScenarioSelect');
      if (!sel) return;
      const cat = this._getCodeLabCatalog();
      const entries = [...cat.entries()].filter(([, sc]) => unitFilter === 'ALL' || sc.su === unitFilter);
      sel.innerHTML = entries.map(([key, sc]) => `<option value="${esc(key)}">${esc(sc.title)}</option>`).join('');
      if (entries.length > 0) {
        const keepCurrent = entries.some(([k]) => k === this.activeCodeScenarioKey);
        this.activeCodeScenarioKey = keepCurrent ? this.activeCodeScenarioKey : entries[0][0];
        sel.value = this.activeCodeScenarioKey;
        this._loadCodeScenarioIntoEditor(this.activeCodeScenarioKey);
      }
    }

    _syncCodeLabLineNumbers() {
      const inputEl = document.getElementById('studentCodeInput');
      const gutterEl = document.getElementById('codeLabLineNumbers');
      if (inputEl && gutterEl && Renderer.buildLineNumbersHtml) {
        gutterEl.innerHTML = Renderer.buildLineNumbersHtml(inputEl.value, 8);
      }
    }

    _loadCodeScenarioIntoEditor(scKey) {
      const sc = this._getCodeLabItem(scKey);
      if (!sc) return;
      this.activeCodeScenarioKey = scKey;
      const titleEl = document.getElementById('scenarioTitle');
      const descEl = document.getElementById('scenarioDesc');
      const sigEl = document.getElementById('cgMethodHeader');
      const footEl = document.getElementById('cgMethodFooter');
      const ctrlsEl = document.getElementById('scenarioControlsList');
      const inputEl = document.getElementById('studentCodeInput');
      const outEl = document.getElementById('codeGradeOutputHost');

      const normalizedSig = String(
        sc.methodSignature || sc.methodHeader || 'private void btnCalculate_Click(object sender, EventArgs e)'
      ).replace(/\s*\{\s*$/, '').trim();

      if (titleEl) titleEl.textContent = sc.title;
      if (descEl) descEl.textContent = sc.description || sc.stem || '';
      if (sigEl) sigEl.textContent = `${normalizedSig} {`;
      if (footEl) footEl.textContent = sc.methodFooter || '}';
      if (ctrlsEl) {
        ctrlsEl.innerHTML = (sc.controls || []).map(c => `<span class="inline-code">${esc(c)}</span>`).join('');
      }
      if (inputEl) inputEl.value = sc.starterCode || '';
      this._syncCodeLabLineNumbers();
      if (outEl) outEl.innerHTML = '';
    }

    _runCodeLabSyntaxCheck() {
      const sc = this._getCodeLabItem(this.activeCodeScenarioKey);
      const inputEl = document.getElementById('studentCodeInput');
      const outEl = document.getElementById('codeGradeOutputHost');
      if (!sc || !inputEl || !outEl) return;

      const diags = CSharpEngine.analyzeDiagnostics(inputEl.value, sc);
      const unsupported = CSharpEngine.detectUnsupportedConstructs
        ? CSharpEngine.detectUnsupportedConstructs(inputEl.value)
        : [];

      outEl.innerHTML = `
        <div class="panel-card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem;">
            <strong>C# Syntax &amp; Naming Check</strong>
            <span class="q-diff-pill ${diags.length === 0 && unsupported.length === 0 ? 'diff-foundational' : 'diff-advanced'}">
              ${diags.length + unsupported.length} Diagnostic(s)
            </span>
          </div>
          ${unsupported.length > 0 ? `<p style="color:var(--status-warning-text);font-size:0.84rem;margin:0.3rem 0;">Unsupported Construct Notice: ${esc(unsupported.map(u => u.message).join(' '))}</p>` : ''}
          ${diags.length > 0 ? `
            <ul style="margin:0.4rem 0 0;padding-left:1.2rem;font-size:0.84rem;">
              ${diags.map(d => `<li style="color:${d.severity === 'error' ? 'var(--status-error-text)' : 'var(--status-warning-text)'};">
                <code>${esc(d.code)}</code> (Line ${d.line}): ${esc(d.message)}
              </li>`).join('')}
            </ul>
          ` : `<p style="font-size:0.84rem;color:var(--status-success-text);margin:0;">0 Syntax or Control Naming Diagnostics — Ready for behavioral test execution!</p>`}
        </div>
      `;
    }

    _runCodeGradeEvaluation() {
      const sc = this._getCodeLabItem(this.activeCodeScenarioKey);
      const inputEl = document.getElementById('studentCodeInput');
      const outEl = document.getElementById('codeGradeOutputHost');
      if (!sc || !inputEl || !outEl) return;

      const res = CSharpEngine.evaluateCodeGrade(inputEl.value, sc);
      const memoRes = CSharpEngine.evaluateCodingQuestion
        ? CSharpEngine.evaluateCodingQuestion(sc, inputEl.value, { revealSolution: true })
        : null;
      const diags = res.diagnostics || [];
      const tests = res.testResults || [];
      const rubric = (memoRes && Array.isArray(memoRes.rubricResults)) ? memoRes.rubricResults : [];
      const modelSol = sc.modelSolution || '';

      const rubricHtml = rubric.length > 0 ? `
        <div style="margin-top:1rem;">
          <strong style="font-size:0.86rem;display:block;margin-bottom:0.4rem;">NWU Memorandum Rubric Breakdown (${memoRes.earnedMarks} / ${memoRes.maxMarks} Marks):</strong>
          <div class="scenario-table-wrap">
            <table class="data-table">
              <thead><tr><th>Criterion</th><th>Marks</th><th>Status</th><th>Feedback</th></tr></thead>
              <tbody>
                ${rubric.map(r => `<tr>
                  <td><strong>${esc(r.criterion)}</strong></td>
                  <td>${r.earnedMarks} / ${r.availableMarks}</td>
                  <td style="color:${r.status === 'passed' ? 'var(--status-success-text)' : (r.status === 'partial' ? 'var(--status-warning-text)' : 'var(--status-error-text)')};font-weight:700;">${esc(String(r.status || '').toUpperCase())}</td>
                  <td>${esc(r.explanation || '')}${r.suggestion ? ` <em>(${esc(r.suggestion)})</em>` : ''}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : '';

      const comparisonHtml = modelSol ? `
        <details class="topic-details" style="margin-top:0.85rem;">
          <summary>Compare Submission with Official NWU Model Solution</summary>
          <div class="memo-comparison-grid" style="margin-top:0.65rem;">
            <div class="memo-comparison-col">
              <div class="code-block-bar"><span class="code-lang-tag">Student Submission</span></div>
              <pre class="code-pre"><code>${CSharpEngine.highlightCSharp ? CSharpEngine.highlightCSharp(inputEl.value || '// (Empty)') : esc(inputEl.value || '// (Empty)')}</code></pre>
            </div>
            <div class="memo-comparison-col">
              <div class="code-block-bar"><span class="code-lang-tag">Official NWU Model Solution</span></div>
              <pre class="code-pre"><code>${CSharpEngine.highlightCSharp ? CSharpEngine.highlightCSharp(modelSol) : esc(modelSol)}</code></pre>
            </div>
          </div>
        </details>
      ` : '';

      outEl.innerHTML = `
        <div class="panel-card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
            <strong>Evaluation Score: ${res.percentage}% (${esc(res.gradeLetter)})</strong>
            <span class="q-diff-pill ${res.percentage === 100 ? 'diff-foundational' : 'diff-advanced'}">
              ${tests.filter(t => t.passed).length} / ${tests.length} Test Cases Passed
            </span>
          </div>
          ${diags.length > 0 ? `
            <div style="margin-bottom:1rem;">
              <strong style="font-size:0.85rem;">Compiler &amp; Naming Diagnostics (${diags.length}):</strong>
              <ul style="margin:0.4rem 0 0;padding-left:1.2rem;font-size:0.84rem;">
                ${diags.map(d => `<li style="color:${d.severity === 'error' ? 'var(--status-error-text)' : 'var(--status-warning-text)'};">
                  <code>${esc(d.code)}</code> (Line ${d.line}): ${esc(d.message)}
                </li>`).join('')}
              </ul>
            </div>
          ` : `<p style="font-size:0.84rem;color:var(--status-success-text);margin-top:0;">0 Compiler Diagnostics — Clean C# Syntax &amp; Naming!</p>`}
          <div class="scenario-table-wrap">
            <table class="data-table">
              <thead><tr><th>Test Case</th><th>Status</th><th>Actual Output</th><th>Expected</th></tr></thead>
              <tbody>
                ${tests.map(t => `<tr>
                  <td>${esc(t.name)}</td>
                  <td style="color:${t.passed ? 'var(--status-success-text)' : 'var(--status-error-text)'};font-weight:700;">${t.passed ? 'PASS' : 'FAIL'}</td>
                  <td><code>${esc(t.actual || t.reason || '')}</code></td>
                  <td><code>${esc(t.expected || '')}</code></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
          ${rubricHtml}
          ${comparisonHtml}
        </div>
      `;
    }

    _renderCodeLabView() {
      document.querySelectorAll('[data-codelab-tab]').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-codelab-tab') === this.codelabSubTab);
      });
      const sb = document.getElementById('codelabSandboxPane');
      const sp = document.getElementById('codelabSpotPane');
      const au = document.getElementById('auditStudioContainer');
      if (sb) sb.style.display = this.codelabSubTab === 'sandbox' ? 'block' : 'none';
      if (sp) sp.style.display = this.codelabSubTab === 'spot' ? 'block' : 'none';
      if (au) au.style.display = this.codelabSubTab === 'auditor' ? 'block' : 'none';

      if (this.codelabSubTab === 'spot' && sp) {
        const list = this.data.spotErrors || [];
        const item = list[this.spotIndex] || list[0];
        if (!item) return;
        sp.innerHTML = `
          <div class="single-q-card">
            <div class="q-card-meta">
              <div class="q-meta-left">
                <span class="q-su-pill">${esc(item.su || 'C#')}</span>
                <strong>${esc(item.title)}</strong>
              </div>
              <span class="q-progress-label">Challenge ${this.spotIndex + 1} of ${list.length}</span>
            </div>
            ${Renderer.renderCodeBlock(item.code, CSharpEngine, Icons, 'Defective C# Snippet')}
            <div class="q-stem-text">${this.defsEngine.renderTextWithInlineLinks(item.question, { maxLinks: 0 })}</div>
            <div class="q-options-list">
              ${(item.options || []).map((opt, idx) => {
                let cls = 'q-option-btn';
                if (this.spotSubmitted) {
                  if (idx === item.answer) cls += ' opt-correct';
                  else if (idx === this.spotSelected) cls += ' opt-incorrect';
                } else if (idx === this.spotSelected) {
                  cls += ' opt-selected';
                }
                return `<button type="button" class="${cls}" data-spot-opt="${idx}" ${this.spotSubmitted ? 'disabled' : ''}>
                  <span class="opt-radio-ring">${Renderer.LETTERS[idx]}</span>
                  <span class="opt-text">${this.defsEngine.renderTextWithInlineLinks(opt, { maxLinks: 0 })}</span>
                </button>`;
              }).join('')}
            </div>
            ${this.spotSubmitted ? `
              <div class="q-feedback-panel ${this.spotSelected === item.answer ? 'feedback-correct' : 'feedback-incorrect'}">
                <strong>${this.spotSelected === item.answer ? 'Correct Diagnosis!' : `Incorrect — Correct Option: ${Renderer.LETTERS[item.answer]}`}</strong>
                <p style="margin:0.4rem 0 0;">${this.defsEngine.renderTextWithInlineLinks(item.explanation, { maxLinks: 0 })}</p>
              </div>
            ` : ''}
            <div class="q-nav-footer">
              <button type="button" class="btn-secondary" data-spot-nav="-1" ${this.spotIndex === 0 ? 'disabled' : ''}>Previous</button>
              <button type="button" class="btn-primary" id="btnSubmitSpot" ${this.spotSelected === null || this.spotSubmitted ? 'disabled' : ''}>Check Diagnosis</button>
              <button type="button" class="btn-secondary" data-spot-nav="1" ${this.spotIndex >= list.length - 1 ? 'disabled' : ''}>Next</button>
            </div>
          </div>
        `;
      } else if (this.codelabSubTab === 'auditor' && au) {
        const scenarios = this.data.auditScenarios || [];
        const sc = scenarios[this.activeAuditIndex] || scenarios[0];
        if (!sc) return;
        au.innerHTML = `
          <div class="panel-card">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:0.75rem;">
              <label style="font-weight:700;font-size:0.88rem;">Code Audit File:
                <select id="auditScenarioSelect" class="select-input" style="width:auto;max-width:100%;display:inline-block;margin-left:0.5rem;">
                  ${scenarios.map((a, idx) => `<option value="${idx}" ${idx === this.activeAuditIndex ? 'selected' : ''}>${esc(a.filename || a.fileName || a.title)}</option>`).join('')}
                </select>
              </label>
              <div style="display:flex;gap:0.5rem;">
                <button type="button" class="btn-secondary btn-sm" id="btnLoadCanonicalAudit">Show Canonical Fix</button>
                <button type="button" class="btn-primary btn-sm" id="btnRunCodeAuditor">Audit Fixed C# Code</button>
              </div>
            </div>
            <p style="margin:0 0 0.75rem;font-size:0.86rem;color:var(--text-secondary);">${esc(sc.instructions || sc.description || 'Locate and repair all syntax, casing, type, and logic defects.')}</p>
            <div class="code-editor-surface">
              <label for="auditCodeTextarea" class="sr-only">Buggy C# Code Editor</label>
              <textarea id="auditCodeTextarea" class="code-textarea" style="min-height:260px;" spellcheck="false">${esc(sc.initialCode || sc.buggyCode || '')}</textarea>
            </div>
            <div id="auditResultOutput" style="margin-top:1rem;"></div>
          </div>
        `;
      }
    }

    /* ==================== 4. EXAMINATION CENTRE & PAST PAPERS ==================== */

    _renderExamLobbyCards() {
      const listEl = document.getElementById('examsList');
      if (!listEl) return;
      listEl.innerHTML = (this.data.officialExams || []).map(ex => `
        <div class="panel-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
            <span class="q-su-pill">${esc(ex.academicYear || 'Past Paper')}</span>
            <span class="q-marks-pill">${ex.totalMarks} Marks • ${ex.durationMinutes}m</span>
          </div>
          <h3 style="margin:0.25rem 0 0.45rem;font-size:1rem;">${esc(ex.title)}</h3>
          <p style="font-size:0.84rem;color:var(--text-secondary);margin:0 0 0.9rem;">
            Continuous single-sheet examination (${(ex.subQuestionIds || []).length} structured questions) with reference rates matrix, Section B practical C# coding, and full memorandum review.
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn-primary btn-sm" data-start-paper="${esc(ex.id)}" data-paper-timed="true">Start Timed (${ex.durationMinutes}m)</button>
            <button type="button" class="btn-secondary btn-sm" data-start-paper="${esc(ex.id)}" data-paper-timed="false">Untimed Practice</button>
            ${Array.isArray(ex.practicalQuestionIds) && ex.practicalQuestionIds.length > 0 ? `<button type="button" class="btn-ghost btn-sm" data-start-practical-paper="${esc(ex.id)}">${Icons.icon('codelab', { size: 14 })} <span>Practical C# Section B</span></button>` : ''}
          </div>
        </div>
      `).join('');
    }

    startPracticalExamSection(examId) {
      const ex = (this.data.officialExams || []).find(e => e.id === examId);
      if (!ex) return;
      const allMap = new Map(this._getAllQuestionsPool().map(q => [q.id, q]));
      const practicalIds = Array.isArray(ex.practicalQuestionIds) ? ex.practicalQuestionIds : [];
      const qs = practicalIds.map(id => allMap.get(id)).filter(Boolean);
      if (qs.length === 0) return;

      this.examSession = new ExamMod.ExamSession({
        id: `${ex.id}_practical_${Date.now()}`,
        mode: 'past_paper',
        title: `${ex.title} — Section B: Practical C# Programming`,
        layout: 'continuous',
        allowInstantSubmit: true,
        scenarioHtml: ex.scenarioHtml || `<p>${esc(ex.scenario || '')}</p>`,
        examPaperId: ex.id,
        questions: qs,
        durationMinutes: 60
      });

      this._lastUnansweredJumpIdx = -1;
      this.persistence.saveActiveExamSession(this.examSession.toSnapshot());
      this.navigate('exams');
      this.renderContinuousExamPaper();
    }

    startOfficialExam(examId, timed = true) {
      const ex = (this.data.officialExams || []).find(e => e.id === examId);
      if (!ex) return;
      const qMap = new Map((this.data.questions || []).map(q => [q.id, q]));
      const qs = (ex.subQuestionIds || []).map(id => qMap.get(id)).filter(Boolean);

      this.examSession = new ExamMod.ExamSession({
        id: `${ex.id}_${Date.now()}`,
        mode: 'past_paper',
        title: ex.title,
        layout: 'continuous',
        allowInstantSubmit: false,
        scenarioHtml: ex.scenarioHtml || `<p>${esc(ex.scenario || '')}</p>`,
        examPaperId: ex.id,
        questions: qs,
        durationMinutes: timed ? (ex.durationMinutes || 180) : 0
      });

      this._lastUnansweredJumpIdx = -1;
      this.persistence.saveActiveExamSession(this.examSession.toSnapshot());
      this.navigate('exams');
      this.renderContinuousExamPaper();
    }

    startFullWeightedExam(timed = true) {
      const allocations = (this.data.examWeightingModel && this.data.examWeightingModel.allocations) || ExamMod.DEFAULT_WEIGHTS;
      const qs = ExamMod.generateWeightedExam(this.data.questions || [], allocations, 100);
      this.examSession = new ExamMod.ExamSession({
        id: `full_sim_${Date.now()}`,
        mode: 'full_exam',
        title: 'Full Weighted Examination Simulation (SU7, SU1–SU6)',
        layout: 'continuous',
        allowInstantSubmit: false,
        scenarioHtml: `<p>Full 100-mark examination simulation calibrated across all seven Study Units: SU7 (10%), SU1 (10%), SU2 (15%), SU3 (20%), SU4 (20%), SU5 (15%), and SU6 (10%).</p>`,
        questions: qs,
        durationMinutes: timed ? 180 : 0
      });
      this._lastUnansweredJumpIdx = -1;
      this.persistence.saveActiveExamSession(this.examSession.toSnapshot());
      this.navigate('exams');
      this.renderContinuousExamPaper();
    }

    renderExamsView() {
      const lobby = document.getElementById('examsLobbyPane');
      const active = document.getElementById('activeExamWorkspace');
      if (!lobby || !active) return;

      if (this.examSession) {
        lobby.style.display = 'none';
        active.style.display = 'block';
        this.renderContinuousExamPaper();
      } else {
        lobby.style.display = 'block';
        active.style.display = 'none';
        this._stopExamTimerLoop();
        this._teardownPaperScrollSpy();
      }
    }

    renderContinuousExamPaper() {
      const sess = this.examSession;
      if (!sess) return;
      const lobby = document.getElementById('examsLobbyPane');
      const active = document.getElementById('activeExamWorkspace');
      if (lobby) lobby.style.display = 'none';
      if (active) active.style.display = 'block';

      const titleEl = document.getElementById('activeExamTitle');
      const summaryEl = document.getElementById('examNavigatorSummary');
      const paperArea = document.getElementById('continuousPaperArea');
      const paletteEl = document.getElementById('examQuestionPalette');
      const drawerBody = document.getElementById('scenarioDrawerBody');
      const submitBtn = document.getElementById('btnOpenSubmitExamModal');
      const pauseBtn = document.getElementById('btnPauseResumeTimer');

      if (titleEl) titleEl.textContent = sess.title;
      if (drawerBody) {
        drawerBody.innerHTML = sess.scenarioHtml || '<p>No external reference table required for this assessment.</p>';
      }
      if (submitBtn) submitBtn.style.display = sess.isCompleted ? 'none' : 'inline-flex';
      if (pauseBtn) {
        pauseBtn.style.display = (sess.timed && !sess.isCompleted) ? 'inline-flex' : 'none';
        pauseBtn.textContent = sess.pausedAtMs ? 'Resume' : 'Pause';
      }

      const pre = sess.getPreSubmitSummary();
      if (summaryEl) {
        if (sess.isCompleted && sess.finalResult) {
          const r = sess.finalResult;
          summaryEl.textContent = `Score: ${r.rawMarks} / ${r.totalMarks} (${r.percentage}%) • Correct: ${r.correctCount} • Incorrect: ${r.incorrectCount} • Unanswered: ${r.unansweredCount}`;
        } else {
          summaryEl.textContent = `Answered: ${pre.answeredCount} / ${pre.totalQuestions} • Unanswered: ${pre.unansweredCount} • Flagged: ${pre.flaggedCount}`;
        }
      }

      if (paletteEl) {
        paletteEl.innerHTML = sess.questions.map((q, idx) => {
          const st = sess.getQuestionState(q.id);
          const hasResp = ExamMod.hasQuestionResponse ? ExamMod.hasQuestionResponse(q, st) : (st && typeof st.selectedAnswer === 'number');
          let cls = 'palette-pill';
          if (idx === 0) cls += ' current';
          if (sess.isCompleted) {
            cls += st.outcome === 'correct' ? ' graded-correct' : (st.outcome === 'partial' ? ' graded-partial' : ' graded-incorrect');
          } else if (hasResp) {
            cls += ' answered';
          }
          if (st.flagged) cls += ' flagged';
          return `<button type="button" class="${cls}" id="palettePill_${esc(q.id)}" data-jump-paper-q="${esc(q.id)}" aria-label="Jump to Question ${idx + 1}">
            ${idx + 1}
          </button>`;
        }).join('');
      }

      if (paperArea) {
        const resultsBannerHtml = (sess.isCompleted && sess.finalResult)
          ? this._renderExamResultsBannerHtml(sess.finalResult)
          : '';

        const scenarioInlineCard = sess.scenarioHtml
          ? `<details class="topic-details" data-panel-id="exam_scenario_${esc(sess.id)}" style="margin-bottom:1rem;" open>
              <summary>Examination Scenario, Control Matrix &amp; Rates Reference</summary>
              <div class="topic-details-body">${sess.scenarioHtml}</div>
            </details>`
          : '';

        const questionsHtml = sess.questions.map((q, idx) =>
          Renderer.renderQuestionCard(q, sess.getQuestionState(q.id), {
            index: idx,
            total: sess.questions.length,
            csharpEngine: CSharpEngine,
            defsEngine: this.defsEngine,
            icons: Icons,
            continuousMode: true,
            allowInstantSubmit: Boolean(sess.allowInstantSubmit),
            isCompleted: sess.isCompleted,
            isFlagged: sess.getQuestionState(q.id).flagged,
            isUnderstood: Boolean(this.persistence.getState().understoodQuestions[q.id])
          })
        ).join('');

        const footSubmitHtml = !sess.isCompleted
          ? `<div class="panel-card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
              <span style="font-size:0.88rem;color:var(--text-secondary);">Review unanswered and flagged items before final grading.</span>
              <button type="button" class="btn-primary" data-trigger-exam-submit="true">Submit Complete Examination</button>
            </div>`
          : '';

        paperArea.innerHTML = resultsBannerHtml + scenarioInlineCard + questionsHtml + footSubmitHtml;
      }

      this._setupPaperScrollSpy();
      this._startExamTimerLoop();
    }

    _renderExamResultsBannerHtml(res) {
      const mins = Math.floor((res.durationSeconds || 0) / 60);
      const secs = (res.durationSeconds || 0) % 60;
      const unitRows = Object.values(res.byUnit || {}).map(u => `
        <tr>
          <td><strong>${esc(u.su)}</strong></td>
          <td>${u.earnedMarks} / ${u.totalMarks}</td>
          <td>${u.correct} / ${u.total}</td>
          <td><strong>${u.percentage}%</strong></td>
        </tr>
      `).join('');

      return `<div class="exam-results-banner" role="region" aria-label="Examination Results">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h3 style="margin:0;font-size:1.15rem;">Examination Results — ${esc(res.title)}</h3>
          <span class="q-diff-pill ${res.percentage >= 50 ? 'diff-foundational' : 'diff-advanced'}">
            ${res.percentage >= 75 ? 'Distinction' : res.percentage >= 50 ? 'Pass' : 'Needs Revision'}
          </span>
        </div>
        <div class="results-kpi-grid">
          <div class="kpi-box"><div class="kpi-val">${res.rawMarks} / ${res.totalMarks}</div><div class="kpi-lbl">Raw Marks</div></div>
          <div class="kpi-box"><div class="kpi-val">${res.percentage}%</div><div class="kpi-lbl">Percentage</div></div>
          <div class="kpi-box"><div class="kpi-val" style="color:var(--status-success-text);">${res.correctCount}</div><div class="kpi-lbl">Correct</div></div>
          <div class="kpi-box"><div class="kpi-val" style="color:var(--status-error-text);">${res.incorrectCount}</div><div class="kpi-lbl">Incorrect</div></div>
          <div class="kpi-box"><div class="kpi-val">${res.unansweredCount}</div><div class="kpi-lbl">Unanswered</div></div>
          <div class="kpi-box"><div class="kpi-val">${mins}m ${secs}s</div><div class="kpi-lbl">Time Taken</div></div>
        </div>
        <div class="scenario-table-wrap">
          <table class="data-table">
            <thead><tr><th>Study Unit</th><th>Marks</th><th>Correct Questions</th><th>Accuracy</th></tr></thead>
            <tbody>${unitRows}</tbody>
          </table>
        </div>
        ${(res.recommendedRevisionAreas || []).length > 0 ? `
          <div style="margin-top:0.85rem;">
            <strong style="font-size:0.85rem;">Recommended Revision Topics:</strong>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.4rem;">
              ${res.recommendedRevisionAreas.map(t => `
                <button type="button" class="btn-secondary btn-sm" data-open-su="${esc(t.su)}">${esc(t.su)}: ${esc(t.title)} (${t.percentage}%)</button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>`;
    }

    selectPaperAnswer(questionId, optionIndex) {
      if (!this.examSession || this.examSession.isCompleted) return;
      const ok = this.examSession.selectOption(questionId, optionIndex);
      if (!ok) return;
      this.persistence.saveActiveExamSession(this.examSession.toSnapshot());

      const pill = typeof document !== 'undefined' ? document.getElementById(`palettePill_${questionId}`) : null;
      if (pill) pill.classList.add('answered');

      const card = typeof document !== 'undefined' ? document.getElementById(`paperQuestion_${questionId}`) : null;
      if (card) {
        card.querySelectorAll('.q-option-btn').forEach((btn, idx) => {
          btn.classList.toggle('opt-selected', idx === optionIndex);
          btn.setAttribute('aria-pressed', idx === optionIndex ? 'true' : 'false');
        });
      }

      const summaryEl = typeof document !== 'undefined' ? document.getElementById('examNavigatorSummary') : null;
      if (summaryEl) {
        const pre = this.examSession.getPreSubmitSummary();
        summaryEl.textContent = `Answered: ${pre.answeredCount} / ${pre.totalQuestions} • Unanswered: ${pre.unansweredCount} • Flagged: ${pre.flaggedCount}`;
      }
    }

    toggleQuestionFlag(questionId) {
      const globalFlagged = this.persistence.toggleFlagQuestion(questionId);
      if (this.examSession && this.examSession.states[questionId]) {
        this.examSession.states[questionId].flagged = globalFlagged;
        this.persistence.saveActiveExamSession(this.examSession.toSnapshot());
        const pill = typeof document !== 'undefined' ? document.getElementById(`palettePill_${questionId}`) : null;
        if (pill) pill.classList.toggle('flagged', globalFlagged);
        const summaryEl = typeof document !== 'undefined' ? document.getElementById('examNavigatorSummary') : null;
        if (summaryEl && !this.examSession.isCompleted) {
          const pre = this.examSession.getPreSubmitSummary();
          summaryEl.textContent = `Answered: ${pre.answeredCount} / ${pre.totalQuestions} • Unanswered: ${pre.unansweredCount} • Flagged: ${pre.flaggedCount}`;
        }
      }
      return globalFlagged;
    }

    openExamSubmitConfirmation() {
      if (!this.examSession || this.examSession.isCompleted) return;
      const pre = this.examSession.getPreSubmitSummary();
      const unansText = pre.unansweredNumbers.length > 0
        ? `<p style="color:var(--status-warning-text);"><strong>Unanswered Questions (${pre.unansweredCount}):</strong> ${pre.unansweredNumbers.map(u => `Q${u.number}`).join(', ')}</p>`
        : `<p style="color:var(--status-success-text);">All ${pre.totalQuestions} questions have an answer selected.</p>`;
      const flagText = pre.flaggedNumbers.length > 0
        ? `<p><strong>Flagged for Review (${pre.flaggedCount}):</strong> ${pre.flaggedNumbers.map(f => `Q${f.number}`).join(', ')}</p>`
        : '';

      this._openModal(
        'Submit Examination for Final Marking?',
        `${unansText}${flagText}<p>Once submitted, answers are locked and full mark allocations and explanations will be revealed.</p>`,
        'Confirm & Grade Examination',
        () => this.submitCompleteExamPaper(true)
      );
    }

    submitCompleteExamPaper(confirmed = false) {
      if (!this.examSession) return null;
      if (!confirmed) {
        this.openExamSubmitConfirmation();
        return null;
      }
      if (this.examSession.isCompleted && this.examSession.finalResult) {
        return this.examSession.finalResult;
      }

      const result = this.examSession.submitExamination();
      // Record individual question attempts in learner history
      this.examSession.questions.forEach(q => {
        const st = this.examSession.getQuestionState(q.id);
        const hasResp = ExamMod.hasQuestionResponse ? ExamMod.hasQuestionResponse(q, st) : (st && typeof st.selectedAnswer === 'number');
        if (st && hasResp) {
          const ansVal = ExamMod.isCodingQuestion && ExamMod.isCodingQuestion(q)
            ? (q.questionType === 'code-cloze' ? st.clozeAnswers : st.codeAnswer)
            : st.selectedAnswer;
          this.persistence.recordQuestionAttempt(q, ansVal, st.outcome === 'correct', 0);
        }
      });
      this.persistence.recordExamResult(result);
      this._stopExamTimerLoop();
      this.renderContinuousExamPaper();
      this.showToast(`Examination graded: ${result.rawMarks}/${result.totalMarks} (${result.percentage}%)`);
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
      return result;
    }

    _startExamTimerLoop() {
      this._stopExamTimerLoop();
      if (typeof document === 'undefined' || !this.examSession) return;
      const badge = document.getElementById('examTimerBadge');
      if (!badge) return;

      const tick = () => {
        if (!this.examSession) return;
        if (!this.examSession.timed) {
          badge.textContent = 'Untimed';
          badge.classList.remove('timer-urgent');
          return;
        }
        const rem = this.examSession.getRemainingSeconds();
        badge.textContent = ExamMod.formatCountdown(rem);
        badge.classList.toggle('timer-urgent', rem <= 300 && !this.examSession.isCompleted);
        if (rem <= 0 && !this.examSession.isCompleted) {
          this.showToast('Time expired — submitting examination automatically.');
          this.submitCompleteExamPaper(true);
        }
      };

      tick();
      if (this.examSession.timed && !this.examSession.isCompleted) {
        this._timerInterval = setInterval(tick, 1000);
      }
    }

    _stopExamTimerLoop() {
      if (this._timerInterval) {
        clearInterval(this._timerInterval);
        this._timerInterval = null;
      }
    }

    _teardownPaperScrollSpy() {
      if (this._paperScrollObserver) {
        this._paperScrollObserver.disconnect();
        this._paperScrollObserver = null;
      }
    }

    _setupPaperScrollSpy() {
      this._teardownPaperScrollSpy();
      if (typeof IntersectionObserver !== 'function' || typeof document === 'undefined' || !this.examSession) return;
      const cards = document.querySelectorAll('#continuousPaperArea .paper-q-card[data-question-id]');
      if (cards.length === 0) return;

      this._paperScrollObserver = new IntersectionObserver((entries) => {
        if (!this.examSession) return;
        let topVisibleId = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const qId = entry.target.getAttribute('data-question-id');
            if (qId) {
              const st = this.examSession.states[qId];
              if (st && st.status === 'unseen') {
                st.status = 'seen';
              }
              if (!topVisibleId) topVisibleId = qId;
            }
          }
        }
        if (topVisibleId) {
          document.querySelectorAll('#examQuestionPalette .palette-pill').forEach(pill => {
            pill.classList.toggle('current', pill.id === `palettePill_${topVisibleId}`);
          });
        }
      }, { rootMargin: '-12% 0px -60% 0px', threshold: 0.05 });

      cards.forEach(card => this._paperScrollObserver.observe(card));
    }

    /* ==================== 5. DEFINITIONS LIBRARY & EXACT CONTEXT RETURN ==================== */

    _populateDefsFilters() {
      const catSel = document.getElementById('defsCategoryFilter');
      if (!catSel) return;
      const cats = this.defsEngine.getCategories();
      catSel.innerHTML = `<option value="ALL">All Categories (${cats.length})</option>` +
        cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
    }

    openDefinitionWithContext(defId, extraSource = {}) {
      const def = this.defsEngine.getById(defId);
      if (!def) return;

      // Capture exact current state before leaving
      if (this.currentRoute !== 'definitions') {
        const expandedPanels = [];
        if (typeof document !== 'undefined') {
          document.querySelectorAll('.view-section.active details[open][data-panel-id]').forEach(el => {
            expandedPanels.push(el.getAttribute('data-panel-id'));
          });
        }

        const clickedQuestionId = extraSource.questionId || null;
        let targetQId = clickedQuestionId;
        let qState = null;
        let sourceLabel = 'Previous View';

        if (this.currentRoute === 'study') {
          sourceLabel = `Study Note (${this.activeStudyUnit})`;
        } else if (this.currentRoute === 'home') {
          if (this.homeSession) {
            const activeQ = this.homeSession.getCurrentQuestion();
            targetQId = targetQId || (activeQ ? activeQ.id : null);
            qState = targetQId ? this.homeSession.getQuestionState(targetQId) : null;
          }
          sourceLabel = clickedQuestionId ? 'Practice Question' : 'Home Dashboard';
        } else if (this.currentRoute === 'practice') {
          if (this.practiceSubTab === 'codelab') {
            sourceLabel = 'C# Code Lab';
          } else {
            if (this.practiceSession) {
              const activeQ = this.practiceSession.getCurrentQuestion();
              targetQId = targetQId || (activeQ ? activeQ.id : null);
              qState = targetQId ? this.practiceSession.getQuestionState(targetQId) : null;
            }
            sourceLabel = (this.practiceSession && this.practiceSession.mode === 'custom_quiz')
              ? 'Custom Quiz'
              : 'Question';
          }
        } else if (this.currentRoute === 'exams' && this.examSession) {
          qState = targetQId ? this.examSession.getQuestionState(targetQId) : null;
          sourceLabel = 'Examination Question';
        } else if (this.currentRoute === 'progress') {
          sourceLabel = 'Question Review';
        }

        this.defsEngine.pushReturnContext({
          route: this.currentRoute,
          sourceLabel,
          studyUnitId: this.activeStudyUnit,
          topicId: extraSource.topicId || null,
          questionId: targetQId,
          selectedAnswer: qState ? qState.selectedAnswer : null,
          codeAnswer: qState && typeof qState.codeAnswer === 'string' ? qState.codeAnswer : undefined,
          clozeAnswers: qState && qState.clozeAnswers ? { ...qState.clozeAnswers } : undefined,
          submissionStatus: qState ? qState.status : null,
          scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
          activeSection: this.currentRoute === 'practice' ? this.practiceSubTab : this.reviewSubTab,
          practiceViewMode: this.practiceViewMode,
          examState: this.examSession ? this.examSession.toSnapshot() : null,
          expandedPanels
        });
      }

      this.highlightedDefId = defId;
      const searchEl = typeof document !== 'undefined' ? document.getElementById('defsMainSearch') : null;
      const unitEl = typeof document !== 'undefined' ? document.getElementById('defsUnitFilter') : null;
      const catEl = typeof document !== 'undefined' ? document.getElementById('defsCategoryFilter') : null;
      if (searchEl) searchEl.value = '';
      if (unitEl) unitEl.value = 'ALL';
      if (catEl) catEl.value = 'ALL';

      this.navigate('definitions', { preserveScroll: true });
      if (typeof document !== 'undefined') {
        const card = document.getElementById(`defCard_${defId}`);
        if (card && typeof card.scrollIntoView === 'function') {
          card.scrollIntoView({ block: 'center' });
        }
      }
    }

    _restoreExpandedPanelsInActiveView(expandedPanels) {
      if (typeof document === 'undefined' || !Array.isArray(expandedPanels)) return;
      const openSet = new Set(expandedPanels);
      document.querySelectorAll('.view-section.active details[data-panel-id]').forEach(el => {
        const pId = el.getAttribute('data-panel-id');
        el.open = openSet.has(pId);
      });
    }

    returnFromDefinition() {
      const ctx = this.defsEngine.popReturnContext();
      if (!ctx) {
        this.navigate('home');
        return;
      }
      this.highlightedDefId = null;

      if (ctx.studyUnitId) this.activeStudyUnit = ctx.studyUnitId;
      if (ctx.route === 'practice') {
        if (ctx.activeSection) this.practiceSubTab = ctx.activeSection;
        if (ctx.practiceViewMode) this.practiceViewMode = ctx.practiceViewMode;
      }
      if (ctx.route === 'progress' && ctx.activeSection) {
        this.reviewSubTab = ctx.activeSection;
      }

      this.navigate(ctx.route, { preserveScroll: true });

      if (ctx.route === 'study' && Array.isArray(ctx.expandedPanels)) {
        this.renderStudyView(ctx.expandedPanels);
      }

      // Restore exact question selection/index if applicable
      const targetSession = ctx.route === 'home' ? this.homeSession
        : (ctx.route === 'practice' && this.practiceSubTab === 'session' ? this.practiceSession : null);
      if (targetSession && ctx.questionId) {
        if (ctx.route !== 'practice' || this.practiceViewMode === 'card') {
          const qIdx = targetSession.questions.findIndex(q => q.id === ctx.questionId);
          if (qIdx !== -1) targetSession.goToIndex(qIdx);
        }
        const st = targetSession.getQuestionState(ctx.questionId);
        if (st && st.status !== 'submitted') {
          if (typeof ctx.selectedAnswer === 'number') {
            st.selectedAnswer = ctx.selectedAnswer;
            st.status = 'answered_unsubmitted';
          }
          if (typeof ctx.codeAnswer === 'string') {
            st.codeAnswer = ctx.codeAnswer;
            if (ctx.codeAnswer.trim()) st.status = 'answered_unsubmitted';
          }
          if (ctx.clozeAnswers && typeof ctx.clozeAnswers === 'object') {
            st.clozeAnswers = { ...ctx.clozeAnswers };
            if (Object.values(ctx.clozeAnswers).some(v => String(v || '').trim().length > 0)) {
              st.status = 'answered_unsubmitted';
            }
          }
        }
        this.renderCurrentRoute();
      }

      // Universally restore expanded <details> panels (topic-details & distractor-details) in active view
      if (Array.isArray(ctx.expandedPanels)) {
        this._restoreExpandedPanelsInActiveView(ctx.expandedPanels);
      }

      if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {
          window.scrollTo({ top: ctx.scrollY || 0, behavior: 'instant' });
        });
      }
    }

    renderDefinitionsView() {
      const bannerHost = document.getElementById('defReturnBannerHost');
      const countEl = document.getElementById('defsCountLabel');
      const cardsHost = document.getElementById('defsCardsHost');
      const searchEl = document.getElementById('defsMainSearch');
      const unitEl = document.getElementById('defsUnitFilter');
      const catEl = document.getElementById('defsCategoryFilter');
      if (!cardsHost) return;

      const retCtx = this.defsEngine.peekReturnContext();
      if (bannerHost) {
        bannerHost.innerHTML = retCtx
          ? `<div class="context-return-banner">
              <button type="button" class="btn-primary btn-sm" id="btnReturnFromDef">
                ← Back to ${esc(retCtx.sourceLabel || 'Question / Study Note')}
              </button>
              <span style="font-size:0.8rem;color:var(--text-muted);">
                Your exact scroll position, answer selection, and expanded panels are preserved (or press <span class="kbd-tag">Esc</span>).
              </span>
            </div>`
          : '';
      }

      const list = this.defsEngine.search(
        searchEl ? searchEl.value : '',
        unitEl ? unitEl.value : 'ALL',
        catEl ? catEl.value : 'ALL'
      );
      if (countEl) countEl.textContent = `${list.length} of ${(this.data.definitions || []).length} definitions`;

      if (list.length === 0) {
        cardsHost.innerHTML = `<div class="panel-card"><p style="margin:0;color:var(--text-muted);">No technical definitions matched your search filter.</p></div>`;
        return;
      }

      cardsHost.innerHTML = list.map(d => `
        <article class="def-card ${this.highlightedDefId === d.id ? 'highlighted' : ''}" id="defCard_${esc(d.id)}">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.4rem;">
            <span class="q-su-pill">${esc(d.su)}</span>
            <span class="q-topic-pill">${esc(d.category)}</span>
          </div>
          <h3 style="margin:0 0 0.45rem;font-size:1.05rem;">${esc(d.term)}</h3>
          <p style="margin:0 0 0.5rem;font-size:0.9rem;color:var(--text-primary);"><strong>Plain English:</strong> ${esc(d.plainEnglish)}</p>
          <p style="margin:0 0 0.6rem;font-size:0.85rem;color:var(--text-secondary);"><strong>Technical Definition:</strong> ${esc(d.technicalDefinition)}</p>
          ${d.syntax ? Renderer.renderCodeBlock(d.syntax, CSharpEngine, Icons, 'Syntax') : ''}
          <p style="margin:0 0 0.5rem;font-size:0.84rem;color:var(--text-secondary);"><strong>Example:</strong> ${esc(d.example)}</p>
          <div class="callout-box callout-warning" style="margin-top:0.5rem;">
            <strong>Common Misconception:</strong> ${esc(d.misconception)}
          </div>
          ${(d.relatedConcepts || []).length > 0 ? `
            <div class="feedback-defs-row">
              <span class="feedback-defs-label">Related:</span>
              ${d.relatedConcepts.map(rcId => {
                const rc = this.defsEngine.getById(rcId);
                return rc ? `<button type="button" class="def-chip-btn" data-jump-def="${esc(rc.id)}">${esc(rc.term)}</button>` : '';
              }).join('')}
            </div>
          ` : ''}
        </article>
      `).join('');
    }

    /* ==================== 6. PROGRESS, ANALYTICS & QUESTION REVIEW ==================== */

    renderProgressView() {
      const host = document.getElementById('analyticsHost');
      if (!host) return;
      const state = this.persistence.getState();
      const stats = AnalyticsMod.computeAnalytics(state, this.data);
      const studyMins = Math.round((stats.studyTimeSeconds || 0) / 60);

      const trendSvg = Icons.renderExamTrendSvg(stats.examResults);

      let reviewItemsHtml = '';
      if (this.reviewSubTab === 'incorrect') {
        reviewItemsHtml = stats.incorrectQueue.length === 0
          ? `<p style="color:var(--text-muted);margin:0;">No unresolved incorrect questions right now.</p>`
          : stats.incorrectQueue.map(({ question, history }, i) => {
              const isCoding = Renderer.isCodingQuestion(question);
              const lastSubLabel = isCoding
                ? (question.questionType === 'code-cloze' ? 'Last Submission: Cloze Blanks' : 'Last Submission: C# Code')
                : `Last Choice: Option ${Renderer.LETTERS[history.lastSelected] || '?'}`;
              const cardState = {
                status: 'submitted',
                selectedAnswer: typeof history.lastSelected === 'number' ? history.lastSelected : null,
                codeAnswer: typeof history.lastSelected === 'string' ? history.lastSelected : '',
                clozeAnswers: (history.lastSelected && typeof history.lastSelected === 'object') ? history.lastSelected : {},
                outcome: 'incorrect'
              };
              return `
              <div style="margin-bottom:1rem;">
                <div style="font-size:0.78rem;color:var(--status-error-text);margin-bottom:0.3rem;font-weight:700;">
                  Missed ${history.incorrect} time(s) • ${lastSubLabel}
                </div>
                ${Renderer.renderQuestionCard(question, cardState, {
                  index: i,
                  total: stats.incorrectQueue.length,
                  csharpEngine: CSharpEngine,
                  defsEngine: this.defsEngine,
                  icons: Icons,
                  isCompleted: true,
                  isFlagged: this.persistence.isQuestionFlagged(question.id),
                  isUnderstood: false
                })}
              </div>
            `;
            }).join('');
      } else if (this.reviewSubTab === 'unanswered') {
        reviewItemsHtml = stats.unansweredQueue.length === 0
          ? `<div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
              <p style="color:var(--text-muted);margin:0;">No unanswered examination questions pending review (${stats.unattemptedCount} unpractised questions remain in the full bank).</p>
              ${stats.unattemptedCount > 0 ? `<button type="button" class="btn-secondary btn-sm" data-practise-unanswered="true">Practise Unattempted Questions</button>` : ''}
            </div>`
          : `<div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
              <span style="font-size:0.84rem;color:var(--text-secondary);">Questions left blank in submitted examinations remain here until you answer them or mark them understood.</span>
              <button type="button" class="btn-primary btn-sm" data-practise-unanswered="true">${Icons.icon('play', { size: 14 })} <span>Practise Unanswered Set (${stats.unansweredQueue.length})</span></button>
            </div>` +
            stats.unansweredQueue.map((question, i) => `
              <div style="margin-bottom:1rem;">
                ${Renderer.renderQuestionCard(question, {
                  status: 'submitted',
                  selectedAnswer: null,
                  outcome: 'unanswered'
                }, {
                  index: i,
                  total: stats.unansweredQueue.length,
                  csharpEngine: CSharpEngine,
                  defsEngine: this.defsEngine,
                  icons: Icons,
                  isCompleted: true,
                  isFlagged: this.persistence.isQuestionFlagged(question.id),
                  isUnderstood: false
                })}
              </div>
            `).join('');
      } else if (this.reviewSubTab === 'flagged') {
        reviewItemsHtml = stats.flaggedQueue.length === 0
          ? `<p style="color:var(--text-muted);margin:0;">No flagged questions yet. Click "Flag" on any question to bookmark it for review.</p>`
          : `<div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
              <span style="font-size:0.84rem;color:var(--text-secondary);">Bookmarked questions for targeted revision (${stats.flaggedQueue.length}).</span>
              <button type="button" class="btn-secondary btn-sm" data-practise-flagged="true">${Icons.icon('play', { size: 14 })} <span>Practise Flagged Set</span></button>
            </div>` +
            stats.flaggedQueue.map((question, i) => {
              const h = state.questionHistory[question.id];
              const hasAttempt = Boolean(h && (
                typeof h.lastSelected === 'number' ||
                (typeof h.lastSelected === 'string' && h.lastSelected.trim().length > 0) ||
                (h.lastSelected && typeof h.lastSelected === 'object' && Object.keys(h.lastSelected).length > 0)
              ));
              return `<div style="margin-bottom:1rem;">
                ${Renderer.renderQuestionCard(question, {
                  status: 'submitted',
                  selectedAnswer: (hasAttempt && typeof h.lastSelected === 'number') ? h.lastSelected : null,
                  codeAnswer: (hasAttempt && typeof h.lastSelected === 'string') ? h.lastSelected : '',
                  clozeAnswers: (hasAttempt && h.lastSelected && typeof h.lastSelected === 'object') ? h.lastSelected : {},
                  bookmarkedReview: !hasAttempt
                }, {
                  index: i,
                  total: stats.flaggedQueue.length,
                  csharpEngine: CSharpEngine,
                  defsEngine: this.defsEngine,
                  icons: Icons,
                  isCompleted: true,
                  isFlagged: true,
                  isUnderstood: Boolean(state.understoodQuestions[question.id])
                })}
              </div>`;
            }).join('');
      } else {
        reviewItemsHtml = stats.understoodQueue.length === 0
          ? `<p style="color:var(--text-muted);margin:0;">Questions you mark as understood after reviewing mistakes appear here.</p>`
          : stats.understoodQueue.map(q => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border-subtle);gap:0.5rem;flex-wrap:wrap;">
                <span><span class="q-su-pill">${esc(q.su)}</span> ${esc(q.stem.slice(0, 110))}</span>
                <button type="button" class="btn-ghost btn-sm" data-unmark-understood="${esc(q.id)}">Restore to Review</button>
              </div>
            `).join('');
      }

      host.innerHTML = `
        <div class="results-kpi-grid" style="margin-top:0;">
          <div class="kpi-box"><div class="kpi-val">${stats.overallProgressPct}%</div><div class="kpi-lbl">Overall Progress</div></div>
          <div class="kpi-box"><div class="kpi-val">${stats.uniqueAttempted} / ${stats.totalQuestionsBank}</div><div class="kpi-lbl">Questions Practised</div></div>
          <div class="kpi-box"><div class="kpi-val">${stats.accuracyPct !== null ? `${stats.accuracyPct}%` : '—'}</div><div class="kpi-lbl">Overall Accuracy</div></div>
          <div class="kpi-box"><div class="kpi-val">${stats.codeTracingAccuracyPct !== null ? `${stats.codeTracingAccuracyPct}%` : '—'}</div><div class="kpi-lbl">Code-Tracing Accuracy</div></div>
          <div class="kpi-box"><div class="kpi-val">${stats.completedTopicsCount} / ${stats.totalTopicsCount}</div><div class="kpi-lbl">Topics Completed</div></div>
          <div class="kpi-box"><div class="kpi-val">${studyMins}m</div><div class="kpi-lbl">Recorded Study Time</div></div>
        </div>

        <div class="cards-grid-2" style="margin-bottom:1.25rem;">
          <div class="panel-card">
            <h3 class="panel-title">Diagnostic Learning Insights</h3>
            ${!stats.hasActivity ? `<p style="margin:0;color:var(--text-muted);font-size:0.88rem;">No assessment attempts recorded yet. Complete practice questions or an examination to unlock diagnostic accuracy insights.</p>` : `
              <ul style="margin:0;padding-left:1.2rem;font-size:0.88rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.45rem;">
                <li><strong>Lowest-Accuracy Study Unit:</strong> ${stats.weakestUnit ? `${esc(stats.weakestUnit.id)} (${stats.weakestUnit.accuracyPct}% across ${stats.weakestUnit.attempts} attempts)` : 'Need question attempts first'}</li>
                <li><strong>Code-Tracing Performance:</strong> ${stats.codeTracingAccuracyPct !== null ? `${stats.codeTracingAccuracyPct}% across ${stats.codeTracingAttempts} code/method/loop attempts` : 'Practise code-tracing items to measure'}</li>
                <li><strong>Time Management Trend:</strong> ${stats.pacingTrend ? `${stats.pacingTrend.latestSecPerQ}s/question (${stats.pacingTrend.improving ? 'Improving pace' : 'Watch exam pacing'})` : 'Complete at least 2 exams to compare pacing'}</li>
              </ul>
            `}
          </div>

          <div class="panel-card">
            <h3 class="panel-title">Examination Score Progression</h3>
            ${trendSvg || `<p style="margin:0;color:var(--text-muted);font-size:0.88rem;">No completed examination papers recorded yet. Take a Full Weighted Simulation or Past Paper to track score progression.</p>`}
          </div>
        </div>

        <div class="cards-grid-2" style="margin-bottom:1.25rem;">
          <div class="panel-card">
            <h3 class="panel-title">Weak Topics (Repeated Mistakes)</h3>
            ${stats.weakTopics.length === 0 ? `<p style="margin:0;color:var(--text-muted);font-size:0.86rem;">No repeated topic errors detected.</p>` : `
              <div style="display:flex;flex-direction:column;gap:0.45rem;">
                ${stats.weakTopics.map(t => `
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
                    <span style="font-size:0.85rem;"><span class="q-su-pill">${esc(t.su)}</span> ${esc(t.title)} (${t.incorrect} missed)</span>
                    <button type="button" class="btn-secondary btn-sm" data-retest-topic="${esc(t.id)}" data-retest-su="${esc(t.su)}">Retest</button>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <div class="panel-card">
            <h3 class="panel-title">Unpractised Topics</h3>
            <div style="display:flex;flex-direction:column;gap:0.45rem;">
              ${stats.unpractisedTopics.slice(0, 5).map(t => `
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
                  <span style="font-size:0.85rem;"><span class="q-su-pill">${esc(t.su)}</span> ${esc(t.title)}</span>
                  <button type="button" class="btn-ghost btn-sm" data-retest-topic="${esc(t.id)}" data-retest-su="${esc(t.su)}">Practise</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="panel-card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:1rem;">
            <h3 class="panel-title" style="margin:0;">Question Review &amp; Error-Correction Queue</h3>
            <div class="unit-pills-bar" style="margin-bottom:0;">
              <button type="button" class="unit-pill-btn ${this.reviewSubTab === 'incorrect' ? 'active' : ''}" data-review-tab="incorrect">
                Incorrect (${stats.incorrectQueue.length})
              </button>
              <button type="button" class="unit-pill-btn ${this.reviewSubTab === 'unanswered' ? 'active' : ''}" data-review-tab="unanswered">
                Unanswered (${stats.unansweredQueue.length})
              </button>
              <button type="button" class="unit-pill-btn ${this.reviewSubTab === 'flagged' ? 'active' : ''}" data-review-tab="flagged">
                Flagged (${stats.flaggedQueue.length})
              </button>
              <button type="button" class="unit-pill-btn ${this.reviewSubTab === 'understood' ? 'active' : ''}" data-review-tab="understood">
                Understood (${stats.understoodQueue.length})
              </button>
            </div>
          </div>
          ${reviewItemsHtml}
        </div>
      `;
    }

    /* ==================== 7. SETTINGS, ACCESSIBILITY & DATA BACKUP ==================== */

    renderSettingsView() {
      const host = document.getElementById('settingsHost');
      if (!host) return;
      const prefs = this.persistence.getPreferences();
      const onlineState = typeof navigator !== 'undefined' && navigator.onLine === false ? 'Offline (Local Mode Active)' : 'Online & Offline-Ready';

      host.innerHTML = `
        <div class="cards-grid-2">
          <div class="panel-card">
            <h3 class="panel-title">Appearance &amp; Accessibility</h3>
            <div style="display:flex;flex-direction:column;gap:0.9rem;">
              <div>
                <label for="settingThemeSelect" style="display:block;font-size:0.84rem;font-weight:600;margin-bottom:0.3rem;">Colour Theme</label>
                <select id="settingThemeSelect" class="select-input">
                  <option value="dark" ${prefs.theme === 'dark' ? 'selected' : ''}>Dark Modern (Default)</option>
                  <option value="light" ${prefs.theme === 'light' ? 'selected' : ''}>Light Modern</option>
                  <option value="system" ${prefs.theme === 'system' ? 'selected' : ''}>Follow System Appearance</option>
                </select>
              </div>
              <div>
                <label for="settingFontScaleSelect" style="display:block;font-size:0.84rem;font-weight:600;margin-bottom:0.3rem;">Interface Text Scale</label>
                <select id="settingFontScaleSelect" class="select-input">
                  <option value="90" ${prefs.fontScale === 90 ? 'selected' : ''}>Compact (90%)</option>
                  <option value="100" ${prefs.fontScale === 100 ? 'selected' : ''}>Standard (100%)</option>
                  <option value="110" ${prefs.fontScale === 110 ? 'selected' : ''}>Comfortable (110%)</option>
                  <option value="120" ${prefs.fontScale === 120 ? 'selected' : ''}>Large Accessibility (120%)</option>
                </select>
              </div>
              <label class="check-chip">
                <input type="checkbox" id="settingReducedMotion" ${prefs.reducedMotion ? 'checked' : ''}>
                <span>Reduce interface motion and transitions</span>
              </label>
            </div>
          </div>

          <div class="panel-card">
            <h3 class="panel-title">Keyboard Shortcuts</h3>
            <div style="display:flex;flex-direction:column;gap:0.75rem;">
              <label class="check-chip">
                <input type="checkbox" id="settingShortcutsEnabled" ${prefs.keyboardShortcutsEnabled ? 'checked' : ''}>
                <span>Enable Practice &amp; Custom Quiz keyboard shortcuts</span>
              </label>
              <label class="check-chip">
                <input type="checkbox" id="settingLetterShortcuts" ${prefs.letterShortcutsEnabled ? 'checked' : ''}>
                <span>Enable single-key A–E immediate select &amp; submit</span>
              </label>
              <div class="callout-box callout-info" style="margin:0;">
                Shortcuts automatically pause whenever focus is inside search boxes, inputs, or C# code editors.
              </div>
            </div>
          </div>

          <div class="panel-card">
            <h3 class="panel-title">Data Backup, Restore &amp; Safe Reset</h3>
            <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:0;">
              Progress is stored locally in IndexedDB (with automatic versioned schema migration v${PersistenceMod.CURRENT_SCHEMA_VERSION}).
            </p>
            <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.9rem;">
              <button type="button" class="btn-secondary btn-sm" id="btnExportBackup">
                ${Icons.icon('download', { size: 14 })} <span>Export Backup (.json)</span>
              </button>
              <label class="btn-secondary btn-sm" style="cursor:pointer;">
                ${Icons.icon('upload', { size: 14 })} <span>Import Backup (.json)</span>
                <input type="file" id="inputImportBackup" accept=".json,application/json" class="sr-only">
              </label>
            </div>
            <button type="button" class="btn-danger btn-sm" id="btnResetProgressPrompt">
              ${Icons.icon('trash', { size: 14 })} <span>Reset All Progress Data...</span>
            </button>
          </div>

          <div class="panel-card">
            <h3 class="panel-title">About &amp; Offline Status</h3>
            <ul style="margin:0;padding-left:1.2rem;font-size:0.85rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.35rem;">
              <li><strong>Application:</strong> CMPG122 Visual C# UI Programming v${esc(this.data.version || '9.2.1')}</li>
              <li><strong>Connectivity:</strong> ${esc(onlineState)}</li>
              <li><strong>Question Bank:</strong> ${(this.data.questions || []).length} calibrated questions • ${(this.data.definitions || []).length} definitions</li>
              <li><strong>Curriculum Weighting:</strong> SU7 (10%), SU1 (10%), SU2 (15%), SU3 (20%), SU4 (20%), SU5 (15%), SU6 (10%)</li>
            </ul>
          </div>
        </div>
      `;
    }

    /* ==================== KEYBOARD SHORTCUT DELEGATION ==================== */

    _getActiveCardSession() {
      if (this.currentRoute === 'home') return this.homeSession;
      if (this.currentRoute === 'practice' && this.practiceSubTab === 'session' && this.practiceViewMode === 'card') {
        return this.practiceSession;
      }
      return null;
    }

    _getActiveCardQuestionContext() {
      const sess = this._getActiveCardSession();
      if (!sess || sess.isCompleted) return null;
      const q = sess.getCurrentQuestion();
      if (!q) return null;
      const st = sess.getQuestionState(q.id);
      return {
        questionId: q.id,
        optionCount: (q.options || q.opts || []).length,
        selectedAnswer: st ? st.selectedAnswer : null,
        isSubmitted: Boolean(st && st.status === 'submitted')
      };
    }

    _focusPracticeSurfaceSafely(optionIdx = null) {
      if (typeof document === 'undefined') return;
      const hostSelector = this.currentRoute === 'home' ? '#homeQuickPracticeHost' : '#singleCardArea';
      if (typeof optionIdx === 'number') {
        const optBtn = document.querySelector(`${hostSelector} .q-option-btn[data-option-idx="${optionIdx}"]`);
        if (optBtn && typeof optBtn.focus === 'function') {
          optBtn.focus({ preventScroll: true });
          return;
        }
      }
      const ws = document.getElementById('mainWorkspace');
      if (ws && typeof ws.focus === 'function') {
        ws.focus({ preventScroll: true });
      }
    }

    _persistActivePracticeIfNeeded() {
      if (this.practiceSession && this.practiceSession.mode === 'custom_quiz' && !this.practiceSession.isCompleted) {
        this.persistence.saveActivePracticeSession(this.practiceSession.toSnapshot());
      }
    }

    _handleShortcutSelect(optionIndex) {
      const sess = this._getActiveCardSession();
      if (!sess || sess.isCompleted) return;
      const q = sess.getCurrentQuestion();
      if (!q) return;
      if (sess.selectOption(q.id, optionIndex)) {
        if (this.currentRoute === 'home') this._renderHomeQuickPracticeCard();
        else {
          this._persistActivePracticeIfNeeded();
          this._renderPracticeSessionArea();
        }
        this._focusPracticeSurfaceSafely(optionIndex);
      }
    }

    _handleShortcutSubmit() {
      const sess = this._getActiveCardSession();
      if (!sess || sess.isCompleted) return;
      const q = sess.getCurrentQuestion();
      if (!q) return;
      const res = sess.submitSingleQuestion(q.id);
      if (res && !res.duplicate) {
        const st = sess.getQuestionState(q.id);
        const ansVal = ExamMod.isCodingQuestion && ExamMod.isCodingQuestion(q)
          ? (q.questionType === 'code-cloze' ? (st ? st.clozeAnswers : {}) : (st ? st.codeAnswer : ''))
          : res.selectedAnswer;
        this.persistence.recordQuestionAttempt(q, ansVal, res.outcome === 'correct', 0);
        this._updateSidebarBadges();
        if (this.currentRoute === 'home') this.renderHomeView();
        else {
          this._persistActivePracticeIfNeeded();
          this._renderPracticeSessionArea();
        }
        this._focusPracticeSurfaceSafely(null);
      }
    }

    _handleShortcutNext() {
      const sess = this._getActiveCardSession();
      if (!sess) return;
      if (sess.currentIndex < sess.questions.length - 1) {
        sess.goToIndex(sess.currentIndex + 1);
        if (this.currentRoute === 'home') this._renderHomeQuickPracticeCard();
        else {
          this._persistActivePracticeIfNeeded();
          this._renderPracticeSessionArea();
        }
        this._focusPracticeSurfaceSafely(null);
      }
    }

    /* ==================== EVENT DELEGATION & MODALS ==================== */

    _closeAllDrawers() {
      if (typeof document === 'undefined') return;
      const sb = document.getElementById('appSidebar');
      const menuBtn = document.getElementById('btnMobileMenu');
      if (sb) sb.classList.remove('open');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');

      const dr = document.getElementById('scenarioDrawer');
      if (dr) {
        dr.classList.remove('open');
        dr.setAttribute('aria-hidden', 'true');
      }
      const pal = document.getElementById('examPaletteSidebar');
      if (pal) pal.classList.remove('drawer-open');
    }

    _hasAnyOpenDrawer() {
      if (typeof document === 'undefined') return false;
      const isPaletteDrawerActive = Boolean(
        this.currentRoute === 'exams' &&
        (typeof window === 'undefined' || window.innerWidth <= 1024) &&
        document.getElementById('examPaletteSidebar')?.classList.contains('drawer-open')
      );
      return Boolean(
        document.getElementById('scenarioDrawer')?.classList.contains('open') ||
        isPaletteDrawerActive ||
        document.getElementById('appSidebar')?.classList.contains('open')
      );
    }

    _getSessionForQuestion(questionId) {
      if (this.currentRoute === 'exams' && this.examSession && this.examSession.states && this.examSession.states[questionId]) {
        return this.examSession;
      }
      if (this.currentRoute === 'practice' && this.practiceSession && this.practiceSession.states && this.practiceSession.states[questionId]) {
        return this.practiceSession;
      }
      if (this.currentRoute === 'home' && this.homeSession && this.homeSession.states && this.homeSession.states[questionId]) {
        return this.homeSession;
      }
      return this.practiceSession || this.examSession || this.homeSession || null;
    }

    _updateCodingDomStateWithoutRerender(sess, questionId) {
      if (!sess || typeof document === 'undefined') return;
      const q = sess.questions.find(item => item.id === questionId);
      const st = sess.getQuestionState(questionId);
      if (!q || !st) return;

      const hasResp = ExamMod.hasQuestionResponse ? ExamMod.hasQuestionResponse(q, st) : false;

      if (this.currentRoute === 'exams' && sess === this.examSession) {
        this.persistence.saveActiveExamSession(sess.toSnapshot());
        const pill = document.getElementById(`palettePill_${questionId}`);
        if (pill) pill.classList.toggle('answered', hasResp);
        const summaryEl = document.getElementById('examNavigatorSummary');
        if (summaryEl && !sess.isCompleted) {
          const pre = sess.getPreSubmitSummary();
          summaryEl.textContent = `Answered: ${pre.answeredCount} / ${pre.totalQuestions} • Unanswered: ${pre.unansweredCount} • Flagged: ${pre.flaggedCount}`;
        }
      } else if (this.currentRoute === 'practice' && sess === this.practiceSession) {
        this._persistActivePracticeIfNeeded();
        const pracSubBtn = document.getElementById('btnPracSubmitQ');
        if (pracSubBtn && sess.getCurrentQuestion()?.id === questionId && st.status !== 'submitted' && !sess.isCompleted) {
          pracSubBtn.disabled = !hasResp;
        }
        const sheetBtn = document.querySelector(`[data-submit-sheet-q="${questionId}"]`);
        if (sheetBtn && st.status !== 'submitted' && !sess.isCompleted) {
          sheetBtn.disabled = !hasResp;
        }
      } else if (this.currentRoute === 'home' && sess === this.homeSession) {
        const homeSubBtn = document.getElementById('btnHomeSubmitQ');
        if (homeSubBtn && sess.getCurrentQuestion()?.id === questionId && st.status !== 'submitted') {
          homeSubBtn.disabled = !hasResp;
        }
      }
    }

    _runInteractiveSyntaxCheck(questionId) {
      const sess = this._getSessionForQuestion(questionId);
      const q = sess ? sess.questions.find(item => item.id === questionId) : null;
      const ta = typeof document !== 'undefined' ? document.getElementById(`codeInput_${questionId}`) : null;
      const box = typeof document !== 'undefined' ? document.getElementById(`liveSandbox_${questionId}`) : null;
      if (!q || !box) return;

      const code = ta ? ta.value : (sess.getQuestionState(questionId)?.codeAnswer || '');
      const diags = CSharpEngine.analyzeDiagnostics(code, q);
      const unsupported = CSharpEngine.detectUnsupportedConstructs
        ? CSharpEngine.detectUnsupportedConstructs(code)
        : [];

      box.classList.remove('hidden');
      box.innerHTML = `
        <div class="sandbox-out-header">
          <strong>C# Syntax &amp; Control Analysis</strong>
          <span class="q-diff-pill ${diags.length === 0 && unsupported.length === 0 ? 'diff-foundational' : 'diff-advanced'}">
            ${diags.length + unsupported.length} Diagnostic(s)
          </span>
        </div>
        ${unsupported.length > 0 ? `<div style="color:var(--status-warning-text);font-size:0.82rem;margin-bottom:0.35rem;">${esc(unsupported.map(u => u.message).join(' '))}</div>` : ''}
        ${diags.length > 0 ? `
          <ul style="margin:0.35rem 0 0;padding-left:1.15rem;font-size:0.82rem;">
            ${diags.map(d => `<li style="color:${d.severity === 'error' ? 'var(--status-error-text)' : 'var(--status-warning-text)'};">
              <code>${esc(d.code)}</code> (Line ${d.line}): ${esc(d.message)}
            </li>`).join('')}
          </ul>
        ` : `<div style="color:var(--status-success-text);font-size:0.82rem;">0 Syntax or Control Naming Errors Detected.</div>`}
      `;
    }

    _runInteractiveSnippetTests(questionId) {
      const sess = this._getSessionForQuestion(questionId);
      const q = sess ? sess.questions.find(item => item.id === questionId) : null;
      const ta = typeof document !== 'undefined' ? document.getElementById(`codeInput_${questionId}`) : null;
      const box = typeof document !== 'undefined' ? document.getElementById(`liveSandbox_${questionId}`) : null;
      if (!q || !box) return;

      const code = ta ? ta.value : (sess.getQuestionState(questionId)?.codeAnswer || '');
      const evalRes = CSharpEngine.evaluateCodingQuestion
        ? CSharpEngine.evaluateCodingQuestion(q, code, { revealSolution: false })
        : null;
      const visibleTests = (evalRes && Array.isArray(evalRes.testResults))
        ? evalRes.testResults.filter(t => !t.hidden)
        : [];

      box.classList.remove('hidden');
      box.innerHTML = `
        <div class="sandbox-out-header">
          <strong>Simulated WinForms Execution (${visibleTests.filter(t => t.passed).length}/${visibleTests.length} Sample Tests Passed)</strong>
        </div>
        ${visibleTests.length > 0 ? `
          <div class="table-responsive-wrap" style="margin-top:0.4rem;">
            <table class="memo-rubric-table">
              <thead><tr><th>Sample Case</th><th>Expected</th><th>Actual</th><th>Status</th></tr></thead>
              <tbody>
                ${visibleTests.map(tr => `<tr>
                  <td>${esc(tr.name)}</td>
                  <td><code>${esc(tr.expected)}</code></td>
                  <td><code>${esc(tr.actual)}</code></td>
                  <td><span class="rubric-status-pill ${tr.passed ? 'rubric-status-pass' : 'rubric-status-fail'}">${tr.passed ? 'Pass' : 'Fail'}</span></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        ` : `<div style="font-size:0.82rem;color:var(--text-secondary);">Code executed cleanly inside the virtual WinForms sandbox.</div>`}
      `;
    }

    _resetInteractiveCodingQuestion(questionId) {
      const sess = this._getSessionForQuestion(questionId);
      if (!sess || sess.isCompleted) return;
      const q = sess.questions.find(item => item.id === questionId);
      const st = sess.getQuestionState(questionId);
      if (!q || !st || st.status === 'submitted') return;

      if (q.questionType === 'code-cloze') {
        st.clozeAnswers = {};
      } else {
        st.codeAnswer = q.starterCode || '';
      }
      st.status = 'seen';
      if (this.currentRoute === 'exams') {
        this.persistence.saveActiveExamSession(sess.toSnapshot());
        this.renderContinuousExamPaper();
      } else if (this.currentRoute === 'practice') {
        this._persistActivePracticeIfNeeded();
        this._renderPracticeSessionArea();
      } else if (this.currentRoute === 'home') {
        this._renderHomeQuickPracticeCard();
      }
    }

    _submitInteractiveCodingQuestion(questionId) {
      const sess = this._getSessionForQuestion(questionId);
      if (!sess || sess.isCompleted) return;
      const res = sess.submitSingleQuestion(questionId);
      if (res && !res.duplicate) {
        const q = res.question;
        const st = sess.getQuestionState(questionId);
        const ansVal = q.questionType === 'code-cloze' ? (st ? st.clozeAnswers : {}) : (st ? st.codeAnswer : '');
        this.persistence.recordQuestionAttempt(q, ansVal, res.outcome === 'correct', 0);
        this._updateSidebarBadges();
        if (this.currentRoute === 'exams') {
          this.persistence.saveActiveExamSession(sess.toSnapshot());
          this.renderContinuousExamPaper();
        } else if (this.currentRoute === 'practice') {
          this._persistActivePracticeIfNeeded();
          this._renderPracticeSessionArea();
        } else if (this.currentRoute === 'home') {
          this.renderHomeView();
        }
      }
    }

    _bindGlobalEvents() {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => {
          if (window.innerWidth > 1024) {
            document.getElementById('examPaletteSidebar')?.classList.remove('drawer-open');
          }
          if (window.innerWidth > 900) {
            const sb = document.getElementById('appSidebar');
            if (sb?.classList.contains('open')) {
              sb.classList.remove('open');
              document.getElementById('btnMobileMenu')?.setAttribute('aria-expanded', 'false');
            }
          }
        });
      }

      document.addEventListener('keydown', (e) => {
        if (this._modalOpen) {
          if (e.key === 'Escape') {
            e.preventDefault();
            this._closeModal();
            return;
          }
          if (e.key === 'Tab') {
            const dlg = document.querySelector('#appModalBackdrop.open .modal-dialog');
            if (dlg) {
              const focusables = [...dlg.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
              if (focusables.length > 0) {
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && (document.activeElement === first || !dlg.contains(document.activeElement))) {
                  e.preventDefault();
                  last.focus();
                } else if (!e.shiftKey && (document.activeElement === last || !dlg.contains(document.activeElement))) {
                  e.preventDefault();
                  first.focus();
                }
              }
            }
            return;
          }
          return;
        }

        if (e.key === 'Escape' && this._hasAnyOpenDrawer()) {
          const dr = document.getElementById('scenarioDrawer');
          if (dr?.classList.contains('open')) {
            dr.classList.remove('open');
            dr.setAttribute('aria-hidden', 'true');
            document.getElementById('btnToggleScenarioDrawer')?.focus();
            return;
          }
          const pal = document.getElementById('examPaletteSidebar');
          if (pal?.classList.contains('drawer-open')) {
            pal.classList.remove('drawer-open');
            document.getElementById('btnToggleMobilePalette')?.focus();
            return;
          }
          const sb = document.getElementById('appSidebar');
          if (sb?.classList.contains('open')) {
            sb.classList.remove('open');
            const mBtn = document.getElementById('btnMobileMenu');
            if (mBtn) {
              mBtn.setAttribute('aria-expanded', 'false');
              mBtn.focus();
            }
            return;
          }
        }

        // WAI-ARIA ArrowLeft / ArrowRight navigation inside Study Unit tablist
        if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && e.target && typeof e.target.closest === 'function' && e.target.closest('#studyUnitSelectorBar')) {
          const tabs = [...document.querySelectorAll('#studyUnitSelectorBar [role="tab"]')];
          const curIdx = tabs.indexOf(e.target);
          if (curIdx !== -1 && tabs.length > 0) {
            e.preventDefault();
            const nextIdx = (curIdx + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
            const suId = tabs[nextIdx].getAttribute('data-select-su');
            if (suId) {
              this.selectStudyUnit(suId);
              document.querySelector(`#studyUnitSelectorBar [role="tab"][data-select-su="${suId}"]`)?.focus();
            }
            return;
          }
        }

        // Code Editor Tab & Enter auto-indentation support
        const activeTextarea = (e.target && e.target.tagName === 'TEXTAREA' && (
          e.target.classList.contains('q-code-textarea') ||
          e.target.id === 'studentCodeInput' ||
          e.target.id === 'auditCodeTextarea'
        )) ? e.target : null;

        if (activeTextarea && !activeTextarea.readOnly && !activeTextarea.disabled) {
          if (e.key === 'Tab' && !e.ctrlKey && !e.altKey && !e.metaKey) {
            e.preventDefault();
            const start = activeTextarea.selectionStart || 0;
            const end = activeTextarea.selectionEnd || 0;
            const val = activeTextarea.value;
            activeTextarea.value = val.slice(0, start) + '    ' + val.slice(end);
            activeTextarea.selectionStart = activeTextarea.selectionEnd = start + 4;
            activeTextarea.dispatchEvent(new Event('input', { bubbles: true }));
            return;
          }
          if (e.key === 'Enter' && !e.ctrlKey && !e.altKey && !e.metaKey) {
            const start = activeTextarea.selectionStart || 0;
            const end = activeTextarea.selectionEnd || 0;
            const val = activeTextarea.value;
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            const currentLine = val.slice(lineStart, start);
            const indentMatch = currentLine.match(/^[ \t]*/);
            const baseIndent = indentMatch ? indentMatch[0] : '';
            const extraIndent = /\{\s*$/.test(currentLine) ? '    ' : '';
            if (baseIndent || extraIndent) {
              e.preventDefault();
              const insertStr = '\n' + baseIndent + extraIndent;
              activeTextarea.value = val.slice(0, start) + insertStr + val.slice(end);
              activeTextarea.selectionStart = activeTextarea.selectionEnd = start + insertStr.length;
              activeTextarea.dispatchEvent(new Event('input', { bubbles: true }));
              return;
            }
          }
        }

        if (this.defsEngine.shouldTriggerKeyboardReturn(e, this.currentRoute)) {
          e.preventDefault();
          this.returnFromDefinition();
          return;
        }
        this.shortcuts.handleKeyDown(e);
      });

      document.addEventListener('click', (e) => {
        const target = e.target;
        if (!target || typeof target.closest !== 'function') return;

        // Close open mobile sidebar / scenario drawer / mobile palette if clicking outside
        const openSb = document.getElementById('appSidebar');
        if (openSb?.classList.contains('open') && !target.closest('#appSidebar') && !target.closest('#btnMobileMenu')) {
          openSb.classList.remove('open');
          document.getElementById('btnMobileMenu')?.setAttribute('aria-expanded', 'false');
        }
        const openDr = document.getElementById('scenarioDrawer');
        if (openDr?.classList.contains('open') && !target.closest('#scenarioDrawer') && !target.closest('#btnToggleScenarioDrawer')) {
          openDr.classList.remove('open');
          openDr.setAttribute('aria-hidden', 'true');
        }
        const openPal = document.getElementById('examPaletteSidebar');
        if (openPal?.classList.contains('drawer-open') && !target.closest('#examPaletteSidebar') && !target.closest('#btnToggleMobilePalette')) {
          openPal.classList.remove('drawer-open');
        }

        // Brand -> Home
        if (target.closest('#btnBrandHome')) {
          this.navigate('home');
          return;
        }

        // Mobile sidebar menu button
        if (target.closest('#btnMobileMenu')) {
          const sb = document.getElementById('appSidebar');
          const btn = document.getElementById('btnMobileMenu');
          if (sb && btn) {
            const next = !sb.classList.contains('open');
            sb.classList.toggle('open', next);
            btn.setAttribute('aria-expanded', next ? 'true' : 'false');
          }
          return;
        }

        // Sidebar or bottom nav route link
        const routeBtn = target.closest('[data-route]');
        if (routeBtn) {
          const destRoute = routeBtn.getAttribute('data-route');
          if (destRoute === 'definitions') {
            this.defsEngine.clearReturnContext();
            this.highlightedDefId = null;
          }
          this.navigate(destRoute);
          return;
        }

        // Theme quick switch
        const themeBtn = target.closest('[data-set-theme]');
        if (themeBtn) {
          this.persistence.updatePreferences({ theme: themeBtn.getAttribute('data-set-theme') });
          this._applyPreferencesToDocument();
          if (this.currentRoute === 'settings') this.renderSettingsView();
          return;
        }

        // Open Study Unit from Home ring or Revision button
        const openSuBtn = target.closest('[data-open-su]');
        if (openSuBtn) {
          this.selectStudyUnit(openSuBtn.getAttribute('data-open-su'));
          return;
        }

        // Study Unit pill tab
        const selSuBtn = target.closest('[data-select-su]');
        if (selSuBtn) {
          this.selectStudyUnit(selSuBtn.getAttribute('data-select-su'));
          return;
        }

        // Quick Actions on Home
        if (target.closest('#qaStartPractice') || target.closest('[data-expand-full-practice]')) {
          this.practiceSubTab = 'session';
          this.navigate('practice');
          return;
        }
        if (target.closest('#qaCustomQuiz') || target.closest('#btnJumpCustomBuilder')) {
          this.practiceSubTab = 'custom';
          this.navigate('practice');
          return;
        }
        if (target.closest('#qaPastPapers')) {
          this.navigate('exams');
          return;
        }
        if (target.closest('#qaCodeLab')) {
          this.practiceSubTab = 'codelab';
          this.navigate('practice');
          return;
        }
        if (target.closest('#qaDefinitions')) {
          this.defsEngine.clearReturnContext();
          this.highlightedDefId = null;
          this.navigate('definitions');
          return;
        }
        if (target.closest('[data-resume-exam]')) {
          this.navigate('exams');
          return;
        }

        // Inline or chip Definition link
        const defTrigger = target.closest('[data-def-id]');
        if (defTrigger) {
          const defId = defTrigger.getAttribute('data-def-id');
          const qHost = defTrigger.closest('[data-question-id]');
          const fromTopic = defTrigger.getAttribute('data-from-topic') || null;
          this.openDefinitionWithContext(defId, {
            questionId: qHost ? qHost.getAttribute('data-question-id') : null,
            topicId: fromTopic
          });
          return;
        }

        // Related definition jump inside Definitions view
        const jumpDef = target.closest('[data-jump-def]');
        if (jumpDef) {
          this.highlightedDefId = jumpDef.getAttribute('data-jump-def');
          const searchEl = document.getElementById('defsMainSearch');
          const unitEl = document.getElementById('defsUnitFilter');
          const catEl = document.getElementById('defsCategoryFilter');
          if (searchEl) searchEl.value = '';
          if (unitEl) unitEl.value = 'ALL';
          if (catEl) catEl.value = 'ALL';
          this.renderDefinitionsView();
          const card = document.getElementById(`defCard_${this.highlightedDefId}`);
          if (card) card.scrollIntoView({ block: 'center' });
          return;
        }

        // Return from Definition
        if (target.closest('#btnReturnFromDef')) {
          this.returnFromDefinition();
          return;
        }

        // Copy C# code snippet
        const copyBtn = target.closest('[data-copy-encoded]');
        if (copyBtn) {
          const code = decodeURIComponent(copyBtn.getAttribute('data-copy-encoded') || '');
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code).catch(() => {});
          }
          this.showToast('C# snippet copied to clipboard.');
          return;
        }

        // Toggle topic completed
        const doneTopicBtn = target.closest('[data-toggle-topic-done]');
        if (doneTopicBtn) {
          const openPanels = [...document.querySelectorAll('details.topic-details[open][data-panel-id]')]
            .map(el => el.getAttribute('data-panel-id'));
          const prevScrollY = window.scrollY;
          const tId = doneTopicBtn.getAttribute('data-toggle-topic-done');
          const suId = doneTopicBtn.getAttribute('data-topic-su');
          const uObj = (this.data.units || []).find(u => u.id === suId);
          const allTopicIds = uObj ? (uObj.structuredTopics || []).map(t => t.id) : [];
          const nowDone = this.persistence.toggleTopicCompleted(tId, suId, allTopicIds);
          this.showToast(nowDone ? 'Topic marked complete.' : 'Topic marked incomplete.');
          this.renderStudyView(openPanels);
          window.scrollTo({ top: prevScrollY, behavior: 'instant' });
          return;
        }

        // Practise specific topic or active unit
        const pracTopicBtn = target.closest('[data-practise-topic]');
        if (pracTopicBtn) {
          this.startUnitPractice(
            pracTopicBtn.getAttribute('data-topic-su') || 'ALL',
            pracTopicBtn.getAttribute('data-practise-topic'),
            'all'
          );
          return;
        }
        const pracTopicCodingBtn = target.closest('[data-practise-topic-coding]');
        if (pracTopicCodingBtn) {
          this.startUnitPractice(
            pracTopicCodingBtn.getAttribute('data-topic-su') || 'ALL',
            pracTopicCodingBtn.getAttribute('data-practise-topic-coding'),
            'coding'
          );
          return;
        }
        const retestTopicBtn = target.closest('[data-retest-topic]');
        if (retestTopicBtn) {
          this.startUnitPractice(
            retestTopicBtn.getAttribute('data-retest-su') || 'ALL',
            retestTopicBtn.getAttribute('data-retest-topic'),
            'all'
          );
          return;
        }
        if (target.closest('#btnPractiseActiveUnit')) {
          this.startUnitPractice(this.activeStudyUnit, '', 'all');
          return;
        }

        // Practice sub-tabs
        const pSub = target.closest('[data-practice-sub]');
        if (pSub) {
          this.practiceSubTab = pSub.getAttribute('data-practice-sub');
          this.renderPracticeView();
          return;
        }
        if (target.closest('#btnStartFilteredPractice')) {
          const u = document.getElementById('practiceUnitSelect')?.value || 'ALL';
          const t = document.getElementById('practiceTopicSelect')?.value || '';
          const f = document.getElementById('practiceFormatSelect')?.value || 'all';
          this.startUnitPractice(u, t, f);
          this._focusPracticeSurfaceSafely(null);
          return;
        }
        if (target.closest('#btnPauseResumePracticeTimer')) {
          if (this.practiceSession && this.practiceSession.timed && !this.practiceSession.isCompleted) {
            if (this.practiceSession.pausedAtMs) this.practiceSession.resumeTimer();
            else this.practiceSession.pauseTimer();
            this._persistActivePracticeIfNeeded();
            this._renderPracticeSessionArea();
          }
          return;
        }
        if (target.closest('#btnFinishTimedQuiz')) {
          this._finalizeTimedPracticeQuiz(false);
          return;
        }
        const vmBtn = target.closest('[data-view-mode]');
        if (vmBtn) {
          this.setViewMode(vmBtn.getAttribute('data-view-mode'));
          if (this.practiceSession) this.practiceSession.layout = this.practiceViewMode;
          this._persistActivePracticeIfNeeded();
          return;
        }
        if (target.closest('#btnShortcutHelpModal')) {
          this._openModal(
            'Practice & Quiz Keyboard Shortcuts',
            `<div class="shortcut-list">
              <div><span class="kbd-tag">A, B, C, D, E</span> — Immediately select AND submit the corresponding option</div>
              <div><span class="kbd-tag">1, 2, 3, 4, 5</span> — Select the option without submitting</div>
              <div><span class="kbd-tag">Enter</span> — Submit selected answer, or advance to next question if already graded</div>
              <div><span class="kbd-tag">Esc / Backspace</span> — Return to exact position from an opened Definition</div>
            </div>`,
            null,
            null
          );
          return;
        }

        // Answer option click (Home, Practice, or Continuous Exam)
        const optBtn = target.closest('.q-option-btn[data-q-id]');
        if (optBtn && !optBtn.disabled) {
          const qId = optBtn.getAttribute('data-q-id');
          const optIdx = Number(optBtn.getAttribute('data-option-idx'));
          if (this.currentRoute === 'exams' && this.examSession) {
            this.selectPaperAnswer(qId, optIdx);
          } else if (this.currentRoute === 'home' && this.homeSession) {
            this.homeSession.selectOption(qId, optIdx);
            this._renderHomeQuickPracticeCard();
          } else if (this.currentRoute === 'practice' && this.practiceSession) {
            this.practiceSession.selectOption(qId, optIdx);
            this._persistActivePracticeIfNeeded();
            this._renderPracticeSessionArea();
          }
          return;
        }

        // Home Quick-Practice Prev / Submit / Next
        if (target.closest('#btnHomePrevQ')) {
          this.homeSession.goToIndex(this.homeSession.currentIndex - 1);
          this._renderHomeQuickPracticeCard();
          return;
        }
        if (target.closest('#btnHomeSubmitQ')) {
          this._handleShortcutSubmit();
          return;
        }
        if (target.closest('#btnHomeNextQ')) {
          this._handleShortcutNext();
          return;
        }

        // Practice Prev / Submit / Next / Sheet Submit
        if (target.closest('#btnPracPrevQ')) {
          this.practiceSession.goToIndex(this.practiceSession.currentIndex - 1);
          this._persistActivePracticeIfNeeded();
          this._renderPracticeSessionArea();
          return;
        }
        if (target.closest('#btnPracSubmitQ')) {
          this._handleShortcutSubmit();
          return;
        }
        if (target.closest('#btnPracNextQ')) {
          this._handleShortcutNext();
          return;
        }
        const sheetSubBtn = target.closest('[data-submit-sheet-q]');
        if (sheetSubBtn) {
          const qId = sheetSubBtn.getAttribute('data-submit-sheet-q');
          const res = this.practiceSession.submitSingleQuestion(qId);
          if (res && !res.duplicate) {
            const q = res.question;
            const st = this.practiceSession.getQuestionState(qId);
            const ansVal = ExamMod.isCodingQuestion && ExamMod.isCodingQuestion(q)
              ? (q.questionType === 'code-cloze' ? (st ? st.clozeAnswers : {}) : (st ? st.codeAnswer : ''))
              : res.selectedAnswer;
            this.persistence.recordQuestionAttempt(q, ansVal, res.outcome === 'correct', 0);
            this._updateSidebarBadges();
            this._persistActivePracticeIfNeeded();
            this._renderPracticeSessionArea();
          }
          return;
        }

        // Interactive Coding Question Toolbar & Cloze Actions
        const checkSynBtn = target.closest('[data-check-syntax-q]');
        if (checkSynBtn) {
          this._runInteractiveSyntaxCheck(checkSynBtn.getAttribute('data-check-syntax-q'));
          return;
        }
        const runSnipBtn = target.closest('[data-run-snippet-q]');
        if (runSnipBtn) {
          this._runInteractiveSnippetTests(runSnipBtn.getAttribute('data-run-snippet-q'));
          return;
        }
        const resetCodingBtn = target.closest('[data-reset-coding-q]');
        if (resetCodingBtn) {
          this._resetInteractiveCodingQuestion(resetCodingBtn.getAttribute('data-reset-coding-q'));
          return;
        }
        const submitCodingBtn = target.closest('[data-submit-coding-q]');
        if (submitCodingBtn) {
          this._submitInteractiveCodingQuestion(submitCodingBtn.getAttribute('data-submit-coding-q'));
          return;
        }

        // Flag question button
        const flagBtn = target.closest('[data-flag-q]');
        if (flagBtn) {
          const qId = flagBtn.getAttribute('data-flag-q');
          const active = this.toggleQuestionFlag(qId);
          flagBtn.classList.toggle('active', active);
          flagBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
          const span = flagBtn.querySelector('span');
          if (span) span.textContent = active ? 'Flagged' : 'Flag';
          return;
        }

        // Practise Similar Questions & Mark Concept Understood (Section 14)
        const simBtn = target.closest('[data-practise-similar]');
        if (simBtn) {
          const qId = simBtn.getAttribute('data-practise-similar');
          const allPool = this._getAllQuestionsPool();
          const srcQ = allPool.find(q => q.id === qId);
          if (srcQ) {
            const simQs = AnalyticsMod.getSimilarQuestions(srcQ, allPool, this.persistence.getState().questionHistory, 8);
            if (simQs.length > 0) {
              this.practiceSession = new ExamMod.ExamSession({
                id: `similar_${qId}_${Date.now()}`,
                mode: 'practice',
                title: `Related Practice: ${srcQ.topicTitle || srcQ.su}`,
                questions: simQs,
                allowInstantSubmit: true
              });
              this.practiceSubTab = 'session';
              this.practiceViewMode = 'card';
              this.navigate('practice');
              this.showToast(`Loaded ${simQs.length} related questions on ${srcQ.topicTitle || srcQ.su}.`);
            }
          }
          return;
        }
        const undBtn = target.closest('[data-mark-understood]');
        if (undBtn) {
          const qId = undBtn.getAttribute('data-mark-understood');
          this.persistence.markConceptUnderstood(qId, true);
          this.showToast('Marked concept as understood.');
          this.renderCurrentRoute();
          return;
        }
        const unmarkBtn = target.closest('[data-unmark-understood]');
        if (unmarkBtn) {
          this.persistence.markConceptUnderstood(unmarkBtn.getAttribute('data-unmark-understood'), false);
          this.renderProgressView();
          return;
        }

        // Custom Quiz Generator Launch
        if (target.closest('#btnGenerateCustomExam')) {
          this._handleGenerateCustomAssessment();
          return;
        }

        // Code Lab controls
        const clTab = target.closest('[data-codelab-tab]');
        if (clTab) {
          this.codelabSubTab = clTab.getAttribute('data-codelab-tab');
          this._renderCodeLabView();
          return;
        }
        if (target.closest('#btnRunCodeGrade')) {
          this._runCodeGradeEvaluation();
          return;
        }
        if (target.closest('#btnCheckCodeLabSyntax')) {
          this._runCodeLabSyntaxCheck();
          return;
        }
        if (target.closest('#btnShowSolution')) {
          const sc = this._getCodeLabItem(this.activeCodeScenarioKey);
          const inp = document.getElementById('studentCodeInput');
          if (sc && inp) {
            inp.value = sc.modelSolution || '';
            this._syncCodeLabLineNumbers();
          }
          return;
        }
        if (target.closest('#btnResetScenarioCode')) {
          this._loadCodeScenarioIntoEditor(this.activeCodeScenarioKey);
          return;
        }
        const spotOpt = target.closest('[data-spot-opt]');
        if (spotOpt) {
          this.spotSelected = Number(spotOpt.getAttribute('data-spot-opt'));
          this._renderCodeLabView();
          return;
        }
        if (target.closest('#btnSubmitSpot')) {
          this.spotSubmitted = true;
          this._renderCodeLabView();
          return;
        }
        const spotNav = target.closest('[data-spot-nav]');
        if (spotNav) {
          const delta = Number(spotNav.getAttribute('data-spot-nav'));
          this.spotIndex = Math.max(0, Math.min((this.data.spotErrors || []).length - 1, this.spotIndex + delta));
          this.spotSelected = null;
          this.spotSubmitted = false;
          this._renderCodeLabView();
          return;
        }
        if (target.closest('#btnLoadCanonicalAudit')) {
          const sc = (this.data.auditScenarios || [])[this.activeAuditIndex];
          const ta = document.getElementById('auditCodeTextarea');
          if (sc && ta) ta.value = sc.canonicalSolution || sc.canonicalCode || '';
          return;
        }
        if (target.closest('#btnRunCodeAuditor')) {
          const sc = (this.data.auditScenarios || [])[this.activeAuditIndex];
          const ta = document.getElementById('auditCodeTextarea');
          const out = document.getElementById('auditResultOutput');
          if (sc && ta && out && CSharpEngine.CSharpCodeAuditor) {
            const res = CSharpEngine.CSharpCodeAuditor.audit(ta.value, sc);
            out.innerHTML = `<div class="panel-card">
              <strong>Audit Score: ${res.score}% (${res.fixedBugs} / ${res.totalBugs} defects fixed)</strong>
              <ul style="margin:0.5rem 0 0;padding-left:1.2rem;font-size:0.84rem;">
                ${(res.feedback || []).map(f => {
                  const colorVar = (f.status === 'SUCCESS' || f.passed)
                    ? 'var(--status-success-text)'
                    : f.status === 'WARNING'
                      ? 'var(--status-warning-text)'
                      : 'var(--status-error-text)';
                  return `<li style="color:${colorVar};">${esc(f.message || f.description || '')}</li>`;
                }).join('')}
              </ul>
            </div>`;
          }
          return;
        }

        // Examination Centre actions
        if (target.closest('#btnStartFullWeightedTimed')) {
          this.startFullWeightedExam(true);
          return;
        }
        if (target.closest('#btnStartFullWeightedUntimed')) {
          this.startFullWeightedExam(false);
          return;
        }
        if (target.closest('#btnStartIncorrectExam')) {
          const stats = AnalyticsMod.computeAnalytics(this.persistence.getState(), this.data);
          const pool = stats.incorrectQueue.map(x => x.question);
          if (pool.length === 0) {
            this.showToast('No unresolved incorrect questions — launching mixed diagnostic set.');
            this.startUnitPractice('ALL', '');
            return;
          }
          this.practiceSession = new ExamMod.ExamSession({
            id: `diag_review_${Date.now()}`,
            mode: 'review',
            title: 'Incorrect Questions Diagnostic Retest',
            questions: pool,
            allowInstantSubmit: true
          });
          this.practiceSubTab = 'session';
          this.practiceViewMode = 'card';
          this.navigate('practice');
          return;
        }
        if (target.closest('[data-practise-unanswered]')) {
          const stats = AnalyticsMod.computeAnalytics(this.persistence.getState(), this.data);
          const pool = stats.unansweredQueue.length > 0
            ? stats.unansweredQueue
            : ExamMod.generateCustomExam(this.data.questions || [], {
                questionCount: 15,
                excludeIds: Object.keys(this.persistence.getState().questionHistory || {})
              });
          if (pool.length > 0) {
            this.practiceSession = new ExamMod.ExamSession({
              id: `unans_review_${Date.now()}`,
              mode: 'review',
              title: stats.unansweredQueue.length > 0 ? 'Unanswered Exam Questions Review' : 'Unattempted Curriculum Questions',
              questions: pool,
              allowInstantSubmit: true
            });
            this.practiceSubTab = 'session';
            this.practiceViewMode = 'card';
            this.navigate('practice');
          }
          return;
        }
        if (target.closest('[data-practise-flagged]')) {
          const stats = AnalyticsMod.computeAnalytics(this.persistence.getState(), this.data);
          if (stats.flaggedQueue.length > 0) {
            this.practiceSession = new ExamMod.ExamSession({
              id: `flagged_review_${Date.now()}`,
              mode: 'review',
              title: 'Flagged Questions Interactive Practice',
              questions: stats.flaggedQueue,
              allowInstantSubmit: true
            });
            this.practiceSubTab = 'session';
            this.practiceViewMode = 'card';
            this.navigate('practice');
          }
          return;
        }
        const paperBtn = target.closest('[data-start-paper]');
        if (paperBtn) {
          const eId = paperBtn.getAttribute('data-start-paper');
          const timed = paperBtn.getAttribute('data-paper-timed') !== 'false';
          this.startOfficialExam(eId, timed);
          return;
        }
        const pracPaperBtn = target.closest('[data-start-practical-paper]');
        if (pracPaperBtn) {
          const eId = pracPaperBtn.getAttribute('data-start-practical-paper');
          this.startPracticalExamSection(eId);
          return;
        }
        const jumpQ = target.closest('[data-jump-paper-q]');
        if (jumpQ) {
          const qId = jumpQ.getAttribute('data-jump-paper-q');
          const el = document.getElementById(`paperQuestion_${qId}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('examPaletteSidebar')?.classList.remove('drawer-open');
          return;
        }
        if (target.closest('#btnJumpNextUnanswered')) {
          if (this.examSession) {
            const pre = this.examSession.getPreSubmitSummary();
            if (pre.unansweredNumbers.length > 0) {
              this._lastUnansweredJumpIdx = (this._lastUnansweredJumpIdx + 1) % pre.unansweredNumbers.length;
              const chosen = pre.unansweredNumbers[this._lastUnansweredJumpIdx];
              document.getElementById(`paperQuestion_${chosen.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              document.getElementById('examPaletteSidebar')?.classList.remove('drawer-open');
            } else {
              this.showToast('All questions in this paper have an answer selected.');
            }
          }
          return;
        }
        if (target.closest('#btnOpenSubmitExamModal') || target.closest('[data-trigger-exam-submit]')) {
          this.openExamSubmitConfirmation();
          return;
        }
        if (target.closest('#btnPauseResumeTimer')) {
          if (this.examSession && this.examSession.timed && !this.examSession.isCompleted) {
            if (this.examSession.pausedAtMs) this.examSession.resumeTimer();
            else this.examSession.pauseTimer();
            this.persistence.saveActiveExamSession(this.examSession.toSnapshot());
            this.renderContinuousExamPaper();
          }
          return;
        }
        if (target.closest('#btnToggleScenarioDrawer')) {
          const dr = document.getElementById('scenarioDrawer');
          if (dr) {
            const open = !dr.classList.contains('open');
            dr.classList.toggle('open', open);
            dr.setAttribute('aria-hidden', open ? 'false' : 'true');
          }
          return;
        }
        if (target.closest('#btnCloseScenarioDrawer')) {
          const dr = document.getElementById('scenarioDrawer');
          if (dr) {
            dr.classList.remove('open');
            dr.setAttribute('aria-hidden', 'true');
          }
          return;
        }
        if (target.closest('#btnToggleMobilePalette')) {
          document.getElementById('examPaletteSidebar')?.classList.add('drawer-open');
          return;
        }
        if (target.closest('#btnCloseMobilePalette')) {
          document.getElementById('examPaletteSidebar')?.classList.remove('drawer-open');
          return;
        }
        if (target.closest('#btnExitExamToLobby')) {
          if (this.examSession && !this.examSession.isCompleted) {
            const pre = this.examSession.getPreSubmitSummary();
            this._openModal(
              'Exit & Discard Active Examination?',
              `<p>You have answered <strong>${pre.answeredCount} of ${pre.totalQuestions}</strong> questions in <strong>${esc(this.examSession.title)}</strong>.</p><p>Returning to the Examination Centre Lobby will discard this unsubmitted attempt (use the sidebar to switch sections if you want to keep it paused for later).</p>`,
              'Discard & Exit',
              () => {
                this._stopExamTimerLoop();
                this._teardownPaperScrollSpy();
                this._closeAllDrawers();
                this.examSession = null;
                this.persistence.saveActiveExamSession(null);
                this.renderExamsView();
              }
            );
            return;
          }
          this._stopExamTimerLoop();
          this._teardownPaperScrollSpy();
          this._closeAllDrawers();
          this.examSession = null;
          this.renderExamsView();
          return;
        }

        // Review sub-tabs
        const revTab = target.closest('[data-review-tab]');
        if (revTab) {
          this.reviewSubTab = revTab.getAttribute('data-review-tab');
          this.renderProgressView();
          return;
        }

        // Settings Export & Reset
        if (target.closest('#btnExportBackup')) {
          const json = this.persistence.exportBackupJson();
          const blob = new Blob([json], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `CMPG122_Progress_Backup_${new Date().toISOString().slice(0, 10)}.json`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          this.showToast('Progress backup exported.');
          return;
        }
        if (target.closest('#btnResetProgressPrompt')) {
          this._openModal(
            'Reset All Learner Progress?',
            '<p>This permanently clears your saved question history, completed Study Unit topics, flagged items, and examination scores. Consider exporting a JSON backup first.</p>',
            'Reset All Data',
            async () => {
              await this.persistence.resetAllData();
              this._applyPreferencesToDocument();
              this._initHomeQuickSession();
              this._initDefaultPracticeSession();
              this.examSession = null;
              this.renderCurrentRoute();
              this.showToast('All progress and preferences have been reset.');
            }
          );
          return;
        }

        // Close Modal
        if (target.closest('#btnCloseAppModal') || target === document.getElementById('appModalBackdrop')) {
          this._closeModal();
        }
      });

      // Change & Input listeners
      document.addEventListener('change', async (e) => {
        const t = e.target;
        if (!t) return;

        if (t.id === 'quickModeSelect') {
          this.navigate(t.value);
        } else if (t.id === 'practiceUnitSelect') {
          this._syncPracticeTopicDropdown(t.value);
        } else if (t.id === 'codeLabUnitSelect') {
          this._populateCodeLabControls(t.value);
        } else if (t.id === 'codeScenarioSelect') {
          this._loadCodeScenarioIntoEditor(t.value);
        } else if (t.id === 'auditScenarioSelect') {
          this.activeAuditIndex = Number(t.value) || 0;
          this._renderCodeLabView();
        } else if (t.id === 'defsUnitFilter' || t.id === 'defsCategoryFilter') {
          this.renderDefinitionsView();
        } else if (t.id === 'settingThemeSelect') {
          this.persistence.updatePreferences({ theme: t.value });
          this._applyPreferencesToDocument();
        } else if (t.id === 'settingFontScaleSelect') {
          this.persistence.updatePreferences({ fontScale: Number(t.value) });
          this._applyPreferencesToDocument();
        } else if (t.id === 'settingReducedMotion') {
          this.persistence.updatePreferences({ reducedMotion: Boolean(t.checked) });
          this._applyPreferencesToDocument();
        } else if (t.id === 'settingShortcutsEnabled') {
          this.persistence.updatePreferences({ keyboardShortcutsEnabled: Boolean(t.checked) });
        } else if (t.id === 'settingLetterShortcuts') {
          this.persistence.updatePreferences({ letterShortcutsEnabled: Boolean(t.checked) });
        } else if (t.id === 'inputImportBackup' && t.files && t.files[0]) {
          try {
            const text = await t.files[0].text();
            const res = await this.persistence.importBackupJson(text);
            if (!res.valid) {
              this.showToast(`Import rejected: ${res.error}`);
            } else {
              this._applyPreferencesToDocument();
              this.renderCurrentRoute();
              this.showToast('Backup validated and restored successfully.');
            }
          } catch (_err) {
            this.showToast('Could not read backup file.');
          }
          t.value = '';
        }
      });

      document.addEventListener('input', (e) => {
        const t = e.target;
        if (!t) return;
        if (t.id === 'homeDefSearchInput') {
          this._renderHomeQuickDefs(t.value);
        } else if (t.id === 'defsMainSearch') {
          this.renderDefinitionsView();
        } else if (t.id === 'studentCodeInput') {
          this._syncCodeLabLineNumbers();
        } else if (typeof t.getAttribute === 'function' && t.getAttribute('data-cloze-q-id')) {
          const qId = t.getAttribute('data-cloze-q-id');
          const blankId = t.getAttribute('data-cloze-blank-id');
          const sess = this._getSessionForQuestion(qId);
          if (sess && sess.setClozeAnswer) {
            sess.setClozeAnswer(qId, blankId, t.value);
            this._updateCodingDomStateWithoutRerender(sess, qId);
          }
        } else if (typeof t.getAttribute === 'function' && t.getAttribute('data-code-q-id')) {
          const qId = t.getAttribute('data-code-q-id');
          const sess = this._getSessionForQuestion(qId);
          if (sess && sess.setCodeAnswer) {
            sess.setCodeAnswer(qId, t.value);
            const q = sess.questions.find(item => item.id === qId);
            const minLines = q && q.questionType === 'code-snippet' ? 6 : 12;
            const gutter = document.getElementById(`gutter_${qId}`);
            if (gutter && Renderer.buildLineNumbersHtml) {
              gutter.innerHTML = Renderer.buildLineNumbersHtml(t.value, minLines);
            }
            this._updateCodingDomStateWithoutRerender(sess, qId);
          }
        }
      });
    }

    _handleGenerateCustomAssessment() {
      const units = [...document.querySelectorAll('#customUnitsGroup input[type="checkbox"]:checked')].map(el => el.value);
      const diffs = [...document.querySelectorAll('#customDiffGroup input[type="checkbox"]:checked')].map(el => el.value);
      const topic = document.getElementById('customTopicFilter')?.value || '';
      const qFormat = document.getElementById('customFormatFilter')?.value || 'all';
      const qCount = Math.max(3, Math.min(80, Number(document.getElementById('customQuestionCount')?.value) || 15));
      const targetMarks = Math.max(0, Number(document.getElementById('customTargetMarks')?.value) || 0);
      const timeLimit = Math.max(0, Number(document.getElementById('customTimeLimit')?.value) || 0);
      const useWeighted = Boolean(document.getElementById('customWeightedCheck')?.checked);
      const randomize = Boolean(document.getElementById('customRandomizeCheck')?.checked);
      const excludeMastered = Boolean(document.getElementById('customExcludeMasteredCheck')?.checked);

      if (units.length === 0 || diffs.length === 0) {
        this.showToast('Select at least one Study Unit and one Difficulty level.');
        return;
      }

      const hist = this.persistence.getState().questionHistory || {};
      const excludeIds = excludeMastered
        ? Object.keys(hist).filter(id => hist[id] && hist[id].isCorrect)
        : [];

      const generated = ExamMod.generateCustomExam(this._getAllQuestionsPool(), {
        units,
        topics: topic ? [topic] : [],
        difficulties: diffs,
        questionFormat: qFormat,
        questionCount: targetMarks > 0 ? 0 : qCount,
        targetMarks: targetMarks > 0 ? targetMarks : 0,
        useWeightedDistribution: useWeighted,
        randomize,
        excludeIds
      });

      if (generated.length === 0) {
        this.showToast('No questions matched those exact filters. Try broadening topic or difficulty filters.');
        return;
      }

      const deliveryMode = document.getElementById('customDeliveryMode')?.value || 'quiz';

      if (deliveryMode === 'exam') {
        this.examSession = new ExamMod.ExamSession({
          id: `custom_exam_${Date.now()}`,
          mode: 'custom_quiz',
          title: `Custom Examination (${generated.length} Questions)`,
          layout: 'continuous',
          allowInstantSubmit: false,
          questions: generated,
          durationMinutes: timeLimit
        });
        this.persistence.saveActiveExamSession(this.examSession.toSnapshot());
        this.navigate('exams');
      } else {
        this.practiceSession = new ExamMod.ExamSession({
          id: `custom_prac_${Date.now()}`,
          mode: 'custom_quiz',
          title: timeLimit > 0
            ? `Custom Timed Quiz (${generated.length} Questions)`
            : `Custom Quiz (${generated.length} Questions)`,
          questions: generated,
          allowInstantSubmit: true,
          durationMinutes: timeLimit
        });
        this.persistence.saveActivePracticeSession(this.practiceSession.toSnapshot());
        this.practiceSubTab = 'session';
        this.practiceViewMode = 'card';
        this.renderPracticeView();
        this._focusPracticeSurfaceSafely(null);
      }
    }

    /* ==================== MODAL, TOAST, STUDY TIMER & SW ==================== */

    _openModal(title, bodyHtml, confirmLabel, onConfirm) {
      const bd = document.getElementById('appModalBackdrop');
      const titleEl = document.getElementById('appModalTitle');
      const bodyEl = document.getElementById('appModalBody');
      const actionsEl = document.getElementById('appModalActions');
      if (!bd || !titleEl || !bodyEl || !actionsEl) return;

      this._modalTriggerEl = (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement)
        ? document.activeElement
        : null;

      titleEl.textContent = title;
      bodyEl.innerHTML = bodyHtml;
      this._modalConfirmHandler = onConfirm;
      actionsEl.innerHTML = `
        <button type="button" class="btn-ghost btn-sm" id="btnModalCancelAction">Cancel</button>
        ${confirmLabel ? `<button type="button" class="btn-primary btn-sm" id="btnModalConfirmAction">${esc(confirmLabel)}</button>` : ''}
      `;
      bd.classList.add('open');
      bd.setAttribute('aria-hidden', 'false');
      this._modalOpen = true;

      document.getElementById('btnModalCancelAction')?.addEventListener('click', () => this._closeModal(), { once: true });
      document.getElementById('btnModalConfirmAction')?.addEventListener('click', () => {
        const fn = this._modalConfirmHandler;
        this._closeModal();
        if (typeof fn === 'function') fn();
      }, { once: true });

      const initialFocus = document.getElementById('btnModalConfirmAction')
        || document.getElementById('btnModalCancelAction')
        || document.getElementById('btnCloseAppModal');
      if (initialFocus && typeof initialFocus.focus === 'function') {
        initialFocus.focus();
      }
    }

    _closeModal() {
      const bd = document.getElementById('appModalBackdrop');
      if (bd) {
        bd.classList.remove('open');
        bd.setAttribute('aria-hidden', 'true');
      }
      this._modalOpen = false;
      this._modalConfirmHandler = null;
      const restoreTarget = this._modalTriggerEl;
      this._modalTriggerEl = null;
      if (restoreTarget && typeof restoreTarget.focus === 'function' && document.contains(restoreTarget)) {
        restoreTarget.focus();
      }
    }

    showToast(message) {
      if (typeof document === 'undefined') return;
      const region = document.getElementById('toastRegion');
      if (!region) return;
      const el = document.createElement('div');
      el.className = 'toast-item';
      el.textContent = message;
      region.appendChild(el);
      setTimeout(() => { el.remove(); }, 3200);
    }

    _startStudyTimeTracker() {
      if (this._studyTicker || typeof document === 'undefined') return;
      this._studyTicker = setInterval(() => {
        if (!document.hidden) {
          this.persistence.addStudyTime(15);
        }
      }, 15000);
    }

    _registerServiceWorkerSafely() {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
      if (!('serviceWorker' in navigator)) return;
      if (!window.location.protocol.startsWith('http')) return;
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        const hasLiveExam = () => Boolean(this.examSession && !this.examSession.isCompleted);
        if (reg.waiting && !hasLiveExam()) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        reg.addEventListener('updatefound', () => {
          const worker = reg.installing;
          if (!worker) return;
          worker.addEventListener('statechange', () => {
            // Never interrupt an active examination session with a forced reload
            if (worker.state === 'installed' && navigator.serviceWorker.controller && !hasLiveExam()) {
              worker.postMessage({ type: 'SKIP_WAITING' });
              this.showToast('Offline cache updated for next launch.');
            }
          });
        });
      }).catch(() => {});
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = { Cmpg122PlatformApp };
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const instance = new Cmpg122PlatformApp();
    window.CMPG122_APP = instance;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => instance.init());
    } else {
      instance.init();
    }
  }
})(typeof self !== 'undefined' ? self : this);
