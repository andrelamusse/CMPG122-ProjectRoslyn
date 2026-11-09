---
description: Critical architectural and curriculum invariants for NWU CMPG122 (Visual C# UI Programming, Weeks 1-7)
globs: ["**/*.js", "**/*.html", "**/*.md", "**/*.py"]
---

# NWU CMPG122 Curriculum & Examination Architecture Invariants (Master Blueprint)

## 1. Zero Meta-Subtext & Self-Contained Question Stems
- Strip all meta-subtext, academic fluff, and `"according to the specification"` / `"Based on the specification table"` / `"[NWU Dec 202X Exam...]"` / `"In Practical X"` filler across question stems, options, and explanations.
- Every standalone question must test concrete C# syntax, GUI control properties, or calculation logic directly without relying on external unobserved specification documents and without pasting the literal answer into the stem (no giveaway stems).
- Maintain a single unified Exam & Study App modeled on official past exams (`2021–2024`); never add a separate isolated "Test 3" tab.

## 2. Direct Study Summaries & C# Cheat Sheets
- Maintain an integrated **Study Summaries & C# Cheat Sheets** section (`cheatSheetHtml` across `SU7`, `SU1`, `SU2`, `SU3`, `SU4`) with instant unit filtering (`All Units`, `SU7`, `SU1`, `SU2`, `SU3`, `SU4`) and mobile-responsive table wrappers (`<div class="scenario-table-wrap">`).
- Provide zero-fluff reference tables for Shneiderman's 8 Golden Rules, Norman's Action Cycle, Hungarian notation prefixes (`btn`, `lbl`, `txt`, `pic`, `rad`, `chk`, `lst`, `grp`), data types (`decimal` with `m` suffix for currency), defensive `TryParse` with `out`, `.ToString("C")` / `.ToString("F2")` / `.ToString("P0")`, selection structures (`if-else`, `switch`), and repetition/ListBox loops (`while`, `do-while`, `for`, 0-based `SelectedIndex`).

## 3. Continuous Single-Sheet Examination Layout
- Official past exam papers (`2021–2024`) must NEVER render as single-question paginated carousels or "Q 1 of N" steppers with "Next" buttons.
- All questions must render vertically on a continuous, scrollable single-sheet examination document.
- Must include a docked sticky quick-jump matrix with real-time viewport scroll-spy (`IntersectionObserver`), circular unanswered jump navigation, non-bypassable countdown timer forced auto-submission, a toggleable `#scenarioDrawer` slide-out reference panel displaying complete rate tables and control matrices, and a single final submission button at the foot.
- Every 16-question official exam paper maintains a balanced answer key distribution (4 A's, 4 B's, 4 C's, 4 D's).

## 4. Strict Curriculum Boundary Enforcement (Weeks 1–7 Only)
- Bounded strictly to Tony Gaddis (*Starting Out With Visual C#*, Chapters 1–5), Study Units 1–4, and Unit 7 (HCI).
- Strictly Excluded: Custom OOP classes (`class Student`), inheritance, polymorphism, abstract classes/interfaces, databases/SQL (`SqlConnection`), LINQ, file I/O streams (`StreamReader`), generics (`List<T>`), multi-dimensional arrays, async/await.
- CodeGrade practical scenarios pre-populate surrounding form plumbing (`class MainForm`, `InitializeComponent()`, method wrappers) as read-only scaffolding so students only author the assessed in-scope event handler logic.

## 5. Student UI Blinding & Offline Standalone Parity
- `CMPG122_App/index.html` must remain strictly blinded to students: `0` links or references to `admin.html`, GitHub repositories, build logs, or solution keys.
- `CMPG122_Test1_StudyGuide.html` (in both workspace root and `CMPG122_App/`) must remain 100% synchronized via `python module_app_cli.py build-mobile` and CORS-free on `file://` and GitHub Pages.
