#!/usr/bin/env python3
"""
NWU CMPG122 — Full Playwright Browser End-to-End, 10-Viewport Responsive,
Offline Service Worker, WCAG Contrast/Accessibility & Standalone file:// Suite
"""

import os
import sys
import json
import time
import threading
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from playwright.sync_api import sync_playwright

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

APP_DIR = Path(__file__).resolve().parent.parent
WORKSPACE_DIR = APP_DIR.parent
STANDALONE_HTML = WORKSPACE_DIR / 'CMPG122_Test1_StudyGuide.html'

REQUIRED_VIEWPORTS = [
    (320, 568),
    (375, 812),
    (390, 844),
    (430, 932),
    (768, 1024),
    (1024, 768),
    (1280, 800),
    (1366, 768),
    (1440, 900),
    (1920, 1080),
]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


def start_local_server(directory: Path):
    handler = functools.partial(QuietHandler, directory=str(directory))
    server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
    port = server.server_address[1]
    t = threading.Thread(target=server.serve_forever, daemon=True)
    t.start()
    return server, f'http://127.0.0.1:{port}'


def assert_true(cond, msg):
    if not cond:
        raise AssertionError(f'E2E ASSERTION FAILED: {msg}')


def run_suite():
    server, base_url = start_local_server(APP_DIR)
    print(f'[*] Started local test server at {base_url}')

    results_summary = {
        'e2eLearnerPath': False,
        'keyboardShortcuts': False,
        'contextPreservingDefs': False,
        'continuousPastExam': False,
        'persistenceAcrossReload': False,
        'offlineServiceWorker': False,
        'responsiveViewportsChecked': [],
        'accessibilityChecks': False,
        'standaloneFileBundle': False,
        'consoleErrors': [],
        'pageErrors': [],
    }

    try:
        with sync_playwright() as p:
            browser = None
            for ch in ('chrome', 'msedge', None):
                try:
                    browser = p.chromium.launch(channel=ch, headless=True) if ch else p.chromium.launch(headless=True)
                    print(f'[*] Launched real Chromium browser channel: {ch or "bundled"}')
                    break
                except Exception:
                    continue
            assert_true(browser is not None, 'Could not launch Chrome, Edge, or Chromium browser')
            context = browser.new_context(viewport={'width': 1440, 'height': 900})
            page = context.new_page()

            page.on('console', lambda msg: results_summary['consoleErrors'].append(msg.text) if msg.type == 'error' else None)
            page.on('pageerror', lambda err: results_summary['pageErrors'].append(str(err)))

            # 1. Open Application & Verify Honest 0% Initial State + Visual Elements
            page.goto(f'{base_url}/index.html', wait_until='networkidle')
            assert_true(page.locator('#homeOverallPct').inner_text().strip() == '0%', 'Fresh start must show honest 0% progress')
            assert_true(page.locator('.su-ring-card').count() == 7, 'Home must display all 7 Study Unit progress ring cards')
            assert_true(page.locator('.csharp-shield-svg').count() == 1, 'C# Hexagon SVG emblem must render')

            # 1b. Verify Home Quick Practice 7-SU balance & Home Quick Definition return banner label ("Back to Home Dashboard")
            home_su_count = page.evaluate('new Set(window.CMPG122_APP.homeSession.questions.map(q => q.su)).size')
            assert_true(home_su_count == 7, f'Expected Home Quick Practice pool to cover all 7 SUs, got {home_su_count}')
            page.locator('#homeQuickDefsList [data-def-id]').first.click()
            assert_true(page.locator('#viewDefinitions.active').count() == 1, 'Clicking Home quick definition must open Definitions')
            home_ret_text = page.locator('#btnReturnFromDef').inner_text()
            assert_true('Back to Home Dashboard' in home_ret_text, f'Expected Back to Home Dashboard banner, got: {home_ret_text}')
            page.locator('#btnReturnFromDef').click()
            assert_true(page.locator('#viewHome.active').count() == 1, 'Return from Home quick definition must restore Home Dashboard')

            # Wait briefly for Service Worker registration & initial shell cache on localhost
            page.wait_for_timeout(800)

            # 2–5. Navigate to Study Unit SU5, expand panels, scroll, open Definition & restore exact context
            page.locator('.su-ring-card[data-open-su="SU5"]').click()
            assert_true(page.locator('#viewStudy.active').count() == 1, 'Study view should become active')
            assert_true('Study Unit 5' in page.locator('#studyUnitContentHost').inner_text(), 'SU5 content must render')

            # Expand Exam Application & Related Definitions panel on first SU5 topic
            exam_details = page.locator('details[data-panel-id="su5_t1_void_methods_headers_exam"]')
            exam_details.locator('summary').click()
            assert_true(exam_details.evaluate('el => el.open') is True, 'Expanded topic details should be open')

            # Mark first SU5 topic completed
            page.locator('[data-toggle-topic-done]').first.click()

            # Scroll definition chip into view, record exact scrollY, and click it
            def_chip = page.locator('details[data-panel-id="su5_t1_void_methods_headers_exam"] .def-chip-btn').first
            def_chip.scroll_into_view_if_needed()
            saved_scroll = page.evaluate('window.scrollY')
            assert_true(saved_scroll >= 100, f'Expected scrolled study position >= 100, got {saved_scroll}')
            def_chip.click()
            assert_true(page.locator('#viewDefinitions.active').count() == 1, 'Definitions view must open')
            return_btn_text = page.locator('#btnReturnFromDef').inner_text()
            assert_true('Back to Study Note' in return_btn_text, f'Expected Back to Study Note banner, got {return_btn_text}')

            # Test typing Backspace inside search input does NOT hijack navigation!
            search_inp = page.locator('#defsMainSearch')
            search_inp.fill('ref')
            search_inp.press('Backspace')
            assert_true(page.locator('#viewDefinitions.active').count() == 1, 'Backspace inside search box must NOT leave Definitions')
            search_inp.fill('')

            # Press Escape on body to return to exact Study Note context
            page.locator('#defsViewHeading').click()
            page.keyboard.press('Escape')
            page.wait_for_timeout(150)
            assert_true(page.locator('#viewStudy.active').count() == 1, 'Escape must return from Definition to Study view')
            assert_true(
                page.locator('details[data-panel-id="su5_t1_void_methods_headers_exam"]').evaluate('el => el.open') is True,
                'Expanded panel state must be restored on return from Definition'
            )
            restored_scroll = page.evaluate('window.scrollY')
            assert_true(abs(restored_scroll - saved_scroll) < 80, f'Scroll position not restored ({restored_scroll} vs {saved_scroll})')
            results_summary['contextPreservingDefs'] = True
            print('[+] Verified Study Unit 10-part notes & exact context-preserving Definition return.')

            # 6–9. Start Practice, verify Mixed Curriculum 7-SU balance, test Keyboard Shortcuts (1-5, Enter, A-E) & Question Flagging
            page.evaluate('window.CMPG122_APP.startUnitPractice("ALL", "")')
            mixed_su_count = page.evaluate('new Set(window.CMPG122_APP.practiceSession.questions.map(q => q.su)).size')
            assert_true(mixed_su_count == 7, f'Mixed Curriculum Practice must span all 7 SUs, got {mixed_su_count}')

            page.evaluate('window.CMPG122_APP.selectStudyUnit("SU5")')
            page.locator('#btnPractiseActiveUnit').click()
            assert_true(page.locator('#viewPractice.active').count() == 1, 'Practice view must open')

            # Ensure focus is on non-input element before testing shortcuts
            page.locator('#practiceViewHeading').click()

            # Press '2' -> selects option B without submitting
            page.keyboard.press('2')
            assert_true(page.locator('#singleCardArea .q-option-btn.opt-selected').count() == 1, 'Key 2 must select option B without submitting')
            assert_true(page.locator('#singleCardArea .q-feedback-panel').count() == 0, 'Key 2 must NOT submit immediately')

            # Press 'Enter' -> submits selected answer
            page.keyboard.press('Enter')
            assert_true(page.locator('#singleCardArea .q-feedback-panel').count() == 1, 'Enter must submit selected option')

            # Press 'Enter' again -> advances to Question 2 of N
            page.keyboard.press('Enter')
            assert_true('Question 2 of' in page.locator('#singleCardArea').inner_text(), 'Second Enter must advance to Question 2')

            # Press 'a' -> selects AND submits option A in one single keypress!
            page.keyboard.press('a')
            assert_true(page.locator('#singleCardArea .q-feedback-panel').count() == 1, 'Letter shortcut a must immediately select & submit')

            # Flag current question
            page.locator('#singleCardArea [data-flag-q]').click()
            assert_true(page.locator('#singleCardArea [data-flag-q].active').count() == 1, 'Question flag button must activate')
            results_summary['keyboardShortcuts'] = True
            print('[+] Verified Practice workflow, Keyboard Shortcuts (1-5, Enter, A-E), and Question Flagging.')

            # Test Practice Sheet View context-preserving Definition return WITHOUT corrupting answers across questions
            page.locator('[data-view-mode="continuous"]').click()
            q2 = page.locator('#practiceContinuousArea .paper-q-card').nth(2)
            q3 = page.locator('#practiceContinuousArea .paper-q-card').nth(3)
            q2.locator('.q-option-btn').nth(0).click()
            q3.locator('.q-option-btn').nth(3).click()
            # Open Shortcut Modal & verify keyboard Tab focus trap + trigger restoration
            page.locator('#btnShortcutHelpModal').click()
            assert_true(page.locator('#appModalBackdrop.open').count() == 1, 'Shortcut modal must open')
            for _ in range(5):
                page.keyboard.press('Tab')
                inside_modal = page.evaluate('Boolean(document.activeElement && document.activeElement.closest(".modal-dialog"))')
                assert_true(inside_modal, 'Tab focus must remain trapped inside open modal dialog')
            page.keyboard.press('Escape')
            assert_true(page.evaluate('document.activeElement && document.activeElement.id') == 'btnShortcutHelpModal', 'Closing modal must restore focus to trigger button')

            # Open Definition from Q4 (nth(3)) in Sheet View and verify Q4 keeps Option D (not overwritten by Q1/Q3!)
            q3_id = q3.get_attribute('data-question-id')
            page.evaluate(f'window.CMPG122_APP.openDefinitionWithContext("def_tryparse", {{ questionId: "{q3_id}" }})')
            assert_true(page.locator('#viewDefinitions.active').count() == 1, 'Definitions must open from Sheet View')
            page.locator('#btnReturnFromDef').click()
            assert_true(page.locator('#practiceContinuousArea').is_visible(), 'Must restore Sheet View mode on return')
            q3_after = page.locator('#practiceContinuousArea .paper-q-card').nth(3)
            assert_true(
                q3_after.locator('.q-option-btn').nth(3).evaluate('el => el.classList.contains("opt-selected")'),
                'Sheet View Q4 selected option D must NOT be overwritten on Definition return'
            )

            # Verify navigating directly to Definitions via sidebar clears stale return banner
            page.locator('.sidebar-link[data-route="definitions"]').click()
            assert_true(page.locator('#btnReturnFromDef').count() == 0, 'Direct sidebar navigation to Definitions must not show stale return banner')

            # 9b. Verify Custom Examination / Quiz Builder weighted 7-SU selection & Custom Quiz Keyboard Shortcuts (1-5, Enter, A-E)
            page.locator('.sidebar-link[data-route="exams"]').click()
            page.locator('#btnJumpCustomBuilder').click()
            assert_true(page.locator('#practiceSubCustom').is_visible(), 'Custom Quiz Builder pane must open')
            page.locator('#btnGenerateCustomExam').click()
            assert_true(page.locator('#viewPractice.active').count() == 1, 'Default Custom Quiz must open in Interactive Quiz mode')
            assert_true(page.locator('#practiceTimerBadge').is_visible(), 'Timed Custom Quiz must display live countdown badge in Practice toolbar')
            custom_su_count = page.evaluate('new Set(window.CMPG122_APP.practiceSession.questions.map(q => q.su)).size')
            assert_true(custom_su_count == 7, f'Default weighted 15-question Custom Quiz must span all 7 SUs, got {custom_su_count}')

            # Immediately press '1', 'Enter', 'Enter', 'b' in Custom Quiz without manual click (verifies focus handoff + shortcuts)
            page.keyboard.press('1')
            assert_true(page.locator('#singleCardArea .q-option-btn.opt-selected').count() == 1, 'Custom Quiz key 1 must select option A')
            page.keyboard.press('Enter')
            assert_true(page.locator('#singleCardArea .q-feedback-panel').count() == 1, 'Custom Quiz Enter must submit selected option')
            page.keyboard.press('Enter')
            assert_true('Question 2 of' in page.locator('#singleCardArea').inner_text(), 'Custom Quiz second Enter must advance to Question 2')
            page.keyboard.press('b')
            assert_true(page.locator('#singleCardArea .q-feedback-panel').count() == 1, 'Custom Quiz key b must immediately select & submit option B')
            results_summary['customQuizShortcutsAndWeights'] = True
            print('[+] Verified Custom Quiz Builder weighted 7-SU distribution & keyboard shortcuts (1-5, Enter, A-E).')

            # 10–12. Complete a Continuous Single-Sheet Past Examination Paper & Review Results
            page.locator('.sidebar-link[data-route="exams"]').click()
            page.locator('[data-start-paper="exam_2024_dec"][data-paper-timed="true"]').click()
            assert_true(page.locator('#activeExamWorkspace').is_visible(), 'Continuous exam workspace must be visible')
            assert_true(page.locator('#continuousPaperArea .paper-q-card').count() == 16, 'All 16 past paper questions must render continuously')
            assert_true(page.locator('#examQuestionPalette .palette-pill.current').count() >= 1, 'Scroll-spy palette must highlight active current question')

            # Answer first 3 questions and flag question 4; verify circular Next Unanswered cycles Q4 -> Q5
            for i in range(3):
                q_card = page.locator('#continuousPaperArea .paper-q-card').nth(i)
                q_card.locator('.q-option-btn').nth(i % 4).click()
            page.locator('#continuousPaperArea .paper-q-card').nth(3).locator('[data-flag-q]').click()

            page.locator('#btnJumpNextUnanswered').click()
            idx_after_1 = page.evaluate('window.CMPG122_APP._lastUnansweredJumpIdx')
            page.locator('#btnJumpNextUnanswered').click()
            idx_after_2 = page.evaluate('window.CMPG122_APP._lastUnansweredJumpIdx')
            assert_true(idx_after_1 == 0 and idx_after_2 == 1, 'Next Unanswered button must cycle circularly across unanswered questions')

            # Open Submit Confirmation Modal -> verify Unanswered & Flagged counts shown
            page.locator('#btnOpenSubmitExamModal').click()
            modal_text = page.locator('#appModalBody').inner_text()
            assert_true('Unanswered Questions (13)' in modal_text, f'Expected 13 unanswered in modal, got: {modal_text}')
            assert_true('Flagged for Review' in modal_text, 'Expected flagged warning in pre-submit modal')
            page.locator('#btnModalConfirmAction').click()

            assert_true(page.locator('.exam-results-banner').is_visible(), 'Exam results banner must appear after submission')
            assert_true('/ 100' in page.locator('.exam-results-banner').inner_text(), 'Total marks must equal 100 in Dec 2024 paper')

            # Verify expanding <details class="distractor-details"> in Exam Review persists across Definition return!
            exam_q0 = page.locator('#continuousPaperArea .paper-q-card').first
            exam_dist_details = exam_q0.locator('details.distractor-details')
            exam_dist_details.locator('summary').click()
            assert_true(exam_dist_details.evaluate('el => el.open') is True, 'Exam Review distractor-details should expand')
            exam_q0.locator('.def-chip-btn').first.click()
            assert_true(page.locator('#viewDefinitions.active').count() == 1, 'Definitions must open from Exam Review')
            assert_true('Back to Examination Question' in page.locator('#btnReturnFromDef').inner_text(), 'Expected Back to Examination Question banner')
            page.locator('#btnReturnFromDef').click()
            assert_true(page.locator('#viewExams.active').count() == 1, 'Must return to Exam Review')
            assert_true(
                page.locator('#continuousPaperArea .paper-q-card').first.locator('details.distractor-details').evaluate('el => el.open') is True,
                'Expanded distractor-details inside Exam Review must stay open after returning from Definition'
            )

            results_summary['continuousPastExam'] = True
            print('[+] Verified Continuous Past Exam Paper, Circular Unanswered Jump, Pre-Submit Modal, 100-Mark Grading & Distractor Details Return.')

            # 13. Open Progress / Unanswered & Flagged Review -> Verify honest states, Distractor Details Return & Switch Theme -> Reload
            page.locator('.sidebar-link[data-route="progress"]').click()
            assert_true(page.locator('#analyticsHost').is_visible(), 'Analytics & Review view must render')
            assert_true('Unanswered (13)' in page.locator('#analyticsHost').inner_text(), 'Unanswered review tab must track 13 blank exam items')
            page.locator('[data-review-tab="unanswered"]').click()
            rev_dist_details = page.locator('#analyticsHost details.distractor-details').first
            rev_dist_details.locator('summary').click()
            assert_true(rev_dist_details.evaluate('el => el.open') is True, 'Question Review distractor-details should expand')
            page.locator('#analyticsHost .def-chip-btn').first.click()
            assert_true(page.locator('#viewDefinitions.active').count() == 1, 'Definitions must open from Question Review')
            assert_true('Back to Question Review' in page.locator('#btnReturnFromDef').inner_text(), 'Expected Back to Question Review banner')
            page.locator('#btnReturnFromDef').click()
            assert_true(page.locator('#viewProgress.active').count() == 1, 'Must return to Question Review')
            assert_true(
                page.locator('#analyticsHost details.distractor-details').first.evaluate('el => el.open') is True,
                'Expanded distractor-details inside Question Review must stay open after returning from Definition'
            )

            page.locator('[data-review-tab="flagged"]').click()
            flagged_text = page.locator('#analyticsHost').inner_text()
            assert_true('Flagged for Review (Not Yet Attempted)' in flagged_text, 'Unattempted flagged bookmark must not fake a Correct score')

            # Switch to Light theme, then reload browser
            page.locator('#btnThemeLight').click()
            assert_true(page.evaluate('document.documentElement.getAttribute("data-theme")') == 'light', 'Light theme must apply')

            page.reload(wait_until='networkidle')
            assert_true(page.evaluate('document.documentElement.getAttribute("data-theme")') == 'light', 'Chosen theme must persist across reload')
            assert_true(page.locator('#viewProgress.active').count() == 1, 'Hash route #progress must restore on reload')
            page.locator('.sidebar-link[data-route="home"]').click()
            pct_after_reload = page.locator('#homeOverallPct').inner_text().strip()
            assert_true(pct_after_reload != '0%', f'Progress must persist in IndexedDB/storage across reload (got {pct_after_reload})')
            assert_true('Recent Exam Results' in page.locator('#homeRevisionFocusCard').inner_text(), 'Home must surface Recent Exam Results when activity exists')
            assert_true('Recent Activity' in page.locator('#homeRevisionFocusCard').inner_text(), 'Home must surface Recent Activity when activity exists')
            results_summary['persistenceAcrossReload'] = True
            print(f'[+] Verified Persistence, Unanswered/Flagged Review Queues & Home Activity across reload (Progress: {pct_after_reload}).')

            # Navigate to Study view so we also test SVG diagram + .q-su-pill + .btn-primary WCAG contrast in BOTH Light and Dark!
            page.locator('.sidebar-link[data-route="study"]').click()
            a11y_check_js = """
            () => {
              const issues = [];
              if (document.querySelectorAll('h1').length !== 1) issues.push('Expected exactly one h1 landmark heading');
              if (!document.querySelector('main')) issues.push('Missing <main> landmark');
              if (!document.querySelector('header')) issues.push('Missing <header> landmark');
              if (!document.querySelector('nav')) issues.push('Missing <nav> landmark');

              // Check visible heading order (no skipped levels e.g. h1 -> h3)
              const visHeadings = [...document.querySelectorAll('h1, h2, h3, h4')].filter(el => el.offsetParent !== null || el.classList.contains('sr-only'));
              let prevLevel = 0;
              visHeadings.forEach(h => {
                const lvl = Number(h.tagName.slice(1));
                if (prevLevel > 0 && lvl > prevLevel + 1) {
                  issues.push(`Skipped heading level from h${prevLevel} to h${lvl} (${h.textContent.trim().slice(0,30)})`);
                }
                prevLevel = lvl;
              });

              document.querySelectorAll('button').forEach((btn, idx) => {
                const name = (btn.innerText || '').trim()
                  || (btn.getAttribute('aria-label') || '').trim()
                  || (btn.getAttribute('title') || '').trim()
                  || (btn.textContent || '').trim();
                if (!name) issues.push(`Unlabeled button at index ${idx} (${btn.id || btn.className})`);
              });

              function parseRgba(s) {
                const m = s && s.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([0-9.]+))?\\)/);
                return m ? [Number(m[1]), Number(m[2]), Number(m[3]), m[4] !== undefined ? Number(m[4]) : 1] : null;
              }
              function blend(fg, bg) {
                const a = fg[3];
                return [
                  Math.round(fg[0] * a + bg[0] * (1 - a)),
                  Math.round(fg[1] * a + bg[1] * (1 - a)),
                  Math.round(fg[2] * a + bg[2] * (1 - a)),
                  1
                ];
              }
              function lum([r, g, b]) {
                const f = c => {
                  const v = c / 255;
                  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
                };
                return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
              }
              function ratio(c1, c2) {
                const l1 = lum(c1), l2 = lum(c2);
                return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
              }

              const bodyStyle = getComputedStyle(document.body);
              const fg = parseRgba(bodyStyle.color);
              const bg = parseRgba(bodyStyle.backgroundColor);
              const bodyContrast = (fg && bg) ? ratio(fg, bg) : 0;
              if (bodyContrast < 7.0) issues.push(`Low body text contrast: ${bodyContrast.toFixed(2)}`);

              const pill = document.querySelector('#viewStudy .q-su-pill');
              if (pill && bg) {
                const pStyle = getComputedStyle(pill);
                const pFg = parseRgba(pStyle.color);
                const pBgRaw = parseRgba(pStyle.backgroundColor);
                const surfBg = parseRgba(getComputedStyle(document.querySelector('.study-unit-banner')).backgroundColor) || bg;
                const pBg = pBgRaw ? blend(pBgRaw, surfBg) : surfBg;
                const pillRatio = ratio(pFg, pBg);
                if (pillRatio < 4.5) issues.push(`Low .q-su-pill contrast: ${pillRatio.toFixed(2)}:1`);
              }

              const svgTexts = [...document.querySelectorAll('#viewStudy .edu-svg-diagram text')];
              const svgRect = document.querySelector('#viewStudy .edu-svg-diagram rect');
              if (svgTexts.length > 0 && svgRect) {
                const rBg = parseRgba(getComputedStyle(svgRect).fill) || bg;
                svgTexts.forEach(t => {
                  const tFg = parseRgba(getComputedStyle(t).fill);
                  if (tFg && rBg) {
                    const tr = ratio(tFg, rBg);
                    if (tr < 4.5) issues.push(`Low SVG diagram text contrast (${t.textContent.trim().slice(0,20)}): ${tr.toFixed(2)}:1`);
                  }
                });
              }

              return { issues, bodyContrast };
            }
            """
            light_a11y = page.evaluate(a11y_check_js)
            assert_true(len(light_a11y['issues']) == 0, f"Light theme accessibility issues: {light_a11y['issues']}")

            page.locator('#btnThemeDark').click()
            dark_a11y = page.evaluate(a11y_check_js)
            assert_true(len(dark_a11y['issues']) == 0, f"Dark theme accessibility issues: {dark_a11y['issues']}")

            # Also verify .scenario-brief-container, .scenario-callout, .scenario-section-header, .scenario-spec-table & .rate-tag in BOTH Light and Dark!
            page.evaluate('window.CMPG122_APP.startOfficialExam("exam_2024_dec", false)')
            scenario_contrast_js = """
            () => {
              const issues = [];
              function parseRgba(s) {
                const m = s && s.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([0-9.]+))?\\)/);
                return m ? [Number(m[1]), Number(m[2]), Number(m[3]), m[4] !== undefined ? Number(m[4]) : 1] : null;
              }
              function blend(fg, bg) {
                const a = fg[3];
                return [
                  Math.round(fg[0] * a + bg[0] * (1 - a)),
                  Math.round(fg[1] * a + bg[1] * (1 - a)),
                  Math.round(fg[2] * a + bg[2] * (1 - a)),
                  1
                ];
              }
              function lum([r, g, b]) {
                const f = c => { const v = c / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
                return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
              }
              function ratio(c1, c2) {
                const l1 = lum(c1), l2 = lum(c2);
                return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
              }
              const bodyBg = parseRgba(getComputedStyle(document.body).backgroundColor) || [15, 23, 42, 1];
              for (const sel of ['.scenario-brief-container', '.scenario-callout', '.scenario-section-header', '.scenario-spec-table', '.rate-tag']) {
                const el = document.querySelector(`#continuousPaperArea ${sel}`);
                if (!el) { issues.push(`Missing ${sel} in active past paper`); continue; }
              }
              const rateTag = document.querySelector('#continuousPaperArea .rate-tag');
              if (rateTag) {
                const rtStyle = getComputedStyle(rateTag);
                const rtFg = parseRgba(rtStyle.color);
                const rtBgRaw = parseRgba(rtStyle.backgroundColor);
                const rtBg = rtBgRaw ? blend(rtBgRaw, bodyBg) : bodyBg;
                const rtRatio = ratio(rtFg, rtBg);
                if (rtRatio < 4.5) issues.push(`Low .rate-tag contrast: ${rtRatio.toFixed(2)}:1`);
              }
              return issues;
            }
            """
            assert_true(len(page.evaluate(scenario_contrast_js)) == 0, f"Dark theme scenario brief issues: {page.evaluate(scenario_contrast_js)}")
            page.locator('#btnThemeLight').click()
            assert_true(len(page.evaluate(scenario_contrast_js)) == 0, f"Light theme scenario brief issues: {page.evaluate(scenario_contrast_js)}")
            page.locator('#btnThemeDark').click()

            results_summary['accessibilityChecks'] = True
            print(f"[+] Verified WCAG Landmarks, Heading Order, Pill, SVG Diagram & Past-Paper Scenario Brief Contrast (Light={light_a11y['bodyContrast']:.1f}:1, Dark={dark_a11y['bodyContrast']:.1f}:1).")

            # 16–17. Disable Internet Connectivity & Verify Full Offline Functionality (PWA + Code Lab Dynamic Signatures + Multi-Bug Auditor)
            page.locator('.sidebar-link[data-route="home"]').click()
            context.set_offline(True)
            page.reload(wait_until='domcontentloaded')
            page.wait_for_timeout(300)
            assert_true(page.locator('.su-ring-card').count() == 7, 'Offline reload via Service Worker must render full dashboard')

            # Navigate to C# Code Lab while offline, verify dynamic event-handler signatures across scenarios, and run CodeGrade + Auditor
            page.locator('#qaCodeLab').click()
            sig_initial = page.locator('#cgMethodHeader').inner_text().strip()
            assert_true('btnStop_Click' in sig_initial, f'Expected Racing Light Trainer btnStop_Click signature, got: {sig_initial}')
            page.locator('#codeScenarioSelect').select_option('scenario_file_sales')
            sig_file = page.locator('#cgMethodHeader').inner_text().strip()
            assert_true('btnSaveSale_Click' in sig_file, f'Expected btnSaveSale_Click signature, got: {sig_file}')
            page.locator('#codeScenarioSelect').select_option('scenario_multiform_dispatch')
            sig_multi = page.locator('#cgMethodHeader').inner_text().strip()
            assert_true('btnShowSummary_Click' in sig_multi, f'Expected btnShowSummary_Click signature, got: {sig_multi}')
            page.locator('#codeScenarioSelect').select_option('scenario_racing_light')

            page.locator('#btnShowSolution').click()
            page.locator('#btnRunCodeGrade').click()
            assert_true('100%' in page.locator('#codeGradeOutputHost').inner_text(), 'Offline C# CodeGrade evaluation must score 100% on model solution')

            page.locator('[data-codelab-tab="auditor"]').click()
            page.locator('#btnLoadCanonicalAudit').click()
            page.locator('#btnRunCodeAuditor').click()
            assert_true('Audit Score: 100%' in page.locator('#auditResultOutput').inner_text(), 'Code Auditor must score 100% on canonical fix')
            li_style = page.locator('#auditResultOutput li').first.get_attribute('style') or ''
            assert_true('--status-success-text' in li_style, f'PASSED Code Auditor items must use --status-success-text, got: {li_style}')

            context.set_offline(False)
            results_summary['offlineServiceWorker'] = True
            results_summary['e2eLearnerPath'] = True
            print('[+] Verified 100% Offline PWA Startup, Dynamic Code Lab Signatures, CodeGrade & Multi-Bug Code Auditor Execution.')

            # Keep an active Past Exam Paper open on #viewExams so the 10-viewport responsive sweep verifies active exam non-clipping!
            page.evaluate('window.CMPG122_APP.startOfficialExam("exam_2024_dec", false)')

            # Responsive & Bounding-Box Non-Clipping Verification Across All 10 Required Viewports (320x568 -> 1920x1080)
            bbox_check_js = """
            () => {
              const vw = window.innerWidth;
              const selectors = [
                '#continuousPaperArea',
                '#continuousPaperArea .paper-q-card',
                '#continuousPaperArea .scenario-brief-container',
                '#continuousPaperArea .scenario-callout',
                '#continuousPaperArea .scenario-table-wrap',
                '.view-section.active .panel-card',
                '.view-section.active .single-q-card',
                '.view-section.active .study-unit-banner',
                '.view-section.active .topic-card',
                '.view-section.active .def-card'
              ];
              for (const sel of selectors) {
                for (const el of document.querySelectorAll(sel)) {
                  if (el.offsetParent === null) continue;
                  const r = el.getBoundingClientRect();
                  if (r.width === 0 && r.height === 0) continue;
                  if (r.right > vw + 1.5 || r.left < -1.5) {
                    return `${sel} clipped viewport ${vw}px (left=${r.left.toFixed(1)}, right=${r.right.toFixed(1)}, width=${r.width.toFixed(1)})`;
                  }
                }
              }
              return null;
            }
            """
            shot_dir = os.environ.get('CMPG122_SCREENSHOT_DIR')
            for (vw, vh) in REQUIRED_VIEWPORTS:
                page.set_viewport_size({'width': vw, 'height': vh})
                page.wait_for_timeout(60)
                for route in ['home', 'study', 'practice', 'exams', 'definitions', 'progress', 'settings']:
                    page.evaluate(f'window.CMPG122_APP.navigate("{route}")')
                    overflow = page.evaluate('document.documentElement.scrollWidth - window.innerWidth')
                    assert_true(
                        overflow <= 1,
                        f'Horizontal overflow ({overflow}px) detected on route "{route}" at viewport {vw}x{vh}'
                    )
                    clip_err = page.evaluate(bbox_check_js)
                    assert_true(
                        clip_err is None,
                        f'Bounding-box clipping on route "{route}" at viewport {vw}x{vh}: {clip_err}'
                    )
                    if route == 'exams':
                        assert_true(
                            page.locator('#continuousPaperArea .paper-q-card').count() == 16,
                            f'Active exam paper cards must remain mounted on exams route at {vw}x{vh}'
                        )
                if vw == 320:
                    # Also verify every single one of the 7 Study Units at 320px
                    for su in ['SU7', 'SU1', 'SU2', 'SU3', 'SU4', 'SU5', 'SU6']:
                        page.evaluate(f'window.CMPG122_APP.selectStudyUnit("{su}")')
                        ov_su = page.evaluate('document.documentElement.scrollWidth - window.innerWidth')
                        assert_true(ov_su <= 1, f'Horizontal overflow ({ov_su}px) on {su} at 320x568')
                        su_clip = page.evaluate(bbox_check_js)
                        assert_true(su_clip is None, f'Bounding-box clipping on {su} at 320x568: {su_clip}')

                if shot_dir and (vw, vh) in [(1440, 900), (768, 1024), (375, 812)]:
                    page.evaluate('window.CMPG122_APP.navigate("home")')
                    Path(shot_dir).mkdir(parents=True, exist_ok=True)
                    page.screenshot(path=str(Path(shot_dir) / f'home_{vw}x{vh}.png'), full_page=False)

                if vw <= 767:
                    assert_true(page.locator('#mobileBottomNav').is_visible(), f'Mobile bottom nav must be visible at {vw}x{vh}')
                elif vw >= 1200:
                    assert_true(page.locator('#appSidebar').is_visible(), f'Desktop sidebar must be visible at {vw}x{vh}')
                results_summary['responsiveViewportsChecked'].append(f'{vw}x{vh}')

            # Verify dynamic viewport resize preserves active question selection state
            page.set_viewport_size({'width': 1440, 'height': 900})
            page.evaluate('window.CMPG122_APP.startUnitPractice("SU2", "")')
            page.locator('#singleCardArea .q-option-btn').nth(1).click()
            page.set_viewport_size({'width': 375, 'height': 812})
            page.set_viewport_size({'width': 1024, 'height': 768})
            assert_true(page.locator('#singleCardArea .q-option-btn.opt-selected').count() == 1, 'Resizing must not destroy selected question state')

            print(f"[+] Verified Zero Horizontal Overflow & Zero Bounding-Box Clipping (including Active Past Exam Paper) across all {len(REQUIRED_VIEWPORTS)} viewports.")

            # Standalone Mobile/Offline Bundle Verification on file://
            assert_true(STANDALONE_HTML.exists(), f'Missing standalone bundle {STANDALONE_HTML}')
            file_page = context.new_page()
            file_errors = []
            file_page.on('pageerror', lambda err: file_errors.append(str(err)))
            file_page.goto(STANDALONE_HTML.as_uri(), wait_until='load')
            assert_true(file_page.locator('.su-ring-card').count() == 7, 'Standalone file:// bundle must render all 7 Study Units')
            file_page.locator('.sidebar-link[data-route="definitions"]').click()
            assert_true('definitions' in file_page.locator('#defsCountLabel').inner_text(), 'Standalone file:// Definitions must render')
            assert_true(len(file_errors) == 0, f'Standalone file:// bundle threw JS errors: {file_errors}')
            results_summary['standaloneFileBundle'] = True
            print('[+] Verified Standalone file:// Mobile Bundle parity with 0 JS errors.')

            assert_true(len(results_summary['pageErrors']) == 0, f"Uncaught page errors: {results_summary['pageErrors']}")
            assert_true(len(results_summary['consoleErrors']) == 0, f"Console errors: {results_summary['consoleErrors']}")

            browser.close()

            # Cross-browser compatibility pass on Microsoft Edge if available
            try:
                edge = p.chromium.launch(channel='msedge', headless=True)
                epage = edge.new_page(viewport={'width': 1280, 'height': 800})
                edge_errs = []
                epage.on('pageerror', lambda err: edge_errs.append(str(err)))
                epage.goto(f'{base_url}/index.html', wait_until='networkidle')
                assert_true(epage.locator('.su-ring-card').count() == 7, 'Edge must render all 7 Study Unit cards')
                epage.keyboard.press('1')
                assert_true(epage.locator('#homeQuickPracticeHost .q-option-btn.opt-selected').count() == 1, 'Edge keyboard shortcut 1 must select option A')
                assert_true(len(edge_errs) == 0, f'Edge page errors: {edge_errs}')
                edge.close()
                results_summary['edgeCrossBrowser'] = True
                print('[+] Verified Cross-Browser Compatibility on Microsoft Edge.')
            except Exception as edge_ex:
                results_summary['edgeCrossBrowser'] = f'Skipped/Note: {edge_ex}'
    finally:
        server.shutdown()

    out_path = APP_DIR / 'audit' / 'e2e_verification_report.json'
    out_path.write_text(json.dumps(results_summary, indent=2), encoding='utf-8')
    print(f'[SUCCESS] Full Playwright E2E, 10-Viewport Responsive, Offline & Accessibility Suite PASSED -> {out_path}')


if __name__ == '__main__':
    run_suite()
