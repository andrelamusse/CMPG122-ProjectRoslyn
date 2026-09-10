---
description: Critical architectural and curriculum invariants for NWU CMPG122 (Visual C# UI Programming, Weeks 1-7)
globs: ["**/*.js", "**/*.html", "**/*.md", "**/*.py"]
---

# NWU CMPG122 Curriculum & Examination Architecture Invariants

## 1. Scope & Curriculum Boundary (Weeks 1–7 Only)
- Bounded strictly to Tony Gaddis (*Starting Out With Visual C#*, Chapters 1–5), Study Units 1–4, and Unit 7 (HCI).
- In-Scope Topics: Visual Studio IDE & WinForms basics, Hungarian naming (btn, lbl, txt, pic, rad, chk, lst, grp), primitive data types (decimal for currency, int, double, string, bool), defensive parsing (decimal.TryParse, int.TryParse), selection (if/else, switch), loops (while, do-while, for), accumulators/counters, ListBox operations (Add, Clear, Items.Count, SelectedIndex), formatting (.ToString("C")), and Shneiderman's 8 Golden Rules / Norman's Action Cycle.
- Strictly Excluded: Custom OOP classes, inheritance, polymorphism, abstract classes/interfaces, databases/SQL (SqlConnection), LINQ, file I/O streams (StreamReader), generics (List<T>), multi-dimensional arrays, async/await.

## 2. Continuous Single-Sheet Examination Layout
- Official past exam papers must NEVER render as single-question paginated carousels or "Q 1 of N" steppers with "Next" buttons.
- All questions must render vertically on a continuous, scrollable examination document.
- Must include a docked sticky quick-jump matrix with real-time viewport scroll-spy (IntersectionObserver), circular unanswered jump navigation, non-bypassable countdown timer forced auto-submission, and a single final submission button at the foot.
- Must provide a toggleable #scenarioDrawer slide-out reference panel displaying complete rate tables and control matrices.

## 3. Zero Guesswork Scenarios & Scaffolding
- Authentic exam scenarios must provide complete pricing, allowance rules, and GUI control naming tables. Questions must never test arbitrary numbers not stated in the scenario.
- CodeGrade practical scenarios pre-populate surrounding form plumbing (class MainForm, InitializeComponent(), method wrappers) as read-only scaffolding so students only author the assessed in-scope logic.

## 4. Student UI Blinding
- index.html must remain strictly blinded to students: 0 links or script tags referencing admin.html, GitHub repositories, build logs, or solution keys.
- Administrative tools, telemetry polling, and prompt viewers reside exclusively in admin.html.
