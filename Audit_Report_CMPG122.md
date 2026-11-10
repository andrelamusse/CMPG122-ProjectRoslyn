# CMPG122 — Engineering & Quality Assurance Audit Report (v9.2.1)

## 1. Curriculum & Exam Calibration Summary
- **Study Units Covered:** 7 (`SU7` HCI Principles, `SU1` GUI & IDE, `SU2` Data, Types & Math, `SU3` Decisions & Input Validation, `SU4` Loops, Files, Dialogs & Random Numbers, `SU5` Modularising with Methods, `SU6` Multiform Projects) across Weeks 1–12.
- **Structured Educational Topics:** 35 10-part topics with theme-aware vector SVG architecture diagrams, pure ASCII C# syntax/examples, and mobile-safe C# quick-reference tables.
- **Technical Definitions Library:** 82 searchable entries with context-preserving inline links (`**bold**` across nested `` `code` ``, alphabetic `*italic*` preserving all C# `*` multiplication, `a**2` operators & `*.txt` wildcards, filter-clearing `Related:` concept jumps) and exact scroll/selection/panel/view-mode state restoration across Study, Home, Practice, Exam Review, and Progress Review.
- **Calibrated Question Bank:** 585 unique, schema-validated, near-duplicate-audited questions (`Foundational`: 167, `Intermediate`: 254, `Advanced`: 164) with calibrated `estimatedDifficulty` (`0.22`–`0.92`), `585/585` unique option-verified `distractorRationale` explanations, `0` textbook/chapter leaks, balanced `A/B/C/D` answer keys (`148 / 147 / 147 / 143`), and isolated internal provenance in `audit/provenance_registry.json`.
- **Verified Examination Weighting (100 Marks, 180 Minutes):**
  - `SU7`: 10% (10 marks)
  - `SU1`: 10% (10 marks)
  - `SU2`: 15% (15 marks)
  - `SU3`: 20% (20 marks)
  - `SU4`: 20% (20 marks)
  - `SU5`: 15% (15 marks)
  - `SU6`: 10% (10 marks)
- **C# Code & Tracing Labs:** 15 CodeGrade event-handler scenarios (SU1–SU6, each displaying its exact `methodSignature`/`methodHeader` and verified against `.NET 10.0` Roslyn C# compilation, `int/int` truncation, `OpenFileDialog`/`SaveFileDialog` mocks, and braced/braceless infinite-loop guards), 24 balanced Spot-the-Error challenges (`6/6/6/6`), and 6 Multi-Bug Code Auditor scenarios, plus `.NET 10.0` compiler-verified code-tracing items.

## 2. Final Acceptance Gates Matrix

| Gate | Status | Verification Evidence |
|---|---|---|
| Curriculum | PASS | All 7 Study Units (`SU7`, `SU1`–`SU6`) verified in `audit_report.json` |
| Learning content | PASS | 35 10-part topics verified for all required fields & pure ASCII C# code blocks |
| Question bank | PASS | 585 questions structurally, educationally, `estimatedDifficulty`, `distractorRationale` & answer-balance audited (`0` failures) |
| Exam weighting | PASS | `generateWeightedExam` & `generateCustomExam` (`targetMarks=0` & `targetMarks>0`, including filtered 4-mark Advanced pools) verified across all 7 units |
| Examinations | PASS | Full-length 100-mark simulations + scroll-spy palette + circular unanswered jump + pre-submit & exit-protection modals |
| Past papers | PASS | 5 continuous single-sheet past papers (`100` / `90` exact mark sums, theme-styled `.scenario-*` & `.rate-tag`, `0px` clipping at `320px` including `120%` text scale) |
| Custom quizzes | PASS | Weighted count/mark distribution, multi-unit round-robin balance, reload persistence, Finish Quiz summary (timed & untimed) & full `A–E`/`1–5`/`Enter` shortcuts |
| Code examples | PASS | Verified against `.NET 10.0` Roslyn C# compiler (`dotnet build`) + `CSharpEngine` sandbox (`15/15` CodeGrade & `6/6` CodeAuditor `100%`) |
| Definitions | PASS | 82 definitions searchable with subtle inline links, accurate source labels (`Home Dashboard` vs `Practice Question`), cross-filter `Related:` jumps & stale-banner prevention |
| Navigation | PASS | Exact route, SU, question, selection (Card & Sheet View), expanded `<details>` (`topic-details` & `distractor-details` across all views), drawer cleanup, and `scrollY` restored |
| Keyboard | PASS | `A–E` select+submit, `1–5` select-only, `Enter` submit/advance across Practice & Custom Quizzes, modal `Tab` trap, no phantom drawer shortcut lockouts |
| Mobile | PASS | Bounding-box non-clipping (`rect.right <= innerWidth + 1`) verified across all 5 Past Papers, drawers, modals & all 7 routes at `320×568`–`430×932` (`100%` & `120%` text scale) |
| Tablet | PASS | Verified at `768×1024` and `1024×768` (`minmax(0, 1fr)`) with `Escape`- and outside-click-dismissible slide-out drawers |
| Laptop | PASS | Verified at `1280×800`, `1366×768`, `1440×900` |
| Desktop | PASS | Verified at `1920×1080` with max-width workspace container |
| Graphics | PASS | 100% vector SVG icons, rings, trend charts & 7 theme-token-aware SU diagrams (`0` emojis across all files) |
| Symbols | PASS | Exact C# operators (`*`, `*.txt`, `**`, `a**2 + b**2`, `=`, `==`, `!=`, `&&`, `||`, `!`, `++`, `--`, `%`) preserved without Markdown corruption |
| Accessibility | PASS | Landmarks, heading hierarchy, roving tablist ARIA, modal focus trap, `120%` scale non-overflow, `.q-su-pill`, `.rate-tag` & SVG diagram contrast `>= 4.5:1` in Light & Dark |
| Persistence | PASS | IndexedDB + localStorage preferences, v2 migration, active exam & Custom Quiz refresh recovery, `Incorrect`/`Unanswered`/`Flagged`/`Understood` queues |
| Offline | PASS | Service Worker (`sw.js` `v9.2.1` with `ignoreSearch` + `clients.claim`) + standalone `file://` bundle verified |
| Performance | PASS | Zero external runtime dependencies; `<200ms` headless unit suite |
| Security | PASS | `0` admin/repo links across all learner HTML/JS; prototype-pollution/XSS-safe import & sandbox |
| Tests | PASS | Node unit/integration suite + Playwright Chrome & Edge E2E + 10-viewport bounding-box clipping suites pass |
| Build | PASS | `python module_app_cli.py build-mobile` verified on `file://` in both workspace root and `CMPG122_App/` |
| Audit | PASS | `python module_app_cli.py audit` passes with `0` failures |
| Git | PASS | Clean commit & fast-forward release verification on `origin/main` |
