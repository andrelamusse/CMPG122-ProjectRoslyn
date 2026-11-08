// NWU CMPG122 - Comprehensive Verified Question Bank & Curriculum Dataset (V8.00)
// 100% Offline Compatible • Zero CORS • Standalone Production Suite

(function(root) {
  'use strict';

  const DATA = {
  "moduleCode": "CMPG122",
  "moduleTitle": "User Interface Programming in Visual C#",
  "institution": "North-West University (NWU)",
  "version": "V8.00",
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
      "scenario": "Car Rental Fleet & Mileage Surcharge Billing System: Counter agents at DriveNow Car Hire calculate vehicle rental charges based on vehicle category selection (Sedan, SUV, Bakkie), daily rental rates, included free mileage allowances with tiered excess surcharges, optional GPS add-on, promotional discount voucher, TryParse input validation, and formatted ListBox invoice statements.",
      "scenarioHtml": `<div class="scenario-brief-container">
  <div class="scenario-callout">
    <strong>📋 Problem Scenario: DriveNow Fleet Car Rental Billing System</strong><br>
    DriveNow Car Hire operates rental depots across the NWU Potchefstroom and Vanderbijlpark campuses. You have been commissioned to build an interactive Windows Forms desktop billing system in Visual C# for depot service agents. The application processes rental durations, reads odometer usage, determines vehicle category base rates, calculates included free mileage allowances and excess kilometer surcharges, evaluates optional GPS navigation add-ons and promotional discount vouchers, and outputs a formatted itemized invoice to an on-screen summary label and ListBox.
  </div>

  <div class="scenario-section-header"><span>📊 1. Vehicle Rates, Mileage Allowances &amp; Business Rules Table</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Vehicle Category</th>
          <th>GUI Selector</th>
          <th>Daily Rental Rate</th>
          <th>Daily Mileage Allowance</th>
          <th>Excess Surcharge Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Sedan (Economy)</strong></td>
          <td><code>rdoSedan</code></td>
          <td><span class="rate-tag">R450.00 / day</span></td>
          <td>150 km / day free</td>
          <td>R3.50 per excess km</td>
        </tr>
        <tr>
          <td><strong>SUV (Touring / Family)</strong></td>
          <td><code>rdoSuv</code></td>
          <td><span class="rate-tag">R650.00 / day</span></td>
          <td>150 km / day free</td>
          <td>R3.50 per excess km</td>
        </tr>
        <tr>
          <td><strong>Bakkie (Light Commercial)</strong></td>
          <td><code>rdoBakkie</code></td>
          <td><span class="rate-tag">R750.00 / day</span></td>
          <td>150 km / day free</td>
          <td>R3.50 per excess km</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-callout" style="border-left-color: var(--accent-amber); background: rgba(245, 158, 11, 0.08);">
    <strong>⚙️ Optional Equipment, Discounts &amp; Mileage Rules:</strong>
    <ul>
      <li><strong>GPS Navigation Unit:</strong> CheckBox <code>chkGps</code> adds an optional surcharge of <span class="rate-tag">R80.00 per rental day</span>.</li>
      <li><strong>Promotional Discount Voucher:</strong> CheckBox <code>chkVoucher</code> deducts a <span class="rate-tag">5% discount</span> (0.05m) from the gross subtotal if checked.</li>
      <li><strong>Free Mileage Allowance Rule:</strong> Free kilometers allowed = <code>days * 150m</code>. If total kilometers driven exceed free kilometers, excess kilometers = <code>kms - freeKms</code>, billed at <code>excessKms * 3.50m</code>. If kilometers driven are within allowance, excess surcharge is R0.00.</li>
    </ul>
  </div>

  <div class="scenario-section-header"><span>🖥️ 2. GUI Controls &amp; Hungarian Naming Matrix</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Control Name</th>
          <th>Control Type</th>
          <th>Default State / Text</th>
          <th>Event / Handler</th>
          <th>Technical Purpose &amp; Validation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>txtDays</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 0)</td>
          <td>Focus target</td>
          <td>Customer rental days input. Must parse to positive integer (<code>int.TryParse</code>, &gt; 0).</td>
        </tr>
        <tr>
          <td><code>txtKms</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 1)</td>
          <td>Focus target</td>
          <td>Total kilometers driven. Must parse to non-negative decimal (<code>decimal.TryParse</code>, &gt;= 0).</td>
        </tr>
        <tr>
          <td><code>grpVehicle</code></td>
          <td>GroupBox</td>
          <td>Text: "Vehicle Category"</td>
          <td>Container</td>
          <td>Enforces mutual exclusion among vehicle category radio buttons.</td>
        </tr>
        <tr>
          <td><code>rdoSedan</code></td>
          <td>RadioButton</td>
          <td>Checked = true</td>
          <td>CheckedChanged</td>
          <td>Economy Sedan rate selector (R450.00/day). Default vehicle.</td>
        </tr>
        <tr>
          <td><code>rdoSuv</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>SUV rate selector (R650.00/day).</td>
        </tr>
        <tr>
          <td><code>rdoBakkie</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Bakkie rate selector (R750.00/day).</td>
        </tr>
        <tr>
          <td><code>chkGps</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Optional GPS unit add-on (R80.00/day).</td>
        </tr>
        <tr>
          <td><code>chkVoucher</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Promotional 5% discount deduction voucher.</td>
        </tr>
        <tr>
          <td><code>btnCalculate</code></td>
          <td>Button</td>
          <td>Text: "&amp;Calculate Bill"</td>
          <td><code>btnCalculate_Click</code></td>
          <td>Validates inputs defensively, calculates charges, outputs to label and ListBox.</td>
        </tr>
        <tr>
          <td><code>btnClear</code></td>
          <td>Button</td>
          <td>Text: "C&amp;lear"</td>
          <td><code>btnClear_Click</code></td>
          <td>Resets all inputs to blank, selects default sedan, unchecks add-ons, clears outputs.</td>
        </tr>
        <tr>
          <td><code>btnExit</code></td>
          <td>Button</td>
          <td>Text: "E&amp;xit"</td>
          <td><code>btnExit_Click</code></td>
          <td>Prompts confirmation MessageBox (Yes/No); terminates via <code>this.Close();</code> on Yes.</td>
        </tr>
        <tr>
          <td><code>lblTotalDue</code></td>
          <td>Label</td>
          <td>Text: "" (Fixed3D, AutoSize=false)</td>
          <td>Output target</td>
          <td>Displays final net total due formatted as South African currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lstReceipt</code></td>
          <td>ListBox</td>
          <td>Empty (Monospace font)</td>
          <td>Output target</td>
          <td>Displays formatted itemized billing invoice breakdown.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-section-header"><span>📐 3. Calculation Logic &amp; Defensive Validation Rules</span></div>
  <div class="scenario-callout">
    <ol>
      <li><strong>Defensive Parsing:</strong> Days must be parsed using <code>int.TryParse(txtDays.Text, out days)</code>. If parsing fails or <code>days &lt;= 0</code>, display an informative error dialog via <code>MessageBox.Show</code>, set focus to <code>txtDays.Focus()</code>, select all text via <code>txtDays.SelectAll()</code>, and exit event handler using <code>return;</code>.</li>
      <li><strong>Odometer Validation:</strong> Kilometers must be parsed via <code>decimal.TryParse(txtKms.Text, out kms)</code> and satisfy <code>kms &gt;= 0</code>. Failure triggers an error message and focus restoration.</li>
      <li><strong>Base Cost:</strong> Determined by vehicle category: <code>rdoSedan.Checked</code> (R450), <code>rdoSuv.Checked</code> (R650), or <code>rdoBakkie.Checked</code> (R750). <code>baseCost = days * dailyRate</code>.</li>
      <li><strong>Excess Mileage:</strong> <code>freeKms = days * 150m</code>. If <code>kms &gt; freeKms</code>, <code>excessCharge = (kms - freeKms) * 3.50m</code>; otherwise <code>excessCharge = 0m</code>.</li>
      <li><strong>Add-ons &amp; Discounts:</strong> <code>gpsCharge = chkGps.Checked ? (days * 80m) : 0m</code>. Gross total = <code>baseCost + excessCharge + gpsCharge</code>. If <code>chkVoucher.Checked</code> is true, discount = <code>grossTotal * 0.05m</code>; final <code>netTotal = grossTotal - discount</code>.</li>
      <li><strong>Output Formatting:</strong> <code>lblTotalDue.Text = netTotal.ToString("C");</code>. Populate <code>lstReceipt.Items.Add(...)</code> with itemized entries.</li>
    </ol>
  </div>
</div>`,
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
      "scenario": "Student Tuition, Campus Residence & Bursary Assessment System: Visual C# application calculating faculty tuition fees based on credit enrollment, compulsory laboratory levies, residence accommodation meal plans, merit bursary percentage deductions, and a 4-month semester installment schedule.",
      "scenarioHtml": `<div class="scenario-brief-container">
  <div class="scenario-callout">
    <strong>📋 Problem Scenario: Student Tuition, Residence Accommodation &amp; Bursary Assessment System</strong><br>
    The NWU Student Accounts and Bursaries Office requires a standardized Windows Forms application in Visual C# to compute semester tuition fees for enrolling students. The system captures credit enrollments, determines faculty tuition rates and compulsory laboratory levies, processes optional on-campus residence accommodation and meal plans, applies merit bursary remissions, and projects a 4-month semester installment payment schedule into a ListBox using structured loop repetition.
  </div>

  <div class="scenario-section-header"><span>📊 1. Faculty Tuition Rates, Facility Levies &amp; Business Rules Table</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Faculty / Discipline</th>
          <th>GUI RadioButton</th>
          <th>Cost per Enrolled Credit</th>
          <th>Compulsory Laboratory / IT Levy</th>
          <th>Max Allowable Credits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Natural &amp; Agricultural Sciences</strong></td>
          <td><code>rdoScience</code></td>
          <td><span class="rate-tag">R850.00 / credit</span></td>
          <td><span class="rate-tag">R2,500.00</span> science lab levy</td>
          <td>25 credits / semester</td>
        </tr>
        <tr>
          <td><strong>Economic &amp; Management Sciences</strong></td>
          <td><code>rdoCommerce</code></td>
          <td><span class="rate-tag">R750.00 / credit</span></td>
          <td><span class="rate-tag">R1,000.00</span> IT network levy</td>
          <td>25 credits / semester</td>
        </tr>
        <tr>
          <td><strong>Humanities &amp; Education</strong></td>
          <td><code>rdoHumanities</code></td>
          <td><span class="rate-tag">R650.00 / credit</span></td>
          <td><span class="rate-tag">R500.00</span> resource levy</td>
          <td>25 credits / semester</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-callout" style="border-left-color: var(--accent-amber); background: rgba(245, 158, 11, 0.08);">
    <strong>⚙️ Residence Accommodation, Bursary Remissions &amp; Installment Schedule:</strong>
    <ul>
      <li><strong>Campus Residence &amp; Dining Hall Plan:</strong> CheckBox <code>chkResidence</code> adds a flat accommodation and catering fee of <span class="rate-tag">R14,000.00 per semester</span>.</li>
      <li><strong>Academic Merit Bursary Remission:</strong> CheckBox <code>chkBursary</code> activates the bursary percentage input <code>txtBursaryPercent</code>. Valid bursary percentages range from <span class="rate-tag">5% to 100%</span>. The bursary deduction applies strictly to the academic fees (tuition + faculty levy); residence fees are not discounted.</li>
      <li><strong>Installment Payment Projection:</strong> Total semester balance is divided across <span class="rate-tag">4 equal monthly installments</span> (Months 1 to 4) populated in <code>lstInstallments</code> using a <code>for</code> loop.</li>
    </ul>
  </div>

  <div class="scenario-section-header"><span>🖥️ 2. GUI Controls &amp; Hungarian Naming Matrix</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Control Name</th>
          <th>Control Type</th>
          <th>Default State / Text</th>
          <th>Event / Handler</th>
          <th>Technical Purpose &amp; Validation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>txtCredits</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 0)</td>
          <td>Focus target</td>
          <td>Academic credits enrolled. Defensive range check: integer between 1 and 25 inclusive.</td>
        </tr>
        <tr>
          <td><code>grpFaculty</code></td>
          <td>GroupBox</td>
          <td>Text: "Faculty Selection"</td>
          <td>Container</td>
          <td>Mutual exclusion container for faculty radio buttons.</td>
        </tr>
        <tr>
          <td><code>rdoScience</code></td>
          <td>RadioButton</td>
          <td>Checked = true</td>
          <td>CheckedChanged</td>
          <td>Natural Sciences faculty selector (R850/credit + R2,500 levy).</td>
        </tr>
        <tr>
          <td><code>rdoCommerce</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Commerce faculty selector (R750/credit + R1,000 levy).</td>
        </tr>
        <tr>
          <td><code>rdoHumanities</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Humanities faculty selector (R650/credit + R500 levy).</td>
        </tr>
        <tr>
          <td><code>chkResidence</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Toggles campus residence and meal plan flat fee (R14,000.00).</td>
        </tr>
        <tr>
          <td><code>chkBursary</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Enables or disables <code>txtBursaryPercent</code> depending on checked state.</td>
        </tr>
        <tr>
          <td><code>txtBursaryPercent</code></td>
          <td>TextBox</td>
          <td>Text: "0" (Enabled = false)</td>
          <td>Focus target</td>
          <td>Bursary percentage (5 to 100). Enabled only when <code>chkBursary.Checked == true</code>.</td>
        </tr>
        <tr>
          <td><code>btnCalculate</code></td>
          <td>Button</td>
          <td>Text: "&amp;Calculate Tuition"</td>
          <td><code>btnCalculate_Click</code></td>
          <td>Validates inputs, calculates net tuition, generates 4-month installment projection.</td>
        </tr>
        <tr>
          <td><code>btnClear</code></td>
          <td>Button</td>
          <td>Text: "&amp;Clear Form"</td>
          <td><code>btnClear_Click</code></td>
          <td>Resets all inputs, unchecks add-ons, clears ListBox, restores focus to <code>txtCredits</code>.</td>
        </tr>
        <tr>
          <td><code>btnExit</code></td>
          <td>Button</td>
          <td>Text: "E&amp;xit"</td>
          <td><code>btnExit_Click</code></td>
          <td>Confirmation dialog and application termination (<code>this.Close();</code>).</td>
        </tr>
        <tr>
          <td><code>lblNetTuition</code></td>
          <td>Label</td>
          <td>Text: "" (BorderStyle = Fixed3D)</td>
          <td>Output target</td>
          <td>Displays total net semester fees formatted as currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lstInstallments</code></td>
          <td>ListBox</td>
          <td>Empty (Monospace font)</td>
          <td>Output target</td>
          <td>Itemized ListBox containing the 4 monthly installment projection records.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-section-header"><span>📐 3. Calculation Logic &amp; Defensive Validation Rules</span></div>
  <div class="scenario-callout">
    <ol>
      <li><strong>Defensive Parsing &amp; Credit Bounds:</strong> Enrolled credits must be parsed with <code>int.TryParse(txtCredits.Text, out credits)</code>. If parsing fails or <code>credits &lt; 1 || credits &gt; 25</code>, display error message, call <code>txtCredits.Focus()</code> and <code>txtCredits.SelectAll()</code>, and <code>return;</code>.</li>
      <li><strong>Faculty Tuition Calculation:</strong> Read selected radio button: Science (rate R850, levy R2,500), Commerce (rate R750, levy R1,000), Humanities (rate R650, levy R500). <code>academicTuition = (credits * rate) + levy</code>.</li>
      <li><strong>Bursary Remission:</strong> If <code>chkBursary.Checked</code>, parse <code>decimal.TryParse(txtBursaryPercent.Text, out bursaryPct)</code>. Validate <code>bursaryPct &gt;= 5 &amp;&amp; bursaryPct &lt;= 100</code>. Calculate <code>bursaryDeduction = academicTuition * (bursaryPct / 100m)</code>. Net academic fee = <code>academicTuition - bursaryDeduction</code>.</li>
      <li><strong>Residence Fee:</strong> If <code>chkResidence.Checked</code>, add R14,000.00. <code>totalSemesterFee = netAcademicFee + residenceFee</code>.</li>
      <li><strong>Installment Projection Loop:</strong> <code>monthlyAmount = totalSemesterFee / 4m</code>. Clear <code>lstInstallments.Items.Clear()</code>. Execute loop <code>for (int m = 1; m &lt;= 4; m++)</code> and add <code>lstInstallments.Items.Add($"Month {m}: {monthlyAmount:C}");</code>.</li>
    </ol>
  </div>
</div>`,
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
      "scenarioHtml": `<div class="scenario-brief-container">
  <div class="scenario-callout">
    <strong>📋 Problem Scenario: FitLife Health &amp; Racquet Club Membership Billing Terminal</strong><br>
    FitLife Health &amp; Racquet Club (Potchefstroom campus) manages monthly membership subscriptions. Front desk staff record applicant details, select membership tiers, configure optional personal training coaching, calculate monthly debit orders including 15% South African VAT, and populate a 12-month cumulative expenditure forecast in a ListBox.
  </div>

  <div class="scenario-section-header"><span>📊 1. Membership Subscription Tiers, Add-ons &amp; VAT Table</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Membership Tier</th>
          <th>GUI RadioButton</th>
          <th>Monthly Base Subscription</th>
          <th>Included Amenities</th>
          <th>Private Locker Privileges</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Standard Tier</strong></td>
          <td><code>rdoStandard</code></td>
          <td><span class="rate-tag">R350.00 / month</span></td>
          <td>Cardio floor &amp; weight room access</td>
          <td>Optional add-on (R100/mo)</td>
        </tr>
        <tr>
          <td><strong>Premium Tier</strong></td>
          <td><code>rdoPremium</code></td>
          <td><span class="rate-tag">R500.00 / month</span></td>
          <td>Standard + sauna &amp; heated pool access</td>
          <td>Optional add-on (R100/mo)</td>
        </tr>
        <tr>
          <td><strong>VIP All-Access</strong></td>
          <td><code>rdoVip</code></td>
          <td><span class="rate-tag">R600.00 / month</span></td>
          <td>Premium + squash courts &amp; guest passes</td>
          <td><strong>Included Free (R0.00)</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-callout" style="border-left-color: var(--accent-amber); background: rgba(245, 158, 11, 0.08);">
    <strong>⚙️ Personal Coaching, Locker Surcharges &amp; Statutory VAT:</strong>
    <ul>
      <li><strong>Certified Personal Trainer Add-on:</strong> CheckBox <code>chkTrainer</code> adds a coaching fee of <span class="rate-tag">R250.00 per month</span>.</li>
      <li><strong>Private Locker Rental:</strong> CheckBox <code>chkLocker</code> adds <span class="rate-tag">R100.00 per month</span> for Standard and Premium tiers. VIP members receive private lockers free of charge.</li>
      <li><strong>South African Value-Added Tax (VAT):</strong> Statutory VAT rate of <span class="rate-tag">15% (0.15m)</span> must be calculated on the monthly pre-tax subtotal and displayed in <code>lblVat</code>.</li>
      <li><strong>12-Month Projection Forecast:</strong> <code>lstDebitOrders</code> displays cumulative projected fees for <span class="rate-tag">Months 1 to 12</span> using a count-controlled loop.</li>
    </ul>
  </div>

  <div class="scenario-section-header"><span>🖥️ 2. GUI Controls &amp; Hungarian Naming Matrix</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Control Name</th>
          <th>Control Type</th>
          <th>Default State / Text</th>
          <th>Event / Handler</th>
          <th>Technical Purpose &amp; Validation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>txtMemberName</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 0)</td>
          <td>Focus target</td>
          <td>Applicant full name. Validated non-empty with <code>string.IsNullOrWhiteSpace</code>.</td>
        </tr>
        <tr>
          <td><code>grpTiers</code></td>
          <td>GroupBox</td>
          <td>Text: "Membership Tier"</td>
          <td>Container</td>
          <td>Enforces mutual exclusion across membership radio buttons.</td>
        </tr>
        <tr>
          <td><code>rdoStandard</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Standard tier subscription selector (R350.00/month).</td>
        </tr>
        <tr>
          <td><code>rdoPremium</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Premium tier subscription selector (R500.00/month).</td>
        </tr>
        <tr>
          <td><code>rdoVip</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>VIP All-Access tier selector (R600.00/month).</td>
        </tr>
        <tr>
          <td><code>chkTrainer</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Optional personal trainer coaching package (R250.00/month).</td>
        </tr>
        <tr>
          <td><code>chkLocker</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Private locker rental (R100.00/month; waived for VIP).</td>
        </tr>
        <tr>
          <td><code>btnCalculate</code></td>
          <td>Button</td>
          <td>Text: "&amp;Calculate Debit Order"</td>
          <td><code>btnCalculate_Click</code></td>
          <td>Validates tier selection, computes subtotal, 15% VAT, total, and 12-mo forecast.</td>
        </tr>
        <tr>
          <td><code>btnClear</code></td>
          <td>Button</td>
          <td>Text: "&amp;Clear"</td>
          <td><code>btnClear_Click</code></td>
          <td>Clears textboxes, resets radio buttons/checkboxes, clears ListBox.</td>
        </tr>
        <tr>
          <td><code>btnExit</code></td>
          <td>Button</td>
          <td>Text: "E&amp;xit"</td>
          <td><code>btnExit_Click</code></td>
          <td>Prompts Yes/No confirmation dialog; closes application via <code>this.Close();</code>.</td>
        </tr>
        <tr>
          <td><code>lblSubtotal</code></td>
          <td>Label</td>
          <td>Text: "" (BorderStyle = Fixed3D)</td>
          <td>Output target</td>
          <td>Displays monthly pre-tax subtotal formatted as currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lblVat</code></td>
          <td>Label</td>
          <td>Text: "" (BorderStyle = Fixed3D)</td>
          <td>Output target</td>
          <td>Displays 15% VAT amount formatted as currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lblMonthlyTotal</code></td>
          <td>Label</td>
          <td>Text: "" (Fixed3D, Bold)</td>
          <td>Output target</td>
          <td>Displays total monthly debit order fee formatted as currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lstDebitOrders</code></td>
          <td>ListBox</td>
          <td>Empty (Monospace font)</td>
          <td>Output target</td>
          <td>Populated with 12 monthly cumulative debit order payment projection lines.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-section-header"><span>📐 3. Calculation Logic &amp; Defensive Validation Rules</span></div>
  <div class="scenario-callout">
    <ol>
      <li><strong>Member Name Validation:</strong> Ensure applicant name is entered: <code>if (string.IsNullOrWhiteSpace(txtMemberName.Text)) { MessageBox.Show("Please enter member name.", "Validation Error"); txtMemberName.Focus(); return; }</code>.</li>
      <li><strong>Tier Selection Validation:</strong> Ensure at least one tier is chosen: <code>if (!rdoStandard.Checked &amp;&amp; !rdoPremium.Checked &amp;&amp; !rdoVip.Checked) { MessageBox.Show("Please select a membership tier.", "Input Error"); return; }</code>.</li>
      <li><strong>Base Subscription:</strong> <code>baseRate = rdoStandard.Checked ? 350m : (rdoPremium.Checked ? 500m : 600m)</code>.</li>
      <li><strong>Add-ons:</strong> <code>trainerFee = chkTrainer.Checked ? 250m : 0m</code>. <code>lockerFee = (chkLocker.Checked &amp;&amp; !rdoVip.Checked) ? 100m : 0m</code>.</li>
      <li><strong>Pre-tax Subtotal:</strong> <code>subtotal = baseRate + trainerFee + lockerFee</code>.</li>
      <li><strong>15% VAT Calculation:</strong> <code>vatAmount = subtotal * 0.15m</code>. Total monthly debit order = <code>subtotal + vatAmount</code>.</li>
      <li><strong>12-Month Projection Loop:</strong> Clear <code>lstDebitOrders.Items.Clear()</code>. Iterate <code>for (int month = 1; month &lt;= 12; month++)</code> and add <code>$"Month {month:D2}: Cumulative Total = {(month * totalMonthly):C}"</code>.</li>
    </ol>
  </div>
</div>`,
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
      "scenarioHtml": `<div class="scenario-brief-container">
  <div class="scenario-callout">
    <strong>📋 Problem Scenario: Riverside Hotel &amp; Conference Centre Reservation Engine</strong><br>
    Riverside Hotel &amp; Conference Centre (Vanderbijlpark) automates guest reservation billing. Front office staff capture guest particulars, length of stay in nights, room tier selection, optional breakfast catering packages, validate guest capacity, generate a random 4-digit booking reservation reference, and output an itemized billing receipt in a ListBox.
  </div>

  <div class="scenario-section-header"><span>📊 1. Room Categories, Rates &amp; Guest Capacity Table</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Room Category</th>
          <th>GUI RadioButton</th>
          <th>Nightly Room Rate</th>
          <th>Maximum Guest Capacity</th>
          <th>Included Room Amenities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Standard Room</strong></td>
          <td><code>rdoStandard</code></td>
          <td><span class="rate-tag">R950.00 / night</span></td>
          <td>Max 2 guests</td>
          <td>Queen bed, en-suite shower, Wi-Fi</td>
        </tr>
        <tr>
          <td><strong>Deluxe Suite</strong></td>
          <td><code>rdoDeluxe</code></td>
          <td><span class="rate-tag">R1,450.00 / night</span></td>
          <td>Max 3 guests</td>
          <td>King bed, river view balcony, mini-bar</td>
        </tr>
        <tr>
          <td><strong>Penthouse Executive</strong></td>
          <td><code>rdoPenthouse</code></td>
          <td><span class="rate-tag">R2,200.00 / night</span></td>
          <td>Max 4 guests</td>
          <td>2 bedrooms, lounge, jacuzzi, butler service</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-callout" style="border-left-color: var(--accent-amber); background: rgba(245, 158, 11, 0.08);">
    <strong>⚙️ Catering Packages, Airport Transfers &amp; Booking Reference:</strong>
    <ul>
      <li><strong>Buffet Breakfast Package:</strong> CheckBox <code>chkBreakfast</code> costs <span class="rate-tag">R120.00 per guest per night</span> (calculated as <code>nights * guests * 120m</code>).</li>
      <li><strong>Airport Shuttle Transfer:</strong> CheckBox <code>chkShuttle</code> adds a flat transfer surcharge of <span class="rate-tag">R350.00</span> per booking.</li>
      <li><strong>Random Confirmation Reference:</strong> Class-level <code>Random rand = new Random();</code> generates a 4-digit booking code between <span class="rate-tag">1000 and 9999</span> via <code>rand.Next(1000, 10000)</code>.</li>
      <li><strong>Defensive Button State Management:</strong> Button <code>btnConfirm</code> remains disabled (<code>Enabled = false</code>) until validation and cost calculation pass successfully.</li>
    </ul>
  </div>

  <div class="scenario-section-header"><span>🖥️ 2. GUI Controls &amp; Hungarian Naming Matrix</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Control Name</th>
          <th>Control Type</th>
          <th>Default State / Text</th>
          <th>Event / Handler</th>
          <th>Technical Purpose &amp; Validation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>txtGuestName</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 0)</td>
          <td>Focus target</td>
          <td>Lead guest name. Validated non-empty using <code>string.IsNullOrWhiteSpace</code>.</td>
        </tr>
        <tr>
          <td><code>txtNights</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 1)</td>
          <td>Focus target</td>
          <td>Length of stay in nights. Defensive check: integer between 1 and 30 inclusive.</td>
        </tr>
        <tr>
          <td><code>txtGuests</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 2)</td>
          <td>Focus target</td>
          <td>Guest count. Must not exceed maximum capacity for the selected room tier.</td>
        </tr>
        <tr>
          <td><code>grpRoomType</code></td>
          <td>GroupBox</td>
          <td>Text: "Room Category"</td>
          <td>Container</td>
          <td>Guarantees mutual exclusion for room category radio buttons.</td>
        </tr>
        <tr>
          <td><code>rdoStandard</code></td>
          <td>RadioButton</td>
          <td>Checked = true</td>
          <td>CheckedChanged</td>
          <td>Standard Room selector (R950/night, max 2 guests). Default selection.</td>
        </tr>
        <tr>
          <td><code>rdoDeluxe</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Deluxe Suite selector (R1,450/night, max 3 guests).</td>
        </tr>
        <tr>
          <td><code>rdoPenthouse</code></td>
          <td>RadioButton</td>
          <td>Checked = false</td>
          <td>CheckedChanged</td>
          <td>Penthouse Executive selector (R2,200/night, max 4 guests).</td>
        </tr>
        <tr>
          <td><code>chkBreakfast</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Buffet breakfast add-on (R120 per person per night).</td>
        </tr>
        <tr>
          <td><code>chkShuttle</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Airport shuttle transfer add-on (R350 flat fee).</td>
        </tr>
        <tr>
          <td><code>btnCalculate</code></td>
          <td>Button</td>
          <td>Text: "&amp;Calculate Quote"</td>
          <td><code>btnCalculate_Click</code></td>
          <td>Validates inputs and capacity, calculates charges, enables <code>btnConfirm</code>.</td>
        </tr>
        <tr>
          <td><code>btnConfirm</code></td>
          <td>Button</td>
          <td>Text: "C&amp;onfirm Booking" (Enabled=false)</td>
          <td><code>btnConfirm_Click</code></td>
          <td>Generates random reference, prints receipt in ListBox, confirms reservation.</td>
        </tr>
        <tr>
          <td><code>btnClear</code></td>
          <td>Button</td>
          <td>Text: "&amp;Clear"</td>
          <td><code>btnClear_Click</code></td>
          <td>Resets inputs, disables confirm button, clears ListBox, restores focus.</td>
        </tr>
        <tr>
          <td><code>btnExit</code></td>
          <td>Button</td>
          <td>Text: "E&amp;xit"</td>
          <td><code>btnExit_Click</code></td>
          <td>Closes the reservation system via <code>this.Close();</code>.</td>
        </tr>
        <tr>
          <td><code>lblTotalDue</code></td>
          <td>Label</td>
          <td>Text: "" (BorderStyle = Fixed3D)</td>
          <td>Output target</td>
          <td>Displays grand total quote formatted as South African currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lstReceipt</code></td>
          <td>ListBox</td>
          <td>Empty (Monospace font)</td>
          <td>Output target</td>
          <td>Displays itemized reservation receipt and random confirmation reference code.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-section-header"><span>📐 3. Calculation Logic &amp; Defensive Validation Rules</span></div>
  <div class="scenario-callout">
    <ol>
      <li><strong>Defensive Duration &amp; Guest Parsing:</strong> Nights must parse to an integer with <code>int.TryParse(txtNights.Text, out nights)</code> satisfying <code>nights &gt;= 1 &amp;&amp; nights &lt;= 30</code>. Guests must parse to integer <code>int.TryParse(txtGuests.Text, out guests)</code> satisfying <code>guests &gt;= 1</code>.</li>
      <li><strong>Capacity Validation:</strong> Determine max capacity: Standard allows 2; Deluxe allows 3; Penthouse allows 4. If <code>guests &gt; maxCapacity</code>, show <code>MessageBox.Show($"Selected room allows a maximum of {maxCapacity} guests.", "Capacity Exceeded")</code>, focus <code>txtGuests</code>, and <code>return;</code>.</li>
      <li><strong>Base Room Cost:</strong> <code>roomCharge = nights * roomRate</code>.</li>
      <li><strong>Breakfast &amp; Shuttle:</strong> <code>breakfastCharge = chkBreakfast.Checked ? (nights * guests * 120m) : 0m</code>. <code>shuttleCharge = chkShuttle.Checked ? 350m : 0m</code>.</li>
      <li><strong>Grand Total:</strong> <code>totalDue = roomCharge + breakfastCharge + shuttleCharge</code>. Format with <code>lblTotalDue.Text = totalDue.ToString("C");</code>.</li>
      <li><strong>Confirmation Execution:</strong> On quote success, set <code>btnConfirm.Enabled = true;</code>. When clicked, generate <code>int refCode = rand.Next(1000, 10000);</code> and populate itemized lines in <code>lstReceipt.Items.Add(...)</code>.</li>
    </ol>
  </div>
</div>`,
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
      "scenarioHtml": `<div class="scenario-brief-container">
  <div class="scenario-callout">
    <strong>📋 Problem Scenario: Campus Superstore POS Cash Register &amp; Loyalty Rewards Terminal</strong><br>
    The NWU Student Centre Campus Superstore operates a point-of-sale desktop cash register. Cashiers record retail merchandise, enter unit prices and quantities, calculate tiered quantity volume discounts, evaluate gold customer loyalty membership discounts, accumulate running session revenue totals across customer transactions using class-level field variables, calculate loyalty rewards points, and output itemized till receipts to a ListBox.
  </div>

  <div class="scenario-section-header"><span>📊 1. Tiered Volume Discounts &amp; Loyalty Rewards Table</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Purchased Quantity Band</th>
          <th>Pricing Tier</th>
          <th>Volume Discount Rate</th>
          <th>Condition Evaluated in C#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1 to 4 units</strong></td>
          <td>Standard / Single</td>
          <td><span class="rate-tag">0% (No discount)</span></td>
          <td><code>qty &lt; 5</code></td>
        </tr>
        <tr>
          <td><strong>5 to 9 units</strong></td>
          <td>Bulk Pack Tier</td>
          <td><span class="rate-tag">5% volume discount (0.05m)</span></td>
          <td><code>qty &gt;= 5 &amp;&amp; qty &lt;= 9</code></td>
        </tr>
        <tr>
          <td><strong>10 or more units</strong></td>
          <td>Wholesale Volume Tier</td>
          <td><span class="rate-tag">15% volume discount (0.15m)</span></td>
          <td><code>qty &gt;= 10</code></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-callout" style="border-left-color: var(--accent-amber); background: rgba(245, 158, 11, 0.08);">
    <strong>⚙️ Gold Membership, Loyalty Points &amp; Accumulator Variables:</strong>
    <ul>
      <li><strong>Gold Customer Loyalty Card:</strong> CheckBox <code>chkGoldCard</code> applies an <span class="rate-tag">additional 5% discount (0.05m)</span> on the post-volume-discount subtotal.</li>
      <li><strong>Customer Loyalty Rewards Points:</strong> Customers earn <span class="rate-tag">1 point for every complete R50.00</span> spent on net sale total (<code>(int)(netTotal / 50m)</code>). Formatted as 5 digits with leading zeros (e.g., <code>points.ToString("D5")</code>).</li>
      <li><strong>Session Grand Total Accumulator:</strong> Private class-level field variable <code>private decimal _sessionRevenue = 0m;</code> accumulates gross revenue across all sales in the cashier shift.</li>
      <li><strong>Cart Modification:</strong> Cashiers can delete an item from <code>lstReceipt</code> via <code>lstReceipt.Items.RemoveAt(lstReceipt.SelectedIndex)</code> after confirming <code>lstReceipt.SelectedIndex != -1</code>.</li>
    </ul>
  </div>

  <div class="scenario-section-header"><span>🖥️ 2. GUI Controls &amp; Hungarian Naming Matrix</span></div>
  <div class="scenario-table-wrap">
    <table class="scenario-spec-table">
      <thead>
        <tr>
          <th>Control Name</th>
          <th>Control Type</th>
          <th>Default State / Text</th>
          <th>Event / Handler</th>
          <th>Technical Purpose &amp; Validation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>txtItemName</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 0)</td>
          <td>Focus target</td>
          <td>Product description. Validated non-empty with <code>string.IsNullOrWhiteSpace</code>.</td>
        </tr>
        <tr>
          <td><code>txtPrice</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 1)</td>
          <td>Focus target</td>
          <td>Item unit price. Defensive check: positive decimal (<code>decimal.TryParse</code>, &gt; 0).</td>
        </tr>
        <tr>
          <td><code>txtQuantity</code></td>
          <td>TextBox</td>
          <td>Empty (TabIndex = 2)</td>
          <td>Focus target</td>
          <td>Units purchased. Defensive check: positive integer (<code>int.TryParse</code>, &gt;= 1).</td>
        </tr>
        <tr>
          <td><code>chkGoldCard</code></td>
          <td>CheckBox</td>
          <td>Checked = false</td>
          <td>Click</td>
          <td>Toggles additional 5% gold member loyalty card discount.</td>
        </tr>
        <tr>
          <td><code>btnAddItem</code></td>
          <td>Button</td>
          <td>Text: "&amp;Add Line Item"</td>
          <td><code>btnAddItem_Click</code></td>
          <td>Validates line, applies volume tier discount, appends to ListBox, updates cart total.</td>
        </tr>
        <tr>
          <td><code>btnRemoveItem</code></td>
          <td>Button</td>
          <td>Text: "&amp;Remove Selected"</td>
          <td><code>btnRemoveItem_Click</code></td>
          <td>Validates <code>SelectedIndex != -1</code>, removes selected line item from ListBox cart.</td>
        </tr>
        <tr>
          <td><code>btnCheckout</code></td>
          <td>Button</td>
          <td>Text: "&amp;Checkout"</td>
          <td><code>btnCheckout_Click</code></td>
          <td>Calculates loyalty points, adds to shift session revenue accumulator, displays confirmation.</td>
        </tr>
        <tr>
          <td><code>btnNewSale</code></td>
          <td>Button</td>
          <td>Text: "&amp;New Customer Sale"</td>
          <td><code>btnNewSale_Click</code></td>
          <td>Clears cart ListBox and current cart totals while preserving session shift accumulator.</td>
        </tr>
        <tr>
          <td><code>btnExit</code></td>
          <td>Button</td>
          <td>Text: "E&amp;xit"</td>
          <td><code>btnExit_Click</code></td>
          <td>Confirmation dialog and form closure via <code>this.Close();</code>.</td>
        </tr>
        <tr>
          <td><code>lblCurrentTotal</code></td>
          <td>Label</td>
          <td>Text: "" (Fixed3D, Bold)</td>
          <td>Output target</td>
          <td>Displays current customer transaction subtotal formatted as currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lblSessionTotal</code></td>
          <td>Label</td>
          <td>Text: "" (BorderStyle = Fixed3D)</td>
          <td>Output target</td>
          <td>Displays shift session revenue accumulator formatted as currency (<code>ToString("C")</code>).</td>
        </tr>
        <tr>
          <td><code>lblLoyaltyPoints</code></td>
          <td>Label</td>
          <td>Text: "" (BorderStyle = Fixed3D)</td>
          <td>Output target</td>
          <td>Displays 5-digit formatted loyalty points earned (e.g. <code>00125</code>).</td>
        </tr>
        <tr>
          <td><code>lstReceipt</code></td>
          <td>ListBox</td>
          <td>Empty (Monospace font)</td>
          <td>Output target</td>
          <td>Itemized sales till receipt showing item name, quantity, unit price, discount, and line total.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="scenario-section-header"><span>📐 3. Calculation Logic &amp; Defensive Validation Rules</span></div>
  <div class="scenario-callout">
    <ol>
      <li><strong>Defensive Parsing:</strong> Price must be parsed with <code>decimal.TryParse(txtPrice.Text, out price)</code> and satisfy <code>price &gt; 0</code>. Quantity must parse with <code>int.TryParse(txtQuantity.Text, out qty)</code> and satisfy <code>qty &gt;= 1</code>. On error, display message box, set focus, select all, and return.</li>
      <li><strong>Gross Line Subtotal:</strong> <code>grossLine = qty * price</code>.</li>
      <li><strong>Volume Discount Tier:</strong>
        <code>if (qty &gt;= 10) volumeDiscount = grossLine * 0.15m;</code><br>
        <code>else if (qty &gt;= 5) volumeDiscount = grossLine * 0.05m;</code><br>
        <code>else volumeDiscount = 0m;</code><br>
        <code>netLine = grossLine - volumeDiscount;</code>
      </li>
      <li><strong>Gold Member Surcharge / Discount:</strong> If <code>chkGoldCard.Checked</code>, <code>goldDiscount = netLine * 0.05m;</code> final line total = <code>netLine - goldDiscount</code>.</li>
      <li><strong>Cart Accumulation:</strong> <code>_currentCartTotal += finalLineTotal;</code>. Update <code>lblCurrentTotal.Text = _currentCartTotal.ToString("C");</code>. Add line item to <code>lstReceipt.Items.Add(...)</code>.</li>
      <li><strong>Checkout Execution:</strong> In <code>btnCheckout_Click</code>, calculate <code>int points = (int)(_currentCartTotal / 50m);</code>. Format points with <code>lblLoyaltyPoints.Text = points.ToString("D5");</code>. Add to session grand total: <code>_sessionRevenue += _currentCartTotal;</code> and update <code>lblSessionTotal.Text = _sessionRevenue.ToString("C");</code>.</li>
    </ol>
  </div>
</div>`,
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
    },
    {
      "id": "err_16",
      "title": "Spot-the-Error: Duplicate Method Signature in Form Class (CS0111)",
      "code": "1: private void btnClear_Click(object sender, EventArgs e)\n2: {\n3:     txtTest1.Text = \"\";\n4:     txtTest2.Text = \"\";\n5:     lblAverage.Text = \"\";\n6: }\n7: private void btnClear_Click(object sender, EventArgs e)\n8: {\n9:     this.Close();\n10: }",
      "question": "Why does this C# Form class fail to compile with Roslyn error CS0111?",
      "options": [
        "Line 1: Event handlers cannot be declared with 'private' access modifier",
        "Line 5: Assigning empty string \"\" to a Label is invalid syntax",
        "Line 7: Two methods in the same class cannot share the identical identifier 'btnClear_Click' and parameter list",
        "Line 9: 'this.Close();' cannot be called inside a Form class"
      ],
      "answer": 2,
      "explanation": "In C#, declaring two methods in the same class with the same name and parameter list causes CS0111: Type already defines a member called 'btnClear_Click' with the same parameter types. The second method should be named 'btnExit_Click'."
    },
    {
      "id": "err_17",
      "title": "Spot-the-Error: Invalid Catch Syntax and String Formatting Typo",
      "code": "1: try\n2: {\n3:     double test1 = double.Parse(txtTest1.Text);\n4:     double test2 = double.Parse(txtTest2.Text);\n5:     double avg = (test1 + test2) / 2.0;\n6:     lblAverage.Text = avg.toString(''n2'');\n7: }\n8: catch except(ex e)\n9: {\n10:    MessageBox.Show(\"Please enter valid numeric marks.\");\n11: }",
      "question": "Which two lines contain syntax errors that prevent this event handler from compiling?",
      "options": [
        "Line 3 (double.Parse does not exist in C#) and Line 5 (division by 2.0 is illegal)",
        "Line 6 (lowercase 'toString' with single quotes ''n2'') and Line 8 (invalid 'catch except(ex e)' syntax)",
        "Line 1 (try cannot be lowercase) and Line 10 (MessageBox.Show requires 3 arguments)",
        "Line 4 (txtTest2.Text is read-only) and Line 8 (missing finally block)"
      ],
      "answer": 1,
      "explanation": "Line 6 violates C# PascalCase naming (must be ToString) and uses two single quotes (''n2'') instead of double quotes (\"n2\"). Line 8 has invalid catch syntax; C# requires 'catch (FormatException ex)' or 'catch (Exception ex)'."
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
    "scenario_racing_light": {
      "id": "scenario_racing_light",
      "title": "Practical 1: Racing Light Trainer (SU1)",
      "studyUnits": [
        "SU1"
      ],
      "requiresCurrency": false,
      "requiresValidation": false,
      "description": "Develop the event handler for btnStop_Click. In Practical 1 (Racing Light Trainer), when the Stop button is clicked, the application must display the red traffic light (picRed.Visible = true), hide the amber light (picAmber.Visible = false), hide the green light (picGreen.Visible = false), hide the dark lamp (picDark.Visible = false), and update the instruction label text to 'STOP' (lblInstruction.Text = 'STOP').",
      "controls": [
        "picRed",
        "picAmber",
        "picGreen",
        "picDark",
        "lblInstruction",
        "btnStop"
      ],
      "expectedOutputs": [
        "lblInstruction",
        "picRed",
        "picAmber",
        "picGreen",
        "picDark"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations (Practical 1)\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: PictureBox picRed, picAmber, picGreen, picDark; Label lblInstruction; Button btnStop;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnStop_Click(object sender, EventArgs e)\n    {",
      "methodHeader": "private void btnStop_Click(object sender, EventArgs e)\n{",
      "methodFooter": "    }\n}",
      "modelSolution": "picRed.Visible = true;\npicAmber.Visible = false;\npicGreen.Visible = false;\npicDark.Visible = false;\nlblInstruction.Text = \"STOP\";",
      "testCases": [
        {
          "name": "Stop Signal Selected (Show Red, Hide Others, Set Text to STOP)",
          "inputs": {
            "lblInstruction": "SELECT A LIGHT",
            "picDark": true,
            "picRed": false,
            "picAmber": true,
            "picGreen": true
          },
          "expected": {
            "lblInstruction": "STOP",
            "picRed": true,
            "picAmber": false,
            "picGreen": false,
            "picDark": false
          }
        },
        {
          "name": "Stop Signal from Ready Lamp (Verify all PictureBox states)",
          "inputs": {
            "lblInstruction": "TRAINER READY",
            "picDark": true,
            "picRed": false,
            "picAmber": false,
            "picGreen": false
          },
          "expected": {
            "lblInstruction": "STOP",
            "picRed": true,
            "picAmber": false,
            "picGreen": false,
            "picDark": false
          }
        }
      ]
    },
    "scenario_braai_master": {
      "id": "scenario_braai_master",
      "title": "Practical 2: Braai Master 3000 (SU1–SU2)",
      "studyUnits": [
        "SU1",
        "SU2"
      ],
      "requiresCurrency": true,
      "requiresValidation": true,
      "description": "Develop the event handler for btnCalculate_Click in Practical 2 (Braai Master 3000). Read kilograms of wors from txtWorsKg, butcher price per kg from txtPricePerKg, and price per roll from txtPricePerRoll using decimal.TryParse(). If any value fails to parse or is <= 0, display 'Please enter valid positive numbers.' using MessageBox.Show(\"Please enter valid positive numbers.\", \"Input Error\") and exit. Declare a constant for roll capacity: const decimal GRAMS_PER_ROLL = 120m;. Calculate: wors cost = kg * price/kg; total grams = kg * 1000m; rolls needed = (int)(totalGrams / GRAMS_PER_ROLL); rolls cost = rolls needed * price/roll; total cost = wors cost + rolls cost. Format total cost using .ToString(\"C\") and display in lblTotalCost.",
      "controls": [
        "txtName",
        "txtWorsKg",
        "txtPricePerKg",
        "txtPricePerRoll",
        "lblTotalCost",
        "btnCalculate"
      ],
      "expectedOutputs": [
        "lblTotalCost"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations (Practical 2)\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: TextBox txtName, txtWorsKg, txtPricePerKg, txtPricePerRoll; Label lblTotalCost; Button btnCalculate;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnCalculate_Click(object sender, EventArgs e)\n    {",
      "methodHeader": "private void btnCalculate_Click(object sender, EventArgs e)\n{",
      "methodFooter": "    }\n}",
      "modelSolution": "decimal worsKg;\ndecimal pricePerKg;\ndecimal pricePerRoll;\nconst decimal GRAMS_PER_ROLL = 120m;\n\nif (decimal.TryParse(txtWorsKg.Text, out worsKg) &&\n    decimal.TryParse(txtPricePerKg.Text, out pricePerKg) &&\n    decimal.TryParse(txtPricePerRoll.Text, out pricePerRoll))\n{\n    if (worsKg <= 0m || pricePerKg <= 0m || pricePerRoll <= 0m)\n    {\n        MessageBox.Show(\"Please enter valid positive numbers.\", \"Input Error\");\n        return;\n    }\n\n    decimal worsCost = worsKg * pricePerKg;\n    decimal totalGrams = worsKg * 1000m;\n    int rollsNeeded = (int)(totalGrams / GRAMS_PER_ROLL);\n    decimal rollsCost = rollsNeeded * pricePerRoll;\n    decimal totalCost = worsCost + rollsCost;\n\n    lblTotalCost.Text = totalCost.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter valid positive numbers.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "Standard Braai: 2.5kg Wors @ R85/kg, R3.50/roll (Wors R212.50, 20 Rolls R70 -> Total R282.50)",
          "inputs": {
            "txtName": "Kobus",
            "txtWorsKg": "2.5",
            "txtPricePerKg": "85.00",
            "txtPricePerRoll": "3.50"
          },
          "expected": {
            "lblTotalCost": "282.5"
          }
        },
        {
          "name": "Small Braai: 1.2kg Wors @ R90/kg, R4.00/roll (Wors R108.00, 10 Rolls R40 -> Total R148.00)",
          "inputs": {
            "txtName": "Anri",
            "txtWorsKg": "1.2",
            "txtPricePerKg": "90.00",
            "txtPricePerRoll": "4.00"
          },
          "expected": {
            "lblTotalCost": "148"
          }
        },
        {
          "name": "Invalid Input Validation (Non-numeric text triggers MessageBox)",
          "inputs": {
            "txtName": "Kobus",
            "txtWorsKg": "invalid",
            "txtPricePerKg": "85.00",
            "txtPricePerRoll": "3.50"
          },
          "expected": {
            "_messages": "Please enter valid positive numbers."
          }
        },
        {
          "name": "Negative Value Validation (Negative wors kg triggers MessageBox)",
          "inputs": {
            "txtName": "Kobus",
            "txtWorsKg": "-5",
            "txtPricePerKg": "85.00",
            "txtPricePerRoll": "3.50"
          },
          "expected": {
            "_messages": "Please enter valid positive numbers."
          }
        }
      ]
    },
    "scenario_speedtrap": {
      "id": "scenario_speedtrap",
      "title": "Practical 4: SpeedTrap Potchefstroom R30 (SU1–SU3)",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "requiresValidation": true,
      "description": "Develop btnCheck_Click for Practical 4 (SpeedTrap R30). Parse recorded speed from txtSpeed and limit from txtLimit using int.TryParse(). If invalid, display an error message with MessageBox.Show(). Calculate speedOver = speed - limit. If speedOver <= 0, set lblKmOver to '0 km/h', lblCategory to 'Within the limit', and lblFine to 'No fine. Safe driving.'. Otherwise, set lblKmOver to speedOver.ToString() + ' km/h' and evaluate the band: 1-10 is R250 ('Minor'), 11-20 is R750 ('Serious'), 21-30 is R1500 ('Severe'), >30 is R2500 ('Court appearance'). If zone (txtZone.Text) is 'School' or 'Town' AND speedOver > 20, double the fine and append ' - built-up area' to the category. If txtRepeat.Text is 'yes', add class constant REPEAT_FINE (500m) to the fine. Output category to lblCategory and fine formatted with .ToString('C') to lblFine.",
      "controls": [
        "txtSpeed",
        "txtLimit",
        "txtZone",
        "txtRepeat",
        "lblKmOver",
        "lblCategory",
        "lblFine",
        "btnCheck"
      ],
      "expectedOutputs": [
        "lblKmOver",
        "lblCategory",
        "lblFine"
      ],
      "weights": {
        "syntax": 25,
        "validation": 25,
        "tests": 35,
        "gui": 15
      },
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations (Practical 4)\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: TextBox txtSpeed, txtLimit, txtZone, txtRepeat; Label lblKmOver, lblCategory, lblFine; Button btnCheck;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnCheck_Click(object sender, EventArgs e)\n    {",
      "methodHeader": "private void btnCheck_Click(object sender, EventArgs e)\n{",
      "methodFooter": "    }\n}",
      "modelSolution": "int speed;\nint limit;\nconst decimal REPEAT_FINE = 500m;\n\nif (int.TryParse(txtSpeed.Text, out speed) && int.TryParse(txtLimit.Text, out limit))\n{\n    int speedOver = speed - limit;\n    if (speedOver <= 0)\n    {\n        lblKmOver.Text = \"0 km/h\";\n        lblCategory.Text = \"Within the limit\";\n        lblFine.Text = \"No fine. Safe driving.\";\n        return;\n    }\n\n    lblKmOver.Text = speedOver.ToString() + \" km/h\";\n    decimal fine = 0m;\n    string category = \"\";\n\n    if (speedOver <= 10)\n    {\n        fine = 250m;\n        category = \"Minor\";\n    }\n    else if (speedOver <= 20)\n    {\n        fine = 750m;\n        category = \"Serious\";\n    }\n    else if (speedOver <= 30)\n    {\n        fine = 1500m;\n        category = \"Severe\";\n    }\n    else\n    {\n        fine = 2500m;\n        category = \"Court appearance\";\n    }\n\n    string zone = txtZone.Text;\n    bool isBuiltUp = (zone == \"School\" || zone == \"Town\");\n    if (isBuiltUp && speedOver > 20)\n    {\n        fine *= 2m;\n        category += \" - built-up area\";\n    }\n\n    if (txtRepeat.Text.CompareTo(\"yes\") == 0)\n    {\n        fine += REPEAT_FINE;\n    }\n\n    lblCategory.Text = category;\n    lblFine.Text = fine.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter valid integers for speed and limit.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "School Zone 85 in 60 (25 km/h over -> Severe R1500 doubled to R3000)",
          "inputs": {
            "txtSpeed": "85",
            "txtLimit": "60",
            "txtZone": "School",
            "txtRepeat": "no"
          },
          "expected": {
            "lblKmOver": "25 km/h",
            "lblCategory": "Severe - built-up area",
            "lblFine": "3000"
          }
        },
        {
          "name": "Highway 105 in 80 with Repeat (25 km/h over -> Severe R1500 + R500 = R2000)",
          "inputs": {
            "txtSpeed": "105",
            "txtLimit": "80",
            "txtZone": "Highway",
            "txtRepeat": "yes"
          },
          "expected": {
            "lblKmOver": "25 km/h",
            "lblCategory": "Severe",
            "lblFine": "2000"
          }
        },
        {
          "name": "Safe Driving: 55 in 60 (0 km/h, Within the limit, No fine)",
          "inputs": {
            "txtSpeed": "55",
            "txtLimit": "60",
            "txtZone": "Town",
            "txtRepeat": "no"
          },
          "expected": {
            "lblKmOver": "0 km/h",
            "lblCategory": "Within the limit",
            "lblFine": "No fine. Safe driving."
          }
        },
        {
          "name": "Non-numeric Speed Validation (Invalid speed triggers MessageBox)",
          "inputs": {
            "txtSpeed": "fast",
            "txtLimit": "60",
            "txtZone": "Town",
            "txtRepeat": "no"
          },
          "expected": {
            "_messages": "Please enter valid integers for speed and limit."
          }
        }
      ]
    },
    "scenario_vaal_cruise": {
      "id": "scenario_vaal_cruise",
      "title": "Practical 5: Vaal River Cruises Booking (SU1–SU4)",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3",
        "SU4"
      ],
      "requiresCurrency": true,
      "requiresValidation": true,
      "description": "Develop btnBook_Click for Practical 5 (Vaal River Cruises). Validate that a cruise route is selected from lstRoutes (lstRoutes.SelectedIndex != -1). If none selected, show 'Please select a cruise route.' using MessageBox.Show() and exit. Validate passenger count from txtPassengers using int.TryParse(); if invalid or < 1, display 'Please enter a valid passenger count of at least 1.' and return. Use a switch statement on lstRoutes.SelectedIndex: 0 is R250 (Sunset Leisure Cruise), 1 is R400 (Speedboat Adventure), 2 is R800 (Private Pontoon Charter). Subtotal = passengers * ticketPrice. If passengers >= 6, apply a 10% group discount. Final due = subtotal - discount. Display final due formatted with .ToString('C') in lblTotalDue.",
      "controls": [
        "lstRoutes",
        "txtPassengers",
        "radDaytime",
        "radSunset",
        "lblTotalDue",
        "btnBook"
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
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations (Practical 5)\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: ListBox lstRoutes; TextBox txtPassengers; RadioButton radDaytime, radSunset; Label lblTotalDue; Button btnBook;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnBook_Click(object sender, EventArgs e)\n    {",
      "methodHeader": "private void btnBook_Click(object sender, EventArgs e)\n{",
      "methodFooter": "    }\n}",
      "modelSolution": "if (lstRoutes.SelectedIndex == -1)\n{\n    MessageBox.Show(\"Please select a cruise route.\", \"Selection Error\");\n    return;\n}\n\nint passengers;\nif (int.TryParse(txtPassengers.Text, out passengers) && passengers >= 1)\n{\n    decimal ticketPrice = 0m;\n    switch (lstRoutes.SelectedIndex)\n    {\n        case 0:\n            ticketPrice = 250m;\n            break;\n        case 1:\n            ticketPrice = 400m;\n            break;\n        case 2:\n            ticketPrice = 800m;\n            break;\n        default:\n            ticketPrice = 250m;\n            break;\n    }\n\n    decimal subtotal = passengers * ticketPrice;\n    decimal discount = 0m;\n    if (passengers >= 6)\n    {\n        discount = subtotal * 0.10m;\n    }\n\n    decimal finalDue = subtotal - discount;\n    lblTotalDue.Text = finalDue.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter a valid passenger count of at least 1.\", \"Input Error\");\n}",
      "testCases": [
        {
          "name": "Sunset Leisure 4 Passengers (4 * R250 = R1000)",
          "inputs": {
            "lstRoutes": {
              "items": [
                "Sunset Leisure Cruise (R250)",
                "Speedboat Adventure (R400)",
                "Private Pontoon Charter (R800)"
              ],
              "selectedIndex": 0
            },
            "txtPassengers": "4"
          },
          "expected": {
            "lblTotalDue": "1000"
          }
        },
        {
          "name": "Speedboat Adventure 6 Passengers (6 * R400 = R2400 minus 10% = R2160)",
          "inputs": {
            "lstRoutes": {
              "items": [
                "Sunset Leisure Cruise (R250)",
                "Speedboat Adventure (R400)",
                "Private Pontoon Charter (R800)"
              ],
              "selectedIndex": 1
            },
            "txtPassengers": "6"
          },
          "expected": {
            "lblTotalDue": "2160"
          }
        },
        {
          "name": "Passenger Count Validation (0 passengers triggers MessageBox)",
          "inputs": {
            "lstRoutes": {
              "items": [
                "Sunset Leisure Cruise (R250)",
                "Speedboat Adventure (R400)",
                "Private Pontoon Charter (R800)"
              ],
              "selectedIndex": 0
            },
            "txtPassengers": "0"
          },
          "expected": {
            "_messages": "Please enter a valid passenger count of at least 1."
          }
        },
        {
          "name": "Route Selection Validation (No route selected triggers MessageBox)",
          "inputs": {
            "lstRoutes": {
              "items": [
                "Sunset Leisure Cruise (R250)",
                "Speedboat Adventure (R400)",
                "Private Pontoon Charter (R800)"
              ],
              "selectedIndex": -1
            },
            "txtPassengers": "4"
          },
          "expected": {
            "_messages": "Please select a cruise route."
          }
        }
      ]
    },
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
      "q": "Which of Shneiderman's 5 measurable usability goals evaluates the amount of time required for a typical user to achieve basic proficiency with an application?",
      "title": "Which of Shneiderman's 5 measurable usability goals evaluates the amount of time required for a typical user to achieve basic proficiency with an application?",
      "options": [
        "Time to learn",
        "Subjective satisfaction",
        "Speed of performance",
        "Retention over time"
      ],
      "opts": [
        "Time to learn",
        "Subjective satisfaction",
        "Speed of performance",
        "Retention over time"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Time to learn measures how long it takes for users from the target audience to acquire the knowledge needed to carry out interface tasks successfully.",
      "explanation": "Time to learn measures how long it takes for users from the target audience to acquire the knowledge needed to carry out interface tasks successfully.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_027",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In a busy commercial retail terminal, an interface architect configures keyboard access keys (e.g. Alt+C for Calculate) and sets the Form's AcceptButton to btnCalculate. Which usability measure is directly optimized?",
      "title": "In a busy commercial retail terminal, an interface architect configures keyboard access keys (e.g. Alt+C for Calculate) and sets the Form's AcceptButton to btnCalculate. Which usability measure is directly optimized?",
      "options": [
        "Subjective retention",
        "Speed of performance",
        "Hardware scalability",
        "System boot latency"
      ],
      "opts": [
        "Subjective retention",
        "Speed of performance",
        "Hardware scalability",
        "System boot latency"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Speed of performance measures how quickly routine tasks are completed once learned. Access keys and default enter keys allow expert operators to execute transactions rapidly without reaching for the mouse.",
      "explanation": "Speed of performance measures how quickly routine tasks are completed once learned. Access keys and default enter keys allow expert operators to execute transactions rapidly without reaching for the mouse.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_028",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Replacing a free-text TextBox with a ListBox or ComboBox for selecting standardized cruise packages directly improves which usability measure?",
      "title": "Replacing a free-text TextBox with a ListBox or ComboBox for selecting standardized cruise packages directly improves which usability measure?",
      "options": [
        "CPU cycle consumption",
        "Form design compile time",
        "Rate of errors by users",
        "Network bandwidth throughput"
      ],
      "opts": [
        "CPU cycle consumption",
        "Form design compile time",
        "Rate of errors by users",
        "Network bandwidth throughput"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Rate of errors by users measures how many and what kinds of mistakes users make. Constraining choices to valid items in a ListBox eliminates typing mistakes, misspellings, and out-of-range errors.",
      "explanation": "Rate of errors by users measures how many and what kinds of mistakes users make. Constraining choices to valid items in a ListBox eliminates typing mistakes, misspellings, and out-of-range errors.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_029",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "An agricultural taxation tool is used by seasonal farmers only once every six months. Which usability measure is most critical to ensure they do not require extensive retraining each year?",
      "title": "An agricultural taxation tool is used by seasonal farmers only once every six months. Which usability measure is most critical to ensure they do not require extensive retraining each year?",
      "options": [
        "Compilation throughput",
        "Peak memory efficiency",
        "Algorithmic recursion speed",
        "Retention over time"
      ],
      "opts": [
        "Compilation throughput",
        "Peak memory efficiency",
        "Algorithmic recursion speed",
        "Retention over time"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Retention over time evaluates how well users preserve their interface operating skills after prolonged periods without using the system. Consistent layouts and clear visual cues facilitate high retention.",
      "explanation": "Retention over time evaluates how well users preserve their interface operating skills after prolonged periods without using the system. Consistent layouts and clear visual cues facilitate high retention.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_030",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "How is the usability measure 'Subjective satisfaction' typically assessed in software development?",
      "title": "How is the usability measure 'Subjective satisfaction' typically assessed in software development?",
      "options": [
        "Through user post-test surveys, interviews, and Likert-scale satisfaction questionnaires",
        "By counting compiler warnings generated during build",
        "By measuring the physical weight of the monitor",
        "By timing the millisecond latency of the garbage collector"
      ],
      "opts": [
        "Through user post-test surveys, interviews, and Likert-scale satisfaction questionnaires",
        "By counting compiler warnings generated during build",
        "By measuring the physical weight of the monitor",
        "By timing the millisecond latency of the garbage collector"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Subjective satisfaction measures users' personal perception, comfort, and enjoyment of the system, determined via questionnaires (such as QUIS), interviews, and rating scales.",
      "explanation": "Subjective satisfaction measures users' personal perception, comfort, and enjoyment of the system, determined via questionnaires (such as QUIS), interviews, and rating scales.",
      "provenance": "Shneiderman 5th Ed §1.2.2",
      "marks": 2
    },
    {
      "id": "q_su7_031",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In life-critical systems (e.g., intensive care patient monitoring, air traffic control, nuclear power management), what usability trade-off is strictly mandated?",
      "title": "In life-critical systems (e.g., intensive care patient monitoring, air traffic control, nuclear power management), what usability trade-off is strictly mandated?",
      "options": [
        "Aesthetics and animated transitions must be prioritized over reliability",
        "Zero-tolerance for user error and absolute reliability take precedence over rapid learning or novelty",
        "Training time must always be kept under 5 minutes",
        "Voice synthesis must entirely replace visual graphical interfaces"
      ],
      "opts": [
        "Aesthetics and animated transitions must be prioritized over reliability",
        "Zero-tolerance for user error and absolute reliability take precedence over rapid learning or novelty",
        "Training time must always be kept under 5 minutes",
        "Voice synthesis must entirely replace visual graphical interfaces"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "In life-critical applications, the cost of human error is fatal. Lengthy training is acceptable if it guarantees near-zero operating errors, fail-safe confirmations, and rapid emergency intervention.",
      "explanation": "In life-critical applications, the cost of human error is fatal. Lengthy training is acceptable if it guarantees near-zero operating errors, fail-safe confirmations, and rapid emergency intervention.",
      "provenance": "Shneiderman 5th Ed §1.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_032",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "For industrial and commercial office systems (e.g. banking teller terminals, insurance claim auditing), what is the primary economic driver of interface usability?",
      "title": "For industrial and commercial office systems (e.g. banking teller terminals, insurance claim auditing), what is the primary economic driver of interface usability?",
      "options": [
        "Maximizing playful animations to entertain staff",
        "Ensuring the program can run without an operating system",
        "Minimizing operator transaction time and reducing costly data-entry mistakes to lower business operating costs",
        "Designing interfaces that require no keyboard"
      ],
      "opts": [
        "Maximizing playful animations to entertain staff",
        "Ensuring the program can run without an operating system",
        "Minimizing operator transaction time and reducing costly data-entry mistakes to lower business operating costs",
        "Designing interfaces that require no keyboard"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "In commercial settings, reducing repetitive transaction times by even seconds across thousands of daily operations dramatically reduces labor costs and costly operational mistakes.",
      "explanation": "In commercial settings, reducing repetitive transaction times by even seconds across thousands of daily operations dramatically reduces labor costs and costly operational mistakes.",
      "provenance": "Shneiderman 5th Ed §1.3.2",
      "marks": 2
    },
    {
      "id": "q_su7_033",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In office, home, and entertainment applications, what factor most heavily determines whether users continue to adopt and utilize the software?",
      "title": "In office, home, and entertainment applications, what factor most heavily determines whether users continue to adopt and utilize the software?",
      "options": [
        "The number of command-line switches available",
        "The presence of complex nested multi-tiered menus",
        "Forced registration and complex password renewals",
        "Ease of learning, low frustration, and seamless self-explanatory operation without formal training manuals"
      ],
      "opts": [
        "The number of command-line switches available",
        "The presence of complex nested multi-tiered menus",
        "Forced registration and complex password renewals",
        "Ease of learning, low frustration, and seamless self-explanatory operation without formal training manuals"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Consumers in home and office settings will quickly abandon or reject software that causes frustration, confusion, or steep learning curves.",
      "explanation": "Consumers in home and office settings will quickly abandon or reject software that causes frustration, confusion, or steep learning curves.",
      "provenance": "Shneiderman 5th Ed §1.3.3",
      "marks": 2
    },
    {
      "id": "q_su7_034",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What core interface capability is essential for exploratory, creative, and collaborative applications (such as CAD modeling, graphic design, and music editors)?",
      "title": "What core interface capability is essential for exploratory, creative, and collaborative applications (such as CAD modeling, graphic design, and music editors)?",
      "options": [
        "Easy exploration with comprehensive Undo/Redo capabilities and non-destructive experimentation",
        "Strict modal dialogs that prevent multitasking",
        "Disabling keyboard shortcuts to prevent accidental commands",
        "Forcing permanent saving after every mouse click"
      ],
      "opts": [
        "Easy exploration with comprehensive Undo/Redo capabilities and non-destructive experimentation",
        "Strict modal dialogs that prevent multitasking",
        "Disabling keyboard shortcuts to prevent accidental commands",
        "Forcing permanent saving after every mouse click"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Creative applications encourage innovation by enabling users to explore alternative ideas freely, supported by robust, multi-level Undo/Redo mechanisms.",
      "explanation": "Creative applications encourage innovation by enabling users to explore alternative ideas freely, supported by robust, multi-level Undo/Redo mechanisms.",
      "provenance": "Shneiderman 5th Ed §1.3.4",
      "marks": 2
    },
    {
      "id": "q_su7_035",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In socio-technical public systems (such as national election voting kiosks and municipal service portals), which interface attribute is paramount?",
      "title": "In socio-technical public systems (such as national election voting kiosks and municipal service portals), which interface attribute is paramount?",
      "options": [
        "High-speed keyboard commands intended only for expert typists",
        "Trust, accessibility for citizens of all literacy levels, and total prevention of ambiguous inputs",
        "Integration with cutting-edge 3D virtual reality headsets",
        "Eliminating confirmation screens to accelerate line throughput"
      ],
      "opts": [
        "High-speed keyboard commands intended only for expert typists",
        "Trust, accessibility for citizens of all literacy levels, and total prevention of ambiguous inputs",
        "Integration with cutting-edge 3D virtual reality headsets",
        "Eliminating confirmation screens to accelerate line throughput"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Socio-technical systems serve diverse citizen populations; they must ensure equal accessibility, unambiguous comprehension, verifiable trust, and zero disenfranchisement.",
      "explanation": "Socio-technical systems serve diverse citizen populations; they must ensure equal accessibility, unambiguous comprehension, verifiable trust, and zero disenfranchisement.",
      "provenance": "Shneiderman 5th Ed §1.3.5",
      "marks": 2
    },
    {
      "id": "q_su7_036",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "When designing a Windows Form for users with motor impairments or hand tremors, which design choice directly complies with universal usability principles?",
      "title": "When designing a Windows Form for users with motor impairments or hand tremors, which design choice directly complies with universal usability principles?",
      "options": [
        "Using tiny 12x12 pixel icon buttons clustered closely together",
        "Removing all button borders so the user must click invisible text",
        "Providing larger click targets (e.g. min 32x32 pixels) with generous margins and full keyboard navigability via TabIndex",
        "Requiring fast double-clicks within 100 milliseconds for all actions"
      ],
      "opts": [
        "Using tiny 12x12 pixel icon buttons clustered closely together",
        "Removing all button borders so the user must click invisible text",
        "Providing larger click targets (e.g. min 32x32 pixels) with generous margins and full keyboard navigability via TabIndex",
        "Requiring fast double-clicks within 100 milliseconds for all actions"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Users with motor challenges require larger interactive targets and sufficient spacing to prevent accidental mis-clicks, alongside complete keyboard alternatives.",
      "explanation": "Users with motor challenges require larger interactive targets and sufficient spacing to prevent accidental mis-clicks, alongside complete keyboard alternatives.",
      "provenance": "Shneiderman 5th Ed §1.4.1",
      "marks": 2
    },
    {
      "id": "q_su7_037",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Practical 1 (Racing Light Trainer), the form uses red, amber, and green light images but ALSO updates lblInstruction with 'STOP', 'GET READY', and 'GO'. Why is this redundant coding vital for universal usability?",
      "title": "In Practical 1 (Racing Light Trainer), the form uses red, amber, and green light images but ALSO updates lblInstruction with 'STOP', 'GET READY', and 'GO'. Why is this redundant coding vital for universal usability?",
      "options": [
        "It forces the C# compiler to allocate double the graphics memory",
        "It is a required syntax requirement of .NET Framework 4.8",
        "It speeds up CPU rendering of JPEG images",
        "It satisfies accessibility requirements for color-blind users (deuteranopia/protanopia) who cannot distinguish red from green solely by hue"
      ],
      "opts": [
        "It forces the C# compiler to allocate double the graphics memory",
        "It is a required syntax requirement of .NET Framework 4.8",
        "It speeds up CPU rendering of JPEG images",
        "It satisfies accessibility requirements for color-blind users (deuteranopia/protanopia) who cannot distinguish red from green solely by hue"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Never rely solely on color to convey meaning or state. Color-blind users depend on secondary cues such as text labels, shapes, or spatial positions to interpret system states accurately.",
      "explanation": "Never rely solely on color to convey meaning or state. Color-blind users depend on secondary cues such as text labels, shapes, or spatial positions to interpret system states accurately.",
      "provenance": "Shneiderman 5th Ed §1.4.1",
      "marks": 2
    },
    {
      "id": "q_su7_038",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "How does grouping related controls inside a GroupBox with a descriptive text header (e.g. grpRoute, grpFinding) improve cognitive usability?",
      "title": "How does grouping related controls inside a GroupBox with a descriptive text header (e.g. grpRoute, grpFinding) improve cognitive usability?",
      "options": [
        "It reduces visual clutter and chunks related information, easing cognitive processing and visual search",
        "It increases the screen resolution of the form",
        "It automatically encrypts variables inside the group",
        "It converts TextBox controls to decimal variables automatically"
      ],
      "opts": [
        "It reduces visual clutter and chunks related information, easing cognitive processing and visual search",
        "It increases the screen resolution of the form",
        "It automatically encrypts variables inside the group",
        "It converts TextBox controls to decimal variables automatically"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Visual chunking via GroupBoxes organizes complex form layouts into digestible semantic units, reducing visual search time and user cognitive load.",
      "explanation": "Visual chunking via GroupBoxes organizes complex form layouts into digestible semantic units, reducing visual search time and user cognitive load.",
      "provenance": "Shneiderman 5th Ed §1.4.2",
      "marks": 2
    },
    {
      "id": "q_su7_039",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which interface adaptation is specifically recommended when designing Visual C# Windows Forms for elderly users?",
      "title": "Which interface adaptation is specifically recommended when designing Visual C# Windows Forms for elderly users?",
      "options": [
        "Using low-contrast light grey text on dark grey backgrounds to reduce brightness",
        "Employing scalable high-contrast fonts (minimum 11-12pt), distinct button affordances, and forgiving error handling",
        "Removing all confirmation dialogs to eliminate extra clicks",
        "Hiding standard controls inside complex contextual right-click menus"
      ],
      "opts": [
        "Using low-contrast light grey text on dark grey backgrounds to reduce brightness",
        "Employing scalable high-contrast fonts (minimum 11-12pt), distinct button affordances, and forgiving error handling",
        "Removing all confirmation dialogs to eliminate extra clicks",
        "Hiding standard controls inside complex contextual right-click menus"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Elderly users benefit from higher visual contrast, larger font sizes, clear button boundaries that look clickable, and generous spatial separation between interactive elements.",
      "explanation": "Elderly users benefit from higher visual contrast, larger font sizes, clear button boundaries that look clickable, and generous spatial separation between interactive elements.",
      "provenance": "Shneiderman 5th Ed §1.4.3",
      "marks": 2
    },
    {
      "id": "q_su7_040",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What design strategy best supports internationalization (i18n) when displaying financial outputs in a South African Visual C# application?",
      "title": "What design strategy best supports internationalization (i18n) when displaying financial outputs in a South African Visual C# application?",
      "options": [
        "Hardcoding the dollar symbol '$' directly into string concatenations",
        "Writing custom loop algorithms to replace commas with asterisks",
        "Formatting numeric variables using .ToString(\"C\") to dynamically leverage the regional culture currency symbol ('R') and decimal separator",
        "Displaying financial amounts as unformatted floating-point raw numbers"
      ],
      "opts": [
        "Hardcoding the dollar symbol '$' directly into string concatenations",
        "Writing custom loop algorithms to replace commas with asterisks",
        "Formatting numeric variables using .ToString(\"C\") to dynamically leverage the regional culture currency symbol ('R') and decimal separator",
        "Displaying financial amounts as unformatted floating-point raw numbers"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Using .ToString(\"C\") automatically formats monetary values according to the host system's culture settings, correctly rendering South African Rand ('R') without hardcoded symbols.",
      "explanation": "Using .ToString(\"C\") automatically formats monetary values according to the host system's culture settings, correctly rendering South African Rand ('R') without hardcoded symbols.",
      "provenance": "Shneiderman 5th Ed §1.4.4 & Gaddis Ch 3",
      "marks": 2
    },
    {
      "id": "q_su7_041",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Windows Forms controls, what is the role of the 'AccessibleName' and 'AccessibleDescription' properties?",
      "title": "In Windows Forms controls, what is the role of the 'AccessibleName' and 'AccessibleDescription' properties?",
      "options": [
        "They set the C# identifier name used in source code logic",
        "They determine the file path for control background bitmaps",
        "They control database access permissions for the control",
        "They provide descriptive spoken text for assistive screen readers utilized by visually impaired users"
      ],
      "opts": [
        "They set the C# identifier name used in source code logic",
        "They determine the file path for control background bitmaps",
        "They control database access permissions for the control",
        "They provide descriptive spoken text for assistive screen readers utilized by visually impaired users"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Assistive technologies like Windows Narrator read AccessibleName and AccessibleDescription aloud to convey the purpose and state of UI controls to visually impaired users.",
      "explanation": "Assistive technologies like Windows Narrator read AccessibleName and AccessibleDescription aloud to convey the purpose and state of UI controls to visually impaired users.",
      "provenance": "Shneiderman 5th Ed §1.4.1",
      "marks": 2
    },
    {
      "id": "q_su7_042",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Why does Shneiderman's 1st Golden Rule ('Strive for consistency') mandate adopting standard Hungarian control prefixes (btn, txt, lbl, pic)?",
      "title": "Why does Shneiderman's 1st Golden Rule ('Strive for consistency') mandate adopting standard Hungarian control prefixes (btn, txt, lbl, pic)?",
      "options": [
        "It helps developers immediately recognize control types in code, preventing semantic mismatches between UI design and event logic",
        "The C# compiler produces a syntax error if prefixes are missing",
        "It makes the compiled executable file significantly smaller",
        "It automatically formats numbers to two decimal places"
      ],
      "opts": [
        "It helps developers immediately recognize control types in code, preventing semantic mismatches between UI design and event logic",
        "The C# compiler produces a syntax error if prefixes are missing",
        "It makes the compiled executable file significantly smaller",
        "It automatically formats numbers to two decimal places"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Consistent naming conventions (Hungarian prefixes) reduce cognitive friction for software engineers by making control types self-evident during development and code review.",
      "explanation": "Consistent naming conventions (Hungarian prefixes) reduce cognitive friction for software engineers by making control types self-evident during development and code review.",
      "provenance": "Shneiderman §2.3.1 & NWU Standard",
      "marks": 2
    },
    {
      "id": "q_su7_043",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which scenario represents an unacceptable violation of Shneiderman's 1st Golden Rule ('Strive for consistency') across a multi-form application?",
      "title": "Which scenario represents an unacceptable violation of Shneiderman's 1st Golden Rule ('Strive for consistency') across a multi-form application?",
      "options": [
        "Setting TabIndex on all textboxes in logical top-to-bottom reading order",
        "Using the label 'Exit' on Form 1, 'Quit' on Form 2, and 'Close Window' on Form 3 with varying button placements",
        "Using Arial 9pt font for all data input labels across all forms",
        "Placing the primary action button at the bottom right of each window"
      ],
      "opts": [
        "Setting TabIndex on all textboxes in logical top-to-bottom reading order",
        "Using the label 'Exit' on Form 1, 'Quit' on Form 2, and 'Close Window' on Form 3 with varying button placements",
        "Using Arial 9pt font for all data input labels across all forms",
        "Placing the primary action button at the bottom right of each window"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Inconsistent terminology ('Exit' vs 'Quit' vs 'Close Window') and shifting button coordinates confuse users and destroy mental predictability.",
      "explanation": "Inconsistent terminology ('Exit' vs 'Quit' vs 'Close Window') and shifting button coordinates confuse users and destroy mental predictability.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_044",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Setting the Button's Text property to '&Calculate' enables an access key. How does a user trigger this button from the keyboard, and which Golden Rule does this satisfy?",
      "title": "Setting the Button's Text property to '&Calculate' enables an access key. How does a user trigger this button from the keyboard, and which Golden Rule does this satisfy?",
      "options": [
        "Pressing Ctrl+Alt+Delete; satisfies Rule 5 (Prevent errors)",
        "Pressing Shift+F12; satisfies Rule 6 (Permit easy reversal of actions)",
        "Pressing Alt+C; satisfies Rule 2 (Cater to universal usability / shortcuts for experts)",
        "Pressing Esc; satisfies Rule 8 (Reduce short-term memory load)"
      ],
      "opts": [
        "Pressing Ctrl+Alt+Delete; satisfies Rule 5 (Prevent errors)",
        "Pressing Shift+F12; satisfies Rule 6 (Permit easy reversal of actions)",
        "Pressing Alt+C; satisfies Rule 2 (Cater to universal usability / shortcuts for experts)",
        "Pressing Esc; satisfies Rule 8 (Reduce short-term memory load)"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The ampersand '&' underlines the subsequent letter ('C') and binds the Alt+C keyboard accelerator, providing rapid navigation for power users (Rule 2).",
      "explanation": "The ampersand '&' underlines the subsequent letter ('C') and binds the Alt+C keyboard accelerator, providing rapid navigation for power users (Rule 2).",
      "provenance": "Shneiderman §2.3.1 & Gaddis Ch 4",
      "marks": 2
    },
    {
      "id": "q_su7_045",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "On a Windows Form, setting Form.AcceptButton = btnCalculate and Form.CancelButton = btnExit fulfills which usability principle?",
      "title": "On a Windows Form, setting Form.AcceptButton = btnCalculate and Form.CancelButton = btnExit fulfills which usability principle?",
      "options": [
        "Violating user locus of control by triggering actions without clicks",
        "Forcing the application to compile without Roslyn diagnostics",
        "Encrypting the user's keystrokes for security compliance",
        "Catering to universal usability by standardizing Enter and Esc keyboard behavior"
      ],
      "opts": [
        "Violating user locus of control by triggering actions without clicks",
        "Forcing the application to compile without Roslyn diagnostics",
        "Encrypting the user's keystrokes for security compliance",
        "Catering to universal usability by standardizing Enter and Esc keyboard behavior"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Binding AcceptButton to Enter and CancelButton to Escape honors universal usability and user expectations by enabling standard, effortless keyboard control.",
      "explanation": "Binding AcceptButton to Enter and CancelButton to Escape honors universal usability and user expectations by enabling standard, effortless keyboard control.",
      "provenance": "Shneiderman §2.3.1 & Gaddis Ch 3",
      "marks": 2
    },
    {
      "id": "q_su7_046",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "According to Shneiderman's 3rd Golden Rule ('Offer informative feedback'), how should the interface respond when a user clicks 'Add Item' to insert a product into a shopping cart ListBox?",
      "title": "According to Shneiderman's 3rd Golden Rule ('Offer informative feedback'), how should the interface respond when a user clicks 'Add Item' to insert a product into a shopping cart ListBox?",
      "options": [
        "Immediately append the item to the ListBox and update the running total label",
        "Give no visual response until the entire application is closed",
        "Display a modal pop-up dialog that interrupts the user for every single item added",
        "Clear the entire form and reset all variables to zero"
      ],
      "opts": [
        "Immediately append the item to the ListBox and update the running total label",
        "Give no visual response until the entire application is closed",
        "Display a modal pop-up dialog that interrupts the user for every single item added",
        "Clear the entire form and reset all variables to zero"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Frequent, minor actions require modest, immediate visual feedback: seeing the item appear in the list and watching the total update acknowledges the action without disruption.",
      "explanation": "Frequent, minor actions require modest, immediate visual feedback: seeing the item appear in the list and watching the total update acknowledges the action without disruption.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_047",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Why is it unacceptable for a C# Windows Forms application to execute a prolonged 10-second data processing loop without showing a ProgressBar, status label, or wait cursor?",
      "title": "Why is it unacceptable for a C# Windows Forms application to execute a prolonged 10-second data processing loop without showing a ProgressBar, status label, or wait cursor?",
      "options": [
        "The C# runtime will terminate the thread with a FatalExecutionEngineError",
        "Users will assume the application has frozen, crashed, or ignored their click (violating Rule 3: Offer informative feedback)",
        "The Windows OS will immediately delete the project .exe file",
        "It violates C# Hungarian naming guidelines"
      ],
      "opts": [
        "The C# runtime will terminate the thread with a FatalExecutionEngineError",
        "Users will assume the application has frozen, crashed, or ignored their click (violating Rule 3: Offer informative feedback)",
        "The Windows OS will immediately delete the project .exe file",
        "It violates C# Hungarian naming guidelines"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Without visual feedback during lengthy operations, users lose confidence, suspect system lockup, and frequently re-click buttons or terminate the application prematurely.",
      "explanation": "Without visual feedback during lengthy operations, users lose confidence, suspect system lockup, and frequently re-click buttons or terminate the application prematurely.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_048",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which design technique best embodies Shneiderman's 4th Golden Rule ('Design dialogs to yield closure') upon completing a multi-step booking process in Practical 5 (Vaal River Cruises)?",
      "title": "Which design technique best embodies Shneiderman's 4th Golden Rule ('Design dialogs to yield closure') upon completing a multi-step booking process in Practical 5 (Vaal River Cruises)?",
      "options": [
        "Abruptly closing the form without any message",
        "Leaving input fields filled with no indication whether the booking was registered",
        "Presenting a final booking summary dialog showing total tickets, package selected, and final Rand amount, signaling that the transaction is finalized",
        "Switching form background color to black without explanation"
      ],
      "opts": [
        "Abruptly closing the form without any message",
        "Leaving input fields filled with no indication whether the booking was registered",
        "Presenting a final booking summary dialog showing total tickets, package selected, and final Rand amount, signaling that the transaction is finalized",
        "Switching form background color to black without explanation"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Rule 4 states that sequences of action should have an organized beginning, middle, and end. A clear confirmation screen delivers closure, satisfaction, and peace of mind.",
      "explanation": "Rule 4 states that sequences of action should have an organized beginning, middle, and end. A clear confirmation screen delivers closure, satisfaction, and peace of mind.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_049",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What psychological benefit does the user experience when an interface successfully provides 'closure' (Rule 4)?",
      "title": "What psychological benefit does the user experience when an interface successfully provides 'closure' (Rule 4)?",
      "options": [
        "A feeling of helplessness and loss of control",
        "Confusion regarding whether payment was processed",
        "A desire to rewrite the underlying C# source code",
        "Relief of anxiety, confirmation that the goal was attained, and mental readiness to initiate the next task"
      ],
      "opts": [
        "A feeling of helplessness and loss of control",
        "Confusion regarding whether payment was processed",
        "A desire to rewrite the underlying C# source code",
        "Relief of anxiety, confirmation that the goal was attained, and mental readiness to initiate the next task"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Closure provides users with the satisfaction of accomplishment and frees their short-term working memory to focus on subsequent tasks.",
      "explanation": "Closure provides users with the satisfaction of accomplishment and frees their short-term working memory to focus on subsequent tasks.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_050",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Practical 2 (Braai Master 3000), using decimal.TryParse() to guard text inputs instead of raw decimal.Parse() satisfies which Golden Rule?",
      "title": "In Practical 2 (Braai Master 3000), using decimal.TryParse() to guard text inputs instead of raw decimal.Parse() satisfies which Golden Rule?",
      "options": [
        "Rule 5: Prevent errors (and handle them gracefully when they occur)",
        "Rule 8: Reduce short-term memory load only",
        "Rule 1: Strive for consistency only",
        "Rule 4: Design dialogs to yield closure only"
      ],
      "opts": [
        "Rule 5: Prevent errors (and handle them gracefully when they occur)",
        "Rule 8: Reduce short-term memory load only",
        "Rule 1: Strive for consistency only",
        "Rule 4: Design dialogs to yield closure only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Rule 5 mandates designing systems so users make fewer errors and handling mistakes gracefully with non-destructive, friendly alerts rather than unhandled exception crashes.",
      "explanation": "Rule 5 mandates designing systems so users make fewer errors and handling mistakes gracefully with non-destructive, friendly alerts rather than unhandled exception crashes.",
      "provenance": "Shneiderman §2.3.1 & Gaddis Ch 3",
      "marks": 2
    },
    {
      "id": "q_su7_051",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which error message complies best with Shneiderman's guidelines for effective error message construction?",
      "title": "Which error message complies best with Shneiderman's guidelines for effective error message construction?",
      "options": [
        "'FATAL ERROR 0x80004005: System.FormatException at offset 12'",
        "'Invalid Input. Please enter a positive numeric value for Wors Kilograms (e.g., 2.5).'",
        "'You made a stupid mistake in txtWorsKg!'",
        "'Error! Program halted.'"
      ],
      "opts": [
        "'FATAL ERROR 0x80004005: System.FormatException at offset 12'",
        "'Invalid Input. Please enter a positive numeric value for Wors Kilograms (e.g., 2.5).'",
        "'You made a stupid mistake in txtWorsKg!'",
        "'Error! Program halted.'"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Effective error messages are polite, specific, avoid technical jargon, do not blame the user, and offer constructive guidance on how to rectify the problem.",
      "explanation": "Effective error messages are polite, specific, avoid technical jargon, do not blame the user, and offer constructive guidance on how to rectify the problem.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_052",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What is the HCI justification for providing a dedicated 'Clear' button (btnClear) in Practical 2 and Practical 4?",
      "title": "What is the HCI justification for providing a dedicated 'Clear' button (btnClear) in Practical 2 and Practical 4?",
      "options": [
        "It is mandatory to free RAM from Windows OS paging",
        "It forces the garbage collector to immediately purge all controls",
        "It fulfills Rule 6: Permit easy reversal of actions, allowing users to wipe erroneous data entry and start fresh without restarting the application",
        "It satisfies Gaddis rule of using at least 5 buttons on every form"
      ],
      "opts": [
        "It is mandatory to free RAM from Windows OS paging",
        "It forces the garbage collector to immediately purge all controls",
        "It fulfills Rule 6: Permit easy reversal of actions, allowing users to wipe erroneous data entry and start fresh without restarting the application",
        "It satisfies Gaddis rule of using at least 5 buttons on every form"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Easy reversal relieves anxiety, since users know that mistakes can be painlessly cleared and undone without consequences.",
      "explanation": "Easy reversal relieves anxiety, since users know that mistakes can be painlessly cleared and undone without consequences.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_053",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "When a user clicks 'btnExit', Practical 4 requires displaying a MessageBox asking 'Are you sure you want to exit?' with Yes and No buttons. Which usability rule does this enforce?",
      "title": "When a user clicks 'btnExit', Practical 4 requires displaying a MessageBox asking 'Are you sure you want to exit?' with Yes and No buttons. Which usability rule does this enforce?",
      "options": [
        "Rule 1: Strive for consistency only",
        "Rule 2: Cater to universal usability only",
        "Rule 8: Reduce short-term memory load only",
        "Rule 6: Permit easy reversal of actions / Error prevention by preventing accidental termination of the user's workflow"
      ],
      "opts": [
        "Rule 1: Strive for consistency only",
        "Rule 2: Cater to universal usability only",
        "Rule 8: Reduce short-term memory load only",
        "Rule 6: Permit easy reversal of actions / Error prevention by preventing accidental termination of the user's workflow"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Confirmation before potentially destructive actions (like exiting or deleting) allows users to cancel accidental clicks, supporting easy error reversal.",
      "explanation": "Confirmation before potentially destructive actions (like exiting or deleting) allows users to cancel accidental clicks, supporting easy error reversal.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_054",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "What does Shneiderman's 7th Golden Rule ('Support internal locus of control') mean in the context of GUI application design?",
      "title": "What does Shneiderman's 7th Golden Rule ('Support internal locus of control') mean in the context of GUI application design?",
      "options": [
        "Users should feel that they are in charge of the system and that the system responds predictably to their explicit commands",
        "The computer system should make autonomous decisions and navigate between forms without user initiation",
        "The CPU clock must synchronize with the monitor refresh rate",
        "Database records should automatically delete themselves after 30 days"
      ],
      "opts": [
        "Users should feel that they are in charge of the system and that the system responds predictably to their explicit commands",
        "The computer system should make autonomous decisions and navigate between forms without user initiation",
        "The CPU clock must synchronize with the monitor refresh rate",
        "Database records should automatically delete themselves after 30 days"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Internal locus of control means users feel like initiators rather than responders. Unexpected behaviors, modal lockouts, or automated unsolicited pop-ups strip this control and cause dissatisfaction.",
      "explanation": "Internal locus of control means users feel like initiators rather than responders. Unexpected behaviors, modal lockouts, or automated unsolicited pop-ups strip this control and cause dissatisfaction.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_055",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which interface design defect directly violates Shneiderman's 7th Golden Rule (Internal Locus of Control)?",
      "title": "Which interface design defect directly violates Shneiderman's 7th Golden Rule (Internal Locus of Control)?",
      "options": [
        "Providing a clear 'Clear' button that resets inputs",
        "A form that automatically changes the user's cursor position and submits data without the user clicking the Submit button",
        "Allowing the user to select between Daytime and Sunset cruises using RadioButtons",
        "Formatting currency outputs with two decimal places"
      ],
      "opts": [
        "Providing a clear 'Clear' button that resets inputs",
        "A form that automatically changes the user's cursor position and submits data without the user clicking the Submit button",
        "Allowing the user to select between Daytime and Sunset cruises using RadioButtons",
        "Formatting currency outputs with two decimal places"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Unsolicited automatic submissions or involuntary cursor shifts make users feel manipulated and powerless, severely violating internal locus of control.",
      "explanation": "Unsolicited automatic submissions or involuntary cursor shifts make users feel manipulated and powerless, severely violating internal locus of control.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_056",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "How does Shneiderman's 8th Golden Rule ('Reduce short-term memory load') explain why displaying a running ListBox of items with an active total label is superior to only showing the final bill at checkout?",
      "title": "How does Shneiderman's 8th Golden Rule ('Reduce short-term memory load') explain why displaying a running ListBox of items with an active total label is superior to only showing the final bill at checkout?",
      "options": [
        "ListBox controls require zero memory on the graphics card",
        "It allows the user to memorize 50 items simultaneously",
        "Human short-term memory can only hold 7 ± 2 chunks of information; displaying current entries externally prevents cognitive overload",
        "It speeds up arithmetic addition in the ALU"
      ],
      "opts": [
        "ListBox controls require zero memory on the graphics card",
        "It allows the user to memorize 50 items simultaneously",
        "Human short-term memory can only hold 7 ± 2 chunks of information; displaying current entries externally prevents cognitive overload",
        "It speeds up arithmetic addition in the ALU"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Displaying current state, previous entries, and running totals externally on the screen frees the user from having to remember details in short-term memory (Miller's Rule of 7 ± 2).",
      "explanation": "Displaying current state, previous entries, and running totals externally on the screen frees the user from having to remember details in short-term memory (Miller's Rule of 7 ± 2).",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
    {
      "id": "q_su7_057",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "A student builds a Windows Form containing 45 unorganized TextBoxes on a single screen without any tabs, grouping, or progression. Which HCI guideline is most severely breached?",
      "title": "A student builds a Windows Form containing 45 unorganized TextBoxes on a single screen without any tabs, grouping, or progression. Which HCI guideline is most severely breached?",
      "options": [
        "Rule 6: Permit easy reversal of actions only",
        "Rule 3: Offer informative feedback only",
        "Rule 2: Cater to universal usability only",
        "Rule 8: Reduce short-term memory load (exceeding human cognitive processing capacity through excessive visual clutter)"
      ],
      "opts": [
        "Rule 6: Permit easy reversal of actions only",
        "Rule 3: Offer informative feedback only",
        "Rule 2: Cater to universal usability only",
        "Rule 8: Reduce short-term memory load (exceeding human cognitive processing capacity through excessive visual clutter)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Presenting dozens of raw inputs at once overwhelms working memory and visual attention. Dividing forms into tabs, wizards, or logical group boxes keeps cognitive load within human limits.",
      "explanation": "Presenting dozens of raw inputs at once overwhelms working memory and visual attention. Dividing forms into tabs, wizards, or logical group boxes keeps cognitive load within human limits.",
      "provenance": "Shneiderman §2.3.1",
      "marks": 2
    },
        {
      "id": "q_su7_058",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "According to Shneiderman's 5th Golden Rule ('Prevent errors'), why is wrapping user input conversion in a `try-catch (FormatException)` block or using `double.TryParse` considered superior interface design in Practical 29?",
      "title": "According to Shneiderman's 5th Golden Rule ('Prevent errors'), why is wrapping user input conversion in a `try-catch (FormatException)` block or using `double.TryParse` considered superior interface design in Practical 29?",
      "options": [
        "It suppresses all compiler errors at build time so the project compiles regardless of syntax mistakes",
        "It forces the operating system to automatically retry the parse using a default value of 0.0 without notifying the user",
        "It intercepts invalid non-numeric inputs gracefully, prevents the application from crashing, and displays constructive feedback with focus redirected to the erroneous field",
        "It disables Windows operating system error reporting and user notifications"
      ],
      "opts": [
        "It suppresses all compiler errors at build time so the project compiles regardless of syntax mistakes",
        "It forces the operating system to automatically retry the parse using a default value of 0.0 without notifying the user",
        "It intercepts invalid non-numeric inputs gracefully, prevents the application from crashing, and displays constructive feedback with focus redirected to the erroneous field",
        "It disables Windows operating system error reporting and user notifications"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Rule 5 states that system design should prevent users from making serious errors, and when errors do occur, detect them gracefully and offer clear, constructive guidance without terminating the application.",
      "explanation": "Rule 5 states that system design should prevent users from making serious errors, and when errors do occur, detect them gracefully and offer clear, constructive guidance without terminating the application.",
      "provenance": "Shneiderman Ch 2 / Practical 29 HCI Alignment",
      "marks": 2
    },
        {
      "id": "q_su7_059",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Practical 29, when a student clicks 'btnCalculate' and `lblAverage.Text` immediately displays 'Average: 82.50%', which of Don Norman's conceptual user interface gulfs is bridged for the student?",
      "title": "In Practical 29, when a student clicks 'btnCalculate' and `lblAverage.Text` immediately displays 'Average: 82.50%', which of Don Norman's conceptual user interface gulfs is bridged for the student?",
      "options": [
        "The Gulf of Execution (determining how to formulate and perform the physical actions required by the system)",
        "The Gulf of Affordance (perceiving what physical manipulations are possible on form controls)",
        "The Gulf of Intention (translating a high-level psychological goal into a concrete system input)",
        "The Gulf of Evaluation (allowing the user to perceive and interpret the new state of the system and verify their goal was achieved)"
      ],
      "opts": [
        "The Gulf of Execution (determining how to formulate and perform the physical actions required by the system)",
        "The Gulf of Affordance (perceiving what physical manipulations are possible on form controls)",
        "The Gulf of Intention (translating a high-level psychological goal into a concrete system input)",
        "The Gulf of Evaluation (allowing the user to perceive and interpret the new state of the system and verify their goal was achieved)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Don Norman's Gulf of Evaluation represents the difficulty users experience in assessing the system's state and determining if their intentions were met. Immediate, clear visual feedback bridges this gulf.",
      "explanation": "Don Norman's Gulf of Evaluation represents the difficulty users experience in assessing the system's state and determining if their intentions were met. Immediate, clear visual feedback bridges this gulf.",
      "provenance": "Norman Action Cycle / Practical 29 HCI Alignment",
      "marks": 2
    },
    {
      "id": "q_su7_060",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "In Practical 1 (Racing Light Trainer), when a user clicks 'btnGo', the application immediately displays the green light (picGreen.Visible = true) and sets lblInstruction.Text = 'GO'. Which gulf does this immediate visual response bridge?",
      "title": "In Practical 1 (Racing Light Trainer), when a user clicks 'btnGo', the application immediately displays the green light (picGreen.Visible = true) and sets lblInstruction.Text = 'GO'. Which gulf does this immediate visual response bridge?",
      "options": [
        "The Gulf of Execution only",
        "The Gulf of Compilation",
        "The Gulf of Evaluation (enabling the user to effortlessly perceive that the go signal is now active)",
        "The Gulf of Hardware Paging"
      ],
      "opts": [
        "The Gulf of Execution only",
        "The Gulf of Compilation",
        "The Gulf of Evaluation (enabling the user to effortlessly perceive that the go signal is now active)",
        "The Gulf of Hardware Paging"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Immediate, unmistakable visual feedback bridges the Gulf of Evaluation by making the system's updated internal state transparent and easy to interpret.",
      "explanation": "Immediate, unmistakable visual feedback bridges the Gulf of Evaluation by making the system's updated internal state transparent and easy to interpret.",
      "provenance": "Shneiderman §2.2 & Norman",
      "marks": 2
    },
    {
      "id": "q_su7_061",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Which design implementation in Visual C# Windows Forms best bridges the Gulf of Execution?",
      "title": "Which design implementation in Visual C# Windows Forms best bridges the Gulf of Execution?",
      "options": [
        "Hiding button controls until the user hovers over an unmarked panel",
        "Using obscure abbreviations like 'btnX1' and 'lblZ' on the interface",
        "Removing all button click event handlers",
        "Using distinct, raised button controls labeled with active action verbs (e.g., 'Calculate Total', 'Clear Form', 'Exit')"
      ],
      "opts": [
        "Hiding button controls until the user hovers over an unmarked panel",
        "Using obscure abbreviations like 'btnX1' and 'lblZ' on the interface",
        "Removing all button click event handlers",
        "Using distinct, raised button controls labeled with active action verbs (e.g., 'Calculate Total', 'Clear Form', 'Exit')"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Clear visual affordances (buttons that look clickable) paired with explicit verbs tell the user exactly what physical action will achieve their intended goal, narrowing the Gulf of Execution.",
      "explanation": "Clear visual affordances (buttons that look clickable) paired with explicit verbs tell the user exactly what physical action will achieve their intended goal, narrowing the Gulf of Execution.",
      "provenance": "Shneiderman §2.2 & Norman",
      "marks": 2
    },
    {
      "id": "q_su7_062",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "According to Fitts' Law in Human-Computer Interaction, what factors determine the time required to rapidly move to and click a target control?",
      "title": "According to Fitts' Law in Human-Computer Interaction, what factors determine the time required to rapidly move to and click a target control?",
      "options": [
        "The distance to the target and the physical width/size of the target",
        "The color depth of the monitor and the RAM capacity",
        "The length of the variable name in the C# code",
        "The speed of the network internet connection"
      ],
      "opts": [
        "The distance to the target and the physical width/size of the target",
        "The color depth of the monitor and the RAM capacity",
        "The length of the variable name in the C# code",
        "The speed of the network internet connection"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Fitts' Law models pointing time: MT = a + b * log2(2D / W), meaning larger targets (W) located closer to the pointer (D) are acquired significantly faster and with fewer errors.",
      "explanation": "Fitts' Law models pointing time: MT = a + b * log2(2D / W), meaning larger targets (W) located closer to the pointer (D) are acquired significantly faster and with fewer errors.",
      "provenance": "Shneiderman §1.2 & §2.2",
      "marks": 2
    },
    {
      "id": "q_su7_063",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "How does Fitts' Law practically advise a CMPG122 student when designing the 'Calculate' button on a data-entry form?",
      "title": "How does Fitts' Law practically advise a CMPG122 student when designing the 'Calculate' button on a data-entry form?",
      "options": [
        "Make the button tiny and hide it in the top corner of the screen",
        "Make the primary action button sufficiently large and place it directly adjacent to the input fields in the user's natural scanning path",
        "Change the button position randomly after each click",
        "Require the user to drag the button across the screen before clicking"
      ],
      "opts": [
        "Make the button tiny and hide it in the top corner of the screen",
        "Make the primary action button sufficiently large and place it directly adjacent to the input fields in the user's natural scanning path",
        "Change the button position randomly after each click",
        "Require the user to drag the button across the screen before clicking"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Larger target dimensions and closer spatial proximity minimize pointer acquisition time and reduce accidental misclicks.",
      "explanation": "Larger target dimensions and closer spatial proximity minimize pointer acquisition time and reduce accidental misclicks.",
      "provenance": "Shneiderman §1.2 & §2.2",
      "marks": 2
    },
    {
      "id": "q_su7_064",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "According to Hick-Hyman Law, what happens to user decision time as the number of unorganized choices on an interface increases?",
      "title": "According to Hick-Hyman Law, what happens to user decision time as the number of unorganized choices on an interface increases?",
      "options": [
        "Decision time drops to zero immediately",
        "Users always choose the first option without thinking",
        "Decision time increases logarithmically with the number of available options",
        "Decision time is completely unaffected by the number of alternatives"
      ],
      "opts": [
        "Decision time drops to zero immediately",
        "Users always choose the first option without thinking",
        "Decision time increases logarithmically with the number of available options",
        "Decision time is completely unaffected by the number of alternatives"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Hick's Law: T = b * log2(n + 1). As the number of choices (n) increases, cognitive selection time grows. Structuring choices into logical groups or categories speeds decision-making.",
      "explanation": "Hick's Law: T = b * log2(n + 1). As the number of choices (n) increases, cognitive selection time grows. Structuring choices into logical groups or categories speeds decision-making.",
      "provenance": "Shneiderman §1.2 & §2.2",
      "marks": 2
    },
    {
      "id": "q_su7_065",
      "ch": "SU7",
      "su": "SU7",
      "type": "mcq",
      "q": "Why is it superior usability practice to use RadioButtons grouped in a GroupBox (as in Practical 5 for Cruise Time: Daytime vs Sunset) rather than letting users type 'day' or 'sunset' into a TextBox?",
      "title": "Why is it superior usability practice to use RadioButtons grouped in a GroupBox (as in Practical 5 for Cruise Time: Daytime vs Sunset) rather than letting users type 'day' or 'sunset' into a TextBox?",
      "options": [
        "It makes the C# source code twice as long",
        "RadioButtons consume less power on mobile batteries",
        "TextBoxes cannot handle string data in Visual C#",
        "It enforces mutual exclusion, provides immediate visual recognition of all valid choices, and eliminates spelling/capitalization errors"
      ],
      "opts": [
        "It makes the C# source code twice as long",
        "RadioButtons consume less power on mobile batteries",
        "TextBoxes cannot handle string data in Visual C#",
        "It enforces mutual exclusion, provides immediate visual recognition of all valid choices, and eliminates spelling/capitalization errors"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Recognizing a choice among visible RadioButtons requires far less cognitive effort than recalling terms and typing free text, while eliminating input validation failures (Rule 5 & 8).",
      "explanation": "Recognizing a choice among visible RadioButtons requires far less cognitive effort than recalling terms and typing free text, while eliminating input validation failures (Rule 5 & 8).",
      "provenance": "Shneiderman §2.3.1 & Gaddis Ch 4",
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
      "q": "In Visual Studio, what is the official name of the primary design-time window in which you visually construct a Windows Forms user interface and place controls (such as Buttons, Labels, and TextBoxes) onto a visual canvas?",
      "title": "In Visual Studio, what is the official name of the primary design-time window in which you visually construct a Windows Forms user interface and place controls (such as Buttons, Labels, and TextBoxes) onto a visual canvas?",
      "options": [
        "Solution Explorer",
        "Designer (Form Designer)",
        "Properties Window",
        "Document Outline"
      ],
      "opts": [
        "Solution Explorer",
        "Designer (Form Designer)",
        "Properties Window",
        "Document Outline"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The Form Designer (or Designer) is the visual design surface in Visual Studio where developers visually place and configure Windows Forms controls (Tony Gaddis Chapter 1).",
      "explanation": "The Form Designer (or Designer) is the visual design surface in Visual Studio where developers visually place and configure Windows Forms controls (Tony Gaddis Chapter 1).",
      "provenance": "NWU Quiz 1 (SU1) Gaddis Chapter 1 Step",
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
      "q": "In Visual C#, what is the formal textbook term (Tony Gaddis Chapter 1) for a comment that begins with two forward slashes (`//`) and appears on only one line, as opposed to a multi-line block comment enclosed between `/*` and `*/`?",
      "title": "In Visual C#, what is the formal textbook term (Tony Gaddis Chapter 1) for a comment that begins with two forward slashes (`//`) and appears on only one line, as opposed to a multi-line block comment enclosed between `/*` and `*/`?",
      "options": [
        "Block comment (/* */)",
        "Inline documentation comment (///)",
        "Line comment (//)",
        "Directive comment"
      ],
      "opts": [
        "Block comment (/* */)",
        "Inline documentation comment (///)",
        "Line comment (//)",
        "Directive comment"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "According to Tony Gaddis Chapter 1, a comment that begins with '//' and spans only to the end of that single line is formally termed a 'line comment', whereas a comment enclosed between '/*' and '*/' is a 'block comment'.",
      "explanation": "According to Tony Gaddis Chapter 1, a comment that begins with '//' and spans only to the end of that single line is formally termed a 'line comment', whereas a comment enclosed between '/*' and '*/' is a 'block comment'.",
      "provenance": "NWU Quiz 1 (SU1) Gaddis Chapter 1 Step",
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
      "q": "When a control or form is selected in the Visual Studio Form Designer, what are the small white or black squares that appear on its bounding box, used to resize its width and height, formally called?",
      "title": "When a control or form is selected in the Visual Studio Form Designer, what are the small white or black squares that appear on its bounding box, used to resize its width and height, formally called?",
      "options": [
        "Border anchors",
        "Docking margins",
        "Alignment grips",
        "Sizing handles"
      ],
      "opts": [
        "Border anchors",
        "Docking margins",
        "Alignment grips",
        "Sizing handles"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "In the Visual Studio Designer (Tony Gaddis Chapter 1), the eight small squares on a selected control's perimeter are called sizing handles.",
      "explanation": "In the Visual Studio Designer (Tony Gaddis Chapter 1), the eight small squares on a selected control's perimeter are called sizing handles.",
      "provenance": "NWU Quiz 1 (SU1) Gaddis Chapter 1 Step",
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
      "q": "When creating a new Visual Studio project for NWU CMPG122 practicals (such as Practical 1: Racing Light Trainer), why must students select 'Windows Forms App (.NET Framework)' tagged C# rather than 'Windows Forms App' without .NET Framework?",
      "title": "When creating a new Visual Studio project for NWU CMPG122 practicals (such as Practical 1: Racing Light Trainer), why must students select 'Windows Forms App (.NET Framework)' tagged C# rather than 'Windows Forms App' without .NET Framework?",
      "options": [
        "The non-framework template targets .NET Core where the visual form designer behaves differently and is incompatible with the prescribed module grading environment",
        ".NET Core does not allow creating buttons or picture boxes in Visual Studio",
        "The (.NET Framework) template is written in Python, which is required for Test 1",
        "Windows Forms App without .NET Framework cannot be saved to the desktop"
      ],
      "opts": [
        "The non-framework template targets .NET Core where the visual form designer behaves differently and is incompatible with the prescribed module grading environment",
        ".NET Core does not allow creating buttons or picture boxes in Visual Studio",
        "The (.NET Framework) template is written in Python, which is required for Test 1",
        "Windows Forms App without .NET Framework cannot be saved to the desktop"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "NWU CMPG122 requires the traditional .NET Framework Windows Forms template. The modern .NET (Core) template uses an out-of-process designer that behaves differently and can break module rubrics.",
      "explanation": "NWU CMPG122 requires the traditional .NET Framework Windows Forms template. The modern .NET (Core) template uses an out-of-process designer that behaves differently and can break module rubrics.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part A",
      "marks": 2
    },
    {
      "id": "q_su1_082",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In the Visual Studio 'Configure your new project' dialog for Practical 1, why is it critical to check 'Place solution and project in the same directory'?",
      "title": "In the Visual Studio 'Configure your new project' dialog for Practical 1, why is it critical to check 'Place solution and project in the same directory'?",
      "options": [
        "It enables automatic hardware acceleration for graphics",
        "It prevents an extra nested folder level, keeping the .sln and project files together for clean zipping and submission",
        "It makes the application run twice as fast on laboratory workstations",
        "It automatically renames all controls using Hungarian notation"
      ],
      "opts": [
        "It enables automatic hardware acceleration for graphics",
        "It prevents an extra nested folder level, keeping the .sln and project files together for clean zipping and submission",
        "It makes the application run twice as fast on laboratory workstations",
        "It automatically renames all controls using Hungarian notation"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Checking this box places the solution file (.sln) and project contents into a single folder (e.g. 12345678_Prac1), making it simple to zip and preventing missing project file errors during grading.",
      "explanation": "Checking this box places the solution file (.sln) and project contents into a single folder (e.g. 12345678_Prac1), making it simple to zip and preventing missing project file errors during grading.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part A Step 3",
      "marks": 2
    },
    {
      "id": "q_su1_083",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Practical 1, four PictureBoxes (Off.png, Red.png, Amber.png, Green.png) represent a single traffic signal. What designer technique ensures the traffic light does not visibly jump or shift when changing colours?",
      "title": "In Practical 1, four PictureBoxes (Off.png, Red.png, Amber.png, Green.png) represent a single traffic signal. What designer technique ensures the traffic light does not visibly jump or shift when changing colours?",
      "options": [
        "Setting the opacity of the form to 50%",
        "Placing them on four separate tabs in a TabControl",
        "Setting identical pixel values for Location and Size in the Properties window rather than dragging by mouse",
        "Calling Application.Restart() each time a button is clicked"
      ],
      "opts": [
        "Setting the opacity of the form to 50%",
        "Placing them on four separate tabs in a TabControl",
        "Setting identical pixel values for Location and Size in the Properties window rather than dragging by mouse",
        "Calling Application.Restart() each time a button is clicked"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Dragging controls by mouse cannot reliably align them to the exact pixel. Typing the exact same Location (X, Y) and Size (Width, Height) in the Properties window guarantees seamless stacking.",
      "explanation": "Dragging controls by mouse cannot reliably align them to the exact pixel. Typing the exact same Location (X, Y) and Size (Width, Height) in the Properties window guarantees seamless stacking.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_084",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Once four PictureBoxes are stacked at identical coordinates on the form in Practical 1, only the top control can be clicked on the canvas. How can a developer select one of the PictureBoxes underneath?",
      "title": "Once four PictureBoxes are stacked at identical coordinates on the form in Practical 1, only the top control can be clicked on the canvas. How can a developer select one of the PictureBoxes underneath?",
      "options": [
        "Delete the top PictureBox, modify the lower one, and then undo",
        "Hold Shift while clicking the Windows desktop wallpaper",
        "Close Visual Studio and edit the .csproj file in Notepad",
        "Use the drop-down control selector at the top of the Properties window"
      ],
      "opts": [
        "Delete the top PictureBox, modify the lower one, and then undo",
        "Hold Shift while clicking the Windows desktop wallpaper",
        "Close Visual Studio and edit the .csproj file in Notepad",
        "Use the drop-down control selector at the top of the Properties window"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The drop-down object list at the top of the Visual Studio Properties window lists every control on the form by name, allowing instant selection of any layered or hidden control.",
      "explanation": "The drop-down object list at the top of the Visual Studio Properties window lists every control on the form by name, allowing instant selection of any layered or hidden control.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_085",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which PictureBox SizeMode property setting must be selected in Practical 1 to ensure traffic light graphics scale proportionally without being cropped or distorted?",
      "title": "Which PictureBox SizeMode property setting must be selected in Practical 1 to ensure traffic light graphics scale proportionally without being cropped or distorted?",
      "options": [
        "Zoom",
        "Normal",
        "AutoSize",
        "StretchImage"
      ],
      "opts": [
        "Zoom",
        "Normal",
        "AutoSize",
        "StretchImage"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "PictureBoxSizeMode.Zoom scales the whole image up or down to fit the control while maintaining its correct aspect ratio, preventing a squashed or cropped traffic light.",
      "explanation": "PictureBoxSizeMode.Zoom scales the whole image up or down to fit the control while maintaining its correct aspect ratio, preventing a squashed or cropped traffic light.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_086",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Why does setting a PictureBox's SizeMode to 'StretchImage' often cause mark deductions in NWU Practical 1?",
      "title": "Why does setting a PictureBox's SizeMode to 'StretchImage' often cause mark deductions in NWU Practical 1?",
      "options": [
        "It causes a runtime crash if the image is in PNG format",
        "It forces the image to distort its aspect ratio to match the box dimensions, resulting in a squashed or stretched graphic",
        "It hides the PictureBox behind the Form background",
        "It converts the image into grayscale"
      ],
      "opts": [
        "It causes a runtime crash if the image is in PNG format",
        "It forces the image to distort its aspect ratio to match the box dimensions, resulting in a squashed or stretched graphic",
        "It hides the PictureBox behind the Form background",
        "It converts the image into grayscale"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "StretchImage stretches the width and height independently to fill the control bounds, distorting the original image proportions unless the control has the exact same aspect ratio.",
      "explanation": "StretchImage stretches the width and height independently to fill the control bounds, distorting the original image proportions unless the control has the exact same aspect ratio.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_087",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "When Practical 1 starts, the dark traffic light (Off.png) must be visible and the other three lamps hidden. How should this be configured at design time?",
      "title": "When Practical 1 starts, the dark traffic light (Off.png) must be visible and the other three lamps hidden. How should this be configured at design time?",
      "options": [
        "Delete picRed, picAmber, and picGreen from the project until needed",
        "Set Form1.Enabled to false",
        "Set picRed.Visible, picAmber.Visible, and picGreen.Visible to false in the Properties window",
        "Set the Opacity of the three lamps to 99%"
      ],
      "opts": [
        "Delete picRed, picAmber, and picGreen from the project until needed",
        "Set Form1.Enabled to false",
        "Set picRed.Visible, picAmber.Visible, and picGreen.Visible to false in the Properties window",
        "Set the Opacity of the three lamps to 99%"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Setting the Visible property to false in the Properties window ensures the red, amber, and green PictureBoxes are hidden when the form initializes, showing only the off lamp.",
      "explanation": "Setting the Visible property to false in the Properties window ensures the red, amber, and green PictureBoxes are hidden when the form initializes, showing only the off lamp.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_088",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "If a student accidentally double-clicks the Form canvas instead of a Button, creating 'private void Form1_Load(object sender, EventArgs e)', what happens if they simply delete that method from Form1.cs?",
      "title": "If a student accidentally double-clicks the Form canvas instead of a Button, creating 'private void Form1_Load(object sender, EventArgs e)', what happens if they simply delete that method from Form1.cs?",
      "options": [
        "Visual Studio automatically replaces it with a button click handler",
        "The Form permanently switches to full-screen mode",
        "Nothing happens; Visual Studio silently cleans up the reference",
        "The project fails to build because Form1.Designer.cs still contains an event hook referencing the deleted method"
      ],
      "opts": [
        "Visual Studio automatically replaces it with a button click handler",
        "The Form permanently switches to full-screen mode",
        "Nothing happens; Visual Studio silently cleans up the reference",
        "The project fails to build because Form1.Designer.cs still contains an event hook referencing the deleted method"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Double-clicking adds an event handler in Form1.cs and wires it up in Form1.Designer.cs ('this.Load += ...'). Deleting the method in Form1.cs leaves a broken reference in the designer, causing compiler errors.",
      "explanation": "Double-clicking adds an event handler in Form1.cs and wires it up in Form1.Designer.cs ('this.Load += ...'). Deleting the method in Form1.cs leaves a broken reference in the designer, causing compiler errors.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D (Traps)",
      "marks": 2
    },
    {
      "id": "q_su1_089",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What is the recommended student response when an accidental Form1_Load method is scaffolded in Form1.cs?",
      "title": "What is the recommended student response when an accidental Form1_Load method is scaffolded in Form1.cs?",
      "options": [
        "Either leave the empty method in Form1.cs (which is harmless) or clear the Load event in the Properties window Events tab before deleting the code",
        "Restart Windows immediately",
        "Change the project language to Visual Basic",
        "Rename Form1.cs to Form2.cs"
      ],
      "opts": [
        "Either leave the empty method in Form1.cs (which is harmless) or clear the Load event in the Properties window Events tab before deleting the code",
        "Restart Windows immediately",
        "Change the project language to Visual Basic",
        "Rename Form1.cs to Form2.cs"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Leaving an empty event handler method does no harm and keeps the build intact. Alternatively, remove the wireup from the Properties window Events tab first.",
      "explanation": "Leaving an empty event handler method does no harm and keeps the build intact. Alternatively, remove the wireup from the Properties window Events tab first.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
        {
      "id": "q_su1_090",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "The ________ is a standardized collection of classes, namespaces, and runtime libraries used by Visual C# to create and run Windows Forms applications on the Windows operating system.",
      "title": "The ________ is a standardized collection of classes, namespaces, and runtime libraries used by Visual C# to create and run Windows Forms applications on the Windows operating system.",
      "options": [
        ".NET Framework",
        "Basic Input/Output System (BIOS)",
        "Windows Kernel API only",
        "Common Intermediate Language Compiler"
      ],
      "opts": [
        ".NET Framework",
        "Basic Input/Output System (BIOS)",
        "Windows Kernel API only",
        "Common Intermediate Language Compiler"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The .NET Framework is Microsoft's collection of classes and runtime environment upon which Visual C# Windows Forms applications are built and executed (Tony Gaddis Chapter 1).",
      "explanation": "The .NET Framework is Microsoft's collection of classes and runtime environment upon which Visual C# Windows Forms applications are built and executed (Tony Gaddis Chapter 1).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 1 Step",
      "marks": 2
    },
    {
      "id": "q_su1_091",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Practical 1, the window must be a fixed size that the user cannot resize or maximize. Which two Form properties control this?",
      "title": "In Practical 1, the window must be a fixed size that the user cannot resize or maximize. Which two Form properties control this?",
      "options": [
        "WindowState = Minimized and ControlBox = false",
        "AutoSize = true and AutoSizeMode = GrowOnly",
        "FormBorderStyle = FixedSingle (or FixedDialog) and MaximizeBox = false",
        "Locked = true and ShowIcon = false"
      ],
      "opts": [
        "WindowState = Minimized and ControlBox = false",
        "AutoSize = true and AutoSizeMode = GrowOnly",
        "FormBorderStyle = FixedSingle (or FixedDialog) and MaximizeBox = false",
        "Locked = true and ShowIcon = false"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Setting FormBorderStyle to FixedSingle prevents border dragging, and setting MaximizeBox to false disables the maximize button on the title bar.",
      "explanation": "Setting FormBorderStyle to FixedSingle prevents border dragging, and setting MaximizeBox to false disables the maximize button on the title bar.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_092",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which Form property changes the text displayed in the application's top title bar from 'Form1' to 'Racing Light Trainer'?",
      "title": "Which Form property changes the text displayed in the application's top title bar from 'Form1' to 'Racing Light Trainer'?",
      "options": [
        "Name",
        "Title",
        "Caption",
        "Text"
      ],
      "opts": [
        "Name",
        "Title",
        "Caption",
        "Text"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "In Windows Forms, the 'Text' property of the Form controls the string rendered in the title bar.",
      "explanation": "In Windows Forms, the 'Text' property of the Form controls the string rendered in the title bar.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
    {
      "id": "q_su1_093",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "According to NWU CMPG122 Hungarian naming standards, which identifier is properly named for a Button that prompts the driver to get ready?",
      "title": "According to NWU CMPG122 Hungarian naming standards, which identifier is properly named for a Button that prompts the driver to get ready?",
      "options": [
        "btnReady",
        "Button_Ready",
        "ReadyButton",
        "ready_btn"
      ],
      "opts": [
        "btnReady",
        "Button_Ready",
        "ReadyButton",
        "ready_btn"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "NWU CMPG122 standards require a 3-letter lowercase prefix indicating control type ('btn') followed by a descriptive PascalCase name ('Ready').",
      "explanation": "NWU CMPG122 standards require a 3-letter lowercase prefix indicating control type ('btn') followed by a descriptive PascalCase name ('Ready').",
      "provenance": "NWU CMPG122 Naming Conventions Guide",
      "marks": 2
    },
    {
      "id": "q_su1_094",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which of the following identifier names is ILLEGAL under C# lexical rules?",
      "title": "Which of the following identifier names is ILLEGAL under C# lexical rules?",
      "options": [
        "picRedLamp",
        "3rdLight",
        "_tempValue",
        "lblResult"
      ],
      "opts": [
        "picRedLamp",
        "3rdLight",
        "_tempValue",
        "lblResult"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "C# identifiers must begin with an alphabetic character or underscore; they cannot start with a numeric digit (e.g. '3rdLight').",
      "explanation": "C# identifiers must begin with an alphabetic character or underscore; they cannot start with a numeric digit (e.g. '3rdLight').",
      "provenance": "Gaddis 4th Ed §2.3",
      "marks": 2
    },
    {
      "id": "q_su1_095",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "How do you create a keyboard access key (mnemonic) for the Stop button so the user can press Alt+S to activate it?",
      "title": "How do you create a keyboard access key (mnemonic) for the Stop button so the user can press Alt+S to activate it?",
      "options": [
        "Set the button's KeyPreview property to 'S'",
        "Set the button's AccessKey property to 'Alt+S'",
        "Set the button's Text property to '&Stop'",
        "Prefix the button name with 's_'"
      ],
      "opts": [
        "Set the button's KeyPreview property to 'S'",
        "Set the button's AccessKey property to 'Alt+S'",
        "Set the button's Text property to '&Stop'",
        "Prefix the button name with 's_'"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "In Windows Forms, placing an ampersand ('&') immediately before a character in a Button's Text property (e.g. '&Stop') creates a keyboard mnemonic (Alt+S).",
      "explanation": "In Windows Forms, placing an ampersand ('&') immediately before a character in a Button's Text property (e.g. '&Stop') creates a keyboard mnemonic (Alt+S).",
      "provenance": "Gaddis 4th Ed §2.3 & Practical Four",
      "marks": 2
    },
        {
      "id": "q_su1_096",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Visual C# Windows Forms, which control property determines the numerical order in which controls receive keyboard focus when the user presses the Tab key?",
      "title": "In Visual C# Windows Forms, which control property determines the numerical order in which controls receive keyboard focus when the user presses the Tab key?",
      "options": [
        "TabStop",
        "TabIndex",
        "Name (Control Name)",
        "FocusOrder"
      ],
      "opts": [
        "TabStop",
        "TabIndex",
        "Name (Control Name)",
        "FocusOrder"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The TabIndex property stores an integer specifying the order in which controls receive focus upon pressing Tab. The TabStop boolean property determines whether the control can receive focus via Tab at all (Tony Gaddis Chapter 2 & 3).",
      "explanation": "The TabIndex property stores an integer specifying the order in which controls receive focus upon pressing Tab. The TabStop boolean property determines whether the control can receive focus via Tab at all (Tony Gaddis Chapter 2 & 3).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 2 Step",
      "marks": 2
    },
    {
      "id": "q_su1_097",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Why does pressing the Tab key on a Windows Form never place keyboard focus onto a Label control?",
      "title": "Why does pressing the Tab key on a Windows Form never place keyboard focus onto a Label control?",
      "options": [
        "Labels have their TabStop property set to false by default because they do not accept keyboard input",
        "Labels are not drawn by the Windows operating system",
        "Labels do not have a TabIndex property",
        "Labels automatically close the active form when focused"
      ],
      "opts": [
        "Labels have their TabStop property set to false by default because they do not accept keyboard input",
        "Labels are not drawn by the Windows operating system",
        "Labels do not have a TabIndex property",
        "Labels automatically close the active form when focused"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Labels are purely informational display controls; their TabStop property is false by default, so Tab navigation skips them.",
      "explanation": "Labels are purely informational display controls; their TabStop property is false by default, so Tab navigation skips them.",
      "provenance": "Gaddis 4th Ed §2.3",
      "marks": 2
    },
    {
      "id": "q_su1_098",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Practical 1, lblInstruction displays words of differing lengths ('STOP', 'GET READY', 'GO'). Why should AutoSize be set to false and TextAlign to MiddleCenter?",
      "title": "In Practical 1, lblInstruction displays words of differing lengths ('STOP', 'GET READY', 'GO'). Why should AutoSize be set to false and TextAlign to MiddleCenter?",
      "options": [
        "To allow the label to act as a button",
        "To prevent the label boundary from shifting unpredictably and keep each instruction centered in its display area",
        "To enable multi-line text input from the keyboard",
        "To automatically translate text into Afrikaans"
      ],
      "opts": [
        "To allow the label to act as a button",
        "To prevent the label boundary from shifting unpredictably and keep each instruction centered in its display area",
        "To enable multi-line text input from the keyboard",
        "To automatically translate text into Afrikaans"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "With AutoSize set to false, the label has fixed dimensions. Combined with TextAlign = MiddleCenter, messages of varying character length remain perfectly centered without resizing the label.",
      "explanation": "With AutoSize set to false, the label has fixed dimensions. Combined with TextAlign = MiddleCenter, messages of varying character length remain perfectly centered without resizing the label.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D",
      "marks": 2
    },
    {
      "id": "q_su1_099",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Practical 1, what complete code block should execute inside btnStop_Click when the driver clicks Stop?",
      "title": "In Practical 1, what complete code block should execute inside btnStop_Click when the driver clicks Stop?",
      "options": [
        "picRed.Visible = false; picAmber.Visible = true; lblInstruction.Text = \"GO\";",
        "lblInstruction.Text = \"STOP\"; this.Close();",
        "picRed.Visible = true; picAmber.Visible = false; picGreen.Visible = false; picDark.Visible = false; lblInstruction.Text = \"STOP\";",
        "picRed.Image = picDark.Image; lblInstruction.Visible = false;"
      ],
      "opts": [
        "picRed.Visible = false; picAmber.Visible = true; lblInstruction.Text = \"GO\";",
        "lblInstruction.Text = \"STOP\"; this.Close();",
        "picRed.Visible = true; picAmber.Visible = false; picGreen.Visible = false; picDark.Visible = false; lblInstruction.Text = \"STOP\";",
        "picRed.Image = picDark.Image; lblInstruction.Visible = false;"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Clicking Stop must show only the red light, hide the amber, green, and dark lamps, and update the instruction label text to 'STOP'.",
      "explanation": "Clicking Stop must show only the red light, hide the amber, green, and dark lamps, and update the instruction label text to 'STOP'.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part E",
      "marks": 2
    },
    {
      "id": "q_su1_100",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Practical 1, why is btnExit formatted with BackColor set to Red according to user interface design standards?",
      "title": "In Practical 1, why is btnExit formatted with BackColor set to Red according to user interface design standards?",
      "options": [
        "To satisfy a compiler requirement for closing forms",
        "Because red buttons process code faster",
        "To make the button text invisible",
        "To provide an unmistakable visual warning that clicking this button terminates the current session"
      ],
      "opts": [
        "To satisfy a compiler requirement for closing forms",
        "Because red buttons process code faster",
        "To make the button text invisible",
        "To provide an unmistakable visual warning that clicking this button terminates the current session"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "In GUI design, high-consequence actions like exiting or deleting are highlighted in warning colors (such as red) to provide clear visual affordance and prevent accidental triggering.",
      "explanation": "In GUI design, high-consequence actions like exiting or deleting are highlighted in warning colors (such as red) to provide clear visual affordance and prevent accidental triggering.",
      "provenance": "NWU Practical 1: Racing Light Trainer Part D & Shneiderman Rule 5",
      "marks": 2
    },
    {
      "id": "q_su1_101",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What is the primary role of the InitializeComponent() method called inside the Form1 constructor?",
      "title": "What is the primary role of the InitializeComponent() method called inside the Form1 constructor?",
      "options": [
        "It runs the auto-generated code in Form1.Designer.cs that instantiates controls, sets properties, and attaches event handlers",
        "It connects to the remote eFundi grading server",
        "It formats all numbers on the form as South African Rand",
        "It shuts down the Visual Studio IDE"
      ],
      "opts": [
        "It runs the auto-generated code in Form1.Designer.cs that instantiates controls, sets properties, and attaches event handlers",
        "It connects to the remote eFundi grading server",
        "It formats all numbers on the form as South African Rand",
        "It shuts down the Visual Studio IDE"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "InitializeComponent() is auto-generated by Visual Studio in Form1.Designer.cs to create controls, assign their initial properties, and bind event delegates.",
      "explanation": "InitializeComponent() is auto-generated by Visual Studio in Form1.Designer.cs to create controls, assign their initial properties, and bind event delegates.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
    {
      "id": "q_su1_102",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Why does Visual C# use the 'partial' keyword when defining 'public partial class Form1 : Form'?",
      "title": "Why does Visual C# use the 'partial' keyword when defining 'public partial class Form1 : Form'?",
      "options": [
        "It indicates that the class is only partially compiled",
        "It allows the class implementation to be split across Form1.cs (user code) and Form1.Designer.cs (designer plumbing)",
        "It restricts the class to single-threaded execution",
        "It forces all methods in the class to return void"
      ],
      "opts": [
        "It indicates that the class is only partially compiled",
        "It allows the class implementation to be split across Form1.cs (user code) and Form1.Designer.cs (designer plumbing)",
        "It restricts the class to single-threaded execution",
        "It forces all methods in the class to return void"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The 'partial' keyword allows a single C# class definition to be partitioned across multiple source files, keeping designer-generated plumbing separate from human-written code.",
      "explanation": "The 'partial' keyword allows a single C# class definition to be partitioned across multiple source files, keeping designer-generated plumbing separate from human-written code.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
        {
      "id": "q_su1_103",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In a Windows Form class (such as Practical 29), a student defines two event handlers with the identical header `private void btnClear_Click(object sender, EventArgs e)` (one intended to clear TextBoxes and one intended to close the form). What compiler error does Roslyn report?",
      "title": "In a Windows Form class (such as Practical 29), a student defines two event handlers with the identical header `private void btnClear_Click(object sender, EventArgs e)` (one intended to clear TextBoxes and one intended to close the form). What compiler error does Roslyn report?",
      "options": [
        "CS0029: Cannot implicitly convert type 'void' to 'method'",
        "CS1002: ; expected",
        "CS0111: Type 'MainForm' already defines a member called 'btnClear_Click' with the same parameter types",
        "The code compiles cleanly and executes both handlers sequentially upon clicking"
      ],
      "opts": [
        "CS0029: Cannot implicitly convert type 'void' to 'method'",
        "CS1002: ; expected",
        "CS0111: Type 'MainForm' already defines a member called 'btnClear_Click' with the same parameter types",
        "The code compiles cleanly and executes both handlers sequentially upon clicking"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "In C#, two methods in the same class cannot share the identical identifier and parameter list (CS0111). The exit button handler must have a unique identifier, such as btnExit_Click.",
      "explanation": "In C#, two methods in the same class cannot share the identical identifier and parameter list (CS0111). The exit button handler must have a unique identifier, such as btnExit_Click.",
      "provenance": "NWU Practical 29 Assessment Rubric Step",
      "marks": 2
    },
    {
      "id": "q_su1_104",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In the event handler signature 'private void btnGo_Click(object sender, EventArgs e)', what does the 'sender' parameter hold?",
      "title": "In the event handler signature 'private void btnGo_Click(object sender, EventArgs e)', what does the 'sender' parameter hold?",
      "options": [
        "The email address of the current user",
        "The time in milliseconds since the form loaded",
        "The return value of the previous calculation",
        "A reference to the control that raised the event (in this case, btnGo)"
      ],
      "opts": [
        "The email address of the current user",
        "The time in milliseconds since the form loaded",
        "The return value of the previous calculation",
        "A reference to the control that raised the event (in this case, btnGo)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The 'sender' parameter contains a reference to the specific object/control that triggered the event notification.",
      "explanation": "The 'sender' parameter contains a reference to the specific object/control that triggered the event notification.",
      "provenance": "Gaddis 4th Ed §2.3",
      "marks": 2
    },
    {
      "id": "q_su1_105",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which file in a standard C# Windows Forms project contains the static Main() method that serves as the execution starting point?",
      "title": "Which file in a standard C# Windows Forms project contains the static Main() method that serves as the execution starting point?",
      "options": [
        "Program.cs",
        "Form1.cs",
        "Form1.Designer.cs",
        "App.config"
      ],
      "opts": [
        "Program.cs",
        "Form1.cs",
        "Form1.Designer.cs",
        "App.config"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Program.cs contains the static void Main() entry point method that calls Application.Run(new Form1()).",
      "explanation": "Program.cs contains the static void Main() entry point method that calls Application.Run(new Form1()).",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
    {
      "id": "q_su1_106",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which keyboard shortcut in Visual Studio executes 'Save All', ensuring all modified code files and designer changes are saved before submission?",
      "title": "Which keyboard shortcut in Visual Studio executes 'Save All', ensuring all modified code files and designer changes are saved before submission?",
      "options": [
        "Ctrl + S",
        "Ctrl + Shift + S",
        "Alt + F4",
        "F5"
      ],
      "opts": [
        "Ctrl + S",
        "Ctrl + Shift + S",
        "Alt + F4",
        "F5"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Ctrl+Shift+S triggers 'Save All'. Ctrl+S saves only the current active document, which often leads to lost designer changes in practical submissions.",
      "explanation": "Ctrl+Shift+S triggers 'Save All'. Ctrl+S saves only the current active document, which often leads to lost designer changes in practical submissions.",
      "provenance": "NWU Practical 1 & 2 Submission Instructions",
      "marks": 2
    },
    {
      "id": "q_su1_107",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "When a C# project is compiled, what intermediate format is produced before the CLR converts it into machine code?",
      "title": "When a C# project is compiled, what intermediate format is produced before the CLR converts it into machine code?",
      "options": [
        "Native x86 Assembly",
        "Raw Java Bytecode",
        "Common Intermediate Language (CIL/MSIL)",
        "Pure ASCII text"
      ],
      "opts": [
        "Native x86 Assembly",
        "Raw Java Bytecode",
        "Common Intermediate Language (CIL/MSIL)",
        "Pure ASCII text"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The C# compiler compiles source code into Common Intermediate Language (CIL/MSIL), which the Common Language Runtime (CLR) JIT compiler translates to native machine code at runtime.",
      "explanation": "The C# compiler compiles source code into Common Intermediate Language (CIL/MSIL), which the Common Language Runtime (CLR) JIT compiler translates to native machine code at runtime.",
      "provenance": "Gaddis 4th Ed §1.5",
      "marks": 2
    },
        {
      "id": "q_su1_108",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In Visual C# object-oriented GUI programming, objects in a program have ________ (which represent data or attributes stored by the object) and ________ (which represent the operations, actions, or behaviors it can perform).",
      "title": "In Visual C# object-oriented GUI programming, objects in a program have ________ (which represent data or attributes stored by the object) and ________ (which represent the operations, actions, or behaviors it can perform).",
      "options": [
        "data / propertys",
        "attributes / constructors",
        "events / delegates",
        "properties / methods"
      ],
      "opts": [
        "data / propertys",
        "attributes / constructors",
        "events / delegates",
        "properties / methods"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "According to Tony Gaddis (Chapter 1), objects in an application possess properties (which store data about the object) and methods (which define actions or operations the object can perform).",
      "explanation": "According to Tony Gaddis (Chapter 1), objects in an application possess properties (which store data about the object) and methods (which define actions or operations the object can perform).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 1 Step",
      "marks": 2
    },
        {
      "id": "q_su1_109",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "When a syntax error is detected in the Visual Studio code editor as you type C# statements, how is the erroneous code visually flagged before the project is compiled?",
      "title": "When a syntax error is detected in the Visual Studio code editor as you type C# statements, how is the erroneous code visually flagged before the project is compiled?",
      "options": [
        "Underlined with a red jagged (squiggly) line",
        "Underlined with a solid straight red line",
        "Underlined with a green wavy line",
        "Highlighted with a yellow background banner"
      ],
      "opts": [
        "Underlined with a red jagged (squiggly) line",
        "Underlined with a solid straight red line",
        "Underlined with a green wavy line",
        "Highlighted with a yellow background banner"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Visual Studio highlights syntax and grammatical errors dynamically in the code editor with a red jagged (squiggly) line, indicating that compilation will fail unless resolved (Tony Gaddis Chapter 1).",
      "explanation": "Visual Studio highlights syntax and grammatical errors dynamically in the code editor with a red jagged (squiggly) line, indicating that compilation will fail unless resolved (Tony Gaddis Chapter 1).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 1 Step",
      "marks": 2
    },
    {
      "id": "q_su1_110",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In the Visual Studio Designer, which tab in the Toolbox contains essential GUI elements like Button, CheckBox, Label, ListBox, and TextBox?",
      "title": "In the Visual Studio Designer, which tab in the Toolbox contains essential GUI elements like Button, CheckBox, Label, ListBox, and TextBox?",
      "options": [
        "Printing",
        "Common Controls",
        "Data Connections",
        "WPF Interop"
      ],
      "opts": [
        "Printing",
        "Common Controls",
        "Data Connections",
        "WPF Interop"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The 'Common Controls' category in the Visual Studio Toolbox houses the most frequently used Windows Forms controls.",
      "explanation": "The 'Common Controls' category in the Visual Studio Toolbox houses the most frequently used Windows Forms controls.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_111",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which property of a Label control changes the color of the text displayed on the screen?",
      "title": "Which property of a Label control changes the color of the text displayed on the screen?",
      "options": [
        "BackColor",
        "TextColor",
        "ForeColor",
        "FontColor"
      ],
      "opts": [
        "BackColor",
        "TextColor",
        "ForeColor",
        "FontColor"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "ForeColor controls the text/foreground color of a control, whereas BackColor controls its background fill color.",
      "explanation": "ForeColor controls the text/foreground color of a control, whereas BackColor controls its background fill color.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
    {
      "id": "q_su1_112",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "According to the NWU practical marking rubric, what happens if controls are left with default names like 'button1' or 'pictureBox3'?",
      "title": "According to the NWU practical marking rubric, what happens if controls are left with default names like 'button1' or 'pictureBox3'?",
      "options": [
        "The program crashes on launch",
        "Visual Studio refuses to save the files",
        "The project is automatically converted to Visual Basic",
        "Marks are deducted under the Naming Conventions and Code Standards criterion"
      ],
      "opts": [
        "The program crashes on launch",
        "Visual Studio refuses to save the files",
        "The project is automatically converted to Visual Basic",
        "Marks are deducted under the Naming Conventions and Code Standards criterion"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Leaving default control names violates naming standards and results in mark deductions during practical marking.",
      "explanation": "Leaving default control names violates naming standards and results in mark deductions during practical marking.",
      "provenance": "NWU Practical 1 & Naming Conventions Guide",
      "marks": 2
    },
    {
      "id": "q_su1_113",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which C# statement displays a modal message box with a caption and message string to inform the user?",
      "title": "Which C# statement displays a modal message box with a caption and message string to inform the user?",
      "options": [
        "MessageBox.Show(\"Operation complete.\", \"Notice\");",
        "Console.WriteLine(\"Message\");",
        "Form.Alert(\"Operation complete.\");",
        "Window.Prompt(\"Notice\", \"Message\");"
      ],
      "opts": [
        "MessageBox.Show(\"Operation complete.\", \"Notice\");",
        "Console.WriteLine(\"Message\");",
        "Form.Alert(\"Operation complete.\");",
        "Window.Prompt(\"Notice\", \"Message\");"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "MessageBox.Show() is the standard method in Windows Forms to present modal pop-up messages.",
      "explanation": "MessageBox.Show() is the standard method in Windows Forms to present modal pop-up messages.",
      "provenance": "Gaddis 4th Ed §2.4",
      "marks": 2
    },
    {
      "id": "q_su1_114",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "How does Shneiderman's 1st Golden Rule ('Strive for consistency') apply to control design across Windows Forms applications?",
      "title": "How does Shneiderman's 1st Golden Rule ('Strive for consistency') apply to control design across Windows Forms applications?",
      "options": [
        "Every form must be painted red",
        "All buttons on all forms should use identical font styles, standard button heights, and consistent Hungarian naming prefixes",
        "The user must be forced to use only keyboard arrows",
        "Every control must have a random background color"
      ],
      "opts": [
        "Every form must be painted red",
        "All buttons on all forms should use identical font styles, standard button heights, and consistent Hungarian naming prefixes",
        "The user must be forced to use only keyboard arrows",
        "Every control must have a random background color"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Consistency in fonts, sizing, terminology, and naming reduces cognitive load and allows users to predict interface behavior.",
      "explanation": "Consistency in fonts, sizing, terminology, and naming reduces cognitive load and allows users to predict interface behavior.",
      "provenance": "Shneiderman HCI Ch 2 & SU7",
      "marks": 2
    },
    {
      "id": "q_su1_115",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "How does Shneiderman's 3rd Golden Rule ('Offer informative feedback') apply when the user clicks 'btnGo' in Practical 1?",
      "title": "How does Shneiderman's 3rd Golden Rule ('Offer informative feedback') apply when the user clicks 'btnGo' in Practical 1?",
      "options": [
        "The program should remain silent and wait for the user to guess if it worked",
        "The form minimizes to the Windows taskbar",
        "The interface immediately switches the green light on and displays 'GO' in bold text to acknowledge the click",
        "A sound card diagnostic routine runs in the background"
      ],
      "opts": [
        "The program should remain silent and wait for the user to guess if it worked",
        "The form minimizes to the Windows taskbar",
        "The interface immediately switches the green light on and displays 'GO' in bold text to acknowledge the click",
        "A sound card diagnostic routine runs in the background"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Informative feedback requires that every user action receives an immediate, clear visual confirmation (green lamp lit, instruction updated).",
      "explanation": "Informative feedback requires that every user action receives an immediate, clear visual confirmation (green lamp lit, instruction updated).",
      "provenance": "NWU Practical 1 & Shneiderman Rule 3",
      "marks": 2
    },
    {
      "id": "q_su1_116",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What characterizes the event-driven programming paradigm utilized in C# Windows Forms?",
      "title": "What characterizes the event-driven programming paradigm utilized in C# Windows Forms?",
      "options": [
        "Code executes strictly from line 1 to the end without stopping",
        "Programs can only be run once per day",
        "Only the CPU clock triggers code execution",
        "The application waits in an event loop and executes specific handler routines in response to user actions like clicks and keystrokes"
      ],
      "opts": [
        "Code executes strictly from line 1 to the end without stopping",
        "Programs can only be run once per day",
        "Only the CPU clock triggers code execution",
        "The application waits in an event loop and executes specific handler routines in response to user actions like clicks and keystrokes"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "In event-driven applications, user actions (button clicks, text inputs, form loading) fire events that trigger registered event handler methods.",
      "explanation": "In event-driven applications, user actions (button clicks, text inputs, form loading) fire events that trigger registered event handler methods.",
      "provenance": "Gaddis 4th Ed §1.8",
      "marks": 2
    },
    {
      "id": "q_su1_117",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which Form property configures the form to open centered in the middle of the user's computer screen at launch?",
      "title": "Which Form property configures the form to open centered in the middle of the user's computer screen at launch?",
      "options": [
        "StartPosition = FormStartPosition.CenterScreen;",
        "CenterToScreen = true;",
        "Location = Point(0, 0);",
        "WindowState = FormWindowState.Normal;"
      ],
      "opts": [
        "StartPosition = FormStartPosition.CenterScreen;",
        "CenterToScreen = true;",
        "Location = Point(0, 0);",
        "WindowState = FormWindowState.Normal;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Setting StartPosition to FormStartPosition.CenterScreen ensures the form appears neatly centered on the primary display upon opening.",
      "explanation": "Setting StartPosition to FormStartPosition.CenterScreen ensures the form appears neatly centered on the primary display upon opening.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
        {
      "id": "q_su1_118",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "A ________ is a debugging tool in Visual Studio that pauses program execution at a specific line of code, allowing the programmer to inspect variable values in the Locals window and step through execution.",
      "title": "A ________ is a debugging tool in Visual Studio that pauses program execution at a specific line of code, allowing the programmer to inspect variable values in the Locals window and step through execution.",
      "options": [
        "locals window",
        "breakpoint",
        "auto-complete",
        "sizing handle"
      ],
      "opts": [
        "locals window",
        "breakpoint",
        "auto-complete",
        "sizing handle"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "A breakpoint (represented by a red dot in the left margin) pauses program execution right before the marked line executes, allowing the developer to examine memory and step through statements (Tony Gaddis Chapter 2 & 3).",
      "explanation": "A breakpoint (represented by a red dot in the left margin) pauses program execution right before the marked line executes, allowing the developer to examine memory and step through statements (Tony Gaddis Chapter 2 & 3).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 2 Step",
      "marks": 2
    },
    {
      "id": "q_su1_119",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which property of a Button can be set to false in code to prevent the user from clicking it, rendering it visually grayed out?",
      "title": "Which property of a Button can be set to false in code to prevent the user from clicking it, rendering it visually grayed out?",
      "options": [
        "Visible",
        "ReadOnly",
        "Enabled",
        "Locked"
      ],
      "opts": [
        "Visible",
        "ReadOnly",
        "Enabled",
        "Locked"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Setting Enabled to false disables user interaction and renders the control in a grayed-out inactive state.",
      "explanation": "Setting Enabled to false disables user interaction and renders the control in a grayed-out inactive state.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
        {
      "id": "q_su1_120",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "To execute code one statement at a time during a debugging session in Visual Studio, entering into any called methods, you use the ________ feature, activated by pressing the F11 key.",
      "title": "To execute code one statement at a time during a debugging session in Visual Studio, entering into any called methods, you use the ________ feature, activated by pressing the F11 key.",
      "options": [
        "line-by-line tracing",
        "auto-stepping",
        "single-stepping",
        "breakpoint jumping"
      ],
      "opts": [
        "line-by-line tracing",
        "auto-stepping",
        "single-stepping",
        "breakpoint jumping"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Pressing F11 in Visual Studio activates 'single-stepping' (Step Into), which advances program execution one statement at a time, entering into called methods for granular inspection (Tony Gaddis Chapter 2 & 3).",
      "explanation": "Pressing F11 in Visual Studio activates 'single-stepping' (Step Into), which advances program execution one statement at a time, entering into called methods for granular inspection (Tony Gaddis Chapter 2 & 3).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 2 Step",
      "marks": 2
    },
        {
      "id": "q_su1_121",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "An algorithm written out in plain English statements is called ________, whereas its standardized diagrammatic representation using geometric symbols and connecting arrows is called a ________.",
      "title": "An algorithm written out in plain English statements is called ________, whereas its standardized diagrammatic representation using geometric symbols and connecting arrows is called a ________.",
      "options": [
        "blueprint / wireframe",
        "pseudo code / design pattern",
        "storyboard / schema",
        "pseudocode / flowchart"
      ],
      "opts": [
        "blueprint / wireframe",
        "pseudo code / design pattern",
        "storyboard / schema",
        "pseudocode / flowchart"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Pseudocode (single word, no space) is an informal natural language description of an algorithm. A flowchart is its standardized graphical representation using geometric symbols (Tony Gaddis Chapter 1).",
      "explanation": "Pseudocode (single word, no space) is an informal natural language description of an algorithm. A flowchart is its standardized graphical representation using geometric symbols (Tony Gaddis Chapter 1).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 1 Step",
      "marks": 2
    },
    {
      "id": "q_su1_122",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which method on a Windows Forms control programmatically brings it to the top of the z-order so it is not obscured by other controls?",
      "title": "Which method on a Windows Forms control programmatically brings it to the top of the z-order so it is not obscured by other controls?",
      "options": [
        "SendToBack()",
        "BringToFront()",
        "SetTopLevel(true)",
        "ShowAbove()"
      ],
      "opts": [
        "SendToBack()",
        "BringToFront()",
        "SetTopLevel(true)",
        "ShowAbove()"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The BringToFront() method moves the target control to the front of the z-order layering stack.",
      "explanation": "The BringToFront() method moves the target control to the front of the z-order layering stack.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
    {
      "id": "q_su1_123",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What happens when a user presses Alt plus the underlined letter on a button with an access key?",
      "title": "What happens when a user presses Alt plus the underlined letter on a button with an access key?",
      "options": [
        "The button text changes to uppercase",
        "The button moves to the center of the screen",
        "The button's Click event handler executes exactly as if the mouse clicked it",
        "The active form closes without saving"
      ],
      "opts": [
        "The button text changes to uppercase",
        "The button moves to the center of the screen",
        "The button's Click event handler executes exactly as if the mouse clicked it",
        "The active form closes without saving"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Pressing an access key combination (Alt + mnemonic) fires that button's Click event, facilitating rapid keyboard-only navigation.",
      "explanation": "Pressing an access key combination (Alt + mnemonic) fires that button's Click event, facilitating rapid keyboard-only navigation.",
      "provenance": "Gaddis 4th Ed §2.3",
      "marks": 2
    },
        {
      "id": "q_su1_124",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "The two primary categories of user interface in computer software are the ________ (which uses graphical windows, buttons, and menus) and the command line interface (CLI).",
      "title": "The two primary categories of user interface in computer software are the ________ (which uses graphical windows, buttons, and menus) and the command line interface (CLI).",
      "options": [
        "graphical user interface (GUI)",
        "static user interface",
        "console batch interface",
        "natural voice interface"
      ],
      "opts": [
        "graphical user interface (GUI)",
        "static user interface",
        "console batch interface",
        "natural voice interface"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Tony Gaddis (Chapter 1) contrasts Graphical User Interfaces (GUIs), which allow users to interact via graphical elements, with Command Line Interfaces (CLIs), where users interact purely by typing text commands.",
      "explanation": "Tony Gaddis (Chapter 1) contrasts Graphical User Interfaces (GUIs), which allow users to interact via graphical elements, with Command Line Interfaces (CLIs), where users interact purely by typing text commands.",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 1 Step",
      "marks": 2
    },
    {
      "id": "q_su1_125",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "Which namespace directive must be present at the top of Form1.cs to access Form, Button, and PictureBox classes?",
      "title": "Which namespace directive must be present at the top of Form1.cs to access Form, Button, and PictureBox classes?",
      "options": [
        "using System.Windows.Forms;",
        "using System.Web.UI;",
        "using System.Console.Graphics;",
        "using Microsoft.VisualBasic;"
      ],
      "opts": [
        "using System.Windows.Forms;",
        "using System.Web.UI;",
        "using System.Console.Graphics;",
        "using Microsoft.VisualBasic;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'using System.Windows.Forms;' imports the Windows Forms control class hierarchy into the source file.",
      "explanation": "'using System.Windows.Forms;' imports the Windows Forms control class hierarchy into the source file.",
      "provenance": "Gaddis 4th Ed §2.2",
      "marks": 2
    },
    {
      "id": "q_su1_126",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What is the runtime effect of executing 'picAmber.Visible = false;' in an event handler?",
      "title": "What is the runtime effect of executing 'picAmber.Visible = false;' in an event handler?",
      "options": [
        "The picture box is deleted from memory",
        "The picture box and its image are hidden from view on the form",
        "The image turns completely black",
        "The image file on the hard drive is erased"
      ],
      "opts": [
        "The picture box is deleted from memory",
        "The picture box and its image are hidden from view on the form",
        "The image turns completely black",
        "The image file on the hard drive is erased"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Setting Visible = false hides the control from the user interface while preserving its state and properties in memory.",
      "explanation": "Setting Visible = false hides the control from the user interface while preserving its state and properties in memory.",
      "provenance": "NWU Practical 1 Part B",
      "marks": 2
    },
    {
      "id": "q_su1_127",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "In the Visual Studio Properties window, what does clicking the lightning bolt icon display?",
      "title": "In the Visual Studio Properties window, what does clicking the lightning bolt icon display?",
      "options": [
        "CPU performance statistics",
        "Battery power level",
        "The list of available events for the currently selected control",
        "Database connection status"
      ],
      "opts": [
        "CPU performance statistics",
        "Battery power level",
        "The list of available events for the currently selected control",
        "Database connection status"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The lightning bolt icon switches the Properties window to show all events (e.g. Click, TextChanged, KeyPress) supported by the control.",
      "explanation": "The lightning bolt icon switches the Properties window to show all events (e.g. Click, TextChanged, KeyPress) supported by the control.",
      "provenance": "Gaddis 4th Ed §2.3",
      "marks": 2
    },
    {
      "id": "q_su1_128",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "When you double-click a TextBox control on a form in the Designer, which default event handler method is scaffolded?",
      "title": "When you double-click a TextBox control on a form in the Designer, which default event handler method is scaffolded?",
      "options": [
        "Click",
        "Enter",
        "Leave",
        "TextChanged"
      ],
      "opts": [
        "Click",
        "Enter",
        "Leave",
        "TextChanged"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The default event for a TextBox in Visual Studio is TextChanged, which fires whenever the text inside the box is altered.",
      "explanation": "The default event for a TextBox in Visual Studio is TextChanged, which fires whenever the text inside the box is altered.",
      "provenance": "Gaddis 4th Ed §2.3",
      "marks": 2
    },
    {
      "id": "q_su1_129",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "What is the effect of setting a Form's MaximizeBox property to false?",
      "title": "What is the effect of setting a Form's MaximizeBox property to false?",
      "options": [
        "The maximize button in the form title bar is disabled (grayed out) or removed",
        "The minimize button disappears",
        "The form is automatically closed",
        "The user cannot close the form"
      ],
      "opts": [
        "The maximize button in the form title bar is disabled (grayed out) or removed",
        "The minimize button disappears",
        "The form is automatically closed",
        "The user cannot close the form"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Setting MaximizeBox = false prevents the user from expanding the form to fill the entire desktop screen.",
      "explanation": "Setting MaximizeBox = false prevents the user from expanding the form to fill the entire desktop screen.",
      "provenance": "NWU Practical 1 Part D",
      "marks": 2
    },
        {
      "id": "q_su1_130",
      "ch": "SU1",
      "su": "SU1",
      "type": "mcq",
      "q": "The ________ feature in Visual Studio provides automatic code completion, parameter information, quick info tooltips, and member lists as code is typed into the code editor.",
      "title": "The ________ feature in Visual Studio provides automatic code completion, parameter information, quick info tooltips, and member lists as code is typed into the code editor.",
      "options": [
        "Auto-complete",
        "IntelliSense",
        "CodeDOM",
        "Live Share"
      ],
      "opts": [
        "Auto-complete",
        "IntelliSense",
        "CodeDOM",
        "Live Share"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "IntelliSense is Microsoft's trademarked code-completion technology in Visual Studio that displays matching methods, properties, and parameters as you type (Tony Gaddis Chapters 1 & 2).",
      "explanation": "IntelliSense is Microsoft's trademarked code-completion technology in Visual Studio that displays matching methods, properties, and parameters as you type (Tony Gaddis Chapters 1 & 2).",
      "provenance": "NWU Test 1 (SU1) Gaddis Chapter 1 Step",
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
      "q": "In the C# statement `answerLabel.Text = \"Theodore Roosevelt\";`, what is the formal textbook name (Tony Gaddis Chapter 1 & 2) of the `=` symbol?",
      "title": "In the C# statement `answerLabel.Text = \"Theodore Roosevelt\";`, what is the formal textbook name (Tony Gaddis Chapter 1 & 2) of the `=` symbol?",
      "options": [
        "Equality comparison operator (==)",
        "Variable binder",
        "Assignment operator (=)",
        "Relational operator"
      ],
      "opts": [
        "Equality comparison operator (==)",
        "Variable binder",
        "Assignment operator (=)",
        "Relational operator"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The '=' sign in C# is the assignment operator. It copies the expression on its right-hand side into the variable or property on its left-hand side. The '==' operator is used for equality comparison.",
      "explanation": "The '=' sign in C# is the assignment operator. It copies the expression on its right-hand side into the variable or property on its left-hand side. The '==' operator is used for equality comparison.",
      "provenance": "NWU Quiz 1 (SU1/SU2) Gaddis Chapter 2 Step",
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
      "q": "In Practical 2 (Braai Master 3000), why is 'decimal' the required and justified data type for butcher prices (pricePerKg, pricePerRoll) and total costs, rather than 'float' or 'double'?",
      "title": "In Practical 2 (Braai Master 3000), why is 'decimal' the required and justified data type for butcher prices (pricePerKg, pricePerRoll) and total costs, rather than 'float' or 'double'?",
      "options": [
        "The double type is too large to fit into computer RAM",
        "The decimal type uses 128-bit base-10 fixed-point representation, eliminating binary floating-point rounding errors in monetary calculations",
        "The decimal type runs twice as fast as integer arithmetic",
        "Visual Studio does not permit using double variables inside button click event handlers"
      ],
      "opts": [
        "The double type is too large to fit into computer RAM",
        "The decimal type uses 128-bit base-10 fixed-point representation, eliminating binary floating-point rounding errors in monetary calculations",
        "The decimal type runs twice as fast as integer arithmetic",
        "Visual Studio does not permit using double variables inside button click event handlers"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Financial calculations demand exact precision. Binary floating-point types (float and double) suffer from representation errors with base-10 fractions (like 0.10), whereas decimal uses base-10 representation tailored for currency.",
      "explanation": "Financial calculations demand exact precision. Binary floating-point types (float and double) suffer from representation errors with base-10 fractions (like 0.10), whereas decimal uses base-10 representation tailored for currency.",
      "provenance": "NWU Practical 2 Part D & Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_147",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, why must the number of bread rolls needed to serve the wors be declared as an 'int' rather than a 'decimal'?",
      "title": "In Practical 2, why must the number of bread rolls needed to serve the wors be declared as an 'int' rather than a 'decimal'?",
      "options": [
        "C# does not allow dividing decimals",
        "The int type automatically rounds numbers to four decimal places",
        "Bread rolls are discrete physical items purchased in whole units; fractional rolls cannot be purchased from a bakery",
        "int variables use more memory than decimal variables"
      ],
      "opts": [
        "C# does not allow dividing decimals",
        "The int type automatically rounds numbers to four decimal places",
        "Bread rolls are discrete physical items purchased in whole units; fractional rolls cannot be purchased from a bakery",
        "int variables use more memory than decimal variables"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Choosing data types requires domain justification: rolls are discrete whole items (you cannot buy 0.3 of a roll), making int the only conceptually sound choice.",
      "explanation": "Choosing data types requires domain justification: rolls are discrete whole items (you cannot buy 0.3 of a roll), making int the only conceptually sound choice.",
      "provenance": "NWU Practical 2 Part D",
      "marks": 2
    },
    {
      "id": "q_su2_148",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, a user enters 2.5 in txtWorsKg (kilograms) and a roll holds 120 grams. What unit conversion must be performed before calculating how many rolls can be filled?",
      "title": "In Practical 2, a user enters 2.5 in txtWorsKg (kilograms) and a roll holds 120 grams. What unit conversion must be performed before calculating how many rolls can be filled?",
      "options": [
        "Divide kilograms by 1000",
        "Add 120 to kilograms directly",
        "Convert kilograms into pounds",
        "Multiply kilograms by 1000 to convert kilograms into grams: worsKg * 1000m"
      ],
      "opts": [
        "Divide kilograms by 1000",
        "Add 120 to kilograms directly",
        "Convert kilograms into pounds",
        "Multiply kilograms by 1000 to convert kilograms into grams: worsKg * 1000m"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Because roll capacity is measured in grams (120g) while butcher purchases are entered in kilograms, kilograms must be converted to grams by multiplying by 1000 before dividing.",
      "explanation": "Because roll capacity is measured in grams (120g) while butcher purchases are entered in kilograms, kilograms must be converted to grams by multiplying by 1000 before dividing.",
      "provenance": "NWU Practical 2 Part C Step 2",
      "marks": 2
    },
    {
      "id": "q_su2_149",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, one roll holds 120 grams of wors. Why does writing 'int rolls = (int)(grams / 120);' directly in code violate NWU code standards?",
      "title": "In Practical 2, one roll holds 120 grams of wors. Why does writing 'int rolls = (int)(grams / 120);' directly in code violate NWU code standards?",
      "options": [
        "120 is a magic number; fixed domain rules must be declared as a named constant (e.g. const decimal GRAMS_PER_ROLL = 120m;)",
        "C# does not allow the number 120 in expressions",
        "Division must always use a while loop",
        "Parentheses are illegal around division operations"
      ],
      "opts": [
        "120 is a magic number; fixed domain rules must be declared as a named constant (e.g. const decimal GRAMS_PER_ROLL = 120m;)",
        "C# does not allow the number 120 in expressions",
        "Division must always use a while loop",
        "Parentheses are illegal around division operations"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Hardcoding unexplained numeric literals ('magic numbers') loses marks. Coding standards require declaring fixed problem domain constants with descriptive names.",
      "explanation": "Hardcoding unexplained numeric literals ('magic numbers') loses marks. Coding standards require declaring fixed problem domain constants with descriptive names.",
      "provenance": "NWU Practical 2 Part C & Code Standards",
      "marks": 2
    },
    {
      "id": "q_su2_150",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which statement correctly declares a named constant in C# for the 120-gram roll capacity?",
      "title": "Which statement correctly declares a named constant in C# for the 120-gram roll capacity?",
      "options": [
        "var GRAMS_PER_ROLL = const 120;",
        "const decimal GRAMS_PER_ROLL = 120m;",
        "decimal constant GRAMS_PER_ROLL = 120;",
        "readonly 120 = GRAMS_PER_ROLL;"
      ],
      "opts": [
        "var GRAMS_PER_ROLL = const 120;",
        "const decimal GRAMS_PER_ROLL = 120m;",
        "decimal constant GRAMS_PER_ROLL = 120;",
        "readonly 120 = GRAMS_PER_ROLL;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Named constants in C# use the 'const' keyword followed by the data type, an uppercase identifier, and an initialization value: 'const decimal GRAMS_PER_ROLL = 120m;'.",
      "explanation": "Named constants in C# use the 'const' keyword followed by the data type, an uppercase identifier, and an initialization value: 'const decimal GRAMS_PER_ROLL = 120m;'.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_151",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "If total grams is 2500m and GRAMS_PER_ROLL is 120m, what is the evaluated result of '(int)(2500m / 120m)' in C#?",
      "title": "If total grams is 2500m and GRAMS_PER_ROLL is 120m, what is the evaluated result of '(int)(2500m / 120m)' in C#?",
      "options": [
        "21",
        "20.83",
        "20",
        "25"
      ],
      "opts": [
        "21",
        "20.83",
        "20",
        "25"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "2500 / 120 equals 20.833... Explicitly casting to (int) truncates the decimal fraction towards zero, leaving exactly 20 whole rolls filled.",
      "explanation": "2500 / 120 equals 20.833... Explicitly casting to (int) truncates the decimal fraction towards zero, leaving exactly 20 whole rolls filled.",
      "provenance": "NWU Practical 2 Part D & Gaddis 4th Ed §3.5",
      "marks": 2
    },
    {
      "id": "q_su2_152",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What happens when you compile the C# statement 'decimal price = 85.50;' without an 'm' or 'M' suffix?",
      "title": "What happens when you compile the C# statement 'decimal price = 85.50;' without an 'm' or 'M' suffix?",
      "options": [
        "It compiles and runs without error",
        "Visual Studio automatically inserts the 'm' suffix",
        "The variable is converted to an int",
        "Compiler error CS0664: Literal of type double cannot be implicitly converted to type decimal"
      ],
      "opts": [
        "It compiles and runs without error",
        "Visual Studio automatically inserts the 'm' suffix",
        "The variable is converted to an int",
        "Compiler error CS0664: Literal of type double cannot be implicitly converted to type decimal"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Real number literals with decimal points are treated as double by default in C#. Converting double to decimal requires an explicit 'm' suffix or cast.",
      "explanation": "Real number literals with decimal points are treated as double by default in C#. Converting double to decimal requires an explicit 'm' suffix or cast.",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_153",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, what is the exact logical sequence required to calculate the total braai cost?",
      "title": "In Practical 2, what is the exact logical sequence required to calculate the total braai cost?",
      "options": [
        "1. Wors cost = kg * price/kg; 2. Total grams = kg * 1000; 3. Rolls = grams / 120; 4. Rolls cost = rolls * price/roll; 5. Total = wors cost + rolls cost",
        "Calculate total cost first, then divide by rolls",
        "Multiply name by rolls, then add wors price",
        "Divide price per roll by price per kg, then multiply by 120"
      ],
      "opts": [
        "1. Wors cost = kg * price/kg; 2. Total grams = kg * 1000; 3. Rolls = grams / 120; 4. Rolls cost = rolls * price/roll; 5. Total = wors cost + rolls cost",
        "Calculate total cost first, then divide by rolls",
        "Multiply name by rolls, then add wors price",
        "Divide price per roll by price per kg, then multiply by 120"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Practical 2 Part C prescribes the exact calculation pipeline: compute meat cost, convert meat to grams, determine rolls filled, calculate bread cost, and sum both costs.",
      "explanation": "Practical 2 Part C prescribes the exact calculation pipeline: compute meat cost, convert meat to grams, determine rolls filled, calculate bread cost, and sum both costs.",
      "provenance": "NWU Practical 2 Part C",
      "marks": 2
    },
    {
      "id": "q_su2_154",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Why is 'decimal.TryParse(txtWorsKg.Text, out decimal worsKg)' strongly preferred over 'decimal.Parse(txtWorsKg.Text)' in Windows Forms?",
      "title": "Why is 'decimal.TryParse(txtWorsKg.Text, out decimal worsKg)' strongly preferred over 'decimal.Parse(txtWorsKg.Text)' in Windows Forms?",
      "options": [
        "TryParse converts text into upper case",
        "TryParse returns a boolean indicating success or failure without crashing the application with an unhandled FormatException if the user enters non-numeric text",
        "TryParse automatically rounds negative numbers to positive",
        "TryParse writes the value directly to the printer"
      ],
      "opts": [
        "TryParse converts text into upper case",
        "TryParse returns a boolean indicating success or failure without crashing the application with an unhandled FormatException if the user enters non-numeric text",
        "TryParse automatically rounds negative numbers to positive",
        "TryParse writes the value directly to the printer"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "TryParse provides defensive input parsing: if the user enters letters or leaves the box blank, TryParse simply returns false rather than throwing a crashing FormatException.",
      "explanation": "TryParse provides defensive input parsing: if the user enters letters or leaves the box blank, TryParse simply returns false rather than throwing a crashing FormatException.",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_155",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In the statement 'bool ok = decimal.TryParse(txtWorsKg.Text, out worsKg);', what is the purpose of the 'out' keyword?",
      "title": "In the statement 'bool ok = decimal.TryParse(txtWorsKg.Text, out worsKg);', what is the purpose of the 'out' keyword?",
      "options": [
        "It prints the variable to the debug console",
        "It deletes the variable from memory when the method exits",
        "It specifies that worsKg is passed by reference to receive the parsed numeric result from inside the method",
        "It marks the variable as an output label"
      ],
      "opts": [
        "It prints the variable to the debug console",
        "It deletes the variable from memory when the method exits",
        "It specifies that worsKg is passed by reference to receive the parsed numeric result from inside the method",
        "It marks the variable as an output label"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The 'out' parameter modifier allows a method to return multiple values by writing results directly into the caller's variable.",
      "explanation": "The 'out' parameter modifier allows a method to return multiple values by writing results directly into the caller's variable.",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_156",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "If the user leaves txtWorsKg blank and clicks Calculate, what happens during 'decimal.TryParse(txtWorsKg.Text, out decimal worsKg)'?",
      "title": "If the user leaves txtWorsKg blank and clicks Calculate, what happens during 'decimal.TryParse(txtWorsKg.Text, out decimal worsKg)'?",
      "options": [
        "The computer beeps and shuts down",
        "The method returns true and worsKg becomes null",
        "A fatal StackOverflowException is thrown",
        "The method returns false and worsKg is set to its default value 0m"
      ],
      "opts": [
        "The computer beeps and shuts down",
        "The method returns true and worsKg becomes null",
        "A fatal StackOverflowException is thrown",
        "The method returns false and worsKg is set to its default value 0m"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "When TryParse fails to parse an invalid or empty string, it returns false and populates the out variable with its type default (0m for decimal).",
      "explanation": "When TryParse fails to parse an invalid or empty string, it returns false and populates the out variable with its type default (0m for decimal).",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_157",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which C# format string formats a decimal variable as South African Rand (e.g. 'R 282.50') matching the Practical 2 rubric?",
      "title": "Which C# format string formats a decimal variable as South African Rand (e.g. 'R 282.50') matching the Practical 2 rubric?",
      "options": [
        "totalCost.ToString(\"C\")",
        "totalCost.ToString(\"R\")",
        "totalCost.ToString(\"M\")",
        "totalCost.ToRand()"
      ],
      "opts": [
        "totalCost.ToString(\"C\")",
        "totalCost.ToString(\"R\")",
        "totalCost.ToString(\"M\")",
        "totalCost.ToRand()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The 'C' (Currency) format specifier formats a numeric value with the regional currency symbol (Rand in South Africa) and 2 decimal places.",
      "explanation": "The 'C' (Currency) format specifier formats a numeric value with the regional currency symbol (Rand in South Africa) and 2 decimal places.",
      "provenance": "Gaddis 4th Ed §3.5 & Practical 2",
      "marks": 2
    },
    {
      "id": "q_su2_158",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "If 'decimal total = 282.5m;', what is the output of 'total.ToString(\"C\")' under South African regional settings?",
      "title": "If 'decimal total = 282.5m;', what is the output of 'total.ToString(\"C\")' under South African regional settings?",
      "options": [
        "$282.50",
        "R 282.50",
        "282.50 Rand",
        "R282.5"
      ],
      "opts": [
        "$282.50",
        "R 282.50",
        "282.50 Rand",
        "R282.5"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The South African 'C' currency format formats the number with the 'R' prefix, space separator, and two fractional digits: 'R 282.50' (or 'R 282,50').",
      "explanation": "The South African 'C' currency format formats the number with the 'R' prefix, space separator, and two fractional digits: 'R 282.50' (or 'R 282,50').",
      "provenance": "NWU Practical 2 Part E",
      "marks": 2
    },
    {
      "id": "q_su2_159",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the difference between 'total.ToString(\"C\")' and 'total.ToString(\"F2\")'?",
      "title": "What is the difference between 'total.ToString(\"C\")' and 'total.ToString(\"F2\")'?",
      "options": [
        "\"F2\" rounds to two significant digits while \"C\" truncates",
        "\"C\" only works on integers",
        "\"C\" includes the currency symbol (e.g. 'R'), whereas \"F2\" displays strictly the fixed-point number with 2 decimals and no currency symbol",
        "There is no difference between them"
      ],
      "opts": [
        "\"F2\" rounds to two significant digits while \"C\" truncates",
        "\"C\" only works on integers",
        "\"C\" includes the currency symbol (e.g. 'R'), whereas \"F2\" displays strictly the fixed-point number with 2 decimals and no currency symbol",
        "There is no difference between them"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "\"C\" formats as regional currency with a symbol, while \"F\" (Fixed-point) formats purely as digits without currency indicators.",
      "explanation": "\"C\" formats as regional currency with a symbol, while \"F\" (Fixed-point) formats purely as digits without currency indicators.",
      "provenance": "Gaddis 4th Ed §3.5",
      "marks": 2
    },
        {
      "id": "q_su2_160",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Consider the following Visual C# code snippet:\n```csharp\nint g1 = 2, g2 = 3;\nlabel2.Text = \"g1\" + \"g2\";\n```\nWhat text is displayed in `label2` when this code executes?",
      "title": "Consider the following Visual C# code snippet:\n```csharp\nint g1 = 2, g2 = 3;\nlabel2.Text = \"g1\" + \"g2\";\n```\nWhat text is displayed in `label2` when this code executes?",
      "options": [
        "5",
        "g1g2",
        "23",
        "Compilation error (CS0029)"
      ],
      "opts": [
        "5",
        "g1g2",
        "23",
        "Compilation error (CS0029)"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Notice the double quotation marks around \"g1\" and \"g2\". Because they are enclosed in quotes, they are string literals, not the variables g1 and g2. The + operator simply concatenates the letters together, producing \"g1g2\". The integer variables g1 and g2 are ignored completely.",
      "explanation": "Notice the double quotation marks around \"g1\" and \"g2\". Because they are enclosed in quotes, they are string literals, not the variables g1 and g2. The + operator simply concatenates the letters together, producing \"g1g2\". The integer variables g1 and g2 are ignored completely.",
      "provenance": "NWU Test 1 (SU2) Gaddis Chapter 2 Step",
      "marks": 2
    },
    {
      "id": "q_su2_161",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "How can a programmer prevent integer division truncation when dividing two integer variables 'int a = 7; int b = 2;'?",
      "title": "How can a programmer prevent integer division truncation when dividing two integer variables 'int a = 7; int b = 2;'?",
      "options": [
        "double result = (double)a / b;",
        "double result = a / b;",
        "double result = int.Parse(a / b);",
        "double result = Math.Floor(a / b);"
      ],
      "opts": [
        "double result = (double)a / b;",
        "double result = a / b;",
        "double result = int.Parse(a / b);",
        "double result = Math.Floor(a / b);"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Casting at least one operand to double (or decimal) forces C# to evaluate the expression using floating-point division: (double)7 / 2 evaluates to 3.5.",
      "explanation": "Casting at least one operand to double (or decimal) forces C# to evaluate the expression using floating-point division: (double)7 / 2 evaluates to 3.5.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_162",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the result of evaluating '17 % 5' in C#?",
      "title": "What is the result of evaluating '17 % 5' in C#?",
      "options": [
        "3.4",
        "2",
        "3",
        "1"
      ],
      "opts": [
        "3.4",
        "2",
        "3",
        "1"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The modulus operator (%) calculates the integer division remainder: 17 divided by 5 is 3 with a remainder of 2.",
      "explanation": "The modulus operator (%) calculates the integer division remainder: 17 divided by 5 is 3 with a remainder of 2.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_163",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the key difference in scope between a local variable declared inside btnCalculate_Click and a class-level field declared in Form1?",
      "title": "What is the key difference in scope between a local variable declared inside btnCalculate_Click and a class-level field declared in Form1?",
      "options": [
        "Local variables can be accessed by any program in Windows",
        "Class-level fields can only hold strings",
        "Local variables exist only while the method executes; class-level fields exist for the lifetime of the form and can be accessed by all methods in the class",
        "Local variables cannot be modified"
      ],
      "opts": [
        "Local variables can be accessed by any program in Windows",
        "Class-level fields can only hold strings",
        "Local variables exist only while the method executes; class-level fields exist for the lifetime of the form and can be accessed by all methods in the class",
        "Local variables cannot be modified"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Local variables are created on method entry and destroyed on exit. Class-level fields persist across multiple events and can be shared among handlers.",
      "explanation": "Local variables are created on method entry and destroyed on exit. Class-level fields persist across multiple events and can be shared among handlers.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_164",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What compiler error occurs if you declare a local variable 'decimal total;' inside an event handler and attempt to use it in an expression without initializing it first?",
      "title": "What compiler error occurs if you declare a local variable 'decimal total;' inside an event handler and attempt to use it in an expression without initializing it first?",
      "options": [
        "CS0029: Cannot convert decimal to int",
        "CS1002: Semicolon expected",
        "CS0103: The name 'total' does not exist",
        "CS0165: Use of unassigned local variable 'total'"
      ],
      "opts": [
        "CS0029: Cannot convert decimal to int",
        "CS1002: Semicolon expected",
        "CS0103: The name 'total' does not exist",
        "CS0165: Use of unassigned local variable 'total'"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "C# enforces definite assignment for local variables. Reading an uninitialized local variable generates compiler error CS0165.",
      "explanation": "C# enforces definite assignment for local variables. Reading an uninitialized local variable generates compiler error CS0165.",
      "provenance": "Gaddis 4th Ed §3.2",
      "marks": 2
    },
    {
      "id": "q_su2_165",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Unlike local variables, what default value do numeric class-level fields automatically receive when a Form instance is initialized?",
      "title": "Unlike local variables, what default value do numeric class-level fields automatically receive when a Form instance is initialized?",
      "options": [
        "0 (or 0m)",
        "-1",
        "null",
        "Undefined"
      ],
      "opts": [
        "0 (or 0m)",
        "-1",
        "null",
        "Undefined"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Class-level fields in C# are automatically initialized to their type's default value (0 for integers, 0.0 for floating-point, 0m for decimal, false for bool).",
      "explanation": "Class-level fields in C# are automatically initialized to their type's default value (0 for integers, 0.0 for floating-point, 0m for decimal, false for bool).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_166",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, which statements in btnClear_Click correctly reset the form controls and ready the interface for another calculation?",
      "title": "In Practical 2, which statements in btnClear_Click correctly reset the form controls and ready the interface for another calculation?",
      "options": [
        "this.Close();",
        "txtName.Clear(); txtWorsKg.Clear(); txtPricePerKg.Clear(); txtPricePerRoll.Clear(); lblTotalResult.Text = \"\"; txtName.Focus();",
        "txtName.Text = \"0\"; txtWorsKg.Text = \"0\";",
        "Application.Restart();"
      ],
      "opts": [
        "this.Close();",
        "txtName.Clear(); txtWorsKg.Clear(); txtPricePerKg.Clear(); txtPricePerRoll.Clear(); lblTotalResult.Text = \"\"; txtName.Focus();",
        "txtName.Text = \"0\"; txtWorsKg.Text = \"0\";",
        "Application.Restart();"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "A proper Clear routine empties all input textboxes, clears output result labels, and returns keyboard focus to the first input field (txtName.Focus()).",
      "explanation": "A proper Clear routine empties all input textboxes, clears output result labels, and returns keyboard focus to the first input field (txtName.Focus()).",
      "provenance": "NWU Practical 2 Part C & Gaddis §3.8",
      "marks": 2
    },
    {
      "id": "q_su2_167",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What does calling 'txtName.Focus();' accomplish in a Windows Forms application?",
      "title": "What does calling 'txtName.Focus();' accomplish in a Windows Forms application?",
      "options": [
        "It maximizes the textbox to fill the screen",
        "It changes the textbox background to yellow",
        "It sets the active blinking keyboard cursor into txtName so the user can begin typing immediately without clicking",
        "It validates the textbox contents against a database"
      ],
      "opts": [
        "It maximizes the textbox to fill the screen",
        "It changes the textbox background to yellow",
        "It sets the active blinking keyboard cursor into txtName so the user can begin typing immediately without clicking",
        "It validates the textbox contents against a database"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The Focus() method programmatically assigns keyboard focus to the specified control, optimizing usability and reducing mouse actions.",
      "explanation": "The Focus() method programmatically assigns keyboard focus to the specified control, optimizing usability and reducing mouse actions.",
      "provenance": "Gaddis 4th Ed §3.8",
      "marks": 2
    },
    {
      "id": "q_su2_168",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "During practical marking at NWU, why is replying 'because it compiled' rejected by demonstrators when asked to justify choosing a variable's data type?",
      "title": "During practical marking at NWU, why is replying 'because it compiled' rejected by demonstrators when asked to justify choosing a variable's data type?",
      "options": [
        "Compilers never check data types",
        "All variables must be strings in C#",
        "Demonstrators prefer Python over C#",
        "Valid justifications must be grounded in domain logic: required precision, avoidance of floating-point rounding errors, memory footprint, and discrete versus continuous values"
      ],
      "opts": [
        "Compilers never check data types",
        "All variables must be strings in C#",
        "Demonstrators prefer Python over C#",
        "Valid justifications must be grounded in domain logic: required precision, avoidance of floating-point rounding errors, memory footprint, and discrete versus continuous values"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Code compiling does not mean the design is sound (e.g. using double for money compiles but causes rounding errors). Types must be justified by business requirements.",
      "explanation": "Code compiling does not mean the design is sound (e.g. using double for money compiles but causes rounding errors). Types must be justified by business requirements.",
      "provenance": "NWU Practical 2 Part D (Marking Standards)",
      "marks": 2
    },
    {
      "id": "q_su2_169",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which C# primitive type stores an 8-byte (64-bit) floating-point number adhering to the IEEE 754 standard?",
      "title": "Which C# primitive type stores an 8-byte (64-bit) floating-point number adhering to the IEEE 754 standard?",
      "options": [
        "double",
        "float",
        "decimal",
        "long"
      ],
      "opts": [
        "double",
        "float",
        "decimal",
        "long"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The 'double' keyword represents 64-bit IEEE 754 double-precision floating-point numbers, offering 15-17 digits of precision.",
      "explanation": "The 'double' keyword represents 64-bit IEEE 754 double-precision floating-point numbers, offering 15-17 digits of precision.",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_170",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which statement correctly declares a class-level constant for South African VAT at 15%?",
      "title": "Which statement correctly declares a class-level constant for South African VAT at 15%?",
      "options": [
        "decimal const VAT_RATE = 15%;",
        "const decimal VAT_RATE = 0.15m;",
        "readonly VAT_RATE = 0.15;",
        "static const decimal VAT_RATE := 0.15;"
      ],
      "opts": [
        "decimal const VAT_RATE = 15%;",
        "const decimal VAT_RATE = 0.15m;",
        "readonly VAT_RATE = 0.15;",
        "static const decimal VAT_RATE := 0.15;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "'const decimal VAT_RATE = 0.15m;' follows C# syntax: const keyword, type, uppercase identifier, and literal with 'm' suffix.",
      "explanation": "'const decimal VAT_RATE = 0.15m;' follows C# syntax: const keyword, type, uppercase identifier, and literal with 'm' suffix.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_171",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Why can a constant declared with the 'const' keyword NOT be reassigned inside an event handler?",
      "title": "Why can a constant declared with the 'const' keyword NOT be reassigned inside an event handler?",
      "options": [
        "Event handlers can only modify strings",
        "The CLR disables memory writes after form loading",
        "Constants are immutable values resolved at compile time whose values can never change during program execution",
        "Constants only exist while the form is hidden"
      ],
      "opts": [
        "Event handlers can only modify strings",
        "The CLR disables memory writes after form loading",
        "Constants are immutable values resolved at compile time whose values can never change during program execution",
        "Constants only exist while the form is hidden"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Constants are read-only and immutable by definition. Attempting to reassign a const variable produces a compile-time error.",
      "explanation": "Constants are read-only and immutable by definition. Attempting to reassign a const variable produces a compile-time error.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
        {
      "id": "q_su2_172",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Visual C#, what output is produced by the interpolated string expression `$\"Total Due: {450.75m:C}\"` under standard South African regional culture settings?",
      "title": "In Visual C#, what output is produced by the interpolated string expression `$\"Total Due: {450.75m:C}\"` under standard South African regional culture settings?",
      "options": [
        "Total Due: $450.75",
        "Total Due: 450.75m",
        "Total Due: {450.75:C}",
        "Total Due: R 450.75"
      ],
      "opts": [
        "Total Due: $450.75",
        "Total Due: 450.75m",
        "Total Due: {450.75:C}",
        "Total Due: R 450.75"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "String interpolation expressions prefixed with '$' evaluate expressions inside curly braces. The ':C' format specifier formats the decimal as currency with the regional symbol (R) and two decimal places (Tony Gaddis Chapter 3).",
      "explanation": "String interpolation expressions prefixed with '$' evaluate expressions inside curly braces. The ':C' format specifier formats the decimal as currency with the regional symbol (R) and two decimal places (Tony Gaddis Chapter 3).",
      "provenance": "NWU SU2 Format String Standards",
      "marks": 2
    },
    {
      "id": "q_su2_173",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What string is produced by the interpolated expression '$\"Cost: {25.5m:C}\"' under South African locale settings?",
      "title": "What string is produced by the interpolated expression '$\"Cost: {25.5m:C}\"' under South African locale settings?",
      "options": [
        "Cost: R 25.50",
        "Cost: 25.5m",
        "Cost: R25.5",
        "Cost: $25.50"
      ],
      "opts": [
        "Cost: R 25.50",
        "Cost: 25.5m",
        "Cost: R25.5",
        "Cost: $25.50"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The ':C' format specifier inside the interpolation hole formats the decimal literal 25.5m as South African Rand: 'Cost: R 25.50'.",
      "explanation": "The ':C' format specifier inside the interpolation hole formats the decimal literal 25.5m as South African Rand: 'Cost: R 25.50'.",
      "provenance": "Gaddis 4th Ed §3.5",
      "marks": 2
    },
        {
      "id": "q_su2_174",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "To convert a string representation of a whole number directly to an integer in Visual C#, which built-in method is prescribed in Tony Gaddis (Chapters 2–3) before introducing `int.TryParse()`?",
      "title": "To convert a string representation of a whole number directly to an integer in Visual C#, which built-in method is prescribed in Tony Gaddis (Chapters 2–3) before introducing `int.TryParse()`?",
      "options": [
        "int.Parse()",
        ".toInt()",
        "int.Convert()",
        "Integer.ValueOf()"
      ],
      "opts": [
        "int.Parse()",
        ".toInt()",
        "int.Convert()",
        "Integer.ValueOf()"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "In Tony Gaddis Chapters 2–3, string-to-integer conversion is performed via int.Parse(string). In Chapter 4, defensive parsing with int.TryParse(string, out int) is taught to prevent runtime exceptions.",
      "explanation": "In Tony Gaddis Chapters 2–3, string-to-integer conversion is performed via int.Parse(string). In Chapter 4, defensive parsing with int.TryParse(string, out int) is taught to prevent runtime exceptions.",
      "provenance": "NWU Test 1 (SU2) Gaddis Chapter 2 Step",
      "marks": 2
    },
        {
      "id": "q_su2_175",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 29 (Student Test Average Calculator), user input from `txtTest1` is converted using `double.Parse(txtTest1.Text)`. What is the syntactically correct C# `try-catch` construct to intercept invalid non-numeric inputs?",
      "title": "In Practical 29 (Student Test Average Calculator), user input from `txtTest1` is converted using `double.Parse(txtTest1.Text)`. What is the syntactically correct C# `try-catch` construct to intercept invalid non-numeric inputs?",
      "options": [
        "catch except(ex e) { ... }",
        "catch (FormatException ex) { ... }",
        "catch Exception: FormatException { ... }",
        "catch (ex as FormatException) { ... }"
      ],
      "opts": [
        "catch except(ex e) { ... }",
        "catch (FormatException ex) { ... }",
        "catch Exception: FormatException { ... }",
        "catch (ex as FormatException) { ... }"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "In C#, exception handling syntax requires 'catch (ExceptionType identifier)' such as 'catch (FormatException ex)'. Writing 'catch except(ex e)' is invalid C# syntax and causes compiler errors.",
      "explanation": "In C#, exception handling syntax requires 'catch (ExceptionType identifier)' such as 'catch (FormatException ex)'. Writing 'catch except(ex e)' is invalid C# syntax and causes compiler errors.",
      "provenance": "NWU Practical 29 Assessment Rubric Step",
      "marks": 2
    },
    {
      "id": "q_su2_176",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the evaluated result of 'decimal res = 10m + 5m * 2m;' in C#?",
      "title": "What is the evaluated result of 'decimal res = 10m + 5m * 2m;' in C#?",
      "options": [
        "30m",
        "100m",
        "25m",
        "20m"
      ],
      "opts": [
        "30m",
        "100m",
        "25m",
        "20m"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Multiplication has higher precedence than addition: 5m * 2m evaluates to 10m, and 10m + 10m equals 20m.",
      "explanation": "Multiplication has higher precedence than addition: 5m * 2m evaluates to 10m, and 10m + 10m equals 20m.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_177",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the evaluated result of 'decimal res = (10m + 5m) * 2m;' in C#?",
      "title": "What is the evaluated result of 'decimal res = (10m + 5m) * 2m;' in C#?",
      "options": [
        "30m",
        "20m",
        "15m",
        "25m"
      ],
      "opts": [
        "30m",
        "20m",
        "15m",
        "25m"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Parentheses have the highest precedence: (10m + 5m) evaluates to 15m, which is then multiplied by 2m to yield 30m.",
      "explanation": "Parentheses have the highest precedence: (10m + 5m) evaluates to 15m, which is then multiplied by 2m to yield 30m.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_178",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Can an 'int' variable be implicitly assigned to a 'decimal' variable in C#?",
      "title": "Can an 'int' variable be implicitly assigned to a 'decimal' variable in C#?",
      "options": [
        "No, C# forbids mixing int and decimal completely",
        "Yes, int to decimal is an implicit widening conversion because all 32-bit integers fit within 128-bit decimal without loss of precision",
        "Only if the int is negative",
        "Only if an explicit cast is supplied"
      ],
      "opts": [
        "No, C# forbids mixing int and decimal completely",
        "Yes, int to decimal is an implicit widening conversion because all 32-bit integers fit within 128-bit decimal without loss of precision",
        "Only if the int is negative",
        "Only if an explicit cast is supplied"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "An implicit conversion exists from int to decimal because no magnitude or precision is lost (widening conversion).",
      "explanation": "An implicit conversion exists from int to decimal because no magnitude or precision is lost (widening conversion).",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
        {
      "id": "q_su2_179",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 29, a student wrote: `lblAverage.Text = dblAverage.toString(''n2'');` to display an average mark of 84.5. Why does this line fail to compile in Visual C#?",
      "title": "In Practical 29, a student wrote: `lblAverage.Text = dblAverage.toString(''n2'');` to display an average mark of 84.5. Why does this line fail to compile in Visual C#?",
      "options": [
        "The 'n2' specifier is only valid for integers, not doubles",
        "The ToString method cannot accept format strings without passing a CultureInfo object",
        "C# method names are case-sensitive (ToString, not toString) and string format specifiers require standard double quotes (\"n2\"), not paired single quotes (''n2'')",
        "In C#, double values must be converted using Convert.ToString() rather than the instance method .ToString()"
      ],
      "opts": [
        "The 'n2' specifier is only valid for integers, not doubles",
        "The ToString method cannot accept format strings without passing a CultureInfo object",
        "C# method names are case-sensitive (ToString, not toString) and string format specifiers require standard double quotes (\"n2\"), not paired single quotes (''n2'')",
        "In C#, double values must be converted using Convert.ToString() rather than the instance method .ToString()"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "C# is strictly case-sensitive: toString() causes CS1061 ('double does not contain a definition for toString'). Furthermore, string literals require double quotes (\"n2\"); paired single quotes (''n2'') create an invalid character literal syntax error.",
      "explanation": "C# is strictly case-sensitive: toString() causes CS1061 ('double does not contain a definition for toString'). Furthermore, string literals require double quotes (\"n2\"); paired single quotes (''n2'') create an invalid character literal syntax error.",
      "provenance": "NWU Practical 29 Assessment Rubric Step",
      "marks": 2
    },
        {
      "id": "q_su2_180",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 29, a student wrote:\n```csharp\ndouble dblAverage = ((dblTest1 + dblTest2) / 2.0).ToString(\"n2\");\n```\nWhat compiler error does the Roslyn C# compiler raise for this statement?",
      "title": "In Practical 29, a student wrote:\n```csharp\ndouble dblAverage = ((dblTest1 + dblTest2) / 2.0).ToString(\"n2\");\n```\nWhat compiler error does the Roslyn C# compiler raise for this statement?",
      "options": [
        "CS0103: The name 'dblAverage' does not exist in the current context",
        "CS0266: Cannot implicitly convert type 'double' to 'int'",
        "No error is raised because C# automatically parses formatted strings into double variables",
        "CS0029: Cannot implicitly convert type 'string' to 'double'"
      ],
      "opts": [
        "CS0103: The name 'dblAverage' does not exist in the current context",
        "CS0266: Cannot implicitly convert type 'double' to 'int'",
        "No error is raised because C# automatically parses formatted strings into double variables",
        "CS0029: Cannot implicitly convert type 'string' to 'double'"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Calling .ToString(\"n2\") returns a formatted string object. In C#, a string cannot be assigned to a double variable, producing compiler error CS0029. The formatted string should be assigned to lblAverage.Text.",
      "explanation": "Calling .ToString(\"n2\") returns a formatted string object. In C#, a string cannot be assigned to a double variable, producing compiler error CS0029. The formatted string should be assigned to lblAverage.Text.",
      "provenance": "NWU Practical 29 Assessment Rubric Step",
      "marks": 2
    },
        {
      "id": "q_su2_181",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 29, when a user enters non-numeric text in `txtTest1`, the application catches `FormatException`. According to NWU practical marking rubrics and Shneiderman Rule 5 (Prevent errors), what pair of method calls should be executed to return focus and prepare the input field for immediate re-entry?",
      "title": "In Practical 29, when a user enters non-numeric text in `txtTest1`, the application catches `FormatException`. According to NWU practical marking rubrics and Shneiderman Rule 5 (Prevent errors), what pair of method calls should be executed to return focus and prepare the input field for immediate re-entry?",
      "options": [
        "txtTest1.Focus(); txtTest1.SelectAll();",
        "txtTest1.Clear(); txtTest1.Dispose();",
        "txtTest1.Hide(); txtTest1.Show();",
        "txtTest1.ResetText(); txtTest1.Undo();"
      ],
      "opts": [
        "txtTest1.Focus(); txtTest1.SelectAll();",
        "txtTest1.Clear(); txtTest1.Dispose();",
        "txtTest1.Hide(); txtTest1.Show();",
        "txtTest1.ResetText(); txtTest1.Undo();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Calling txtTest1.Focus() places the insertion cursor into the control, and txtTest1.SelectAll() selects the entire erroneous string so the student can immediately overwrite it without manual backspacing.",
      "explanation": "Calling txtTest1.Focus() places the insertion cursor into the control, and txtTest1.SelectAll() selects the entire erroneous string so the student can immediately overwrite it without manual backspacing.",
      "provenance": "NWU Practical 29 Assessment Rubric Step",
      "marks": 2
    },
    {
      "id": "q_su2_182",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which declaration creates a boolean flag variable initialized to false?",
      "title": "Which declaration creates a boolean flag variable initialized to false?",
      "options": [
        "boolean isValid = 0;",
        "bool isValid = false;",
        "bit isValid = false;",
        "int isValid = false;"
      ],
      "opts": [
        "boolean isValid = 0;",
        "bool isValid = false;",
        "bit isValid = false;",
        "int isValid = false;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "In C#, boolean variables are declared with the 'bool' keyword and take literal values 'true' or 'false'.",
      "explanation": "In C#, boolean variables are declared with the 'bool' keyword and take literal values 'true' or 'false'.",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_183",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Under NWU Hungarian naming standards, what is the correct control prefix and identifier for a TextBox accepting a student's surname?",
      "title": "Under NWU Hungarian naming standards, what is the correct control prefix and identifier for a TextBox accepting a student's surname?",
      "options": [
        "tb_Surname",
        "SurnameTextBox",
        "txtSurname",
        "textSurname"
      ],
      "opts": [
        "tb_Surname",
        "SurnameTextBox",
        "txtSurname",
        "textSurname"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "NWU standard prefixes mandate 'txt' for TextBox controls, followed by PascalCase: 'txtSurname'.",
      "explanation": "NWU standard prefixes mandate 'txt' for TextBox controls, followed by PascalCase: 'txtSurname'.",
      "provenance": "NWU CMPG122 Naming Conventions Guide",
      "marks": 2
    },
    {
      "id": "q_su2_184",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Under NWU Hungarian naming standards, what is the correct control identifier for a Label displaying calculated gross pay?",
      "title": "Under NWU Hungarian naming standards, what is the correct control identifier for a Label displaying calculated gross pay?",
      "options": [
        "lbl_pay",
        "GrossPayLabel",
        "labelGrossPay",
        "lblGrossPay"
      ],
      "opts": [
        "lbl_pay",
        "GrossPayLabel",
        "labelGrossPay",
        "lblGrossPay"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Labels use the 'lbl' prefix followed by descriptive PascalCase naming: 'lblGrossPay'.",
      "explanation": "Labels use the 'lbl' prefix followed by descriptive PascalCase naming: 'lblGrossPay'.",
      "provenance": "NWU CMPG122 Naming Conventions Guide",
      "marks": 2
    },
    {
      "id": "q_su2_185",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Why is 'Math.Round(val, 2, MidpointRounding.AwayFromZero)' commonly used in financial accounting?",
      "title": "Why is 'Math.Round(val, 2, MidpointRounding.AwayFromZero)' commonly used in financial accounting?",
      "options": [
        "It rounds .005 up to .01 (standard commercial rounding) rather than rounding to the nearest even number (banker's rounding)",
        "It converts negative numbers to positive",
        "It automatically calculates VAT",
        "It eliminates all decimal places"
      ],
      "opts": [
        "It rounds .005 up to .01 (standard commercial rounding) rather than rounding to the nearest even number (banker's rounding)",
        "It converts negative numbers to positive",
        "It automatically calculates VAT",
        "It eliminates all decimal places"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "MidpointRounding.AwayFromZero implements traditional arithmetic rounding (e.g. 2.5 rounds to 3), which matches standard commercial practice.",
      "explanation": "MidpointRounding.AwayFromZero implements traditional arithmetic rounding (e.g. 2.5 rounds to 3), which matches standard commercial practice.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_186",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What output does '15000m.ToString(\"N0\")' produce?",
      "title": "What output does '15000m.ToString(\"N0\")' produce?",
      "options": [
        "15000.00",
        "15,000",
        "R 15000",
        "1.50E+04"
      ],
      "opts": [
        "15000.00",
        "15,000",
        "R 15000",
        "1.50E+04"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The 'N0' format specifier formats a number with digit group separators (commas) and zero fractional decimal places: '15,000'.",
      "explanation": "The 'N0' format specifier formats a number with digit group separators (commas) and zero fractional decimal places: '15,000'.",
      "provenance": "Gaddis 4th Ed §3.5",
      "marks": 2
    },
    {
      "id": "q_su2_187",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What happens when the '+' operator is used with a string operand and a numeric operand in C#?",
      "title": "What happens when the '+' operator is used with a string operand and a numeric operand in C#?",
      "options": [
        "A FormatException is thrown at runtime",
        "The string is converted to a number and added",
        "String concatenation is performed; the numeric value is converted to a string and joined to the other string",
        "Compiler error CS0019 occurs"
      ],
      "opts": [
        "A FormatException is thrown at runtime",
        "The string is converted to a number and added",
        "String concatenation is performed; the numeric value is converted to a string and joined to the other string",
        "Compiler error CS0019 occurs"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "When either operand of '+' is a string, C# treats '+' as the string concatenation operator, converting the other operand to its string representation.",
      "explanation": "When either operand of '+' is a string, C# treats '+' as the string concatenation operator, converting the other operand to its string representation.",
      "provenance": "Gaddis 4th Ed §3.2",
      "marks": 2
    },
    {
      "id": "q_su2_188",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What does '\"Subtotal: \" + 50 + 20' evaluate to in C#?",
      "title": "What does '\"Subtotal: \" + 50 + 20' evaluate to in C#?",
      "options": [
        "\"Subtotal: 70\"",
        "\"Subtotal: 1000\"",
        "A compilation error",
        "\"Subtotal: 5020\""
      ],
      "opts": [
        "\"Subtotal: 70\"",
        "\"Subtotal: 1000\"",
        "A compilation error",
        "\"Subtotal: 5020\""
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Evaluation proceeds left-to-right: '\"Subtotal: \" + 50' produces '\"Subtotal: 50\"', and concatenating 20 yields '\"Subtotal: 5020\"'.",
      "explanation": "Evaluation proceeds left-to-right: '\"Subtotal: \" + 50' produces '\"Subtotal: 50\"', and concatenating 20 yields '\"Subtotal: 5020\"'.",
      "provenance": "Gaddis 4th Ed §3.2",
      "marks": 2
    },
    {
      "id": "q_su2_189",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "How can '\"Subtotal: \" + 50 + 20' be corrected to display 'Subtotal: 70'?",
      "title": "How can '\"Subtotal: \" + 50 + 20' be corrected to display 'Subtotal: 70'?",
      "options": [
        "\"Subtotal: \" + (50 + 20)",
        "\"Subtotal: \" + 50 - 20",
        "\"Subtotal: \" * (50 + 20)",
        "\"Subtotal: \" + \"70\" - 20"
      ],
      "opts": [
        "\"Subtotal: \" + (50 + 20)",
        "\"Subtotal: \" + 50 - 20",
        "\"Subtotal: \" * (50 + 20)",
        "\"Subtotal: \" + \"70\" - 20"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Enclosing the numbers in parentheses '(50 + 20)' forces arithmetic addition first before string concatenation.",
      "explanation": "Enclosing the numbers in parentheses '(50 + 20)' forces arithmetic addition first before string concatenation.",
      "provenance": "Gaddis 4th Ed §3.2",
      "marks": 2
    },
    {
      "id": "q_su2_190",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the evaluated result of '10 / 4.0' in C#?",
      "title": "What is the evaluated result of '10 / 4.0' in C#?",
      "options": [
        "2",
        "2.5",
        "2.0",
        "3"
      ],
      "opts": [
        "2",
        "2.5",
        "2.0",
        "3"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Because 4.0 is a double literal, C# performs floating-point division, producing the exact double result 2.5.",
      "explanation": "Because 4.0 is a double literal, C# performs floating-point division, producing the exact double result 2.5.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_191",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which C# method returns true if a string variable is either null, empty, or contains only whitespace spaces?",
      "title": "Which C# method returns true if a string variable is either null, empty, or contains only whitespace spaces?",
      "options": [
        "str.IsEmpty()",
        "string.CheckEmpty(str)",
        "string.IsNullOrWhiteSpace(str)",
        "str.HasNoText()"
      ],
      "opts": [
        "str.IsEmpty()",
        "string.CheckEmpty(str)",
        "string.IsNullOrWhiteSpace(str)",
        "str.HasNoText()"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "string.IsNullOrWhiteSpace() evaluates whether a string is null, empty (\"\"), or consists entirely of whitespace characters.",
      "explanation": "string.IsNullOrWhiteSpace() evaluates whether a string is null, empty (\"\"), or consists entirely of whitespace characters.",
      "provenance": "Gaddis 4th Ed §3.5",
      "marks": 2
    },
    {
      "id": "q_su2_192",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What happens if a student uses 'decimal.Parse(\"\")' on an empty TextBox string without try-catch protection?",
      "title": "What happens if a student uses 'decimal.Parse(\"\")' on an empty TextBox string without try-catch protection?",
      "options": [
        "The variable is assigned 0m silently",
        "The form reloads automatically",
        "The textbox turns red",
        "A FormatException is thrown, immediately terminating or crashing the application"
      ],
      "opts": [
        "The variable is assigned 0m silently",
        "The form reloads automatically",
        "The textbox turns red",
        "A FormatException is thrown, immediately terminating or crashing the application"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "decimal.Parse cannot parse an empty string and throws an unhandled FormatException, causing a program crash.",
      "explanation": "decimal.Parse cannot parse an empty string and throws an unhandled FormatException, causing a program crash.",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_193",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, how should the greeting line for the braai master (e.g. 'Braai master: Andre') be generated?",
      "title": "In Practical 2, how should the greeting line for the braai master (e.g. 'Braai master: Andre') be generated?",
      "options": [
        "lblGreeting.Text = $\"Braai master: {txtName.Text.Trim()}\";",
        "lblGreeting.Text = \"Braai master: user\";",
        "txtName.Text = lblGreeting.Text;",
        "lblGreeting.Name = txtName.Name;"
      ],
      "opts": [
        "lblGreeting.Text = $\"Braai master: {txtName.Text.Trim()}\";",
        "lblGreeting.Text = \"Braai master: user\";",
        "txtName.Text = lblGreeting.Text;",
        "lblGreeting.Name = txtName.Name;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "String interpolation or concatenation with txtName.Text dynamically formats the personalized greeting required by Practical 2.",
      "explanation": "String interpolation or concatenation with txtName.Text dynamically formats the personalized greeting required by Practical 2.",
      "provenance": "NWU Practical 2 Part C",
      "marks": 2
    },
    {
      "id": "q_su2_194",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What operator in C# explicitly converts an expression from one data type to another, such as '(int)totalCost'?",
      "title": "What operator in C# explicitly converts an expression from one data type to another, such as '(int)totalCost'?",
      "options": [
        "Ternary operator",
        "Cast operator",
        "Modulus operator",
        "Null-coalescing operator"
      ],
      "opts": [
        "Ternary operator",
        "Cast operator",
        "Modulus operator",
        "Null-coalescing operator"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The cast operator (parentheses enclosing a type name) explicitly instructs the compiler to convert a value to the specified type.",
      "explanation": "The cast operator (parentheses enclosing a type name) explicitly instructs the compiler to convert a value to the specified type.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_195",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the approximate maximum value that can be held by a standard 32-bit signed C# 'int' variable?",
      "title": "What is the approximate maximum value that can be held by a standard 32-bit signed C# 'int' variable?",
      "options": [
        "Approximately 32,767",
        "Approximately 65,535",
        "Approximately 2.14 billion (2,147,483,647)",
        "Virtually unlimited"
      ],
      "opts": [
        "Approximately 32,767",
        "Approximately 65,535",
        "Approximately 2.14 billion (2,147,483,647)",
        "Virtually unlimited"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "A signed 32-bit integer ranges from -2,147,483,648 to +2,147,483,647 (int.MaxValue).",
      "explanation": "A signed 32-bit integer ranges from -2,147,483,648 to +2,147,483,647 (int.MaxValue).",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_196",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which C# primitive type represents a single 16-bit Unicode character enclosed in single quotation marks?",
      "title": "Which C# primitive type represents a single 16-bit Unicode character enclosed in single quotation marks?",
      "options": [
        "string",
        "byte",
        "character",
        "char"
      ],
      "opts": [
        "string",
        "byte",
        "character",
        "char"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The 'char' type represents a single 16-bit Unicode character (e.g. 'A', '7', '$') written in single quotes.",
      "explanation": "The 'char' type represents a single 16-bit Unicode character (e.g. 'A', '7', '$') written in single quotes.",
      "provenance": "Gaddis 4th Ed §3.3",
      "marks": 2
    },
    {
      "id": "q_su2_197",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What is the scope of a variable declared inside the body block of an 'if' statement?",
      "title": "What is the scope of a variable declared inside the body block of an 'if' statement?",
      "options": [
        "Block scope: it is accessible only inside that specific if block and ceases to exist once the block finishes",
        "Global scope: accessible to the whole Windows operating system",
        "Class scope: accessible across all forms",
        "Method scope: accessible throughout the entire method"
      ],
      "opts": [
        "Block scope: it is accessible only inside that specific if block and ceases to exist once the block finishes",
        "Global scope: accessible to the whole Windows operating system",
        "Class scope: accessible across all forms",
        "Method scope: accessible throughout the entire method"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Variables declared within a code block (inside curly braces) have block scope and cannot be referenced outside those braces.",
      "explanation": "Variables declared within a code block (inside curly braces) have block scope and cannot be referenced outside those braces.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_198",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "According to Practical 2 Code Standards, why should blank lines be used between input parsing, calculations, and output display?",
      "title": "According to Practical 2 Code Standards, why should blank lines be used between input parsing, calculations, and output display?",
      "options": [
        "Visual Studio requires blank lines to compile",
        "Blank lines visually structure code into logical paragraphs, improving readability and maintainability",
        "Blank lines increase execution speed",
        "Blank lines automatically reset memory"
      ],
      "opts": [
        "Visual Studio requires blank lines to compile",
        "Blank lines visually structure code into logical paragraphs, improving readability and maintainability",
        "Blank lines increase execution speed",
        "Blank lines automatically reset memory"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Using blank lines to visually decouple reading input, processing calculations, and writing output makes code legible and aligns with NWU code standards.",
      "explanation": "Using blank lines to visually decouple reading input, processing calculations, and writing output makes code legible and aligns with NWU code standards.",
      "provenance": "NWU Practical 2 Part F (Code Standards)",
      "marks": 2
    },
    {
      "id": "q_su2_199",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What property of a string object returns the total count of characters it contains?",
      "title": "What property of a string object returns the total count of characters it contains?",
      "options": [
        "Count()",
        "Size",
        "Length",
        "TotalChars"
      ],
      "opts": [
        "Count()",
        "Size",
        "Length",
        "TotalChars"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The .Length property returns the number of characters in a string as an integer.",
      "explanation": "The .Length property returns the number of characters in a string as an integer.",
      "provenance": "Gaddis 4th Ed §3.5",
      "marks": 2
    },
    {
      "id": "q_su2_200",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which unary operator increments an integer variable's value by exactly 1 in C#?",
      "title": "Which unary operator increments an integer variable's value by exactly 1 in C#?",
      "options": [
        "--",
        "+=",
        "**",
        "++"
      ],
      "opts": [
        "--",
        "+=",
        "**",
        "++"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The increment operator (++) increases the numeric value of its operand by 1.",
      "explanation": "The increment operator (++) increases the numeric value of its operand by 1.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su2_201",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "In Practical 2, if wors costs R85.00/kg and rolls cost R3.50 each, what is the cost of 1.5 kg of wors (1500g / 120g = 12 rolls)?",
      "title": "In Practical 2, if wors costs R85.00/kg and rolls cost R3.50 each, what is the cost of 1.5 kg of wors (1500g / 120g = 12 rolls)?",
      "options": [
        "Wors: R 127.50, Rolls: R 42.00, Total: R 169.50",
        "Wors: R 100.00, Rolls: R 35.00, Total: R 135.00",
        "Wors: R 85.00, Rolls: R 42.00, Total: R 127.00",
        "Wors: R 150.00, Rolls: R 50.00, Total: R 200.00"
      ],
      "opts": [
        "Wors: R 127.50, Rolls: R 42.00, Total: R 169.50",
        "Wors: R 100.00, Rolls: R 35.00, Total: R 135.00",
        "Wors: R 85.00, Rolls: R 42.00, Total: R 127.00",
        "Wors: R 150.00, Rolls: R 50.00, Total: R 200.00"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "1.5 kg * R85 = R127.50. 1500g / 120g = 12 rolls. 12 rolls * R3.50 = R42.00. Total = R127.50 + R42.00 = R169.50.",
      "explanation": "1.5 kg * R85 = R127.50. 1500g / 120g = 12 rolls. 12 rolls * R3.50 = R42.00. Total = R127.50 + R42.00 = R169.50.",
      "provenance": "NWU Practical 2 Part C (Calculations)",
      "marks": 2
    },
    {
      "id": "q_su2_202",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which escape sequence represents a newline character when formatting multi-line strings in C#?",
      "title": "Which escape sequence represents a newline character when formatting multi-line strings in C#?",
      "options": [
        "\\t",
        "\\n",
        "\\r",
        "\\b"
      ],
      "opts": [
        "\\t",
        "\\n",
        "\\r",
        "\\b"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The escape sequence '\\n' inserts a linefeed (newline) character into a string.",
      "explanation": "The escape sequence '\\n' inserts a linefeed (newline) character into a string.",
      "provenance": "Gaddis 4th Ed §3.2",
      "marks": 2
    },
    {
      "id": "q_su2_203",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Which escape sequence inserts a horizontal tab space into a string?",
      "title": "Which escape sequence inserts a horizontal tab space into a string?",
      "options": [
        "\\s",
        "\\a",
        "\\t",
        "\\n"
      ],
      "opts": [
        "\\s",
        "\\a",
        "\\t",
        "\\n"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The escape sequence '\\t' inserts a horizontal tab character.",
      "explanation": "The escape sequence '\\t' inserts a horizontal tab character.",
      "provenance": "Gaddis 4th Ed §3.2",
      "marks": 2
    },
    {
      "id": "q_su2_204",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "What C# statement should be called inside an event handler to exit immediately if validation detects invalid input?",
      "title": "What C# statement should be called inside an event handler to exit immediately if validation detects invalid input?",
      "options": [
        "break;",
        "stop;",
        "exit;",
        "return;"
      ],
      "opts": [
        "break;",
        "stop;",
        "exit;",
        "return;"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The 'return;' statement immediately terminates execution of a void method, preventing subsequent calculations from running with invalid data.",
      "explanation": "The 'return;' statement immediately terminates execution of a void method, preventing subsequent calculations from running with invalid data.",
      "provenance": "Gaddis 4th Ed §3.6",
      "marks": 2
    },
    {
      "id": "q_su2_205",
      "ch": "SU2",
      "su": "SU2",
      "type": "mcq",
      "q": "Why must students use 'File -> Save All' (Ctrl+Shift+S) rather than 'File -> Save' (Ctrl+S) before submitting Practical 2?",
      "title": "Why must students use 'File -> Save All' (Ctrl+Shift+S) rather than 'File -> Save' (Ctrl+S) before submitting Practical 2?",
      "options": [
        "Ctrl+S saves only the active code tab, leaving designer layout modifications unsaved on disk",
        "Ctrl+S corrupts the project file",
        "Ctrl+Shift+S compresses the folder into a zip file",
        "Ctrl+Shift+S submits the project directly to eFundi"
      ],
      "opts": [
        "Ctrl+S saves only the active code tab, leaving designer layout modifications unsaved on disk",
        "Ctrl+S corrupts the project file",
        "Ctrl+Shift+S compresses the folder into a zip file",
        "Ctrl+Shift+S submits the project directly to eFundi"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Ctrl+S saves only the currently viewed file. If Form1.cs is open, recent Designer changes are not saved unless Save All (Ctrl+Shift+S) is used.",
      "explanation": "Ctrl+S saves only the currently viewed file. If Form1.cs is open, recent Designer changes are not saved unless Save All (Ctrl+Shift+S) is used.",
      "provenance": "NWU Practical 2 Submission Instructions",
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
      "q": "In Practical 4 (SpeedTrap Potchefstroom R30), what initial subtraction determines how far over the legal speed limit a vehicle was traveling?",
      "title": "In Practical 4 (SpeedTrap Potchefstroom R30), what initial subtraction determines how far over the legal speed limit a vehicle was traveling?",
      "options": [
        "int speedOver = limit - recordedSpeed;",
        "decimal speedOver = recordedSpeed / limit;",
        "int speedOver = recordedSpeed - limit;",
        "int speedOver = (recordedSpeed + limit) % 2;"
      ],
      "opts": [
        "int speedOver = limit - recordedSpeed;",
        "decimal speedOver = recordedSpeed / limit;",
        "int speedOver = recordedSpeed - limit;",
        "int speedOver = (recordedSpeed + limit) % 2;"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The practical requires one simple subtraction: recorded speed minus the zone speed limit. A positive result indicates speeding, while zero or negative means within the limit.",
      "explanation": "The practical requires one simple subtraction: recorded speed minus the zone speed limit. A positive result indicates speeding, while zero or negative means within the limit.",
      "provenance": "NWU Practical Four Part C (How far over)",
      "marks": 2
    },
    {
      "id": "q_su3_222",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, what exact outputs must be displayed if the driver was traveling at or below the legal limit (speedOver <= 0)?",
      "title": "In Practical 4, what exact outputs must be displayed if the driver was traveling at or below the legal limit (speedOver <= 0)?",
      "options": [
        "lblKmOver.Text = \"-5 km/h\"; lblCategory.Text = \"Legal\"; lblFine.Text = \"R 0.00\";",
        "lblKmOver.Text = \"OK\"; lblCategory.Text = \"Pass\"; lblFine.Text = \"None\";",
        "lblFine.Text = \"Warning: drive faster\";",
        "lblKmOver.Text = \"0 km/h\"; lblCategory.Text = \"Within the limit\"; lblFine.Text = \"No fine. Safe driving.\";"
      ],
      "opts": [
        "lblKmOver.Text = \"-5 km/h\"; lblCategory.Text = \"Legal\"; lblFine.Text = \"R 0.00\";",
        "lblKmOver.Text = \"OK\"; lblCategory.Text = \"Pass\"; lblFine.Text = \"None\";",
        "lblFine.Text = \"Warning: drive faster\";",
        "lblKmOver.Text = \"0 km/h\"; lblCategory.Text = \"Within the limit\"; lblFine.Text = \"No fine. Safe driving.\";"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The Practical 4 specification mandates exact character-for-character output for legal driving: '0 km/h', category 'Within the limit', and fine line 'No fine. Safe driving.'.",
      "explanation": "The Practical 4 specification mandates exact character-for-character output for legal driving: '0 km/h', category 'Within the limit', and fine line 'No fine. Safe driving.'.",
      "provenance": "NWU Practical Four Part B & Part D",
      "marks": 2
    },
    {
      "id": "q_su3_223",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Why is the speeding fine band assessment in Practical 4 engineered as a connected 'if-else-if' chain rather than separate unchained 'if' statements?",
      "title": "Why is the speeding fine band assessment in Practical 4 engineered as a connected 'if-else-if' chain rather than separate unchained 'if' statements?",
      "options": [
        "In a connected chain, once a test evaluates to true, remaining branches are skipped, allowing each condition to test only its upper boundary because lower values were already filtered out",
        "C# does not allow writing more than one independent if statement in the same method",
        "Separate if statements execute 10 times slower in Windows Forms",
        "Connected chains prevent variables from going out of scope"
      ],
      "opts": [
        "In a connected chain, once a test evaluates to true, remaining branches are skipped, allowing each condition to test only its upper boundary because lower values were already filtered out",
        "C# does not allow writing more than one independent if statement in the same method",
        "Separate if statements execute 10 times slower in Windows Forms",
        "Connected chains prevent variables from going out of scope"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A connected chain ensures mutually exclusive execution. Anyone reaching 'else if (speedOver <= 20)' has already failed '<= 10', so the lower bound is implicitly guaranteed.",
      "explanation": "A connected chain ensures mutually exclusive execution. Anyone reaching 'else if (speedOver <= 20)' has already failed '<= 10', so the lower bound is implicitly guaranteed.",
      "provenance": "NWU Practical Four Part C (The bands)",
      "marks": 2
    },
    {
      "id": "q_su3_224",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, what fine and category apply for a vehicle traveling at 85 km/h against a 60 km/h limit (25 km/h over) on a Highway for a first-time offender?",
      "title": "In Practical 4, what fine and category apply for a vehicle traveling at 85 km/h against a 60 km/h limit (25 km/h over) on a Highway for a first-time offender?",
      "options": [
        "Fine: R 750, Category: \"Serious\"",
        "Fine: R 1500, Category: \"Severe\"",
        "Fine: R 2500, Category: \"Court appearance\"",
        "Fine: R 3000, Category: \"Severe - built-up area\""
      ],
      "opts": [
        "Fine: R 750, Category: \"Serious\"",
        "Fine: R 1500, Category: \"Severe\"",
        "Fine: R 2500, Category: \"Court appearance\"",
        "Fine: R 3000, Category: \"Severe - built-up area\""
      ],
      "answer": 1,
      "ans": 1,
      "exp": "25 km/h over falls into the 21-30 band (R1500, 'Severe'). Highway is not a built-up area, and repeat offender is false, so no doubling or surcharge applies.",
      "explanation": "25 km/h over falls into the 21-30 band (R1500, 'Severe'). Highway is not a built-up area, and repeat offender is false, so no doubling or surcharge applies.",
      "provenance": "NWU Practical Four Part B & Part D",
      "marks": 2
    },
    {
      "id": "q_su3_225",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, which two speed trap zones are classified as built-up areas?",
      "title": "In Practical 4, which two speed trap zones are classified as built-up areas?",
      "options": [
        "\"Highway\" and \"Town\"",
        "\"School\" and \"Highway\"",
        "\"School\" and \"Town\"",
        "Only \"School\""
      ],
      "opts": [
        "\"Highway\" and \"Town\"",
        "\"School\" and \"Highway\"",
        "\"School\" and \"Town\"",
        "Only \"School\""
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Practical 4 defines: 'A School zone and a Town zone are both built-up areas. In a built-up area, being more than 20 km/h over the limit doubles the fine.'",
      "explanation": "Practical 4 defines: 'A School zone and a Town zone are both built-up areas. In a built-up area, being more than 20 km/h over the limit doubles the fine.'",
      "provenance": "NWU Practical Four Part B",
      "marks": 2
    },
    {
      "id": "q_su3_226",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, what exact condition triggers doubling of the fine and appending ' - built-up area' to the category?",
      "title": "In Practical 4, what exact condition triggers doubling of the fine and appending ' - built-up area' to the category?",
      "options": [
        "The zone is a Highway and speedOver >= 20",
        "Whenever the driver was traveling at more than 10 km/h over the limit in any zone",
        "Whenever the repeat offender answer is 'yes'",
        "The zone is a built-up area (\"School\" or \"Town\") AND speedOver is strictly greater than 20 km/h (speedOver > 20)"
      ],
      "opts": [
        "The zone is a Highway and speedOver >= 20",
        "Whenever the driver was traveling at more than 10 km/h over the limit in any zone",
        "Whenever the repeat offender answer is 'yes'",
        "The zone is a built-up area (\"School\" or \"Town\") AND speedOver is strictly greater than 20 km/h (speedOver > 20)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Both conditions must hold: isBuiltUp must be true AND the vehicle must exceed the limit by strictly more than 20 km/h.",
      "explanation": "Both conditions must hold: isBuiltUp must be true AND the vehicle must exceed the limit by strictly more than 20 km/h.",
      "provenance": "NWU Practical Four Part B & Part C",
      "marks": 2
    },
    {
      "id": "q_su3_227",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, if a vehicle travels at 80 km/h in a 60 km/h School zone (exactly 20 km/h over), what happens to the fine?",
      "title": "In Practical 4, if a vehicle travels at 80 km/h in a 60 km/h School zone (exactly 20 km/h over), what happens to the fine?",
      "options": [
        "The fine does NOT double because the specification requires MORE than 20 km/h over; exactly 20 km/h over remains at R750 (Serious)",
        "The fine doubles to R1500 immediately",
        "The driver receives a court appearance summons",
        "The fine is reduced to R250"
      ],
      "opts": [
        "The fine does NOT double because the specification requires MORE than 20 km/h over; exactly 20 km/h over remains at R750 (Serious)",
        "The fine doubles to R1500 immediately",
        "The driver receives a court appearance summons",
        "The fine is reduced to R250"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Edge case test from rubric: 'a School zone at exactly 20 over must not double.' The rule specifies 'more than 20', so speedOver > 20 evaluates to false when speedOver == 20.",
      "explanation": "Edge case test from rubric: 'a School zone at exactly 20 over must not double.' The rule specifies 'more than 20', so speedOver > 20 evaluates to false when speedOver == 20.",
      "provenance": "NWU Practical Four Part D (Test the edges)",
      "marks": 2
    },
    {
      "id": "q_su3_228",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, what suffix string must be appended to the category when a fine doubles in a built-up area?",
      "title": "In Practical 4, what suffix string must be appended to the category when a fine doubles in a built-up area?",
      "options": [
        "\" (DOUBLED)\"",
        "\" - built-up area\"",
        "\" *BUILT UP*\"",
        "\" [ZONE 1]\""
      ],
      "opts": [
        "\" (DOUBLED)\"",
        "\" - built-up area\"",
        "\" *BUILT UP*\"",
        "\" [ZONE 1]\""
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The rubric requires appending exactly ' - built-up area' to the category string (e.g. 'Severe - built-up area').",
      "explanation": "The rubric requires appending exactly ' - built-up area' to the category string (e.g. 'Severe - built-up area').",
      "provenance": "NWU Practical Four Part B & Part D",
      "marks": 2
    },
    {
      "id": "q_su3_229",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, where and how must the R500 repeat offender fine be declared according to coding standards?",
      "title": "In Practical 4, where and how must the R500 repeat offender fine be declared according to coding standards?",
      "options": [
        "Inside btnCheck_Click as a local int variable",
        "Inside txtRepeat.Text property window",
        "At class level, outside every method, declared with the 'const' keyword: const decimal REPEAT_FINE = 500m;",
        "In Program.cs as a static string"
      ],
      "opts": [
        "Inside btnCheck_Click as a local int variable",
        "Inside txtRepeat.Text property window",
        "At class level, outside every method, declared with the 'const' keyword: const decimal REPEAT_FINE = 500m;",
        "In Program.cs as a static string"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The practical specifies: 'The R500 that a repeat offender pays is written down once, at class level, outside every method. There is a keyword for this (const) and a naming tradition (UPPERCASE) that goes with it.'",
      "explanation": "The practical specifies: 'The R500 that a repeat offender pays is written down once, at class level, outside every method. There is a keyword for this (const) and a naming tradition (UPPERCASE) that goes with it.'",
      "provenance": "NWU Practical Four Part C (A named constant)",
      "marks": 2
    },
        {
      "id": "q_su3_230",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 29, a student validates that two test marks (`dblTest1` and `dblTest2`) are within the valid academic bounds of 0 to 100 inclusive. Which `if` condition correctly triggers an error message if EITHER mark is out of bounds?",
      "title": "In Practical 29, a student validates that two test marks (`dblTest1` and `dblTest2`) are within the valid academic bounds of 0 to 100 inclusive. Which `if` condition correctly triggers an error message if EITHER mark is out of bounds?",
      "options": [
        "if (dblTest1 < 0 && dblTest1 > 100 && dblTest2 < 0 && dblTest2 > 100)",
        "if (dblTest1 < 0 || dblTest1 > 100 || dblTest2 < 0 || dblTest2 > 100)",
        "if (0 <= dblTest1 <= 100 || 0 <= dblTest2 <= 100)",
        "if (dblTest1 < 0 | dblTest1 > 100 & dblTest2 < 0 | dblTest2 > 100)"
      ],
      "opts": [
        "if (dblTest1 < 0 && dblTest1 > 100 && dblTest2 < 0 && dblTest2 > 100)",
        "if (dblTest1 < 0 || dblTest1 > 100 || dblTest2 < 0 || dblTest2 > 100)",
        "if (0 <= dblTest1 <= 100 || 0 <= dblTest2 <= 100)",
        "if (dblTest1 < 0 | dblTest1 > 100 & dblTest2 < 0 | dblTest2 > 100)"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "To detect if either mark is invalid, each boundary condition is evaluated with the logical OR operator '||'. Chained relational comparisons like '0 <= dblTest1 <= 100' are illegal in C# (CS0019).",
      "explanation": "To detect if either mark is invalid, each boundary condition is evaluated with the logical OR operator '||'. Chained relational comparisons like '0 <= dblTest1 <= 100' are illegal in C# (CS0019).",
      "provenance": "NWU Practical 29 Assessment Rubric Step",
      "marks": 2
    },
    {
      "id": "q_su3_231",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "How does 'txtRepeat.Text.CompareTo(\"yes\") == 0' determine if the driver is a repeat offender?",
      "title": "How does 'txtRepeat.Text.CompareTo(\"yes\") == 0' determine if the driver is a repeat offender?",
      "options": [
        "CompareTo returns 0 when the calling string and argument are identical in alphabetical sort order",
        "CompareTo returns true or false directly",
        "CompareTo returns 0 only when the string is empty",
        "CompareTo throws a FormatException if strings do not match"
      ],
      "opts": [
        "CompareTo returns 0 when the calling string and argument are identical in alphabetical sort order",
        "CompareTo returns true or false directly",
        "CompareTo returns 0 only when the string is empty",
        "CompareTo throws a FormatException if strings do not match"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "String.CompareTo returns 0 if two strings are identical in value and case, a negative integer if the caller precedes the argument, and positive if it follows.",
      "explanation": "String.CompareTo returns 0 if two strings are identical in value and case, a negative integer if the caller precedes the argument, and positive if it follows.",
      "provenance": "NWU Practical Four Part C & Gaddis §4.9",
      "marks": 2
    },
    {
      "id": "q_su3_232",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Why does Practical 4 instruct students: 'Do not write an empty else just to have one' when checking repeat offender status?",
      "title": "Why does Practical 4 instruct students: 'Do not write an empty else just to have one' when checking repeat offender status?",
      "options": [
        "Empty else blocks cause compiler error CS0101",
        "Writing empty 'else { }' blocks is poor coding style that clutters code and adds zero functional value; a single-alternative if is correct",
        "Visual Studio deletes empty else blocks during compilation",
        "Else blocks can only be used with numbers"
      ],
      "opts": [
        "Empty else blocks cause compiler error CS0101",
        "Writing empty 'else { }' blocks is poor coding style that clutters code and adds zero functional value; a single-alternative if is correct",
        "Visual Studio deletes empty else blocks during compilation",
        "Else blocks can only be used with numbers"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "A single-alternative if statement ('if (isRepeat) fine += REPEAT_FINE;') is the cleanest construct when no action is needed on false. An empty else block loses marks.",
      "explanation": "A single-alternative if statement ('if (isRepeat) fine += REPEAT_FINE;') is the cleanest construct when no action is needed on false. An empty else block loses marks.",
      "provenance": "NWU Practical Four Part C (Repeat offenders)",
      "marks": 2
    },
    {
      "id": "q_su3_233",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, why is a GroupBox control chosen for the 'Finding' container rather than a Panel control?",
      "title": "In Practical 4, why is a GroupBox control chosen for the 'Finding' container rather than a Panel control?",
      "options": [
        "Panels cannot hold Label controls",
        "GroupBoxes automatically calculate speeding fines",
        "A GroupBox has a built-in bordered frame and a Text property to display a titled caption ('Finding'), whereas a Panel has no caption property",
        "Panels only work on Windows 7"
      ],
      "opts": [
        "Panels cannot hold Label controls",
        "GroupBoxes automatically calculate speeding fines",
        "A GroupBox has a built-in bordered frame and a Text property to display a titled caption ('Finding'), whereas a Panel has no caption property",
        "Panels only work on Windows 7"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "GroupBox controls provide a visible boundary with an integrated title text caption ('Finding'). Panels do not support header text captions.",
      "explanation": "GroupBox controls provide a visible boundary with an integrated title text caption ('Finding'). Panels do not support header text captions.",
      "provenance": "NWU Practical Four Part B (A GroupBox)",
      "marks": 2
    },
    {
      "id": "q_su3_234",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which logical operator in C# represents short-circuit logical AND?",
      "title": "Which logical operator in C# represents short-circuit logical AND?",
      "options": [
        "||",
        "!",
        "&",
        "&&"
      ],
      "opts": [
        "||",
        "!",
        "&",
        "&&"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The '&&' operator performs short-circuit logical AND, evaluating to true only if both sub-expressions are true.",
      "explanation": "The '&&' operator performs short-circuit logical AND, evaluating to true only if both sub-expressions are true.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_235",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which logical operator in C# represents short-circuit logical OR?",
      "title": "Which logical operator in C# represents short-circuit logical OR?",
      "options": [
        "||",
        "&&",
        "!",
        "|"
      ],
      "opts": [
        "||",
        "&&",
        "!",
        "|"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The '||' operator performs short-circuit logical OR, evaluating to true if at least one sub-expression is true.",
      "explanation": "The '||' operator performs short-circuit logical OR, evaluating to true if at least one sub-expression is true.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_236",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is short-circuit evaluation in C# logical expressions?",
      "title": "What is short-circuit evaluation in C# logical expressions?",
      "options": [
        "The computer shuts down if an expression is too long",
        "If the first operand of '&&' is false, or the first of '||' is true, the second operand is never evaluated because the overall result is already determined",
        "All conditions in an expression are evaluated in parallel by multiple CPU cores",
        "Expressions with errors are automatically converted to true"
      ],
      "opts": [
        "The computer shuts down if an expression is too long",
        "If the first operand of '&&' is false, or the first of '||' is true, the second operand is never evaluated because the overall result is already determined",
        "All conditions in an expression are evaluated in parallel by multiple CPU cores",
        "Expressions with errors are automatically converted to true"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Short-circuit evaluation stops evaluating composite boolean expressions as soon as the outcome is guaranteed, preventing runtime errors (e.g. division by zero or null dereferences).",
      "explanation": "Short-circuit evaluation stops evaluating composite boolean expressions as soon as the outcome is guaranteed, preventing runtime errors (e.g. division by zero or null dereferences).",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_237",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is the evaluated boolean value of '!(10 > 4)' in C#?",
      "title": "What is the evaluated boolean value of '!(10 > 4)' in C#?",
      "options": [
        "true",
        "null",
        "false",
        "1"
      ],
      "opts": [
        "true",
        "null",
        "false",
        "1"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "10 > 4 is true. The logical NOT operator (!) reverses the truth value, resulting in false.",
      "explanation": "10 > 4 is true. The logical NOT operator (!) reverses the truth value, resulting in false.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_238",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which relational operator in C# checks whether two values are NOT equal?",
      "title": "Which relational operator in C# checks whether two values are NOT equal?",
      "options": [
        "<>",
        "==",
        "!==",
        "!="
      ],
      "opts": [
        "<>",
        "==",
        "!==",
        "!="
      ],
      "answer": 3,
      "ans": 3,
      "exp": "'!=' is the inequality relational operator in C#.",
      "explanation": "'!=' is the inequality relational operator in C#.",
      "provenance": "Gaddis 4th Ed §4.1",
      "marks": 2
    },
    {
      "id": "q_su3_239",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What common compilation error occurs if a student mistakenly writes 'if (speed = 80)' instead of 'if (speed == 80)' in C#?",
      "title": "What common compilation error occurs if a student mistakenly writes 'if (speed = 80)' instead of 'if (speed == 80)' in C#?",
      "options": [
        "Compiler error CS0029: Cannot implicitly convert type 'int' to 'bool'",
        "The code compiles and executes silently",
        "Visual Studio converts speed to a string",
        "A warning is logged but execution proceeds"
      ],
      "opts": [
        "Compiler error CS0029: Cannot implicitly convert type 'int' to 'bool'",
        "The code compiles and executes silently",
        "Visual Studio converts speed to a string",
        "A warning is logged but execution proceeds"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "'=' is the assignment operator. 'speed = 80' returns an int (80), which cannot be implicitly converted to the bool required by an if statement.",
      "explanation": "'=' is the assignment operator. 'speed = 80' returns an int (80), which cannot be implicitly converted to the bool required by an if statement.",
      "provenance": "Gaddis 4th Ed §4.2",
      "marks": 2
    },
    {
      "id": "q_su3_240",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5 (Vaal River Cruises), which GUI control is used to present the three available cruise route options for selection?",
      "title": "In Practical 5 (Vaal River Cruises), which GUI control is used to present the three available cruise route options for selection?",
      "options": [
        "TextBox (txtRoutes)",
        "ListBox (lstRoutes)",
        "PictureBox (picRoutes)",
        "Timer (tmrRoutes)"
      ],
      "opts": [
        "TextBox (txtRoutes)",
        "ListBox (lstRoutes)",
        "PictureBox (picRoutes)",
        "Timer (tmrRoutes)"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Practical 5 GUI requirements mandate a ListBox (lstRoutes) displaying Sunset Leisure Cruise (R250), Speedboat Adventure (R400), and Private Pontoon Charter (R800).",
      "explanation": "Practical 5 GUI requirements mandate a ListBox (lstRoutes) displaying Sunset Leisure Cruise (R250), Speedboat Adventure (R400), and Private Pontoon Charter (R800).",
      "provenance": "NWU Practical 5 GUI Requirements",
      "marks": 2
    },
    {
      "id": "q_su3_241",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what C# condition verifies that the user has selected at least one cruise route from lstRoutes before processing a booking?",
      "title": "In Practical 5, what C# condition verifies that the user has selected at least one cruise route from lstRoutes before processing a booking?",
      "options": [
        "lstRoutes.Items.Count > 0",
        "lstRoutes.Text == \"Selected\"",
        "lstRoutes.SelectedIndex != -1",
        "lstRoutes.Focused == true"
      ],
      "opts": [
        "lstRoutes.Items.Count > 0",
        "lstRoutes.Text == \"Selected\"",
        "lstRoutes.SelectedIndex != -1",
        "lstRoutes.Focused == true"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "When no item is selected in a ListBox, SelectedIndex is -1. Checking 'SelectedIndex != -1' ensures a valid item has been picked.",
      "explanation": "When no item is selected in a ListBox, SelectedIndex is -1. Checking 'SelectedIndex != -1' ensures a valid item has been picked.",
      "provenance": "NWU Practical 5 Technical Requirements §2",
      "marks": 2
    },
    {
      "id": "q_su3_242",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What value does the SelectedIndex property of a ListBox hold when the user has NOT selected any item?",
      "title": "What value does the SelectedIndex property of a ListBox hold when the user has NOT selected any item?",
      "options": [
        "0",
        "null",
        "999",
        "-1"
      ],
      "opts": [
        "0",
        "null",
        "999",
        "-1"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "SelectedIndex is 0-indexed. When no selection exists, it defaults to -1.",
      "explanation": "SelectedIndex is 0-indexed. When no selection exists, it defaults to -1.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su3_243",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what is the base ticket price per person for 'Sunset Leisure Cruise' (ListBox index 0)?",
      "title": "In Practical 5, what is the base ticket price per person for 'Sunset Leisure Cruise' (ListBox index 0)?",
      "options": [
        "R 250",
        "R 400",
        "R 800",
        "R 150"
      ],
      "opts": [
        "R 250",
        "R 400",
        "R 800",
        "R 150"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Practical 5 scenario specifies: Sunset Leisure Cruise = R250 per person.",
      "explanation": "The Practical 5 scenario specifies: Sunset Leisure Cruise = R250 per person.",
      "provenance": "NWU Practical 5 GUI Requirements",
      "marks": 2
    },
    {
      "id": "q_su3_244",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what is the base ticket price per person for 'Speedboat Adventure' (ListBox index 1)?",
      "title": "In Practical 5, what is the base ticket price per person for 'Speedboat Adventure' (ListBox index 1)?",
      "options": [
        "R 250",
        "R 400",
        "R 800",
        "R 500"
      ],
      "opts": [
        "R 250",
        "R 400",
        "R 800",
        "R 500"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The Practical 5 scenario specifies: Speedboat Adventure = R400 per person.",
      "explanation": "The Practical 5 scenario specifies: Speedboat Adventure = R400 per person.",
      "provenance": "NWU Practical 5 GUI Requirements",
      "marks": 2
    },
    {
      "id": "q_su3_245",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what is the base ticket price per person for 'Private Pontoon Charter' (ListBox index 2)?",
      "title": "In Practical 5, what is the base ticket price per person for 'Private Pontoon Charter' (ListBox index 2)?",
      "options": [
        "R 250",
        "R 400",
        "R 800",
        "R 1200"
      ],
      "opts": [
        "R 250",
        "R 400",
        "R 800",
        "R 1200"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The Practical 5 scenario specifies: Private Pontoon Charter = R800 per person.",
      "explanation": "The Practical 5 scenario specifies: Private Pontoon Charter = R800 per person.",
      "provenance": "NWU Practical 5 GUI Requirements",
      "marks": 2
    },
    {
      "id": "q_su3_246",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, how should the base ticket price be determined using a switch statement on the selected route?",
      "title": "In Practical 5, how should the base ticket price be determined using a switch statement on the selected route?",
      "options": [
        "switch (txtPassengers.Text) { case \"1\": price = 250m; break; }",
        "switch (btnBook.Text) { case \"Book\": price = 250m; break; }",
        "switch (this.BackColor) { case Color.Orange: price = 400m; break; }",
        "switch (lstRoutes.SelectedIndex) { case 0: price = 250m; break; case 1: price = 400m; break; case 2: price = 800m; break; }"
      ],
      "opts": [
        "switch (txtPassengers.Text) { case \"1\": price = 250m; break; }",
        "switch (btnBook.Text) { case \"Book\": price = 250m; break; }",
        "switch (this.BackColor) { case Color.Orange: price = 400m; break; }",
        "switch (lstRoutes.SelectedIndex) { case 0: price = 250m; break; case 1: price = 400m; break; case 2: price = 800m; break; }"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Practical 5 explicitly requires a switch statement evaluating the ListBox route selection to assign the base ticket price per person.",
      "explanation": "Practical 5 explicitly requires a switch statement evaluating the ListBox route selection to assign the base ticket price per person.",
      "provenance": "NWU Practical 5 Technical Requirements §2",
      "marks": 2
    },
    {
      "id": "q_su3_247",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In C#, what happens if a case block in a switch statement contains executable statements but omits a break, return, or goto statement?",
      "title": "In C#, what happens if a case block in a switch statement contains executable statements but omits a break, return, or goto statement?",
      "options": [
        "Compiler error CS0163: Control cannot fall through from one case label to another",
        "The code falls through silently to the next case as in C++",
        "Visual Studio automatically inserts a break statement",
        "The application throws a SwitchFallthroughException at runtime"
      ],
      "opts": [
        "Compiler error CS0163: Control cannot fall through from one case label to another",
        "The code falls through silently to the next case as in C++",
        "Visual Studio automatically inserts a break statement",
        "The application throws a SwitchFallthroughException at runtime"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Unlike C/C++, C# enforces strict no-fall-through semantics. Every non-empty case block must end with a jump statement like break or return.",
      "explanation": "Unlike C/C++, C# enforces strict no-fall-through semantics. Every non-empty case block must end with a jump statement like break or return.",
      "provenance": "Gaddis 4th Ed §4.8",
      "marks": 2
    },
    {
      "id": "q_su3_248",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what discount rule is applied to passenger group bookings?",
      "title": "In Practical 5, what discount rule is applied to passenger group bookings?",
      "options": [
        "If passenger count is 10 or more, apply a 20% discount",
        "If the validated passenger count is 6 or more, apply a 10% discount to the total bill",
        "All bookings on weekends receive 50% discount",
        "Only children receive discounts"
      ],
      "opts": [
        "If passenger count is 10 or more, apply a 20% discount",
        "If the validated passenger count is 6 or more, apply a 10% discount to the total bill",
        "All bookings on weekends receive 50% discount",
        "Only children receive discounts"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Practical 5 requirement §4 states: 'Group Discount: If the validated passenger count is 6 or more, apply a 10% discount to the total bill.'",
      "explanation": "Practical 5 requirement §4 states: 'Group Discount: If the validated passenger count is 6 or more, apply a 10% discount to the total bill.'",
      "provenance": "NWU Practical 5 Technical Requirements §4",
      "marks": 2
    },
    {
      "id": "q_su3_249",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what visual GUI modification is wired to the CheckedChanged event of the time slot RadioButtons?",
      "title": "In Practical 5, what visual GUI modification is wired to the CheckedChanged event of the time slot RadioButtons?",
      "options": [
        "The form minimizes immediately",
        "All textboxes are disabled",
        "If Sunset is checked, set this.BackColor = Color.Orange; otherwise set it to Color.PowderBlue",
        "The ListBox font changes to Comic Sans"
      ],
      "opts": [
        "The form minimizes immediately",
        "All textboxes are disabled",
        "If Sunset is checked, set this.BackColor = Color.Orange; otherwise set it to Color.PowderBlue",
        "The ListBox font changes to Comic Sans"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Practical 5 requirement §3 mandates: 'If Sunset / Evening is selected, the form background colour must change to orange otherwise powdered blue.'",
      "explanation": "Practical 5 requirement §3 mandates: 'If Sunset / Evening is selected, the form background colour must change to orange otherwise powdered blue.'",
      "provenance": "NWU Practical 5 Technical Requirements §3",
      "marks": 2
    },
    {
      "id": "q_su3_250",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Why are RadioButtons inside the same container mutually exclusive by default?",
      "title": "Why are RadioButtons inside the same container mutually exclusive by default?",
      "options": [
        "RadioButtons delete other buttons when clicked",
        "RadioButtons can only hold numbers",
        "Only one button can be visible at a time",
        "Windows Forms ensures that checking any one RadioButton in a shared parent automatically unchecks all other RadioButtons in that container"
      ],
      "opts": [
        "RadioButtons delete other buttons when clicked",
        "RadioButtons can only hold numbers",
        "Only one button can be visible at a time",
        "Windows Forms ensures that checking any one RadioButton in a shared parent automatically unchecks all other RadioButtons in that container"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "RadioButtons represent mutually exclusive choices: selecting one unselects all sibling RadioButtons sharing the same parent container.",
      "explanation": "RadioButtons represent mutually exclusive choices: selecting one unselects all sibling RadioButtons sharing the same parent container.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_251",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "If an application requires two separate independent groups of RadioButtons on the same form (e.g. TimeSlot and PaymentMethod), how should they be designed?",
      "title": "If an application requires two separate independent groups of RadioButtons on the same form (e.g. TimeSlot and PaymentMethod), how should they be designed?",
      "options": [
        "Place each group inside its own container control, such as a GroupBox or Panel",
        "Use CheckBoxes instead of RadioButtons",
        "Separate them with empty labels",
        "Place them on different monitor displays"
      ],
      "opts": [
        "Place each group inside its own container control, such as a GroupBox or Panel",
        "Use CheckBoxes instead of RadioButtons",
        "Separate them with empty labels",
        "Place them on different monitor displays"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Placing RadioButton sets into distinct container controls (like GroupBoxes) isolates their mutual exclusivity to that container.",
      "explanation": "Placing RadioButton sets into distinct container controls (like GroupBoxes) isolates their mutual exclusivity to that container.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_252",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is the primary operational difference between a RadioButton and a CheckBox?",
      "title": "What is the primary operational difference between a RadioButton and a CheckBox?",
      "options": [
        "RadioButtons are square while CheckBoxes are circular",
        "RadioButtons allow only one selection from a mutually exclusive group, whereas CheckBoxes allow multiple independent options to be checked simultaneously",
        "CheckBoxes cannot be clicked with a mouse",
        "RadioButtons do not have a Checked property"
      ],
      "opts": [
        "RadioButtons are square while CheckBoxes are circular",
        "RadioButtons allow only one selection from a mutually exclusive group, whereas CheckBoxes allow multiple independent options to be checked simultaneously",
        "CheckBoxes cannot be clicked with a mouse",
        "RadioButtons do not have a Checked property"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "RadioButtons force a 1-of-N mutually exclusive choice; CheckBoxes represent independent binary (on/off) toggles allowing 0, 1, or many selections.",
      "explanation": "RadioButtons force a 1-of-N mutually exclusive choice; CheckBoxes represent independent binary (on/off) toggles allowing 0, 1, or many selections.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_253",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what input validation rule must be enforced on txtPassengers before calculating ticket totals?",
      "title": "In Practical 5, what input validation rule must be enforced on txtPassengers before calculating ticket totals?",
      "options": [
        "It must be an even number",
        "It cannot exceed 2 passengers",
        "It must parse to an integer using int.TryParse and the resulting passenger count must be at least 1 (passengers >= 1)",
        "It must be spelled in words (e.g. 'two')"
      ],
      "opts": [
        "It must be an even number",
        "It cannot exceed 2 passengers",
        "It must parse to an integer using int.TryParse and the resulting passenger count must be at least 1 (passengers >= 1)",
        "It must be spelled in words (e.g. 'two')"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Requirement §1 mandates: 'Read passenger count from TextBox. If parsing fails or the value is less than 1, display an error message using MessageBox.Show() and set focus back.'",
      "explanation": "Requirement §1 mandates: 'Read passenger count from TextBox. If parsing fails or the value is less than 1, display an error message using MessageBox.Show() and set focus back.'",
      "provenance": "NWU Practical 5 Technical Requirements §1",
      "marks": 2
    },
    {
      "id": "q_su3_254",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, why is 'txtPassengers.Focus();' called immediately after displaying an error message for invalid passenger count?",
      "title": "In Practical 5, why is 'txtPassengers.Focus();' called immediately after displaying an error message for invalid passenger count?",
      "options": [
        "To erase the hard drive",
        "To print the error message on paper",
        "To close the form window",
        "To return the blinking cursor to the invalid textbox so the user can correct their input immediately without reaching for the mouse"
      ],
      "opts": [
        "To erase the hard drive",
        "To print the error message on paper",
        "To close the form window",
        "To return the blinking cursor to the invalid textbox so the user can correct their input immediately without reaching for the mouse"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Setting focus back to the offending control is standard defensive GUI design, reducing physical effort and cognitive friction (Shneiderman HCI).",
      "explanation": "Setting focus back to the offending control is standard defensive GUI design, reducing physical effort and cognitive friction (Shneiderman HCI).",
      "provenance": "NWU Practical 5 Technical Requirements §1 & HCI",
      "marks": 2
    },
    {
      "id": "q_su3_255",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What does calling 'txtPassengers.SelectAll();' do when input validation fails?",
      "title": "What does calling 'txtPassengers.SelectAll();' do when input validation fails?",
      "options": [
        "Highlights the entire text inside the textbox so typing a new character immediately overwrites the invalid input",
        "Copies the text to the Windows clipboard",
        "Selects all textboxes on the form simultaneously",
        "Deletes the textbox from the form"
      ],
      "opts": [
        "Highlights the entire text inside the textbox so typing a new character immediately overwrites the invalid input",
        "Copies the text to the Windows clipboard",
        "Selects all textboxes on the form simultaneously",
        "Deletes the textbox from the form"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "SelectAll() highlights all text in the textbox, allowing instant replacement without manually pressing backspace.",
      "explanation": "SelectAll() highlights all text in the textbox, allowing instant replacement without manually pressing backspace.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_256",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, if a vehicle was recorded traveling at 105 km/h against an 80 km/h Highway limit (25 km/h over) and the driver is a repeat offender ('yes'), what is the total fine?",
      "title": "In Practical 4, if a vehicle was recorded traveling at 105 km/h against an 80 km/h Highway limit (25 km/h over) and the driver is a repeat offender ('yes'), what is the total fine?",
      "options": [
        "R 1500",
        "R 2000 (Base R1500 + R500 repeat fine)",
        "R 3000",
        "R 3500"
      ],
      "opts": [
        "R 1500",
        "R 2000 (Base R1500 + R500 repeat fine)",
        "R 3000",
        "R 3500"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "25 km/h over lands in the 21-30 band (Severe = R1500). Highway is not built-up, so fine does not double. Repeat offender adds R500: R1500 + R500 = R2000.",
      "explanation": "25 km/h over lands in the 21-30 band (Severe = R1500). Highway is not built-up, so fine does not double. Repeat offender adds R500: R1500 + R500 = R2000.",
      "provenance": "NWU Practical Four Part B & Part C",
      "marks": 2
    },
    {
      "id": "q_su3_257",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, if a driver was recorded at 85 km/h in a 60 km/h School zone (25 km/h over) and is a repeat offender ('yes'), what is the total fine?",
      "title": "In Practical 4, if a driver was recorded at 85 km/h in a 60 km/h School zone (25 km/h over) and is a repeat offender ('yes'), what is the total fine?",
      "options": [
        "R 2000",
        "R 4000",
        "R 3500 (Base R1500 doubled to R3000, plus R500 repeat fine)",
        "R 2500"
      ],
      "opts": [
        "R 2000",
        "R 4000",
        "R 3500 (Base R1500 doubled to R3000, plus R500 repeat fine)",
        "R 2500"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "25 over in School (built-up > 20) doubles base R1500 to R3000. Repeat offender adds R500 on top: R3000 + R500 = R3500.",
      "explanation": "25 over in School (built-up > 20) doubles base R1500 to R3000. Repeat offender adds R500 on top: R3000 + R500 = R3500.",
      "provenance": "NWU Practical Four Part B & Part C",
      "marks": 2
    },
    {
      "id": "q_su3_258",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which C# expression correctly tests whether an integer variable 'mark' is between 0 and 100 inclusive?",
      "title": "Which C# expression correctly tests whether an integer variable 'mark' is between 0 and 100 inclusive?",
      "options": [
        "0 <= mark <= 100",
        "mark >= 0 || mark <= 100",
        "mark BETWEEN 0 AND 100",
        "mark >= 0 && mark <= 100"
      ],
      "opts": [
        "0 <= mark <= 100",
        "mark >= 0 || mark <= 100",
        "mark BETWEEN 0 AND 100",
        "mark >= 0 && mark <= 100"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "In C#, range boundary checks must be joined by the '&&' operator: 'mark >= 0 && mark <= 100'.",
      "explanation": "In C#, range boundary checks must be joined by the '&&' operator: 'mark >= 0 && mark <= 100'.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_259",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Why does the expression '0 <= mark <= 100' cause a compilation error in C#?",
      "title": "Why does the expression '0 <= mark <= 100' cause a compilation error in C#?",
      "options": [
        "C# evaluates left-to-right: '0 <= mark' produces a boolean, and comparing a boolean to an integer ('bool <= 100') is illegal syntax",
        "Numbers cannot be compared to 0 in C#",
        "The '<=' operator can only be used once per line",
        "C# requires all inequalities to use the word 'AND'"
      ],
      "opts": [
        "C# evaluates left-to-right: '0 <= mark' produces a boolean, and comparing a boolean to an integer ('bool <= 100') is illegal syntax",
        "Numbers cannot be compared to 0 in C#",
        "The '<=' operator can only be used once per line",
        "C# requires all inequalities to use the word 'AND'"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Binary relational operators evaluate from left to right yielding a bool. C# does not support chained mathematical inequalities.",
      "explanation": "Binary relational operators evaluate from left to right yielding a bool. C# does not support chained mathematical inequalities.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_260",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is the key functional difference between '&' and '&&' in C# boolean expressions?",
      "title": "What is the key functional difference between '&' and '&&' in C# boolean expressions?",
      "options": [
        "'&' only works on strings",
        "'&&' is short-circuiting (stops if the first operand is false), while '&' always evaluates both operands regardless of the first",
        "'&&' can only compare two variables",
        "There is no difference in C#"
      ],
      "opts": [
        "'&' only works on strings",
        "'&&' is short-circuiting (stops if the first operand is false), while '&' always evaluates both operands regardless of the first",
        "'&&' can only compare two variables",
        "There is no difference in C#"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "'&&' is the short-circuit logical AND operator, whereas '&' is the logical/bitwise AND operator that evaluates both operands unconditionally.",
      "explanation": "'&&' is the short-circuit logical AND operator, whereas '&' is the logical/bitwise AND operator that evaluates both operands unconditionally.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_261",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is the key functional difference between '|' and '||' in C# boolean expressions?",
      "title": "What is the key functional difference between '|' and '||' in C# boolean expressions?",
      "options": [
        "'|' is used for division while '||' is for addition",
        "'||' only works on numbers",
        "'||' is short-circuiting (stops if the first operand is true), while '|' always evaluates both operands unconditionally",
        "There is no difference"
      ],
      "opts": [
        "'|' is used for division while '||' is for addition",
        "'||' only works on numbers",
        "'||' is short-circuiting (stops if the first operand is true), while '|' always evaluates both operands unconditionally",
        "There is no difference"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "'||' skips evaluation of the second operand if the first is true. '|' always evaluates both sides unconditionally.",
      "explanation": "'||' skips evaluation of the second operand if the first is true. '|' always evaluates both sides unconditionally.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_262",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In a nested if structure without explicit curly braces, which 'if' statement does an 'else' clause automatically pair with?",
      "title": "In a nested if structure without explicit curly braces, which 'if' statement does an 'else' clause automatically pair with?",
      "options": [
        "The very first 'if' in the method",
        "The 'if' that appears at the same indentation level",
        "It causes a compiler syntax error",
        "The closest preceding 'if' within the same block that does not already have an associated 'else'"
      ],
      "opts": [
        "The very first 'if' in the method",
        "The 'if' that appears at the same indentation level",
        "It causes a compiler syntax error",
        "The closest preceding 'if' within the same block that does not already have an associated 'else'"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The 'dangling else' rule in C# matches an else with the nearest preceding unmatched if in the same lexical scope.",
      "explanation": "The 'dangling else' rule in C# matches an else with the nearest preceding unmatched if in the same lexical scope.",
      "provenance": "Gaddis 4th Ed §4.4",
      "marks": 2
    },
    {
      "id": "q_su3_263",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "How can a developer unambiguously resolve the 'dangling else' problem and ensure an else matches the intended outer if?",
      "title": "How can a developer unambiguously resolve the 'dangling else' problem and ensure an else matches the intended outer if?",
      "options": [
        "By enclosing the inner if statement and its body inside curly braces { }",
        "By pressing Tab three times",
        "By adding a comment above the else",
        "By declaring all variables as static"
      ],
      "opts": [
        "By enclosing the inner if statement and its body inside curly braces { }",
        "By pressing Tab three times",
        "By adding a comment above the else",
        "By declaring all variables as static"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Explicit curly braces establish clear block boundaries, leaving no ambiguity about which if statement owns the else.",
      "explanation": "Explicit curly braces establish clear block boundaries, leaving no ambiguity about which if statement owns the else.",
      "provenance": "Gaddis 4th Ed §4.4",
      "marks": 2
    },
    {
      "id": "q_su3_264",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What happens when 'bool ok = (10 > 2) || (5 / 0 == 1);' is evaluated in C#?",
      "title": "What happens when 'bool ok = (10 > 2) || (5 / 0 == 1);' is evaluated in C#?",
      "options": [
        "A DivideByZeroException crashes the application",
        "'ok' becomes true without error because short-circuit evaluation skips '(5 / 0 == 1)'",
        "The expression evaluates to false",
        "Compiler error CS0020 occurs"
      ],
      "opts": [
        "A DivideByZeroException crashes the application",
        "'ok' becomes true without error because short-circuit evaluation skips '(5 / 0 == 1)'",
        "The expression evaluates to false",
        "Compiler error CS0020 occurs"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Because 10 > 2 is true, the '||' short-circuits immediately, never evaluating the illegal division by zero.",
      "explanation": "Because 10 > 2 is true, the '||' short-circuits immediately, never evaluating the illegal division by zero.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
        {
      "id": "q_su3_265",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In defensive input validation, consider the statement:\n```csharp\nif (double.TryParse(txtTest1.Text, out double m1) && m1 >= 0 && m1 <= 100)\n```\nWhy does this code safely avoid runtime errors even if `txtTest1` is empty or non-numeric?",
      "title": "In defensive input validation, consider the statement:\n```csharp\nif (double.TryParse(txtTest1.Text, out double m1) && m1 >= 0 && m1 <= 100)\n```\nWhy does this code safely avoid runtime errors even if `txtTest1` is empty or non-numeric?",
      "options": [
        "C# TryParse automatically replaces empty strings with 100",
        "The 'out' keyword bypasses boolean evaluation entirely",
        "The '&&' operator short-circuits: if TryParse returns false, the subsequent conditions 'm1 >= 0' and 'm1 <= 100' are never evaluated",
        "The compiler converts the if statement into a background try-catch block"
      ],
      "opts": [
        "C# TryParse automatically replaces empty strings with 100",
        "The 'out' keyword bypasses boolean evaluation entirely",
        "The '&&' operator short-circuits: if TryParse returns false, the subsequent conditions 'm1 >= 0' and 'm1 <= 100' are never evaluated",
        "The compiler converts the if statement into a background try-catch block"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Logical AND ('&&') performs short-circuit evaluation. If the first operand evaluates to false (as when TryParse fails), evaluation terminates immediately, ensuring the uninitialized or default value of m1 is never erroneously validated.",
      "explanation": "Logical AND ('&&') performs short-circuit evaluation. If the first operand evaluates to false (as when TryParse fails), evaluation terminates immediately, ensuring the uninitialized or default value of m1 is never erroneously validated.",
      "provenance": "NWU Practical 29 Defensive Validation Step",
      "marks": 2
    },
    {
      "id": "q_su3_266",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In C#, what is a boolean flag variable?",
      "title": "In C#, what is a boolean flag variable?",
      "options": [
        "A variable that prints an image of the South African flag",
        "A variable that can hold three different values",
        "A variable that only exists in memory for 1 second",
        "A bool variable used to signal whether a specific condition or state has been met (e.g. bool isSpeeding = speedOver > 0;)"
      ],
      "opts": [
        "A variable that prints an image of the South African flag",
        "A variable that can hold three different values",
        "A variable that only exists in memory for 1 second",
        "A bool variable used to signal whether a specific condition or state has been met (e.g. bool isSpeeding = speedOver > 0;)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "A flag is a boolean variable whose value (true/false) indicates whether a condition has occurred or an option is active.",
      "explanation": "A flag is a boolean variable whose value (true/false) indicates whether a condition has occurred or an option is active.",
      "provenance": "Gaddis 4th Ed §4.6 & Practical Four",
      "marks": 2
    },
    {
      "id": "q_su3_267",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, if 8 passengers book 'Speedboat Adventure' (R400 per person), what is the calculated total after applying the 10% group discount?",
      "title": "In Practical 5, if 8 passengers book 'Speedboat Adventure' (R400 per person), what is the calculated total after applying the 10% group discount?",
      "options": [
        "R 2880 (Subtotal R3200 minus R320 discount)",
        "R 3200",
        "R 2500",
        "R 3000"
      ],
      "opts": [
        "R 2880 (Subtotal R3200 minus R320 discount)",
        "R 3200",
        "R 2500",
        "R 3000"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Subtotal = 8 * R400 = R3200. Because passengers >= 6, a 10% discount applies (R320). Final = R3200 - R320 = R2880.",
      "explanation": "Subtotal = 8 * R400 = R3200. Because passengers >= 6, a 10% discount applies (R320). Final = R3200 - R320 = R2880.",
      "provenance": "NWU Practical 5 Technical Requirements §4",
      "marks": 2
    },
    {
      "id": "q_su3_268",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, what C# statement in btnClear_Click deselects any currently selected item in lstRoutes?",
      "title": "In Practical 5, what C# statement in btnClear_Click deselects any currently selected item in lstRoutes?",
      "options": [
        "lstRoutes.SelectedItem = \"None\";",
        "lstRoutes.SelectedIndex = -1;",
        "lstRoutes.Items.Delete();",
        "lstRoutes.ClearSelectedItems = true;"
      ],
      "opts": [
        "lstRoutes.SelectedItem = \"None\";",
        "lstRoutes.SelectedIndex = -1;",
        "lstRoutes.Items.Delete();",
        "lstRoutes.ClearSelectedItems = true;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Setting SelectedIndex to -1 removes any active highlighting, leaving no item selected in the ListBox.",
      "explanation": "Setting SelectedIndex to -1 removes any active highlighting, leaving no item selected in the ListBox.",
      "provenance": "NWU Practical 5 GUI Requirements & Gaddis §4.11",
      "marks": 2
    },
    {
      "id": "q_su3_269",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What statement completely empties all entries from a ListBox named lstRoutes?",
      "title": "What statement completely empties all entries from a ListBox named lstRoutes?",
      "options": [
        "lstRoutes.Clear();",
        "lstRoutes.Items.RemoveAll();",
        "lstRoutes.Items.Clear();",
        "lstRoutes.Reset();"
      ],
      "opts": [
        "lstRoutes.Clear();",
        "lstRoutes.Items.RemoveAll();",
        "lstRoutes.Items.Clear();",
        "lstRoutes.Reset();"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The Items collection of a ListBox exposes Clear() to remove all member objects.",
      "explanation": "The Items collection of a ListBox exposes Clear() to remove all member objects.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su3_270",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "How can an event handler check whether a RadioButton named 'radSunset' is currently selected by the user?",
      "title": "How can an event handler check whether a RadioButton named 'radSunset' is currently selected by the user?",
      "options": [
        "if (radSunset.Selected == 1)",
        "if (radSunset.Text == \"True\")",
        "if (radSunset.Value == true)",
        "if (radSunset.Checked)"
      ],
      "opts": [
        "if (radSunset.Selected == 1)",
        "if (radSunset.Text == \"True\")",
        "if (radSunset.Value == true)",
        "if (radSunset.Checked)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The 'Checked' property of a RadioButton is a boolean returning true if selected, false otherwise.",
      "explanation": "The 'Checked' property of a RadioButton is a boolean returning true if selected, false otherwise.",
      "provenance": "Gaddis 4th Ed §4.7",
      "marks": 2
    },
    {
      "id": "q_su3_271",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Which C# property sets or gets the background surface color of a Windows Form?",
      "title": "Which C# property sets or gets the background surface color of a Windows Form?",
      "options": [
        "this.BackColor",
        "this.Color",
        "this.BackgroundFill",
        "this.CanvasColor"
      ],
      "opts": [
        "this.BackColor",
        "this.Color",
        "this.BackgroundFill",
        "this.CanvasColor"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The BackColor property determines the background color of forms and controls in Windows Forms.",
      "explanation": "The BackColor property determines the background color of forms and controls in Windows Forms.",
      "provenance": "Gaddis 4th Ed §2.2 & Practical 5",
      "marks": 2
    },
    {
      "id": "q_su3_272",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "When should a developer prefer a C# switch statement over a long chain of if-else-if statements?",
      "title": "When should a developer prefer a C# switch statement over a long chain of if-else-if statements?",
      "options": [
        "When checking complex relational inequalities with multiple variables (e.g. x > 5 && y < 10)",
        "When testing a single discrete variable (like an int, string, or char) against multiple constant candidate values",
        "When repeating code 100 times",
        "When reading from a file"
      ],
      "opts": [
        "When checking complex relational inequalities with multiple variables (e.g. x > 5 && y < 10)",
        "When testing a single discrete variable (like an int, string, or char) against multiple constant candidate values",
        "When repeating code 100 times",
        "When reading from a file"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Switch statements are designed for multi-way branching based on equality testing of a single selector expression against discrete constant values.",
      "explanation": "Switch statements are designed for multi-way branching based on equality testing of a single selector expression against discrete constant values.",
      "provenance": "Gaddis 4th Ed §4.8",
      "marks": 2
    },
    {
      "id": "q_su3_273",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What is the purpose of the 'default:' section in a C# switch statement?",
      "title": "What is the purpose of the 'default:' section in a C# switch statement?",
      "options": [
        "It executes before every other case",
        "It runs only if an exception is thrown",
        "It executes when none of the explicitly defined case constants match the evaluated selector value",
        "It defines the default background color of the form"
      ],
      "opts": [
        "It executes before every other case",
        "It runs only if an exception is thrown",
        "It executes when none of the explicitly defined case constants match the evaluated selector value",
        "It defines the default background color of the form"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The default section is the fallback branch in a switch statement, analogous to the trailing else in an if-else-if chain.",
      "explanation": "The default section is the fallback branch in a switch statement, analogous to the trailing else in an if-else-if chain.",
      "provenance": "Gaddis 4th Ed §4.8",
      "marks": 2
    },
    {
      "id": "q_su3_274",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 4, if a vehicle is recorded traveling at exactly 60 km/h in a 60 km/h zone, what band and fine apply?",
      "title": "In Practical 4, if a vehicle is recorded traveling at exactly 60 km/h in a 60 km/h zone, what band and fine apply?",
      "options": [
        "speedOver is 0; category is \"Minor\" and fine is R250",
        "speedOver is 1; category is \"Serious\"",
        "A warning letter is printed",
        "speedOver is 0; category is \"Within the limit\" and fine is \"No fine. Safe driving.\""
      ],
      "opts": [
        "speedOver is 0; category is \"Minor\" and fine is R250",
        "speedOver is 1; category is \"Serious\"",
        "A warning letter is printed",
        "speedOver is 0; category is \"Within the limit\" and fine is \"No fine. Safe driving.\""
      ],
      "answer": 3,
      "ans": 3,
      "exp": "60 - 60 = 0. When speedOver <= 0, the driver is within the limit, incurring no fine.",
      "explanation": "60 - 60 = 0. When speedOver <= 0, the driver is within the limit, incurring no fine.",
      "provenance": "NWU Practical Four Part B",
      "marks": 2
    },
    {
      "id": "q_su3_275",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "Why does 'txtZone.Text == \"School\"' evaluate to false if the officer typed 'school' with a lowercase 's'?",
      "title": "Why does 'txtZone.Text == \"School\"' evaluate to false if the officer typed 'school' with a lowercase 's'?",
      "options": [
        "C# string comparisons using the equality operator (==) are strictly case-sensitive",
        "Strings cannot be compared using ==",
        "Visual Studio automatically capitalizes all text",
        "TextBoxes do not support lowercase letters"
      ],
      "opts": [
        "C# string comparisons using the equality operator (==) are strictly case-sensitive",
        "Strings cannot be compared using ==",
        "Visual Studio automatically capitalizes all text",
        "TextBoxes do not support lowercase letters"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "String equality in C# compares characters by their exact Unicode/ASCII values; 'S' (ASCII 83) does not equal 's' (ASCII 115).",
      "explanation": "String equality in C# compares characters by their exact Unicode/ASCII values; 'S' (ASCII 83) does not equal 's' (ASCII 115).",
      "provenance": "Gaddis 4th Ed §4.9 & Practical Four",
      "marks": 2
    },
    {
      "id": "q_su3_276",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "How can a C# string comparison be performed in a case-insensitive manner?",
      "title": "How can a C# string comparison be performed in a case-insensitive manner?",
      "options": [
        "txtZone.Text = \"school\"",
        "txtZone.Text.ToLower() == \"school\"",
        "txtZone.Text.NoCase()",
        "txtZone.Text.IgnoreCaps()"
      ],
      "opts": [
        "txtZone.Text = \"school\"",
        "txtZone.Text.ToLower() == \"school\"",
        "txtZone.Text.NoCase()",
        "txtZone.Text.IgnoreCaps()"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Converting both strings to lower case (using .ToLower()) normalizes character casing, allowing reliable case-insensitive equality comparison.",
      "explanation": "Converting both strings to lower case (using .ToLower()) normalizes character casing, allowing reliable case-insensitive equality comparison.",
      "provenance": "Gaddis 4th Ed §4.9",
      "marks": 2
    },
    {
      "id": "q_su3_277",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "What does the C# conditional (ternary) operator 'condition ? expr1 : expr2' do?",
      "title": "What does the C# conditional (ternary) operator 'condition ? expr1 : expr2' do?",
      "options": [
        "Repeats expr1 while condition is true",
        "Declares a three-dimensional array",
        "Evaluates the condition and returns expr1 if true, or expr2 if false",
        "Prints both expressions to a label"
      ],
      "opts": [
        "Repeats expr1 while condition is true",
        "Declares a three-dimensional array",
        "Evaluates the condition and returns expr1 if true, or expr2 if false",
        "Prints both expressions to a label"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The conditional ternary operator (?:) provides a concise single-line expression alternative to a dual-alternative if-else statement.",
      "explanation": "The conditional ternary operator (?:) provides a concise single-line expression alternative to a dual-alternative if-else statement.",
      "provenance": "Gaddis 4th Ed §4.8",
      "marks": 2
    },
    {
      "id": "q_su3_278",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "In Practical 5, how does the Clear button reset the form background color back to its standard Windows theme color?",
      "title": "In Practical 5, how does the Clear button reset the form background color back to its standard Windows theme color?",
      "options": [
        "this.BackColor = Color.White;",
        "this.BackColor = Color.None;",
        "this.ResetColor();",
        "this.BackColor = SystemColors.Control;"
      ],
      "opts": [
        "this.BackColor = Color.White;",
        "this.BackColor = Color.None;",
        "this.ResetColor();",
        "this.BackColor = SystemColors.Control;"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "SystemColors.Control represents the standard default background color of Windows Forms surfaces.",
      "explanation": "SystemColors.Control represents the standard default background color of Windows Forms surfaces.",
      "provenance": "NWU Practical 5 GUI Requirements",
      "marks": 2
    },
    {
      "id": "q_su3_279",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "According to De Morgan's Laws, what is the logical equivalent of '!(A && B)'?",
      "title": "According to De Morgan's Laws, what is the logical equivalent of '!(A && B)'?",
      "options": [
        "!A || !B",
        "!A && !B",
        "A || B",
        "!A && B"
      ],
      "opts": [
        "!A || !B",
        "!A && !B",
        "A || B",
        "!A && B"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "De Morgan's Laws state: the negation of a conjunction '!(A && B)' is logically equivalent to the disjunction of the negations '!A || !B'.",
      "explanation": "De Morgan's Laws state: the negation of a conjunction '!(A && B)' is logically equivalent to the disjunction of the negations '!A || !B'.",
      "provenance": "Gaddis 4th Ed §4.5",
      "marks": 2
    },
    {
      "id": "q_su3_280",
      "ch": "SU3",
      "su": "SU3",
      "type": "mcq",
      "q": "According to De Morgan's Laws, what is the logical equivalent of '!(A || B)'?",
      "title": "According to De Morgan's Laws, what is the logical equivalent of '!(A || B)'?",
      "options": [
        "!A || !B",
        "!A && !B",
        "A && B",
        "!A || B"
      ],
      "opts": [
        "!A || !B",
        "!A && !B",
        "A && B",
        "!A || B"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "De Morgan's Laws state: the negation of a disjunction '!(A || B)' is logically equivalent to the conjunction of the negations '!A && !B'.",
      "explanation": "De Morgan's Laws state: the negation of a disjunction '!(A || B)' is logically equivalent to the conjunction of the negations '!A && !B'.",
      "provenance": "Gaddis 4th Ed §4.5",
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
      "q": "In Visual C#, what is the fundamental behavioral difference between a 'while' loop and a 'do-while' loop?",
      "title": "In Visual C#, what is the fundamental behavioral difference between a 'while' loop and a 'do-while' loop?",
      "options": [
        "A 'while' loop can only count backwards",
        "A 'do-while' loop cannot contain if statements",
        "A 'while' loop requires an array to run",
        "A 'while' loop tests its condition before each iteration (pre-test) and may execute zero times, whereas a 'do-while' loop tests its condition after each iteration (post-test) and always executes at least once"
      ],
      "opts": [
        "A 'while' loop can only count backwards",
        "A 'do-while' loop cannot contain if statements",
        "A 'while' loop requires an array to run",
        "A 'while' loop tests its condition before each iteration (pre-test) and may execute zero times, whereas a 'do-while' loop tests its condition after each iteration (post-test) and always executes at least once"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Pre-test loops (while, for) evaluate conditions prior to body entry; post-test loops (do-while) evaluate after body execution, guaranteeing at least one run.",
      "explanation": "Pre-test loops (while, for) evaluate conditions prior to body entry; post-test loops (do-while) evaluate after body execution, guaranteeing at least one run.",
      "provenance": "Gaddis 4th Ed §5.2 & §5.3",
      "marks": 2
    },
    {
      "id": "q_su4_297",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Why does C# syntax require a terminating semicolon after the condition in a do-while loop ('do { ... } while (condition);')?",
      "title": "Why does C# syntax require a terminating semicolon after the condition in a do-while loop ('do { ... } while (condition);')?",
      "options": [
        "The semicolon is required by C# grammar to mark the formal end of the do-while statement",
        "It pauses execution for one second",
        "It resets all local variables to zero",
        "It forces the loop to iterate an infinite number of times"
      ],
      "opts": [
        "The semicolon is required by C# grammar to mark the formal end of the do-while statement",
        "It pauses execution for one second",
        "It resets all local variables to zero",
        "It forces the loop to iterate an infinite number of times"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Because the loop condition appears at the bottom of the block, C# syntax mandates a semicolon to terminate the do-while statement.",
      "explanation": "Because the loop condition appears at the bottom of the block, C# syntax mandates a semicolon to terminate the do-while statement.",
      "provenance": "Gaddis 4th Ed §5.3",
      "marks": 2
    },
    {
      "id": "q_su4_298",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What are the three control expressions defined inside a standard C# for loop header: 'for (1; 2; 3)'?",
      "title": "What are the three control expressions defined inside a standard C# for loop header: 'for (1; 2; 3)'?",
      "options": [
        "1: Input textbox, 2: Output label, 3: Button",
        "1: Initialization expression, 2: Boolean test condition, 3: Update/increment expression",
        "1: File name, 2: File size, 3: File type",
        "1: Start point, 2: Font size, 3: Form title"
      ],
      "opts": [
        "1: Input textbox, 2: Output label, 3: Button",
        "1: Initialization expression, 2: Boolean test condition, 3: Update/increment expression",
        "1: File name, 2: File size, 3: File type",
        "1: Start point, 2: Font size, 3: Form title"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The for loop header consists of: initialization (runs once), test condition (checked before each iteration), and update (executed after each iteration).",
      "explanation": "The for loop header consists of: initialization (runs once), test condition (checked before each iteration), and update (executed after each iteration).",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_299",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In what exact chronological order are the components of a 'for' loop executed during the very first iteration?",
      "title": "In what exact chronological order are the components of a 'for' loop executed during the very first iteration?",
      "options": [
        "Update -> Initialization -> Condition test -> Loop body",
        "Loop body -> Condition test -> Initialization -> Update",
        "Initialization -> Boolean condition test -> Loop body execution -> Update expression",
        "Initialization -> Update -> Loop body -> Condition test"
      ],
      "opts": [
        "Update -> Initialization -> Condition test -> Loop body",
        "Loop body -> Condition test -> Initialization -> Update",
        "Initialization -> Boolean condition test -> Loop body execution -> Update expression",
        "Initialization -> Update -> Loop body -> Condition test"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Initialization runs first. The condition is evaluated; if true, the body executes, followed by the update expression.",
      "explanation": "Initialization runs first. The condition is evaluated; if true, the body executes, followed by the update expression.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_300",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In what exact sequence do components of a 'for' loop execute during the second and subsequent iterations?",
      "title": "In what exact sequence do components of a 'for' loop execute during the second and subsequent iterations?",
      "options": [
        "Initialization -> Boolean condition test -> Loop body",
        "Loop body -> Initialization -> Update",
        "Update -> Initialization -> Boolean test",
        "Boolean condition test -> Loop body execution -> Update expression"
      ],
      "opts": [
        "Initialization -> Boolean condition test -> Loop body",
        "Loop body -> Initialization -> Update",
        "Update -> Initialization -> Boolean test",
        "Boolean condition test -> Loop body execution -> Update expression"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "After iteration 1, initialization never runs again. Each subsequent cycle runs: condition check, loop body (if true), and update expression.",
      "explanation": "After iteration 1, initialization never runs again. Each subsequent cycle runs: condition check, loop body (if true), and update expression.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_301",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is the operational difference between postfix increment ('count++') and prefix increment ('++count') when used inside an expression?",
      "title": "What is the operational difference between postfix increment ('count++') and prefix increment ('++count') when used inside an expression?",
      "options": [
        "Postfix ('count++') uses the current value in the surrounding expression first, then increments; prefix ('++count') increments first, then uses the updated value",
        "Postfix only works with negative numbers",
        "Prefix adds 2 instead of 1",
        "Postfix creates an infinite loop"
      ],
      "opts": [
        "Postfix ('count++') uses the current value in the surrounding expression first, then increments; prefix ('++count') increments first, then uses the updated value",
        "Postfix only works with negative numbers",
        "Prefix adds 2 instead of 1",
        "Postfix creates an infinite loop"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Postfix evaluates then increments. Prefix increments then evaluates.",
      "explanation": "Postfix evaluates then increments. Prefix increments then evaluates.",
      "provenance": "Gaddis 4th Ed §5.1",
      "marks": 2
    },
        {
      "id": "q_su4_302",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Consider the following loop calculating the average mark of test scores stored in a ListBox named `lstMarks`:\n```csharp\ndouble total = 0;\nfor (int i = 0; i < lstMarks.Items.Count; i++)\n{\n    total += double.Parse(lstMarks.Items[i].ToString());\n}\ndouble average = total / lstMarks.Items.Count;\n```\nIf `lstMarks.Items` contains the marks `70`, `80`, and `90`, what are the values of `total` and `average` upon loop termination?",
      "title": "Consider the following loop calculating the average mark of test scores stored in a ListBox named `lstMarks`:\n```csharp\ndouble total = 0;\nfor (int i = 0; i < lstMarks.Items.Count; i++)\n{\n    total += double.Parse(lstMarks.Items[i].ToString());\n}\ndouble average = total / lstMarks.Items.Count;\n```\nIf `lstMarks.Items` contains the marks `70`, `80`, and `90`, what are the values of `total` and `average` upon loop termination?",
      "options": [
        "total = 240.0; average = 0.0",
        "total = 240.0; average = 80.0",
        "total = 90.0; average = 30.0",
        "total = 170.0; average = 56.67"
      ],
      "opts": [
        "total = 240.0; average = 0.0",
        "total = 240.0; average = 80.0",
        "total = 90.0; average = 30.0",
        "total = 170.0; average = 56.67"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The loop accumulates all 3 items: total = 0 + 70 + 80 + 90 = 240.0. After the loop, average = 240.0 / 3 = 80.0 (Tony Gaddis Chapter 5).",
      "explanation": "The loop accumulates all 3 items: total = 0 + 70 + 80 + 90 = 240.0. After the loop, average = 240.0 / 3 = 80.0 (Tony Gaddis Chapter 5).",
      "provenance": "NWU Practical 29 Accumulator Loop Step",
      "marks": 2
    },
    {
      "id": "q_su4_303",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What compiler error occurs if an accumulator variable 'decimal total;' is declared inside an event handler but not initialized before being used inside a loop ('total += amount;')?",
      "title": "What compiler error occurs if an accumulator variable 'decimal total;' is declared inside an event handler but not initialized before being used inside a loop ('total += amount;')?",
      "options": [
        "Compiler error CS1002: Semicolon expected",
        "Compiler error CS0029: Cannot convert double to int",
        "Compiler error CS0165: Use of unassigned local variable 'total'",
        "Compiler error CS0103: The name 'total' does not exist"
      ],
      "opts": [
        "Compiler error CS1002: Semicolon expected",
        "Compiler error CS0029: Cannot convert double to int",
        "Compiler error CS0165: Use of unassigned local variable 'total'",
        "Compiler error CS0103: The name 'total' does not exist"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "C# requires local variables to be assigned before reading. An accumulator must be initialized (e.g. 'decimal total = 0m;') prior to entering the loop.",
      "explanation": "C# requires local variables to be assigned before reading. An accumulator must be initialized (e.g. 'decimal total = 0m;') prior to entering the loop.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
        {
      "id": "q_su4_304",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Consider the C# loop header: `for (int count = 1; count <= 10; count++)`. What is the formal role of `count`, and what is its value when the loop terminates?",
      "title": "Consider the C# loop header: `for (int count = 1; count <= 10; count++)`. What is the formal role of `count`, and what is its value when the loop terminates?",
      "options": [
        "It is an accumulator variable that sums the numbers 1 to 10, terminating with value 55",
        "It is a counter variable initialized to 1, incremented by 1 each iteration, and its value is 10 because the loop condition specifies count <= 10",
        "It is a counter variable initialized to 1, incremented by 1 each iteration, and its value is 11 when the loop condition evaluates to false and terminates",
        "It is a sentinel variable that terminates when the user enters a sentinel exit condition"
      ],
      "opts": [
        "It is an accumulator variable that sums the numbers 1 to 10, terminating with value 55",
        "It is a counter variable initialized to 1, incremented by 1 each iteration, and its value is 10 because the loop condition specifies count <= 10",
        "It is a counter variable initialized to 1, incremented by 1 each iteration, and its value is 11 when the loop condition evaluates to false and terminates",
        "It is a sentinel variable that terminates when the user enters a sentinel exit condition"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "In a count-controlled for loop, 'count' is the loop control variable (counter). It increments after each iteration body executes, and when count reaches 11, the condition 'count <= 10' becomes false, exiting the loop (Tony Gaddis Chapter 5).",
      "explanation": "In a count-controlled for loop, 'count' is the loop control variable (counter). It increments after each iteration body executes, and when count reaches 11, the condition 'count <= 10' becomes false, exiting the loop (Tony Gaddis Chapter 5).",
      "provenance": "Tony Gaddis Chapter 5 Step",
      "marks": 2
    },
    {
      "id": "q_su4_305",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is a sentinel value in C# repetition structures?",
      "title": "What is a sentinel value in C# repetition structures?",
      "options": [
        "A distinctive placeholder value (such as -1 or 999) that signals the end of user data input and prompts loop termination",
        "The maximum value an integer can store",
        "A virus detection routine in .NET",
        "The name of the main form in a project"
      ],
      "opts": [
        "A distinctive placeholder value (such as -1 or 999) that signals the end of user data input and prompts loop termination",
        "The maximum value an integer can store",
        "A virus detection routine in .NET",
        "The name of the main form in a project"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A sentinel is an agreed-upon special value outside the normal range of input data that signals when a loop should stop accepting input.",
      "explanation": "A sentinel is an agreed-upon special value outside the normal range of input data that signals when a loop should stop accepting input.",
      "provenance": "Gaddis 4th Ed §5.6",
      "marks": 2
    },
    {
      "id": "q_su4_306",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is the primary cause of an infinite loop in a while loop construct?",
      "title": "What is the primary cause of an infinite loop in a while loop construct?",
      "options": [
        "The form is minimized by the user",
        "The loop continuation condition never evaluates to false, often because the counter update statement was omitted from the loop body",
        "The computer has insufficient hard drive space",
        "A button on the form has its Visible property set to false"
      ],
      "opts": [
        "The form is minimized by the user",
        "The loop continuation condition never evaluates to false, often because the counter update statement was omitted from the loop body",
        "The computer has insufficient hard drive space",
        "A button on the form has its Visible property set to false"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "An infinite loop occurs when the loop condition remains perpetually true, typically because the code fails to modify the loop control variable inside the body.",
      "explanation": "An infinite loop occurs when the loop condition remains perpetually true, typically because the code fails to modify the loop control variable inside the body.",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_307",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What is an 'off-by-one' error in loop implementation?",
      "title": "What is an 'off-by-one' error in loop implementation?",
      "options": [
        "A syntax error caused by missing one quotation mark",
        "A compiler error caused by adding two numbers incorrectly",
        "A logic error where a loop executes one iteration too many or one too few, usually caused by writing '<=' instead of '<' or initializing at 1 instead of 0",
        "An error where one button has two event handlers"
      ],
      "opts": [
        "A syntax error caused by missing one quotation mark",
        "A compiler error caused by adding two numbers incorrectly",
        "A logic error where a loop executes one iteration too many or one too few, usually caused by writing '<=' instead of '<' or initializing at 1 instead of 0",
        "An error where one button has two event handlers"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "An off-by-one bug occurs when the loop boundary condition is misconfigured, causing the loop body to execute N+1 or N-1 times instead of N.",
      "explanation": "An off-by-one bug occurs when the loop boundary condition is misconfigured, causing the loop body to execute N+1 or N-1 times instead of N.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_308",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How many times does the body of the loop 'for (int i = 0; i < 5; i++)' execute?",
      "title": "How many times does the body of the loop 'for (int i = 0; i < 5; i++)' execute?",
      "options": [
        "4 times",
        "6 times",
        "0 times",
        "5 times (for i = 0, 1, 2, 3, 4)"
      ],
      "opts": [
        "4 times",
        "6 times",
        "0 times",
        "5 times (for i = 0, 1, 2, 3, 4)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The loop executes for i = 0, 1, 2, 3, and 4 (exactly 5 times). When i reaches 5, the condition '5 < 5' is false and the loop terminates.",
      "explanation": "The loop executes for i = 0, 1, 2, 3, and 4 (exactly 5 times). When i reaches 5, the condition '5 < 5' is false and the loop terminates.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_309",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How many times does the body of the loop 'for (int i = 1; i <= 5; i++)' execute?",
      "title": "How many times does the body of the loop 'for (int i = 1; i <= 5; i++)' execute?",
      "options": [
        "5 times (for i = 1, 2, 3, 4, 5)",
        "4 times",
        "6 times",
        "Infinite times"
      ],
      "opts": [
        "5 times (for i = 1, 2, 3, 4, 5)",
        "4 times",
        "6 times",
        "Infinite times"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The loop executes for i = 1, 2, 3, 4, and 5 (5 times total). When i reaches 6, '6 <= 5' is false and the loop terminates.",
      "explanation": "The loop executes for i = 1, 2, 3, 4, and 5 (5 times total). When i reaches 6, '6 <= 5' is false and the loop terminates.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_310",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "If 'int i;' is declared before the loop 'for (i = 0; i < 5; i++) { }', what is the value of 'i' immediately after the loop terminates?",
      "title": "If 'int i;' is declared before the loop 'for (i = 0; i < 5; i++) { }', what is the value of 'i' immediately after the loop terminates?",
      "options": [
        "4",
        "5",
        "0",
        "-1"
      ],
      "opts": [
        "4",
        "5",
        "0",
        "-1"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The loop increments i to 5, at which point '5 < 5' is false, causing loop termination with i retaining the value 5.",
      "explanation": "The loop increments i to 5, at which point '5 < 5' is false, causing loop termination with i retaining the value 5.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_311",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "If a loop control variable is declared in the for loop header ('for (int count = 0; count < 10; count++)'), can 'count' be used outside the loop?",
      "title": "If a loop control variable is declared in the for loop header ('for (int count = 0; count < 10; count++)'), can 'count' be used outside the loop?",
      "options": [
        "Yes, it remains available throughout the entire method",
        "Yes, it becomes a class-level field",
        "No, 'count' has block scope limited strictly to the for loop header and body; referencing it outside causes compiler error CS0103",
        "Only if the loop iterated at least once"
      ],
      "opts": [
        "Yes, it remains available throughout the entire method",
        "Yes, it becomes a class-level field",
        "No, 'count' has block scope limited strictly to the for loop header and body; referencing it outside causes compiler error CS0103",
        "Only if the loop iterated at least once"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Variables declared in the initialization section of a for loop header have scope confined to the loop construct itself.",
      "explanation": "Variables declared in the initialization section of a for loop header have scope confined to the loop construct itself.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_312",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which for loop header correctly counts backwards from 10 down to 1 inclusive?",
      "title": "Which for loop header correctly counts backwards from 10 down to 1 inclusive?",
      "options": [
        "for (int i = 1; i <= 10; i--)",
        "for (int i = 10; i < 1; i++)",
        "for (int i = 10; i > 0; i++)",
        "for (int i = 10; i >= 1; i--)"
      ],
      "opts": [
        "for (int i = 1; i <= 10; i--)",
        "for (int i = 10; i < 1; i++)",
        "for (int i = 10; i > 0; i++)",
        "for (int i = 10; i >= 1; i--)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Counting down starts at 10, tests that i >= 1, and decrements with i-- after each iteration.",
      "explanation": "Counting down starts at 10, tests that i >= 1, and decrements with i-- after each iteration.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_313",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which for loop header iterates through even numbers from 2 up to 20 inclusive?",
      "title": "Which for loop header iterates through even numbers from 2 up to 20 inclusive?",
      "options": [
        "for (int i = 2; i <= 20; i += 2)",
        "for (int i = 2; i < 20; i++)",
        "for (int i = 0; i <= 20; i * 2)",
        "for (int i = 2; i == 20; i += 2)"
      ],
      "opts": [
        "for (int i = 2; i <= 20; i += 2)",
        "for (int i = 2; i < 20; i++)",
        "for (int i = 0; i <= 20; i * 2)",
        "for (int i = 2; i == 20; i += 2)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Starting at 2, terminating when i exceeds 20, and stepping by 2 ('i += 2') yields 2, 4, 6, ..., 20.",
      "explanation": "Starting at 2, terminating when i exceeds 20, and stepping by 2 ('i += 2') yields 2, 4, 6, ..., 20.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_314",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What happens when a 'break;' statement is encountered inside a loop body?",
      "title": "What happens when a 'break;' statement is encountered inside a loop body?",
      "options": [
        "The computer restarts",
        "The loop terminates immediately, and execution jumps to the statement directly following the loop",
        "The current iteration is skipped and the loop starts again",
        "All variables in the program are reset to null"
      ],
      "opts": [
        "The computer restarts",
        "The loop terminates immediately, and execution jumps to the statement directly following the loop",
        "The current iteration is skipped and the loop starts again",
        "All variables in the program are reset to null"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The 'break' statement immediately exits the innermost enclosing loop, bypassing any remaining iterations.",
      "explanation": "The 'break' statement immediately exits the innermost enclosing loop, bypassing any remaining iterations.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_315",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What happens when a 'continue;' statement is encountered inside a loop body?",
      "title": "What happens when a 'continue;' statement is encountered inside a loop body?",
      "options": [
        "The loop is terminated completely",
        "The application terminates immediately",
        "The remainder of the current iteration is skipped, and control jumps directly to the update/test expression for the next iteration",
        "The form reloads"
      ],
      "opts": [
        "The loop is terminated completely",
        "The application terminates immediately",
        "The remainder of the current iteration is skipped, and control jumps directly to the update/test expression for the next iteration",
        "The form reloads"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The 'continue' statement bypasses any statements remaining in the current iteration and advances to the next loop iteration.",
      "explanation": "The 'continue' statement bypasses any statements remaining in the current iteration and advances to the next loop iteration.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_316",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which C# statement adds a new text item to a ListBox named lstResults?",
      "title": "Which C# statement adds a new text item to a ListBox named lstResults?",
      "options": [
        "lstResults.Add(\"New Item\");",
        "lstResults.Items.InsertItem(\"New Item\");",
        "lstResults.Text += \"New Item\";",
        "lstResults.Items.Add(\"New Item\");"
      ],
      "opts": [
        "lstResults.Add(\"New Item\");",
        "lstResults.Items.InsertItem(\"New Item\");",
        "lstResults.Text += \"New Item\";",
        "lstResults.Items.Add(\"New Item\");"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Items are appended to a ListBox through its Items collection using 'lstResults.Items.Add(...)'.",
      "explanation": "Items are appended to a ListBox through its Items collection using 'lstResults.Items.Add(...)'.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_317",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which C# statement removes all items from a ListBox named lstResults?",
      "title": "Which C# statement removes all items from a ListBox named lstResults?",
      "options": [
        "lstResults.Items.Clear();",
        "lstResults.Clear();",
        "lstResults.Items.DeleteAll();",
        "lstResults.Reset();"
      ],
      "opts": [
        "lstResults.Items.Clear();",
        "lstResults.Clear();",
        "lstResults.Items.DeleteAll();",
        "lstResults.Reset();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Calling lstResults.Items.Clear() empties the Items collection of the ListBox.",
      "explanation": "Calling lstResults.Items.Clear() empties the Items collection of the ListBox.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_318",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which property returns the total count of items currently populated in lstResults?",
      "title": "Which property returns the total count of items currently populated in lstResults?",
      "options": [
        "lstResults.Length",
        "lstResults.Items.Count",
        "lstResults.Items.Size",
        "lstResults.TotalItems"
      ],
      "opts": [
        "lstResults.Length",
        "lstResults.Items.Count",
        "lstResults.Items.Size",
        "lstResults.TotalItems"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The .Count property on the Items collection returns an integer indicating how many items the ListBox contains.",
      "explanation": "The .Count property on the Items collection returns an integer indicating how many items the ListBox contains.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_319",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In C# Windows Forms, what is the index of the first item in a ListBox?",
      "title": "In C# Windows Forms, what is the index of the first item in a ListBox?",
      "options": [
        "1",
        "-1",
        "0 (ListBoxes are zero-indexed)",
        "null"
      ],
      "opts": [
        "1",
        "-1",
        "0 (ListBoxes are zero-indexed)",
        "null"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "ListBox collections are 0-indexed in C#; the first element resides at index 0.",
      "explanation": "ListBox collections are 0-indexed in C#; the first element resides at index 0.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_320",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "If a ListBox contains N items, what is the index of the last item in the list?",
      "title": "If a ListBox contains N items, what is the index of the last item in the list?",
      "options": [
        "N",
        "N + 1",
        "0",
        "N - 1 (or lstResults.Items.Count - 1)"
      ],
      "opts": [
        "N",
        "N + 1",
        "0",
        "N - 1 (or lstResults.Items.Count - 1)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Because indexing begins at 0, the final element in an N-item collection is located at index N - 1.",
      "explanation": "Because indexing begins at 0, the final element in an N-item collection is located at index N - 1.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_321",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What runtime exception occurs if you attempt to access 'lstResults.Items[10]' when the ListBox contains only 3 items?",
      "title": "What runtime exception occurs if you attempt to access 'lstResults.Items[10]' when the ListBox contains only 3 items?",
      "options": [
        "ArgumentOutOfRangeException",
        "NullReferenceException",
        "FormatException",
        "DivideByZeroException"
      ],
      "opts": [
        "ArgumentOutOfRangeException",
        "NullReferenceException",
        "FormatException",
        "DivideByZeroException"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Accessing an index outside the valid range [0, Count-1] throws an ArgumentOutOfRangeException.",
      "explanation": "Accessing an index outside the valid range [0, Count-1] throws an ArgumentOutOfRangeException.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_322",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How can a developer safely extract the currently selected item from lstResults as a string?",
      "title": "How can a developer safely extract the currently selected item from lstResults as a string?",
      "options": [
        "string item = lstResults.SelectedItem.ToString(); without checking selection",
        "if (lstResults.SelectedIndex != -1) { string item = lstResults.SelectedItem.ToString(); }",
        "string item = lstResults.Text.Substring(0, 5);",
        "string item = lstResults.Items[-1];"
      ],
      "opts": [
        "string item = lstResults.SelectedItem.ToString(); without checking selection",
        "if (lstResults.SelectedIndex != -1) { string item = lstResults.SelectedItem.ToString(); }",
        "string item = lstResults.Text.Substring(0, 5);",
        "string item = lstResults.Items[-1];"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Checking SelectedIndex != -1 verifies an item is selected before calling SelectedItem.ToString(), preventing NullReferenceExceptions.",
      "explanation": "Checking SelectedIndex != -1 verifies an item is selected before calling SelectedItem.ToString(), preventing NullReferenceExceptions.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_323",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which for loop header correctly iterates through every item in a ListBox named lstScores?",
      "title": "Which for loop header correctly iterates through every item in a ListBox named lstScores?",
      "options": [
        "for (int i = 1; i <= lstScores.Items.Count; i++)",
        "for (int i = 0; i <= lstScores.Items.Count; i++)",
        "for (int i = 0; i < lstScores.Items.Count; i++)",
        "for (int i = lstScores.Items.Count; i > 0; i++)"
      ],
      "opts": [
        "for (int i = 1; i <= lstScores.Items.Count; i++)",
        "for (int i = 0; i <= lstScores.Items.Count; i++)",
        "for (int i = 0; i < lstScores.Items.Count; i++)",
        "for (int i = lstScores.Items.Count; i > 0; i++)"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Valid indices range from 0 to Count - 1. Using 'i = 0; i < lstScores.Items.Count; i++' visits each valid element safely.",
      "explanation": "Valid indices range from 0 to Count - 1. Using 'i = 0; i < lstScores.Items.Count; i++' visits each valid element safely.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_324",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How can numeric values stored as text in a ListBox (lstScores) be summed using an accumulator in a loop?",
      "title": "How can numeric values stored as text in a ListBox (lstScores) be summed using an accumulator in a loop?",
      "options": [
        "decimal total = lstScores.Items.Count * 100;",
        "decimal total = lstScores.Items.Sum(); without declaring total",
        "decimal total; total += lstScores.SelectedIndex;",
        "decimal total = 0m;\nfor (int i = 0; i < lstScores.Items.Count; i++)\n{\n    total += decimal.Parse(lstScores.Items[i].ToString());\n}"
      ],
      "opts": [
        "decimal total = lstScores.Items.Count * 100;",
        "decimal total = lstScores.Items.Sum(); without declaring total",
        "decimal total; total += lstScores.SelectedIndex;",
        "decimal total = 0m;\nfor (int i = 0; i < lstScores.Items.Count; i++)\n{\n    total += decimal.Parse(lstScores.Items[i].ToString());\n}"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Initialize total to 0m, iterate through items from 0 to Count-1, extract each item as a string, parse it to decimal, and add to total.",
      "explanation": "Initialize total to 0m, iterate through items from 0 to Count-1, extract each item as a string, parse it to decimal, and add to total.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_325",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "When calculating the average of numbers stored in a ListBox, what check must be included to avoid a runtime division by zero exception?",
      "title": "When calculating the average of numbers stored in a ListBox, what check must be included to avoid a runtime division by zero exception?",
      "options": [
        "Verify that lstScores.Items.Count > 0 before dividing",
        "Check if the form has a title bar",
        "Verify that the user entered a positive name",
        "Ensure that the computer is connected to the internet"
      ],
      "opts": [
        "Verify that lstScores.Items.Count > 0 before dividing",
        "Check if the form has a title bar",
        "Verify that the user entered a positive name",
        "Ensure that the computer is connected to the internet"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "If the ListBox is empty (Count == 0), dividing by Count throws a DivideByZeroException for integers or produces NaN for floating point.",
      "explanation": "If the ListBox is empty (Count == 0), dividing by Count throws a DivideByZeroException for integers or produces NaN for floating point.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_326",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What insidious bug is created by accidentally placing a semicolon at the end of a while loop header: 'while (count < 10); { count++; }'?",
      "title": "What insidious bug is created by accidentally placing a semicolon at the end of a while loop header: 'while (count < 10); { count++; }'?",
      "options": [
        "The code fails to compile with CS1002",
        "The semicolon forms an empty loop body; since count is never incremented, the loop hangs indefinitely in an infinite loop",
        "The block '{ count++; }' executes 10 times immediately",
        "Visual Studio deletes the while statement"
      ],
      "opts": [
        "The code fails to compile with CS1002",
        "The semicolon forms an empty loop body; since count is never incremented, the loop hangs indefinitely in an infinite loop",
        "The block '{ count++; }' executes 10 times immediately",
        "Visual Studio deletes the while statement"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "A semicolon after while(...) creates an empty statement as the loop body. The loop endlessly tests 'count < 10' without ever incrementing count.",
      "explanation": "A semicolon after while(...) creates an empty statement as the loop body. The loop endlessly tests 'count < 10' without ever incrementing count.",
      "provenance": "Gaddis 4th Ed §5.2 (Common Pitfalls)",
      "marks": 2
    },
    {
      "id": "q_su4_327",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What happens if an accidental semicolon is placed immediately after a for loop header: 'for (int i = 0; i < 5; i++); { lstOutput.Items.Add(\"Hi\"); }'?",
      "title": "What happens if an accidental semicolon is placed immediately after a for loop header: 'for (int i = 0; i < 5; i++); { lstOutput.Items.Add(\"Hi\"); }'?",
      "options": [
        "The program crashes with an OutOfMemoryException",
        "'Hi' is added 5 times as expected",
        "The loop executes all 5 iterations doing nothing; then the block executes once, adding 'Hi' only a single time",
        "A syntax error stops compilation"
      ],
      "opts": [
        "The program crashes with an OutOfMemoryException",
        "'Hi' is added 5 times as expected",
        "The loop executes all 5 iterations doing nothing; then the block executes once, adding 'Hi' only a single time",
        "A syntax error stops compilation"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The semicolon acts as an empty loop body, cycling i from 0 to 5. The following block executes as normal sequential code exactly once.",
      "explanation": "The semicolon acts as an empty loop body, cycling i from 0 to 5. The following block executes as normal sequential code exactly once.",
      "provenance": "Gaddis 4th Ed §5.4 (Common Pitfalls)",
      "marks": 2
    },
    {
      "id": "q_su4_328",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In a retail POS transaction system, why is 'lstCart.Items.Clear();' called when the cashier clicks the 'New Sale' button?",
      "title": "In a retail POS transaction system, why is 'lstCart.Items.Clear();' called when the cashier clicks the 'New Sale' button?",
      "options": [
        "To print the customer receipt",
        "To calculate 15% VAT",
        "To close the cash register drawer",
        "To remove all scanned items from the previous customer from the display and memory before starting a new transaction"
      ],
      "opts": [
        "To print the customer receipt",
        "To calculate 15% VAT",
        "To close the cash register drawer",
        "To remove all scanned items from the previous customer from the display and memory before starting a new transaction"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Clearing the ListBox ensures no residual items or prices from a prior transaction contaminate the new transaction.",
      "explanation": "Clearing the ListBox ensures no residual items or prices from a prior transaction contaminate the new transaction.",
      "provenance": "NWU PEC 2024 Exam & Practical 5",
      "marks": 2
    },
    {
      "id": "q_su4_329",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How can a multiplication table for the number 5 (from '5 x 1 = 5' to '5 x 10 = 50') be populated into lstTable?",
      "title": "How can a multiplication table for the number 5 (from '5 x 1 = 5' to '5 x 10 = 50') be populated into lstTable?",
      "options": [
        "for (int i = 1; i <= 10; i++) { lstTable.Items.Add($\"5 x {i} = {5 * i}\"); }",
        "lstTable.Items.Add(5 * 10);",
        "for (int i = 10; i < 1; i++) { lstTable.Items.Add(5 * i); }",
        "while (i <= 10) { lstTable.Items.Add(5); }"
      ],
      "opts": [
        "for (int i = 1; i <= 10; i++) { lstTable.Items.Add($\"5 x {i} = {5 * i}\"); }",
        "lstTable.Items.Add(5 * 10);",
        "for (int i = 10; i < 1; i++) { lstTable.Items.Add(5 * i); }",
        "while (i <= 10) { lstTable.Items.Add(5); }"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A for loop counting from 1 to 10 dynamically evaluates and appends each formatted multiplication product.",
      "explanation": "A for loop counting from 1 to 10 dynamically evaluates and appends each formatted multiplication product.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_330",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In financial investment simulation, why is a loop necessary to calculate compound interest over multiple years instead of simple multiplication?",
      "title": "In financial investment simulation, why is a loop necessary to calculate compound interest over multiple years instead of simple multiplication?",
      "options": [
        "Multiplication is not supported on decimal variables",
        "Interest earned in each year is added to the principal balance, so subsequent interest is calculated on the new compounded total",
        "Compounding only works if executed inside an event handler",
        "C# requires loops for all numbers greater than 1000"
      ],
      "opts": [
        "Multiplication is not supported on decimal variables",
        "Interest earned in each year is added to the principal balance, so subsequent interest is calculated on the new compounded total",
        "Compounding only works if executed inside an event handler",
        "C# requires loops for all numbers greater than 1000"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Compound growth is an iterative accumulation: each period's interest increases the base principal for subsequent calculations.",
      "explanation": "Compound growth is an iterative accumulation: each period's interest increases the base principal for subsequent calculations.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_331",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "In an investment simulator, how can yearly balances be appended to a ListBox with tab separation and Rand currency formatting?",
      "title": "In an investment simulator, how can yearly balances be appended to a ListBox with tab separation and Rand currency formatting?",
      "options": [
        "lstGrowth.Items.Add(year + balance);",
        "lstGrowth.Text = balance.ToString();",
        "lstGrowth.Items.Add($\"Year {year}:\\t{balance:C}\");",
        "lstGrowth.Items.Insert(year, balance);"
      ],
      "opts": [
        "lstGrowth.Items.Add(year + balance);",
        "lstGrowth.Text = balance.ToString();",
        "lstGrowth.Items.Add($\"Year {year}:\\t{balance:C}\");",
        "lstGrowth.Items.Insert(year, balance);"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "String interpolation with the tab escape sequence '\\t' and currency specifier ':C' formats tabular monetary output cleanly.",
      "explanation": "String interpolation with the tab escape sequence '\\t' and currency specifier ':C' formats tabular monetary output cleanly.",
      "provenance": "Gaddis 4th Ed §5.5 & Practical 2",
      "marks": 2
    },
    {
      "id": "q_su4_332",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which loop construct is best suited when the exact number of iterations is known before entering the loop?",
      "title": "Which loop construct is best suited when the exact number of iterations is known before entering the loop?",
      "options": [
        "while loop",
        "do-while loop",
        "infinite loop",
        "for loop"
      ],
      "opts": [
        "while loop",
        "do-while loop",
        "infinite loop",
        "for loop"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The count-controlled for loop is ideal when the iteration count is predetermined (e.g. iterating N times or over an array).",
      "explanation": "The count-controlled for loop is ideal when the iteration count is predetermined (e.g. iterating N times or over an array).",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_333",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which loop construct is best suited for repeating an action until the user provides valid numeric input?",
      "title": "Which loop construct is best suited for repeating an action until the user provides valid numeric input?",
      "options": [
        "while (or do-while) loop",
        "for loop counting to 100",
        "switch statement",
        "single if statement"
      ],
      "opts": [
        "while (or do-while) loop",
        "for loop counting to 100",
        "switch statement",
        "single if statement"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Condition-controlled loops (while and do-while) are designed for situations where the number of attempts is indeterminate.",
      "explanation": "Condition-controlled loops (while and do-while) are designed for situations where the number of attempts is indeterminate.",
      "provenance": "Gaddis 4th Ed §5.2 & §5.3",
      "marks": 2
    },
        {
      "id": "q_su4_334",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Consider the following nested loop structure in Visual C#:\n```csharp\nfor (int student = 1; student <= 3; student++)\n{\n    for (int test = 1; test <= 2; test++)\n    {\n        lstLog.Items.Add($\"Student {student}, Test {test}\");\n    }\n}\n```\nHow many total items will be added to `lstLog` upon loop completion?",
      "title": "Consider the following nested loop structure in Visual C#:\n```csharp\nfor (int student = 1; student <= 3; student++)\n{\n    for (int test = 1; test <= 2; test++)\n    {\n        lstLog.Items.Add($\"Student {student}, Test {test}\");\n    }\n}\n```\nHow many total items will be added to `lstLog` upon loop completion?",
      "options": [
        "5 items (3 outer iterations + 2 inner iterations)",
        "2 items (only the inner loop adds items)",
        "12 items (3 * 2 * 2)",
        "6 items (for each of the 3 outer iterations, the inner loop executes 2 times: 3 * 2 = 6)"
      ],
      "opts": [
        "5 items (3 outer iterations + 2 inner iterations)",
        "2 items (only the inner loop adds items)",
        "12 items (3 * 2 * 2)",
        "6 items (for each of the 3 outer iterations, the inner loop executes 2 times: 3 * 2 = 6)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "In a nested loop, for every single iteration of the outer loop, the inner loop executes its full cycle from start to finish. With 3 outer iterations and 2 inner iterations, the inner statement executes 3 * 2 = 6 times (Tony Gaddis Chapter 5).",
      "explanation": "In a nested loop, for every single iteration of the outer loop, the inner loop executes its full cycle from start to finish. With 3 outer iterations and 2 inner iterations, the inner statement executes 3 * 2 = 6 times (Tony Gaddis Chapter 5).",
      "provenance": "Tony Gaddis Chapter 5 Step",
      "marks": 2
    },
    {
      "id": "q_su4_335",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "If an outer loop iterates 5 times and an inner nested loop iterates 3 times per outer cycle, how many total times will the inner loop's body execute?",
      "title": "If an outer loop iterates 5 times and an inner nested loop iterates 3 times per outer cycle, how many total times will the inner loop's body execute?",
      "options": [
        "8 times",
        "5 times",
        "15 times (5 * 3)",
        "3 times"
      ],
      "opts": [
        "8 times",
        "5 times",
        "15 times (5 * 3)",
        "3 times"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The inner loop runs 3 times on each of the outer loop's 5 iterations, totaling 5 * 3 = 15 executions.",
      "explanation": "The inner loop runs 3 times on each of the outer loop's 5 iterations, totaling 5 * 3 = 15 executions.",
      "provenance": "Gaddis 4th Ed §5.7",
      "marks": 2
    },
    {
      "id": "q_su4_336",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which compound assignment operator adds the value of the right operand to the variable on the left: 'total = total + value;'?",
      "title": "Which compound assignment operator adds the value of the right operand to the variable on the left: 'total = total + value;'?",
      "options": [
        "=+",
        "++",
        "&&",
        "+="
      ],
      "opts": [
        "=+",
        "++",
        "&&",
        "+="
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The '+=' operator adds the right-hand value to the variable on the left and reassigns the sum to that variable.",
      "explanation": "The '+=' operator adds the right-hand value to the variable on the left and reassigns the sum to that variable.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su4_337",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which compound assignment operator multiplies the variable on the left by the right operand: 'balance = balance * factor;'?",
      "title": "Which compound assignment operator multiplies the variable on the left by the right operand: 'balance = balance * factor;'?",
      "options": [
        "*=",
        "=*",
        "**",
        "^="
      ],
      "opts": [
        "*=",
        "=*",
        "**",
        "^="
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The '*=' operator performs in-place multiplication on the target variable.",
      "explanation": "The '*=' operator performs in-place multiplication on the target variable.",
      "provenance": "Gaddis 4th Ed §3.4",
      "marks": 2
    },
    {
      "id": "q_su4_338",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How can a loop find the highest numeric score stored in a ListBox named lstScores?",
      "title": "How can a loop find the highest numeric score stored in a ListBox named lstScores?",
      "options": [
        "Sort the form alphabetically",
        "Initialize a variable 'highest' with the first item, iterate through remaining items, and update 'highest' whenever an item exceeds it",
        "Sum all numbers and divide by 2",
        "Call lstScores.Items.Clear()"
      ],
      "opts": [
        "Sort the form alphabetically",
        "Initialize a variable 'highest' with the first item, iterate through remaining items, and update 'highest' whenever an item exceeds it",
        "Sum all numbers and divide by 2",
        "Call lstScores.Items.Clear()"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The standard linear search algorithm initializes the extreme value candidate with element 0, then updates candidate whenever a larger value is found.",
      "explanation": "The standard linear search algorithm initializes the extreme value candidate with element 0, then updates candidate whenever a larger value is found.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_339",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "When finding the maximum value among a series of positive test scores entered by a user, what initial value should the 'highest' accumulator hold before the loop?",
      "title": "When finding the maximum value among a series of positive test scores entered by a user, what initial value should the 'highest' accumulator hold before the loop?",
      "options": [
        "100",
        "int.MaxValue",
        "0 (or the first score in the series)",
        "-999999"
      ],
      "opts": [
        "100",
        "int.MaxValue",
        "0 (or the first score in the series)",
        "-999999"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Initializing with 0 or the first actual score ensures that any valid positive score will be equal to or greater than the initial candidate.",
      "explanation": "Initializing with 0 or the first actual score ensures that any valid positive score will be equal to or greater than the initial candidate.",
      "provenance": "Gaddis 4th Ed §5.5",
      "marks": 2
    },
    {
      "id": "q_su4_340",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What happens if 'while (false)' is written in C#?",
      "title": "What happens if 'while (false)' is written in C#?",
      "options": [
        "The loop executes once",
        "The loop executes infinitely",
        "The operating system crashes",
        "The loop condition is false from the start; the loop body never executes, and the compiler flags unreachable code if statements follow inside"
      ],
      "opts": [
        "The loop executes once",
        "The loop executes infinitely",
        "The operating system crashes",
        "The loop condition is false from the start; the loop body never executes, and the compiler flags unreachable code if statements follow inside"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "A pre-test while loop checks its condition first. If false initially, body statements execute zero times.",
      "explanation": "A pre-test while loop checks its condition first. If false initially, body statements execute zero times.",
      "provenance": "Gaddis 4th Ed §5.2",
      "marks": 2
    },
    {
      "id": "q_su4_341",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What happens if 'do { ... } while (false);' is written in C#?",
      "title": "What happens if 'do { ... } while (false);' is written in C#?",
      "options": [
        "The loop body executes exactly once because the post-test condition is only evaluated after the first iteration",
        "The loop body never executes",
        "The loop runs infinitely",
        "It causes a compilation error"
      ],
      "opts": [
        "The loop body executes exactly once because the post-test condition is only evaluated after the first iteration",
        "The loop body never executes",
        "The loop runs infinitely",
        "It causes a compilation error"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Post-test do-while loops execute the body unconditionally on the first pass before evaluating the test expression.",
      "explanation": "Post-test do-while loops execute the body unconditionally on the first pass before evaluating the test expression.",
      "provenance": "Gaddis 4th Ed §5.3",
      "marks": 2
    },
    {
      "id": "q_su4_342",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Why is it considered bad programming practice to alter the loop control variable manually inside the body of a for loop?",
      "title": "Why is it considered bad programming practice to alter the loop control variable manually inside the body of a for loop?",
      "options": [
        "The C# compiler refuses to compile the project",
        "It obscures loop termination logic, making execution flow difficult to trace and greatly increasing the risk of off-by-one or infinite loop bugs",
        "It deletes the variable from memory",
        "It automatically changes the loop to a while loop"
      ],
      "opts": [
        "The C# compiler refuses to compile the project",
        "It obscures loop termination logic, making execution flow difficult to trace and greatly increasing the risk of off-by-one or infinite loop bugs",
        "It deletes the variable from memory",
        "It automatically changes the loop to a while loop"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "For loops are designed for predictable iteration managed by their header. Modifying the counter inside the body compromises readability and predictability.",
      "explanation": "For loops are designed for predictable iteration managed by their header. Modifying the counter inside the body compromises readability and predictability.",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_343",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which method removes an item from a ListBox by matching its text content?",
      "title": "Which method removes an item from a ListBox by matching its text content?",
      "options": [
        "lstItems.Items.RemoveAt(\"ItemText\");",
        "lstItems.Delete(\"ItemText\");",
        "lstItems.Items.Remove(\"ItemText\");",
        "lstItems.Text = \"\";"
      ],
      "opts": [
        "lstItems.Items.RemoveAt(\"ItemText\");",
        "lstItems.Delete(\"ItemText\");",
        "lstItems.Items.Remove(\"ItemText\");",
        "lstItems.Text = \"\";"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Items.Remove(object) searches for and removes the first matching item object from the collection.",
      "explanation": "Items.Remove(object) searches for and removes the first matching item object from the collection.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_344",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which method removes an item from a ListBox by its zero-based numerical index position?",
      "title": "Which method removes an item from a ListBox by its zero-based numerical index position?",
      "options": [
        "lstItems.Items.Remove(index);",
        "lstItems.Items.DeleteIndex(index);",
        "lstItems.Items[index] = null;",
        "lstItems.Items.RemoveAt(index);"
      ],
      "opts": [
        "lstItems.Items.Remove(index);",
        "lstItems.Items.DeleteIndex(index);",
        "lstItems.Items[index] = null;",
        "lstItems.Items.RemoveAt(index);"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Items.RemoveAt(int index) removes the item occupying the specified index location.",
      "explanation": "Items.RemoveAt(int index) removes the item occupying the specified index location.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_345",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How can a developer insert an item at the very top (index 0) of a ListBox named lstItems?",
      "title": "How can a developer insert an item at the very top (index 0) of a ListBox named lstItems?",
      "options": [
        "lstItems.Items.Insert(0, \"First Item\");",
        "lstItems.Items.AddTop(\"First Item\");",
        "lstItems.Items[0] = \"First Item\";",
        "lstItems.Items.Prepend(\"First Item\");"
      ],
      "opts": [
        "lstItems.Items.Insert(0, \"First Item\");",
        "lstItems.Items.AddTop(\"First Item\");",
        "lstItems.Items[0] = \"First Item\";",
        "lstItems.Items.Prepend(\"First Item\");"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Items.Insert(index, item) inserts an element at the specified position, shifting existing items downwards.",
      "explanation": "Items.Insert(index, item) inserts an element at the specified position, shifting existing items downwards.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_346",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Which ListBox property can be set to true at design time to automatically keep entries sorted alphabetically?",
      "title": "Which ListBox property can be set to true at design time to automatically keep entries sorted alphabetically?",
      "options": [
        "AutoSort",
        "Sorted",
        "Alphabetical",
        "OrderItems"
      ],
      "opts": [
        "AutoSort",
        "Sorted",
        "Alphabetical",
        "OrderItems"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Setting the 'Sorted' property to true automatically sorts text entries alphabetically as they are added.",
      "explanation": "Setting the 'Sorted' property to true automatically sorts text entries alphabetically as they are added.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_347",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "What does the method call 'lstItems.Items.Contains(\"Apples\")' return?",
      "title": "What does the method call 'lstItems.Items.Contains(\"Apples\")' return?",
      "options": [
        "The index position where \"Apples\" is stored",
        "The total count of apples",
        "A bool (true if \"Apples\" exists in the ListBox, false otherwise)",
        "A new ListBox with only apples"
      ],
      "opts": [
        "The index position where \"Apples\" is stored",
        "The total count of apples",
        "A bool (true if \"Apples\" exists in the ListBox, false otherwise)",
        "A new ListBox with only apples"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Items.Contains(object) checks for item membership, returning a boolean true or false.",
      "explanation": "Items.Contains(object) checks for item membership, returning a boolean true or false.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_348",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "If a ListBox has SelectionMode set to MultiSimple or MultiExtended, which collection holds all indices selected by the user?",
      "title": "If a ListBox has SelectionMode set to MultiSimple or MultiExtended, which collection holds all indices selected by the user?",
      "options": [
        "lstItems.SelectedItemsList",
        "lstItems.CheckedIndices",
        "lstItems.MultiSelections",
        "lstItems.SelectedIndices"
      ],
      "opts": [
        "lstItems.SelectedItemsList",
        "lstItems.CheckedIndices",
        "lstItems.MultiSelections",
        "lstItems.SelectedIndices"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "SelectedIndices contains the collection of zero-based index numbers for all highlighted items in a multi-selection ListBox.",
      "explanation": "SelectedIndices contains the collection of zero-based index numbers for all highlighted items in a multi-selection ListBox.",
      "provenance": "Gaddis 4th Ed §4.11",
      "marks": 2
    },
    {
      "id": "q_su4_349",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "Why should UI updates (such as adding items to a ListBox) inside a loop with 100,000 iterations be handled with care?",
      "title": "Why should UI updates (such as adding items to a ListBox) inside a loop with 100,000 iterations be handled with care?",
      "options": [
        "Repeatedly updating the GUI thread inside a tight loop causes UI freezing and severe performance degradation",
        "Visual Studio will delete the form",
        "ListBoxes can never hold more than 100 items",
        "The monitor will turn off"
      ],
      "opts": [
        "Repeatedly updating the GUI thread inside a tight loop causes UI freezing and severe performance degradation",
        "Visual Studio will delete the form",
        "ListBoxes can never hold more than 100 items",
        "The monitor will turn off"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Excessive GUI repainting on the UI thread starves the message pump, causing responsiveness issues unless batched (e.g. with BeginUpdate/EndUpdate).",
      "explanation": "Excessive GUI repainting on the UI thread starves the message pump, causing responsiveness issues unless batched (e.g. with BeginUpdate/EndUpdate).",
      "provenance": "Gaddis 4th Ed §5.4",
      "marks": 2
    },
    {
      "id": "q_su4_350",
      "ch": "SU4",
      "su": "SU4",
      "type": "mcq",
      "q": "How does Shneiderman's 8th Golden Rule ('Reduce short-term memory load') apply to displaying accumulated transaction items in a ListBox?",
      "title": "How does Shneiderman's 8th Golden Rule ('Reduce short-term memory load') apply to displaying accumulated transaction items in a ListBox?",
      "options": [
        "The user must memorize all product barcodes",
        "Presenting all scanned items and subtotals persistently in a scrollable list frees users from having to remember entered transactions while continuing work",
        "All items should disappear immediately after scanning",
        "The application should only display one number at a time"
      ],
      "opts": [
        "The user must memorize all product barcodes",
        "Presenting all scanned items and subtotals persistently in a scrollable list frees users from having to remember entered transactions while continuing work",
        "All items should disappear immediately after scanning",
        "The application should only display one number at a time"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Visible history in a ListBox offloads cognitive load from human short-term memory into the interface display.",
      "explanation": "Visible history in a ListBox offloads cognitive load from human short-term memory into the interface display.",
      "provenance": "Shneiderman HCI Ch 2 & SU7",
      "marks": 2
    },
    {
      "id": "q_su-exam_351",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] According to the DriveNow Car Rental specification, why must the vehicle selection controls (rdoSedan, rdoSuv, rdoBakkie) be placed inside a GroupBox (grpVehicle)?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] According to the DriveNow Car Rental specification, why must the vehicle selection controls (rdoSedan, rdoSuv, rdoBakkie) be placed inside a GroupBox (grpVehicle)?",
      "options": [
        "To ensure mutual exclusion so that selecting one vehicle category automatically unchecks any other category.",
        "To allow multiple vehicle categories to be checked simultaneously for a single rental contract.",
        "Because RadioButtons cannot receive mouse clicks unless nested inside a GroupBox container.",
        "To convert the RadioButtons into TabStop navigation labels automatically."
      ],
      "opts": [
        "To ensure mutual exclusion so that selecting one vehicle category automatically unchecks any other category.",
        "To allow multiple vehicle categories to be checked simultaneously for a single rental contract.",
        "Because RadioButtons cannot receive mouse clicks unless nested inside a GroupBox container.",
        "To convert the RadioButtons into TabStop navigation labels automatically."
      ],
      "answer": 0,
      "ans": 0,
      "exp": "RadioButtons grouped inside a common container (such as a GroupBox) exhibit mutually exclusive behavior: selecting one automatically unchecks all other radio buttons in that group (Gaddis Ch 4.10).",
      "explanation": "RadioButtons grouped inside a common container (such as a GroupBox) exhibit mutually exclusive behavior: selecting one automatically unchecks all other radio buttons in that group (Gaddis Ch 4.10).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_352",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Following NWU Hungarian naming conventions and GUI keyboard access standards, what name and TabIndex property should be assigned to the rental days input TextBox?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Following NWU Hungarian naming conventions and GUI keyboard access standards, what name and TabIndex property should be assigned to the rental days input TextBox?",
      "options": [
        "Name: tbDays, TabIndex: 1",
        "Name: txtDays, TabIndex: 0",
        "Name: inputDays, TabIndex: -1",
        "Name: lblDaysInput, TabIndex: 0"
      ],
      "opts": [
        "Name: tbDays, TabIndex: 1",
        "Name: txtDays, TabIndex: 0",
        "Name: inputDays, TabIndex: -1",
        "Name: lblDaysInput, TabIndex: 0"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "NWU standard Hungarian prefix for TextBoxes is 'txt' (txtDays). As the primary initial input field, TabIndex should be set to 0 so the cursor begins in this field on launch (Gaddis Ch 2 & Ch 3).",
      "explanation": "NWU standard Hungarian prefix for TextBoxes is 'txt' (txtDays). As the primary initial input field, TabIndex should be set to 0 so the cursor begins in this field on launch (Gaddis Ch 2 & Ch 3).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_353",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] To defensively read the rental days input from txtDays without risking an unhandled FormatException crash on invalid text, which C# construct must be implemented?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] To defensively read the rental days input from txtDays without risking an unhandled FormatException crash on invalid text, which C# construct must be implemented?",
      "options": [
        "days = int.Parse(txtDays.Text);",
        "days = (int)txtDays.Text;",
        "if (int.TryParse(txtDays.Text, out days))",
        "days = Convert.ToInt32(txtDays);"
      ],
      "opts": [
        "days = int.Parse(txtDays.Text);",
        "days = (int)txtDays.Text;",
        "if (int.TryParse(txtDays.Text, out days))",
        "days = Convert.ToInt32(txtDays);"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "int.TryParse returns a boolean indicating success and populates the variable via an out parameter, completely avoiding runtime crash exceptions on non-numeric input (Gaddis Ch 4.9).",
      "explanation": "int.TryParse returns a boolean indicating success and populates the variable via an out parameter, completely avoiding runtime crash exceptions on non-numeric input (Gaddis Ch 4.9).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_354",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] According to the Vehicle Rates Table in the specification, what is the base rental charge for a customer renting an SUV for 4 days?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] According to the Vehicle Rates Table in the specification, what is the base rental charge for a customer renting an SUV for 4 days?",
      "options": [
        "R 1,800.00",
        "R 3,000.00",
        "R 2,400.00",
        "R 2,600.00"
      ],
      "opts": [
        "R 1,800.00",
        "R 3,000.00",
        "R 2,400.00",
        "R 2,600.00"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "From the rates table, the SUV daily rate is R650.00/day. Base charge = 4 days * R650.00/day = R2,600.00.",
      "explanation": "From the rates table, the SUV daily rate is R650.00/day. Base charge = 4 days * R650.00/day = R2,600.00.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_355",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Based on the business rules in the specification, how should the included free mileage allowance (freeKms) be calculated for 'days' rented?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Based on the business rules in the specification, how should the included free mileage allowance (freeKms) be calculated for 'days' rented?",
      "options": [
        "decimal freeKms = days * 150m;",
        "decimal freeKms = days * 100m;",
        "decimal freeKms = 150m;",
        "decimal freeKms = days + 150m;"
      ],
      "opts": [
        "decimal freeKms = days * 150m;",
        "decimal freeKms = days * 100m;",
        "decimal freeKms = 150m;",
        "decimal freeKms = days + 150m;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The specification explicitly defines the included allowance as 150 km per day: freeKms = days * 150m (Gaddis Ch 3.5).",
      "explanation": "The specification explicitly defines the included allowance as 150 km per day: freeKms = days * 150m (Gaddis Ch 3.5).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_356",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] According to the pricing specification, if a customer drives 500 total kilometers on a 2-day rental (where the free allowance is 300 km), what is the calculated excess mileage surcharge?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] According to the pricing specification, if a customer drives 500 total kilometers on a 2-day rental (where the free allowance is 300 km), what is the calculated excess mileage surcharge?",
      "options": [
        "R 1,750.00",
        "R 700.00",
        "R 350.00",
        "R 1,050.00"
      ],
      "opts": [
        "R 1,750.00",
        "R 700.00",
        "R 350.00",
        "R 1,050.00"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Excess kilometers = 500 km - 300 km = 200 km. From the rates table, excess kilometers are billed at R3.50/km: 200 * R3.50 = R700.00.",
      "explanation": "Excess kilometers = 500 km - 300 km = 200 km. From the rates table, excess kilometers are billed at R3.50/km: 200 * R3.50 = R700.00.",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_357",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] How should the optional GPS navigation add-on (chkGps) be tested in the calculation event handler according to the specification rates?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] How should the optional GPS navigation add-on (chkGps) be tested in the calculation event handler according to the specification rates?",
      "options": [
        "if (chkGps.Text == \"true\") { total += days * 80m; }",
        "if (chkGps.Selected) { total += 80m; }",
        "if (chkGps.Checked) { total += days * 80m; }",
        "if (chkGps.Value == 1) { total += days * 80m; }"
      ],
      "opts": [
        "if (chkGps.Text == \"true\") { total += days * 80m; }",
        "if (chkGps.Selected) { total += 80m; }",
        "if (chkGps.Checked) { total += days * 80m; }",
        "if (chkGps.Value == 1) { total += days * 80m; }"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "CheckBox controls provide a boolean Checked property. The specification states GPS is R80.00 per day: if (chkGps.Checked) total += days * 80m; (Gaddis Ch 4.10).",
      "explanation": "CheckBox controls provide a boolean Checked property. The specification states GPS is R80.00 per day: if (chkGps.Checked) total += days * 80m; (Gaddis Ch 4.10).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_358",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] When displaying the calculated final total due in lblTotalDue, which C# statement correctly formats the decimal value with South African currency representation?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] When displaying the calculated final total due in lblTotalDue, which C# statement correctly formats the decimal value with South African currency representation?",
      "options": [
        "lblTotalDue.Text = totalDue.ToString(\"F2\");",
        "lblTotalDue.Text = totalDue.ToString(\"N\");",
        "lblTotalDue.Text = totalDue.ToString();",
        "lblTotalDue.Text = totalDue.ToString(\"C\");"
      ],
      "opts": [
        "lblTotalDue.Text = totalDue.ToString(\"F2\");",
        "lblTotalDue.Text = totalDue.ToString(\"N\");",
        "lblTotalDue.Text = totalDue.ToString();",
        "lblTotalDue.Text = totalDue.ToString(\"C\");"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The \"C\" or \"c\" format specifier formats a numeric value as currency including currency symbols (R), thousands separators, and two decimal places (Gaddis Ch 3.5).",
      "explanation": "The \"C\" or \"c\" format specifier formats a numeric value as currency including currency symbols (R), thousands separators, and two decimal places (Gaddis Ch 3.5).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_359",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What is the correct standard C# method signature for the Reset button's click event handler?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What is the correct standard C# method signature for the Reset button's click event handler?",
      "options": [
        "private void btnClear_Click(object sender, EventArgs e)",
        "public void btnClear_Click()",
        "void OnButtonClick_Clear(EventArgs e)",
        "private static void btnClear_Click(object sender)"
      ],
      "opts": [
        "private void btnClear_Click(object sender, EventArgs e)",
        "public void btnClear_Click()",
        "void OnButtonClick_Clear(EventArgs e)",
        "private static void btnClear_Click(object sender)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard Windows Forms event handler signatures accept (object sender, EventArgs e) and return void (Gaddis Ch 2.4).",
      "explanation": "Standard Windows Forms event handler signatures accept (object sender, EventArgs e) and return void (Gaddis Ch 2.4).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_360",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] When btnClear is clicked, which code block correctly restores the car rental form to its default initial state as specified?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] When btnClear is clicked, which code block correctly restores the car rental form to its default initial state as specified?",
      "options": [
        "this.Close(); Application.Restart();",
        "txtDays.Clear(); txtKms.Clear(); rdoSedan.Checked = true; chkGps.Checked = false; chkVoucher.Checked = false; lblTotalDue.Text = \"\"; lstReceipt.Items.Clear(); txtDays.Focus();",
        "Form.Reset(); txtDays.Text = \"0\";",
        "txtDays.Text = null; rdoSedan.Checked = false; lstReceipt.Dispose();"
      ],
      "opts": [
        "this.Close(); Application.Restart();",
        "txtDays.Clear(); txtKms.Clear(); rdoSedan.Checked = true; chkGps.Checked = false; chkVoucher.Checked = false; lblTotalDue.Text = \"\"; lstReceipt.Items.Clear(); txtDays.Focus();",
        "Form.Reset(); txtDays.Text = \"0\";",
        "txtDays.Text = null; rdoSedan.Checked = false; lstReceipt.Dispose();"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Proper form reset clears all input TextBoxes, resets the default radio button (Sedan), unchecks optional CheckBoxes, clears output labels and ListBoxes, and restores focus to txtDays (Gaddis Ch 2 & Ch 3).",
      "explanation": "Proper form reset clears all input TextBoxes, resets the default radio button (Sedan), unchecks optional CheckBoxes, clears output labels and ListBoxes, and restores focus to txtDays (Gaddis Ch 2 & Ch 3).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_361",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] What statement closes the current form instance when the user confirms exit in btnExit_Click?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] What statement closes the current form instance when the user confirms exit in btnExit_Click?",
      "options": [
        "Application.Halt();",
        "Close.This();",
        "this.Close();",
        "Form.Exit();"
      ],
      "opts": [
        "Application.Halt();",
        "Close.This();",
        "this.Close();",
        "Form.Exit();"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "'this.Close();' closes the current form instance and releases its Windows resources (Gaddis Ch 2.4).",
      "explanation": "'this.Close();' closes the current form instance and releases its Windows resources (Gaddis Ch 2.4).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_362",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Which defensive programming structure correctly validates that the parsed 'days' value is valid and halts event execution if invalid?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Which defensive programming structure correctly validates that the parsed 'days' value is valid and halts event execution if invalid?",
      "options": [
        "while (days <= 0) { days++; }",
        "if (days == 0) { lblTotalDue.Text = \"0\"; }",
        "try { days = days / 0; } catch { return; }",
        "if (days <= 0) { MessageBox.Show(\"Rental days must be greater than zero.\", \"Validation Error\"); txtDays.Focus(); txtDays.SelectAll(); return; }"
      ],
      "opts": [
        "while (days <= 0) { days++; }",
        "if (days == 0) { lblTotalDue.Text = \"0\"; }",
        "try { days = days / 0; } catch { return; }",
        "if (days <= 0) { MessageBox.Show(\"Rental days must be greater than zero.\", \"Validation Error\"); txtDays.Focus(); txtDays.SelectAll(); return; }"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Validating days <= 0 with an informative MessageBox, setting focus, selecting all text, and executing 'return;' prevents invalid calculations from executing (Gaddis Ch 4.9).",
      "explanation": "Validating days <= 0 with an informative MessageBox, setting focus, selecting all text, and executing 'return;' prevents invalid calculations from executing (Gaddis Ch 4.9).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_363",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] If a user leaves txtKms blank and clicks Calculate, what is the boolean return value of decimal.TryParse(txtKms.Text, out kms)?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] If a user leaves txtKms blank and clicks Calculate, what is the boolean return value of decimal.TryParse(txtKms.Text, out kms)?",
      "options": [
        "false, preventing an unhandled FormatException crash",
        "true, setting kms to 1.0m",
        "Throws an unhandled System.NullReferenceException",
        "Returns -1"
      ],
      "opts": [
        "false, preventing an unhandled FormatException crash",
        "true, setting kms to 1.0m",
        "Throws an unhandled System.NullReferenceException",
        "Returns -1"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "TryParse returns false when the string is empty or contains non-numeric text, safely preventing unhandled runtime conversion crashes (Gaddis Ch 4.9).",
      "explanation": "TryParse returns false when the string is empty or contains non-numeric text, safely preventing unhandled runtime conversion crashes (Gaddis Ch 4.9).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_364",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] According to software engineering principles taught in CMPG122 (SU2), why should the daily rates (450m, 650m, 750m) and excess rate (3.50m) be declared as named constants?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] According to software engineering principles taught in CMPG122 (SU2), why should the daily rates (450m, 650m, 750m) and excess rate (3.50m) be declared as named constants?",
      "options": [
        "Because C# does not allow literal numbers in arithmetic expressions",
        "To prevent magic numbers, improve code readability, and allow rates to be updated in a single declaration location",
        "Because const variables can be modified dynamically by user input at runtime",
        "To make the variables accessible to other applications on the operating system"
      ],
      "opts": [
        "Because C# does not allow literal numbers in arithmetic expressions",
        "To prevent magic numbers, improve code readability, and allow rates to be updated in a single declaration location",
        "Because const variables can be modified dynamically by user input at runtime",
        "To make the variables accessible to other applications on the operating system"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Named constants (const) replace magic numbers with descriptive identifiers, enhancing maintainability and readability (Gaddis Ch 3.6).",
      "explanation": "Named constants (const) replace magic numbers with descriptive identifiers, enhancing maintainability and readability (Gaddis Ch 3.6).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_365",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Which statement correctly appends a formatted line showing the vehicle base charge of 'baseCost' to the invoice ListBox (lstReceipt)?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Which statement correctly appends a formatted line showing the vehicle base charge of 'baseCost' to the invoice ListBox (lstReceipt)?",
      "options": [
        "lstReceipt.Text = \"Base Rental: \" + baseCost.ToString(\"C\");",
        "lstReceipt.Items = \"Base Rental: \" + baseCost.ToString(\"C\");",
        "lstReceipt.Items.Add(\"Base Rental: \" + baseCost.ToString(\"C\"));",
        "lstReceipt.Add(\"Base Rental: \" + baseCost.ToString(\"C\"));"
      ],
      "opts": [
        "lstReceipt.Text = \"Base Rental: \" + baseCost.ToString(\"C\");",
        "lstReceipt.Items = \"Base Rental: \" + baseCost.ToString(\"C\");",
        "lstReceipt.Items.Add(\"Base Rental: \" + baseCost.ToString(\"C\"));",
        "lstReceipt.Add(\"Base Rental: \" + baseCost.ToString(\"C\"));"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "ListBox items are added via the collection method 'lstReceipt.Items.Add(...)'. The .Text property only refers to the currently selected item (Gaddis Ch 4.11).",
      "explanation": "ListBox items are added via the collection method 'lstReceipt.Items.Add(...)'. The .Text property only refers to the currently selected item (Gaddis Ch 4.11).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_366",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2024 Exam (Car Rental Billing)] Prompting the user with a confirmation dialog (MessageBoxButtons.YesNo) before terminating the application in btnExit_Click satisfies which of Ben Shneiderman's 8 Golden Rules of Interface Design?",
      "title": "[NWU Dec 2024 Exam (Car Rental Billing)] Prompting the user with a confirmation dialog (MessageBoxButtons.YesNo) before terminating the application in btnExit_Click satisfies which of Ben Shneiderman's 8 Golden Rules of Interface Design?",
      "options": [
        "Rule 8: Reduce short-term memory load",
        "Rule 2: Cater to universal usability",
        "Rule 7: Support internal locus of control",
        "Rule 6: Permit easy reversal of actions (and error prevention)"
      ],
      "opts": [
        "Rule 8: Reduce short-term memory load",
        "Rule 2: Cater to universal usability",
        "Rule 7: Support internal locus of control",
        "Rule 6: Permit easy reversal of actions (and error prevention)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Shneiderman's Rule 6 states that actions should be reversible to relieve user anxiety and prevent accidental work loss upon destructive operations like exiting (Shneiderman Ch 2).",
      "explanation": "Shneiderman's Rule 6 states that actions should be reversible to relieve user anxiety and prevent accidental work loss upon destructive operations like exiting (Shneiderman Ch 2).",
      "provenance": "NWU Dec 2024 Exam (Car Rental Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_367",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to NWU Hungarian naming standards, what prefix and identifier should be assigned to the academic credit count input control?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to NWU Hungarian naming standards, what prefix and identifier should be assigned to the academic credit count input control?",
      "options": [
        "txtCredits",
        "tbCredits",
        "crInput",
        "numCredits"
      ],
      "opts": [
        "txtCredits",
        "tbCredits",
        "crInput",
        "numCredits"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard NWU Hungarian naming conventions require 'txt' prefix followed by PascalCase descriptor: txtCredits (Gaddis Ch 2).",
      "explanation": "Standard NWU Hungarian naming conventions require 'txt' prefix followed by PascalCase descriptor: txtCredits (Gaddis Ch 2).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_368",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to the Faculty Rates Table in the specification, if a student enrolls for 12 credits in the Faculty of Natural & Agricultural Sciences, what is the tuition charge before the laboratory levy?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to the Faculty Rates Table in the specification, if a student enrolls for 12 credits in the Faculty of Natural & Agricultural Sciences, what is the tuition charge before the laboratory levy?",
      "options": [
        "R 9,000.00",
        "R 10,200.00",
        "R 7,800.00",
        "R 12,700.00"
      ],
      "opts": [
        "R 9,000.00",
        "R 10,200.00",
        "R 7,800.00",
        "R 12,700.00"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "From the specification table, Natural Sciences costs R850.00 per credit. 12 credits * R850.00 = R10,200.00.",
      "explanation": "From the specification table, Natural Sciences costs R850.00 per credit. 12 credits * R850.00 = R10,200.00.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_369",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Based on the specification table, what compulsory facility levy must be added if the student selects the Faculty of Natural & Agricultural Sciences (rdoScience)?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Based on the specification table, what compulsory facility levy must be added if the student selects the Faculty of Natural & Agricultural Sciences (rdoScience)?",
      "options": [
        "R 1,000.00 IT network levy",
        "R 500.00 resource levy",
        "R 2,500.00 science laboratory levy",
        "R 0.00 (levies are optional)"
      ],
      "opts": [
        "R 1,000.00 IT network levy",
        "R 500.00 resource levy",
        "R 2,500.00 science laboratory levy",
        "R 0.00 (levies are optional)"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The specification table explicitly defines a R2,500.00 laboratory levy for Natural & Agricultural Sciences.",
      "explanation": "The specification table explicitly defines a R2,500.00 laboratory levy for Natural & Agricultural Sciences.",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_370",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to the business rules, if academic tuition plus levy totals R12,000.00 and the student is awarded a 25% merit bursary, how should the net academic tuition be calculated?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to the business rules, if academic tuition plus levy totals R12,000.00 and the student is awarded a 25% merit bursary, how should the net academic tuition be calculated?",
      "options": [
        "netTuition = tuition - 25m;",
        "netTuition = tuition / 0.25m;",
        "netTuition = tuition * 25m;",
        "netTuition = tuition - (tuition * 0.25m);"
      ],
      "opts": [
        "netTuition = tuition - 25m;",
        "netTuition = tuition / 0.25m;",
        "netTuition = tuition * 25m;",
        "netTuition = tuition - (tuition * 0.25m);"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "A 25% discount deducts (tuition * 0.25m) from the tuition: netTuition = tuition - (tuition * 0.25m) or tuition * 0.75m (Gaddis Ch 3.4).",
      "explanation": "A 25% discount deducts (tuition * 0.25m) from the tuition: netTuition = tuition - (tuition * 0.25m) or tuition * 0.75m (Gaddis Ch 3.4).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_371",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Based on the specification's installment payment plan rules, how many monthly installment records should be generated in lstInstallments?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Based on the specification's installment payment plan rules, how many monthly installment records should be generated in lstInstallments?",
      "options": [
        "Exactly 4 monthly installment items",
        "12 monthly installment items",
        "1 lump sum item",
        "2 semester items"
      ],
      "opts": [
        "Exactly 4 monthly installment items",
        "12 monthly installment items",
        "1 lump sum item",
        "2 semester items"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The specification states the semester fee is divided into 4 equal monthly installments for Months 1 through 4 (Gaddis Ch 5).",
      "explanation": "The specification states the semester fee is divided into 4 equal monthly installments for Months 1 through 4 (Gaddis Ch 5).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_372",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which count-controlled loop header correctly iterates through the fixed 4 semester installment months (Month 1 through Month 4)?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Which count-controlled loop header correctly iterates through the fixed 4 semester installment months (Month 1 through Month 4)?",
      "options": [
        "while (true)",
        "for (int month = 1; month <= 4; month++)",
        "do { month++; } while (month < 4);",
        "for (int month = 0; month < 3; month++)"
      ],
      "opts": [
        "while (true)",
        "for (int month = 1; month <= 4; month++)",
        "do { month++; } while (month < 4);",
        "for (int month = 0; month < 3; month++)"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "A for loop initializing at month = 1 with condition month <= 4 and increment month++ iterates exactly 4 times for months 1, 2, 3, 4 (Gaddis Ch 5.5).",
      "explanation": "A for loop initializing at month = 1 with condition month <= 4 and increment month++ iterates exactly 4 times for months 1, 2, 3, 4 (Gaddis Ch 5.5).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_373",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Inside the installment loop, which statement correctly adds a formatted installment line for month 'm' and decimal amount 'monthlyAmount' to lstInstallments?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Inside the installment loop, which statement correctly adds a formatted installment line for month 'm' and decimal amount 'monthlyAmount' to lstInstallments?",
      "options": [
        "lstInstallments.Add($\"Month {m}: {monthlyAmount:C}\");",
        "lstInstallments.Items = $\"Month {m}: {monthlyAmount:C}\";",
        "lstInstallments.Items.Add($\"Month {m}: {monthlyAmount:C}\");",
        "lstInstallments.Text = $\"Month {m}: {monthlyAmount:C}\";"
      ],
      "opts": [
        "lstInstallments.Add($\"Month {m}: {monthlyAmount:C}\");",
        "lstInstallments.Items = $\"Month {m}: {monthlyAmount:C}\";",
        "lstInstallments.Items.Add($\"Month {m}: {monthlyAmount:C}\");",
        "lstInstallments.Text = $\"Month {m}: {monthlyAmount:C}\";"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Items.Add() is the collection method for inserting entries into a ListBox. String interpolation with :C formats the amount as South African currency (Gaddis Ch 4.11).",
      "explanation": "Items.Add() is the collection method for inserting entries into a ListBox. String interpolation with :C formats the amount as South African currency (Gaddis Ch 4.11).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_374",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to the business rules, full-time semester registration permits between 1 and 25 credits. Which conditional statement correctly enforces this boundary condition?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] According to the business rules, full-time semester registration permits between 1 and 25 credits. Which conditional statement correctly enforces this boundary condition?",
      "options": [
        "if (credits > 25)",
        "if (credits == 0 || credits == 25)",
        "while (credits < 25) { credits++; }",
        "if (credits < 1 || credits > 25) { MessageBox.Show(\"Credits must be between 1 and 25.\", \"Invalid Credits\"); txtCredits.Focus(); return; }"
      ],
      "opts": [
        "if (credits > 25)",
        "if (credits == 0 || credits == 25)",
        "while (credits < 25) { credits++; }",
        "if (credits < 1 || credits > 25) { MessageBox.Show(\"Credits must be between 1 and 25.\", \"Invalid Credits\"); txtCredits.Focus(); return; }"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The condition credits < 1 || credits > 25 catches any value outside the valid range [1, 25], displays an error message, restores focus, and halts (Gaddis Ch 4.9).",
      "explanation": "The condition credits < 1 || credits > 25 catches any value outside the valid range [1, 25], displays an error message, restores focus, and halts (Gaddis Ch 4.9).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_375",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] When credit input validation fails, what C# method call returns the keyboard input cursor directly to the credit input TextBox?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] When credit input validation fails, what C# method call returns the keyboard input cursor directly to the credit input TextBox?",
      "options": [
        "txtCredits.Focus();",
        "txtCredits.Select();",
        "txtCredits.Clear();",
        "txtCredits.BringToFront();"
      ],
      "opts": [
        "txtCredits.Focus();",
        "txtCredits.Select();",
        "txtCredits.Clear();",
        "txtCredits.BringToFront();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "The Focus() method moves keyboard focus to the specified control (Gaddis Ch 3.8).",
      "explanation": "The Focus() method moves keyboard focus to the specified control (Gaddis Ch 3.8).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_376",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Following NWU usability guidelines, which method should be called immediately after txtCredits.Focus() so that the user can immediately overwrite the invalid entry without manual backspacing?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Following NWU usability guidelines, which method should be called immediately after txtCredits.Focus() so that the user can immediately overwrite the invalid entry without manual backspacing?",
      "options": [
        "txtCredits.ResetText();",
        "txtCredits.SelectAll();",
        "txtCredits.ClearUndo();",
        "txtCredits.Refresh();"
      ],
      "opts": [
        "txtCredits.ResetText();",
        "txtCredits.SelectAll();",
        "txtCredits.ClearUndo();",
        "txtCredits.Refresh();"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "SelectAll() highlights all text in the TextBox so typing immediately replaces the contents (Gaddis Ch 3.8).",
      "explanation": "SelectAll() highlights all text in the TextBox so typing immediately replaces the contents (Gaddis Ch 3.8).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_377",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If integer conversion is attempted using int.Parse(txtCredits.Text) instead of int.TryParse, what specific exception is thrown when the TextBox contains non-numeric text like 'twelve'?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If integer conversion is attempted using int.Parse(txtCredits.Text) instead of int.TryParse, what specific exception is thrown when the TextBox contains non-numeric text like 'twelve'?",
      "options": [
        "DivideByZeroException",
        "OverflowException",
        "FormatException",
        "IndexOutOfRangeException"
      ],
      "opts": [
        "DivideByZeroException",
        "OverflowException",
        "FormatException",
        "IndexOutOfRangeException"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "FormatException occurs when the format of an argument is invalid and cannot be converted to the target numeric type (Gaddis Ch 3.7).",
      "explanation": "FormatException occurs when the format of an argument is invalid and cannot be converted to the target numeric type (Gaddis Ch 3.7).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_378",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What boolean property indicates whether the user has ticked the residence accommodation CheckBox (chkResidence)?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] What boolean property indicates whether the user has ticked the residence accommodation CheckBox (chkResidence)?",
      "options": [
        "chkResidence.Selected",
        "chkResidence.Value == 1",
        "chkResidence.State == \"True\"",
        "chkResidence.Checked"
      ],
      "opts": [
        "chkResidence.Selected",
        "chkResidence.Value == 1",
        "chkResidence.State == \"True\"",
        "chkResidence.Checked"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The Checked property is of type bool and returns true if ticked, false otherwise (Gaddis Ch 4.10).",
      "explanation": "The Checked property is of type bool and returns true if ticked, false otherwise (Gaddis Ch 4.10).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_379",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] In the chkBursary_CheckedChanged event handler, what statement ensures that the bursary percentage TextBox (txtBursaryPercent) is only editable when the bursary CheckBox is ticked?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] In the chkBursary_CheckedChanged event handler, what statement ensures that the bursary percentage TextBox (txtBursaryPercent) is only editable when the bursary CheckBox is ticked?",
      "options": [
        "txtBursaryPercent.Enabled = chkBursary.Checked;",
        "txtBursaryPercent.Visible = false;",
        "txtBursaryPercent.ReadOnly = chkBursary.Checked;",
        "txtBursaryPercent.Focus();"
      ],
      "opts": [
        "txtBursaryPercent.Enabled = chkBursary.Checked;",
        "txtBursaryPercent.Visible = false;",
        "txtBursaryPercent.ReadOnly = chkBursary.Checked;",
        "txtBursaryPercent.Focus();"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Setting Enabled = chkBursary.Checked enables the input when checked and disables it when unchecked, preventing invalid bursary entries (Gaddis Ch 4.10).",
      "explanation": "Setting Enabled = chkBursary.Checked enables the input when checked and disables it when unchecked, preventing invalid bursary entries (Gaddis Ch 4.10).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_380",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If a report requires the bursary discount percentage to be displayed as a fixed decimal number with 2 decimal places without currency symbols (e.g. '25.00'), which format string must be passed to .ToString()?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] If a report requires the bursary discount percentage to be displayed as a fixed decimal number with 2 decimal places without currency symbols (e.g. '25.00'), which format string must be passed to .ToString()?",
      "options": [
        "\"C2\"",
        "\"F2\"",
        "\"D2\"",
        "\"P2\""
      ],
      "opts": [
        "\"C2\"",
        "\"F2\"",
        "\"D2\"",
        "\"P2\""
      ],
      "answer": 1,
      "ans": 1,
      "exp": "\"F2\" formats as fixed-point with exactly 2 decimal places without currency symbols (Gaddis Ch 3.5).",
      "explanation": "\"F2\" formats as fixed-point with exactly 2 decimal places without currency symbols (Gaddis Ch 3.5).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_381",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] In a standard Windows Forms architecture, where should the credit parsing, fee calculation, and installment generation code be placed?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] In a standard Windows Forms architecture, where should the credit parsing, fee calculation, and installment generation code be placed?",
      "options": [
        "Inside the Form1_Load event handler",
        "Inside the txtCredits_TextChanged event handler",
        "Inside the btnCalculate_Click event handler",
        "Inside the Form1_FormClosing event handler"
      ],
      "opts": [
        "Inside the Form1_Load event handler",
        "Inside the txtCredits_TextChanged event handler",
        "Inside the btnCalculate_Click event handler",
        "Inside the Form1_FormClosing event handler"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Calculations requiring user-initiated form processing belong in the calculate button click event handler (Gaddis Ch 2.4).",
      "explanation": "Calculations requiring user-initiated form processing belong in the calculate button click event handler (Gaddis Ch 2.4).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_382",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Displaying the complete breakdown of tuition, levies, bursary deductions, residence fees, and a 4-month installment schedule satisfies which of Shneiderman's 8 Golden Rules of Interface Design?",
      "title": "[NWU Dec 2023 Exam (Student Tuition Assessment)] Displaying the complete breakdown of tuition, levies, bursary deductions, residence fees, and a 4-month installment schedule satisfies which of Shneiderman's 8 Golden Rules of Interface Design?",
      "options": [
        "Rule 1: Strive for consistency only",
        "Rule 5: Prevent errors only",
        "Rule 8: Reduce short-term memory load only",
        "Rule 3: Offer informative feedback"
      ],
      "opts": [
        "Rule 1: Strive for consistency only",
        "Rule 5: Prevent errors only",
        "Rule 8: Reduce short-term memory load only",
        "Rule 3: Offer informative feedback"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Rule 3 requires systems to provide clear, informative feedback for every user action, ensuring transparency and confidence in calculation results (Shneiderman Ch 2).",
      "explanation": "Rule 3 requires systems to provide clear, informative feedback for every user action, ensuring transparency and confidence in calculation results (Shneiderman Ch 2).",
      "provenance": "NWU Dec 2023 Exam (Student Tuition Assessment) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_383",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What standard Hungarian notation prefix should be used when naming the radio button for the Gym Standard membership tier?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What standard Hungarian notation prefix should be used when naming the radio button for the Gym Standard membership tier?",
      "options": [
        "rdoStandard (or radStandard)",
        "btnStandard",
        "chkStandard",
        "opt_standard_tier"
      ],
      "opts": [
        "rdoStandard (or radStandard)",
        "btnStandard",
        "chkStandard",
        "opt_standard_tier"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "NWU standard Hungarian prefix for RadioButtons is 'rdo' or 'rad' (Gaddis Ch 4.10).",
      "explanation": "NWU standard Hungarian prefix for RadioButtons is 'rdo' or 'rad' (Gaddis Ch 4.10).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_384",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] According to the Membership Rates Table in the specification, if a member chooses VIP All-Access and adds a Personal Trainer, what is the monthly subtotal before VAT?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] According to the Membership Rates Table in the specification, if a member chooses VIP All-Access and adds a Personal Trainer, what is the monthly subtotal before VAT?",
      "options": [
        "R 600.00",
        "R 850.00",
        "R 950.00",
        "R 700.00"
      ],
      "opts": [
        "R 600.00",
        "R 850.00",
        "R 950.00",
        "R 700.00"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "From the rates table, VIP tier is R600.00/month. Personal trainer coaching is R250.00/month. VIP members receive private lockers free of charge. Subtotal = 600 + 250 = R850.00.",
      "explanation": "From the rates table, VIP tier is R600.00/month. Personal trainer coaching is R250.00/month. VIP members receive private lockers free of charge. Subtotal = 600 + 250 = R850.00.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_385",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Based on the 15% statutory VAT rate stated in the specification, which C# statement correctly calculates the tax amount from a 'subtotal' decimal variable?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Based on the 15% statutory VAT rate stated in the specification, which C# statement correctly calculates the tax amount from a 'subtotal' decimal variable?",
      "options": [
        "decimal vat = subtotal * 15;",
        "decimal vat = subtotal / 0.15m;",
        "decimal vat = subtotal * 0.15m;",
        "decimal vat = subtotal + 0.15m;"
      ],
      "opts": [
        "decimal vat = subtotal * 15;",
        "decimal vat = subtotal / 0.15m;",
        "decimal vat = subtotal * 0.15m;",
        "decimal vat = subtotal + 0.15m;"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "15% tax is calculated by multiplying the subtotal by 0.15m (Gaddis Ch 3.4).",
      "explanation": "15% tax is calculated by multiplying the subtotal by 0.15m (Gaddis Ch 3.4).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_386",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What is the final monthly debit order amount including 15% VAT for a member whose pre-tax subtotal is R850.00?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What is the final monthly debit order amount including 15% VAT for a member whose pre-tax subtotal is R850.00?",
      "options": [
        "R 850.00",
        "R 127.50",
        "R 1,000.00",
        "R 977.50"
      ],
      "opts": [
        "R 850.00",
        "R 127.50",
        "R 1,000.00",
        "R 977.50"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "VAT = R850.00 * 0.15 = R127.50. Monthly total = R850.00 + R127.50 = R977.50.",
      "explanation": "VAT = R850.00 * 0.15 = R127.50. Monthly total = R850.00 + R127.50 = R977.50.",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_387",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which loop statement correctly accumulates and populates the 12-month cumulative debit order projection into lstDebitOrders?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which loop statement correctly accumulates and populates the 12-month cumulative debit order projection into lstDebitOrders?",
      "options": [
        "for (int m = 1; m <= 12; m++) { lstDebitOrders.Items.Add($\"Month {m:D2}: Cumulative Total = {(m * monthlyTotal):C}\"); }",
        "while (m <= 12) { lstDebitOrders.Items.Add(monthlyTotal); }",
        "do { lstDebitOrders.Items.Add(12); } while (false);",
        "for (int m = 1; m < 12; m--) { lstDebitOrders.Items.Add(m); }"
      ],
      "opts": [
        "for (int m = 1; m <= 12; m++) { lstDebitOrders.Items.Add($\"Month {m:D2}: Cumulative Total = {(m * monthlyTotal):C}\"); }",
        "while (m <= 12) { lstDebitOrders.Items.Add(monthlyTotal); }",
        "do { lstDebitOrders.Items.Add(12); } while (false);",
        "for (int m = 1; m < 12; m--) { lstDebitOrders.Items.Add(m); }"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "A count-controlled loop running from m = 1 to 12 computes cumulative cost (m * monthlyTotal) and adds it to lstDebitOrders (Gaddis Ch 5.5).",
      "explanation": "A count-controlled loop running from m = 1 to 12 computes cumulative cost (m * monthlyTotal) and adds it to lstDebitOrders (Gaddis Ch 5.5).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_388",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] What defensive validation check should be performed if a user clicks Calculate Debit Order without selecting any membership tier radio button?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] What defensive validation check should be performed if a user clicks Calculate Debit Order without selecting any membership tier radio button?",
      "options": [
        "Silently default to the VIP tier without notifying the user",
        "Display a MessageBox prompting the user to select a tier and halt execution (return;)",
        "Allow the calculation to proceed with a negative base rate",
        "Close the application immediately"
      ],
      "opts": [
        "Silently default to the VIP tier without notifying the user",
        "Display a MessageBox prompting the user to select a tier and halt execution (return;)",
        "Allow the calculation to proceed with a negative base rate",
        "Close the application immediately"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Validating that at least one radio button is checked prevents unhandled null reference or zero-rate calculation errors (Gaddis Ch 4.10).",
      "explanation": "Validating that at least one radio button is checked prevents unhandled null reference or zero-rate calculation errors (Gaddis Ch 4.10).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_389",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which boolean expression correctly determines that NO membership tier radio button has been selected in grpTiers?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which boolean expression correctly determines that NO membership tier radio button has been selected in grpTiers?",
      "options": [
        "if (rdoStandard.Checked && rdoPremium.Checked && rdoVip.Checked)",
        "if (grpTiers.Text == \"\")",
        "if (!rdoStandard.Checked && !rdoPremium.Checked && !rdoVip.Checked)",
        "if (rdoStandard == null)"
      ],
      "opts": [
        "if (rdoStandard.Checked && rdoPremium.Checked && rdoVip.Checked)",
        "if (grpTiers.Text == \"\")",
        "if (!rdoStandard.Checked && !rdoPremium.Checked && !rdoVip.Checked)",
        "if (rdoStandard == null)"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Logical AND with negation (!rdoStandard.Checked && !rdoPremium.Checked && !rdoVip.Checked) evaluates to true when all radio buttons in the group are unchecked (Gaddis Ch 4.6).",
      "explanation": "Logical AND with negation (!rdoStandard.Checked && !rdoPremium.Checked && !rdoVip.Checked) evaluates to true when all radio buttons in the group are unchecked (Gaddis Ch 4.6).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_390",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Before generating a new 12-month projection in btnCalculate_Click, which method must be called to ensure previous records are not duplicated?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Before generating a new 12-month projection in btnCalculate_Click, which method must be called to ensure previous records are not duplicated?",
      "options": [
        "lstDebitOrders.Clear();",
        "lstDebitOrders.ResetText();",
        "lstDebitOrders.Items.Remove();",
        "lstDebitOrders.Items.Clear();"
      ],
      "opts": [
        "lstDebitOrders.Clear();",
        "lstDebitOrders.ResetText();",
        "lstDebitOrders.Items.Remove();",
        "lstDebitOrders.Items.Clear();"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "lstDebitOrders.Items.Clear() removes all existing items from the ListBox collection (Gaddis Ch 4.11).",
      "explanation": "lstDebitOrders.Items.Clear() removes all existing items from the ListBox collection (Gaddis Ch 4.11).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_391",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] In Visual C# Windows Forms development, why must monetary values (subtotal, VAT, monthly debit order) be declared as 'decimal' rather than 'double' or 'float'?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] In Visual C# Windows Forms development, why must monetary values (subtotal, VAT, monthly debit order) be declared as 'decimal' rather than 'double' or 'float'?",
      "options": [
        "decimal offers 128-bit precision and eliminates binary floating-point rounding errors inherent to financial calculations",
        "double cannot be displayed in a Label control",
        "decimal variables take up less memory than int variables",
        "C# does not allow double variables to be multiplied by constants"
      ],
      "opts": [
        "decimal offers 128-bit precision and eliminates binary floating-point rounding errors inherent to financial calculations",
        "double cannot be displayed in a Label control",
        "decimal variables take up less memory than int variables",
        "C# does not allow double variables to be multiplied by constants"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "decimal provides 128-bit exact representation for base-10 financial amounts, avoiding floating-point rounding errors (Gaddis Ch 3.2).",
      "explanation": "decimal provides 128-bit exact representation for base-10 financial amounts, avoiding floating-point rounding errors (Gaddis Ch 3.2).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_392",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which C# format string formats the tax rate value 0.15m as '15.0%'?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which C# format string formats the tax rate value 0.15m as '15.0%'?",
      "options": [
        "(0.15m).ToString(\"C1\")",
        "(0.15m).ToString(\"P1\")",
        "(0.15m).ToString(\"F1\")",
        "(0.15m).ToString(\"N1\")"
      ],
      "opts": [
        "(0.15m).ToString(\"C1\")",
        "(0.15m).ToString(\"P1\")",
        "(0.15m).ToString(\"F1\")",
        "(0.15m).ToString(\"N1\")"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "\"P1\" multiplies the value by 100, appends the % symbol, and displays 1 decimal digit: \"15.0%\" (Gaddis Ch 3.5).",
      "explanation": "\"P1\" multiplies the value by 100, appends the % symbol, and displays 1 decimal digit: \"15.0%\" (Gaddis Ch 3.5).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_393",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property on Form1 sets the overall background color of the graphical user interface window?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property on Form1 sets the overall background color of the graphical user interface window?",
      "options": [
        "ForeColor",
        "Background",
        "BackColor",
        "Color"
      ],
      "opts": [
        "ForeColor",
        "Background",
        "BackColor",
        "Color"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "BackColor sets the background color of the form or control (Gaddis Ch 3.8).",
      "explanation": "BackColor sets the background color of the form or control (Gaddis Ch 3.8).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_394",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property is used to change the font color of output text inside a Label control (e.g. setting an overdue balance to Red)?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which property is used to change the font color of output text inside a Label control (e.g. setting an overdue balance to Red)?",
      "options": [
        "TextColor",
        "FontColor",
        "PaintColor",
        "ForeColor"
      ],
      "opts": [
        "TextColor",
        "FontColor",
        "PaintColor",
        "ForeColor"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "ForeColor determines the text/font color displayed in Windows Forms controls (Gaddis Ch 3.8).",
      "explanation": "ForeColor determines the text/font color displayed in Windows Forms controls (Gaddis Ch 3.8).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_395",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] In professional Windows Forms applications, what is the effect of setting FormBorderStyle = FormBorderStyle.FixedSingle?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] In professional Windows Forms applications, what is the effect of setting FormBorderStyle = FormBorderStyle.FixedSingle?",
      "options": [
        "It prevents the user from resizing the window by dragging its border edges",
        "It removes the window title bar completely",
        "It automatically centers the form on the display monitor",
        "It disables the application's minimize button only"
      ],
      "opts": [
        "It prevents the user from resizing the window by dragging its border edges",
        "It removes the window title bar completely",
        "It automatically centers the form on the display monitor",
        "It disables the application's minimize button only"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "FixedSingle produces a fixed, single-line border that cannot be resized by dragging (Gaddis Ch 2.3).",
      "explanation": "FixedSingle produces a fixed, single-line border that cannot be resized by dragging (Gaddis Ch 2.3).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_396",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which Form property should be configured so that the FitLife application window launches centered on the computer monitor?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which Form property should be configured so that the FitLife application window launches centered on the computer monitor?",
      "options": [
        "CenterToScreen = true;",
        "StartPosition = FormStartPosition.CenterScreen;",
        "Location = new Point(0, 0);",
        "WindowState = FormWindowState.Normal;"
      ],
      "opts": [
        "CenterToScreen = true;",
        "StartPosition = FormStartPosition.CenterScreen;",
        "Location = new Point(0, 0);",
        "WindowState = FormWindowState.Normal;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Setting StartPosition to CenterScreen positions the form in the center of the display when shown (Gaddis Ch 2.3).",
      "explanation": "Setting StartPosition to CenterScreen positions the form in the center of the display when shown (Gaddis Ch 2.3).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_397",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which code snippet correctly displays a confirmation dialog with Yes/No buttons and only closes the form if the user clicks Yes?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Which code snippet correctly displays a confirmation dialog with Yes/No buttons and only closes the form if the user clicks Yes?",
      "options": [
        "MessageBox.Show(\"Exit?\", \"Confirm\", MessageBoxButtons.YesNo); this.Close();",
        "if (MessageBox.Show(\"Exit\") == true) this.Close();",
        "DialogResult result = MessageBox.Show(\"Are you sure you want to exit?\", \"Confirm Exit\", MessageBoxButtons.YesNo, MessageBoxIcon.Question); if (result == DialogResult.Yes) { this.Close(); }",
        "if (this.Close() == DialogResult.Yes) { MessageBox.Show(\"Exited\"); }"
      ],
      "opts": [
        "MessageBox.Show(\"Exit?\", \"Confirm\", MessageBoxButtons.YesNo); this.Close();",
        "if (MessageBox.Show(\"Exit\") == true) this.Close();",
        "DialogResult result = MessageBox.Show(\"Are you sure you want to exit?\", \"Confirm Exit\", MessageBoxButtons.YesNo, MessageBoxIcon.Question); if (result == DialogResult.Yes) { this.Close(); }",
        "if (this.Close() == DialogResult.Yes) { MessageBox.Show(\"Exited\"); }"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "MessageBox.Show returns a DialogResult enum. Testing result == DialogResult.Yes ensures the form closes only upon user confirmation (Gaddis Ch 4.9).",
      "explanation": "MessageBox.Show returns a DialogResult enum. Testing result == DialogResult.Yes ensures the form closes only upon user confirmation (Gaddis Ch 4.9).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_398",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Dec 2022 Exam (Gym Membership Billing)] Validating that a membership tier is selected before proceeding with debit order calculations adheres to which of Shneiderman's 8 Golden Rules?",
      "title": "[NWU Dec 2022 Exam (Gym Membership Billing)] Validating that a membership tier is selected before proceeding with debit order calculations adheres to which of Shneiderman's 8 Golden Rules?",
      "options": [
        "Rule 8: Reduce short-term memory load",
        "Rule 4: Design dialogs to yield closure",
        "Rule 2: Cater to universal usability",
        "Rule 5: Prevent errors"
      ],
      "opts": [
        "Rule 8: Reduce short-term memory load",
        "Rule 4: Design dialogs to yield closure",
        "Rule 2: Cater to universal usability",
        "Rule 5: Prevent errors"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Rule 5 focuses on designing systems to prevent user error before illegal states or crash exceptions occur (Shneiderman Ch 2).",
      "explanation": "Rule 5 focuses on designing systems to prevent user error before illegal states or crash exceptions occur (Shneiderman Ch 2).",
      "provenance": "NWU Dec 2022 Exam (Gym Membership Billing) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_399",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Following NWU standard naming conventions, what identifier should be assigned to the TextBox used for entering the number of booking nights?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Following NWU standard naming conventions, what identifier should be assigned to the TextBox used for entering the number of booking nights?",
      "options": [
        "txtNights",
        "tbNights",
        "nightsInput",
        "txt_stay_duration"
      ],
      "opts": [
        "txtNights",
        "tbNights",
        "nightsInput",
        "txt_stay_duration"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Standard Hungarian notation requires 'txt' prefix followed by descriptive PascalCase identifier: txtNights (Gaddis Ch 2).",
      "explanation": "Standard Hungarian notation requires 'txt' prefix followed by descriptive PascalCase identifier: txtNights (Gaddis Ch 2).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_400",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] According to the Room Rates Table in the specification, what is the room charge for a guest staying 3 nights in a Standard Room?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] According to the Room Rates Table in the specification, what is the room charge for a guest staying 3 nights in a Standard Room?",
      "options": [
        "R 1,900.00",
        "R 2,850.00",
        "R 4,350.00",
        "R 3,000.00"
      ],
      "opts": [
        "R 1,900.00",
        "R 2,850.00",
        "R 4,350.00",
        "R 3,000.00"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "From the rates table, Standard Room is R950.00 per night. 3 nights * R950.00 = R2,850.00.",
      "explanation": "From the rates table, Standard Room is R950.00 per night. 3 nights * R950.00 = R2,850.00.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_401",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Based on the specification rules, how is the optional buffet breakfast charge calculated for 2 guests staying 3 nights?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Based on the specification rules, how is the optional buffet breakfast charge calculated for 2 guests staying 3 nights?",
      "options": [
        "3 * 120m = R360.00",
        "2 * 120m = R240.00",
        "3 * 2 * 120m = R720.00",
        "120m = R120.00 flat"
      ],
      "opts": [
        "3 * 120m = R360.00",
        "2 * 120m = R240.00",
        "3 * 2 * 120m = R720.00",
        "120m = R120.00 flat"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "The specification sets breakfast at R120.00 per guest per night. 3 nights * 2 guests * R120.00 = R720.00.",
      "explanation": "The specification sets breakfast at R120.00 per guest per night. 3 nights * 2 guests * R120.00 = R720.00.",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_402",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] According to GUI design principles in CMPG122, which control structure should be used to allow guests to choose between Standard, Deluxe, and Penthouse rooms?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] According to GUI design principles in CMPG122, which control structure should be used to allow guests to choose between Standard, Deluxe, and Penthouse rooms?",
      "options": [
        "CheckBoxes placed directly on the form",
        "A single multiline TextBox",
        "A Timer control",
        "RadioButtons enclosed inside a GroupBox (grpRoomType)"
      ],
      "opts": [
        "CheckBoxes placed directly on the form",
        "A single multiline TextBox",
        "A Timer control",
        "RadioButtons enclosed inside a GroupBox (grpRoomType)"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "RadioButtons in a GroupBox guarantee mutual exclusion so that selecting one room tier automatically deselects the others (Gaddis Ch 4.10).",
      "explanation": "RadioButtons in a GroupBox guarantee mutual exclusion so that selecting one room tier automatically deselects the others (Gaddis Ch 4.10).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_403",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] The specification states that bookings must be between 1 and 30 nights inclusive. Which conditional statement correctly enforces this range?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] The specification states that bookings must be between 1 and 30 nights inclusive. Which conditional statement correctly enforces this range?",
      "options": [
        "if (nights >= 1 && nights <= 30)",
        "if (nights < 1 || nights > 30)",
        "if (nights == 1 && nights == 30)",
        "if (nights != 0)"
      ],
      "opts": [
        "if (nights >= 1 && nights <= 30)",
        "if (nights < 1 || nights > 30)",
        "if (nights == 1 && nights == 30)",
        "if (nights != 0)"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "nights >= 1 && nights <= 30 verifies that nights falls within the inclusive interval [1, 30] (Gaddis Ch 4.6).",
      "explanation": "nights >= 1 && nights <= 30 verifies that nights falls within the inclusive interval [1, 30] (Gaddis Ch 4.6).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_404",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which C# statement safely parses the text in txtGuests into an integer variable 'guests' without throwing a FormatException on invalid input?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which C# statement safely parses the text in txtGuests into an integer variable 'guests' without throwing a FormatException on invalid input?",
      "options": [
        "guests = int.Parse(txtGuests.Text);",
        "int.TryParse(txtGuests.Text, out guests)",
        "guests = (int)txtGuests.Text;",
        "guests = Convert.ToInt32(txtGuests);"
      ],
      "opts": [
        "guests = int.Parse(txtGuests.Text);",
        "int.TryParse(txtGuests.Text, out guests)",
        "guests = (int)txtGuests.Text;",
        "guests = Convert.ToInt32(txtGuests);"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "int.TryParse returns false on bad input rather than throwing an exception (Gaddis Ch 4.9).",
      "explanation": "int.TryParse returns false on bad input rather than throwing an exception (Gaddis Ch 4.9).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_405",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] According to the specification, the system must generate a random 4-digit booking confirmation reference between 1000 and 9999. Which statement implements this correctly?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] According to the specification, the system must generate a random 4-digit booking confirmation reference between 1000 and 9999. Which statement implements this correctly?",
      "options": [
        "int refNo = rand.Next(1000, 9999);",
        "int refNo = Math.Random(1000, 9999);",
        "int refNo = rand.Next(1000, 10000);",
        "int refNo = rand.Next(4);"
      ],
      "opts": [
        "int refNo = rand.Next(1000, 9999);",
        "int refNo = Math.Random(1000, 9999);",
        "int refNo = rand.Next(1000, 10000);",
        "int refNo = rand.Next(4);"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "rand.Next(min, maxExclusive) excludes the upper bound. To include 9999, the upper bound must be 10000 (Gaddis Ch 5.7).",
      "explanation": "rand.Next(min, maxExclusive) excludes the upper bound. To include 9999, the upper bound must be 10000 (Gaddis Ch 5.7).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_406",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] In Visual C# Windows Forms, why should the Random object instance (rand) be declared as a private class-level field rather than instantiated locally inside btnConfirm_Click?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] In Visual C# Windows Forms, why should the Random object instance (rand) be declared as a private class-level field rather than instantiated locally inside btnConfirm_Click?",
      "options": [
        "Because local variables cannot be accessed by methods in the same class",
        "Because C# disallows new Random() inside event handlers",
        "Because the Random class cannot generate integers without static methods",
        "To prevent rapid successive clicks from creating new generators with identical system clock seeds, which would generate duplicate reference numbers"
      ],
      "opts": [
        "Because local variables cannot be accessed by methods in the same class",
        "Because C# disallows new Random() inside event handlers",
        "Because the Random class cannot generate integers without static methods",
        "To prevent rapid successive clicks from creating new generators with identical system clock seeds, which would generate duplicate reference numbers"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Instantiating Random repeatedly in short intervals causes identical system clock seeds, generating identical sequences (Gaddis Ch 5.7).",
      "explanation": "Instantiating Random repeatedly in short intervals causes identical system clock seeds, generating identical sequences (Gaddis Ch 5.7).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_407",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What format specifier must be passed to .ToString() to display the total booking cost formatted with currency symbol and 2 decimal places in lblTotalDue?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What format specifier must be passed to .ToString() to display the total booking cost formatted with currency symbol and 2 decimal places in lblTotalDue?",
      "options": [
        "lblTotalDue.Text = total.ToString(\"C\");",
        "lblTotalDue.Text = total.ToString(\"D\");",
        "lblTotalDue.Text = total.ToString(\"F\");",
        "lblTotalDue.Text = total.ToString(\"N\");"
      ],
      "opts": [
        "lblTotalDue.Text = total.ToString(\"C\");",
        "lblTotalDue.Text = total.ToString(\"D\");",
        "lblTotalDue.Text = total.ToString(\"F\");",
        "lblTotalDue.Text = total.ToString(\"N\");"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "ToString(\"C\") formats numbers with local currency symbol, grouping separators, and two decimal places (Gaddis Ch 3.5).",
      "explanation": "ToString(\"C\") formats numbers with local currency symbol, grouping separators, and two decimal places (Gaddis Ch 3.5).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_408",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which method call clears all booking details and previous receipts from lstReceipt?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which method call clears all booking details and previous receipts from lstReceipt?",
      "options": [
        "lstReceipt.Clear();",
        "lstReceipt.Items.Clear();",
        "lstReceipt.Reset();",
        "lstReceipt.Items.RemoveAll();"
      ],
      "opts": [
        "lstReceipt.Clear();",
        "lstReceipt.Items.Clear();",
        "lstReceipt.Reset();",
        "lstReceipt.Items.RemoveAll();"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "The collection method lstReceipt.Items.Clear() empties all items from the control (Gaddis Ch 4.11).",
      "explanation": "The collection method lstReceipt.Items.Clear() empties all items from the control (Gaddis Ch 4.11).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_409",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Before attempting to remove an item or read a selection from a ListBox (lstRooms), which condition safely verifies that the user has selected an item?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Before attempting to remove an item or read a selection from a ListBox (lstRooms), which condition safely verifies that the user has selected an item?",
      "options": [
        "if (lstRooms.SelectedIndex == 0)",
        "if (lstRooms.Items.Count > 0)",
        "if (lstRooms.SelectedIndex != -1)",
        "if (lstRooms.SelectedItem != null)"
      ],
      "opts": [
        "if (lstRooms.SelectedIndex == 0)",
        "if (lstRooms.Items.Count > 0)",
        "if (lstRooms.SelectedIndex != -1)",
        "if (lstRooms.SelectedItem != null)"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "When no item is selected, SelectedIndex equals -1. Testing != -1 ensures a valid item is chosen (Gaddis Ch 4.11).",
      "explanation": "When no item is selected, SelectedIndex equals -1. Testing != -1 ensures a valid item is chosen (Gaddis Ch 4.11).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_410",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] If code attempts to access lstRooms.Items[5] when the ListBox contains only 3 items, which runtime exception is thrown?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] If code attempts to access lstRooms.Items[5] when the ListBox contains only 3 items, which runtime exception is thrown?",
      "options": [
        "NullReferenceException",
        "FormatException",
        "DivideByZeroException",
        "ArgumentOutOfRangeException"
      ],
      "opts": [
        "NullReferenceException",
        "FormatException",
        "DivideByZeroException",
        "ArgumentOutOfRangeException"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Accessing a collection index outside [0, Count - 1] throws ArgumentOutOfRangeException (Gaddis Ch 4.11).",
      "explanation": "Accessing a collection index outside [0, Count - 1] throws ArgumentOutOfRangeException (Gaddis Ch 4.11).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_411",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which property setting ensures that btnConfirm is disabled upon form load until calculation validation passes?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which property setting ensures that btnConfirm is disabled upon form load until calculation validation passes?",
      "options": [
        "btnConfirm.Enabled = false;",
        "btnConfirm.Visible = false;",
        "btnConfirm.Active = false;",
        "btnConfirm.Locked = true;"
      ],
      "opts": [
        "btnConfirm.Enabled = false;",
        "btnConfirm.Visible = false;",
        "btnConfirm.Active = false;",
        "btnConfirm.Locked = true;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Enabled = false disables interaction while keeping the control visible (Gaddis Ch 4.10).",
      "explanation": "Enabled = false disables interaction while keeping the control visible (Gaddis Ch 4.10).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_412",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What visual feedback is rendered by the Windows Forms engine when a button's Enabled property is set to false?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] What visual feedback is rendered by the Windows Forms engine when a button's Enabled property is set to false?",
      "options": [
        "The button becomes invisible and transparent",
        "The button text and border appear dimmed/grayed-out and do not respond to mouse clicks or hover events",
        "The button flashes yellow to alert the user",
        "The button shrinks to zero size"
      ],
      "opts": [
        "The button becomes invisible and transparent",
        "The button text and border appear dimmed/grayed-out and do not respond to mouse clicks or hover events",
        "The button flashes yellow to alert the user",
        "The button shrinks to zero size"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Disabled controls are rendered with grayed-out text and border and do not respond to events (Gaddis Ch 4.10).",
      "explanation": "Disabled controls are rendered with grayed-out text and border and do not respond to events (Gaddis Ch 4.10).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_413",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Keeping the 'Confirm Booking' button disabled until the user has successfully validated room capacity and calculated the total demonstrates which Shneiderman Golden Rule?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Keeping the 'Confirm Booking' button disabled until the user has successfully validated room capacity and calculated the total demonstrates which Shneiderman Golden Rule?",
      "options": [
        "Rule 8: Reduce short-term memory load",
        "Rule 6: Permit easy reversal of actions",
        "Rule 5: Prevent errors",
        "Rule 2: Cater to universal usability"
      ],
      "opts": [
        "Rule 8: Reduce short-term memory load",
        "Rule 6: Permit easy reversal of actions",
        "Rule 5: Prevent errors",
        "Rule 2: Cater to universal usability"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "Disabling destructive or premature actions until prerequisites are met proactively prevents errors (Shneiderman Ch 2).",
      "explanation": "Disabling destructive or premature actions until prerequisites are met proactively prevents errors (Shneiderman Ch 2).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_414",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which C# statement properly closes the hotel reservation form when btnExit is clicked?",
      "title": "[NWU Nov 2021 Exam (Hotel Booking Engine)] Which C# statement properly closes the hotel reservation form when btnExit is clicked?",
      "options": [
        "Form.Exit();",
        "Application.Halt();",
        "Stop.Application();",
        "this.Close();"
      ],
      "opts": [
        "Form.Exit();",
        "Application.Halt();",
        "Stop.Application();",
        "this.Close();"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "'this.Close();' terminates the form instance safely (Gaddis Ch 2.4).",
      "explanation": "'this.Close();' terminates the form instance safely (Gaddis Ch 2.4).",
      "provenance": "NWU Nov 2021 Exam (Hotel Booking Engine) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_415",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] According to NWU Hungarian naming conventions, what name should be assigned to the TextBox used for entering the item unit price?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] According to NWU Hungarian naming conventions, what name should be assigned to the TextBox used for entering the item unit price?",
      "options": [
        "txtPrice",
        "tbPrice",
        "priceInput",
        "txt_price_val"
      ],
      "opts": [
        "txtPrice",
        "tbPrice",
        "priceInput",
        "txt_price_val"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Hungarian naming requires 'txt' prefix: txtPrice (Gaddis Ch 2).",
      "explanation": "Hungarian naming requires 'txt' prefix: txtPrice (Gaddis Ch 2).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_416",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which statement safely parses the quantity entered in txtQuantity into integer variable 'qty'?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which statement safely parses the quantity entered in txtQuantity into integer variable 'qty'?",
      "options": [
        "qty = int.Parse(txtQuantity.Text);",
        "int.TryParse(txtQuantity.Text, out qty)",
        "qty = Convert.ToInt32(txtQuantity);",
        "qty = (int)txtQuantity.Text;"
      ],
      "opts": [
        "qty = int.Parse(txtQuantity.Text);",
        "int.TryParse(txtQuantity.Text, out qty)",
        "qty = Convert.ToInt32(txtQuantity);",
        "qty = (int)txtQuantity.Text;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "int.TryParse safely parses string to int without throwing FormatException (Gaddis Ch 4.9).",
      "explanation": "int.TryParse safely parses string to int without throwing FormatException (Gaddis Ch 4.9).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_417",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If a cashier enters an item priced at R150.00 with a quantity of 3 units, what is the gross line subtotal before any discounts?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] If a cashier enters an item priced at R150.00 with a quantity of 3 units, what is the gross line subtotal before any discounts?",
      "options": [
        "R 300.00",
        "R 150.00",
        "R 450.00",
        "R 600.00"
      ],
      "opts": [
        "R 300.00",
        "R 150.00",
        "R 450.00",
        "R 600.00"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "3 units * R150.00 = R450.00.",
      "explanation": "3 units * R150.00 = R450.00.",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_418",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] According to the Volume Discounts Table in the specification, if a customer purchases 10 or more units of an item, how is the wholesale discount evaluated and calculated?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] According to the Volume Discounts Table in the specification, if a customer purchases 10 or more units of an item, how is the wholesale discount evaluated and calculated?",
      "options": [
        "if (qty > 15) { discount = subtotal * 0.10m; }",
        "if (qty == 10) { discount = 10m; }",
        "discount = subtotal / 10m;",
        "if (qty >= 10) { discount = subtotal * 0.15m; }"
      ],
      "opts": [
        "if (qty > 15) { discount = subtotal * 0.10m; }",
        "if (qty == 10) { discount = 10m; }",
        "discount = subtotal / 10m;",
        "if (qty >= 10) { discount = subtotal * 0.15m; }"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "The table specifies 10 or more units receives a 15% discount: if (qty >= 10) discount = subtotal * 0.15m; (Gaddis Ch 4.5).",
      "explanation": "The table specifies 10 or more units receives a 15% discount: if (qty >= 10) discount = subtotal * 0.15m; (Gaddis Ch 4.5).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_419",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Based on the specification rule awarding 1 loyalty point for every complete R50.00 spent on net sales, which C# expression correctly calculates whole points earned from 'netTotal'?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Based on the specification rule awarding 1 loyalty point for every complete R50.00 spent on net sales, which C# expression correctly calculates whole points earned from 'netTotal'?",
      "options": [
        "int points = (int)(netTotal / 50m);",
        "int points = netTotal * 50;",
        "int points = (int)netTotal % 50;",
        "int points = 50;"
      ],
      "opts": [
        "int points = (int)(netTotal / 50m);",
        "int points = netTotal * 50;",
        "int points = (int)netTotal % 50;",
        "int points = 50;"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Explicit cast (int)(netTotal / 50m) truncates the decimal portion, returning complete R50 blocks as whole integer points (Gaddis Ch 3.3).",
      "explanation": "Explicit cast (int)(netTotal / 50m) truncates the decimal portion, returning complete R50 blocks as whole integer points (Gaddis Ch 3.3).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_420",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which Windows Forms control is designed to display multiple scrollable itemized receipt lines in a point-of-sale terminal?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which Windows Forms control is designed to display multiple scrollable itemized receipt lines in a point-of-sale terminal?",
      "options": [
        "Label with AutoSize=true",
        "ListBox (lstReceipt)",
        "RadioButton",
        "PictureBox"
      ],
      "opts": [
        "Label with AutoSize=true",
        "ListBox (lstReceipt)",
        "RadioButton",
        "PictureBox"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "ListBox is specifically designed for holding collections of scrollable text items (Gaddis Ch 4.11).",
      "explanation": "ListBox is specifically designed for holding collections of scrollable text items (Gaddis Ch 4.11).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_421",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which C# statement correctly appends an itemized till line displaying product description, quantity, and line total to lstReceipt?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which C# statement correctly appends an itemized till line displaying product description, quantity, and line total to lstReceipt?",
      "options": [
        "lstReceipt.Text = item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\");",
        "lstReceipt.Items = item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\");",
        "lstReceipt.Items.Add(item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\"));",
        "lstReceipt.Add(item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\"));"
      ],
      "opts": [
        "lstReceipt.Text = item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\");",
        "lstReceipt.Items = item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\");",
        "lstReceipt.Items.Add(item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\"));",
        "lstReceipt.Add(item + \" x \" + qty + \" = \" + lineTotal.ToString(\"C\"));"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "lstReceipt.Items.Add(...) is the method for appending items to a ListBox (Gaddis Ch 4.11).",
      "explanation": "lstReceipt.Items.Add(...) is the method for appending items to a ListBox (Gaddis Ch 4.11).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_422",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] In the POS application, which variable declaration correctly maintains the cumulative session sales revenue across multiple customer checkouts?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] In the POS application, which variable declaration correctly maintains the cumulative session sales revenue across multiple customer checkouts?",
      "options": [
        "A local variable declared inside btnAddItem_Click",
        "A const variable declared inside Form1",
        "A local variable declared inside btnCheckout_Click",
        "A private class-level field variable: private decimal _sessionRevenue = 0m;"
      ],
      "opts": [
        "A local variable declared inside btnAddItem_Click",
        "A const variable declared inside Form1",
        "A local variable declared inside btnCheckout_Click",
        "A private class-level field variable: private decimal _sessionRevenue = 0m;"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Class-level field variables persist for the lifetime of the form and retain values across multiple button click events (Gaddis Ch 3.6).",
      "explanation": "Class-level field variables persist for the lifetime of the form and retain values across multiple button click events (Gaddis Ch 3.6).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_423",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What happens to a local variable declared inside an event handler method when the method finishes executing?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What happens to a local variable declared inside an event handler method when the method finishes executing?",
      "options": [
        "It is destroyed and its memory is deallocated; its value does not persist to the next event invocation",
        "It is automatically converted into a permanent field variable",
        "It is saved to a text file on the local hard drive",
        "It retains its value across all subsequent button clicks"
      ],
      "opts": [
        "It is destroyed and its memory is deallocated; its value does not persist to the next event invocation",
        "It is automatically converted into a permanent field variable",
        "It is saved to a text file on the local hard drive",
        "It retains its value across all subsequent button clicks"
      ],
      "answer": 0,
      "ans": 0,
      "exp": "Local variables exist only during method execution and are deallocated upon method exit (Gaddis Ch 3.6).",
      "explanation": "Local variables exist only during method execution and are deallocated upon method exit (Gaddis Ch 3.6).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_424",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] In btnNewSale_Click, which statement correctly resets the current transaction accumulator without erasing the shift session revenue?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] In btnNewSale_Click, which statement correctly resets the current transaction accumulator without erasing the shift session revenue?",
      "options": [
        "const _currentCartTotal = 0m;",
        "_currentCartTotal = 0m;",
        "decimal _currentCartTotal = 0m; (shadows field variable)",
        "Reset(_currentCartTotal);"
      ],
      "opts": [
        "const _currentCartTotal = 0m;",
        "_currentCartTotal = 0m;",
        "decimal _currentCartTotal = 0m; (shadows field variable)",
        "Reset(_currentCartTotal);"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Reassigning _currentCartTotal = 0m resets the transaction accumulator. Declaring 'decimal _currentCartTotal = 0m;' creates a local shadow variable that fails to reset the field (Gaddis Ch 3.6).",
      "explanation": "Reassigning _currentCartTotal = 0m resets the transaction accumulator. Declaring 'decimal _currentCartTotal = 0m;' creates a local shadow variable that fails to reset the field (Gaddis Ch 3.6).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_425",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which defensive method call correctly verifies that the product name entered in txtItemName is not empty and does not contain only spaces?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Which defensive method call correctly verifies that the product name entered in txtItemName is not empty and does not contain only spaces?",
      "options": [
        "if (txtItemName.Text == null)",
        "if (txtItemName.Text.Length == 0)",
        "if (string.IsNullOrWhiteSpace(txtItemName.Text))",
        "if (txtItemName == null)"
      ],
      "opts": [
        "if (txtItemName.Text == null)",
        "if (txtItemName.Text.Length == 0)",
        "if (string.IsNullOrWhiteSpace(txtItemName.Text))",
        "if (txtItemName == null)"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "string.IsNullOrWhiteSpace checks for null, empty string (\"\"), and strings containing only whitespace characters (Gaddis Ch 4.9).",
      "explanation": "string.IsNullOrWhiteSpace checks for null, empty string (\"\"), and strings containing only whitespace characters (Gaddis Ch 4.9).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_426",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What format specifier formats an integer loyalty points count of 125 into a 5-digit string with leading zeros ('00125')?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What format specifier formats an integer loyalty points count of 125 into a 5-digit string with leading zeros ('00125')?",
      "options": [
        "(125).ToString(\"C5\")",
        "(125).ToString(\"F5\")",
        "(125).ToString(\"P5\")",
        "(125).ToString(\"D5\")"
      ],
      "opts": [
        "(125).ToString(\"C5\")",
        "(125).ToString(\"F5\")",
        "(125).ToString(\"P5\")",
        "(125).ToString(\"D5\")"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "\"D5\" formats integer numbers with at least 5 digits, padding with leading zeros if necessary: \"00125\" (Gaddis Ch 3.5).",
      "explanation": "\"D5\" formats integer numbers with at least 5 digits, padding with leading zeros if necessary: \"00125\" (Gaddis Ch 3.5).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_427",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What boolean property indicates whether the customer has presented a Gold Loyalty Card (chkGoldCard)?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What boolean property indicates whether the customer has presented a Gold Loyalty Card (chkGoldCard)?",
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
      "exp": "CheckBox.Checked returns a boolean (true if checked, false if unchecked) (Gaddis Ch 4.10).",
      "explanation": "CheckBox.Checked returns a boolean (true if checked, false if unchecked) (Gaddis Ch 4.10).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_428",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] According to the specification, if a customer possesses a Gold Loyalty Card, an additional 5% discount applies to the post-volume-discount subtotal (subtotal). How is the net line total computed?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] According to the specification, if a customer possesses a Gold Loyalty Card, an additional 5% discount applies to the post-volume-discount subtotal (subtotal). How is the net line total computed?",
      "options": [
        "netTotal = subtotal - 5m;",
        "netTotal = subtotal * 0.95m;",
        "netTotal = subtotal * 0.05m;",
        "netTotal = subtotal / 0.05m;"
      ],
      "opts": [
        "netTotal = subtotal - 5m;",
        "netTotal = subtotal * 0.95m;",
        "netTotal = subtotal * 0.05m;",
        "netTotal = subtotal / 0.05m;"
      ],
      "answer": 1,
      "ans": 1,
      "exp": "Deducting 5% leaves 95% of the balance: subtotal * 0.95m or subtotal - (subtotal * 0.05m) (Gaddis Ch 3.4).",
      "explanation": "Deducting 5% leaves 95% of the balance: subtotal * 0.95m or subtotal - (subtotal * 0.05m) (Gaddis Ch 3.4).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_429",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What MessageBoxButtons enum values should be passed to prompt the cashier with a standard OK/Cancel or Yes/No transaction confirmation dialog?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] What MessageBoxButtons enum values should be passed to prompt the cashier with a standard OK/Cancel or Yes/No transaction confirmation dialog?",
      "options": [
        "MessageBoxButtons.AbortRetryIgnore",
        "MessageBoxButtons.None",
        "MessageBoxButtons.YesNo (or MessageBoxButtons.OKCancel)",
        "MessageBoxButtons.Ignore"
      ],
      "opts": [
        "MessageBoxButtons.AbortRetryIgnore",
        "MessageBoxButtons.None",
        "MessageBoxButtons.YesNo (or MessageBoxButtons.OKCancel)",
        "MessageBoxButtons.Ignore"
      ],
      "answer": 2,
      "ans": 2,
      "exp": "MessageBoxButtons.YesNo and MessageBoxButtons.OKCancel provide two-option confirmation dialogs (Gaddis Ch 4.9).",
      "explanation": "MessageBoxButtons.YesNo and MessageBoxButtons.OKCancel provide two-option confirmation dialogs (Gaddis Ch 4.9).",
      "provenance": "NWU PEC 2024 Exam (Retail POS & Loyalty Register) Official Mark Step",
      "marks": 2
    },
    {
      "id": "q_su-exam_430",
      "ch": "SU-EXAM",
      "su": "SU-EXAM",
      "type": "mcq",
      "q": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Displaying the completed till receipt, net total, discount savings, and points earned on checkout satisfies which of Shneiderman's 8 Golden Rules?",
      "title": "[NWU PEC 2024 Exam (Retail POS & Loyalty Register)] Displaying the completed till receipt, net total, discount savings, and points earned on checkout satisfies which of Shneiderman's 8 Golden Rules?",
      "options": [
        "Rule 8: Reduce short-term memory load only",
        "Rule 1: Strive for consistency only",
        "Rule 2: Cater to universal usability only",
        "Rule 4: Design dialogs to yield closure & Rule 3: Offer informative feedback"
      ],
      "opts": [
        "Rule 8: Reduce short-term memory load only",
        "Rule 1: Strive for consistency only",
        "Rule 2: Cater to universal usability only",
        "Rule 4: Design dialogs to yield closure & Rule 3: Offer informative feedback"
      ],
      "answer": 3,
      "ans": 3,
      "exp": "Rule 4 states sequences of actions should be organized into groups with a beginning, middle, and end, yielding closure upon completion; Rule 3 offers informative feedback (Shneiderman Ch 2).",
      "explanation": "Rule 4 states sequences of actions should be organized into groups with a beginning, middle, and end, yielding closure upon completion; Rule 3 offers informative feedback (Shneiderman Ch 2).",
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
