---
description: Critical architectural and curriculum invariants for NWU CMPG122 (Visual C# UI Programming, Weeks 1-12, SU1-SU7)
globs: ["**/*.js", "**/*.html", "**/*.md", "**/*.py"]
---

# NWU CMPG122 Curriculum & Examination Architecture Invariants (Master Blueprint)

## 1. Zero Meta-Subtext & Self-Contained Question Stems
- Strip all meta-subtext, academic fluff, and `"according to the specification"` / `"Based on the specification table"` / `"[NWU Dec 202X Exam...]"` / `"In Practical X"` filler across question stems, options, and explanations.
- Every standalone question must test concrete C# syntax, GUI control properties, or calculation logic directly without relying on external unobserved specification documents and without pasting the literal answer into the stem (no giveaway stems).
- Maintain a single unified Exam & Study App modeled on official past exams (`2021–2024`); never add a separate isolated "Test 3" tab.

## 2. Direct Study Summaries & C# Cheat Sheets (All 7 Study Units: SU7, SU1–SU6)
- Maintain an integrated **Study Summaries & C# Cheat Sheets** section (`cheatSheetHtml` across `SU7`, `SU1`, `SU2`, `SU3`, `SU4`, `SU5`, `SU6`) with instant unit filtering and mobile-responsive table wrappers (`<div class="scenario-table-wrap">`).
- Provide zero-fluff reference tables for:
  - **SU7 (Weeks 1–2):** Shneiderman's 8 Golden Rules, 5 Usability Measures, Norman's Action Cycle (Execution/Evaluation gulfs).
  - **SU1 (Weeks 1–2):** Visual Studio IDE, 6-Phase Development Cycle, Hungarian notation prefixes (`btn`, `lbl`, `txt`, `pic`, `rad`/`rdo`, `chk`/`cb`, `lst`, `grp`).
  - **SU2 (Weeks 3–4):** Data types (`decimal` with `m` suffix for currency, `int`, `double`), integer division & casting, `.ToString("C"/"F2"/"N2"/"P1")`, `Math` methods, `try-catch`, `const` & class-level fields.
  - **SU3 (Weeks 5–6):** Selection structures (`if-else`, `switch`), relational/logical operators, defensive `TryParse` with `out`, `RadioButton`, `CheckBox`, `ListBox.SelectedIndex`.
  - **SU4 (Weeks 7–9):** Loops (`while`, `do-while`, `for`), `++`/`--`, `Random` (`Next`, `NextDouble`), `Form1_Load`, Text File I/O (`using System.IO;`, `StreamWriter`, `File.CreateText`, `File.AppendText`, `StreamReader`, `File.OpenText`, `EndOfStream`), `OpenFileDialog` & `SaveFileDialog` (`Component tray`, `ShowDialog() == DialogResult.OK`, `.Filename`, `.InitialDirectory`).
  - **SU5 (Weeks 10–11):** Modularizing with Methods (`void` vs value-returning, parameters vs arguments, Pass-by-Value vs `ref` vs `out` parameters, debugger stepping).
  - **SU6 (Weeks 11–12):** Multiform Projects (`new Form2()`, modal `ShowDialog()` vs modeless `Show()`, `Modifiers = Public` for cross-form control access, `Close()` vs `Hide()`, `Program.cs` startup form).

## 3. Continuous Single-Sheet Examination Layout
- Official past exam papers (`2021–2024`) must NEVER render as single-question paginated carousels or "Q 1 of N" steppers with "Next" buttons.
- All questions must render vertically on a continuous, scrollable single-sheet examination document.
- Must include a docked sticky quick-jump matrix with real-time viewport scroll-spy (`IntersectionObserver`), circular unanswered jump navigation, non-bypassable countdown timer forced auto-submission, a toggleable `#scenarioDrawer` slide-out reference panel displaying complete rate tables and control matrices, and a single final submission button at the foot.
- Every 16-question official exam paper maintains a balanced answer key distribution (4 A's, 4 B's, 4 C's, 4 D's).

## 4. Strict Curriculum Boundary Enforcement (Weeks 1–12, SU1–SU7)
- Bounded strictly to the 12-week NWU CMPG122 curriculum: Tony Gaddis (*Starting Out With Visual C#*, Chapters 1–6 & Multiforms), Study Units 1–6, and Unit 7 (HCI).
- Strictly Excluded: Custom class inheritance hierarchies/polymorphism (`virtual`/`override`), abstract classes/interfaces, SQL connection strings (`SqlConnection`), LINQ lambdas, binary file streams (`BinaryReader`/`BinaryWriter`), async/await.

## 5. Student UI Blinding & Offline Standalone Parity
- `CMPG122_App/index.html` must remain strictly blinded to students: `0` links or references to `admin.html`, GitHub repositories, build logs, or solution keys.
- `CMPG122_Test1_StudyGuide.html` (in both workspace root and `CMPG122_App/`) must remain 100% synchronized via `python module_app_cli.py build-mobile` and CORS-free on `file://` and GitHub Pages.
