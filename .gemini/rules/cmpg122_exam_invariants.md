---
description: Critical architectural, curriculum, and QA invariants for NWU CMPG122 (Visual C# UI Programming, Weeks 1-12, SU1-SU7)
globs: ["**/*.js", "**/*.html", "**/*.css", "**/*.md", "**/*.py"]
---

# NWU CMPG122 Curriculum & Examination Architecture Invariants (Master Blueprint)

## 1. Zero Meta-Subtext & Self-Contained Question Stems
- Strip all meta-subtext, academic fluff, and `"according to the specification"` / `"Based on the specification table"` / `"[NWU Dec 202X Exam...]"` / `"In Practical X"` / textbook chapter number filler across question stems, options, topic prose, definitions, and explanations.
- Every standalone question must test concrete C# syntax, GUI control properties, or calculation logic directly without relying on external unobserved specification documents and without pasting the literal answer into the stem (no giveaway stems).
- Maintain a single unified Exam & Study App modeled on official past exams (`2021–2024`); never add a separate isolated "Test 3" tab.

## 2. Direct Study Summaries & C# Cheat Sheets (All 7 Study Units: SU7, SU1–SU6)
- Maintain an integrated **Study Summaries & C# Cheat Sheets** section (`cheatSheetHtml` across `SU7`, `SU1`, `SU2`, `SU3`, `SU4`, `SU5`, `SU6`) with instant unit filtering and mobile-responsive table wrappers (`<div class="scenario-table-wrap">`).
- Provide zero-fluff reference tables for:
  - **SU7 (Weeks 1–2):** Shneiderman's 8 Golden Rules, 5 Usability Measures, Norman's Action Cycle (Execution/Evaluation gulfs).
  - **SU1 (Weeks 1–2):** Visual Studio IDE, 6-Phase Development Cycle, Hungarian notation prefixes (`btn`, `lbl`, `txt`, `pic`, `rad`/`rdo`, `chk`/`cb`, `lst`, `grp`).
  - **SU2 (Weeks 3–4):** Data types (`decimal` with `m` suffix for currency, `int`, `double`), integer division & casting, `.ToString("C"/"F2"/"N2"/"P1")`, `Math` methods, `try-catch`, `const` & class-level fields.
  - **SU3 (Weeks 5–6):** Selection structures (`if-else`, `switch`), relational/logical operators, defensive `TryParse` with `out`, `RadioButton`, `CheckBox`, `ListBox.SelectedIndex`.
  - **SU4 (Weeks 7–9):** Loops (`while`, `do-while`, `for`), `++`/`--`, `Random` (`Next`, `NextDouble`), `Form1_Load`, Text File I/O (`using System.IO;`, `StreamWriter`, `File.CreateText`, `File.AppendText`, `StreamReader`, `File.OpenText`, `EndOfStream`), `OpenFileDialog` & `SaveFileDialog` (`Component tray`, `ShowDialog() == DialogResult.OK`, `.FileName`, `.InitialDirectory`).
  - **SU5 (Weeks 10–11):** Modularizing with Methods (`void` vs value-returning, parameters vs arguments, Pass-by-Value vs `ref` vs `out` parameters, debugger stepping).
  - **SU6 (Weeks 11–12):** Multiform Projects (`new Form2()`, modal `ShowDialog()` vs modeless `Show()`, `Modifiers = Public` for cross-form control access, `Close()` vs `Hide()`, `Program.cs` startup form).

## 3. Continuous Single-Sheet Examination Layout
- Official past exam papers (`2021–2024`) must NEVER render as single-question paginated carousels or "Q 1 of N" steppers with "Next" buttons.
- All questions must render vertically on a continuous, scrollable single-sheet examination document.
- Must include a docked sticky quick-jump matrix with real-time viewport scroll-spy (`IntersectionObserver`), circular unanswered jump navigation, non-bypassable countdown timer forced auto-submission, a toggleable `#scenarioDrawer` slide-out reference panel displaying complete rate tables and control matrices, and a single final submission button at the foot.
- Every 16-question official exam paper maintains a balanced answer key distribution (4 A's, 4 B's, 4 C's, 4 D's).

## 4. Strict Curriculum Boundary Enforcement (Weeks 1–12, SU1–SU7)
- Bounded strictly to the 12-week NWU CMPG122 curriculum: Study Units 1–6 (Visual C# UI Programming through Multiforms) and Study Unit 7 (HCI).
- Strictly Excluded: Custom class inheritance hierarchies/polymorphism (`virtual`/`override`), abstract classes/interfaces, SQL connection strings (`SqlConnection`), LINQ lambdas, binary file streams (`BinaryReader`/`BinaryWriter`), `async`/`await`.

## 5. Student UI Blinding & Offline Standalone Parity
- Learner-facing files (`index.html`, `js/data/*.js`, `js/modules/*.js`, `js/csharp_engine.js`, `js/app.js`, and `CMPG122_Test1_StudyGuide.html`) must remain strictly blinded: `0` references to `admin.html`, `github`, build logs, or internal provenance metadata, and `0` emoji characters (use crisp 24×24 vector SVGs).
- `CMPG122_Test1_StudyGuide.html` (in both `c:\NWU\SM2\CMPG122\` and `c:\NWU\SM2\CMPG122\CMPG122_App\`) must remain 100% byte-synchronized via `python module_app_cli.py build-mobile` and CORS-free on both `file://` and GitHub Pages.

## 6. Responsive Bounding-Box Viewport Audit & 120% Font Scaling
- Every interactive card, sticky exam bar, scenario drawer, table wrapper, and button group must satisfy `element.getBoundingClientRect().right <= window.innerWidth + 1` and `document.documentElement.scrollWidth <= window.innerWidth + 1` across all 10 standard viewports (`320×568` through `1920×1080`) at both `100%` and `120%` (`data-font-scale="large"`) font scales.
- All CSS Grid and Flex containers holding code blocks, long C# identifiers, or action toolbars must apply `minmax(0, 1fr)` and `min-width: 0` on children so long signatures never push controls past the viewport edge.

## 7. Safe Inline Definition Linker & C# Token Preservation
- `DefinitionsEngine.renderTextWithInlineLinks()` must preserve C# multiplication expressions (`3 * 2 * 2`, `a++ * 2`), invalid exponentiation distractor tokens (`**`, `a**2 + b**2`), and `OpenFileDialog`/`SaveFileDialog` wildcard filter patterns (`"Text Files (*.txt)|*.txt|All Files (*.*)|*.*"`) without converting `*` or `**` into `<em>`/`<strong>` tags.
- Inline backtick code spans inside bold/italic markdown (`**Step Into (\`F11\`)**`, `**\`Load\`**`) must render cleanly without leaking raw `**` tokens.

## 8. Question-Bank Calibration, Distractor Alignment & Roslyn C# Verification
- Maintain balanced A/B/C/D answer keys (`15%–35%` per option index `0..3`) within every individual Study Unit (`SU7`, `SU1`–`SU6`) and across Spot-the-Error challenges (`[6, 6, 6, 6]`).
- Every `distractorRationale` must cite only actual distractor letters, must never cite the correct option letter as a distractor, and must never claim a distractor evaluates to the exact correct output.
- Custom exam generation (`generateCustomExam`) must normalize Study Unit mark weights to the selected units, scale per-unit mark quotas when `targetMarks < 100`, and relax cleanly when filtered difficulty/type pools are smaller than nominal SU quotas.
- All question code snippets, 15 CodeGrade scenarios (`methodSignature === methodHeader`, 100% model solution score), 24 Spot-the-Error challenges, and 6 CodeAuditor scenarios must pass static C# syntax/type verification (including `decimal` `m` suffixes on `Math.Round(decimal, int)` calls) and `python module_app_cli.py audit` with `0` failures and `0` warnings.
- **Psychometric Option-Symmetry & Zero-Giveaway Invariant:** Every question in `DATA.questions` (585 items) and `DATA.spotErrors` (24 items) must satisfy strict option-length symmetry (`correctLen <= 25 || (correctLen <= maxDistractorLen * 1.28 && correctLen <= avgDistractorLen * 1.38)` and `minDistractorLen <= 25 || minDistractorLen <= correctLen * 1.45`), maintain an overall longest-option-is-correct rate between `18%` and `30%` (around the 25% uniform expectation), never embed asymmetric parenthetical explanations `(event handlers & logic)` only in the correct option, never pad distractors with canned boilerplate suffixes, and always use realistic C# / Visual Studio distractors (never `.html/.css/.js` or `.main/.header/.body`).

## 9. Private Admin Telemetry Dashboard (`admin.html`) & Silent Background Tracker (`js/telemetry.js`)
- `js/telemetry.js` runs silently in `index.html`, `CMPG_App.html`, and `CMPG122_Test1_StudyGuide.html` with 100% blinding (`0` references to `admin.html` or `github`, `0` visible UI elements).
- Enforces a strict 60-second (`60000` ms) idle cutoff across `mousemove`, `mousedown`, `click`, `keydown`, `scroll`, `touchstart`, and `input` (and pauses immediately when `document.visibilityState !== 'visible'`).
- Deduplicates unique devices by `SHA-256` hash of public IP (`api.ipify.org` / `ipapi.co` + persistent device seed fallback), sends a 15-second live presence heartbeat while active (`60s` active window on `admin.html`), and hooks question submissions to track Total Questions Answered, Total Correct, and Total Wrong.
