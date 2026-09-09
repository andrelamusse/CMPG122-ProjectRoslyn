# NWU CMPG122 • User Interface Programming in Visual C# Study & Exam Suite

Welcome to the **NWU CMPG122 Mastery Application Suite (Production V7.00)**. This application provides **100% curriculum exhaustion for Weeks 1 to 7** of North-West University's CMPG 122 module.

---

## 🌟 Key Application Features

1. **📚 430 Verified Curriculum Questions (Weeks 1–7):**
   - **SU7: Human-Computer Interaction (HCI):** Shneiderman's 8 Golden Rules, 5 Usability Measures, Motivations, Universal Usability, and Norman's Action Cycle.
   - **SU1: Introduction to Programming & Visual C# GUI:** Visual Studio IDE, Gaddis 6-phase process, Form Designer, Hungarian prefixes (`btn`, `txt`, `lbl`, `pic`), event-driven architecture, `this.Close();`.
   - **SU2: Processing Data, Variables & Math:** Numeric data types (`decimal`, `double`, `int`), literal suffixes (`m`, `d`), arithmetic precedence, integer division truncation, `ToString()` specifiers (`C`, `F`, `N`, `P`, `D`), `try-catch` exception handling, field vs local scope, `Math` class methods, `TabIndex`, and `Focus()`.
   - **SU3: Making Decisions, Selection & Validation:** Relational and logical operators (`&&`, `||`, `!`), `if-else`, nested `if`, `switch` statements, `TryParse()` defensive input validation, RadioButtons, CheckBoxes, GroupBoxes, `MessageBox.Show()`, and `ListBox` selection guards.
   - **SU4: Loops, Accumulators & ListBoxes:** `while` loop (pre-test), `do-while` loop (post-test), `for` loop, postfix vs prefix increment operators (`count++` vs `++count`), accumulators, counters, sentinels, ListBox population, and `Form_Load` initialization.

2. **📝 5 Official Past Exam Simulations (2021–2024):**
   - **Dec 2024 VC/PC Paper 1:** Car Rental Fleet & Mileage Surcharge Billing System (100 Marks, 16 steps).
   - **Dec 2023 VC/PC Paper 1:** Student Tuition, Campus Residence & Bursary Assessment (100 Marks, 16 steps).
   - **Dec 2022 NWU Paper 1:** Gym & Fitness Club Membership Billing Terminal (100 Marks, 16 steps).
   - **Nov 2021 VC/PC/DL Paper 1:** Hotel & Conference Booking Engine (90 Marks, 15 steps).
   - **PEC 2024 Comprehensive Practical Exam:** Retail POS, Volume Discount & Loyalty Register (100 Marks, 16 steps).
   - Features both **Untimed Practice Mode** and **Timed Simulation Mode** with automatic mark calculation.

3. **💻 C# CodeGrade Automated Marking & Diagnostics Engine:**
   - **Client-Side Roslyn Diagnostics:** Flags real compiler error codes (`CS1002` ; expected, `CS1513` } expected, `CS1026` ) expected, `CS0029` type conversion errors, `CS0103` undeclared variables, `CS1525` invalid expression terms).
   - **NWU Coding Standards Checker:** Enforces Hungarian notation (`NWU_CONV01`), safe input parsing (`NWU_SAFE01`), and currency formatting (`NWU_FORMAT01`).
   - **Automated Virtual Test Runner:** Runs simulated test cases against student event handlers and displays real-time Pass/Fail results.
   - **Code Snippet Toolbar:** One-click insertion of `TryParse`, `try-catch`, `if-else`, `while loop`, `for loop`, and `MessageBox`.

4. **🔍 Spot-the-Error & Debugging Gym:**
   - 15 tricky code snippets featuring past-paper bugs, off-by-one errors, unassigned locals, and TryParse syntax traps with instant feedback.

5. **🛠️ Side Tools Drawer:**
   - **Quick C# Expression Sandbox:** Live evaluation of C# arithmetic, `Math` functions, and `ToString` format strings.
   - **Variable State Trace Table:** Step through loop variable state changes.
   - **Hungarian Prefixes Inspector:** Official NWU naming cheat sheet.
   - **Auto-saved Scratchpad:** Keeps notes in browser LocalStorage.

---

## 🚀 3-Step Quick Start (100% Offline)

### Option A: Open Application Suite
1. Navigate to the `CMPG122_App/` folder.
2. Double-click `index.html` in any web browser (Chrome, Edge, Firefox, Safari).
3. No web server, node, or internet connection required!

### Option B: Single-File Mobile Study Guide
1. Double-click `CMPG122_Test1_StudyGuide.html` in the root folder.
2. Share this single file via WhatsApp, AirDrop, or email for on-the-go mobile studying.

---

## ⚙️ Automated CLI Commands

From the `c:\NWU\SM2\CMPG122` directory:

```bash
# Run automated Node.js QA Census & C# Engine Verification
python module_app_cli.py audit

# Re-bundle the single-file mobile study guide
python module_app_cli.py build-mobile

# Clean and organize workspace
python module_app_cli.py clean
```
