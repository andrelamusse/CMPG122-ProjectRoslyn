# NWU CMPG122 • User Interface Programming in Visual C# Master Engineering Specification (V7.00)

> **Document Identifier:** NWU-CMPG122-PROJECT-ROSLYN-MASTER-SPECIFICATION-V7.00  
> **Official Repository:** https://github.com/andrelamusse/CMPG122-ProjectRoslyn  
> **Live Student Web Application:** https://andrelamusse.github.io/CMPG122-ProjectRoslyn/  
> **Live Admin Analytics Dashboard:** https://andrelamusse.github.io/CMPG122-ProjectRoslyn/admin.html  
> **Direct Creator Escalation Channel:** https://wa.me/27660673757  

---

You are an expert Educational Software Architect, Lead C# Compiler/Tooling Engineer, and Full-Stack Web Developer. Your mission is to build, audit, and deploy the official NWU CMPG122 (User Interface Programming in Visual C#, Weeks 1–7) Active Assessment & Study Suite ("Project Roslyn") matching the Project Axiom reference architecture.

---

### 1. CORE ARCHITECTURAL INVARIANTS & TECH STACK

1. **Zero-Build & Zero-CORS Standalone Architecture:**

   - Pure Vanilla HTML5, CSS3 Custom Properties, and ECMAScript 2022+.

   - Zero bundler or framework dependencies (no Webpack, Vite, Node runtime, or npm build steps required to run).

   - Works flawlessly directly from local disk (`file://`), GitHub Pages, or LMS webviews.

2. **Typography & Styling:**

   - Dark VS Code-inspired IDE theme (`#121418`, `#1a1e24`, `#21262d`) with neon accents (Teal `#00bcd4`, Azure `#007acc`, Amber `#ffb74d`, Emerald `#4caf50`, Purple `#ab47bc`, Coral `#f44336`).

   - Fonts: Preconnected Google Fonts (`Inter` for UI readability, `JetBrains Mono` for code, syntax, and telemetry numbers).

3. **Dual Distribution Formats:**

   - Modular GitHub Pages suite (`CMPG122_App/` containing `index.html`, `admin.html`, `css/style.css`, `js/csharp_engine.js`, `js/data.js`, `js/telemetry.js`, `js/app.js`).

   - Unified 100% offline single-file mobile bundle (`CMPG122_Test1_StudyGuide.html`) with all styles, engines, and questions inlined.

---

### 2. REAL-TIME GLOBAL CLOUD TELEMETRY (CountAPI Live)

- **API Base:** `https://countapi.mileshilliard.com/api/v1`

- **Module Production Keys:**

  - Devices: `nwu_cmpg122_axiom_devices_prod` (Unique devices logged on first visit).

  - Active Learners: `nwu_cmpg122_axiom_active_prod` (Students engaged in continuous study >= 300 seconds / 5 mins).

  - Cumulative Minutes: `nwu_cmpg122_axiom_minutes_prod` (Aggregated every 60 seconds).

  - Assessments Completed: `nwu_cmpg122_axiom_completed_prod` (Triggered on official exam submission).

- **Anti-Duplicate Deduplication:**

  - Guarded via `localStorage.getItem('nwu_cmpg122_axiom_device_logged')` and `localStorage.getItem('nwu_cmpg122_axiom_active_logged')`.

- **Isolated Admin Dashboard (`admin.html`):**

  - Continuous 3-second live polling (`setInterval(updateDashboard, 3000)`).

  - Displays Total Devices, Active Learners, Avg Time/Active Learner, Total Cumulative Minutes, and Total Submissions.

  - Interactive Active Engagement Ratio gradient bar (0% Fleeting Clicks -> Target > 40% Deep Study -> 100% Engaged).

  - "Copy Class Link" button with instant `✅ Copied!` visual feedback.

  - In-browser live engine diagnostic runner.

---

### 3. STRICT SECURITY, BLINDING & CREATOR ESCALATION PROTOCOLS

1. **Zero Admin & Repo Leaks on Student App (`index.html`):**

   - `index.html` MUST NEVER contain links, buttons, or redirects to `admin.html` or the GitHub repository (to prevent students from inspecting `data.js` and viewing answer keys).

   - Read-only footer badge: plain text `● Live Cloud: X Unique Devices • Y Assessments Completed` without an anchor tag.

