# CMPG122 — Engineering & Quality Assurance Audit Report (v9.0.0)

## 1. Curriculum & Exam Calibration Summary
- **Study Units Covered:** 7 (`SU7` HCI Principles, `SU1` GUI & IDE, `SU2` Data, Types & Math, `SU3` Decisions & Input Validation, `SU4` Loops, Files, Dialogs & Random Numbers, `SU5` Modularising with Methods, `SU6` Multiform Projects) across Weeks 1–12.
- **Structured Educational Topics:** 35 10-part topics with interactive vector SVG architecture diagrams and mobile-safe C# quick-reference tables.
- **Technical Definitions Library:** 82 searchable entries with context-preserving inline links and exact scroll/selection/panel state restoration.
- **Calibrated Question Bank:** 585 unique, schema-validated questions (`Foundational`: 167, `Intermediate`: 254, `Advanced`: 164) with isolated internal provenance in `audit/provenance_registry.json`.
- **Verified Examination Weighting (100 Marks, 180 Minutes):**
  - `SU7`: 10% (10 marks)
  - `SU1`: 10% (10 marks)
  - `SU2`: 15% (15 marks)
  - `SU3`: 20% (20 marks)
  - `SU4`: 20% (20 marks)
  - `SU5`: 15% (15 marks)
  - `SU6`: 10% (10 marks)
- **C# Code & Tracing Labs:** 15 CodeGrade event-handler scenarios (SU1–SU6), 24 Spot-the-Error challenges, and 6 Multi-Bug Code Auditor scenarios, plus `.NET 10.0` compiler-verified code-tracing items.

## 2. Final Acceptance Gates Matrix

| Gate | Status | Verification Evidence |
|---|---|---|
| Curriculum | PASS | All 7 Study Units (`SU7`, `SU1`–`SU6`) verified in `audit_report.json` |
| Learning content | PASS | 35 10-part topics verified for all required fields |
| Question bank | PASS | 585 questions structurally & educationally audited (`0` failures, `0` duplicates) |
| Exam weighting | PASS | `generateWeightedExam` verified across multiple seeds (`10/10/15/20/20/15/10 = 100`) |
| Examinations | PASS | Full-length 100-mark simulations + pre-submit modal + unit/topic breakdown |
| Past papers | PASS | 5 continuous single-sheet past papers (`100` / `90` exact mark sums) |
| Custom quizzes | PASS | Unit, topic, difficulty, count/marks, timer, weighting & exclusion filters |
| Code examples | PASS | Executed against `.NET 10.0` C# compiler harness + `CSharpEngine` sandbox |
| Definitions | PASS | 82 definitions searchable with subtle inline links |
| Navigation | PASS | Exact route, SU, question, selection, expanded `<details>`, and `scrollY` restored |
| Keyboard | PASS | `A–E` select+submit, `1–5` select-only, `Enter` submit/advance, input-safe |
| Mobile | PASS | `0px` horizontal overflow verified at `320×568`, `375×812`, `390×844`, `430×932` |
| Tablet | PASS | Verified at `768×1024` and `1024×768` with slide-out drawers |
| Laptop | PASS | Verified at `1280×800`, `1366×768`, `1440×900` |
| Desktop | PASS | Verified at `1920×1080` with max-width workspace container |
| Graphics | PASS | 100% vector SVG icons, rings, trend charts & 7 SU diagrams (`0` emojis) |
| Symbols | PASS | Exact C# operators (`=`, `==`, `!=`, `&&`, `||`, `!`, `++`, `--`, `%`) |
| Accessibility | PASS | Semantic landmarks, button labels, zoom enabled, contrast `16.3:1` Light / `17.7:1` Dark |
| Persistence | PASS | IndexedDB + localStorage preferences, v2 migration, backup export/import |
| Offline | PASS | Service Worker (`sw.js`) + `manifest.json` + standalone bundle verified offline |
| Performance | PASS | Zero external runtime dependencies; `<150ms` headless unit suite |
| Security | PASS | `0` admin/repo links in `index.html`; prototype-pollution/XSS-safe import & sandbox |
| Tests | PASS | 13/13 Node unit/integration tests + Playwright Chrome & Edge E2E suites pass |
| Build | PASS | `python module_app_cli.py build-mobile` verified on `file://` |
| Audit | PASS | `python module_app_cli.py audit` passes with `0` failures |
| Git | PASS | Clean commit & fast-forward release verification on `origin/main` |
