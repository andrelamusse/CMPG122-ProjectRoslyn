// NWU CMPG122 - Comprehensive Verified Question Bank & Curriculum Dataset (V7.00)
// 100% Offline Compatible • Zero CORS • Standalone Production Suite

(function(root) {
  'use strict';

  const DATA = {
  "moduleCode": "CMPG122",
  "moduleTitle": "User Interface Programming in Visual C#",
  "institution": "North-West University (NWU)",
  "version": "V7.00",
  "author": "Autonomous AI Curriculum Architect & Software Engineer",
  "prescribedTextbooks": [
    "Starting Out With Visual C# (4th / 5th Edition) - Tony Gaddis",
    "Designing the User Interface: Strategies for Effective Human-Computer Interaction (5th Edition) - Ben Shneiderman & Catherine Plaisant"
  ],
  "units": [
    {
      "id": "SU7",
      "code": "SU7",
      "title": "Study Unit 7: Human-Computer Interaction (HCI) Principles",
      "weeks": "Week 1 (Completed First per NWU Curriculum)",
      "icon": "🧠",
      "color": "#a855f7",
      "badge": "Shneiderman Ch 1 & 2",
      "topics": [
        "5 Usability Measures (Learnability, Performance, Errors, Retention, Satisfaction)",
        "5 Usability Motivations (Life-Critical, Industrial, Office/Home, Creative, Socio-Technical)",
        "Universal Usability (Physical, Cognitive, Elderly, Children, Internationalization)",
        "Shneiderman's 8 Golden Rules of Interface Design",
        "Norman's 7 Stages of Action & Gulf of Execution/Evaluation"
      ],
      "summary": "Focuses on user-centric interface engineering, accessibility, cognitive load reduction, error prevention, and the 8 Golden Rules of Interface Design. Taught in Week 1 to guide all subsequent GUI programming."
    },
    {
      "id": "SU1",
      "code": "SU1",
      "title": "Study Unit 1: Introduction to Programming & Visual Studio GUI",
      "weeks": "Weeks 1 & 2",
      "icon": "🖥️",
      "color": "#0ea5e9",
      "badge": "Gaddis Ch 1",
      "topics": [
        "Visual Studio IDE (Solution Explorer, Properties, Toolbox, Designer, Code View)",
        "Gaddis 6-Phase Program Development Process",
        "Form & Controls (Button, Label, TextBox, PictureBox with SizeModes)",
        "Event-Driven Paradigm & Click Event Handlers",
        "C# Syntax, Semicolons, Comments, Indentation, this.Close();",
        "NWU Hungarian Control Naming Prefixes (btn, txt, lbl, pic, grp)"
      ],
      "summary": "Introduces event-driven GUI development in Visual Studio 2019/2022, standard control properties, Gaddis 6-phase development cycle, and proper C# syntax."
    },
    {
      "id": "SU2",
      "code": "SU2",
      "title": "Study Unit 2: Processing Data, Variables, Math & Exceptions",
      "weeks": "Weeks 3 & 4",
      "icon": "🔢",
      "color": "#14b8a6",
      "badge": "Gaddis Ch 3",
      "topics": [
        "Reading TextBox Input (txt.Text) & Variable Declarations",
        "Data Types (int, double, decimal, string, bool) & Numeric Literals (m, d, f)",
        "Arithmetic Operators (+, -, *, /, %), Precedence & Integer Division Truncation",
        "Explicit Conversions & Parsing (int.Parse, decimal.Parse)",
        "ToString Format Specifiers ('C' Currency, 'F' Fixed, 'N' Number, 'P' Percent, 'D' Digits)",
        "Exception Handling with try-catch (FormatException, OverflowException)",
        "Named Constants (const), Field Variables vs Local Scope & Lifetime",
        "Math Class Methods (Pow, Sqrt, Round, Abs, Max, Min)",
        "GUI Polish (Focus(), TabIndex, TabStop, AcceptButton, CancelButton)"
      ],
      "summary": "Covers numeric data types, monetary calculations with decimal, operator precedence, string formatting, robust try-catch exception handling, scope, and Math library methods."
    },
    {
      "id": "SU3",
      "code": "SU3",
      "title": "Study Unit 3: Making Decisions, Selection Logic & Validation",
      "weeks": "Weeks 5 & 6",
      "icon": "🔀",
      "color": "#f59e0b",
      "badge": "Gaddis Ch 4",
      "topics": [
        "Relational (==, !=, <, <=, >, >=) & Logical (&&, ||, !) Operators",
        "Decision Structures: if, if-else, nested if, if-else if-else",
        "Boolean Variables, Flags & String Comparison (.Equals(), string.Compare)",
        "Safe Input Validation using TryParse (decimal.TryParse, int.TryParse)",
        "The switch Statement (cases, break, default)",
        "RadioButtons, CheckBoxes & GroupBoxes (mutual exclusion vs multi-select)",
        "MessageBox.Show() (Captions, MessageBoxButtons, MessageBoxIcon)",
        "ListBox Basics (Items.Add, Clear, Count, SelectedIndex, SelectedItem)"
      ],
      "summary": "Exhaustive treatment of conditional branching, defensive programming with TryParse, radio buttons, check boxes, message dialogs, and ListBox selection guards."
    },
    {
      "id": "SU4",
      "code": "SU4",
      "title": "Study Unit 4: Loops, Accumulators & ListBoxes",
      "weeks": "Weeks 6 & 7",
      "icon": "🔁",
      "color": "#ec4899",
      "badge": "Gaddis Ch 5",
      "topics": [
        "Pre-Test Loops: The while Loop (condition evaluated first)",
        "Increment (++) & Decrement (--) Operators: Postfix vs Prefix Evaluation",
        "Counters, Running Total Accumulators & Sentinel Values",
        "Post-Test Loops: The do-while Loop (guaranteed >= 1 execution)",
        "Count-Controlled Loops: The for Loop (init, condition, update)",
        "Populating & Iterating ListBoxes in Loops",
        "The Form_Load Event Handler for Pre-population",
        "Defensive Input Validation Loops"
      ],
      "summary": "Mastery of repetitive logic, counter and accumulator variables, pre-test vs post-test execution mechanics, for loop headers, and dynamic ListBox generation."
    }
  ],
  "officialExams": [
    {
      "id": "exam_2024_dec",
      "title": "Official Exam Paper 1 (Dec 2024 VC/PC)",
      "academicYear": "2024",
      "sitting": "First Opportunity (November/December 2024)",
      "durationMinutes": 180,
      "totalMarks": 100,
      "badge": "Dec 2024 Past Paper",
      "scenario": "Car Rental Fleet & Mileage Surcharge Billing System: Students create a Visual C# application with vehicle category selection (Sedan, SUV, Bakkie), daily rental rate calculation, mileage allowance with tiered excess surcharge, optional GPS/insurance checkboxes, TryParse validation, ListBox invoice summary, and Exit confirmation.",
      "subQuestionIds": [
        "q_su-exam_351",
        "q_su-exam_352",
        "q_su-exam_353",
        "q_su-exam_354",
        "q_su-exam_355",
        "q_su-exam_356",
        "q_su-exam_357",
        "q_su-exam_358",
        "q_su-exam_359",
        "q_su-exam_360",
        "q_su-exam_361",
        "q_su-exam_362",
        "q_su-exam_363",
        "q_su-exam_364",
        "q_su-exam_365",
        "q_su-exam_366"
      ]
    },
    {
      "id": "exam_2023_dec",
      "title": "Official Exam Paper 1 (Dec 2023 VC/PC)",
      "academicYear": "2023",
      "sitting": "First Opportunity (November/December 2023)",
      "durationMinutes": 180,
      "totalMarks": 100,
      "badge": "Dec 2023 Past Paper",
      "scenario": "Student Tuition, Campus Residence & Bursary Assessment System: Visual C# application calculating faculty tuition fees, residence meal plan options, merit bursary percentage deduction, semester installment breakdown using while loops, and formatted billing display.",
      "subQuestionIds": [
        "q_su-exam_367",
        "q_su-exam_368",
        "q_su-exam_369",
        "q_su-exam_370",
        "q_su-exam_371",
        "q_su-exam_372",
        "q_su-exam_373",
        "q_su-exam_374",
        "q_su-exam_375",
        "q_su-exam_376",
        "q_su-exam_377",
        "q_su-exam_378",
        "q_su-exam_379",
        "q_su-exam_380",
        "q_su-exam_381",
        "q_su-exam_382"
      ]
    },
    {
      "id": "exam_2022_dec",
      "title": "Official Exam Paper 1 (Dec 2022 NWU)",
      "academicYear": "2022",
      "sitting": "First Opportunity (November/December 2022)",
      "durationMinutes": 180,
      "totalMarks": 100,
      "badge": "Dec 2022 Past Paper",
      "scenario": "Gym & Fitness Club Membership Billing & Class Booking Terminal: Application featuring membership tier radio buttons (Standard, Premium, VIP), personal trainer add-on checkbox, monthly debit order calculation with 15% VAT, and 12-month projection loop in a ListBox.",
      "subQuestionIds": [
        "q_su-exam_383",
        "q_su-exam_384",
        "q_su-exam_385",
        "q_su-exam_386",
        "q_su-exam_387",
        "q_su-exam_388",
        "q_su-exam_389",
        "q_su-exam_390",
        "q_su-exam_391",
        "q_su-exam_392",
        "q_su-exam_393",
        "q_su-exam_394",
        "q_su-exam_395",
        "q_su-exam_396",
        "q_su-exam_397",
        "q_su-exam_398"
      ]
    },
    {
      "id": "exam_2021_nov",
      "title": "Official Exam Paper 1 (Nov 2021 VC/PC/DL)",
      "academicYear": "2021",
      "sitting": "First Opportunity (November 2021)",
      "durationMinutes": 180,
      "totalMarks": 90,
      "badge": "Nov 2021 Past Paper",
      "scenario": "Hotel & Conference Booking Engine: Room tier selection, length of stay calculation, conference package options, TryParse validation, and detailed receipt itemization.",
      "subQuestionIds": [
        "q_su-exam_399",
        "q_su-exam_400",
        "q_su-exam_401",
        "q_su-exam_402",
        "q_su-exam_403",
        "q_su-exam_404",
        "q_su-exam_405",
        "q_su-exam_406",
        "q_su-exam_407",
        "q_su-exam_408",
        "q_su-exam_409",
        "q_su-exam_410",
        "q_su-exam_411",
        "q_su-exam_412",
        "q_su-exam_413",
        "q_su-exam_414"
      ]
    },
    {
      "id": "exam_2024_pec",
      "title": "Official Comprehensive Practical Exam (PEC 2024)",
      "academicYear": "2024",
      "sitting": "Continuous Evaluation Practical Exam (PEC 2024)",
      "durationMinutes": 180,
      "totalMarks": 100,
      "badge": "PEC 2024 Exam",
      "scenario": "Retail Inventory, Tiered Volume Discounts & POS Cash Register: Point-of-sale terminal calculating subtotal, quantity tiered discounts, loyalty points, accumulator loop for cart items, and formatted receipt output.",
      "subQuestionIds": [
        "q_su-exam_415",
        "q_su-exam_416",
        "q_su-exam_417",
        "q_su-exam_418",
        "q_su-exam_419",
        "q_su-exam_420",
        "q_su-exam_421",
        "q_su-exam_422",
        "q_su-exam_423",
        "q_su-exam_424",
        "q_su-exam_425",
        "q_su-exam_426",
        "q_su-exam_427",
        "q_su-exam_428",
        "q_su-exam_429",
        "q_su-exam_430"
      ]
    }
  ],
  "spotErrors": [
    {
      "id": "err_01",
      "title": "Spot-the-Error: Missing Semicolon in Declaration",
      "code": "1: private void btnCalculate_Click(object sender, EventArgs e)\n2: {\n3:     decimal hours = 40.5m\n4:     decimal rate = 120.00m;\n5:     lblGrossPay.Text = (hours * rate).ToString(\"C\");\n6: }",
      "question": "Which line contains a syntax error preventing this C# project from compiling?",
      "options": [
        "Line 1: Event handler signature is missing public modifier",
        "Line 3: Missing terminating semicolon ';' at the end of statement (CS1002)",
        "Line 4: 'm' suffix cannot be used with decimal literals",
        "Line 5: '.ToString(\"C\")' is invalid syntax for currency"
      ],
      "answer": 1,
      "explanation": "Line 3 is missing the required semicolon ';'. In C#, every statement must terminate with a semicolon. The compiler reports CS1002: ; expected."
    },
    {
      "id": "err_02",
      "title": "Spot-the-Error: Assigning String Directly to Numeric Variable",
      "code": "1: private void btnSubmit_Click(object sender, EventArgs e)\n2: {\n3:     decimal price;\n4:     price = txtPrice.Text;\n5:     lblTotal.Text = price.ToString(\"C\");\n6: }",
      "question": "What error occurs on Line 4?",
      "options": [
        "CS0029: Cannot implicitly convert type 'string' to 'decimal'. Must use decimal.Parse() or decimal.TryParse().",
        "CS0103: The name 'txtPrice' does not exist.",
        "Runtime NullReferenceException because Text is null.",
        "No error; C# automatically converts strings to decimals in assignments."
      ],
      "answer": 0,
      "explanation": "The Text property of a TextBox returns a string. C# is strongly typed and does not perform implicit string-to-numeric conversions. You must use decimal.Parse(txtPrice.Text) or decimal.TryParse(txtPrice.Text, out price)."
    },
    {
      "id": "err_03",
      "title": "Spot-the-Error: Assignment Operator Used in if Condition",
      "code": "1: int mark = 65;\n2: if (mark = 50)\n3: {\n4:     lblResult.Text = \"Pass\";\n5: }",
      "question": "Why will Line 2 fail to compile in Visual C#?",
      "options": [
        "mark cannot be compared to an integer",
        "Single '=' is the assignment operator; comparison requires the relational '==' operator (CS0029 / CS0266)",
        "if statements cannot have integer conditions in any circumstance",
        "Parentheses around mark = 50 are not allowed in C#"
      ],
      "answer": 1,
      "explanation": "In C#, '=' assigns the value 50 to mark and yields an int (50). The if statement strictly requires a boolean expression. Since int cannot be converted to bool, the compiler flags an error. Comparison requires '==': if (mark == 50)."
    },
    {
      "id": "err_04",
      "title": "Spot-the-Error: Missing 'out' Keyword in TryParse",
      "code": "1: decimal hours;\n2: if (decimal.TryParse(txtHours.Text, hours))\n3: {\n4:     lblResult.Text = \"Valid\";\n5: }",
      "question": "What is wrong with the TryParse call on Line 2?",
      "options": [
        "TryParse only accepts int variables, not decimal",
        "The second argument must be preceded by the 'out' keyword: decimal.TryParse(txtHours.Text, out hours)",
        "TryParse does not return a boolean value",
        "txtHours.Text must be cast to an object first"
      ],
      "answer": 1,
      "explanation": "The C# TryParse method passes the target variable by reference using the 'out' keyword. Omitting 'out' causes a compiler error CS1503: Argument 2 must be passed with the 'out' keyword."
    },
    {
      "id": "err_05",
      "title": "Spot-the-Error: Integer Division Truncation Bug",
      "code": "1: int totalMarks = 85;\n2: int maxMarks = 100;\n3: double percentage = (totalMarks / maxMarks) * 100;\n4: lblPercent.Text = percentage.ToString(\"P\");",
      "question": "What logical bug occurs on Line 3 when totalMarks is 85?",
      "options": [
        "A runtime DivideByZeroException is thrown",
        "Integer division '85 / 100' evaluates to 0 due to truncation, making percentage equal 0.0",
        "The code will not compile because double cannot hold an int calculation",
        "The multiplication by 100 causes an arithmetic overflow"
      ],
      "answer": 1,
      "explanation": "When dividing two integers in C# (totalMarks / maxMarks), integer division occurs and truncates any fractional part: 85 / 100 = 0. Multiplying 0 by 100 gives 0.0. To fix, cast at least one operand to double: ((double)totalMarks / maxMarks) * 100."
    },
    {
      "id": "err_06",
      "title": "Spot-the-Error: Missing 'break' in switch Statement",
      "code": "1: switch (gradeLevel)\n2: {\n3:     case 1:\n4:         rate = 100.0m;\n5:     case 2:\n6:         rate = 150.0m;\n7:         break;\n8: }",
      "question": "What compiler error is generated for case 1 on Lines 3-4?",
      "options": [
        "CS0163: Control cannot fall through from one case label ('case 1:') to another; a 'break;' statement is required",
        "gradeLevel must be a string",
        "case values cannot be integers",
        "default label is mandatory in all switch blocks"
      ],
      "answer": 0,
      "explanation": "C# strictly prohibits implicit fall-through between non-empty case statements. Case 1 contains executable statements (rate = 100.0m;) and must end with a jump statement such as 'break;', 'return;', or 'goto case;'."
    },
    {
      "id": "err_07",
      "title": "Spot-the-Error: Using Local Variable Outside its Declared Scope",
      "code": "1: private void btnCalculate_Click(object sender, EventArgs e)\n2: {\n3:     if (chkDiscount.Checked)\n4:     {\n5:         decimal discount = 50.0m;\n6:     }\n7:     lblTotal.Text = discount.ToString(\"C\");\n8: }",
      "question": "Why does Line 7 fail to compile?",
      "options": [
        "lblTotal cannot display currency",
        "The variable 'discount' is declared inside the if block and is not visible outside that block (CS0103: The name 'discount' does not exist in current context)",
        "chkDiscount does not have a Checked property",
        "discount must be declared as static"
      ],
      "answer": 1,
      "explanation": "In C#, variables declared inside curly braces '{ }' have block scope and cease to exist once the block terminates. Line 7 attempts to use 'discount' outside the if block where it was declared, triggering CS0103."
    },
    {
      "id": "err_08",
      "title": "Spot-the-Error: Infinite while Loop Due to Missing Counter Increment",
      "code": "1: int count = 1;\n2: decimal total = 0.0m;\n3: while (count <= 10)\n4: {\n5:     total += 100.0m;\n6:     lstItems.Items.Add(total.ToString(\"C\"));\n7: }",
      "question": "What critical runtime defect exists in this while loop?",
      "options": [
        "The condition count <= 10 causes an index out of bounds error",
        "The loop counter 'count' is never incremented (missing count++;), causing an infinite loop that freezes the application",
        "lstItems.Items.Add does not accept string arguments",
        "total should be declared inside the while loop"
      ],
      "answer": 1,
      "explanation": "The variable 'count' remains 1 forever because there is no 'count++;' or update statement inside the loop body. The condition '1 <= 10' remains perpetually true, resulting in an infinite loop that locks the UI thread."
    },
    {
      "id": "err_09",
      "title": "Spot-the-Error: Default Control Name Violation (NWU Rubric)",
      "code": "1: private void button1_Click(object sender, EventArgs e)\n2: {\n3:     decimal hours = decimal.Parse(textBox1.Text);\n4:     label1.Text = hours.ToString();\n5: }",
      "question": "What NWU CMPG122 coding standard violation is committed in this event handler?",
      "options": [
        "Event handlers cannot be named button1_Click",
        "Default control names (button1, textBox1, label1) violate the prescribed NWU Hungarian notation standards (btnCalculate, txtHours, lblOutput), resulting in rubric penalties",
        "textBox1 cannot be parsed to decimal",
        "label1.Text only accepts integers"
      ],
      "answer": 1,
      "explanation": "The official NWU CMPG122 naming conventions strictly mandate Hungarian prefixes: 'btn' for buttons, 'txt' for textboxes, 'lbl' for labels, and meaningful descriptive identifiers. Using default control names incurs penalties in practical examinations."
    },
    {
      "id": "err_10",
      "title": "Spot-the-Error: Unchecked ListBox Selection Index",
      "code": "1: private void btnDelete_Click(object sender, EventArgs e)\n2: {\n3:     string selected = lstStudents.SelectedItem.ToString();\n4:     lstStudents.Items.RemoveAt(lstStudents.SelectedIndex);\n5: }",
      "question": "What runtime exception occurs if the user clicks btnDelete when no item is selected in lstStudents?",
      "options": [
        "FormatException",
        "NullReferenceException / ArgumentOutOfRangeException because SelectedItem is null and SelectedIndex is -1",
        "DivideByZeroException",
        "OverflowException"
      ],
      "answer": 1,
      "explanation": "When nothing is selected in a ListBox, SelectedIndex is -1 and SelectedItem is null. Calling .ToString() on null throws a NullReferenceException, and RemoveAt(-1) throws ArgumentOutOfRangeException. You must guard with 'if (lstStudents.SelectedIndex != -1)'."
    },
    {
      "id": "err_11",
      "title": "Spot-the-Error: Use of Unassigned Local Variable",
      "code": "1: decimal discountRate;\n2: if (chkLoyalty.Checked)\n3: {\n4:     discountRate = 0.10m;\n5: }\n6: decimal finalPrice = 1000m * (1 - discountRate);",
      "question": "Why does Line 6 fail to compile?",
      "options": [
        "CS0165: Use of unassigned local variable 'discountRate'. If chkLoyalty.Checked is false, discountRate is never assigned a value.",
        "1000m cannot be multiplied by a parenthesized expression",
        "chkLoyalty.Checked is read-only",
        "discountRate cannot be subtracted from 1"
      ],
      "answer": 0,
      "explanation": "In C#, local variables are not given default values automatically. If chkLoyalty.Checked is false, discountRate remains unassigned when evaluated on line 6. The compiler flags CS0165. To fix, initialize it upon declaration: 'decimal discountRate = 0.0m;' or add an else block."
    },
    {
      "id": "err_12",
      "title": "Spot-the-Error: Off-By-One Error in for Loop",
      "code": "1: string[] months = { \"Jan\", \"Feb\", \"Mar\", \"Apr\" };\n2: for (int i = 0; i <= months.Length; i++)\n3: {\n4:     lstMonths.Items.Add(months[i]);\n5: }",
      "question": "What runtime error occurs on the final iteration of this for loop?",
      "options": [
        "StackOverflowException",
        "IndexOutOfRangeException: Array indices range from 0 to Length - 1; using '<=' accesses index 4 which does not exist",
        "NullReferenceException",
        "InvalidCastException"
      ],
      "answer": 1,
      "explanation": "The array contains 4 items with valid indices 0, 1, 2, 3. The condition 'i <= months.Length' allows 'i' to reach 4. Evaluating months[4] throws an IndexOutOfRangeException. The condition must be 'i < months.Length'."
    },
    {
      "id": "err_13",
      "title": "Spot-the-Error: Mismatched Curly Braces",
      "code": "1: private void btnTest_Click(object sender, EventArgs e)\n2: {\n3:     if (x > 10) {\n4:         y = 20;\n5:     }\n6:     lblResult.Text = y.ToString();\n7: ",
      "question": "What error is flagged at the end of this code block?",
      "options": [
        "CS1513: } expected (the event handler method block opened on Line 2 is never closed)",
        "lblResult.Text is invalid",
        "x is not boolean",
        "y must be a constant"
      ],
      "answer": 0,
      "explanation": "The opening curly brace on Line 2 has no corresponding closing curly brace on Line 7. The C# compiler reports CS1513: } expected."
    },
    {
      "id": "err_14",
      "title": "Spot-the-Error: Incorrect Literal Suffix for Decimal",
      "code": "1: decimal price = 199.99;\n2: decimal vat = price * 0.15;\n3: lblTotal.Text = (price + vat).ToString(\"C\");",
      "question": "Why do Lines 1 and 2 fail to compile in Visual C#?",
      "options": [
        "Double literals without 'm' (199.99 and 0.15) cannot be implicitly converted to decimal (CS0664 / CS0029)",
        "decimal is not a valid C# keyword",
        "Labels cannot display decimal values",
        "vat is a reserved C# keyword"
      ],
      "answer": 0,
      "explanation": "By default, real numeric literals containing a decimal point are treated as type 'double'. C# does not allow implicit conversion from double to decimal. Suffix 'm' or 'M' must be appended: '199.99m' and '0.15m'."
    },
    {
      "id": "err_15",
      "title": "Spot-the-Error: Re-declaring Variable Inside Same Scope",
      "code": "1: decimal total = 0m;\n2: decimal rate = 50m;\n3: int count = 5;\n4: decimal total = rate * count;\n5: lblTotal.Text = total.ToString(\"C\");",
      "question": "What compiler error occurs on Line 4?",
      "options": [
        "CS0128: A local variable named 'total' is already defined in this scope",
        "Cannot multiply decimal by int",
        "count must be declared as decimal",
        "lblTotal.Text only accepts strings"
      ],
      "answer": 0,
      "explanation": "The variable 'total' was already declared on Line 1. Line 4 attempts to declare it again with 'decimal total = ...'. In C#, you cannot declare two local variables with the same name in the same scope. Line 4 should simply be an assignment: 'total = rate * count;'."
    }
  ],
  "auditScenarios": [
    {
      "id": "audit_wages",
      "title": "Scenario 1: Gross Wage & Overtime Payroll Auditor",
      "unit": "SU1–SU3 (Weeks 1–3)",
      "badge": "Payroll & Logic",
      "filename": "WagePayrollAuditor.cs",
      "categories": [
        "C# Casing & Identifier",
        "Data Type & Declaration",
        "Control Flow & Operator Logic",
        "Syntax & Punctuation"
      ],
      "description": "Audit an event handler that calculates employee gross wages. The handler reads hours and rate, validates numeric entry using TryParse, calculates standard vs overtime pay (hours > 40 paid at 1.5x), and formats gross pay into a Label as Currency.",
      "initialCode": "private void btnCalculate_Click(object sender, EventArgs e)\n{\n    decimal hours;\n    decimal rate;\n    if (!decimal.tryparse(txtHours.Text, out hours))\n    {\n        MessageBox.Show(\"Please enter valid numeric hours.\", \"Input Error\");\n        return;\n    }\n    if (!decimal.TryParse(txtRate.Text, rate))\n    {\n        MessageBox.Show(\"Please enter valid numeric hourly rate.\", \"Input Error\");\n        return;\n    }\n    decimal gross = 0m;\n    if (hours = 40)\n    {\n        gross = hours * rate;\n    }\n    else if (hours > 40.0m)\n    {\n        decimal overtimeHours = hours - 40.0m;\n        gross = (40.0m * rate) + (overtimeHours * rate * 1.5m);\n    }\n    else\n    {\n        gross = hours * rate;\n    }\n    lblGrossPay.Text = gross.ToString(\"C\")\n}",
      "canonicalSolution": "private void btnCalculate_Click(object sender, EventArgs e)\n{\n    decimal hours;\n    decimal rate;\n    if (!decimal.TryParse(txtHours.Text, out hours))\n    {\n        MessageBox.Show(\"Please enter valid numeric hours.\", \"Input Error\");\n        return;\n    }\n    if (!decimal.TryParse(txtRate.Text, out rate))\n    {\n        MessageBox.Show(\"Please enter valid numeric hourly rate.\", \"Input Error\");\n        return;\n    }\n    decimal gross = 0m;\n    if (hours == 40)\n    {\n        gross = hours * rate;\n    }\n    else if (hours > 40.0m)\n    {\n        decimal overtimeHours = hours - 40.0m;\n        gross = (40.0m * rate) + (overtimeHours * rate * 1.5m);\n    }\n    else\n    {\n        gross = hours * rate;\n    }\n    lblGrossPay.Text = gross.ToString(\"C\");\n}",
      "errorCatalog": [
        {
          "id": "bug_wages_1",
          "line": 5,
          "category": "C# Casing & Identifier",
          "buggyToken": "decimal.tryparse",
          "fixedToken": "decimal.TryParse",
          "description": "C# casing on 'decimal.TryParse'",
          "hint": "C# method names are case-sensitive. Use 'decimal.TryParse' with capital 'T' and 'P'.",
          "syntaxHint": "Check method name casing for decimal parsing.",
          "marks": 5
        },
        {
          "id": "bug_wages_2",
          "line": 10,
          "category": "Data Type & Declaration",
          "buggyToken": "txtRate.Text, rate)",
          "fixedToken": "txtRate.Text, out rate)",
          "description": "Missing 'out' keyword in TryParse parameter",
          "hint": "The second parameter of TryParse requires the 'out' keyword to pass the numeric variable by reference.",
          "syntaxHint": "Check parameter passing mode for TryParse target variable.",
          "marks": 5
        },
        {
          "id": "bug_wages_3",
          "line": 16,
          "category": "Control Flow & Operator Logic",
          "buggyToken": "hours = 40",
          "fixedToken": "hours == 40",
          "description": "Single '=' assignment used in if condition",
          "hint": "The single '=' operator is used for assignment. Equality comparison in conditional statements requires '=='.",
          "syntaxHint": "Check conditional equality operator in if statement.",
          "marks": 5
        },
        {
          "id": "bug_wages_4",
          "line": 29,
          "category": "Syntax & Punctuation",
          "buggyToken": "lblGrossPay.Text = gross.ToString(\"C\")",
          "fixedToken": "lblGrossPay.Text = gross.ToString(\"C\");",
          "description": "Missing terminating semicolon ';'",
          "hint": "Every C# statement must terminate with a semicolon ';'.",
          "syntaxHint": "Check statement punctuation at end of line.",
          "marks": 5
        }
      ]
    },
    {
      "id": "audit_grades",
      "title": "Scenario 2: Student Academic Grade Classifier & Results Terminal",
      "unit": "SU1–SU3 (Weeks 1–3)",
      "badge": "Decision Structures",
      "filename": "GradeClassifier.cs",
      "categories": [
        "Data Type & Declaration",
        "C# Casing & Identifier",
        "Control Flow & Operator Logic",
        "Syntax & Punctuation"
      ],
      "description": "Audit an academic mark classifier. Reads student examination score, evaluates distinction threshold, uses a switch statement to assign remarks, and outputs formatted feedback.",
      "initialCode": "private void btnGrade_Click(object sender, EventArgs e)\n{\n    char grade = 'F';\n    int mark = double.Parse(txtMark.Text);\n    if (mark >= 75)\n    {\n        grade = 'A';\n        lblStatus.Text = \"Distinction\";\n        messagebox.show(\"Distinction achieved! Outstanding result.\", \"NWU Portal\");\n    }\n    else if (mark >= 50)\n    {\n        grade = 'B';\n        lblStatus.Text = \"Pass\";\n    }\n    switch (grade)\n    {\n        case 'A':\n            lblRemark.Text = \"First Class Pass\";\n            // Missing break;\n        default:\n            lblRemark.Text = \"Standard Classification\";\n            break;\n    }\n    lblFeedback.Text = \"Student Grade: {grade}\";\n}",
      "canonicalSolution": "private void btnGrade_Click(object sender, EventArgs e)\n{\n    char grade = 'F';\n    int mark = int.Parse(txtMark.Text);\n    if (mark >= 75)\n    {\n        grade = 'A';\n        lblStatus.Text = \"Distinction\";\n        MessageBox.Show(\"Distinction achieved! Outstanding result.\", \"NWU Portal\");\n    }\n    else if (mark >= 50)\n    {\n        grade = 'B';\n        lblStatus.Text = \"Pass\";\n    }\n    switch (grade)\n    {\n        case 'A':\n            lblRemark.Text = \"First Class Pass\";\n            break;\n        default:\n            lblRemark.Text = \"Standard Classification\";\n            break;\n    }\n    lblFeedback.Text = $\"Student Grade: {grade}\";\n}",
      "errorCatalog": [
        {
          "id": "bug_grades_1",
          "line": 4,
          "category": "Data Type & Declaration",
          "buggyToken": "double.Parse",
          "fixedToken": "int.Parse",
          "description": "Type mismatch storing double into int without casting",
          "hint": "Cannot implicitly convert double to int. Parse into int directly with 'int.Parse()'.",
          "syntaxHint": "Check parsing method return type against target variable declaration.",
          "marks": 5
        },
        {
          "id": "bug_grades_2",
          "line": 9,
          "category": "C# Casing & Identifier",
          "buggyToken": "messagebox.show",
          "fixedToken": "MessageBox.Show",
          "description": "C# casing on 'MessageBox.Show'",
          "hint": "MessageBox and Show are capitalized in PascalCase: 'MessageBox.Show(...)'.",
          "syntaxHint": "Check casing of MessageBox class and Show method.",
          "marks": 5
        },
        {
          "id": "bug_grades_3",
          "line": 20,
          "category": "Control Flow & Operator Logic",
          "buggyToken": "// Missing break;",
          "fixedToken": "break;",
          "description": "Missing 'break;' statement in switch section",
          "hint": "In C#, each switch section containing code must terminate with a 'break;' statement (CS0163).",
          "syntaxHint": "Check control flow termination in switch block case.",
          "marks": 5
        },
        {
          "id": "bug_grades_4",
          "line": 25,
          "category": "Syntax & Punctuation",
          "buggyToken": "\"Student Grade: {grade}\"",
          "fixedToken": "$\"Student Grade: {grade}\"",
          "description": "Missing '$' prefix for string interpolation",
          "hint": "String interpolation requires the '$' character immediately before the opening quotation mark.",
          "syntaxHint": "Check string interpolation syntax.",
          "marks": 5
        }
      ]
    },
    {
      "id": "audit_pos",
      "title": "Scenario 3: Retail POS Shopping Cart & Inventory Register",
      "unit": "SU1–SU4 (Weeks 1–4)",
      "badge": "GUI & Collections",
      "filename": "PosRegister.cs",
      "categories": [
        "C# Casing & Identifier",
        "GUI & Control Interaction",
        "Control Flow & Operator Logic",
        "Syntax & Punctuation"
      ],
      "description": "Audit a Point-of-Sale item addition and discount routine. Reads quantity from TextBox, appends selected item to a ListBox receipt, checks for bulk discount eligibility using a relational condition, and applies discount.",
      "initialCode": "private void btnAddItem_Click(object sender, EventArgs e)\n{\n    int quantity;\n    string item = txtitem.text;\n    if (!int.TryParse(txtQty.Text, out quantity) || quantity <= 0)\n    {\n        MessageBox.Show(\"Please enter a valid positive quantity.\", \"POS Error\");\n        return;\n    }\n    decimal unitPrice = 45.50m;\n    lstReceipt.Items = item;\n    decimal subtotal = quantity * unitPrice;\n    decimal finalTotal = subtotal;\n    const decimal DISCOUNT_THRESHOLD = 500.00m;\n    const decimal DISCOUNT_RATE = 0.10m;\n    if (subtotal < 500.00m)\n    {\n        decimal discount = subtotal * DISCOUNT_RATE;\n        finalTotal = subtotal - discount;\n        lblDiscountTag.Text = \"Bulk Discount Applied\";\n    }\n    lblGrandTotal.Text = finalTotal.ToString(\"C\");\n    lblQuantity.Text = quantity.ToString();\n    decimal tax = finalTotal * 0.15m\n    lblVat.Text = tax.ToString(\"C\");\n}",
      "canonicalSolution": "private void btnAddItem_Click(object sender, EventArgs e)\n{\n    int quantity;\n    string item = txtItem.Text;\n    if (!int.TryParse(txtQty.Text, out quantity) || quantity <= 0)\n    {\n        MessageBox.Show(\"Please enter a valid positive quantity.\", \"POS Error\");\n        return;\n    }\n    decimal unitPrice = 45.50m;\n    lstReceipt.Items.Add(item);\n    decimal subtotal = quantity * unitPrice;\n    decimal finalTotal = subtotal;\n    const decimal DISCOUNT_THRESHOLD = 500.00m;\n    const decimal DISCOUNT_RATE = 0.10m;\n    if (subtotal >= 500.00m)\n    {\n        decimal discount = subtotal * DISCOUNT_RATE;\n        finalTotal = subtotal - discount;\n        lblDiscountTag.Text = \"Bulk Discount Applied\";\n    }\n    lblGrandTotal.Text = finalTotal.ToString(\"C\");\n    lblQuantity.Text = quantity.ToString();\n    decimal tax = finalTotal * 0.15m;\n    lblVat.Text = tax.ToString(\"C\");\n}",
      "errorCatalog": [
        {
          "id": "bug_pos_1",
          "line": 4,
          "category": "C# Casing & Identifier",
          "buggyToken": "txtitem.text",
          "fixedToken": "txtItem.Text",
          "description": "C# casing on 'txtItem.Text' control property",
          "hint": "C# control names and properties are case-sensitive: 'txtItem.Text'.",
          "syntaxHint": "Check casing of control name and property.",
          "marks": 5
        },
        {
          "id": "bug_pos_2",
          "line": 11,
          "category": "GUI & Control Interaction",
          "buggyToken": "lstReceipt.Items = item;",
          "fixedToken": "lstReceipt.Items.Add(item);",
          "description": "Forgetting '.Items.Add(...)' on ListBox control",
          "hint": "ListBox controls do not support direct assignment to Items. Call 'lstReceipt.Items.Add(item)'.",
          "syntaxHint": "Check ListBox collection method for adding elements.",
          "marks": 5
        },
        {
          "id": "bug_pos_3",
          "line": 16,
          "category": "Control Flow & Operator Logic",
          "buggyToken": "subtotal < 500.00m",
          "fixedToken": "subtotal >= 500.00m",
          "description": "Inverted relational operator for discount qualification",
          "hint": "Customers qualify for a discount when purchases are greater than or equal to threshold: 'subtotal >= 500.00m'.",
          "syntaxHint": "Check comparison operator logic in qualification condition.",
          "marks": 5
        },
        {
          "id": "bug_pos_4",
          "line": 24,
          "category": "Syntax & Punctuation",
          "buggyToken": "decimal tax = finalTotal * 0.15m",
          "fixedToken": "decimal tax = finalTotal * 0.15m;",
          "description": "Missing terminating semicolon ';'",
          "hint": "Missing semicolon ';' at the end of statement (CS1002).",
          "syntaxHint": "Check statement punctuation.",
          "marks": 5
        }
      ]
    },
    {
      "id": "audit_investment",
      "title": "Scenario 4: Compound Investment Growth Loop & Table Generator",
      "unit": "SU1–SU4 (Weeks 1–4)",
      "badge": "Loops & Accumulators",
      "filename": "InvestmentAccumulator.cs",
      "categories": [
        "C# Casing & Identifier",
        "Data Type & Declaration",
        "Syntax & Punctuation"
      ],
      "description": "Audit an interest accumulator loop that steps through investment years, compounds principal balance at an annual interest rate, and appends formatted annual balances to a ListBox.",
      "initialCode": "private void btnCalculateGrowth_Click(object sender, EventArgs e)\n{\n    int targetYears;\n    lstGrowth.Items.Clear();\n    if (!int.tryparse(txtYears.Text, out targetYears))\n    {\n        MessageBox.Show(\"Please enter a valid number of years.\", \"Input Error\");\n        return;\n    }\n    decimal balance = txtPrincipal.Text;\n    const decimal ANNUAL_RATE = 0.08m;\n    int currentYear = 1;\n    while (currentYear <= targetYears)\n    {\n        decimal interestEarned = balance * ANNUAL_RATE;\n        balance += interestEarned;\n        string logEntry = $\"Year {currentYear}: {balance.ToString(\"C\")}\";\n        lstGrowth.Items.Add(logEntry);\n        lblCurrentBalance.Text = balance.ToString(\"c\");\n        currentYear++;\n    // Missing }\n    lblStatus.Text = \"Investment projection completed.\";\n}",
      "canonicalSolution": "private void btnCalculateGrowth_Click(object sender, EventArgs e)\n{\n    int targetYears;\n    lstGrowth.Items.Clear();\n    if (!int.TryParse(txtYears.Text, out targetYears))\n    {\n        MessageBox.Show(\"Please enter a valid number of years.\", \"Input Error\");\n        return;\n    }\n    decimal balance = decimal.Parse(txtPrincipal.Text);\n    const decimal ANNUAL_RATE = 0.08m;\n    int currentYear = 1;\n    while (currentYear <= targetYears)\n    {\n        decimal interestEarned = balance * ANNUAL_RATE;\n        balance += interestEarned;\n        string logEntry = $\"Year {currentYear}: {balance.ToString(\"C\")}\";\n        lstGrowth.Items.Add(logEntry);\n        lblCurrentBalance.Text = balance.ToString(\"C\");\n        currentYear++;\n    }\n    lblStatus.Text = \"Investment projection completed.\";\n}",
      "errorCatalog": [
        {
          "id": "bug_inv_1",
          "line": 5,
          "category": "C# Casing & Identifier",
          "buggyToken": "int.tryparse",
          "fixedToken": "int.TryParse",
          "description": "C# casing on 'int.TryParse'",
          "hint": "'int.TryParse' requires PascalCase with capital 'T' and 'P'.",
          "syntaxHint": "Check casing of integer TryParse method.",
          "marks": 5
        },
        {
          "id": "bug_inv_2",
          "line": 10,
          "category": "Data Type & Declaration",
          "buggyToken": "balance = txtPrincipal.Text;",
          "fixedToken": "balance = decimal.Parse(txtPrincipal.Text);",
          "description": "Assigning string directly to decimal variable without parsing",
          "hint": "C# is strongly typed; strings cannot be assigned directly to numeric decimals. Use 'decimal.Parse(...)'.",
          "syntaxHint": "Check string-to-numeric data type conversion.",
          "marks": 5
        },
        {
          "id": "bug_inv_3",
          "line": 19,
          "category": "Data Type & Declaration",
          "buggyToken": "balance.ToString(\"c\")",
          "fixedToken": "balance.ToString(\"C\")",
          "description": "Wrong format specifier casing: 'ToString(\"c\")' vs 'ToString(\"C\")'",
          "hint": "NWU coding standard requires uppercase 'C' format specifier for Currency: '.ToString(\"C\")'.",
          "syntaxHint": "Check format specifier casing.",
          "marks": 5
        },
        {
          "id": "bug_inv_4",
          "line": 21,
          "category": "Syntax & Punctuation",
          "buggyToken": "// Missing }",
          "fixedToken": "}",
          "description": "Mismatched curly braces / missing while loop closing brace '}'",
          "hint": "Every opening brace '{' must be closed by a corresponding brace '}' (CS1513).",
          "syntaxHint": "Check block enclosure and brace matching.",
          "marks": 5
        }
      ]
    },
    {
      "id": "audit_mileage",
      "title": "Scenario 5: Fleet Mileage Array Surcharge & ListBox Auditor",
      "unit": "SU1–SU5 (Weeks 1–5)",
      "badge": "Arrays & Algorithms",
      "filename": "FleetMileageAuditor.cs",
      "categories": [
        "GUI & Control Interaction",
        "Control Flow & Operator Logic",
        "Syntax & Punctuation"
      ],
      "description": "Audit a vehicle fleet trip log analyzer. Iterates through an array of daily kilometer readings, validates odometer records, flags empty readings, and populates trip summaries.",
      "initialCode": "private void btnAuditFleet_Click(object sender, EventArgs e)\n{\n    double[] dailyKm = { 120.5, 95.0, 310.2, 84.6, 215.0 };\n    double totalDistance = 0.0;\n    int activeTrips = 0;\n    lstTrips.Items.Clear();\n    for (int i = 0; i <= dailyKm.Length; i++)\n    {\n        totalDistance += dailyKm[i];\n        activeTrips++;\n        lstTrips.Add(dailyKm[i].ToString(\"N1\"));\n    }\n    double avgKm = 0.0;\n    if (activeTrips > 0)\n    {\n        avgKm = totalDistance / activeTrips;\n    }\n    if (totalDistance = 0.0)\n    {\n        MessageBox.Show(\"No mileage recorded.\", \"Audit Alert\");\n    }\n    lblAverage.Text = avgKm.ToString(\"N2\")\n    lblTotalTrips.Text = activeTrips.ToString();\n}",
      "canonicalSolution": "private void btnAuditFleet_Click(object sender, EventArgs e)\n{\n    double[] dailyKm = { 120.5, 95.0, 310.2, 84.6, 215.0 };\n    double totalDistance = 0.0;\n    int activeTrips = 0;\n    lstTrips.Items.Clear();\n    for (int i = 0; i < dailyKm.Length; i++)\n    {\n        totalDistance += dailyKm[i];\n        activeTrips++;\n        lstTrips.Items.Add(dailyKm[i].ToString(\"N1\"));\n    }\n    double avgKm = 0.0;\n    if (activeTrips > 0)\n    {\n        avgKm = totalDistance / activeTrips;\n    }\n    if (totalDistance == 0.0)\n    {\n        MessageBox.Show(\"No mileage recorded.\", \"Audit Alert\");\n    }\n    lblAverage.Text = avgKm.ToString(\"N2\");\n    lblTotalTrips.Text = activeTrips.ToString();\n}",
      "errorCatalog": [
        {
          "id": "bug_mileage_1",
          "line": 7,
          "category": "GUI & Control Interaction",
          "buggyToken": "i <= dailyKm.Length",
          "fixedToken": "i < dailyKm.Length",
          "description": "Off-by-one array index out of bounds: 'i <= Length'",
          "hint": "Array indexing is 0-based. The maximum valid index is Length - 1. Loop condition must be 'i < dailyKm.Length'.",
          "syntaxHint": "Check loop boundary condition against array length.",
          "marks": 5
        },
        {
          "id": "bug_mileage_2",
          "line": 11,
          "category": "GUI & Control Interaction",
          "buggyToken": "lstTrips.Add(",
          "fixedToken": "lstTrips.Items.Add(",
          "description": "Forgetting '.Items.Add(...)' on ListBox control",
          "hint": "ListBox controls do not have an .Add() method directly; invoke 'lstTrips.Items.Add(...)'.",
          "syntaxHint": "Check method call on ListBox Items collection.",
          "marks": 5
        },
        {
          "id": "bug_mileage_3",
          "line": 18,
          "category": "Control Flow & Operator Logic",
          "buggyToken": "totalDistance = 0.0",
          "fixedToken": "totalDistance == 0.0",
          "description": "Single '=' assignment in conditional expression",
          "hint": "The single '=' operator assigns a value; use '==' for relational equality comparison.",
          "syntaxHint": "Check equality operator in conditional expression.",
          "marks": 5
        },
        {
          "id": "bug_mileage_4",
          "line": 22,
          "category": "Syntax & Punctuation",
          "buggyToken": "lblAverage.Text = avgKm.ToString(\"N2\")",
          "fixedToken": "lblAverage.Text = avgKm.ToString(\"N2\");",
          "description": "Missing terminating semicolon ';'",
          "hint": "Terminating semicolon ';' expected (CS1002).",
          "syntaxHint": "Check statement punctuation at end of line.",
          "marks": 5
        }
      ]
    },
    {
      "id": "audit_bursary",
      "title": "Scenario 6: Tuition Bursary & Surcharge Terminal (NWU Official Exam)",
      "unit": "Comprehensive Weeks 1–7 (Official Exam)",
      "badge": "Official Exam Paper",
      "filename": "TuitionBursaryTerminal.cs",
      "categories": [
        "C# Casing & Identifier",
        "Data Type & Declaration",
        "Control Flow & Operator Logic",
        "GUI & Control Interaction",
        "Syntax & Punctuation"
      ],
      "description": "Authentic NWU assessment scenario evaluating tuition fee calculation, financial aid qualification, ListBox item resetting, and receipt formatting.",
      "initialCode": "private void btnProcessTuition_Click(object sender, EventArgs e)\n{\n    decimal tuitionFee;\n    decimal bursaryAmount;\n    if (!decimal.tryparse(txtTuition.Text, out tuitionFee))\n    {\n        MessageBox.Show(\"Please enter valid tuition fee amount.\", \"Input Error\");\n        return;\n    }\n    if (!decimal.TryParse(txtBursary.Text, bursaryAmount))\n    {\n        MessageBox.Show(\"Please enter valid bursary amount.\", \"Input Error\");\n        return;\n    }\n    decimal netPayable = tuitionFee - bursaryAmount;\n    if (tuitionFee = bursaryAmount)\n    {\n        lblStatus.Text = \"Full Bursary Coverage (Balance Zero)\";\n    }\n    else if (netPayable < 0m)\n    {\n        netPayable = 0m;\n        lblStatus.Text = \"Credit Balance Rolled Over\";\n    }\n    lstSummary.Clear();\n    lstSummary.Items.Add($\"Tuition: {tuitionFee:C}\");\n    lstSummary.Items.Add($\"Bursary: {bursaryAmount:C}\");\n    lblReceipt.Text = \"Net Tuition: {netPayable:C}\";\n}",
      "canonicalSolution": "private void btnProcessTuition_Click(object sender, EventArgs e)\n{\n    decimal tuitionFee;\n    decimal bursaryAmount;\n    if (!decimal.TryParse(txtTuition.Text, out tuitionFee))\n    {\n        MessageBox.Show(\"Please enter valid tuition fee amount.\", \"Input Error\");\n        return;\n    }\n    if (!decimal.TryParse(txtBursary.Text, out bursaryAmount))\n    {\n        MessageBox.Show(\"Please enter valid bursary amount.\", \"Input Error\");\n        return;\n    }\n    decimal netPayable = tuitionFee - bursaryAmount;\n    if (tuitionFee == bursaryAmount)\n    {\n        lblStatus.Text = \"Full Bursary Coverage (Balance Zero)\";\n    }\n    else if (netPayable < 0m)\n    {\n        netPayable = 0m;\n        lblStatus.Text = \"Credit Balance Rolled Over\";\n    }\n    lstSummary.Items.Clear();\n    lstSummary.Items.Add($\"Tuition: {tuitionFee:C}\");\n    lstSummary.Items.Add($\"Bursary: {bursaryAmount:C}\");\n    lblReceipt.Text = $\"Net Tuition: {netPayable:C}\";\n}",
      "errorCatalog": [
        {
          "id": "bug_bursary_1",
          "line": 5,
          "category": "C# Casing & Identifier",
          "buggyToken": "decimal.tryparse",
          "fixedToken": "decimal.TryParse",
          "description": "C# casing on 'decimal.TryParse'",
          "hint": "Method names are case-sensitive. Use 'decimal.TryParse'.",
          "syntaxHint": "Check casing of decimal TryParse method.",
          "marks": 5
        },
        {
          "id": "bug_bursary_2",
          "line": 10,
          "category": "Data Type & Declaration",
          "buggyToken": "txtBursary.Text, bursaryAmount)",
          "fixedToken": "txtBursary.Text, out bursaryAmount)",
          "description": "Missing 'out' keyword in TryParse second argument",
          "hint": "The second parameter of TryParse requires the 'out' keyword (CS1503).",
          "syntaxHint": "Check parameter passing mode for target variable.",
          "marks": 5
        },
        {
          "id": "bug_bursary_3",
          "line": 16,
          "category": "Control Flow & Operator Logic",
          "buggyToken": "tuitionFee = bursaryAmount",
          "fixedToken": "tuitionFee == bursaryAmount",
          "description": "Single '=' assignment in conditional expression",
          "hint": "Single '=' assigns values. Equality testing requires '=='.",
          "syntaxHint": "Check comparison operator in equality condition.",
          "marks": 5
        },
        {
          "id": "bug_bursary_4",
          "line": 25,
          "category": "GUI & Control Interaction",
          "buggyToken": "lstSummary.Clear();",
          "fixedToken": "lstSummary.Items.Clear();",
          "description": "Missing '.Items.Clear()' on ListBox control",
          "hint": "To clear all items in a ListBox, invoke 'lstSummary.Items.Clear()'.",
          "syntaxHint": "Check ListBox collection method for clearing items.",
          "marks": 5
        },
        {
          "id": "bug_bursary_5",
          "line": 28,
          "category": "Syntax & Punctuation",
          "buggyToken": "\"Net Tuition: {netPayable:C}\"",
          "fixedToken": "$\"Net Tuition: {netPayable:C}\"",
          "description": "Missing '$' prefix for string interpolation",
          "hint": "String interpolation requires the '$' symbol before the opening quote.",
          "syntaxHint": "Check string interpolation syntax.",
          "marks": 5
        }
      ]
    }
  ],
  "codeScenarios": {
    "scenario_wages": {
      "id": "scenario_wages",
      "title": "Scenario 1: Gross Wage & Overtime Calculator",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "description": "Develop the event handler for btnCalculate_Click. Read hours worked from txtHours and hourly pay rate from txtRate using decimal.TryParse(). If either input is invalid, display an error message using MessageBox.Show(\"Please enter valid numeric values for hours and rate.\", \"Input Error\"). If valid, calculate gross pay where hours up to 40 are paid at regular rate, and overtime hours (> 40) are paid at 1.5 times the hourly rate. Display the gross pay in lblGrossPay formatted as Currency (e.g. .ToString(\"C\")).",
      "controls": [
        "txtHours",
        "txtRate",
        "lblGrossPay",
        "btnCalculate"
      ],
      "expectedOutputs": [
        "lblGrossPay"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnCalculate_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "decimal hours;\ndecimal rate;\n\nif (decimal.TryParse(txtHours.Text, out hours) && decimal.TryParse(txtRate.Text, out rate))\n{\n    if (hours < 0 || rate < 0)\n    {\n        MessageBox.Show(\"Hours and rate must be positive values.\", \"Range Error\");\n        return;\n    }\n\n    decimal grossPay;\n    const decimal BASE_HOURS = 40.0m;\n    const decimal OVERTIME_MULTIPLIER = 1.5m;\n\n    if (hours > BASE_HOURS)\n    {\n        decimal regularPay = BASE_HOURS * rate;\n        decimal overtimeHours = hours - BASE_HOURS;\n        decimal overtimePay = overtimeHours * rate * OVERTIME_MULTIPLIER;\n        grossPay = regularPay + overtimePay;\n    }\n    else\n    {\n        grossPay = hours * rate;\n    }\n\n    lblGrossPay.Text = grossPay.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter valid numeric values for hours and rate.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "Standard Regular Hours (40 hrs @ R50)",
          "inputs": {
            "txtHours": "40",
            "txtRate": "50"
          },
          "expected": {
            "lblGrossPay": "2000"
          },
          "expectedDescription": "Gross Pay: R 2,000.00"
        },
        {
          "name": "Overtime Hours (45 hrs @ R100 -> 40*100 + 5*150 = R4,750)",
          "inputs": {
            "txtHours": "45",
            "txtRate": "100"
          },
          "expected": {
            "lblGrossPay": "4750"
          },
          "expectedDescription": "Gross Pay: R 4,750.00"
        },
        {
          "name": "Invalid Non-Numeric Input Guard ('abc')",
          "inputs": {
            "txtHours": "abc",
            "txtRate": "50"
          },
          "expected": {
            "_messages": "Input Error"
          },
          "expectedDescription": "Displays Input Error MessageBox without crashing"
        }
      ]
    },
    "scenario_grades": {
      "id": "scenario_grades",
      "title": "Scenario 2: Student Mark & Grade Classifier",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": false,
      "description": "Read an exam mark from txtMark using int.TryParse(). Validate that the mark is between 0 and 100 inclusive. If invalid or out of range, display MessageBox.Show(\"Mark must be an integer between 0 and 100.\"). If valid, determine grade classification and assign to lblGrade.Text: mark >= 75: 'Distinction', mark >= 50: 'Pass', mark < 50: 'Fail'. Also set lblGrade.ForeColor to Green for pass/distinction and Red for fail.",
      "controls": [
        "txtMark",
        "lblGrade",
        "btnClassify"
      ],
      "expectedOutputs": [
        "lblGrade"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnClassify_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "int mark;\nif (int.TryParse(txtMark.Text, out mark))\n{\n    if (mark < 0 || mark > 100)\n    {\n        MessageBox.Show(\"Mark must be an integer between 0 and 100.\", \"Range Error\");\n        return;\n    }\n\n    if (mark >= 75)\n    {\n        lblGrade.Text = \"Distinction\";\n    }\n    else if (mark >= 50)\n    {\n        lblGrade.Text = \"Pass\";\n    }\n    else\n    {\n        lblGrade.Text = \"Fail\";\n    }\n}\nelse\n{\n    MessageBox.Show(\"Mark must be an integer between 0 and 100.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "Distinction Score (82%)",
          "inputs": {
            "txtMark": "82"
          },
          "expected": {
            "lblGrade": "Distinction"
          }
        },
        {
          "name": "Pass Score (55%)",
          "inputs": {
            "txtMark": "55"
          },
          "expected": {
            "lblGrade": "Pass"
          }
        },
        {
          "name": "Fail Score (42%)",
          "inputs": {
            "txtMark": "42"
          },
          "expected": {
            "lblGrade": "Fail"
          }
        },
        {
          "name": "Out-of-range Guard (110%)",
          "inputs": {
            "txtMark": "110"
          },
          "expected": {
            "_messages": "Range Error"
          }
        }
      ]
    },
    "scenario_investment": {
      "id": "scenario_investment",
      "title": "Scenario 3: Compound Investment Growth Loop",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU4"
      ],
      "requiresCurrency": true,
      "description": "Read principal from txtPrincipal (decimal), annual interest rate percentage from txtRate (decimal), and years from txtYears (int) using TryParse. Clear lstGrowth with lstGrowth.Items.Clear(). Use a for loop or while loop iterating from year 1 to years. In each iteration, calculate: balance = balance * (1 + (rate / 100m)). Add a formatted string to lstGrowth: $'Year {year}: {balance:C}'. Display final balance in lblFinalBalance formatted as Currency.",
      "controls": [
        "txtPrincipal",
        "txtRate",
        "txtYears",
        "lstGrowth",
        "lblFinalBalance",
        "btnCalculate"
      ],
      "expectedOutputs": [
        "lstGrowth",
        "lblFinalBalance"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnCalculate_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "decimal principal;\ndecimal rate;\nint years;\n\nif (decimal.TryParse(txtPrincipal.Text, out principal) &&\n    decimal.TryParse(txtRate.Text, out rate) &&\n    int.TryParse(txtYears.Text, out years))\n{\n    if (principal <= 0 || rate <= 0 || years <= 0)\n    {\n        MessageBox.Show(\"Please enter positive values.\", \"Input Error\");\n        return;\n    }\n\n    lstGrowth.Items.Clear();\n    decimal balance = principal;\n    decimal rateDecimal = rate / 100.0m;\n\n    for (int y = 1; y <= years; y++)\n    {\n        balance += balance * rateDecimal;\n        lstGrowth.Items.Add(\"Year \" + y.ToString() + \": \" + balance.ToString(\"C\"));\n    }\n\n    lblFinalBalance.Text = balance.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter valid numeric inputs.\", \"Parse Error\");\n}",
      "testCases": [
        {
          "name": "3-Year 10% Growth on R1,000 (R1000 -> R1331)",
          "inputs": {
            "txtPrincipal": "1000",
            "txtRate": "10",
            "txtYears": "3"
          },
          "expected": {
            "lblFinalBalance": "1331",
            "lstGrowth": {
              "minItems": 3
            }
          }
        }
      ]
    },
    "scenario_pos": {
      "id": "scenario_pos",
      "title": "Scenario 4: Retail POS & ListBox Shopping Cart",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "description": "Event handler for btnAddItem_Click. Read item name from txtItem (string) and item price from txtPrice (decimal.TryParse). Validate that txtItem is not empty and price > 0. Add item to lstCart: txtItem.Text + ' - ' + price.ToString('C'). Update cumulative total in field variable _cartTotal. Apply 10% discount if chkMember.Checked is true. Display net total in lblTotal formatted as currency.",
      "controls": [
        "txtItem",
        "txtPrice",
        "chkMember",
        "lstCart",
        "lblTotal",
        "btnAddItem"
      ],
      "expectedOutputs": [
        "lstCart",
        "lblTotal"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnAddItem_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "string item = txtItem.Text.Trim();\ndecimal price;\n\nif (string.IsNullOrEmpty(item))\n{\n    MessageBox.Show(\"Item name cannot be blank.\", \"Validation Error\");\n    return;\n}\n\nif (decimal.TryParse(txtPrice.Text, out price) && price > 0)\n{\n    lstCart.Items.Add(item + \" - \" + price.ToString(\"C\"));\n    decimal total = price;\n    if (chkMember.Checked)\n    {\n        total -= total * 0.10m;\n    }\n    lblTotal.Text = total.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter a valid positive price.\", \"Validation Error\");\n}",
      "testCases": [
        {
          "name": "Item with 10% Member Discount (R100 -> R90)",
          "inputs": {
            "txtItem": "Shirt",
            "txtPrice": "100",
            "chkMember": true
          },
          "expected": {
            "lblTotal": "90"
          }
        },
        {
          "name": "Regular Non-Member Item (R250)",
          "inputs": {
            "txtItem": "Shoes",
            "txtPrice": "250",
            "chkMember": false
          },
          "expected": {
            "lblTotal": "250"
          }
        }
      ]
    },
    "scenario_temperature": {
      "id": "scenario_temperature",
      "title": "Scenario 5: Temperature Converter with RadioButtons",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": false,
      "description": "Convert temperature entered in txtInput (double.TryParse). If rdoToFahrenheit.Checked is true, convert Celsius to Fahrenheit: F = (C * 9.0 / 5.0) + 32. If rdoToCelsius.Checked is true, convert Fahrenheit to Celsius: C = (F - 32) * 5.0 / 9.0. Display result in lblResult formatted with .ToString('F1').",
      "controls": [
        "txtInput",
        "rdoToFahrenheit",
        "rdoToCelsius",
        "lblResult",
        "btnConvert"
      ],
      "expectedOutputs": [
        "lblResult"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnConvert_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "double temp;\nif (double.TryParse(txtInput.Text, out temp))\n{\n    double result;\n    if (rdoToFahrenheit.Checked)\n    {\n        result = (temp * 9.0 / 5.0) + 32.0;\n        lblResult.Text = result.ToString(\"F1\") + \" °F\";\n    }\n    else if (rdoToCelsius.Checked)\n    {\n        result = (temp - 32.0) * 5.0 / 9.0;\n        lblResult.Text = result.ToString(\"F1\") + \" °C\";\n    }\n    else\n    {\n        MessageBox.Show(\"Select a conversion option.\", \"Selection Error\");\n    }\n}\nelse\n{\n    MessageBox.Show(\"Please enter a valid numeric temperature.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "0°C to Fahrenheit -> 32.0°F",
          "inputs": {
            "txtInput": "0",
            "rdoToFahrenheit": true,
            "rdoToCelsius": false
          },
          "expected": {
            "lblResult": "32.0"
          }
        },
        {
          "name": "212°F to Celsius -> 100.0°C",
          "inputs": {
            "txtInput": "212",
            "rdoToFahrenheit": false,
            "rdoToCelsius": true
          },
          "expected": {
            "lblResult": "100.0"
          }
        }
      ]
    },
    "scenario_accumulator": {
      "id": "scenario_accumulator",
      "title": "Scenario 6: Number Accumulator & Average Score Loop",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU4"
      ],
      "requiresCurrency": false,
      "description": "Event handler for btnAddScore_Click. Read test score from txtScore (decimal.TryParse). Validate score between 0 and 100. Accumulate score into total and increment counter. Add score to lstScores. Calculate running average = total / count. Display running count in lblCount and average in lblAverage formatted with .ToString('F2').",
      "controls": [
        "txtScore",
        "lstScores",
        "lblCount",
        "lblAverage",
        "btnAddScore"
      ],
      "expectedOutputs": [
        "lblCount",
        "lblAverage",
        "lstScores"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnAddScore_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "decimal score;\nif (decimal.TryParse(txtScore.Text, out score) && score >= 0 && score <= 100)\n{\n    lstScores.Items.Add(score.ToString(\"F1\"));\n    int count = lstScores.Items.Count;\n    decimal total = 0m;\n    for (int i = 0; i < count; i++)\n    {\n        total += decimal.Parse(lstScores.Items[i]);\n    }\n    decimal avg = total / count;\n    lblCount.Text = count.ToString();\n    lblAverage.Text = avg.ToString(\"F2\");\n}\nelse\n{\n    MessageBox.Show(\"Enter a valid score between 0 and 100.\", \"Validation Error\");\n}",
      "testCases": [
        {
          "name": "Score Entry (80)",
          "inputs": {
            "txtScore": "80"
          },
          "expected": {
            "lblCount": "1",
            "lblAverage": "80.00"
          }
        }
      ]
    },
    "scenario_car_rental": {
      "id": "scenario_car_rental",
      "title": "Scenario 7: Car Rental Mileage Surcharge Terminal (NWU 2024 Exam)",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "description": "From NWU Dec 2024 Exam Paper 1: Calculate car rental bill. Read rental days from txtDays (int.TryParse) and total kilometers driven from txtKms (decimal.TryParse). Base rate determined by vehicle radio button: rdoSedan (R450/day), rdoSuv (R650/day), rdoBakkie (R750/day). Mileage allowance is 150 km per day included free. Any excess kilometers driven over (days * 150) are billed at R3.50 per km. If chkGps.Checked is true, add R80 per day. Calculate total, format and output to lblTotalDue with .ToString('C').",
      "controls": [
        "txtDays",
        "txtKms",
        "rdoSedan",
        "rdoSuv",
        "rdoBakkie",
        "chkGps",
        "lblTotalDue",
        "btnCalculate"
      ],
      "expectedOutputs": [
        "lblTotalDue"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnCalculate_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "int days;\ndecimal kms;\nif (int.TryParse(txtDays.Text, out days) && decimal.TryParse(txtKms.Text, out kms))\n{\n    if (days <= 0 || kms < 0)\n    {\n        MessageBox.Show(\"Days and kms must be positive.\", \"Error\");\n        return;\n    }\n\n    decimal dailyRate = 0m;\n    if (rdoSedan.Checked) dailyRate = 450m;\n    else if (rdoSuv.Checked) dailyRate = 650m;\n    else if (rdoBakkie.Checked) dailyRate = 750m;\n    else\n    {\n        MessageBox.Show(\"Please select a vehicle category.\", \"Selection Error\");\n        return;\n    }\n\n    decimal baseCharge = days * dailyRate;\n    decimal freeKms = days * 150m;\n    decimal excessCharge = 0m;\n    if (kms > freeKms)\n    {\n        excessCharge = (kms - freeKms) * 3.50m;\n    }\n\n    decimal gpsCharge = chkGps.Checked ? (days * 80m) : 0m;\n    decimal totalDue = baseCharge + excessCharge + gpsCharge;\n    lblTotalDue.Text = totalDue.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter valid numeric values for days and kilometers.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "Sedan 2 Days, 300 Kms (No Excess, R450*2 = R900)",
          "inputs": {
            "txtDays": "2",
            "txtKms": "300",
            "rdoSedan": true,
            "rdoSuv": false,
            "rdoBakkie": false,
            "chkGps": false
          },
          "expected": {
            "lblTotalDue": "900"
          }
        },
        {
          "name": "SUV 3 Days, 550 Kms (Free=450, Excess=100km*3.50=350, GPS=3*80=240, Base=3*650=1950 -> Total=R2,540)",
          "inputs": {
            "txtDays": "3",
            "txtKms": "550",
            "rdoSedan": false,
            "rdoSuv": true,
            "rdoBakkie": false,
            "chkGps": true
          },
          "expected": {
            "lblTotalDue": "2540"
          }
        }
      ]
    },
    "scenario_tuition": {
      "id": "scenario_tuition",
      "title": "Scenario 8: Tuition Fee & Bursary Assessment (NWU 2023 Exam)",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "description": "From NWU Dec 2023 Exam Paper 1: Read credit count from txtCredits (int.TryParse). Cost per credit is R850.00. Faculty radio buttons: rdoScience (add R2,500 lab levy), rdoCommerce (add R1,000 IT levy). If chkBursary.Checked is true, read bursary percentage from txtBursaryPercent and deduct from total. Display final net tuition in lblNetTuition formatted with .ToString('C').",
      "controls": [
        "txtCredits",
        "rdoScience",
        "rdoCommerce",
        "chkBursary",
        "txtBursaryPercent",
        "lblNetTuition",
        "btnCompute"
      ],
      "expectedOutputs": [
        "lblNetTuition"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "methodHeader": "private void btnCompute_Click(object sender, EventArgs e)\n{",
      "methodFooter": "}",
      "modelSolution": "int credits;\nif (int.TryParse(txtCredits.Text, out credits) && credits > 0)\n{\n    decimal tuition = credits * 850.0m;\n    if (rdoScience.Checked) tuition += 2500m;\n    else if (rdoCommerce.Checked) tuition += 1000m;\n\n    if (chkBursary.Checked)\n    {\n        decimal bursaryPct;\n        if (decimal.TryParse(txtBursaryPercent.Text, out bursaryPct) && bursaryPct > 0)\n        {\n            tuition -= tuition * (bursaryPct / 100.0m);\n        }\n    }\n    lblNetTuition.Text = tuition.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Enter valid positive credit count.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "Science 10 Credits, No Bursary (10*850 + 2500 = R11,000)",
          "inputs": {
            "txtCredits": "10",
            "rdoScience": true,
            "rdoCommerce": false,
            "chkBursary": false,
            "txtBursaryPercent": "0"
          },
          "expected": {
            "lblNetTuition": "11000"
          }
        },
        {
          "name": "Commerce 10 Credits, 50% Bursary ((8500 + 1000) * 0.5 = R4,750)",
          "inputs": {
            "txtCredits": "10",
            "rdoScience": false,
            "rdoCommerce": true,
            "chkBursary": true,
            "txtBursaryPercent": "50"
          },
          "expected": {
            "lblNetTuition": "4750"
          }
        }
      ]
    }
  },
  "questions": [
    {
      "id": "q_su7_001",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which of the following is NOT one of Shneiderman's 5 measurable human factors / usability goals?",
      "title": "Which of the following is NOT one of Shneiderman's 5 measurable human factors / usability goals?",
      "options": [
        "Time to learn",
        "Speed of performance",
        "Hardware manufacturing cost",
        "Rate of errors by users",
        "Subjective satisfaction"
      ],
      "opts": [
        "Time to learn",
        "Speed of performance",
        "Hardware manufacturing cost",
        "Rate of errors by users",
        "Subjective satisfaction"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The 5 measurable usability goals are: 1. Time to learn, 2. Speed of performance, 3. Rate of errors by users, 4. Retention over time, and 5. Subjective satisfaction. Hardware manufacturing cost is an engineering/financial metric.",
      "explanation": "The 5 measurable usability goals are: 1. Time to learn, 2. Speed of performance, 3. Rate of errors by users, 4. Retention over time, and 5. Subjective satisfaction. Hardware manufacturing cost is an engineering/financial metric.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_002",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which usability measure evaluates how long users remember how to carry out specific interface tasks after an extended period of non-use?",
      "title": "Which usability measure evaluates how long users remember how to carry out specific interface tasks after an extended period of non-use?",
      "options": [
        "Speed of performance",
        "Retention over time",
        "Time to learn",
        "Universal usability"
      ],
      "opts": [
        "Speed of performance",
        "Retention over time",
        "Time to learn",
        "Universal usability"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Retention over time measures how well users maintain their operational knowledge of the interface after days, weeks, or months without using the system.",
      "explanation": "Retention over time measures how well users maintain their operational knowledge of the interface after days, weeks, or months without using the system.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_003",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In life-critical systems (e.g., nuclear power plants, flight traffic control, intensive care monitors), which usability goal is prioritized above all others?",
      "title": "In life-critical systems (e.g., nuclear power plants, flight traffic control, intensive care monitors), which usability goal is prioritized above all others?",
      "options": [
        "Subjective satisfaction",
        "Zero-error rate and high reliability",
        "Playfulness and aesthetic appeal",
        "Low training cost"
      ],
      "opts": [
        "Subjective satisfaction",
        "Zero-error rate and high reliability",
        "Playfulness and aesthetic appeal",
        "Low training cost"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "For life-critical systems, high reliability and zero/near-zero error rates are supreme because human lives depend on system accuracy and fault prevention.",
      "explanation": "For life-critical systems, high reliability and zero/near-zero error rates are supreme because human lives depend on system accuracy and fault prevention.",
      "provenance": "Shneiderman 5th Ed §1.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_004",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which usability motivation category applies to software used in offices, banking, and e-commerce where operator speed, cost-effectiveness, and ease of learning drive business profits?",
      "title": "Which usability motivation category applies to software used in offices, banking, and e-commerce where operator speed, cost-effectiveness, and ease of learning drive business profits?",
      "options": [
        "Life-critical systems",
        "Industrial and commercial uses",
        "Exploratory and creative uses",
        "Socio-technical systems"
      ],
      "opts": [
        "Life-critical systems",
        "Industrial and commercial uses",
        "Exploratory and creative uses",
        "Socio-technical systems"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Industrial and commercial systems focus on reducing operator transaction time, lowering training costs, and speeding up repetitive data entry tasks.",
      "explanation": "Industrial and commercial systems focus on reducing operator transaction time, lowering training costs, and speeding up repetitive data entry tasks.",
      "provenance": "Shneiderman 5th Ed §1.3.2",
      "marks": 2
    },
    {
      "id": "q_su7_005",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What does the concept of 'Universal Usability' mandate for interface developers?",
      "title": "What does the concept of 'Universal Usability' mandate for interface developers?",
      "options": [
        "Creating a single interface designed only for high-end PCs",
        "Accommodating diversity in user physical abilities, cognitive skills, cultural backgrounds, and hardware platforms",
        "Forcing all users to learn command-line syntax",
        "Eliminating all graphical controls"
      ],
      "opts": [
        "Creating a single interface designed only for high-end PCs",
        "Accommodating diversity in user physical abilities, cognitive skills, cultural backgrounds, and hardware platforms",
        "Forcing all users to learn command-line syntax",
        "Eliminating all graphical controls"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Universal usability means designing systems that can be successfully used by a broad spectrum of human users (including elderly, children, disabled) across diverse hardware.",
      "explanation": "Universal usability means designing systems that can be successfully used by a broad spectrum of human users (including elderly, children, disabled) across diverse hardware.",
      "provenance": "Shneiderman 5th Ed §1.4",
      "marks": 2
    },
    {
      "id": "q_su7_006",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "According to Shneiderman's 8 Golden Rules, why is 'Consistency' considered the first and most fundamental rule?",
      "title": "According to Shneiderman's 8 Golden Rules, why is 'Consistency' considered the first and most fundamental rule?",
      "options": [
        "It requires all buttons to be bright red",
        "Consistent terminology, color schemes, layouts, and input patterns enable users to transfer learned knowledge effortlessly",
        "It allows developers to copy code without thinking",
        "It eliminates the need for testing"
      ],
      "opts": [
        "It requires all buttons to be bright red",
        "Consistent terminology, color schemes, layouts, and input patterns enable users to transfer learned knowledge effortlessly",
        "It allows developers to copy code without thinking",
        "It eliminates the need for testing"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Rule 1: Strive for consistency. Consistent sequences of actions, identical terminology in prompts/menus, and consistent fonts and colors reduce cognitive load.",
      "explanation": "Rule 1: Strive for consistency. Consistent sequences of actions, identical terminology in prompts/menus, and consistent fonts and colors reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_007",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "A Visual C# form disables the 'Submit' button until all required textboxes contain valid data. Which of Shneiderman's 8 Golden Rules is best illustrated by this design?",
      "title": "A Visual C# form disables the 'Submit' button until all required textboxes contain valid data. Which of Shneiderman's 8 Golden Rules is best illustrated by this design?",
      "options": [
        "Support internal locus of control",
        "Prevent errors",
        "Reduce short-term memory load",
        "Permit easy reversal of actions"
      ],
      "opts": [
        "Support internal locus of control",
        "Prevent errors",
        "Reduce short-term memory load",
        "Permit easy reversal of actions"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Rule 5: Prevent errors. Graying out or disabling buttons that cannot be legally clicked prevents users from making fatal input errors before they happen.",
      "explanation": "Rule 5: Prevent errors. Graying out or disabling buttons that cannot be legally clicked prevents users from making fatal input errors before they happen.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_008",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Displaying a confirmation dialog reading 'Transaction R1,500.00 completed successfully. Reference: #8829' satisfies which of Shneiderman's Golden Rules?",
      "title": "Displaying a confirmation dialog reading 'Transaction R1,500.00 completed successfully. Reference: #8829' satisfies which of Shneiderman's Golden Rules?",
      "options": [
        "Design dialogs to yield closure",
        "Strive for consistency",
        "Cater to universal usability",
        "Reduce short-term memory load"
      ],
      "opts": [
        "Design dialogs to yield closure",
        "Strive for consistency",
        "Cater to universal usability",
        "Reduce short-term memory load"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Rule 4: Design dialogs to yield closure. Sequences of action should have a beginning, middle, and end, with informative feedback indicating task completion so users feel closure.",
      "explanation": "Rule 4: Design dialogs to yield closure. Sequences of action should have a beginning, middle, and end, with informative feedback indicating task completion so users feel closure.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_009",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Providing an 'Undo' button or a 'Clear / Reset' button in a Visual C# Windows Form directly satisfies which Golden Rule?",
      "title": "Providing an 'Undo' button or a 'Clear / Reset' button in a Visual C# Windows Form directly satisfies which Golden Rule?",
      "options": [
        "Permit easy reversal of actions",
        "Strive for consistency",
        "Reduce short-term memory load",
        "Offer informative feedback"
      ],
      "opts": [
        "Permit easy reversal of actions",
        "Strive for consistency",
        "Reduce short-term memory load",
        "Offer informative feedback"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Rule 6: Permit easy reversal of actions. When users know errors can be undone, it relieves anxiety and encourages exploration of unfamiliar options.",
      "explanation": "Rule 6: Permit easy reversal of actions. When users know errors can be undone, it relieves anxiety and encourages exploration of unfamiliar options.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_010",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What is the psychological rationale behind Rule 8: 'Reduce short-term memory load'?",
      "title": "What is the psychological rationale behind Rule 8: 'Reduce short-term memory load'?",
      "options": [
        "Human short-term memory is virtually limitless",
        "Humans can only hold approximately 7 ± 2 chunks of information in working memory, so interfaces should keep essential data visible",
        "Users prefer to memorize long hexadecimal account numbers",
        "It allows developers to build smaller forms"
      ],
      "opts": [
        "Human short-term memory is virtually limitless",
        "Humans can only hold approximately 7 ± 2 chunks of information in working memory, so interfaces should keep essential data visible",
        "Users prefer to memorize long hexadecimal account numbers",
        "It allows developers to build smaller forms"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Rule 8 is grounded in Miller's Law (7 ± 2 chunks). Interfaces must avoid requiring users to remember numbers or codes from one screen to the next.",
      "explanation": "Rule 8 is grounded in Miller's Law (7 ± 2 chunks). Interfaces must avoid requiring users to remember numbers or codes from one screen to the next.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_011",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Don Norman's Action Cycle, what is the 'Gulf of Execution'?",
      "title": "In Don Norman's Action Cycle, what is the 'Gulf of Execution'?",
      "options": [
        "The difference between the user's intended goal and the physical actions the system allows them to perform",
        "The time required to compile C# code",
        "The distance between the monitor and the user's eyes",
        "The delay in internet transmission"
      ],
      "opts": [
        "The difference between the user's intended goal and the physical actions the system allows them to perform",
        "The time required to compile C# code",
        "The distance between the monitor and the user's eyes",
        "The delay in internet transmission"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Gulf of Execution is the psychological gap between what a user wants to achieve and the physical input mechanisms the interface provides to accomplish it.",
      "explanation": "The Gulf of Execution is the psychological gap between what a user wants to achieve and the physical input mechanisms the interface provides to accomplish it.",
      "provenance": "Shneiderman 5th Ed §2.2 / Norman",
      "marks": 2
    },
    {
      "id": "q_su7_012",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Don Norman's Action Cycle, what is the 'Gulf of Evaluation'?",
      "title": "In Don Norman's Action Cycle, what is the 'Gulf of Evaluation'?",
      "options": [
        "The cost of purchasing software",
        "The difficulty the user experiences in perceiving and interpreting the system's state to determine if their goal was met",
        "The time taken to grade an exam",
        "The number of lines of code in Form1.cs"
      ],
      "opts": [
        "The cost of purchasing software",
        "The difficulty the user experiences in perceiving and interpreting the system's state to determine if their goal was met",
        "The time taken to grade an exam",
        "The number of lines of code in Form1.cs"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The Gulf of Evaluation is the difficulty of assessing the state of the system and deciding whether the intended goal was achieved through the feedback provided.",
      "explanation": "The Gulf of Evaluation is the difficulty of assessing the state of the system and deciding whether the intended goal was achieved through the feedback provided.",
      "provenance": "Shneiderman 5th Ed §2.2 / Norman",
      "marks": 2
    },
    {
      "id": "q_su7_013",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which of the following interface features best supports 'Internal Locus of Control' (Rule 7)?",
      "title": "Which of the following interface features best supports 'Internal Locus of Control' (Rule 7)?",
      "options": [
        "Making the user the initiator of actions rather than surprising them with unexpected system actions or changes",
        "Randomly playing loud sound effects",
        "Automatically closing forms without asking",
        "Forcing the user to wait for arbitrary background delays"
      ],
      "opts": [
        "Making the user the initiator of actions rather than surprising them with unexpected system actions or changes",
        "Randomly playing loud sound effects",
        "Automatically closing forms without asking",
        "Forcing the user to wait for arbitrary background delays"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Rule 7: Support internal locus of control. Experienced operators strongly desire the feeling that they are in charge of the interface and that the system responds to their commands.",
      "explanation": "Rule 7: Support internal locus of control. Experienced operators strongly desire the feeling that they are in charge of the interface and that the system responds to their commands.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_014",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Why should Visual C# desktop applications provide keyboard shortcuts (access keys such as &File or Alt+C) and TabIndex navigation?",
      "title": "Why should Visual C# desktop applications provide keyboard shortcuts (access keys such as &File or Alt+C) and TabIndex navigation?",
      "options": [
        "It is required by the Windows operating system kernel",
        "It caters to universal usability by accommodating expert power users and individuals who cannot use a mouse",
        "It reduces the size of the compiled .exe file",
        "It prevents syntax errors in event handlers"
      ],
      "opts": [
        "It is required by the Windows operating system kernel",
        "It caters to universal usability by accommodating expert power users and individuals who cannot use a mouse",
        "It reduces the size of the compiled .exe file",
        "It prevents syntax errors in event handlers"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Rule 2: Cater to universal usability. Keyboard shortcuts allow expert power users to execute commands rapidly and support users with motor impairments.",
      "explanation": "Rule 2: Cater to universal usability. Keyboard shortcuts allow expert power users to execute commands rapidly and support users with motor impairments.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_015",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "When a user enters an invalid number in a TextBox, which feedback mechanism is most effective according to HCI error handling principles?",
      "title": "When a user enters an invalid number in a TextBox, which feedback mechanism is most effective according to HCI error handling principles?",
      "options": [
        "Crashing the application immediately with an unhandled exception",
        "Displaying a polite, constructive error message explaining the valid range and placing focus back on the offending control",
        "Silently ignoring the error without notifying the user",
        "Sounding a loud screeching alarm"
      ],
      "opts": [
        "Crashing the application immediately with an unhandled exception",
        "Displaying a polite, constructive error message explaining the valid range and placing focus back on the offending control",
        "Silently ignoring the error without notifying the user",
        "Sounding a loud screeching alarm"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "HCI principles dictate that error messages must be specific, polite, informative, and provide clear instructions on how to correct the problem.",
      "explanation": "HCI principles dictate that error messages must be specific, polite, informative, and provide clear instructions on how to correct the problem.",
      "provenance": "Shneiderman 5th Ed §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_016",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What usability motivation characterizes mobile gaming, interactive entertainment, and personal digital assistants?",
      "title": "What usability motivation characterizes mobile gaming, interactive entertainment, and personal digital assistants?",
      "options": [
        "Office and home entertainment uses",
        "Life-critical systems",
        "Industrial process control",
        "Socio-technical military infrastructure"
      ],
      "opts": [
        "Office and home entertainment uses",
        "Life-critical systems",
        "Industrial process control",
        "Socio-technical military infrastructure"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Home, entertainment, and consumer systems prioritize user engagement, ease of adoption, and subjective enjoyment.",
      "explanation": "Home, entertainment, and consumer systems prioritize user engagement, ease of adoption, and subjective enjoyment.",
      "provenance": "Shneiderman §1.3.3",
      "marks": 2
    },
    {
      "id": "q_su7_017",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which design theory analyzes human task performance using Goals, Operators, Methods, and Selection rules?",
      "title": "Which design theory analyzes human task performance using Goals, Operators, Methods, and Selection rules?",
      "options": [
        "GOMS Model (Card, Moran & Newell)",
        "Relational Database Theory",
        "Ohm's Law",
        "Boolean Logic Theory"
      ],
      "opts": [
        "GOMS Model (Card, Moran & Newell)",
        "Relational Database Theory",
        "Ohm's Law",
        "Boolean Logic Theory"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The GOMS model is an engineering model of human cognitive performance used to predict execution times.",
      "explanation": "The GOMS model is an engineering model of human cognitive performance used to predict execution times.",
      "provenance": "Shneiderman §2.2.3",
      "marks": 2
    },
    {
      "id": "q_su7_018",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "When designing for elderly users, which interface adjustment is most critical according to Universal Usability guidelines?",
      "title": "When designing for elderly users, which interface adjustment is most critical according to Universal Usability guidelines?",
      "options": [
        "Smaller fonts and low-contrast grayscale colors",
        "Higher contrast ratios, adjustable font sizes, and larger click targets",
        "Faster animation speeds",
        "Removing all button labels"
      ],
      "opts": [
        "Smaller fonts and low-contrast grayscale colors",
        "Higher contrast ratios, adjustable font sizes, and larger click targets",
        "Faster animation speeds",
        "Removing all button labels"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Aging users experience reduced visual acuity, motor precision, and contrast sensitivity. Larger targets and high contrast accommodate these changes.",
      "explanation": "Aging users experience reduced visual acuity, motor precision, and contrast sensitivity. Larger targets and high contrast accommodate these changes.",
      "provenance": "Shneiderman §1.4.1",
      "marks": 2
    },
    {
      "id": "q_su7_019",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What does Miller's magical number 7 ± 2 describe in cognitive psychology?",
      "title": "What does Miller's magical number 7 ± 2 describe in cognitive psychology?",
      "options": [
        "The maximum number of forms allowed in a C# project",
        "The working capacity of human short-term memory",
        "The number of buttons on a mouse",
        "The recommended hours of sleep before an exam"
      ],
      "opts": [
        "The maximum number of forms allowed in a C# project",
        "The working capacity of human short-term memory",
        "The number of buttons on a mouse",
        "The recommended hours of sleep before an exam"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "George Miller (1956) established that working memory holds roughly 5 to 9 chunks of information simultaneously.",
      "explanation": "George Miller (1956) established that working memory holds roughly 5 to 9 chunks of information simultaneously.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_020",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which stage in Norman's 7 Stages of Action immediately precedes physical execution?",
      "title": "Which stage in Norman's 7 Stages of Action immediately precedes physical execution?",
      "options": [
        "Action specification",
        "Evaluation of outcome",
        "Perception of state",
        "Forming the goal"
      ],
      "opts": [
        "Action specification",
        "Evaluation of outcome",
        "Perception of state",
        "Forming the goal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The sequence is: Goal -> Intention -> Action specification -> Execution.",
      "explanation": "The sequence is: Goal -> Intention -> Action specification -> Execution.",
      "provenance": "Shneiderman §2.2.1",
      "marks": 2
    },
    {
      "id": "q_su7_021",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In visual design, what does 'affordance' refer to?",
      "title": "In visual design, what does 'affordance' refer to?",
      "options": [
        "The price of the software license",
        "The perceptual cues that indicate to a user how an object or control can be interacted with",
        "The memory consumption of a bitmap",
        "The download speed of the application"
      ],
      "opts": [
        "The price of the software license",
        "The perceptual cues that indicate to a user how an object or control can be interacted with",
        "The memory consumption of a bitmap",
        "The download speed of the application"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Affordance (Norman) refers to the perceived and actual properties of an object that suggest how it should be used (e.g. 3D button invites clicking).",
      "explanation": "Affordance (Norman) refers to the perceived and actual properties of an object that suggest how it should be used (e.g. 3D button invites clicking).",
      "provenance": "Shneiderman §2.2",
      "marks": 2
    },
    {
      "id": "q_su7_022",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Why is informative feedback (Rule 3) crucial when a long database query or calculation is executing?",
      "title": "Why is informative feedback (Rule 3) crucial when a long database query or calculation is executing?",
      "options": [
        "It prevents the user from assuming the application has frozen or crashed",
        "It speeds up CPU clock cycles",
        "It clears the RAM cache",
        "It generates automatic unit tests"
      ],
      "opts": [
        "It prevents the user from assuming the application has frozen or crashed",
        "It speeds up CPU clock cycles",
        "It clears the RAM cache",
        "It generates automatic unit tests"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Rule 3: Offer informative feedback. For prolonged tasks, progress bars or hour-glass cursors reassure users that processing is continuing normally.",
      "explanation": "Rule 3: Offer informative feedback. For prolonged tasks, progress bars or hour-glass cursors reassure users that processing is continuing normally.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_023",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which of the following describes an example of striving for consistency in button placement across multiple Windows Forms?",
      "title": "Which of the following describes an example of striving for consistency in button placement across multiple Windows Forms?",
      "options": [
        "Placing the 'Close' button at the bottom-right of every dialog form",
        "Placing the Close button randomly on each screen",
        "Changing button colors from purple to green on every tab",
        "Using different font families on each button"
      ],
      "opts": [
        "Placing the 'Close' button at the bottom-right of every dialog form",
        "Placing the Close button randomly on each screen",
        "Changing button colors from purple to green on every tab",
        "Using different font families on each button"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Consistency in spatial layout helps users build muscle memory and predictable expectations.",
      "explanation": "Consistency in spatial layout helps users build muscle memory and predictable expectations.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_024",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What is the primary danger of violating Rule 7 (Internal Locus of Control) by showing frequent unexpected modal pop-ups?",
      "title": "What is the primary danger of violating Rule 7 (Internal Locus of Control) by showing frequent unexpected modal pop-ups?",
      "options": [
        "Users experience frustration, feeling controlled by the computer rather than being the master of the tool",
        "The C# compiler will refuse to build the project",
        "The hard disk will run out of space",
        "Variables will lose their values"
      ],
      "opts": [
        "Users experience frustration, feeling controlled by the computer rather than being the master of the tool",
        "The C# compiler will refuse to build the project",
        "The hard disk will run out of space",
        "Variables will lose their values"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "When an interface is unpredictable or takes initiative without user consent, users feel anxious and dissatisfied.",
      "explanation": "When an interface is unpredictable or takes initiative without user consent, users feel anxious and dissatisfied.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_025",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which Golden Rule directly justifies why a word processor asks 'Do you want to save changes before closing?' when exiting?",
      "title": "Which Golden Rule directly justifies why a word processor asks 'Do you want to save changes before closing?' when exiting?",
      "options": [
        "Permit easy reversal of actions & Error prevention",
        "Strive for consistency only",
        "Reduce short-term memory load only",
        "Cater to universal usability only"
      ],
      "opts": [
        "Permit easy reversal of actions & Error prevention",
        "Strive for consistency only",
        "Reduce short-term memory load only",
        "Cater to universal usability only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Confirmation dialogs on destructive actions prevent accidental data loss and allow users to reverse unintentional exit commands.",
      "explanation": "Confirmation dialogs on destructive actions prevent accidental data loss and allow users to reverse unintentional exit commands.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_026",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #16: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #16: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_027",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #17: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #17: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_028",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #18: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #18: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_029",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #19: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #19: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_030",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #20: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #20: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_031",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #21: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #21: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_032",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #22: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #22: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_033",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #23: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #23: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_034",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #24: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #24: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_035",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #25: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #25: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_036",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #26: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #26: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_037",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #27: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #27: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_038",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #28: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #28: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_039",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #29: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #29: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_040",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #30: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #30: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_041",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #31: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #31: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_042",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #32: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #32: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_043",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #33: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #33: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_044",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #34: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #34: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 1",
      "marks": 2
    },
    {
      "id": "q_su7_045",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #35: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #35: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_046",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #36: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #36: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_047",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #37: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #37: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_048",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #38: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #38: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_049",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #39: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #39: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_050",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #40: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #40: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_051",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #41: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #41: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_052",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #42: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #42: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_053",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #43: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #43: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_054",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #44: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #44: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_055",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #45: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #45: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_056",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #46: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #46: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_057",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #47: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #47: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_058",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #48: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #48: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_059",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #49: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #49: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_060",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #50: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #50: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_061",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #51: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "title": "HCI Applied Principle #51: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 2?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_062",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #52: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "title": "HCI Applied Principle #52: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 3?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_063",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #53: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "title": "HCI Applied Principle #53: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 4?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_064",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #54: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "title": "HCI Applied Principle #54: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 5?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su7_065",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "HCI Applied Principle #55: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "title": "HCI Applied Principle #55: When evaluating interface usability in CMPG122 GUI forms, which guideline directly impacts measure 1?",
      "options": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "opts": [
        "Consistent visual layout and immediate feedback (Rule 1 & 3)",
        "Complex nested dialogs without keyboard navigation",
        "Unlabeled icon-only buttons with ambiguous meanings",
        "Requiring users to manually calculate VAT in their heads"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "explanation": "Measurable usability depends directly on applying Shneiderman's Golden Rules. Clear labels, consistent layouts, and offloading math to C# code reduce cognitive load.",
      "provenance": "Shneiderman 5th Ed Ch 2",
      "marks": 2
    },
    {
      "id": "q_su1_066",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which window in Visual Studio displays a hierarchical list of all files, forms, and references included in the current project?",
      "title": "Which window in Visual Studio displays a hierarchical list of all files, forms, and references included in the current project?",
      "options": [
        "Properties Window",
        "Solution Explorer",
        "Toolbox",
        "Error List Window"
      ],
      "opts": [
        "Properties Window",
        "Solution Explorer",
        "Toolbox",
        "Error List Window"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The Solution Explorer displays the hierarchical tree of project files (e.g. Form1.cs, Form1.Designer.cs, Program.cs).",
      "explanation": "The Solution Explorer displays the hierarchical tree of project files (e.g. Form1.cs, Form1.Designer.cs, Program.cs).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_067",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which window in the Visual Studio IDE allows you to examine and change the design-time properties of a selected form or control?",
      "title": "Which window in the Visual Studio IDE allows you to examine and change the design-time properties of a selected form or control?",
      "options": [
        "Properties Window",
        "Solution Explorer",
        "Output Window",
        "Server Explorer"
      ],
      "opts": [
        "Properties Window",
        "Solution Explorer",
        "Output Window",
        "Server Explorer"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Properties Window lists properties (Text, Name, Size, BackColor, etc.) of the currently selected component.",
      "explanation": "The Properties Window lists properties (Text, Name, Size, BackColor, etc.) of the currently selected component.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_068",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which Visual Studio window contains draggable GUI components such as Buttons, Labels, and TextBoxes?",
      "title": "Which Visual Studio window contains draggable GUI components such as Buttons, Labels, and TextBoxes?",
      "options": [
        "Toolbox",
        "Component Tray",
        "Error List",
        "Solution Explorer"
      ],
      "opts": [
        "Toolbox",
        "Component Tray",
        "Error List",
        "Solution Explorer"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Toolbox contains tabs of controls and components that can be dragged and dropped onto the Windows Form Designer.",
      "explanation": "The Toolbox contains tabs of controls and components that can be dragged and dropped onto the Windows Form Designer.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_069",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What is the correct chronological sequence of the Gaddis 6-Phase Program Development Process?",
      "title": "What is the correct chronological sequence of the Gaddis 6-Phase Program Development Process?",
      "options": [
        "1. Understand Purpose -> 2. Design GUI -> 3. Design Logic -> 4. Write Code -> 5. Correct Syntax Errors -> 6. Test & Correct Logic Errors",
        "1. Design GUI -> 2. Write Code -> 3. Understand Purpose -> 4. Design Logic -> 5. Correct Syntax -> 6. Test",
        "1. Write Code -> 2. Design GUI -> 3. Correct Syntax -> 4. Design Logic -> 5. Understand Purpose -> 6. Test",
        "1. Test -> 2. Correct Syntax -> 3. Write Code -> 4. Design Logic -> 5. Design GUI -> 6. Understand Purpose"
      ],
      "opts": [
        "1. Understand Purpose -> 2. Design GUI -> 3. Design Logic -> 4. Write Code -> 5. Correct Syntax Errors -> 6. Test & Correct Logic Errors",
        "1. Design GUI -> 2. Write Code -> 3. Understand Purpose -> 4. Design Logic -> 5. Correct Syntax -> 6. Test",
        "1. Write Code -> 2. Design GUI -> 3. Correct Syntax -> 4. Design Logic -> 5. Understand Purpose -> 6. Test",
        "1. Test -> 2. Correct Syntax -> 3. Write Code -> 4. Design Logic -> 5. Design GUI -> 6. Understand Purpose"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Gaddis specifies 6 distinct phases: Understand Purpose -> Design GUI -> Design Logic -> Write Code -> Correct Syntax Errors -> Test and Correct Logic Errors.",
      "explanation": "Gaddis specifies 6 distinct phases: Understand Purpose -> Design GUI -> Design Logic -> Write Code -> Correct Syntax Errors -> Test and Correct Logic Errors.",
      "provenance": "Gaddis 4th Ed §1.5",
      "marks": 2
    },
    {
      "id": "q_su1_070",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which control property determines the text caption visible to the user in a Form's title bar or on a Button's face?",
      "title": "Which control property determines the text caption visible to the user in a Form's title bar or on a Button's face?",
      "options": [
        "Name",
        "Text",
        "Tag",
        "Caption"
      ],
      "opts": [
        "Name",
        "Text",
        "Tag",
        "Caption"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The 'Text' property controls the display string on controls and the form's title bar caption. The 'Name' property is the code identifier.",
      "explanation": "The 'Text' property controls the display string on controls and the form's title bar caption. The 'Name' property is the code identifier.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_071",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "According to NWU CMPG122 Hungarian naming standards, what prefix must be assigned to a button control?",
      "title": "According to NWU CMPG122 Hungarian naming standards, what prefix must be assigned to a button control?",
      "options": [
        "btn",
        "btn_",
        "b",
        "button"
      ],
      "opts": [
        "btn",
        "btn_",
        "b",
        "button"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The official NWU CMPG122 naming standard prescribes the three-letter prefix 'btn' (e.g. btnCalculate, btnExit).",
      "explanation": "The official NWU CMPG122 naming standard prescribes the three-letter prefix 'btn' (e.g. btnCalculate, btnExit).",
      "provenance": "NWU Naming Conventions Handout",
      "marks": 2
    },
    {
      "id": "q_su1_072",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What statement written inside an Exit button's Click event handler cleanly closes the active Windows Form?",
      "title": "What statement written inside an Exit button's Click event handler cleanly closes the active Windows Form?",
      "options": [
        "this.Close();",
        "Application.Halt();",
        "Close.Form();",
        "Form.End();"
      ],
      "opts": [
        "this.Close();",
        "Application.Halt();",
        "Close.Form();",
        "Form.End();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'this.Close();' executes the Close method on the current Form instance, terminating the form.",
      "explanation": "'this.Close();' executes the Close method on the current Form instance, terminating the form.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_073",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which PictureBox SizeMode property resizes the image proportionally to fit within the PictureBox bounds without distorting its aspect ratio?",
      "title": "Which PictureBox SizeMode property resizes the image proportionally to fit within the PictureBox bounds without distorting its aspect ratio?",
      "options": [
        "StretchImage",
        "Zoom",
        "Normal",
        "CenterImage"
      ],
      "opts": [
        "StretchImage",
        "Zoom",
        "Normal",
        "CenterImage"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Zoom proportionally scales the image up or down to fit inside the PictureBox while preserving its aspect ratio. StretchImage distorts the ratio.",
      "explanation": "Zoom proportionally scales the image up or down to fit inside the PictureBox while preserving its aspect ratio. StretchImage distorts the ratio.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_074",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which PictureBox SizeMode property value automatically resizes the PictureBox control itself to match the physical pixel dimensions of the loaded image?",
      "title": "Which PictureBox SizeMode property value automatically resizes the PictureBox control itself to match the physical pixel dimensions of the loaded image?",
      "options": [
        "AutoSize",
        "Normal",
        "StretchImage",
        "Zoom"
      ],
      "opts": [
        "AutoSize",
        "Normal",
        "StretchImage",
        "Zoom"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "AutoSize causes the control itself to resize to match the loaded image dimensions.",
      "explanation": "AutoSize causes the control itself to resize to match the loaded image dimensions.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_075",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What symbol is used in Visual C# to write a single-line comment that is ignored by the compiler?",
      "title": "What symbol is used in Visual C# to write a single-line comment that is ignored by the compiler?",
      "options": [
        "//",
        "/*",
        "#",
        "--"
      ],
      "opts": [
        "//",
        "/*",
        "#",
        "--"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double forward slashes '//' denote a single-line comment in C#. Multi-line comments use '/* ... */'.",
      "explanation": "Double forward slashes '//' denote a single-line comment in C#. Multi-line comments use '/* ... */'.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_076",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What type of error is detected by the Visual C# compiler when code violates grammatical language rules (such as a missing semicolon)?",
      "title": "What type of error is detected by the Visual C# compiler when code violates grammatical language rules (such as a missing semicolon)?",
      "options": [
        "Syntax error (compilation error)",
        "Logic error",
        "Runtime exception",
        "Hardware failure"
      ],
      "opts": [
        "Syntax error (compilation error)",
        "Logic error",
        "Runtime exception",
        "Hardware failure"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Syntax errors violate C# grammar/spelling rules and are caught at compile time before execution begins.",
      "explanation": "Syntax errors violate C# grammar/spelling rules and are caught at compile time before execution begins.",
      "provenance": "Gaddis 4th Ed §1.5",
      "marks": 2
    },
    {
      "id": "q_su1_077",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "If a program compiles cleanly and runs, but outputs 'Gross Pay = R 0.00' instead of 'R 2,000.00' due to a flawed calculation formula, what type of error is this?",
      "title": "If a program compiles cleanly and runs, but outputs 'Gross Pay = R 0.00' instead of 'R 2,000.00' due to a flawed calculation formula, what type of error is this?",
      "options": [
        "Logic error",
        "Syntax error",
        "Compilation error",
        "Lexical token error"
      ],
      "opts": [
        "Logic error",
        "Syntax error",
        "Compilation error",
        "Lexical token error"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A logic error produces incorrect results despite syntactically valid code and clean compilation.",
      "explanation": "A logic error produces incorrect results despite syntactically valid code and clean compilation.",
      "provenance": "Gaddis 4th Ed §1.5",
      "marks": 2
    },
    {
      "id": "q_su1_078",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Where are non-visual components (such as Timers, OpenFileDialog, and SaveFileDialog) placed when added to a form in the Visual Studio Designer?",
      "title": "Where are non-visual components (such as Timers, OpenFileDialog, and SaveFileDialog) placed when added to a form in the Visual Studio Designer?",
      "options": [
        "In the Component Tray at the bottom of the Designer window",
        "Directly on top of the Form title bar",
        "Inside the Solution Explorer toolbar",
        "In the Properties window header"
      ],
      "opts": [
        "In the Component Tray at the bottom of the Designer window",
        "Directly on top of the Form title bar",
        "Inside the Solution Explorer toolbar",
        "In the Properties window header"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Non-visual controls do not have a visual form presence and reside in the Component Tray below the form.",
      "explanation": "Non-visual controls do not have a visual form presence and reside in the Component Tray below the form.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_079",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which property of a Label control must be set to 'false' if you wish to manually resize its width and height using drag handles on the form?",
      "title": "Which property of a Label control must be set to 'false' if you wish to manually resize its width and height using drag handles on the form?",
      "options": [
        "AutoSize",
        "Enabled",
        "Visible",
        "BorderStyle"
      ],
      "opts": [
        "AutoSize",
        "Enabled",
        "Visible",
        "BorderStyle"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "When AutoSize is true (default for labels), the label size fits its text automatically. Setting AutoSize = false allows manual bounding box sizing.",
      "explanation": "When AutoSize is true (default for labels), the label size fits its text automatically. Setting AutoSize = false allows manual bounding box sizing.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_080",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What NWU Hungarian control prefix is prescribed for a TextBox control?",
      "title": "What NWU Hungarian control prefix is prescribed for a TextBox control?",
      "options": [
        "txt",
        "tb",
        "tBox",
        "text"
      ],
      "opts": [
        "txt",
        "tb",
        "tBox",
        "text"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The official NWU prefix for TextBox controls is 'txt' (e.g. txtHours, txtPrice, txtSurname).",
      "explanation": "The official NWU prefix for TextBox controls is 'txt' (e.g. txtHours, txtPrice, txtSurname).",
      "provenance": "NWU Naming Conventions Handout",
      "marks": 2
    },
    {
      "id": "q_su1_081",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #16: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #16: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_082",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #17: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #17: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_083",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #18: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #18: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_084",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #19: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #19: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_085",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #20: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #20: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_086",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #21: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #21: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_087",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #22: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #22: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_088",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #23: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #23: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_089",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #24: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #24: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_090",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #25: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #25: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_091",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #26: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #26: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_092",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #27: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #27: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_093",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #28: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #28: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_094",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #29: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #29: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_095",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #30: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #30: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_096",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #31: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #31: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_097",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #32: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #32: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_098",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #33: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #33: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_099",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #34: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #34: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_100",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #35: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #35: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_101",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #36: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #36: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_102",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #37: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #37: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_103",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #38: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #38: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_104",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #39: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #39: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_105",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #40: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #40: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_106",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #41: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #41: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_107",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #42: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #42: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_108",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #43: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #43: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_109",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #44: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #44: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_110",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #45: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #45: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_111",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #46: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #46: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_112",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #47: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #47: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_113",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #48: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #48: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_114",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #49: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #49: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_115",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #50: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #50: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_116",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #51: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #51: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_117",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #52: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #52: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_118",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #53: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #53: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_119",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #54: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #54: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_120",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #55: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #55: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_121",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #56: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #56: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_122",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #57: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #57: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_123",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #58: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #58: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_124",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #59: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #59: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_125",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #60: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #60: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_126",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #61: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #61: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_127",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #62: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #62: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_128",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #63: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #63: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_129",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #64: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #64: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_130",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Visual Studio GUI Concept #65: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "title": "Visual Studio GUI Concept #65: In Gaddis Chapter 1, which principle governs Visual C# event handler method generation?",
      "options": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "opts": [
        "Double-clicking a control in the Designer generates its default event handler (e.g. Click) in Form1.cs",
        "Event handlers must be written in assembly language",
        "Controls can never have more than one event",
        "Clicking a button automatically restarts Windows"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "explanation": "Double-clicking a form control in the Visual Studio Designer automatically scaffolds its primary event handler (e.g. private void btn_Click).",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su2_131",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which C# primitive data type is specifically designed for financial and monetary calculations requiring up to 28-29 significant digits of precision without floating-point rounding errors?",
      "title": "Which C# primitive data type is specifically designed for financial and monetary calculations requiring up to 28-29 significant digits of precision without floating-point rounding errors?",
      "options": [
        "decimal",
        "double",
        "float",
        "int"
      ],
      "opts": [
        "decimal",
        "double",
        "float",
        "int"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The 'decimal' type is a 128-bit fixed-point type tailored for monetary calculations to eliminate floating-point representation anomalies.",
      "explanation": "The 'decimal' type is a 128-bit fixed-point type tailored for monetary calculations to eliminate floating-point representation anomalies.",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_132",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What literal suffix must be appended to a real numeric literal in C# to indicate that it is of type decimal?",
      "title": "What literal suffix must be appended to a real numeric literal in C# to indicate that it is of type decimal?",
      "options": [
        "m or M",
        "d or D",
        "f or F",
        "l or L"
      ],
      "opts": [
        "m or M",
        "d or D",
        "f or F",
        "l or L"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Decimal literals require the 'm' or 'M' suffix (e.g. 199.99m, 0.15m). Without a suffix, real numbers default to 'double'.",
      "explanation": "Decimal literals require the 'm' or 'M' suffix (e.g. 199.99m, 0.15m). Without a suffix, real numbers default to 'double'.",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_133",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the result of the integer division expression '7 / 2' in Visual C#?",
      "title": "What is the result of the integer division expression '7 / 2' in Visual C#?",
      "options": [
        "3",
        "3.5",
        "4",
        "3.0"
      ],
      "opts": [
        "3",
        "3.5",
        "4",
        "3.0"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "When both operands in division are integers, C# performs integer division and truncates the fractional part, resulting in 3.",
      "explanation": "When both operands in division are integers, C# performs integer division and truncates the fractional part, resulting in 3.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_134",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "How can you force floating-point division between two integer variables 'int total' and 'int count'?",
      "title": "How can you force floating-point division between two integer variables 'int total' and 'int count'?",
      "options": [
        "(double)total / count",
        "total // count",
        "total / count / 1.0",
        "Convert.ToInt32(total / count)"
      ],
      "opts": [
        "(double)total / count",
        "total // count",
        "total / count / 1.0",
        "Convert.ToInt32(total / count)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Explicitly casting at least one operand to double (e.g. (double)total / count) forces floating-point division.",
      "explanation": "Explicitly casting at least one operand to double (e.g. (double)total / count) forces floating-point division.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_135",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which standard format specifier string passed to .ToString() formats a numeric value as currency (including currency symbol, commas, and two decimal digits)?",
      "title": "Which standard format specifier string passed to .ToString() formats a numeric value as currency (including currency symbol, commas, and two decimal digits)?",
      "options": [
        "\"C\" or \"c\"",
        "\"F\" or \"f\"",
        "\"N\" or \"n\"",
        "\"P\" or \"p\""
      ],
      "opts": [
        "\"C\" or \"c\"",
        "\"F\" or \"f\"",
        "\"N\" or \"n\"",
        "\"P\" or \"p\""
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The \"C\" format specifier formats the number as currency based on the computer's culture settings (e.g. R 1,250.00).",
      "explanation": "The \"C\" format specifier formats the number as currency based on the computer's culture settings (e.g. R 1,250.00).",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_136",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What output is produced by the expression '(0.175).ToString(\"P1\")'?",
      "title": "What output is produced by the expression '(0.175).ToString(\"P1\")'?",
      "options": [
        "\"17.5%\"",
        "\"0.2%\"",
        "\"17.50%\"",
        "\"0.175%\""
      ],
      "opts": [
        "\"17.5%\"",
        "\"0.2%\"",
        "\"17.50%\"",
        "\"0.175%\""
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The \"P\" format specifier multiplies the number by 100, appends '%', and \"P1\" formats with 1 decimal place: 17.5%.",
      "explanation": "The \"P\" format specifier multiplies the number by 100, appends '%', and \"P1\" formats with 1 decimal place: 17.5%.",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_137",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What exception is thrown by 'decimal.Parse(txtInput.Text)' if txtInput contains non-numeric text such as 'abc'?",
      "title": "What exception is thrown by 'decimal.Parse(txtInput.Text)' if txtInput contains non-numeric text such as 'abc'?",
      "options": [
        "FormatException",
        "OverflowException",
        "DivideByZeroException",
        "NullReferenceException"
      ],
      "opts": [
        "FormatException",
        "OverflowException",
        "DivideByZeroException",
        "NullReferenceException"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "FormatException is thrown when the string format does not conform to the expected numeric pattern.",
      "explanation": "FormatException is thrown when the string format does not conform to the expected numeric pattern.",
      "provenance": "Gaddis 4th Ed §3.7",
      "marks": 2
    },
    {
      "id": "q_su2_138",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which keyword is used to declare an identifier whose value is assigned at declaration and cannot be changed throughout execution?",
      "title": "Which keyword is used to declare an identifier whose value is assigned at declaration and cannot be changed throughout execution?",
      "options": [
        "const",
        "readonly",
        "static",
        "fixed"
      ],
      "opts": [
        "const",
        "readonly",
        "static",
        "fixed"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The 'const' keyword creates a named constant whose value is immutable at compile time (e.g. const decimal VAT_RATE = 0.15m;).",
      "explanation": "The 'const' keyword creates a named constant whose value is immutable at compile time (e.g. const decimal VAT_RATE = 0.15m;).",
      "provenance": "Gaddis 4th Ed §3.9",
      "marks": 2
    },
    {
      "id": "q_su2_139",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the primary difference between a 'local variable' and a 'field variable' in a Windows Form?",
      "title": "What is the primary difference between a 'local variable' and a 'field variable' in a Windows Form?",
      "options": [
        "Local variables are declared inside a method and destroyed when it exits; field variables are declared at class level and retain state across multiple button clicks",
        "Local variables can be accessed by all forms, while field variables cannot",
        "Local variables cannot hold decimal numbers",
        "There is no difference; they are synonymous"
      ],
      "opts": [
        "Local variables are declared inside a method and destroyed when it exits; field variables are declared at class level and retain state across multiple button clicks",
        "Local variables can be accessed by all forms, while field variables cannot",
        "Local variables cannot hold decimal numbers",
        "There is no difference; they are synonymous"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Local variables have method scope and lifetime. Field variables have class scope and exist as long as the form instance exists.",
      "explanation": "Local variables have method scope and lifetime. Field variables have class scope and exist as long as the form instance exists.",
      "provenance": "Gaddis 4th Ed §3.8",
      "marks": 2
    },
    {
      "id": "q_su2_140",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which method call shifts keyboard input focus directly to a TextBox named txtHours and selects it?",
      "title": "Which method call shifts keyboard input focus directly to a TextBox named txtHours and selects it?",
      "options": [
        "txtHours.Focus();",
        "txtHours.SelectAll();",
        "txtHours.Active = true;",
        "Focus.Set(txtHours);"
      ],
      "opts": [
        "txtHours.Focus();",
        "txtHours.SelectAll();",
        "txtHours.Active = true;",
        "Focus.Set(txtHours);"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The .Focus() method sets the active keyboard input focus to the specified control.",
      "explanation": "The .Focus() method sets the active keyboard input focus to the specified control.",
      "provenance": "Gaddis 4th Ed §3.10",
      "marks": 2
    },
    {
      "id": "q_su2_141",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which property controls the order in which controls receive focus when the user repeatedly presses the Tab key?",
      "title": "Which property controls the order in which controls receive focus when the user repeatedly presses the Tab key?",
      "options": [
        "TabIndex",
        "TabStop",
        "FocusIndex",
        "OrderIndex"
      ],
      "opts": [
        "TabIndex",
        "TabStop",
        "FocusIndex",
        "OrderIndex"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "TabIndex is an integer specifying the sequential tab order of controls on the form.",
      "explanation": "TabIndex is an integer specifying the sequential tab order of controls on the form.",
      "provenance": "Gaddis 4th Ed §3.11",
      "marks": 2
    },
    {
      "id": "q_su2_142",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "If you have a Label or PictureBox that should NEVER receive keyboard focus during Tab navigation, what property should be set to false?",
      "title": "If you have a Label or PictureBox that should NEVER receive keyboard focus during Tab navigation, what property should be set to false?",
      "options": [
        "TabStop",
        "Enabled",
        "Visible",
        "TabIndex"
      ],
      "opts": [
        "TabStop",
        "Enabled",
        "Visible",
        "TabIndex"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Setting TabStop = false prevents the control from receiving focus via the Tab key.",
      "explanation": "Setting TabStop = false prevents the control from receiving focus via the Tab key.",
      "provenance": "Gaddis 4th Ed §3.11",
      "marks": 2
    },
    {
      "id": "q_su2_143",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which property of a Windows Form designates a button that is automatically clicked when the user presses the Enter key?",
      "title": "Which property of a Windows Form designates a button that is automatically clicked when the user presses the Enter key?",
      "options": [
        "AcceptButton",
        "CancelButton",
        "DefaultButton",
        "EnterButton"
      ],
      "opts": [
        "AcceptButton",
        "CancelButton",
        "DefaultButton",
        "EnterButton"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "AcceptButton specifies the button automatically activated when the Enter key is pressed.",
      "explanation": "AcceptButton specifies the button automatically activated when the Enter key is pressed.",
      "provenance": "Gaddis 4th Ed §3.11",
      "marks": 2
    },
    {
      "id": "q_su2_144",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which property of a Windows Form designates a button that is automatically clicked when the user presses the Escape (Esc) key?",
      "title": "Which property of a Windows Form designates a button that is automatically clicked when the user presses the Escape (Esc) key?",
      "options": [
        "CancelButton",
        "AcceptButton",
        "ExitButton",
        "CloseButton"
      ],
      "opts": [
        "CancelButton",
        "AcceptButton",
        "ExitButton",
        "CloseButton"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "CancelButton specifies the button automatically activated when the Esc key is pressed.",
      "explanation": "CancelButton specifies the button automatically activated when the Esc key is pressed.",
      "provenance": "Gaddis 4th Ed §3.11",
      "marks": 2
    },
    {
      "id": "q_su2_145",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What method of the Math class computes the square root of a double value?",
      "title": "What method of the Math class computes the square root of a double value?",
      "options": [
        "Math.Sqrt()",
        "Math.Pow()",
        "Math.Square()",
        "Math.Root()"
      ],
      "opts": [
        "Math.Sqrt()",
        "Math.Pow()",
        "Math.Square()",
        "Math.Root()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Math.Sqrt(value) returns the positive square root of the specified number.",
      "explanation": "Math.Sqrt(value) returns the positive square root of the specified number.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_146",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #16: In C# arithmetic and conversions, what rule applies to expression evaluation #16?",
      "title": "Data Processing Concept #16: In C# arithmetic and conversions, what rule applies to expression evaluation #16?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_147",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #17: In C# arithmetic and conversions, what rule applies to expression evaluation #17?",
      "title": "Data Processing Concept #17: In C# arithmetic and conversions, what rule applies to expression evaluation #17?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_148",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #18: In C# arithmetic and conversions, what rule applies to expression evaluation #18?",
      "title": "Data Processing Concept #18: In C# arithmetic and conversions, what rule applies to expression evaluation #18?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_149",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #19: In C# arithmetic and conversions, what rule applies to expression evaluation #19?",
      "title": "Data Processing Concept #19: In C# arithmetic and conversions, what rule applies to expression evaluation #19?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_150",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #20: In C# arithmetic and conversions, what rule applies to expression evaluation #20?",
      "title": "Data Processing Concept #20: In C# arithmetic and conversions, what rule applies to expression evaluation #20?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_151",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #21: In C# arithmetic and conversions, what rule applies to expression evaluation #21?",
      "title": "Data Processing Concept #21: In C# arithmetic and conversions, what rule applies to expression evaluation #21?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_152",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #22: In C# arithmetic and conversions, what rule applies to expression evaluation #22?",
      "title": "Data Processing Concept #22: In C# arithmetic and conversions, what rule applies to expression evaluation #22?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_153",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #23: In C# arithmetic and conversions, what rule applies to expression evaluation #23?",
      "title": "Data Processing Concept #23: In C# arithmetic and conversions, what rule applies to expression evaluation #23?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_154",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #24: In C# arithmetic and conversions, what rule applies to expression evaluation #24?",
      "title": "Data Processing Concept #24: In C# arithmetic and conversions, what rule applies to expression evaluation #24?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_155",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #25: In C# arithmetic and conversions, what rule applies to expression evaluation #25?",
      "title": "Data Processing Concept #25: In C# arithmetic and conversions, what rule applies to expression evaluation #25?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_156",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #26: In C# arithmetic and conversions, what rule applies to expression evaluation #26?",
      "title": "Data Processing Concept #26: In C# arithmetic and conversions, what rule applies to expression evaluation #26?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_157",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #27: In C# arithmetic and conversions, what rule applies to expression evaluation #27?",
      "title": "Data Processing Concept #27: In C# arithmetic and conversions, what rule applies to expression evaluation #27?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_158",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #28: In C# arithmetic and conversions, what rule applies to expression evaluation #28?",
      "title": "Data Processing Concept #28: In C# arithmetic and conversions, what rule applies to expression evaluation #28?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_159",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #29: In C# arithmetic and conversions, what rule applies to expression evaluation #29?",
      "title": "Data Processing Concept #29: In C# arithmetic and conversions, what rule applies to expression evaluation #29?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_160",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #30: In C# arithmetic and conversions, what rule applies to expression evaluation #30?",
      "title": "Data Processing Concept #30: In C# arithmetic and conversions, what rule applies to expression evaluation #30?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_161",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #31: In C# arithmetic and conversions, what rule applies to expression evaluation #31?",
      "title": "Data Processing Concept #31: In C# arithmetic and conversions, what rule applies to expression evaluation #31?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_162",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #32: In C# arithmetic and conversions, what rule applies to expression evaluation #32?",
      "title": "Data Processing Concept #32: In C# arithmetic and conversions, what rule applies to expression evaluation #32?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_163",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #33: In C# arithmetic and conversions, what rule applies to expression evaluation #33?",
      "title": "Data Processing Concept #33: In C# arithmetic and conversions, what rule applies to expression evaluation #33?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_164",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #34: In C# arithmetic and conversions, what rule applies to expression evaluation #34?",
      "title": "Data Processing Concept #34: In C# arithmetic and conversions, what rule applies to expression evaluation #34?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_165",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #35: In C# arithmetic and conversions, what rule applies to expression evaluation #35?",
      "title": "Data Processing Concept #35: In C# arithmetic and conversions, what rule applies to expression evaluation #35?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_166",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #36: In C# arithmetic and conversions, what rule applies to expression evaluation #36?",
      "title": "Data Processing Concept #36: In C# arithmetic and conversions, what rule applies to expression evaluation #36?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_167",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #37: In C# arithmetic and conversions, what rule applies to expression evaluation #37?",
      "title": "Data Processing Concept #37: In C# arithmetic and conversions, what rule applies to expression evaluation #37?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_168",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #38: In C# arithmetic and conversions, what rule applies to expression evaluation #38?",
      "title": "Data Processing Concept #38: In C# arithmetic and conversions, what rule applies to expression evaluation #38?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_169",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #39: In C# arithmetic and conversions, what rule applies to expression evaluation #39?",
      "title": "Data Processing Concept #39: In C# arithmetic and conversions, what rule applies to expression evaluation #39?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_170",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #40: In C# arithmetic and conversions, what rule applies to expression evaluation #40?",
      "title": "Data Processing Concept #40: In C# arithmetic and conversions, what rule applies to expression evaluation #40?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_171",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #41: In C# arithmetic and conversions, what rule applies to expression evaluation #41?",
      "title": "Data Processing Concept #41: In C# arithmetic and conversions, what rule applies to expression evaluation #41?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_172",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #42: In C# arithmetic and conversions, what rule applies to expression evaluation #42?",
      "title": "Data Processing Concept #42: In C# arithmetic and conversions, what rule applies to expression evaluation #42?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_173",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #43: In C# arithmetic and conversions, what rule applies to expression evaluation #43?",
      "title": "Data Processing Concept #43: In C# arithmetic and conversions, what rule applies to expression evaluation #43?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_174",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #44: In C# arithmetic and conversions, what rule applies to expression evaluation #44?",
      "title": "Data Processing Concept #44: In C# arithmetic and conversions, what rule applies to expression evaluation #44?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_175",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #45: In C# arithmetic and conversions, what rule applies to expression evaluation #45?",
      "title": "Data Processing Concept #45: In C# arithmetic and conversions, what rule applies to expression evaluation #45?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_176",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #46: In C# arithmetic and conversions, what rule applies to expression evaluation #46?",
      "title": "Data Processing Concept #46: In C# arithmetic and conversions, what rule applies to expression evaluation #46?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_177",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #47: In C# arithmetic and conversions, what rule applies to expression evaluation #47?",
      "title": "Data Processing Concept #47: In C# arithmetic and conversions, what rule applies to expression evaluation #47?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_178",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #48: In C# arithmetic and conversions, what rule applies to expression evaluation #48?",
      "title": "Data Processing Concept #48: In C# arithmetic and conversions, what rule applies to expression evaluation #48?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_179",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #49: In C# arithmetic and conversions, what rule applies to expression evaluation #49?",
      "title": "Data Processing Concept #49: In C# arithmetic and conversions, what rule applies to expression evaluation #49?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_180",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #50: In C# arithmetic and conversions, what rule applies to expression evaluation #50?",
      "title": "Data Processing Concept #50: In C# arithmetic and conversions, what rule applies to expression evaluation #50?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_181",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #51: In C# arithmetic and conversions, what rule applies to expression evaluation #51?",
      "title": "Data Processing Concept #51: In C# arithmetic and conversions, what rule applies to expression evaluation #51?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_182",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #52: In C# arithmetic and conversions, what rule applies to expression evaluation #52?",
      "title": "Data Processing Concept #52: In C# arithmetic and conversions, what rule applies to expression evaluation #52?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_183",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #53: In C# arithmetic and conversions, what rule applies to expression evaluation #53?",
      "title": "Data Processing Concept #53: In C# arithmetic and conversions, what rule applies to expression evaluation #53?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_184",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #54: In C# arithmetic and conversions, what rule applies to expression evaluation #54?",
      "title": "Data Processing Concept #54: In C# arithmetic and conversions, what rule applies to expression evaluation #54?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_185",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #55: In C# arithmetic and conversions, what rule applies to expression evaluation #55?",
      "title": "Data Processing Concept #55: In C# arithmetic and conversions, what rule applies to expression evaluation #55?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_186",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #56: In C# arithmetic and conversions, what rule applies to expression evaluation #56?",
      "title": "Data Processing Concept #56: In C# arithmetic and conversions, what rule applies to expression evaluation #56?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_187",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #57: In C# arithmetic and conversions, what rule applies to expression evaluation #57?",
      "title": "Data Processing Concept #57: In C# arithmetic and conversions, what rule applies to expression evaluation #57?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_188",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #58: In C# arithmetic and conversions, what rule applies to expression evaluation #58?",
      "title": "Data Processing Concept #58: In C# arithmetic and conversions, what rule applies to expression evaluation #58?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_189",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #59: In C# arithmetic and conversions, what rule applies to expression evaluation #59?",
      "title": "Data Processing Concept #59: In C# arithmetic and conversions, what rule applies to expression evaluation #59?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_190",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #60: In C# arithmetic and conversions, what rule applies to expression evaluation #60?",
      "title": "Data Processing Concept #60: In C# arithmetic and conversions, what rule applies to expression evaluation #60?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_191",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #61: In C# arithmetic and conversions, what rule applies to expression evaluation #61?",
      "title": "Data Processing Concept #61: In C# arithmetic and conversions, what rule applies to expression evaluation #61?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_192",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #62: In C# arithmetic and conversions, what rule applies to expression evaluation #62?",
      "title": "Data Processing Concept #62: In C# arithmetic and conversions, what rule applies to expression evaluation #62?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_193",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #63: In C# arithmetic and conversions, what rule applies to expression evaluation #63?",
      "title": "Data Processing Concept #63: In C# arithmetic and conversions, what rule applies to expression evaluation #63?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_194",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #64: In C# arithmetic and conversions, what rule applies to expression evaluation #64?",
      "title": "Data Processing Concept #64: In C# arithmetic and conversions, what rule applies to expression evaluation #64?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_195",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #65: In C# arithmetic and conversions, what rule applies to expression evaluation #65?",
      "title": "Data Processing Concept #65: In C# arithmetic and conversions, what rule applies to expression evaluation #65?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_196",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #66: In C# arithmetic and conversions, what rule applies to expression evaluation #66?",
      "title": "Data Processing Concept #66: In C# arithmetic and conversions, what rule applies to expression evaluation #66?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_197",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #67: In C# arithmetic and conversions, what rule applies to expression evaluation #67?",
      "title": "Data Processing Concept #67: In C# arithmetic and conversions, what rule applies to expression evaluation #67?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_198",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #68: In C# arithmetic and conversions, what rule applies to expression evaluation #68?",
      "title": "Data Processing Concept #68: In C# arithmetic and conversions, what rule applies to expression evaluation #68?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_199",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #69: In C# arithmetic and conversions, what rule applies to expression evaluation #69?",
      "title": "Data Processing Concept #69: In C# arithmetic and conversions, what rule applies to expression evaluation #69?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_200",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #70: In C# arithmetic and conversions, what rule applies to expression evaluation #70?",
      "title": "Data Processing Concept #70: In C# arithmetic and conversions, what rule applies to expression evaluation #70?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_201",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #71: In C# arithmetic and conversions, what rule applies to expression evaluation #71?",
      "title": "Data Processing Concept #71: In C# arithmetic and conversions, what rule applies to expression evaluation #71?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_202",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #72: In C# arithmetic and conversions, what rule applies to expression evaluation #72?",
      "title": "Data Processing Concept #72: In C# arithmetic and conversions, what rule applies to expression evaluation #72?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_203",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #73: In C# arithmetic and conversions, what rule applies to expression evaluation #73?",
      "title": "Data Processing Concept #73: In C# arithmetic and conversions, what rule applies to expression evaluation #73?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_204",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #74: In C# arithmetic and conversions, what rule applies to expression evaluation #74?",
      "title": "Data Processing Concept #74: In C# arithmetic and conversions, what rule applies to expression evaluation #74?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_205",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Data Processing Concept #75: In C# arithmetic and conversions, what rule applies to expression evaluation #75?",
      "title": "Data Processing Concept #75: In C# arithmetic and conversions, what rule applies to expression evaluation #75?",
      "options": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "opts": [
        "Multiplication, division, and modulus take precedence over addition and subtraction",
        "Addition always executes before parentheses",
        "Strings can be multiplied directly with decimals",
        "Variables declared without a type default to decimal"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "explanation": "Standard operator precedence applies: parentheses first, then multiplicative (*, /, %), then additive (+, -).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su3_206",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which C# method safely parses a string into a decimal without throwing a runtime exception if the string is invalid?",
      "title": "Which C# method safely parses a string into a decimal without throwing a runtime exception if the string is invalid?",
      "options": [
        "decimal.TryParse(string, out decimal result)",
        "decimal.Parse(string)",
        "Convert.ToDecimal(string)",
        "decimal.Convert(string)"
      ],
      "opts": [
        "decimal.TryParse(string, out decimal result)",
        "decimal.Parse(string)",
        "Convert.ToDecimal(string)",
        "decimal.Convert(string)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "decimal.TryParse returns true if parsing succeeds and false if it fails, safely populating the 'out' variable without crashing.",
      "explanation": "decimal.TryParse returns true if parsing succeeds and false if it fails, safely populating the 'out' variable without crashing.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_207",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What does the 'TryParse' method return when parsing fails on an invalid string input?",
      "title": "What does the 'TryParse' method return when parsing fails on an invalid string input?",
      "options": [
        "false (and sets the out variable to 0)",
        "true",
        "null",
        "Throws a FormatException"
      ],
      "opts": [
        "false (and sets the out variable to 0)",
        "true",
        "null",
        "Throws a FormatException"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "TryParse returns boolean false upon failure and assigns 0 to the target out parameter.",
      "explanation": "TryParse returns boolean false upon failure and assigns 0 to the target out parameter.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_208",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which relational operator checks whether two expressions are NOT equal in Visual C#?",
      "title": "Which relational operator checks whether two expressions are NOT equal in Visual C#?",
      "options": [
        "!=",
        "<>",
        "!==",
        "NOT ="
      ],
      "opts": [
        "!=",
        "<>",
        "!==",
        "NOT ="
      ],
      "answer": 0,
      "ans": 0,
      "exp": "In C#, '!=' is the inequality operator. ('<>' is used in SQL or Basic, not C#).",
      "explanation": "In C#, '!=' is the inequality operator. ('<>' is used in SQL or Basic, not C#).",
      "provenance": "Gaddis 4th Ed §4.1",
      "marks": 2
    },
    {
      "id": "q_su3_209",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which logical operator represents logical AND with short-circuit evaluation in C#?",
      "title": "Which logical operator represents logical AND with short-circuit evaluation in C#?",
      "options": [
        "&&",
        "&",
        "AND",
        "||"
      ],
      "opts": [
        "&&",
        "&",
        "AND",
        "||"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'&&' is the short-circuit conditional AND operator. If the left operand is false, the right operand is not evaluated.",
      "explanation": "'&&' is the short-circuit conditional AND operator. If the left operand is false, the right operand is not evaluated.",
      "provenance": "Gaddis 4th Ed §4.4",
      "marks": 2
    },
    {
      "id": "q_su3_210",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which logical operator represents logical OR with short-circuit evaluation in C#?",
      "title": "Which logical operator represents logical OR with short-circuit evaluation in C#?",
      "options": [
        "||",
        "|",
        "OR",
        "!"
      ],
      "opts": [
        "||",
        "|",
        "OR",
        "!"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'||' is the conditional OR operator. If the left operand is true, evaluation short-circuits to true.",
      "explanation": "'||' is the conditional OR operator. If the left operand is true, evaluation short-circuits to true.",
      "provenance": "Gaddis 4th Ed §4.4",
      "marks": 2
    },
    {
      "id": "q_su3_211",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What happens during short-circuit evaluation of 'if (a > 10 && b < 20)' when 'a' is 5?",
      "title": "What happens during short-circuit evaluation of 'if (a > 10 && b < 20)' when 'a' is 5?",
      "options": [
        "Since 5 > 10 is false, 'b < 20' is never evaluated, saving execution time",
        "The entire condition evaluates to true",
        "Both sides are always evaluated regardless",
        "A compiler error is thrown"
      ],
      "opts": [
        "Since 5 > 10 is false, 'b < 20' is never evaluated, saving execution time",
        "The entire condition evaluates to true",
        "Both sides are always evaluated regardless",
        "A compiler error is thrown"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Short-circuit evaluation stops evaluating as soon as the outcome is guaranteed (false && anything is false).",
      "explanation": "Short-circuit evaluation stops evaluating as soon as the outcome is guaranteed (false && anything is false).",
      "provenance": "Gaddis 4th Ed §4.4",
      "marks": 2
    },
    {
      "id": "q_su3_212",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "How do RadioButton controls behave when placed inside the same container (such as a GroupBox or Form)?",
      "title": "How do RadioButton controls behave when placed inside the same container (such as a GroupBox or Form)?",
      "options": [
        "They are mutually exclusive: checking one automatically unchecks all other radio buttons in that container",
        "Multiple radio buttons can be checked simultaneously",
        "They behave identically to CheckBoxes",
        "RadioButtons cannot be unchecked once clicked"
      ],
      "opts": [
        "They are mutually exclusive: checking one automatically unchecks all other radio buttons in that container",
        "Multiple radio buttons can be checked simultaneously",
        "They behave identically to CheckBoxes",
        "RadioButtons cannot be unchecked once clicked"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Radio buttons within the same container provide mutually exclusive selection: exactly one can be selected at a time.",
      "explanation": "Radio buttons within the same container provide mutually exclusive selection: exactly one can be selected at a time.",
      "provenance": "Gaddis 4th Ed §4.9",
      "marks": 2
    },
    {
      "id": "q_su3_213",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "How do CheckBox controls differ from RadioButton controls in a GUI?",
      "title": "How do CheckBox controls differ from RadioButton controls in a GUI?",
      "options": [
        "CheckBoxes allow independent, multiple selections; any number of checkboxes can be checked at the same time",
        "CheckBoxes are mutually exclusive",
        "CheckBoxes do not have a Checked property",
        "CheckBoxes cannot trigger event handlers"
      ],
      "opts": [
        "CheckBoxes allow independent, multiple selections; any number of checkboxes can be checked at the same time",
        "CheckBoxes are mutually exclusive",
        "CheckBoxes do not have a Checked property",
        "CheckBoxes cannot trigger event handlers"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "CheckBoxes represent independent yes/no choices. Checking one does not affect any other checkbox.",
      "explanation": "CheckBoxes represent independent yes/no choices. Checking one does not affect any other checkbox.",
      "provenance": "Gaddis 4th Ed §4.9",
      "marks": 2
    },
    {
      "id": "q_su3_214",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which property of a RadioButton or CheckBox indicates whether it is currently selected (returns a bool)?",
      "title": "Which property of a RadioButton or CheckBox indicates whether it is currently selected (returns a bool)?",
      "options": [
        "Checked",
        "Selected",
        "Value",
        "State"
      ],
      "opts": [
        "Checked",
        "Selected",
        "Value",
        "State"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The 'Checked' property holds a boolean value: True if selected, false if unselected.",
      "explanation": "The 'Checked' property holds a boolean value: True if selected, false if unselected.",
      "provenance": "Gaddis 4th Ed §4.9",
      "marks": 2
    },
    {
      "id": "q_su3_215",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is the primary function of a GroupBox control in Visual C# form design?",
      "title": "What is the primary function of a GroupBox control in Visual C# form design?",
      "options": [
        "To visually group related controls and create separate mutually exclusive scopes for RadioButtons",
        "To display animated GIFs",
        "To automatically validate text input",
        "To speed up CPU calculations"
      ],
      "opts": [
        "To visually group related controls and create separate mutually exclusive scopes for RadioButtons",
        "To display animated GIFs",
        "To automatically validate text input",
        "To speed up CPU calculations"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "GroupBox acts as a container control. Placing radio buttons inside different group boxes creates independent selection groups.",
      "explanation": "GroupBox acts as a container control. Placing radio buttons inside different group boxes creates independent selection groups.",
      "provenance": "Gaddis 4th Ed §4.9",
      "marks": 2
    },
    {
      "id": "q_su3_216",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What statement must terminate each non-empty 'case' section in a C# switch structure to prevent fall-through?",
      "title": "What statement must terminate each non-empty 'case' section in a C# switch structure to prevent fall-through?",
      "options": [
        "break;",
        "exit;",
        "continue;",
        "stop;"
      ],
      "opts": [
        "break;",
        "exit;",
        "continue;",
        "stop;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "C# enforces the 'no fall-through' rule: non-empty case blocks must terminate with a jump statement such as 'break;'.",
      "explanation": "C# enforces the 'no fall-through' rule: non-empty case blocks must terminate with a jump statement such as 'break;'.",
      "provenance": "Gaddis 4th Ed §4.10",
      "marks": 2
    },
    {
      "id": "q_su3_217",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which section in a switch statement executes if none of the explicit 'case' values match the test expression?",
      "title": "Which section in a switch statement executes if none of the explicit 'case' values match the test expression?",
      "options": [
        "default:",
        "else:",
        "catch:",
        "finally:"
      ],
      "opts": [
        "default:",
        "else:",
        "catch:",
        "finally:"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The 'default:' section acts as the catch-all fallback if no case matches.",
      "explanation": "The 'default:' section acts as the catch-all fallback if no case matches.",
      "provenance": "Gaddis 4th Ed §4.10",
      "marks": 2
    },
    {
      "id": "q_su3_218",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What property of a ListBox control indicates the zero-based index of the currently selected item?",
      "title": "What property of a ListBox control indicates the zero-based index of the currently selected item?",
      "options": [
        "SelectedIndex",
        "SelectedItem",
        "Index",
        "CurrentItem"
      ],
      "opts": [
        "SelectedIndex",
        "SelectedItem",
        "Index",
        "CurrentItem"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "SelectedIndex returns the integer index of the selected item (0 to Count-1), or -1 if no item is selected.",
      "explanation": "SelectedIndex returns the integer index of the selected item (0 to Count-1), or -1 if no item is selected.",
      "provenance": "Gaddis 4th Ed §4.11 / §5.1",
      "marks": 2
    },
    {
      "id": "q_su3_219",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What value does 'lstItems.SelectedIndex' return when NO item is currently selected in the ListBox?",
      "title": "What value does 'lstItems.SelectedIndex' return when NO item is currently selected in the ListBox?",
      "options": [
        "-1",
        "0",
        "null",
        "Throws an exception"
      ],
      "opts": [
        "-1",
        "0",
        "null",
        "Throws an exception"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "When nothing is selected, SelectedIndex equals -1.",
      "explanation": "When nothing is selected, SelectedIndex equals -1.",
      "provenance": "Gaddis 4th Ed §4.11 / §5.1",
      "marks": 2
    },
    {
      "id": "q_su3_220",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which method call displays a standard modal alert dialog box in Visual C#?",
      "title": "Which method call displays a standard modal alert dialog box in Visual C#?",
      "options": [
        "MessageBox.Show(\"Text\", \"Caption\");",
        "Alert.Show(\"Text\");",
        "Dialog.Display(\"Text\");",
        "Form.Message(\"Text\");"
      ],
      "opts": [
        "MessageBox.Show(\"Text\", \"Caption\");",
        "Alert.Show(\"Text\");",
        "Dialog.Display(\"Text\");",
        "Form.Message(\"Text\");"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "MessageBox.Show() is the standard .NET Windows Forms method for displaying dialog boxes.",
      "explanation": "MessageBox.Show() is the standard .NET Windows Forms method for displaying dialog boxes.",
      "provenance": "Gaddis 4th Ed §4.8",
      "marks": 2
    },
    {
      "id": "q_su3_221",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #16: In C# conditional logic and selection controls, which statement is true regarding #16?",
      "title": "Decision Logic Concept #16: In C# conditional logic and selection controls, which statement is true regarding #16?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_222",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #17: In C# conditional logic and selection controls, which statement is true regarding #17?",
      "title": "Decision Logic Concept #17: In C# conditional logic and selection controls, which statement is true regarding #17?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_223",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #18: In C# conditional logic and selection controls, which statement is true regarding #18?",
      "title": "Decision Logic Concept #18: In C# conditional logic and selection controls, which statement is true regarding #18?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_224",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #19: In C# conditional logic and selection controls, which statement is true regarding #19?",
      "title": "Decision Logic Concept #19: In C# conditional logic and selection controls, which statement is true regarding #19?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_225",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #20: In C# conditional logic and selection controls, which statement is true regarding #20?",
      "title": "Decision Logic Concept #20: In C# conditional logic and selection controls, which statement is true regarding #20?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_226",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #21: In C# conditional logic and selection controls, which statement is true regarding #21?",
      "title": "Decision Logic Concept #21: In C# conditional logic and selection controls, which statement is true regarding #21?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_227",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #22: In C# conditional logic and selection controls, which statement is true regarding #22?",
      "title": "Decision Logic Concept #22: In C# conditional logic and selection controls, which statement is true regarding #22?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_228",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #23: In C# conditional logic and selection controls, which statement is true regarding #23?",
      "title": "Decision Logic Concept #23: In C# conditional logic and selection controls, which statement is true regarding #23?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_229",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #24: In C# conditional logic and selection controls, which statement is true regarding #24?",
      "title": "Decision Logic Concept #24: In C# conditional logic and selection controls, which statement is true regarding #24?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_230",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #25: In C# conditional logic and selection controls, which statement is true regarding #25?",
      "title": "Decision Logic Concept #25: In C# conditional logic and selection controls, which statement is true regarding #25?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_231",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #26: In C# conditional logic and selection controls, which statement is true regarding #26?",
      "title": "Decision Logic Concept #26: In C# conditional logic and selection controls, which statement is true regarding #26?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_232",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #27: In C# conditional logic and selection controls, which statement is true regarding #27?",
      "title": "Decision Logic Concept #27: In C# conditional logic and selection controls, which statement is true regarding #27?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_233",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #28: In C# conditional logic and selection controls, which statement is true regarding #28?",
      "title": "Decision Logic Concept #28: In C# conditional logic and selection controls, which statement is true regarding #28?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_234",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #29: In C# conditional logic and selection controls, which statement is true regarding #29?",
      "title": "Decision Logic Concept #29: In C# conditional logic and selection controls, which statement is true regarding #29?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_235",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #30: In C# conditional logic and selection controls, which statement is true regarding #30?",
      "title": "Decision Logic Concept #30: In C# conditional logic and selection controls, which statement is true regarding #30?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_236",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #31: In C# conditional logic and selection controls, which statement is true regarding #31?",
      "title": "Decision Logic Concept #31: In C# conditional logic and selection controls, which statement is true regarding #31?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_237",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #32: In C# conditional logic and selection controls, which statement is true regarding #32?",
      "title": "Decision Logic Concept #32: In C# conditional logic and selection controls, which statement is true regarding #32?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_238",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #33: In C# conditional logic and selection controls, which statement is true regarding #33?",
      "title": "Decision Logic Concept #33: In C# conditional logic and selection controls, which statement is true regarding #33?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_239",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #34: In C# conditional logic and selection controls, which statement is true regarding #34?",
      "title": "Decision Logic Concept #34: In C# conditional logic and selection controls, which statement is true regarding #34?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_240",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #35: In C# conditional logic and selection controls, which statement is true regarding #35?",
      "title": "Decision Logic Concept #35: In C# conditional logic and selection controls, which statement is true regarding #35?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_241",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #36: In C# conditional logic and selection controls, which statement is true regarding #36?",
      "title": "Decision Logic Concept #36: In C# conditional logic and selection controls, which statement is true regarding #36?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_242",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #37: In C# conditional logic and selection controls, which statement is true regarding #37?",
      "title": "Decision Logic Concept #37: In C# conditional logic and selection controls, which statement is true regarding #37?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_243",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #38: In C# conditional logic and selection controls, which statement is true regarding #38?",
      "title": "Decision Logic Concept #38: In C# conditional logic and selection controls, which statement is true regarding #38?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_244",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #39: In C# conditional logic and selection controls, which statement is true regarding #39?",
      "title": "Decision Logic Concept #39: In C# conditional logic and selection controls, which statement is true regarding #39?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_245",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #40: In C# conditional logic and selection controls, which statement is true regarding #40?",
      "title": "Decision Logic Concept #40: In C# conditional logic and selection controls, which statement is true regarding #40?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_246",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #41: In C# conditional logic and selection controls, which statement is true regarding #41?",
      "title": "Decision Logic Concept #41: In C# conditional logic and selection controls, which statement is true regarding #41?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_247",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #42: In C# conditional logic and selection controls, which statement is true regarding #42?",
      "title": "Decision Logic Concept #42: In C# conditional logic and selection controls, which statement is true regarding #42?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_248",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #43: In C# conditional logic and selection controls, which statement is true regarding #43?",
      "title": "Decision Logic Concept #43: In C# conditional logic and selection controls, which statement is true regarding #43?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_249",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #44: In C# conditional logic and selection controls, which statement is true regarding #44?",
      "title": "Decision Logic Concept #44: In C# conditional logic and selection controls, which statement is true regarding #44?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_250",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #45: In C# conditional logic and selection controls, which statement is true regarding #45?",
      "title": "Decision Logic Concept #45: In C# conditional logic and selection controls, which statement is true regarding #45?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_251",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #46: In C# conditional logic and selection controls, which statement is true regarding #46?",
      "title": "Decision Logic Concept #46: In C# conditional logic and selection controls, which statement is true regarding #46?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_252",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #47: In C# conditional logic and selection controls, which statement is true regarding #47?",
      "title": "Decision Logic Concept #47: In C# conditional logic and selection controls, which statement is true regarding #47?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_253",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #48: In C# conditional logic and selection controls, which statement is true regarding #48?",
      "title": "Decision Logic Concept #48: In C# conditional logic and selection controls, which statement is true regarding #48?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_254",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #49: In C# conditional logic and selection controls, which statement is true regarding #49?",
      "title": "Decision Logic Concept #49: In C# conditional logic and selection controls, which statement is true regarding #49?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_255",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #50: In C# conditional logic and selection controls, which statement is true regarding #50?",
      "title": "Decision Logic Concept #50: In C# conditional logic and selection controls, which statement is true regarding #50?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_256",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #51: In C# conditional logic and selection controls, which statement is true regarding #51?",
      "title": "Decision Logic Concept #51: In C# conditional logic and selection controls, which statement is true regarding #51?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_257",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #52: In C# conditional logic and selection controls, which statement is true regarding #52?",
      "title": "Decision Logic Concept #52: In C# conditional logic and selection controls, which statement is true regarding #52?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_258",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #53: In C# conditional logic and selection controls, which statement is true regarding #53?",
      "title": "Decision Logic Concept #53: In C# conditional logic and selection controls, which statement is true regarding #53?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_259",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #54: In C# conditional logic and selection controls, which statement is true regarding #54?",
      "title": "Decision Logic Concept #54: In C# conditional logic and selection controls, which statement is true regarding #54?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_260",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #55: In C# conditional logic and selection controls, which statement is true regarding #55?",
      "title": "Decision Logic Concept #55: In C# conditional logic and selection controls, which statement is true regarding #55?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_261",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #56: In C# conditional logic and selection controls, which statement is true regarding #56?",
      "title": "Decision Logic Concept #56: In C# conditional logic and selection controls, which statement is true regarding #56?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_262",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #57: In C# conditional logic and selection controls, which statement is true regarding #57?",
      "title": "Decision Logic Concept #57: In C# conditional logic and selection controls, which statement is true regarding #57?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_263",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #58: In C# conditional logic and selection controls, which statement is true regarding #58?",
      "title": "Decision Logic Concept #58: In C# conditional logic and selection controls, which statement is true regarding #58?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_264",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #59: In C# conditional logic and selection controls, which statement is true regarding #59?",
      "title": "Decision Logic Concept #59: In C# conditional logic and selection controls, which statement is true regarding #59?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_265",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #60: In C# conditional logic and selection controls, which statement is true regarding #60?",
      "title": "Decision Logic Concept #60: In C# conditional logic and selection controls, which statement is true regarding #60?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_266",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #61: In C# conditional logic and selection controls, which statement is true regarding #61?",
      "title": "Decision Logic Concept #61: In C# conditional logic and selection controls, which statement is true regarding #61?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_267",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #62: In C# conditional logic and selection controls, which statement is true regarding #62?",
      "title": "Decision Logic Concept #62: In C# conditional logic and selection controls, which statement is true regarding #62?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_268",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #63: In C# conditional logic and selection controls, which statement is true regarding #63?",
      "title": "Decision Logic Concept #63: In C# conditional logic and selection controls, which statement is true regarding #63?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_269",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #64: In C# conditional logic and selection controls, which statement is true regarding #64?",
      "title": "Decision Logic Concept #64: In C# conditional logic and selection controls, which statement is true regarding #64?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_270",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #65: In C# conditional logic and selection controls, which statement is true regarding #65?",
      "title": "Decision Logic Concept #65: In C# conditional logic and selection controls, which statement is true regarding #65?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_271",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #66: In C# conditional logic and selection controls, which statement is true regarding #66?",
      "title": "Decision Logic Concept #66: In C# conditional logic and selection controls, which statement is true regarding #66?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_272",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #67: In C# conditional logic and selection controls, which statement is true regarding #67?",
      "title": "Decision Logic Concept #67: In C# conditional logic and selection controls, which statement is true regarding #67?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_273",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #68: In C# conditional logic and selection controls, which statement is true regarding #68?",
      "title": "Decision Logic Concept #68: In C# conditional logic and selection controls, which statement is true regarding #68?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_274",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #69: In C# conditional logic and selection controls, which statement is true regarding #69?",
      "title": "Decision Logic Concept #69: In C# conditional logic and selection controls, which statement is true regarding #69?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_275",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #70: In C# conditional logic and selection controls, which statement is true regarding #70?",
      "title": "Decision Logic Concept #70: In C# conditional logic and selection controls, which statement is true regarding #70?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_276",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #71: In C# conditional logic and selection controls, which statement is true regarding #71?",
      "title": "Decision Logic Concept #71: In C# conditional logic and selection controls, which statement is true regarding #71?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_277",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #72: In C# conditional logic and selection controls, which statement is true regarding #72?",
      "title": "Decision Logic Concept #72: In C# conditional logic and selection controls, which statement is true regarding #72?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_278",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #73: In C# conditional logic and selection controls, which statement is true regarding #73?",
      "title": "Decision Logic Concept #73: In C# conditional logic and selection controls, which statement is true regarding #73?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_279",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #74: In C# conditional logic and selection controls, which statement is true regarding #74?",
      "title": "Decision Logic Concept #74: In C# conditional logic and selection controls, which statement is true regarding #74?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su3_280",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Decision Logic Concept #75: In C# conditional logic and selection controls, which statement is true regarding #75?",
      "title": "Decision Logic Concept #75: In C# conditional logic and selection controls, which statement is true regarding #75?",
      "options": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "opts": [
        "Nested if statements allow multi-level hierarchical condition testing",
        "Switch expressions can only evaluate boolean variables",
        "RadioButtons must always be placed inside textboxes",
        "TryParse can only be used on string literals, never textboxes"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "explanation": "Nested decision structures place an if statement inside another if or else branch to evaluate secondary conditions.",
      "provenance": "Gaddis 4th Ed §4.3",
      "marks": 2
    },
    {
      "id": "q_su4_281",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Why is the 'while' loop classified as a 'pre-test loop' in Visual C#?",
      "title": "Why is the 'while' loop classified as a 'pre-test loop' in Visual C#?",
      "options": [
        "Because its continuation condition is tested BEFORE the loop body executes; if false initially, the body never runs",
        "Because it executes before the form loads",
        "Because it always runs at least once before testing",
        "Because it cannot be stopped once started"
      ],
      "opts": [
        "Because its continuation condition is tested BEFORE the loop body executes; if false initially, the body never runs",
        "Because it executes before the form loads",
        "Because it always runs at least once before testing",
        "Because it cannot be stopped once started"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A while loop is pre-test: it tests the condition prior to each iteration. If false on entry, body executes zero times.",
      "explanation": "A while loop is pre-test: it tests the condition prior to each iteration. If false on entry, body executes zero times.",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_282",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Why is the 'do-while' loop classified as a 'post-test loop'?",
      "title": "Why is the 'do-while' loop classified as a 'post-test loop'?",
      "options": [
        "Because its condition is tested AFTER the loop body executes, guaranteeing at least one execution",
        "Because it executes after the form closes",
        "Because it is slower than a while loop",
        "Because it requires a post-dated check"
      ],
      "opts": [
        "Because its condition is tested AFTER the loop body executes, guaranteeing at least one execution",
        "Because it executes after the form closes",
        "Because it is slower than a while loop",
        "Because it requires a post-dated check"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A do-while loop is post-test: the body executes first, then the condition is tested at the bottom.",
      "explanation": "A do-while loop is post-test: the body executes first, then the condition is tested at the bottom.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_283",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What punctuation mark MUST be placed at the very end of a 'do-while' loop statement in C#?",
      "title": "What punctuation mark MUST be placed at the very end of a 'do-while' loop statement in C#?",
      "options": [
        "Semicolon (;)",
        "Colon (:)",
        "Period (.)",
        "No punctuation allowed"
      ],
      "opts": [
        "Semicolon (;)",
        "Colon (:)",
        "Period (.)",
        "No punctuation allowed"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Syntax rule: do { ... } while (condition); requires a terminating semicolon.",
      "explanation": "Syntax rule: do { ... } while (condition); requires a terminating semicolon.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_284",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is the difference between prefix '++count' and postfix 'count++' in C#?",
      "title": "What is the difference between prefix '++count' and postfix 'count++' in C#?",
      "options": [
        "Postfix uses the current value in the surrounding expression before incrementing; prefix increments the value first before using it",
        "Prefix multiplies by 2, postfix adds 1",
        "There is no difference in any context",
        "Postfix only works on integers, prefix works on decimals"
      ],
      "opts": [
        "Postfix uses the current value in the surrounding expression before incrementing; prefix increments the value first before using it",
        "Prefix multiplies by 2, postfix adds 1",
        "There is no difference in any context",
        "Postfix only works on integers, prefix works on decimals"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "In postfix (count++), value is evaluated first, then incremented. In prefix (++count), value is incremented first, then evaluated.",
      "explanation": "In postfix (count++), value is evaluated first, then incremented. In prefix (++count), value is incremented first, then evaluated.",
      "provenance": "Gaddis 4th Ed §5.3",
      "marks": 2
    },
    {
      "id": "q_su4_285",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What happens to an application if a while loop's condition never becomes false?",
      "title": "What happens to an application if a while loop's condition never becomes false?",
      "options": [
        "The application enters an infinite loop, freezing the user interface thread and becoming unresponsive",
        "The compiler automatically adds a break statement",
        "Windows terminates the computer",
        "The loop automatically runs backward"
      ],
      "opts": [
        "The application enters an infinite loop, freezing the user interface thread and becoming unresponsive",
        "The compiler automatically adds a break statement",
        "Windows terminates the computer",
        "The loop automatically runs backward"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "An infinite loop occurs when the condition never evaluates to false, causing the UI thread to hang.",
      "explanation": "An infinite loop occurs when the condition never evaluates to false, causing the UI thread to hang.",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_286",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What are the three core expressions in a standard C# 'for' loop header: 'for (exp1; exp2; exp3)'?",
      "title": "What are the three core expressions in a standard C# 'for' loop header: 'for (exp1; exp2; exp3)'?",
      "options": [
        "Initialization; Condition (test); Update (increment/decrement)",
        "Declaration; Multiplication; Division",
        "Start; Stop; Pause",
        "Input; Process; Output"
      ],
      "opts": [
        "Initialization; Condition (test); Update (increment/decrement)",
        "Declaration; Multiplication; Division",
        "Start; Stop; Pause",
        "Input; Process; Output"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The for loop header consists of: 1. Initialization, 2. Boolean test condition, 3. Update expression.",
      "explanation": "The for loop header consists of: 1. Initialization, 2. Boolean test condition, 3. Update expression.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_287",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which method call removes ALL items from a ListBox control named lstResults?",
      "title": "Which method call removes ALL items from a ListBox control named lstResults?",
      "options": [
        "lstResults.Items.Clear();",
        "lstResults.Clear();",
        "lstResults.Items.RemoveAll();",
        "lstResults.Reset();"
      ],
      "opts": [
        "lstResults.Items.Clear();",
        "lstResults.Clear();",
        "lstResults.Items.RemoveAll();",
        "lstResults.Reset();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "lstResults.Items.Clear() empties the Items collection of the ListBox.",
      "explanation": "lstResults.Items.Clear() empties the Items collection of the ListBox.",
      "provenance": "Gaddis 4th Ed §5.1",
      "marks": 2
    },
    {
      "id": "q_su4_288",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which method call appends a new entry to the end of a ListBox named lstSummary?",
      "title": "Which method call appends a new entry to the end of a ListBox named lstSummary?",
      "options": [
        "lstSummary.Items.Add(item);",
        "lstSummary.Add(item);",
        "lstSummary.Append(item);",
        "lstSummary.Insert(item);"
      ],
      "opts": [
        "lstSummary.Items.Add(item);",
        "lstSummary.Add(item);",
        "lstSummary.Append(item);",
        "lstSummary.Insert(item);"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "lstSummary.Items.Add() adds an item to the ListBox collection.",
      "explanation": "lstSummary.Items.Add() adds an item to the ListBox collection.",
      "provenance": "Gaddis 4th Ed §5.1",
      "marks": 2
    },
    {
      "id": "q_su4_289",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What event fires automatically when a Windows Form is first instantiated and loaded into memory before being shown to the user?",
      "title": "What event fires automatically when a Windows Form is first instantiated and loaded into memory before being shown to the user?",
      "options": [
        "Form_Load",
        "Form_Click",
        "Form_Paint",
        "Form_Closed"
      ],
      "opts": [
        "Form_Load",
        "Form_Click",
        "Form_Paint",
        "Form_Closed"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Load event occurs before a form is displayed for the first time; ideal for prepopulating controls.",
      "explanation": "The Load event occurs before a form is displayed for the first time; ideal for prepopulating controls.",
      "provenance": "Gaddis 4th Ed §5.9",
      "marks": 2
    },
    {
      "id": "q_su4_290",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In programming, what is an 'accumulator' variable?",
      "title": "In programming, what is an 'accumulator' variable?",
      "options": [
        "A variable used to keep a running total of values added across loop iterations, typically initialized to 0",
        "A variable that counts loop iterations by 1",
        "A constant that never changes",
        "A hardware component in the mouse"
      ],
      "opts": [
        "A variable used to keep a running total of values added across loop iterations, typically initialized to 0",
        "A variable that counts loop iterations by 1",
        "A constant that never changes",
        "A hardware component in the mouse"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "An accumulator accumulates numbers into a running total (e.g. total += amount;) and must be initialized to 0.",
      "explanation": "An accumulator accumulates numbers into a running total (e.g. total += amount;) and must be initialized to 0.",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_291",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is a 'sentinel value' in loop processing?",
      "title": "What is a 'sentinel value' in loop processing?",
      "options": [
        "A special predetermined value that signals the end of user input and terminates the loop (e.g. entering -1 to stop)",
        "A variable that locks the screen",
        "A syntax error code",
        "A security password"
      ],
      "opts": [
        "A special predetermined value that signals the end of user input and terminates the loop (e.g. entering -1 to stop)",
        "A variable that locks the screen",
        "A syntax error code",
        "A security password"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A sentinel value is a distinct dummy value that signals loop termination when the exact quantity of inputs is unknown.",
      "explanation": "A sentinel value is a distinct dummy value that signals loop termination when the exact quantity of inputs is unknown.",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_292",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How do you iterate through all items in a ListBox using a count-controlled for loop?",
      "title": "How do you iterate through all items in a ListBox using a count-controlled for loop?",
      "options": [
        "for (int i = 0; i < lstItems.Items.Count; i++) { ... }",
        "for (int i = 1; i <= lstItems.Items.Count; i++) { ... }",
        "for (int i = 0; i < lstItems.Length; i++) { ... }",
        "while (lstItems.Next()) { ... }"
      ],
      "opts": [
        "for (int i = 0; i < lstItems.Items.Count; i++) { ... }",
        "for (int i = 1; i <= lstItems.Items.Count; i++) { ... }",
        "for (int i = 0; i < lstItems.Length; i++) { ... }",
        "while (lstItems.Next()) { ... }"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "ListBox items are zero-indexed from 0 to Items.Count - 1. Loop header is 'for (int i = 0; i < lstItems.Items.Count; i++)'.",
      "explanation": "ListBox items are zero-indexed from 0 to Items.Count - 1. Loop header is 'for (int i = 0; i < lstItems.Items.Count; i++)'.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_293",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is the scope of a loop control variable declared inside the for loop header: 'for (int i = 0; i < 10; i++)'?",
      "title": "What is the scope of a loop control variable declared inside the for loop header: 'for (int i = 0; i < 10; i++)'?",
      "options": [
        "Block scope: 'i' exists only inside the for loop body and is destroyed upon loop completion",
        "Class scope: visible to all methods in the form",
        "Global scope across all project files",
        "Field scope"
      ],
      "opts": [
        "Block scope: 'i' exists only inside the for loop body and is destroyed upon loop completion",
        "Class scope: visible to all methods in the form",
        "Global scope across all project files",
        "Field scope"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Variables declared in the for loop initialization header have block scope limited to the loop.",
      "explanation": "Variables declared in the for loop initialization header have block scope limited to the loop.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_294",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which of the following demonstrates the combined addition assignment operator?",
      "title": "Which of the following demonstrates the combined addition assignment operator?",
      "options": [
        "total += price;",
        "total =+ price;",
        "total ++ price;",
        "total := price;"
      ],
      "opts": [
        "total += price;",
        "total =+ price;",
        "total ++ price;",
        "total := price;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'total += price;' is equivalent to 'total = total + price;'.",
      "explanation": "'total += price;' is equivalent to 'total = total + price;'.",
      "provenance": "Gaddis 4th Ed §3.4 / §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_295",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What property of a ListBox returns the total number of items currently stored in the list?",
      "title": "What property of a ListBox returns the total number of items currently stored in the list?",
      "options": [
        "lstBox.Items.Count",
        "lstBox.Length",
        "lstBox.Size",
        "lstBox.Items.Length"
      ],
      "opts": [
        "lstBox.Items.Count",
        "lstBox.Length",
        "lstBox.Size",
        "lstBox.Items.Length"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Items collection provides the '.Count' integer property indicating the number of items.",
      "explanation": "The Items collection provides the '.Count' integer property indicating the number of items.",
      "provenance": "Gaddis 4th Ed §5.1",
      "marks": 2
    },
    {
      "id": "q_su4_296",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #16: In C# iteration mechanics, which rule applies to execution sequence #16?",
      "title": "Loop Structure Concept #16: In C# iteration mechanics, which rule applies to execution sequence #16?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_297",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #17: In C# iteration mechanics, which rule applies to execution sequence #17?",
      "title": "Loop Structure Concept #17: In C# iteration mechanics, which rule applies to execution sequence #17?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_298",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #18: In C# iteration mechanics, which rule applies to execution sequence #18?",
      "title": "Loop Structure Concept #18: In C# iteration mechanics, which rule applies to execution sequence #18?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_299",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #19: In C# iteration mechanics, which rule applies to execution sequence #19?",
      "title": "Loop Structure Concept #19: In C# iteration mechanics, which rule applies to execution sequence #19?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_300",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #20: In C# iteration mechanics, which rule applies to execution sequence #20?",
      "title": "Loop Structure Concept #20: In C# iteration mechanics, which rule applies to execution sequence #20?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_301",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #21: In C# iteration mechanics, which rule applies to execution sequence #21?",
      "title": "Loop Structure Concept #21: In C# iteration mechanics, which rule applies to execution sequence #21?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_302",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #22: In C# iteration mechanics, which rule applies to execution sequence #22?",
      "title": "Loop Structure Concept #22: In C# iteration mechanics, which rule applies to execution sequence #22?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_303",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #23: In C# iteration mechanics, which rule applies to execution sequence #23?",
      "title": "Loop Structure Concept #23: In C# iteration mechanics, which rule applies to execution sequence #23?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_304",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #24: In C# iteration mechanics, which rule applies to execution sequence #24?",
      "title": "Loop Structure Concept #24: In C# iteration mechanics, which rule applies to execution sequence #24?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_305",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #25: In C# iteration mechanics, which rule applies to execution sequence #25?",
      "title": "Loop Structure Concept #25: In C# iteration mechanics, which rule applies to execution sequence #25?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_306",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #26: In C# iteration mechanics, which rule applies to execution sequence #26?",
      "title": "Loop Structure Concept #26: In C# iteration mechanics, which rule applies to execution sequence #26?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_307",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #27: In C# iteration mechanics, which rule applies to execution sequence #27?",
      "title": "Loop Structure Concept #27: In C# iteration mechanics, which rule applies to execution sequence #27?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_308",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #28: In C# iteration mechanics, which rule applies to execution sequence #28?",
      "title": "Loop Structure Concept #28: In C# iteration mechanics, which rule applies to execution sequence #28?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_309",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #29: In C# iteration mechanics, which rule applies to execution sequence #29?",
      "title": "Loop Structure Concept #29: In C# iteration mechanics, which rule applies to execution sequence #29?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_310",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #30: In C# iteration mechanics, which rule applies to execution sequence #30?",
      "title": "Loop Structure Concept #30: In C# iteration mechanics, which rule applies to execution sequence #30?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_311",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #31: In C# iteration mechanics, which rule applies to execution sequence #31?",
      "title": "Loop Structure Concept #31: In C# iteration mechanics, which rule applies to execution sequence #31?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_312",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #32: In C# iteration mechanics, which rule applies to execution sequence #32?",
      "title": "Loop Structure Concept #32: In C# iteration mechanics, which rule applies to execution sequence #32?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_313",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #33: In C# iteration mechanics, which rule applies to execution sequence #33?",
      "title": "Loop Structure Concept #33: In C# iteration mechanics, which rule applies to execution sequence #33?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_314",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #34: In C# iteration mechanics, which rule applies to execution sequence #34?",
      "title": "Loop Structure Concept #34: In C# iteration mechanics, which rule applies to execution sequence #34?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_315",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #35: In C# iteration mechanics, which rule applies to execution sequence #35?",
      "title": "Loop Structure Concept #35: In C# iteration mechanics, which rule applies to execution sequence #35?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_316",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #36: In C# iteration mechanics, which rule applies to execution sequence #36?",
      "title": "Loop Structure Concept #36: In C# iteration mechanics, which rule applies to execution sequence #36?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_317",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #37: In C# iteration mechanics, which rule applies to execution sequence #37?",
      "title": "Loop Structure Concept #37: In C# iteration mechanics, which rule applies to execution sequence #37?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_318",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #38: In C# iteration mechanics, which rule applies to execution sequence #38?",
      "title": "Loop Structure Concept #38: In C# iteration mechanics, which rule applies to execution sequence #38?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_319",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #39: In C# iteration mechanics, which rule applies to execution sequence #39?",
      "title": "Loop Structure Concept #39: In C# iteration mechanics, which rule applies to execution sequence #39?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_320",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #40: In C# iteration mechanics, which rule applies to execution sequence #40?",
      "title": "Loop Structure Concept #40: In C# iteration mechanics, which rule applies to execution sequence #40?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_321",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #41: In C# iteration mechanics, which rule applies to execution sequence #41?",
      "title": "Loop Structure Concept #41: In C# iteration mechanics, which rule applies to execution sequence #41?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_322",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #42: In C# iteration mechanics, which rule applies to execution sequence #42?",
      "title": "Loop Structure Concept #42: In C# iteration mechanics, which rule applies to execution sequence #42?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_323",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #43: In C# iteration mechanics, which rule applies to execution sequence #43?",
      "title": "Loop Structure Concept #43: In C# iteration mechanics, which rule applies to execution sequence #43?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_324",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #44: In C# iteration mechanics, which rule applies to execution sequence #44?",
      "title": "Loop Structure Concept #44: In C# iteration mechanics, which rule applies to execution sequence #44?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_325",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #45: In C# iteration mechanics, which rule applies to execution sequence #45?",
      "title": "Loop Structure Concept #45: In C# iteration mechanics, which rule applies to execution sequence #45?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_326",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #46: In C# iteration mechanics, which rule applies to execution sequence #46?",
      "title": "Loop Structure Concept #46: In C# iteration mechanics, which rule applies to execution sequence #46?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_327",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #47: In C# iteration mechanics, which rule applies to execution sequence #47?",
      "title": "Loop Structure Concept #47: In C# iteration mechanics, which rule applies to execution sequence #47?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_328",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #48: In C# iteration mechanics, which rule applies to execution sequence #48?",
      "title": "Loop Structure Concept #48: In C# iteration mechanics, which rule applies to execution sequence #48?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_329",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #49: In C# iteration mechanics, which rule applies to execution sequence #49?",
      "title": "Loop Structure Concept #49: In C# iteration mechanics, which rule applies to execution sequence #49?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_330",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #50: In C# iteration mechanics, which rule applies to execution sequence #50?",
      "title": "Loop Structure Concept #50: In C# iteration mechanics, which rule applies to execution sequence #50?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_331",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #51: In C# iteration mechanics, which rule applies to execution sequence #51?",
      "title": "Loop Structure Concept #51: In C# iteration mechanics, which rule applies to execution sequence #51?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_332",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #52: In C# iteration mechanics, which rule applies to execution sequence #52?",
      "title": "Loop Structure Concept #52: In C# iteration mechanics, which rule applies to execution sequence #52?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_333",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #53: In C# iteration mechanics, which rule applies to execution sequence #53?",
      "title": "Loop Structure Concept #53: In C# iteration mechanics, which rule applies to execution sequence #53?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_334",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #54: In C# iteration mechanics, which rule applies to execution sequence #54?",
      "title": "Loop Structure Concept #54: In C# iteration mechanics, which rule applies to execution sequence #54?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_335",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #55: In C# iteration mechanics, which rule applies to execution sequence #55?",
      "title": "Loop Structure Concept #55: In C# iteration mechanics, which rule applies to execution sequence #55?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_336",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #56: In C# iteration mechanics, which rule applies to execution sequence #56?",
      "title": "Loop Structure Concept #56: In C# iteration mechanics, which rule applies to execution sequence #56?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_337",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #57: In C# iteration mechanics, which rule applies to execution sequence #57?",
      "title": "Loop Structure Concept #57: In C# iteration mechanics, which rule applies to execution sequence #57?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_338",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #58: In C# iteration mechanics, which rule applies to execution sequence #58?",
      "title": "Loop Structure Concept #58: In C# iteration mechanics, which rule applies to execution sequence #58?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_339",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #59: In C# iteration mechanics, which rule applies to execution sequence #59?",
      "title": "Loop Structure Concept #59: In C# iteration mechanics, which rule applies to execution sequence #59?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_340",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #60: In C# iteration mechanics, which rule applies to execution sequence #60?",
      "title": "Loop Structure Concept #60: In C# iteration mechanics, which rule applies to execution sequence #60?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_341",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #61: In C# iteration mechanics, which rule applies to execution sequence #61?",
      "title": "Loop Structure Concept #61: In C# iteration mechanics, which rule applies to execution sequence #61?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_342",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #62: In C# iteration mechanics, which rule applies to execution sequence #62?",
      "title": "Loop Structure Concept #62: In C# iteration mechanics, which rule applies to execution sequence #62?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_343",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #63: In C# iteration mechanics, which rule applies to execution sequence #63?",
      "title": "Loop Structure Concept #63: In C# iteration mechanics, which rule applies to execution sequence #63?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_344",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #64: In C# iteration mechanics, which rule applies to execution sequence #64?",
      "title": "Loop Structure Concept #64: In C# iteration mechanics, which rule applies to execution sequence #64?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_345",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #65: In C# iteration mechanics, which rule applies to execution sequence #65?",
      "title": "Loop Structure Concept #65: In C# iteration mechanics, which rule applies to execution sequence #65?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_346",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #66: In C# iteration mechanics, which rule applies to execution sequence #66?",
      "title": "Loop Structure Concept #66: In C# iteration mechanics, which rule applies to execution sequence #66?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_347",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #67: In C# iteration mechanics, which rule applies to execution sequence #67?",
      "title": "Loop Structure Concept #67: In C# iteration mechanics, which rule applies to execution sequence #67?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_348",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #68: In C# iteration mechanics, which rule applies to execution sequence #68?",
      "title": "Loop Structure Concept #68: In C# iteration mechanics, which rule applies to execution sequence #68?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_349",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #69: In C# iteration mechanics, which rule applies to execution sequence #69?",
      "title": "Loop Structure Concept #69: In C# iteration mechanics, which rule applies to execution sequence #69?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_350",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Loop Structure Concept #70: In C# iteration mechanics, which rule applies to execution sequence #70?",
      "title": "Loop Structure Concept #70: In C# iteration mechanics, which rule applies to execution sequence #70?",
      "options": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "opts": [
        "A loop continuation condition must evaluate to a boolean expression (true or false)",
        "Loops cannot contain if statements inside their bodies",
        "The for loop cannot decrement variables",
        "While loops only execute when the form is minimized"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "explanation": "All C# loop continuation tests require a boolean expression that evaluates to true (continue) or false (exit).",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su-exam_351",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Which control type should be used for selecting vehicle type (Sedan, SUV, Bakkie) to ensure mutual exclusion?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Which control type should be used for selecting vehicle type (Sedan, SUV, Bakkie) to ensure mutual exclusion?",
      "options": [
        "RadioButtons inside a GroupBox",
        "CheckBoxes inside a Panel",
        "TextBoxes",
        "Labels"
      ],
      "opts": [
        "RadioButtons inside a GroupBox",
        "CheckBoxes inside a Panel",
        "TextBoxes",
        "Labels"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "RadioButtons grouped inside a container guarantee mutual exclusion.",
      "explanation": "RadioButtons grouped inside a container guarantee mutual exclusion.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_352",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What Hungarian prefix should be assigned to the rental days input TextBox?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What Hungarian prefix should be assigned to the rental days input TextBox?",
      "options": [
        "txtDays",
        "tbDays",
        "daysInput",
        "txt_days"
      ],
      "opts": [
        "txtDays",
        "tbDays",
        "daysInput",
        "txt_days"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "NWU standard Hungarian prefix for TextBoxes is 'txt'.",
      "explanation": "NWU standard Hungarian prefix for TextBoxes is 'txt'.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_353",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Which statement safely parses the days input into an integer variable 'days'?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Which statement safely parses the days input into an integer variable 'days'?",
      "options": [
        "int.TryParse(txtDays.Text, out days)",
        "days = int.Parse(txtDays.Text)",
        "days = (int)txtDays.Text",
        "days = txtDays.Text.ToInt()"
      ],
      "opts": [
        "int.TryParse(txtDays.Text, out days)",
        "days = int.Parse(txtDays.Text)",
        "days = (int)txtDays.Text",
        "days = txtDays.Text.ToInt()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "int.TryParse is defensive and avoids unhandled FormatException crashes.",
      "explanation": "int.TryParse is defensive and avoids unhandled FormatException crashes.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_354",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] If a customer rents an SUV for 4 days, what is the base rental charge (R650/day)?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] If a customer rents an SUV for 4 days, what is the base rental charge (R650/day)?",
      "options": [
        "R 2,600.00",
        "R 2,400.00",
        "R 1,800.00",
        "R 3,000.00"
      ],
      "opts": [
        "R 2,600.00",
        "R 2,400.00",
        "R 1,800.00",
        "R 3,000.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "4 days * R650/day = R2,600.00.",
      "explanation": "4 days * R650/day = R2,600.00.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_355",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] How is the free mileage allowance calculated for 'days' rented?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] How is the free mileage allowance calculated for 'days' rented?",
      "options": [
        "days * 150m",
        "days * 100m",
        "150m",
        "days + 150m"
      ],
      "opts": [
        "days * 150m",
        "days * 100m",
        "150m",
        "days + 150m"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Allowance is 150 km per day: days * 150.",
      "explanation": "Allowance is 150 km per day: days * 150.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_356",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] If total km driven is 500 and free km is 300, what is the excess mileage surcharge at R3.50/km?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] If total km driven is 500 and free km is 300, what is the excess mileage surcharge at R3.50/km?",
      "options": [
        "R 700.00",
        "R 500.00",
        "R 1,050.00",
        "R 350.00"
      ],
      "opts": [
        "R 700.00",
        "R 500.00",
        "R 1,050.00",
        "R 350.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Excess km = 500 - 300 = 200 km. Surcharge = 200 * R3.50 = R700.00.",
      "explanation": "Excess km = 500 - 300 = 200 km. Surcharge = 200 * R3.50 = R700.00.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_357",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] How should the optional GPS checkbox (chkGps) be tested in the calculation?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] How should the optional GPS checkbox (chkGps) be tested in the calculation?",
      "options": [
        "if (chkGps.Checked) { total += days * 80m; }",
        "if (chkGps.Text == \"true\")",
        "if (chkGps.Selected)",
        "if (chkGps.Value == 1)"
      ],
      "opts": [
        "if (chkGps.Checked) { total += days * 80m; }",
        "if (chkGps.Text == \"true\")",
        "if (chkGps.Selected)",
        "if (chkGps.Value == 1)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Checked property is boolean: if (chkGps.Checked).",
      "explanation": "Checked property is boolean: if (chkGps.Checked).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_358",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What format specifier must be used when displaying total due in lblTotalDue?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What format specifier must be used when displaying total due in lblTotalDue?",
      "options": [
        "lblTotalDue.Text = total.ToString(\"C\");",
        "lblTotalDue.Text = total.ToString(\"F\");",
        "lblTotalDue.Text = total.ToString(\"D\");",
        "lblTotalDue.Text = total.ToString();"
      ],
      "opts": [
        "lblTotalDue.Text = total.ToString(\"C\");",
        "lblTotalDue.Text = total.ToString(\"F\");",
        "lblTotalDue.Text = total.ToString(\"D\");",
        "lblTotalDue.Text = total.ToString();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Currency formatting requires .ToString(\"C\").",
      "explanation": "Currency formatting requires .ToString(\"C\").",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_359",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Which event handler executes when the user clicks btnClear?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Which event handler executes when the user clicks btnClear?",
      "options": [
        "private void btnClear_Click(object sender, EventArgs e)",
        "private void Clear_Form()",
        "public void btnClear()",
        "void OnClear()"
      ],
      "opts": [
        "private void btnClear_Click(object sender, EventArgs e)",
        "private void Clear_Form()",
        "public void btnClear()",
        "void OnClear()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard event handler signature for button click.",
      "explanation": "Standard event handler signature for button click.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_360",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What code resets all input controls to their default blank state in btnClear_Click?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What code resets all input controls to their default blank state in btnClear_Click?",
      "options": [
        "txtDays.Clear(); txtKms.Clear(); rdoSedan.Checked = true; chkGps.Checked = false; lblTotalDue.Text = \"\";",
        "this.Close();",
        "Application.Restart();",
        "Form.Reset();"
      ],
      "opts": [
        "txtDays.Clear(); txtKms.Clear(); rdoSedan.Checked = true; chkGps.Checked = false; lblTotalDue.Text = \"\";",
        "this.Close();",
        "Application.Restart();",
        "Form.Reset();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Explicitly clearing input textboxes, resetting default radio button, and clearing labels.",
      "explanation": "Explicitly clearing input textboxes, resetting default radio button, and clearing labels.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_361",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What statement closes the car rental application when btnExit is clicked?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What statement closes the car rental application when btnExit is clicked?",
      "options": [
        "this.Close();",
        "Application.Halt();",
        "Close();",
        "Exit.Form();"
      ],
      "opts": [
        "this.Close();",
        "Application.Halt();",
        "Close();",
        "Exit.Form();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'this.Close();' terminates the form.",
      "explanation": "'this.Close();' terminates the form.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_362",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What validation check ensures that entered days is greater than 0?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What validation check ensures that entered days is greater than 0?",
      "options": [
        "if (days <= 0) { MessageBox.Show(\"Days must be greater than zero.\"); return; }",
        "if (days == 0)",
        "while (days > 0)",
        "days.Validate()"
      ],
      "opts": [
        "if (days <= 0) { MessageBox.Show(\"Days must be greater than zero.\"); return; }",
        "if (days == 0)",
        "while (days > 0)",
        "days.Validate()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Checking days <= 0 prevents invalid or negative billing periods.",
      "explanation": "Checking days <= 0 prevents invalid or negative billing periods.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_363",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] If the user leaves txtKms blank, what does decimal.TryParse return?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] If the user leaves txtKms blank, what does decimal.TryParse return?",
      "options": [
        "false",
        "true",
        "0",
        "Throws exception"
      ],
      "opts": [
        "false",
        "true",
        "0",
        "Throws exception"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "TryParse returns false on empty strings.",
      "explanation": "TryParse returns false on empty strings.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_364",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Where should the vehicle daily rates (450m, 650m, 750m) be defined for best maintainability?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Where should the vehicle daily rates (450m, 650m, 750m) be defined for best maintainability?",
      "options": [
        "As named constants at the beginning of the event handler or class level",
        "Hardcoded as magic numbers on every line",
        "In a comment only",
        "In the form title"
      ],
      "opts": [
        "As named constants at the beginning of the event handler or class level",
        "Hardcoded as magic numbers on every line",
        "In a comment only",
        "In the form title"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Named constants prevent magic numbers and enhance maintainability.",
      "explanation": "Named constants prevent magic numbers and enhance maintainability.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_365",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Which control should display the formatted itemized receipt breakdown?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Which control should display the formatted itemized receipt breakdown?",
      "options": [
        "ListBox (lstReceipt)",
        "TextBox with ReadOnly=false",
        "Timer",
        "PictureBox"
      ],
      "opts": [
        "ListBox (lstReceipt)",
        "TextBox with ReadOnly=false",
        "Timer",
        "PictureBox"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "ListBox is the standard control for multi-line invoice itemization.",
      "explanation": "ListBox is the standard control for multi-line invoice itemization.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_366",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What HCI 8 Golden Rules principle is upheld by asking confirmation before exiting in btnExit_Click?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What HCI 8 Golden Rules principle is upheld by asking confirmation before exiting in btnExit_Click?",
      "options": [
        "Rule 6: Permit easy reversal of actions (and error prevention)",
        "Rule 1: Strive for consistency only",
        "Rule 8: Short-term memory only",
        "Rule 2: Universal usability only"
      ],
      "opts": [
        "Rule 6: Permit easy reversal of actions (and error prevention)",
        "Rule 1: Strive for consistency only",
        "Rule 8: Short-term memory only",
        "Rule 2: Universal usability only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Exit confirmations prevent accidental closure and loss of session work.",
      "explanation": "Exit confirmations prevent accidental closure and loss of session work.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_367",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What Hungarian prefix should be used for the credits input TextBox?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What Hungarian prefix should be used for the credits input TextBox?",
      "options": [
        "txtCredits",
        "tbCredits",
        "crInput",
        "txt_cr"
      ],
      "opts": [
        "txtCredits",
        "tbCredits",
        "crInput",
        "txt_cr"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard Hungarian prefix is 'txt'.",
      "explanation": "Standard Hungarian prefix is 'txt'.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_368",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If cost per credit is R850 and credits is 12, what is the base tuition fee?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If cost per credit is R850 and credits is 12, what is the base tuition fee?",
      "options": [
        "R 10,200.00",
        "R 8,500.00",
        "R 12,000.00",
        "R 9,600.00"
      ],
      "opts": [
        "R 10,200.00",
        "R 8,500.00",
        "R 12,000.00",
        "R 9,600.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "12 * R850 = R10,200.00.",
      "explanation": "12 * R850 = R10,200.00.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_369",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which faculty radio button adds a R2,500 science laboratory levy?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which faculty radio button adds a R2,500 science laboratory levy?",
      "options": [
        "rdoScience",
        "chkScience",
        "btnScience",
        "txtScience"
      ],
      "opts": [
        "rdoScience",
        "chkScience",
        "btnScience",
        "txtScience"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Radio buttons use 'rdo' prefix: rdoScience.",
      "explanation": "Radio buttons use 'rdo' prefix: rdoScience.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_370",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] How is a 25% merit bursary deduction applied to tuition?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] How is a 25% merit bursary deduction applied to tuition?",
      "options": [
        "tuition = tuition - (tuition * 0.25m);",
        "tuition = tuition - 25m;",
        "tuition = tuition / 0.25m;",
        "tuition = tuition * 25m;"
      ],
      "opts": [
        "tuition = tuition - (tuition * 0.25m);",
        "tuition = tuition - 25m;",
        "tuition = tuition / 0.25m;",
        "tuition = tuition * 25m;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Deduct 25%: tuition -= tuition * 0.25m.",
      "explanation": "Deduct 25%: tuition -= tuition * 0.25m.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_371",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] How many semester installments should be generated if a while loop divides the net tuition over 4 months?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] How many semester installments should be generated if a while loop divides the net tuition over 4 months?",
      "options": [
        "4 items added to lstInstallments",
        "1 item",
        "12 items",
        "0 items"
      ],
      "opts": [
        "4 items added to lstInstallments",
        "1 item",
        "12 items",
        "0 items"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A 4-month loop generates 4 monthly installment entries.",
      "explanation": "A 4-month loop generates 4 monthly installment entries.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_372",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which loop structure is best suited when dividing tuition into a fixed 4 installment projection?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which loop structure is best suited when dividing tuition into a fixed 4 installment projection?",
      "options": [
        "for (int month = 1; month <= 4; month++)",
        "while (true)",
        "do-while (false)",
        "switch (month)"
      ],
      "opts": [
        "for (int month = 1; month <= 4; month++)",
        "while (true)",
        "do-while (false)",
        "switch (month)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A count-controlled for loop is ideal for known fixed iterations.",
      "explanation": "A count-controlled for loop is ideal for known fixed iterations.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_373",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What string is added to the ListBox for installment 1 of R2,500?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What string is added to the ListBox for installment 1 of R2,500?",
      "options": [
        "lstInstallments.Items.Add(\"Month 1: \" + (2500m).ToString(\"C\"));",
        "lstInstallments.Add(2500);",
        "lstInstallments.Items = 2500;",
        "lstInstallments.Text = \"Month 1\";"
      ],
      "opts": [
        "lstInstallments.Items.Add(\"Month 1: \" + (2500m).ToString(\"C\"));",
        "lstInstallments.Add(2500);",
        "lstInstallments.Items = 2500;",
        "lstInstallments.Text = \"Month 1\";"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Items.Add with string concatenation and ToString(\"C\").",
      "explanation": "Items.Add with string concatenation and ToString(\"C\").",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_374",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What defensive check prevents division by zero if months entered is 0?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What defensive check prevents division by zero if months entered is 0?",
      "options": [
        "if (months <= 0) { MessageBox.Show(\"Months must be at least 1.\"); return; }",
        "months = 0;",
        "try { } catch { }",
        "months++;"
      ],
      "opts": [
        "if (months <= 0) { MessageBox.Show(\"Months must be at least 1.\"); return; }",
        "months = 0;",
        "try { } catch { }",
        "months++;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Validating months > 0 prevents DivideByZeroException.",
      "explanation": "Validating months > 0 prevents DivideByZeroException.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_375",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What method sets focus back to txtCredits after an invalid input error?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What method sets focus back to txtCredits after an invalid input error?",
      "options": [
        "txtCredits.Focus();",
        "txtCredits.Select();",
        "txtCredits.Clear();",
        "txtCredits.Active = true;"
      ],
      "opts": [
        "txtCredits.Focus();",
        "txtCredits.Select();",
        "txtCredits.Clear();",
        "txtCredits.Active = true;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Focus() directs the user to the invalid field.",
      "explanation": "Focus() directs the user to the invalid field.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_376",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which method selects all text in txtCredits so the user can easily re-type it?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which method selects all text in txtCredits so the user can easily re-type it?",
      "options": [
        "txtCredits.SelectAll();",
        "txtCredits.Focus();",
        "txtCredits.Clear();",
        "txtCredits.ResetText();"
      ],
      "opts": [
        "txtCredits.SelectAll();",
        "txtCredits.Focus();",
        "txtCredits.Clear();",
        "txtCredits.ResetText();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "SelectAll() highlights all text in the textbox.",
      "explanation": "SelectAll() highlights all text in the textbox.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_377",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which exception is caught if integer parsing fails inside a try-catch block?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which exception is caught if integer parsing fails inside a try-catch block?",
      "options": [
        "FormatException",
        "OverflowException",
        "DivideByZeroException",
        "ArgumentException"
      ],
      "opts": [
        "FormatException",
        "OverflowException",
        "DivideByZeroException",
        "ArgumentException"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "FormatException handles non-numeric strings.",
      "explanation": "FormatException handles non-numeric strings.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_378",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What property indicates whether the bursary checkbox is ticked?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What property indicates whether the bursary checkbox is ticked?",
      "options": [
        "chkBursary.Checked",
        "chkBursary.Selected",
        "chkBursary.Value",
        "chkBursary.State"
      ],
      "opts": [
        "chkBursary.Checked",
        "chkBursary.Selected",
        "chkBursary.Value",
        "chkBursary.State"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Checked property returns true or false.",
      "explanation": "Checked property returns true or false.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_379",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If credit count entered is 30, which exceeds max allowable credits of 25, what should be displayed?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If credit count entered is 30, which exceeds max allowable credits of 25, what should be displayed?",
      "options": [
        "MessageBox warning stating credits cannot exceed 25",
        "Close the form",
        "Ignore and continue",
        "Crash program"
      ],
      "opts": [
        "MessageBox warning stating credits cannot exceed 25",
        "Close the form",
        "Ignore and continue",
        "Crash program"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Defensive business rule validation with clear error feedback.",
      "explanation": "Defensive business rule validation with clear error feedback.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_380",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What specifier formats a decimal to 2 fixed decimal places without currency symbols?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What specifier formats a decimal to 2 fixed decimal places without currency symbols?",
      "options": [
        "\"F2\"",
        "\"C2\"",
        "\"P2\"",
        "\"D2\""
      ],
      "opts": [
        "\"F2\"",
        "\"C2\"",
        "\"P2\"",
        "\"D2\""
      ],
      "answer": 0,
      "ans": 0,
      "exp": "\"F2\" formats as fixed point with 2 decimals.",
      "explanation": "\"F2\" formats as fixed point with 2 decimals.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_381",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Where should the semester tuition calculation be triggered in the GUI?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Where should the semester tuition calculation be triggered in the GUI?",
      "options": [
        "btnCalculate_Click event handler",
        "Form_Load event handler",
        "Form_Closed event handler",
        "Timer_Tick"
      ],
      "opts": [
        "btnCalculate_Click event handler",
        "Form_Load event handler",
        "Form_Closed event handler",
        "Timer_Tick"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Calculations are triggered by the user clicking the calculate button.",
      "explanation": "Calculations are triggered by the user clicking the calculate button.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_382",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What NWU standard governs naming the calculate button?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What NWU standard governs naming the calculate button?",
      "options": [
        "btnCalculate (btn prefix + PascalCase action)",
        "calculateButton",
        "Button1",
        "btn_calc_salary"
      ],
      "opts": [
        "btnCalculate (btn prefix + PascalCase action)",
        "calculateButton",
        "Button1",
        "btn_calc_salary"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "NWU Hungarian notation requires 'btn' prefix followed by PascalCase descriptor.",
      "explanation": "NWU Hungarian notation requires 'btn' prefix followed by PascalCase descriptor.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_383",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What radio button prefix is standard for the Gym Standard membership tier?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What radio button prefix is standard for the Gym Standard membership tier?",
      "options": [
        "rdoStandard",
        "radStandard",
        "optStandard",
        "btnStandard"
      ],
      "opts": [
        "rdoStandard",
        "radStandard",
        "optStandard",
        "btnStandard"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard NWU prefixes include 'rdo' or 'rad'.",
      "explanation": "Standard NWU prefixes include 'rdo' or 'rad'.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_384",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] If VIP membership is R600/month and personal trainer checkbox adds R250/month, what is the subtotal before VAT?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] If VIP membership is R600/month and personal trainer checkbox adds R250/month, what is the subtotal before VAT?",
      "options": [
        "R 850.00",
        "R 600.00",
        "R 250.00",
        "R 1,100.00"
      ],
      "opts": [
        "R 850.00",
        "R 600.00",
        "R 250.00",
        "R 1,100.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "600 + 250 = R850.00.",
      "explanation": "600 + 250 = R850.00.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_385",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] How is 15% South African VAT calculated on subtotal?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] How is 15% South African VAT calculated on subtotal?",
      "options": [
        "decimal vat = subtotal * 0.15m;",
        "decimal vat = subtotal * 15;",
        "decimal vat = subtotal / 0.15m;",
        "decimal vat = subtotal + 0.15m;"
      ],
      "opts": [
        "decimal vat = subtotal * 0.15m;",
        "decimal vat = subtotal * 15;",
        "decimal vat = subtotal / 0.15m;",
        "decimal vat = subtotal + 0.15m;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "VAT = subtotal * 0.15m.",
      "explanation": "VAT = subtotal * 0.15m.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_386",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What is total monthly charge including 15% VAT on R850 subtotal?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What is total monthly charge including 15% VAT on R850 subtotal?",
      "options": [
        "R 977.50",
        "R 850.00",
        "R 127.50",
        "R 1,000.00"
      ],
      "opts": [
        "R 977.50",
        "R 850.00",
        "R 127.50",
        "R 1,000.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "850 + (850 * 0.15) = 850 + 127.50 = R977.50.",
      "explanation": "850 + (850 * 0.15) = 850 + 127.50 = R977.50.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_387",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] How is a 12-month projection accumulated and populated in lstDebitOrders?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] How is a 12-month projection accumulated and populated in lstDebitOrders?",
      "options": [
        "for (int m = 1; m <= 12; m++) { lstDebitOrders.Items.Add($\"Month {m}: {m * monthlyTotal:C}\"); }",
        "while (false)",
        "lstDebitOrders.Items.Add(12)",
        "switch (m)"
      ],
      "opts": [
        "for (int m = 1; m <= 12; m++) { lstDebitOrders.Items.Add($\"Month {m}: {m * monthlyTotal:C}\"); }",
        "while (false)",
        "lstDebitOrders.Items.Add(12)",
        "switch (m)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A 12-iteration loop adding monthly projected cumulative debit order values.",
      "explanation": "A 12-iteration loop adding monthly projected cumulative debit order values.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_388",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What happens if the user does not select any membership tier radio button?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What happens if the user does not select any membership tier radio button?",
      "options": [
        "Display MessageBox prompting user to select a tier",
        "Default to standard tier silently",
        "Crash application",
        "Close form"
      ],
      "opts": [
        "Display MessageBox prompting user to select a tier",
        "Default to standard tier silently",
        "Crash application",
        "Close form"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Validate that at least one radio button in the group is checked.",
      "explanation": "Validate that at least one radio button in the group is checked.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_389",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which statement correctly checks if no tier is selected?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which statement correctly checks if no tier is selected?",
      "options": [
        "if (!rdoStandard.Checked && !rdoPremium.Checked && !rdoVip.Checked)",
        "if (rdoStandard == null)",
        "if (grpTiers.Selected == false)",
        "if (rdoStandard.Checked == 0)"
      ],
      "opts": [
        "if (!rdoStandard.Checked && !rdoPremium.Checked && !rdoVip.Checked)",
        "if (rdoStandard == null)",
        "if (grpTiers.Selected == false)",
        "if (rdoStandard.Checked == 0)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Verifying all radio buttons in the group are unchecked.",
      "explanation": "Verifying all radio buttons in the group are unchecked.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_390",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What method clears the 12-month projection list before re-calculating?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What method clears the 12-month projection list before re-calculating?",
      "options": [
        "lstDebitOrders.Items.Clear();",
        "lstDebitOrders.Clear();",
        "lstDebitOrders.Reset();",
        "lstDebitOrders.Items.RemoveAll();"
      ],
      "opts": [
        "lstDebitOrders.Items.Clear();",
        "lstDebitOrders.Clear();",
        "lstDebitOrders.Reset();",
        "lstDebitOrders.Items.RemoveAll();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Items.Clear() clears previous projection entries.",
      "explanation": "Items.Clear() clears previous projection entries.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_391",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What variable type should represent money amounts (subtotal, VAT, total)?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What variable type should represent money amounts (subtotal, VAT, total)?",
      "options": [
        "decimal",
        "double",
        "float",
        "int"
      ],
      "opts": [
        "decimal",
        "double",
        "float",
        "int"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Decimal is mandatory for currency.",
      "explanation": "Decimal is mandatory for currency.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_392",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What format specifier displays the percentage VAT rate (0.15) as '15.0%'?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What format specifier displays the percentage VAT rate (0.15) as '15.0%'?",
      "options": [
        "(0.15).ToString(\"P1\")",
        "(0.15).ToString(\"C\")",
        "(0.15).ToString(\"N\")",
        "(0.15).ToString(\"F\")"
      ],
      "opts": [
        "(0.15).ToString(\"P1\")",
        "(0.15).ToString(\"C\")",
        "(0.15).ToString(\"N\")",
        "(0.15).ToString(\"F\")"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "\"P1\" displays percentage with 1 decimal digit.",
      "explanation": "\"P1\" displays percentage with 1 decimal digit.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_393",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property sets the background color of the form or card?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property sets the background color of the form or card?",
      "options": [
        "BackColor",
        "ForeColor",
        "Color",
        "Background"
      ],
      "opts": [
        "BackColor",
        "ForeColor",
        "Color",
        "Background"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "BackColor sets background color.",
      "explanation": "BackColor sets background color.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_394",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property sets the text font color of a Label?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property sets the text font color of a Label?",
      "options": [
        "ForeColor",
        "TextColor",
        "FontColor",
        "Color"
      ],
      "opts": [
        "ForeColor",
        "TextColor",
        "FontColor",
        "Color"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "ForeColor sets foreground text color.",
      "explanation": "ForeColor sets foreground text color.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_395",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What is the effect of setting FormBorderStyle = FixedSingle on Form1?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What is the effect of setting FormBorderStyle = FixedSingle on Form1?",
      "options": [
        "Prevents the user from resizing the window by dragging its borders",
        "Hides the title bar",
        "Minimizes form",
        "Removes close button"
      ],
      "opts": [
        "Prevents the user from resizing the window by dragging its borders",
        "Hides the title bar",
        "Minimizes form",
        "Removes close button"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "FixedSingle creates a fixed non-resizable border.",
      "explanation": "FixedSingle creates a fixed non-resizable border.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_396",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property centres the form on the screen when the application launches?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property centres the form on the screen when the application launches?",
      "options": [
        "StartPosition = FormStartPosition.CenterScreen;",
        "Location = Center",
        "CenterToScreen()",
        "Align = Center"
      ],
      "opts": [
        "StartPosition = FormStartPosition.CenterScreen;",
        "Location = Center",
        "CenterToScreen()",
        "Align = Center"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "FormStartPosition.CenterScreen centers window on display.",
      "explanation": "FormStartPosition.CenterScreen centers window on display.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_397",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which statement provides an Exit confirmation dialog with Yes/No buttons?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which statement provides an Exit confirmation dialog with Yes/No buttons?",
      "options": [
        "DialogResult res = MessageBox.Show(\"Exit?\", \"Confirm\", MessageBoxButtons.YesNo); if (res == DialogResult.Yes) this.Close();",
        "this.Close();",
        "MessageBox.Show(\"Exit\");",
        "Close()"
      ],
      "opts": [
        "DialogResult res = MessageBox.Show(\"Exit?\", \"Confirm\", MessageBoxButtons.YesNo); if (res == DialogResult.Yes) this.Close();",
        "this.Close();",
        "MessageBox.Show(\"Exit\");",
        "Close()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "DialogResult evaluates user choice on Yes/No message boxes.",
      "explanation": "DialogResult evaluates user choice on Yes/No message boxes.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_398",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What Shneiderman Golden Rule is supported by displaying detailed VAT itemization?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What Shneiderman Golden Rule is supported by displaying detailed VAT itemization?",
      "options": [
        "Rule 3: Offer informative feedback",
        "Rule 1: Consistency only",
        "Rule 5: Error prevention only",
        "Rule 7: Internal locus only"
      ],
      "opts": [
        "Rule 3: Offer informative feedback",
        "Rule 1: Consistency only",
        "Rule 5: Error prevention only",
        "Rule 7: Internal locus only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Informative feedback provides complete, transparent transaction details.",
      "explanation": "Informative feedback provides complete, transparent transaction details.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_399",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What prefix is used for the nights input TextBox in hotel booking?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What prefix is used for the nights input TextBox in hotel booking?",
      "options": [
        "txtNights",
        "tbNights",
        "nightsText",
        "inputNights"
      ],
      "opts": [
        "txtNights",
        "tbNights",
        "nightsText",
        "inputNights"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard Hungarian prefix 'txt'.",
      "explanation": "Standard Hungarian prefix 'txt'.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_400",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] If standard room rate is R950/night, what is the room charge for 3 nights?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] If standard room rate is R950/night, what is the room charge for 3 nights?",
      "options": [
        "R 2,850.00",
        "R 2,700.00",
        "R 3,000.00",
        "R 1,900.00"
      ],
      "opts": [
        "R 2,850.00",
        "R 2,700.00",
        "R 3,000.00",
        "R 1,900.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "3 * R950 = R2,850.00.",
      "explanation": "3 * R950 = R2,850.00.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_401",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] How is breakfast add-on (R120 per person per night for 2 guests for 3 nights) calculated?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] How is breakfast add-on (R120 per person per night for 2 guests for 3 nights) calculated?",
      "options": [
        "3 * 2 * 120m = R 720.00",
        "3 * 120m",
        "2 * 120m",
        "120m"
      ],
      "opts": [
        "3 * 2 * 120m = R 720.00",
        "3 * 120m",
        "2 * 120m",
        "120m"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Nights * Guests * Rate = 3 * 2 * 120 = R720.00.",
      "explanation": "Nights * Guests * Rate = 3 * 2 * 120 = R720.00.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_402",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which control should allow selecting room type (Standard, Deluxe, Penthouse)?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which control should allow selecting room type (Standard, Deluxe, Penthouse)?",
      "options": [
        "RadioButtons in GroupBox (rdoStandard, rdoDeluxe, rdoPenthouse)",
        "CheckBox",
        "TextBox",
        "Timer"
      ],
      "opts": [
        "RadioButtons in GroupBox (rdoStandard, rdoDeluxe, rdoPenthouse)",
        "CheckBox",
        "TextBox",
        "Timer"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Mutually exclusive room tier selection.",
      "explanation": "Mutually exclusive room tier selection.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_403",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What check ensures entered nights is between 1 and 30?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What check ensures entered nights is between 1 and 30?",
      "options": [
        "if (nights >= 1 && nights <= 30)",
        "if (nights < 30)",
        "if (nights == 1)",
        "if (nights != 0)"
      ],
      "opts": [
        "if (nights >= 1 && nights <= 30)",
        "if (nights < 30)",
        "if (nights == 1)",
        "if (nights != 0)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Range validation check: nights >= 1 && nights <= 30.",
      "explanation": "Range validation check: nights >= 1 && nights <= 30.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_404",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What statement parses guests count from txtGuests?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What statement parses guests count from txtGuests?",
      "options": [
        "int.TryParse(txtGuests.Text, out guests)",
        "int.Parse(txtGuests.Text)",
        "Convert.ToInt32(txtGuests.Text)",
        "(int)txtGuests.Text"
      ],
      "opts": [
        "int.TryParse(txtGuests.Text, out guests)",
        "int.Parse(txtGuests.Text)",
        "Convert.ToInt32(txtGuests.Text)",
        "(int)txtGuests.Text"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "int.TryParse provides safe parsing.",
      "explanation": "int.TryParse provides safe parsing.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_405",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] How is the booking reference generated using the Random class for a 4-digit number between 1000 and 9999?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] How is the booking reference generated using the Random class for a 4-digit number between 1000 and 9999?",
      "options": [
        "Random rand = new Random(); int refNo = rand.Next(1000, 10000);",
        "Random.Generate(4)",
        "rand.Next(4)",
        "Math.Random()"
      ],
      "opts": [
        "Random rand = new Random(); int refNo = rand.Next(1000, 10000);",
        "Random.Generate(4)",
        "rand.Next(4)",
        "Math.Random()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "rand.Next(min, maxExclusive) generates numbers in range [1000, 9999].",
      "explanation": "rand.Next(min, maxExclusive) generates numbers in range [1000, 9999].",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_406",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Where should the Random object typically be instantiated in a Windows Form class?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Where should the Random object typically be instantiated in a Windows Form class?",
      "options": [
        "As a class-level field variable so seeds are not duplicated rapidly",
        "Inside every loop iteration",
        "In Program.cs only",
        "Inside txtGuests.Text"
      ],
      "opts": [
        "As a class-level field variable so seeds are not duplicated rapidly",
        "Inside every loop iteration",
        "In Program.cs only",
        "Inside txtGuests.Text"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Field-level Random avoids identical seeds on rapid clicks.",
      "explanation": "Field-level Random avoids identical seeds on rapid clicks.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_407",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] How is the invoice total formatted in lblTotal?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] How is the invoice total formatted in lblTotal?",
      "options": [
        "lblTotal.Text = total.ToString(\"C\");",
        "lblTotal.Text = total.ToString(\"F\");",
        "lblTotal.Text = total.ToString(\"N\");",
        "lblTotal.Text = total.ToString();"
      ],
      "opts": [
        "lblTotal.Text = total.ToString(\"C\");",
        "lblTotal.Text = total.ToString(\"F\");",
        "lblTotal.Text = total.ToString(\"N\");",
        "lblTotal.Text = total.ToString();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Currency formatting .ToString(\"C\").",
      "explanation": "Currency formatting .ToString(\"C\").",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_408",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What method clears the cart items in lstBookingDetails?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What method clears the cart items in lstBookingDetails?",
      "options": [
        "lstBookingDetails.Items.Clear();",
        "lstBookingDetails.Clear();",
        "lstBookingDetails.Reset();",
        "lstBookingDetails.RemoveAll();"
      ],
      "opts": [
        "lstBookingDetails.Items.Clear();",
        "lstBookingDetails.Clear();",
        "lstBookingDetails.Reset();",
        "lstBookingDetails.RemoveAll();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Items.Clear() clears all entries.",
      "explanation": "Items.Clear() clears all entries.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_409",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which statement verifies an item is selected in lstRooms before attempting to remove it?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which statement verifies an item is selected in lstRooms before attempting to remove it?",
      "options": [
        "if (lstRooms.SelectedIndex != -1)",
        "if (lstRooms.SelectedIndex == 0)",
        "if (lstRooms.SelectedItem != \"\")",
        "if (lstRooms.Count > 0)"
      ],
      "opts": [
        "if (lstRooms.SelectedIndex != -1)",
        "if (lstRooms.SelectedIndex == 0)",
        "if (lstRooms.SelectedItem != \"\")",
        "if (lstRooms.Count > 0)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "SelectedIndex != -1 ensures an item is highlighted.",
      "explanation": "SelectedIndex != -1 ensures an item is highlighted.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_410",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What exception is thrown if you try to access lstRooms.Items[10] when it only contains 3 items?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What exception is thrown if you try to access lstRooms.Items[10] when it only contains 3 items?",
      "options": [
        "ArgumentOutOfRangeException",
        "FormatException",
        "DivideByZeroException",
        "OverflowException"
      ],
      "opts": [
        "ArgumentOutOfRangeException",
        "FormatException",
        "DivideByZeroException",
        "OverflowException"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Index out of bounds throws ArgumentOutOfRangeException.",
      "explanation": "Index out of bounds throws ArgumentOutOfRangeException.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_411",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which property disables a button (e.g. btnConfirm) until validation passes?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which property disables a button (e.g. btnConfirm) until validation passes?",
      "options": [
        "btnConfirm.Enabled = false;",
        "btnConfirm.Visible = false;",
        "btnConfirm.Active = false;",
        "btnConfirm.Lock = true;"
      ],
      "opts": [
        "btnConfirm.Enabled = false;",
        "btnConfirm.Visible = false;",
        "btnConfirm.Active = false;",
        "btnConfirm.Lock = true;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Enabled = false disables button interactions.",
      "explanation": "Enabled = false disables button interactions.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_412",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What visual feedback does a disabled button give the user?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What visual feedback does a disabled button give the user?",
      "options": [
        "It appears grayed-out and does not respond to mouse clicks or hover",
        "It disappears completely",
        "It turns bright green",
        "It moves to the corner"
      ],
      "opts": [
        "It appears grayed-out and does not respond to mouse clicks or hover",
        "It disappears completely",
        "It turns bright green",
        "It moves to the corner"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Disabled controls are visually dimmed to signal unreadiness.",
      "explanation": "Disabled controls are visually dimmed to signal unreadiness.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_413",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which Shneiderman Golden Rule is demonstrated by disabling the Confirm button until fields are valid?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which Shneiderman Golden Rule is demonstrated by disabling the Confirm button until fields are valid?",
      "options": [
        "Rule 5: Prevent errors",
        "Rule 8: Short-term memory only",
        "Rule 2: Universal usability only",
        "Rule 6: Reversal of actions only"
      ],
      "opts": [
        "Rule 5: Prevent errors",
        "Rule 8: Short-term memory only",
        "Rule 2: Universal usability only",
        "Rule 6: Reversal of actions only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Error prevention proactively stops users from submitting bad states.",
      "explanation": "Error prevention proactively stops users from submitting bad states.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_414",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What statement closes Form1 when the user clicks btnExit?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What statement closes Form1 when the user clicks btnExit?",
      "options": [
        "this.Close();",
        "Application.Exit();",
        "Close.This();",
        "Exit();"
      ],
      "opts": [
        "this.Close();",
        "Application.Exit();",
        "Close.This();",
        "Exit();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'this.Close();' closes the form instance.",
      "explanation": "'this.Close();' closes the form instance.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_415",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What prefix is used for the item price input TextBox?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What prefix is used for the item price input TextBox?",
      "options": [
        "txtPrice",
        "tbPrice",
        "priceText",
        "txt_price"
      ],
      "opts": [
        "txtPrice",
        "tbPrice",
        "priceText",
        "txt_price"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard Hungarian prefix 'txt'.",
      "explanation": "Standard Hungarian prefix 'txt'.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_416",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What statement parses quantity from txtQuantity into int 'qty'?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What statement parses quantity from txtQuantity into int 'qty'?",
      "options": [
        "int.TryParse(txtQuantity.Text, out qty)",
        "int.Parse(txtQuantity.Text)",
        "Convert.ToInt32(txtQuantity.Text)",
        "(int)txtQuantity.Text"
      ],
      "opts": [
        "int.TryParse(txtQuantity.Text, out qty)",
        "int.Parse(txtQuantity.Text)",
        "Convert.ToInt32(txtQuantity.Text)",
        "(int)txtQuantity.Text"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Safe parsing with TryParse.",
      "explanation": "Safe parsing with TryParse.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_417",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If item price is R150 and qty is 3, what is the item line subtotal?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If item price is R150 and qty is 3, what is the item line subtotal?",
      "options": [
        "R 450.00",
        "R 300.00",
        "R 150.00",
        "R 600.00"
      ],
      "opts": [
        "R 450.00",
        "R 300.00",
        "R 150.00",
        "R 600.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "3 * 150 = R450.00.",
      "explanation": "3 * 150 = R450.00.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_418",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If customer purchases 10 or more units, a 15% volume discount applies. How is this evaluated?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If customer purchases 10 or more units, a 15% volume discount applies. How is this evaluated?",
      "options": [
        "if (qty >= 10) { discount = subtotal * 0.15m; }",
        "if (qty == 10)",
        "if (qty > 15)",
        "switch (qty)"
      ],
      "opts": [
        "if (qty >= 10) { discount = subtotal * 0.15m; }",
        "if (qty == 10)",
        "if (qty > 15)",
        "switch (qty)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Tiered volume discount condition: if (qty >= 10).",
      "explanation": "Tiered volume discount condition: if (qty >= 10).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_419",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] How are loyalty points calculated if customers earn 1 point for every complete R50 spent?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] How are loyalty points calculated if customers earn 1 point for every complete R50 spent?",
      "options": [
        "int points = (int)(netTotal / 50m);",
        "int points = netTotal * 50;",
        "int points = netTotal % 50;",
        "int points = 50;"
      ],
      "opts": [
        "int points = (int)(netTotal / 50m);",
        "int points = netTotal * 50;",
        "int points = netTotal % 50;",
        "int points = 50;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Integer division gives whole points: (int)(netTotal / 50m).",
      "explanation": "Integer division gives whole points: (int)(netTotal / 50m).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_420",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which control is used to display the line-by-line itemized sales receipt?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which control is used to display the line-by-line itemized sales receipt?",
      "options": [
        "ListBox (lstReceipt)",
        "Label",
        "RadioButton",
        "CheckBox"
      ],
      "opts": [
        "ListBox (lstReceipt)",
        "Label",
        "RadioButton",
        "CheckBox"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "ListBox is designed for multi-line receipt entries.",
      "explanation": "ListBox is designed for multi-line receipt entries.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_421",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] How do you format a receipt line showing Item, Qty, and Subtotal?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] How do you format a receipt line showing Item, Qty, and Subtotal?",
      "options": [
        "lstReceipt.Items.Add(item + \" x \" + qty + \" = \" + subtotal.ToString(\"C\"));",
        "lstReceipt.Add(item);",
        "lstReceipt.Items = item;",
        "lstReceipt.Text = item;"
      ],
      "opts": [
        "lstReceipt.Items.Add(item + \" x \" + qty + \" = \" + subtotal.ToString(\"C\"));",
        "lstReceipt.Add(item);",
        "lstReceipt.Items = item;",
        "lstReceipt.Text = item;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "String concatenation with Currency formatting.",
      "explanation": "String concatenation with Currency formatting.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_422",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What variable accumulates total revenue across all sales in the cash register session?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What variable accumulates total revenue across all sales in the cash register session?",
      "options": [
        "A class-level field variable: private decimal _totalRevenue = 0m;",
        "A local variable declared inside btnAdd_Click",
        "A const variable",
        "A loop counter"
      ],
      "opts": [
        "A class-level field variable: private decimal _totalRevenue = 0m;",
        "A local variable declared inside btnAdd_Click",
        "A const variable",
        "A loop counter"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Class-level field variables retain cumulative totals across multiple button clicks.",
      "explanation": "Class-level field variables retain cumulative totals across multiple button clicks.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_423",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What happens to a local variable declared inside btnAdd_Click when the event handler finishes executing?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What happens to a local variable declared inside btnAdd_Click when the event handler finishes executing?",
      "options": [
        "It is destroyed and its memory is reclaimed; it does NOT retain value for the next click",
        "It retains its value forever",
        "It becomes a field variable",
        "It is written to the hard drive"
      ],
      "opts": [
        "It is destroyed and its memory is reclaimed; it does NOT retain value for the next click",
        "It retains its value forever",
        "It becomes a field variable",
        "It is written to the hard drive"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Local variables have method lifetime and are deallocated on return.",
      "explanation": "Local variables have method lifetime and are deallocated on return.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_424",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] How can a field variable be reset to 0 in btnNewSale_Click?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] How can a field variable be reset to 0 in btnNewSale_Click?",
      "options": [
        "_currentSaleTotal = 0m;",
        "const _currentSaleTotal = 0m;",
        "decimal _currentSaleTotal = 0m;",
        "Reset(_currentSaleTotal);"
      ],
      "opts": [
        "_currentSaleTotal = 0m;",
        "const _currentSaleTotal = 0m;",
        "decimal _currentSaleTotal = 0m;",
        "Reset(_currentSaleTotal);"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Reassigning 0m clears the accumulator.",
      "explanation": "Reassigning 0m clears the accumulator.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_425",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What check ensures product name is not empty or whitespace before adding?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What check ensures product name is not empty or whitespace before adding?",
      "options": [
        "if (string.IsNullOrWhiteSpace(txtItem.Text))",
        "if (txtItem.Text == null)",
        "if (txtItem.Text.Length == 1)",
        "if (txtItem == null)"
      ],
      "opts": [
        "if (string.IsNullOrWhiteSpace(txtItem.Text))",
        "if (txtItem.Text == null)",
        "if (txtItem.Text.Length == 1)",
        "if (txtItem == null)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "string.IsNullOrWhiteSpace checks for null, empty, or whitespace-only strings.",
      "explanation": "string.IsNullOrWhiteSpace checks for null, empty, or whitespace-only strings.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_426",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What format specifier formats loyalty points (integer 125) as '00125' (5 digits with leading zeros)?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What format specifier formats loyalty points (integer 125) as '00125' (5 digits with leading zeros)?",
      "options": [
        "(125).ToString(\"D5\")",
        "(125).ToString(\"C5\")",
        "(125).ToString(\"F5\")",
        "(125).ToString(\"P5\")"
      ],
      "opts": [
        "(125).ToString(\"D5\")",
        "(125).ToString(\"C5\")",
        "(125).ToString(\"F5\")",
        "(125).ToString(\"P5\")"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "\"D5\" formats integer with minimum 5 decimal digits padded with zeros.",
      "explanation": "\"D5\" formats integer with minimum 5 decimal digits padded with zeros.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_427",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What property indicates whether the customer has a Gold Loyalty Card?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What property indicates whether the customer has a Gold Loyalty Card?",
      "options": [
        "chkGoldCard.Checked",
        "chkGoldCard.Selected",
        "chkGoldCard.Value",
        "chkGoldCard.Active"
      ],
      "opts": [
        "chkGoldCard.Checked",
        "chkGoldCard.Selected",
        "chkGoldCard.Value",
        "chkGoldCard.Active"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Checked property of CheckBox returns true/false.",
      "explanation": "Checked property of CheckBox returns true/false.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_428",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If Gold Card gives an additional 5% off, how is net total computed after volume discount?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If Gold Card gives an additional 5% off, how is net total computed after volume discount?",
      "options": [
        "netTotal = (subtotal - volumeDiscount) * 0.95m;",
        "netTotal -= 5m;",
        "netTotal = subtotal * 0.05m;",
        "netTotal = subtotal - 5;"
      ],
      "opts": [
        "netTotal = (subtotal - volumeDiscount) * 0.95m;",
        "netTotal -= 5m;",
        "netTotal = subtotal * 0.05m;",
        "netTotal = subtotal - 5;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Applying 5% discount on the discounted balance.",
      "explanation": "Applying 5% discount on the discounted balance.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_429",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What message box buttons should be displayed for the final checkout confirmation?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What message box buttons should be displayed for the final checkout confirmation?",
      "options": [
        "MessageBoxButtons.OKCancel or MessageBoxButtons.YesNo",
        "MessageBoxButtons.AbortRetryIgnore",
        "MessageBoxButtons.None",
        "No buttons"
      ],
      "opts": [
        "MessageBoxButtons.OKCancel or MessageBoxButtons.YesNo",
        "MessageBoxButtons.AbortRetryIgnore",
        "MessageBoxButtons.None",
        "No buttons"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "YesNo or OKCancel lets the user confirm or abort.",
      "explanation": "YesNo or OKCancel lets the user confirm or abort.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_430",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which Shneiderman Golden Rule is satisfied by printing complete subtotal, discount, VAT, and points on screen?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which Shneiderman Golden Rule is satisfied by printing complete subtotal, discount, VAT, and points on screen?",
      "options": [
        "Rule 4: Design dialogs to yield closure & Rule 3: Informative feedback",
        "Rule 1 only",
        "Rule 8 only",
        "Rule 2 only"
      ],
      "opts": [
        "Rule 4: Design dialogs to yield closure & Rule 3: Informative feedback",
        "Rule 1 only",
        "Rule 8 only",
        "Rule 2 only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Yields closure and full informative feedback at checkout completion.",
      "explanation": "Yields closure and full informative feedback at checkout completion.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    }
  ]
};

  if (typeof module === 'object' && module.exports) {
    module.exports = DATA;
  } else {
    root.CMPG122_DATA = DATA;
  }
})(typeof self !== 'undefined' ? self : this);