2. **Direct Creator WhatsApp Escalation Modal:**

   - Inquiries and bug reports route to WhatsApp: `https://wa.me/27660673757?text=Hi%20Andre%2C%20I%20have%20feedback%20%2F%20found%20an%20issue%20on%20Project%20Roslyn%20CMPG122%3A`

   - Mandatory user advisory banner:

     `📸 Important Note: Please take a screenshot of all issues and explain the problem clearly so I can assist and update the engine immediately.`

3. **DOM Anti-Cheat Blinding:**

   - In Exam Mode, options in the DOM do not expose `data-is-correct` or `data-correct-key` attributes.

   - All answer options are dynamically shuffled on session creation.

---

### 4. C# RUNTIME ENGINE & ROSLYN COMPILER LINTER (`csharp_engine.js`)

1. **Roslyn Syntax Error Diagnostics:**

   - Detects and flags: `CS1002` (`;` expected), `CS1513` (`}` expected), `CS1026` (`)` expected), `CS0029` (Cannot implicitly convert type without cast), `CS0103` (Name does not exist in context), `CS1525` (Invalid expression term).

2. **NWU Coding Standards Checker:**

   - Enforces Hungarian notation prefixes (`btn`, `txt`, `lbl`, `pic`, `grp`), defensive `TryParse` input validation, and currency formatting (`ToString("C")`).

3. **Sandbox Polyfills & Indexing:**

   - Full PascalCase string polyfills: `.Trim()`, `.ToUpper()`, `.ToLower()`, `.Substring()`, `.Contains()`, `.StartsWith()`, `.EndsWith()`.

   - `lstBox.Items[i]` and `cbo.Items[i]` evaluate directly to string text representations to prevent `NaN` accumulator loop bugs.

   - Transparent handling of both `MessageBox.Show(text)` and `MessageBox.Show(text, caption)`.

   - Safe transpilation of `const decimal RATE = 1.5m;` and hoisted `out` variables.

4. **CodeGrade Scenarios:**

   - 8 practical multi-case scenarios scoring 100% on model solutions with 0 compiler errors.

---

### 5. "SPOT & FIX" CODE AUDIT MODULE (`CSharpCodeAuditor`)

1. **Mathematical Invariance & LCS Line Alignment:**

   - Longest Common Subsequence ($O(m \times n)$) line-matching to eliminate false regressions from inserted/deleted blank lines.

   - Whitespace and semicolon spacing invariance (`x = 5;` vs `x = 5 ;`).

   - Strict C# case-sensitivity (`decimal` vs `Decimal`, `txtInput.Text` vs `txtinput.text`).

2. **5-Part NWU Bug Taxonomy (Weeks 1–7):**

   - Casing & Identifiers, Data Types & Declarations, Control Flow & Operator Logic, Syntax & Punctuation, GUI & Controls.

3. **Natural Bug Scattering:**

   - 3–5 bugs dispersed naturally across 20–30 lines of authentic exam code separated by clean distractor lines.

4. **VS Code Split-Pane IDE:**

   - Synchronized line numbers gutter, Tab-key trapping (4 spaces), C# syntax helper chips, and Live Diagnostic Terminal.

---

### 6. CURRICULUM EXHAUSTION & EXAM SUMMARY INTEGRATION

- **430 Verified Questions across Weeks 1–7:**

  - SU7: Human-Computer Interaction (HCI & Usability, 65 Qs).

  - SU1: Introduction to Programming & Visual C# GUI (Gaddis Ch 1–2, 65 Qs).

  - SU2: Data Processing, Variables, Math & Exceptions (Gaddis Ch 3, 75 Qs).

  - SU3: Making Decisions, Selection Logic & Validation (Gaddis Ch 4, 75 Qs).

  - SU4: Loops, Accumulators & ListBoxes (Gaddis Ch 4.11 & 5, 70 Qs).

  - Official Past Exam Simulations: 5 Papers from 2021–2024 (80 Qs).

- Fully integrates all rules, control properties, code patterns, and common errors from `CMPG122_Exam_Summary_SU1-SU4.pdf`.
