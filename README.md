# CMPG122 — Visual C# UI Programming Learning & Examination Platform

Comprehensive offline-capable learning, C# code-tracing, technical definitions, and examination platform covering the 12-week NWU CMPG122 curriculum (`SU7` and `SU1`–`SU6`).

- **Live Platform:** [https://andrelamusse.github.io/CMPG122-ProjectRoslyn/](https://andrelamusse.github.io/CMPG122-ProjectRoslyn/)
- **GitHub Repository:** [https://github.com/andrelamusse/CMPG122-ProjectRoslyn](https://github.com/andrelamusse/CMPG122-ProjectRoslyn)

## Modular Architecture

- `index.html` — Clean, accessible learner application shell (zero administrative or external network dependencies)
- `css/style.css` — Centralised CSS custom-property design system (`Dark` & `Light` themes, `320px`–`1920px+` responsive breakpoints)
- `manifest.json` & `sw.js` — Offline-first PWA Web App Manifest and versioned Service Worker
- `js/data/`
  - `curriculum.js` — 7 Study Units, verified exam weighting model, and 35 10-part structured topics
  - `definitions_data.js` — 82 searchable technical definitions
  - `questions_bank.js` — 585 calibrated questions and 5 continuous single-sheet past examination papers
  - `code_labs_data.js` — 15 CodeGrade event-handler scenarios (`SU1`–`SU6`), 24 Spot-the-Error challenges, and 6 Code-Audit scenarios
- `js/modules/`
  - `icons_and_diagrams.js` — Coherent 24×24 SVG icon set, circular progress rings, trend chart, and 7 Study Unit vector diagrams
  - `persistence.js` — IndexedDB structured storage, `localStorage` preferences, schema v2 migration, and validated JSON backup/restore
  - `analytics.js` — Real-time progress, weak-topic diagnostics, pacing/tracing trends, and related-question recommendations
  - `definitions_engine.js` — Searchable definitions, subtle inline linker, and exact context-preserving return navigation stack
  - `exam_engine.js` — Question state machine, timestamp-based countdown timer, and mark-weighted / custom exam generators
  - `keyboard_shortcuts.js` — `A–E`, `1–5`, and `Enter` shortcut state controller
  - `question_renderer.js` — Accessible question cards and offline C# syntax highlighting
- `js/csharp_engine.js` — Offline C# tokenizer, syntax highlighter, static analyzer, sandboxed virtual runner, and `CSharpCodeAuditor`
- `audit/` — Non-learner-facing `provenance_registry.json`, `audit_report.json`, and `e2e_verification_report.json`
- `tests/` — Automated Node.js unit/integration suite (`unit_and_integration.test.js`) and Playwright browser E2E/responsive suite (`e2e_playwright_audit.py`)

## Build, Audit & Verification Commands

```bash
# Build standalone single-file offline bundle (CMPG122_Test1_StudyGuide.html)
python module_app_cli.py build-mobile

# Run structural, educational, exam, presentation, and security QA audit
python module_app_cli.py audit

# Run unit & module integration tests
node --test CMPG122_App/tests/unit_and_integration.test.js

# Run full Playwright E2E, 10-viewport responsive, offline & WCAG verification
python CMPG122_App/tests/e2e_playwright_audit.py
```
