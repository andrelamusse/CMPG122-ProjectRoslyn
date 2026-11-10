/**
 * NWU CMPG122 — Structured Curriculum, Learning Objectives & Topic Engineering Module
 * Covers all 7 Study Units (SU7, SU1–SU6) across Weeks 1–12.
 */
(function (root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_CURRICULUM = data;
    if (root.window) root.window.CMPG122_CURRICULUM = data;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  return {
  "moduleCode": "CMPG122",
  "moduleTitle": "User Interface Programming in Visual C#",
  "institution": "North-West University",
  "version": "9.2.0",
  "examWeightingModel": {
    "verifiedAgainst": [
      "CMPG 122 Module Outline Document (SU1–SU7, 12-week 120-hour curriculum)",
      "CMPG 122 Paper 1 Official Examination Structure (3 Hours, 100 Marks)"
    ],
    "totalMarks": 100,
    "durationMinutes": 180,
    "rationale": "Verified against the 12-week curriculum outcomes and 100-mark 3-hour sit-down assessment structure. Weightings reflect mark contribution across GUI/HCI design standards (20% combined across SU7 & SU1), data types/formatting/exceptions (15% SU2), selection & defensive TryParse validation (20% SU3), loops/sequential text files/dialogs/random (20% SU4), modular methods with ref/out (15% SU5), and multiform projects (10% SU6).",
    "allocations": {
      "SU7": 10,
      "SU1": 10,
      "SU2": 15,
      "SU3": 20,
      "SU4": 20,
      "SU5": 15,
      "SU6": 10
    },
    "difficultyTargets": {
      "Foundational": 25,
      "Intermediate": 45,
      "Advanced": 30
    }
  },
  "units": [
    {
      "id": "SU7",
      "code": "SU7",
      "shortTitle": "HCI Principles",
      "title": "Study Unit 7: Human-Computer Interaction Principles",
      "weeks": "Weeks 1–2",
      "examWeightPct": 10,
      "iconId": "users",
      "accentColor": "#38bdf8",
      "diagramId": "svg_su7_hci",
      "summary": "Measurable usability factors, universal usability, Shneiderman’s Eight Golden Rules applied to Windows Forms, and Norman’s Gulfs of Execution and Evaluation.",
      "learningObjectives": [
        "Evaluate interfaces using the five measurable usability factors.",
        "Apply universal usability across physical, cognitive, perceptual, and device differences.",
        "Translate Shneiderman’s Eight Golden Rules into concrete Windows Forms control choices.",
        "Diagnose usability breakdowns using Norman’s Gulf of Execution and Gulf of Evaluation.",
        "Design preventive input constraints, clear status feedback, and reversible user actions."
      ],
      "structuredTopics": [
        {
          "id": "su7_t1_usability_measures",
          "title": "Five Usability Measures & Universal Usability",
          "plainEnglish": "Usability is tested objectively through five measurable human factors, while universal usability ensures diverse users can operate the application reliably.",
          "terminology": "Time to learn (onboarding duration), Speed of performance (task completion time), Rate of errors by users (frequency/severity of mistakes), Retention over time (skill recall after a break), Subjective satisfaction (user comfort rating), and Universal usability (accommodating user & device diversity).",
          "syntax": "// Universal usability in Windows Forms:\nbtnCalculate.Text = \"&Calculate\"; // Keyboard mnemonic Alt+C\ntxtAmount.TabIndex = 0;           // Logical Tab navigation",
          "exampleScope": "fragment",
          "minimalExample": "// Event handler supporting fast keyboard-only workflow:\nprivate void btnClear_Click(object sender, EventArgs e)\n{\n    txtAmount.Clear();\n    lblTotal.Text = string.Empty;\n    txtAmount.Focus(); // Eliminates extra mouse reach\n}",
          "howItWorks": "Setting sequential TabIndex values, Access Keys (&), readable contrast, and automatic Focus() restoration reduces Time to Learn and Speed of Performance for both mouse and keyboard users.",
          "commonMistakes": [
            "Treating visual decoration as usability while ignoring high user error rates or slow data-entry flows.",
            "Hardcoding tiny font sizes or mouse-only interactions that exclude keyboard and screen-reader users."
          ],
          "importantDistinctions": "Subjective satisfaction measures how users FEEL about the interface, whereas Speed of performance and Rate of errors measure OBJECTIVE task outcomes—all five must be balanced depending on context (e.g., life-critical systems prioritize zero errors and speed over casual novelty).",
          "examExample": "A hospital dosage calculator prioritizes Rate of Errors and Speed of Performance first; a kiosk serving first-time citizens prioritizes Time to Learn and Universal Usability.",
          "relatedDefinitions": [
            "def_usability_measures",
            "def_universal_usability",
            "def_subjective_satisfaction",
            "def_access_key"
          ]
        },
        {
          "id": "su7_t2_golden_rules",
          "title": "Shneiderman’s Eight Golden Rules in Windows Forms",
          "plainEnglish": "Eight practical design heuristics that map directly to how you name, group, validate, and reset controls on a Windows Form.",
          "terminology": "Consistency, Universal Usability, Informative Feedback, Closure, Error Prevention, Easy Reversal of Actions, Internal Locus of Control, and Reducing Short-Term Memory Load.",
          "syntax": "// Rule 5 (Prevent Errors) + Rule 6 (Easy Reversal):\n// Constrain choices with RadioButtons & provide btnClear",
          "exampleScope": "fragment",
          "minimalExample": "private void btnSubmitOrder_Click(object sender, EventArgs e)\n{\n    if (lstItems.Items.Count == 0)\n    {\n        MessageBox.Show(\"Add at least one item before submitting.\", \"Order Empty\");\n        return;\n    }\n    lblStatus.Text = \"Order confirmed - Reference #1042.\"; // Closure + Feedback\n}",
          "howItWorks": "Every Golden Rule corresponds to concrete C# UI behaviour: consistent button placement/terminology (Rule 1), Alt shortcuts (Rule 2), output labels (Rule 3), confirmation summaries (Rule 4), RadioButtons/TryParse (Rule 5), Clear/Cancel buttons (Rule 6), user-driven Click events (Rule 7), and visible rate tables/ListBoxes so users never memorize codes (Rule 8).",
          "commonMistakes": [
            "Requiring users to type raw category codes (\"1\", \"2\", \"3\") into a TextBox instead of displaying named RadioButtons or a ListBox (violates Rules 5 & 8).",
            "Omitting a Clear/Reset or Cancel option so users must close and reopen the app to fix an entry (violates Rule 6)."
          ],
          "importantDistinctions": "Closure (Rule 4) specifically signals the completion of a multi-step task (e.g., \"Booking Saved\"), whereas Informative Feedback (Rule 3) applies to every ongoing interaction.",
          "examExample": "Displaying unit prices next to each CheckBox on an order form directly applies Rule 8 (Reduce short-term memory load) because the user recognises prices rather than recalling them.",
          "relatedDefinitions": [
            "def_eight_golden_rules",
            "def_informative_feedback",
            "def_locus_of_control",
            "def_error_prevention"
          ]
        },
        {
          "id": "su7_t3_norman_gulfs",
          "title": "Norman’s Action Cycle: Gulfs of Execution & Evaluation",
          "plainEnglish": "Users form an intention, act on interface controls (bridging the Gulf of Execution), and interpret the visual result (bridging the Gulf of Evaluation).",
          "terminology": "Seven Stages of Action: Goal -> Intention -> Action Specification -> Execution -> Perception -> Interpretation -> Evaluation; Gulf of Execution (intention-to-control gap); Gulf of Evaluation (display-to-understanding gap).",
          "syntax": "// Narrowing Gulf of Execution: clear Text caption \"&Save Report...\"\n// Narrowing Gulf of Evaluation: explicit status update\nlblSaveState.Text = \"Saved 24 student marks to Marks.txt\";",
          "exampleScope": "fragment",
          "minimalExample": "private void btnExport_Click(object sender, EventArgs e)\n{\n    // After writing file:\n    lblStatus.Text = \"Export complete: 15 records written.\";\n}",
          "howItWorks": "Clear labels, grouped controls (GroupBox), and enabled/disabled states help users figure out HOW to act (Execution). Immediate, unambiguous updates to output Labels or ListBoxes let users verify WHAT happened (Evaluation).",
          "commonMistakes": [
            "Reversing the two gulfs: blaming Gulf of Evaluation when a user cannot find which button to click (that is Gulf of Execution!).",
            "Performing a file save or calculation silently without updating any visible label or message (creates a wide Gulf of Evaluation)."
          ],
          "importantDistinctions": "Gulf of Execution asks: \"How do I make the system do what I want?\" Gulf of Evaluation asks: \"Did the system actually do what I wanted?\"",
          "examExample": "If a user clicks \"Calculate\" and nothing appears on screen because lblTotal.Visible was left false, the user faces a Gulf of Evaluation failure.",
          "relatedDefinitions": [
            "def_gulf_of_execution",
            "def_gulf_of_evaluation",
            "def_informative_feedback"
          ]
        },
        {
          "id": "su7_t4_error_prevention_recovery",
          "title": "Error Prevention, Validation & Constructive Recovery",
          "plainEnglish": "Prevent invalid inputs before they occur using constrained controls, and when invalid text is entered, explain how to fix it and return focus.",
          "terminology": "Input constraint, Defensive validation, Constructive error message, Focus restoration, Reversible state.",
          "syntax": "if (!decimal.TryParse(txtDeposit.Text, out decimal deposit) || deposit <= 0m)\n{\n    MessageBox.Show(\"Enter a deposit greater than R 0.00.\", \"Invalid Deposit\");\n    txtDeposit.SelectAll();\n    txtDeposit.Focus();\n    return;\n}",
          "exampleScope": "fragment",
          "minimalExample": "private void btnReset_Click(object sender, EventArgs e)\n{\n    txtDeposit.Clear();\n    radStandard.Checked = true;\n    lblQuote.Text = string.Empty;\n    txtDeposit.Focus();\n}",
          "howItWorks": "Instead of letting decimal.Parse crash with \"Input string was not in a correct format\", TryParse catches bad text cleanly, displays plain-English guidance, selects the offending input, and restores keyboard focus.",
          "commonMistakes": [
            "Showing hostile or vague messages like \"Error 0x04!\" or \"Wrong input\" without stating what valid values are expected.",
            "Clearing the entire 10-field form when only one field had a typo, forcing the user to re-type everything."
          ],
          "importantDistinctions": "Error prevention stops the error before submission (e.g., RadioButtons, disabling Submit until required selections exist); error recovery helps the user fix an error smoothly after detection.",
          "examExample": "Using a ListBox of valid campus names instead of a free-text TextBox eliminates spelling mistakes entirely (Error Prevention).",
          "relatedDefinitions": [
            "def_error_prevention",
            "def_tryparse",
            "def_focus_method"
          ]
        },
        {
          "id": "su7_t5_consistency_feedback",
          "title": "Interface Consistency & Visual Grouping",
          "plainEnglish": "Consistent naming, alignment, colour semantics, and GroupBox boundaries allow users to transfer knowledge effortlessly across forms.",
          "terminology": "Internal consistency (within the same app), External/platform consistency (standard Windows conventions), Visual hierarchy, GroupBox container.",
          "syntax": "// Consistent caption & formatting across all forms:\nlblSubtotal.Text = subtotal.ToString(\"C\");\nlblVat.Text = vat.ToString(\"C\");\nlblTotal.Text = total.ToString(\"C\");",
          "exampleScope": "fragment",
          "minimalExample": "// Consistent currency display and predictable Exit behaviour:\nprivate void btnExit_Click(object sender, EventArgs e)\n{\n    this.Close();\n}",
          "howItWorks": "When every form places primary actions consistently, formats currency identically with .ToString(\"C\"), and groups related options inside titled GroupBoxes, cognitive load drops sharply.",
          "commonMistakes": [
            "Labeling the close button \"Terminate\" on Form1, \"Quit\" on Form2, and \"Cancel\" on Form3 for the exact same action.",
            "Using red text for a successful confirmation message, conflicting with established error colour semantics."
          ],
          "importantDistinctions": "Consistency does NOT mean making every control look identical—output Labels should look clearly distinct from editable TextBoxes so affordances remain obvious.",
          "examExample": "Grouping \"Delivery Method\" RadioButtons inside grpDelivery and \"Extras\" CheckBoxes inside grpExtras communicates both visual structure and selection rules simultaneously.",
          "relatedDefinitions": [
            "def_eight_golden_rules",
            "def_radiobutton_checkbox_groupbox",
            "def_hungarian_notation"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. 5 Measurable Human Factors (Usability Goals) &amp; 5 Motivations</h4>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>5 Measurable Usability Goals</th><th>Core Evaluation Question</th><th>5 System Motivations &amp; Priority</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>1. Time to learn</strong></td><td>How long for a typical user to reach proficiency?</td><td><strong>Life-Critical</strong> (ATC, medical, nuclear): Zero errors &amp; reliability above all.</td></tr>\n        <tr><td><strong>2. Speed of performance</strong></td><td>How fast can benchmark tasks be carried out?</td><td><strong>Industrial / Commercial</strong> (banking, POS): Speed, low error rate, reduced training cost.</td></tr>\n        <tr><td><strong>3. Rate of errors by users</strong></td><td>How many and what kinds of errors occur?</td><td><strong>Office / Home / Entertainment</strong>: Ease of learning, low cognitive load, high satisfaction.</td></tr>\n        <tr><td><strong>4. Retention over time</strong></td><td>How well do users maintain knowledge after non-use?</td><td><strong>Exploratory / Creative / Collaborative</strong>: Transparent interface, rich workflow support.</td></tr>\n        <tr><td><strong>5. Subjective satisfaction</strong></td><td>Do users like using various aspects of the system?</td><td><strong>Socio-Technical Systems</strong> (voting, healthcare, ID): Trust, privacy, universal access.</td></tr>\n      </tbody>\n    </table></div>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Shneiderman's 8 Golden Rules of Interface Design</h4>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Golden Rule</th><th>Exact Definition</th><th>Visual C# Windows Forms Implementation</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>Rule 1: Strive for consistency</strong></td><td>Identical terminology, colours, layout, and naming across prompts and forms.</td><td>Standard Hungarian prefixes (<code>btn</code>, <code>txt</code>, <code>lbl</code>), consistent button placement and fonts.</td></tr>\n        <tr><td><strong>Rule 2: Cater to universal usability</strong></td><td>Recognize diverse needs (novice vs expert, elderly, disabled, colour-blind).</td><td>Access keys (<code>&amp;Calculate</code>), <code>AcceptButton</code>, redundant text + colour cues (<code>STOP</code> + red lamp).</td></tr>\n        <tr><td><strong>Rule 3: Offer informative feedback</strong></td><td>Every user action must produce an immediate, clear visual response.</td><td>Updating <code>lblTotal.Text</code> or appending to <code>lstReceipt.Items</code> immediately on button click.</td></tr>\n        <tr><td><strong>Rule 4: Design dialogs to yield closure</strong></td><td>Action sequences must have a beginning, middle, and end with final confirmation.</td><td>Displaying a completed receipt breakdown or confirmation <code>MessageBox</code> after checkout.</td></tr>\n        <tr><td><strong>Rule 5: Prevent errors</strong></td><td>Design the system so users cannot make serious errors; handle bad input gracefully.</td><td>Disable premature buttons (<code>Enabled = false</code>), use <code>RadioButton</code>/<code>ListBox</code>, validate with <code>TryParse</code>, restore <code>.Focus()</code> and <code>.SelectAll()</code>.</td></tr>\n        <tr><td><strong>Rule 6: Permit easy reversal of actions</strong></td><td>Allow actions to be undone to relieve user anxiety and encourage exploration.</td><td>Provide <code>btnClear</code> to reset inputs/outputs; prompt <code>MessageBoxButtons.YesNo</code> before exiting.</td></tr>\n        <tr><td><strong>Rule 7: Support internal locus of control</strong></td><td>Users must feel they are the initiators of actions, not controlled by the system.</td><td>Run logic inside explicit user events (<code>btnCalculate_Click</code>); avoid unsolicited pop-ups or forced cursor jumps.</td></tr>\n        <tr><td><strong>Rule 8: Reduce short-term memory load</strong></td><td>Human working memory holds <strong>7 &plusmn; 2 chunks</strong> (Miller's Law); keep state visible.</td><td>Display running item history and subtotals in a <code>ListBox</code> instead of forcing users to remember inputs.</td></tr>\n      </tbody>\n    </table></div>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">3. Norman's Action Gulfs, Fitts' Law &amp; Hick-Hyman Law</h4>\n    <ul class=\"cs-list\">\n      <li><strong>Gulf of Execution:</strong> Difference between the user's intentions and the allowable actions provided by the interface (bridged by clear affordances, visible labels, and logical control grouping).</li>\n      <li><strong>Gulf of Evaluation:</strong> Effort required to interpret the physical state of the system and determine how well expectations were met (bridged by immediate, formatted output in Labels/ListBoxes).</li>\n      <li><strong>Fitts' Law (<code>MT = a + b * log2(2D / W)</code>):</strong> Movement time depends on distance (<code>D</code>) and target width (<code>W</code>). Primary action buttons (<code>btnCalculate</code>) should be large and placed close to input controls.</li>\n      <li><strong>Hick-Hyman Law (<code>T = b * log2(n + 1)</code>):</strong> Decision time increases logarithmically with the number of choices (<code>n</code>). Group related options into <code>GroupBox</code> containers.</li>\n    </ul>\n  </div>\n</div>",
      "topics": [
        "Five Usability Measures & Universal Usability",
        "Shneiderman’s Eight Golden Rules in Windows Forms",
        "Norman’s Action Cycle: Gulfs of Execution & Evaluation",
        "Error Prevention, Validation & Constructive Recovery",
        "Interface Consistency & Visual Grouping"
      ]
    },
    {
      "id": "SU1",
      "code": "SU1",
      "shortTitle": "GUI & IDE Fundamentals",
      "title": "Study Unit 1: GUI & Visual Studio IDE Fundamentals",
      "weeks": "Weeks 1–2",
      "examWeightPct": 10,
      "iconId": "monitor",
      "accentColor": "#8b5cf6",
      "diagramId": "svg_su1_ide",
      "summary": "Visual Studio IDE workspace, the six-phase development cycle, Windows Forms controls, event-driven programming, and Hungarian naming conventions.",
      "learningObjectives": [
        "Navigate the Visual Studio IDE windows: Form Designer, Toolbox, Solution Explorer, Properties, and Error List.",
        "Apply the six-phase program development cycle and distinguish syntax errors from logic errors.",
        "Configure Form, Button, Label, and PictureBox controls (including SizeMode and Visible).",
        "Write event-driven Click handlers using MessageBox.Show(), control properties, and this.Close().",
        "Apply standard Hungarian naming prefixes (btn, txt, lbl, pic, rad/rdo, chk, lst, grp) consistently."
      ],
      "structuredTopics": [
        {
          "id": "su1_t1_vs_ide_cycle",
          "title": "Visual Studio IDE Windows & Six-Phase Development Cycle",
          "plainEnglish": "Visual Studio organises visual design, files, and properties into dedicated windows, supporting a disciplined six-step path from problem analysis to debugging.",
          "terminology": "Form Designer, Toolbox, Solution Explorer, Properties Window, Error List, IntelliSense, Syntax Error, Logic Error.",
          "syntax": "// Phase 4-5: Write C# statements terminated by semicolons\nMessageBox.Show(\"Welcome to CMPG122!\");",
          "exampleScope": "fragment",
          "minimalExample": "// Complete minimal Form1.cs structure:\nusing System;\nusing System.Windows.Forms;\n\nnamespace CampusApp\n{\n    public partial class Form1 : Form\n    {\n        public Form1()\n        {\n            InitializeComponent();\n        }\n    }\n}",
          "howItWorks": "You drag controls from the Toolbox onto the Form Designer, configure (Name) and Text in the Properties Window (saved into Form1.Designer.cs), manage project files in Solution Explorer, and write event logic in Form1.cs.",
          "commonMistakes": [
            "Confusing Solution Explorer (project files) with the Properties Window (selected control attributes).",
            "Skipping GUI & logic planning (Phases 2–3) and assuming \"0 Syntax Errors\" guarantees correct calculations."
          ],
          "importantDistinctions": "Syntax errors break C# grammar rules (e.g., missing ;) and prevent compilation; logic errors compile and run cleanly but produce wrong outputs (e.g., wrong formula).",
          "examExample": "If a programmer writes lblArea.Text = (width + height).ToString(); instead of width * height, the compiler reports 0 errors—Phase 6 testing catches this logic error.",
          "relatedDefinitions": [
            "def_ide",
            "def_toolbox",
            "def_properties_window",
            "def_solution_explorer",
            "def_six_phase_cycle",
            "def_syntax_vs_logic_error"
          ]
        },
        {
          "id": "su1_t2_controls_properties",
          "title": "Form, Button, Label & Control Name vs Text",
          "plainEnglish": "Every control is an object with a C# identifier (Name) used in code and a visible caption (Text) shown to the user.",
          "terminology": "Form, Button, Label, (Name) identifier, Text property, AutoSize, BorderStyle.",
          "syntax": "lblGreeting.Text = \"Good morning!\";\nbtnGreet.Enabled = false;",
          "exampleScope": "fragment",
          "minimalExample": "private void btnShowCampus_Click(object sender, EventArgs e)\n{\n    lblCampus.Text = \"Potchefstroom Campus\";\n}",
          "howItWorks": "In the Properties Window, (Name) sets the variable name declared in Designer.cs (e.g., lblCampus), while Text sets the string drawn on screen. At runtime, assigning a string to lblCampus.Text updates the UI immediately.",
          "commonMistakes": [
            "Setting Text = \"btnCalculate\" in Properties while leaving (Name) as button1.",
            "Writing lblCampus = \"Potchefstroom\"; instead of lblCampus.Text = \"Potchefstroom\"; (CS0029: cannot convert string to Label)."
          ],
          "importantDistinctions": "Control Name = C# code identifier (no spaces, Hungarian prefix); Text = runtime string property displayed to user; Method = action with parentheses like Close(); Event = trigger like Click.",
          "examExample": "For an output Label whose text starts blank at design time, set AutoSize = False and BorderStyle = FixedSingle so its bounds remain visible on the form.",
          "relatedDefinitions": [
            "def_windows_form",
            "def_button_control",
            "def_label_control",
            "def_control_name_vs_text"
          ]
        },
        {
          "id": "su1_t3_picturebox",
          "title": "PictureBox, SizeMode, and Visible",
          "plainEnglish": "PictureBox displays images on a form, uses SizeMode to control scaling/aspect ratio, and uses Visible (true/false) to show or hide graphics dynamically.",
          "terminology": "PictureBox, Image, PictureBoxSizeMode (Normal, StretchImage, AutoSize, CenterImage, Zoom), Visible (bool).",
          "syntax": "picCard.SizeMode = PictureBoxSizeMode.Zoom;\npicCard.Visible = true;",
          "exampleScope": "fragment",
          "minimalExample": "private void btnShowGreen_Click(object sender, EventArgs e)\n{\n    picGreen.Visible = true;\n    picYellow.Visible = false;\n    picRed.Visible = false;\n}",
          "howItWorks": "Normal clips oversized images at top-left; StretchImage fills both width and height (potentially distorting proportions); AutoSize resizes the PictureBox to match the image; CenterImage centres without scaling; Zoom scales proportionally to fit inside the control.",
          "commonMistakes": [
            "Assigning \"true\" in quotes to Visible (picGreen.Visible = \"true\";)—Visible requires a lowercase bool literal true or false.",
            "Confusing StretchImage (ignores aspect ratio) with Zoom (preserves aspect ratio)."
          ],
          "importantDistinctions": "Visible = false hides the control at runtime without deleting it; you can set Visible = true again at any point.",
          "examExample": "In a traffic-light trainer with picRed, picYellow, and picGreen, clicking \"Stop\" sets picRed.Visible = true; picYellow.Visible = false; picGreen.Visible = false;.",
          "relatedDefinitions": [
            "def_picturebox",
            "def_string_bool"
          ]
        },
        {
          "id": "su1_t4_events_messagebox_close",
          "title": "Event-Driven Programming, MessageBox.Show() & this.Close()",
          "plainEnglish": "Windows Forms programs respond to events via event-handler methods, display modal alerts with MessageBox.Show(), and exit the current form with this.Close().",
          "terminology": "Event, Event handler, object sender, EventArgs e, MessageBox.Show(), this.Close().",
          "syntax": "private void btnExit_Click(object sender, EventArgs e)\n{\n    MessageBox.Show(\"Goodbye!\");\n    this.Close();\n}",
          "exampleScope": "fragment",
          "minimalExample": "private void picCoinHeads_Click(object sender, EventArgs e)\n{\n    MessageBox.Show(\"You selected Heads!\", \"Coin Choice\");\n}",
          "howItWorks": "Double-clicking a control in the Designer generates an event-handler stub in Form1.cs and registers += new System.EventHandler(...) in Form1.Designer.cs. Even Labels and PictureBoxes have Click events!",
          "commonMistakes": [
            "Writing messagebox.show(...) or MessageBox.show(...)—C# is strictly case-sensitive!",
            "Deleting an empty button1_Click method in Form1.cs without removing its subscription line in Form1.Designer.cs, breaking compilation."
          ],
          "importantDistinctions": "MessageBox.Show(\"Text\") pauses execution of the current handler until the user clicks OK; this.Close() closes the Form instance referred to by this.",
          "examExample": "Passing two string arguments—MessageBox.Show(\"Saved successfully.\", \"Confirmation\")—displays the first string in the body and the second in the dialog title bar.",
          "relatedDefinitions": [
            "def_event_driven_programming",
            "def_event_handler",
            "def_messagebox_show",
            "def_this_close"
          ]
        },
        {
          "id": "su1_t5_hungarian_naming",
          "title": "Control Naming & Hungarian Prefixes",
          "plainEnglish": "Prefixing every interactive or dynamic control with a standard three-letter type code makes C# IntelliSense and event handlers immediately self-documenting.",
          "terminology": "btn (Button), txt (TextBox), lbl (Label), pic (PictureBox), rad / rdo (RadioButton), chk (CheckBox), lst (ListBox), grp (GroupBox).",
          "syntax": "// Standard prefixes + PascalCase descriptive suffix:\n// btnCalculate, txtStudentNo, lblAverage, picAvatar, radFullTime, chkBursary, lstModules, grpStudyMode",
          "exampleScope": "fragment",
          "minimalExample": "private void btnClear_Click(object sender, EventArgs e)\n{\n    txtSurname.Clear();\n    lblResult.Text = string.Empty;\n    chkHostel.Checked = false;\n    lstModules.Items.Clear();\n}",
          "howItWorks": "Typing txt in the code editor immediately filters IntelliSense to all TextBox controls on the form, preventing accidental confusion between an input TextBox (txtRate) and its static caption Label.",
          "commonMistakes": [
            "Renaming controls AFTER double-clicking them—the event handler keeps the old name button1_Click unless renamed cleanly.",
            "Using spaces or punctuation inside (Name), such as btn Calculate (invalid C# identifier)."
          ],
          "importantDistinctions": "Static decorative prompt Labels that are never referenced in C# code can keep default names, whereas every control read or modified in code MUST have a descriptive Hungarian name.",
          "examExample": "A RadioButton for senior discount is named radSenior (or rdoSenior), a CheckBox for insurance is chkInsurance, and their container is grpDiscounts.",
          "relatedDefinitions": [
            "def_hungarian_notation",
            "def_control_name_vs_text",
            "def_initialize_component"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. 6-Phase Program Development Cycle &amp; Hungarian Prefixes</h4>\n    <p class=\"cs-note\"><strong>6 Phases in Order:</strong> 1. Understand the program's purpose &rarr; 2. Design the GUI on paper/designer &rarr; 3. Design the program's logic (pseudocode/flowcharts) &rarr; 4. Write the C# code &rarr; 5. Correct syntax errors (compile time) &rarr; 6. Test the program and correct logic errors (runtime).</p>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Control Type</th><th>Prefix</th><th>Example Identifier</th><th>Essential Properties &amp; Behaviour</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>Button</strong></td><td><code>btn</code></td><td><code>btnCalculate</code>, <code>btnExit</code></td><td><code>Text = \"&amp;Calculate\"</code> (creates <code>Alt+C</code> access key); triggers <code>Click</code> event.</td></tr>\n        <tr><td><strong>TextBox</strong></td><td><code>txt</code></td><td><code>txtDays</code>, <code>txtPrice</code></td><td><code>Text</code> stores user input as <code>string</code>; <code>Clear()</code>, <code>Focus()</code>, <code>SelectAll()</code>.</td></tr>\n        <tr><td><strong>Label</strong></td><td><code>lbl</code></td><td><code>lblTotalDue</code></td><td>Output labels: <code>AutoSize = false</code>, <code>BorderStyle = BorderStyle.Fixed3D</code>, <code>TabStop = false</code>.</td></tr>\n        <tr><td><strong>PictureBox</strong></td><td><code>pic</code></td><td><code>picGreen</code>, <code>picLogo</code></td><td><code>SizeMode = PictureBoxSizeMode.Zoom</code> (proportional scaling); <code>StretchImage</code> distorts aspect ratio.</td></tr>\n        <tr><td><strong>ListBox</strong></td><td><code>lst</code></td><td><code>lstReceipt</code>, <code>lstRoutes</code></td><td><code>Items.Add(...)</code>, <code>Items.Clear()</code>, <code>Items.Count</code>, <code>SelectedIndex</code> (<code>-1</code> if none).</td></tr>\n        <tr><td><strong>RadioButton</strong></td><td><code>rdo</code> / <code>rad</code></td><td><code>rdoSedan</code>, <code>rdoSuv</code></td><td><code>Checked</code> (<code>bool</code>); mutually exclusive when placed inside the same <code>GroupBox</code>.</td></tr>\n        <tr><td><strong>CheckBox</strong></td><td><code>chk</code></td><td><code>chkGps</code>, <code>chkBursary</code></td><td><code>Checked</code> (<code>bool</code>); independent multi-select options.</td></tr>\n        <tr><td><strong>GroupBox</strong></td><td><code>grp</code></td><td><code>grpVehicle</code></td><td>Framed container with a visible <code>Text</code> caption (unlike <code>Panel</code>, which has no caption).</td></tr>\n      </tbody>\n    </table></div>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Form Properties &amp; Standard Event Handler Templates</h4>\n    <ul class=\"cs-list\">\n      <li><strong>Fixed Window &amp; Centering:</strong> <code>FormBorderStyle = FormBorderStyle.FixedSingle;</code>, <code>MaximizeBox = false;</code>, <code>StartPosition = FormStartPosition.CenterScreen;</code></li>\n      <li><strong>Keyboard Enter / Esc Bindings:</strong> <code>AcceptButton = btnCalculate;</code> (Enter key), <code>CancelButton = btnExit;</code> (Esc key), <code>TabIndex = 0</code> on first input TextBox.</li>\n      <li><strong>Saving All Files:</strong> Always use <code>File &rarr; Save All</code> (<code>Ctrl+Shift+S</code>) so both <code>Form1.cs</code> and <code>Form1.Designer.cs</code> changes are written to disk.</li>\n    </ul>\n    <pre class=\"cs-code\"><code>// Standard Event Handler Signature:\nprivate void btnClear_Click(object sender, EventArgs e)\n{\n    txtDays.Clear();                        // Empty input TextBox\n    lblTotalDue.Text = \"\";                  // Clear output Label\n    this.BackColor = SystemColors.Control;  // Restore default Windows form colour\n    txtDays.Focus();                        // Return cursor to first input\n}\n\nprivate void btnExit_Click(object sender, EventArgs e)\n{\n    this.Close();                           // Close active Form instance\n}</code></pre>\n  </div>\n</div>",
      "topics": [
        "Visual Studio IDE Windows & Six-Phase Development Cycle",
        "Form, Button, Label & Control Name vs Text",
        "PictureBox, SizeMode, and Visible",
        "Event-Driven Programming, MessageBox.Show() & this.Close()",
        "Control Naming & Hungarian Prefixes"
      ]
    },
    {
      "id": "SU2",
      "code": "SU2",
      "shortTitle": "Data, Types & Math",
      "title": "Study Unit 2: Data Processing, Types & Mathematics",
      "weeks": "Weeks 3–4",
      "examWeightPct": 15,
      "iconId": "calculator",
      "accentColor": "#22d3ee",
      "diagramId": "svg_su2_types",
      "summary": "Primitive types (int, double, decimal, string, bool), constants, scope, integer division, casting, Parse, ToString formatting, Math class, try-catch, TabIndex, Focus(), and access keys.",
      "learningObjectives": [
        "Select appropriate C# data types (int, double, decimal with m suffix, string, bool) and declare variables and named constants.",
        "Evaluate arithmetic expressions using operator precedence, integer division truncation, modulus (%), and explicit casting.",
        "Convert input strings with Parse, format outputs with ToString(\"C\"/\"F2\"/\"N2\"/\"P1\"), and use System.Math methods.",
        "Handle runtime conversion errors with try-catch blocks and distinguish local variable scope from class-level fields.",
        "Configure TabIndex order, programmatic Focus(), and keyboard access keys (&)."
      ],
      "structuredTopics": [
        {
          "id": "su2_t1_types_decimals_constants",
          "title": "Data Types, decimal m Suffix, Variables & Constants",
          "plainEnglish": "Choose int for whole counts, double for scientific measurements, decimal (with m) for money, string for text, and bool for true/false.",
          "terminology": "int, double, decimal, string, bool, literal suffix m/M, declaration, initialisation, assignment, const.",
          "syntax": "const decimal VAT_RATE = 0.15m;\nint units = 3;\ndecimal unitPrice = 89.95m;\ndecimal total = units * unitPrice * (1m + VAT_RATE);",
          "exampleScope": "fragment",
          "minimalExample": "const decimal DELIVERY_FEE = 65.00m;\ndecimal subtotal = 320.50m;\ndecimal amountDue = subtotal + DELIVERY_FEE;\nlblAmountDue.Text = amountDue.ToString(\"C\");",
          "howItWorks": "In C#, 89.95 without a suffix is a double literal; appending m marks it as a 128-bit base-10 decimal literal so financial arithmetic avoids binary floating-point rounding errors.",
          "commonMistakes": [
            "Writing decimal price = 19.99; without m—causes compiler error CS0664.",
            "Attempting to reassign a const variable later in the method (CS0131)."
          ],
          "importantDistinctions": "double uses base-2 floating-point (fast for geometry/science, imprecise for cents); decimal uses base-10 arithmetic (mandatory for currency and accounting).",
          "examExample": "Declaring const decimal DISCOUNT_RATE = 0.125m; ensures the rate is typed once and protected against accidental modification.",
          "relatedDefinitions": [
            "def_int_type",
            "def_double_type",
            "def_decimal_type",
            "def_string_bool",
            "def_variable_lifecycle",
            "def_named_constant"
          ]
        },
        {
          "id": "su2_t2_precedence_int_div_casting",
          "title": "Operator Precedence, Integer Division & Explicit Casting",
          "plainEnglish": "Multiplication, division, and remainder run before addition/subtraction; dividing two ints truncates any fraction unless an operand is cast first.",
          "terminology": "Operator precedence, Integer division, Truncation, Modulus (%), Implicit widening, Explicit narrowing cast.",
          "syntax": "int q = 17 / 5;             // 3 (truncated)\nint r = 17 % 5;             // 2 (remainder)\ndouble exact = (double)17 / 5; // 3.4",
          "exampleScope": "fragment",
          "minimalExample": "int totalScore = 15;\nint tests = 2;\ndouble wrongAvg = totalScore / tests;         // 7.0 (int / int happens first!)\ndouble rightAvg = (double)totalScore / tests; // 7.5\nlblAvg.Text = rightAvg.ToString(\"F1\");",
          "howItWorks": "C# evaluates operators based on operand types: totalScore / tests sees int / int, producing int 7, which only afterwards widens to 7.0. Applying (double)totalScore promotes the left operand first, forcing floating-point division.",
          "commonMistakes": [
            "Writing (double)(totalScore / tests)—the division inside parentheses STILL executes as int / int before the cast!",
            "Expecting (int)9.9 to round to 10—explicit (int) casting truncates toward zero, producing 9!"
          ],
          "importantDistinctions": "(int)9.8 evaluates to 9 (truncation), whereas Convert.ToInt32(9.8) or Math.Round(9.8) rounds to 10.",
          "examExample": "Converting 195 seconds into minutes and seconds: int mins = 195 / 60; (3) and int secs = 195 % 60; (15).",
          "relatedDefinitions": [
            "def_operator_precedence",
            "def_integer_division",
            "def_modulus_operator",
            "def_explicit_casting"
          ]
        },
        {
          "id": "su2_t3_parse_tostring_math",
          "title": "Parse, ToString() Formatting (\"C\", \"F2\", \"N2\", \"P1\") & Math Class",
          "plainEnglish": "TextBox inputs arrive as strings that must be parsed before math, calculated with operators or Math methods, and formatted back into strings for Labels.",
          "terminology": "int.Parse, double.Parse, decimal.Parse, ToString(\"C\" / \"F2\" / \"N2\" / \"P1\"), Math.Pow, Math.Sqrt, Math.Round, Math.Abs.",
          "syntax": "decimal price = decimal.Parse(txtPrice.Text);\nlblCurrency.Text = price.ToString(\"C\");\nlblFixed.Text = price.ToString(\"F2\");\nlblNumber.Text = price.ToString(\"N2\");\nlblRate.Text = (0.15m).ToString(\"P1\"); // 15.0%",
          "exampleScope": "fragment",
          "minimalExample": "double side = double.Parse(txtSide.Text);\ndouble diagonal = Math.Sqrt(2.0 * Math.Pow(side, 2.0));\nlblDiagonal.Text = diagonal.ToString(\"F2\");",
          "howItWorks": "\"C\" prepends the culture currency symbol and 2 decimals; \"N2\" adds thousands separators and 2 decimals without currency symbol; \"F2\" outputs plain fixed digits with 2 decimals; \"P1\" multiplies by 100 and adds % with 1 decimal.",
          "commonMistakes": [
            "Writing side ^ 2 instead of Math.Pow(side, 2)—^ is bitwise XOR in C#, not exponentiation!",
            "Passing already-multiplied 15 to .ToString(\"P1\"), which displays 1,500.0% instead of 15.0%."
          ],
          "importantDistinctions": "1234.5.ToString(\"F2\") produces \"1234.50\" (no comma), whereas 1234.5.ToString(\"N2\") produces \"1,234.50\" (with thousands separator).",
          "examExample": "Because Math.Pow and Math.Sqrt return double, storing Math.Pow(1.08, years) into a decimal requires an explicit (decimal) cast.",
          "relatedDefinitions": [
            "def_textbox_control",
            "def_parse_methods",
            "def_tostring_formatting",
            "def_math_class"
          ]
        },
        {
          "id": "su2_t4_try_catch_and_scope",
          "title": "try-catch Exception Handling & Field vs Local Scope",
          "plainEnglish": "try-catch prevents unhandled exceptions from crashing the app, while class-level fields preserve data across multiple button clicks.",
          "terminology": "try block, catch block, Exception, FormatException, DivideByZeroException, Local scope, Class-level field.",
          "syntax": "private decimal grandTotal = 0m; // Class-level field persists across clicks\n\nprivate void btnAdd_Click(object sender, EventArgs e)\n{\n    try\n    {\n        decimal item = decimal.Parse(txtItem.Text); // Local variable\n        grandTotal += item;\n        lblGrandTotal.Text = grandTotal.ToString(\"C\");\n    }\n    catch (FormatException)\n    {\n        MessageBox.Show(\"Please enter a valid numeric price.\");\n    }\n}",
          "exampleScope": "fragment",
          "minimalExample": "try\n{\n    int qty = int.Parse(txtQty.Text);\n    lblQty.Text = qty.ToString();\n}\ncatch (Exception ex)\n{\n    MessageBox.Show(ex.Message, \"Input Error\");\n}",
          "howItWorks": "If txtItem.Text contains \"abc\", decimal.Parse throws FormatException; C# skips the remaining lines inside try and jumps straight into catch. Meanwhile, grandTotal lives on the Form1 object so previous valid items are retained.",
          "commonMistakes": [
            "Declaring decimal grandTotal = 0m; inside btnAdd_Click—resetting the running total back to 0 on every click!",
            "Declaring a local variable inside try { decimal x = ...; } and trying to read x below the catch block (out of block scope!)."
          ],
          "importantDistinctions": "A local variable’s lifetime is a single method execution; a class-level field’s lifetime is the entire open lifetime of the Form instance.",
          "examExample": "Shadowing bug: if private int count = 0; is a field and you write int count = count + 1; inside a method, you accidentally declare a new local variable instead of updating the field!",
          "relatedDefinitions": [
            "def_try_catch",
            "def_scope_fields_vs_local"
          ]
        },
        {
          "id": "su2_t5_tabindex_focus_accesskeys",
          "title": "GUI Fine-Tuning: TabIndex, Focus() & Access Keys (&)",
          "plainEnglish": "Polish keyboard ergonomics with 0-based TabIndex order, Focus() cursor placement, Access Keys (&), AcceptButton, and CancelButton.",
          "terminology": "TabIndex (0-based), TabStop, Focus(), Access key / mnemonic (&), AcceptButton, CancelButton.",
          "syntax": "// Properties:\n// btnCalculate.Text = \"&Calculate\" (Alt+C)\n// Form1.AcceptButton = btnCalculate (Enter)\n// Form1.CancelButton = btnExit (Esc)\ntxtUsername.Focus();",
          "exampleScope": "fragment",
          "minimalExample": "private void btnClear_Click(object sender, EventArgs e)\n{\n    txtHours.Clear();\n    txtRate.Clear();\n    lblGrossPay.Text = string.Empty;\n    txtHours.Focus();\n}",
          "howItWorks": "When the form opens, the enabled input control with the lowest TabIndex (0) gets focus. Pressing Tab advances in ascending TabIndex order; pressing Enter invokes AcceptButton; pressing Esc invokes CancelButton.",
          "commonMistakes": [
            "Using single & in a Label meant to display \"R&D Department\"—Windows interprets &D as an underlined access key (\"RD Department\") unless escaped as \"R&&D Department\"!",
            "Forgetting parentheses on txtHours.Focus();."
          ],
          "importantDistinctions": "Labels cannot receive direct keyboard focus (TabStop is false), but giving a Label an access key (&Hours:) and setting its TabIndex right before txtHours forwards Alt+H focus into txtHours!",
          "examExample": "To assign Alt+X to an Exit button without clashing with \"&Edit\" (Alt+E), set btnExit.Text = \"E&xit\".",
          "relatedDefinitions": [
            "def_tab_index",
            "def_focus_method",
            "def_access_key"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. C# Data Types, Literal Suffixes, Scope &amp; Arithmetic Rules</h4>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>C# Type</th><th>Size / Precision</th><th>Literal Suffix</th><th>Domain Use Case &amp; Rules</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>int</code></td><td>32-bit whole integer</td><td>None (<code>42</code>)</td><td>Discrete whole counts (days, items, credits, bread rolls). <code>int / int</code> truncates fractional part (<code>7 / 2 == 3</code>).</td></tr>\n        <tr><td><code>double</code></td><td>64-bit binary float</td><td><code>d</code> / <code>D</code> (<code>3.5</code>)</td><td>Scientific/continuous measurements (weight, distance, test averages). Never use for money.</td></tr>\n        <tr><td><code>decimal</code></td><td>128-bit base-10 financial</td><td><code>m</code> / <code>M</code> (<code>450.00m</code>)</td><td><strong>Mandatory for all currency, prices, VAT, and financial totals</strong> (eliminates base-2 rounding error).</td></tr>\n        <tr><td><code>string</code> / <code>bool</code></td><td>UTF-16 text / Boolean</td><td><code>\"text\"</code> / <code>true</code></td><td>Text uses double quotes <code>\"...\"</code>; single characters (<code>char</code>) use single quotes <code>'A'</code>.</td></tr>\n      </tbody>\n    </table></div>\n    <ul class=\"cs-list\">\n      <li><strong>Operator Precedence:</strong> <code>()</code> highest &rarr; unary <code>+ -</code> &rarr; <code>* / %</code> &rarr; binary <code>+ -</code> lowest (evaluated left-to-right).</li>\n      <li><strong>Named Constants vs Fields vs Local Variables:</strong>\n        <code>const decimal VAT_RATE = 0.15m;</code> (immutable, prevents magic numbers);\n        <code>private decimal _sessionTotal = 0m;</code> (class-level field: persists across multiple button clicks);\n        local variables inside an event handler are destroyed when the method finishes executing.</li>\n    </ul>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Standard .ToString() Format Specifiers &amp; Math Library</h4>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Specifier</th><th>Meaning</th><th>Code Example</th><th>Formatted Output</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>\"C\"</code> or <code>\"C2\"</code></td><td>Currency (Rand symbol, commas, 2 decimals)</td><td><code>(1250.5m).ToString(\"C\")</code></td><td><code>\"R 1,250.50\"</code></td></tr>\n        <tr><td><code>\"F2\"</code></td><td>Fixed-point (2 decimals, no comma separator)</td><td><code>(1250.5m).ToString(\"F2\")</code></td><td><code>\"1250.50\"</code></td></tr>\n        <tr><td><code>\"N2\"</code></td><td>Number (thousands separator + 2 decimals)</td><td><code>(1250.5m).ToString(\"N2\")</code></td><td><code>\"1,250.50\"</code></td></tr>\n        <tr><td><code>\"P1\"</code></td><td>Percentage (multiplies by 100 and adds <code>%</code>)</td><td><code>(0.15m).ToString(\"P1\")</code></td><td><code>\"15.0%\"</code></td></tr>\n        <tr><td><code>\"D5\"</code></td><td>Decimal integer (pads with leading zeros)</td><td><code>(125).ToString(\"D5\")</code></td><td><code>\"00125\"</code></td></tr>\n      </tbody>\n    </table></div>\n    <pre class=\"cs-code\"><code>// Parsing, Math Methods &amp; try-catch Exception Handling:\ntry\n{\n    decimal price = decimal.Parse(txtPrice.Text);\n    int qty = int.Parse(txtQuantity.Text);\n    decimal subtotal = Math.Round(price * qty, 2);\n    lblTotal.Text = subtotal.ToString(\"C\");\n}\ncatch (FormatException)\n{\n    MessageBox.Show(\"Please enter valid numeric values.\", \"Input Error\",\n        MessageBoxButtons.OK, MessageBoxIcon.Error);\n    txtPrice.Focus();\n    txtPrice.SelectAll();\n}</code></pre>\n  </div>\n</div>",
      "topics": [
        "Data Types, decimal m Suffix, Variables & Constants",
        "Operator Precedence, Integer Division & Explicit Casting",
        "Parse, ToString() Formatting (\"C\", \"F2\", \"N2\", \"P1\") & Math Class",
        "try-catch Exception Handling & Field vs Local Scope",
        "GUI Fine-Tuning: TabIndex, Focus() & Access Keys (&)"
      ]
    },
    {
      "id": "SU3",
      "code": "SU3",
      "shortTitle": "Decisions & Validation",
      "title": "Study Unit 3: Decisions & Defensive Input Validation",
      "weeks": "Weeks 5–6",
      "examWeightPct": 20,
      "iconId": "git-branch",
      "accentColor": "#fb923c",
      "diagramId": "svg_su3_decisions",
      "summary": "Relational and logical operators, if/else/nested/switch structures, defensive TryParse validation with out, RadioButton, CheckBox, GroupBox, and ListBox selection.",
      "learningObjectives": [
        "Construct accurate boolean conditions using relational (==, !=, <, >, <=, >=) and logical (&&, ||, !) operators.",
        "Implement if, if-else, if-else-if chains, nested decisions, and switch statements (with break and default).",
        "Validate user input defensively using TryParse with out parameters and boundary range checks.",
        "Build multi-option interfaces with RadioButton, CheckBox, and GroupBox mutual exclusion.",
        "Read and validate ListBox selections safely using SelectedIndex and SelectedItem."
      ],
      "structuredTopics": [
        {
          "id": "su3_t1_operators_boolean_logic",
          "title": "Relational & Logical Operators: = vs ==, && vs ||, ! vs !=",
          "plainEnglish": "Relational operators compare pairs of values; logical operators combine or negate boolean expressions using short-circuit evaluation.",
          "terminology": "Equality (==), Inequality (!=), Logical AND (&&), Logical OR (||), Logical NOT (!), Short-circuit evaluation, Boundary condition.",
          "syntax": "bool isValidMark = (mark >= 0 && mark <= 100);\nbool isOutOfRange = (mark < 0 || mark > 100);\nbool isNotMember = !chkMember.Checked;",
          "exampleScope": "fragment",
          "minimalExample": "if (age >= 18 && hasPermit)\n{\n    lblEligibility.Text = \"Approved\";\n}\nelse\n{\n    lblEligibility.Text = \"Declined\";\n}",
          "howItWorks": "With &&, if the left side is false, C# immediately stops without evaluating the right side (short-circuit). With ||, if the left side is true, C# immediately returns true.",
          "commonMistakes": [
            "Confusing = (assignment) with == (comparison)—especially on bools: if (isAdmin = true) assigns true and ALWAYS enters the if block!",
            "Using && instead of || for out-of-range validation: if (score < 0 && score > 100) can NEVER be true!"
          ],
          "importantDistinctions": "! negates a single boolean expression (!isValid), whereas != tests whether two values are unequal (code != \"VIP\"). && requires BOTH conditions true; || requires AT LEAST ONE true.",
          "examExample": "Boundary check: if a discount applies to \"50 units or more\", the condition MUST be qty >= 50—writing qty > 50 fails on the boundary input 50!",
          "relatedDefinitions": [
            "def_relational_operators",
            "def_assign_vs_equal",
            "def_logical_operators",
            "def_bool_type"
          ]
        },
        {
          "id": "su3_t2_if_else_nested_switch",
          "title": "if-else Chains, Nested Decisions & switch-case-break-default",
          "plainEnglish": "Use if-else-if chains for ordered numeric ranges and switch statements (with mandatory break) for discrete exact values.",
          "terminology": "if, else if, else, nested if, switch, case, break, default, fall-through prohibition.",
          "syntax": "switch (gradeCode)\n{\n    case \"A\":\n        bonus = 1000m;\n        break;\n    case \"B\":\n        bonus = 500m;\n        break;\n    default:\n        bonus = 0m;\n        break;\n}",
          "exampleScope": "fragment",
          "minimalExample": "if (mark >= 75)\n{\n    lblResult.Text = \"Distinction\";\n}\nelse if (mark >= 50)\n{\n    lblResult.Text = \"Pass\";\n}\nelse\n{\n    lblResult.Text = \"Fail\";\n}",
          "howItWorks": "In an if-else-if chain, C# evaluates conditions top-down and executes ONLY the first true branch, skipping the rest. In a switch, control jumps to the matching constant case and exits at break;.",
          "commonMistakes": [
            "Writing a stray semicolon after if (mark >= 50); { ... }—causing the curly-brace block to execute unconditionally!",
            "Omitting break; at the end of a non-empty switch case—causes C# compiler error CS0163."
          ],
          "importantDistinctions": "Ordering matters in range ladders: testing if (mark >= 50) BEFORE else if (mark >= 75) traps 85 in the \"Pass\" branch so \"Distinction\" is unreachable!",
          "examExample": "Stacking empty case labels—case \"s\": case \"S\": rate = 0.10m; break;—cleanly matches both lowercase and uppercase codes in C#.",
          "relatedDefinitions": [
            "def_if_else_nested",
            "def_switch_statement"
          ]
        },
        {
          "id": "su3_t3_tryparse_validation",
          "title": "TryParse with out & Defensive Input Validation",
          "plainEnglish": "TryParse validates numeric format without throwing exceptions, returning a bool while outputting the converted value via out.",
          "terminology": "int.TryParse, double.TryParse, decimal.TryParse, out keyword, guard clause, range validation.",
          "syntax": "if (!decimal.TryParse(txtHours.Text, out decimal hours) || hours < 0m || hours > 168m)\n{\n    MessageBox.Show(\"Enter valid hours between 0 and 168.\");\n    txtHours.Focus();\n    return;\n}",
          "exampleScope": "fragment",
          "minimalExample": "int tickets;\nif (int.TryParse(txtTickets.Text, out tickets) && tickets >= 1)\n{\n    decimal cost = tickets * 120m;\n    lblCost.Text = cost.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter a whole number of at least 1.\");\n}",
          "howItWorks": "Because && short-circuits left-to-right, int.TryParse(txtTickets.Text, out tickets) runs first: if it returns true, tickets now holds the parsed integer and tickets >= 1 safely checks the range; if false, tickets is 0 and control jumps straight to else.",
          "commonMistakes": [
            "Confusing Parse and TryParse: writing decimal x = decimal.TryParse(txt.Text, out x); fails to compile because TryParse returns bool, NOT decimal!",
            "Omitting the out keyword before the target variable."
          ],
          "importantDistinctions": "Parse returns the converted number directly (or throws FormatException); TryParse returns bool (true/false) and delivers the converted number through its out parameter (0 on failure).",
          "examExample": "Validating two TextBoxes sequentially with early-return guard clauses ensures exact, field-specific error messages and Focus() placement.",
          "relatedDefinitions": [
            "def_tryparse",
            "def_parse_methods",
            "def_out_parameter"
          ]
        },
        {
          "id": "su3_t4_radio_check_groupbox",
          "title": "RadioButton, CheckBox & GroupBox Mutual Exclusion",
          "plainEnglish": "RadioButtons enforce single selection within a GroupBox; CheckBoxes toggle independent add-on options.",
          "terminology": "RadioButton.Checked, CheckBox.Checked, GroupBox container, Mutual exclusion, CheckedChanged event.",
          "syntax": "decimal fee = radExpress.Checked ? 100m : 40m;\nif (chkInsurance.Checked) fee += 25m;\nif (chkSmsAlert.Checked) fee += 5m;",
          "exampleScope": "fragment",
          "minimalExample": "decimal rate = 0m;\nif (radSedan.Checked)\n    rate = 450m;\nelse if (radSuv.Checked)\n    rate = 650m;\nelse if (radMinibus.Checked)\n    rate = 900m;\n\nif (chkGps.Checked)\n    rate += 75m;\nif (chkChildSeat.Checked)\n    rate += 50m;",
          "howItWorks": "Mutually exclusive RadioButtons belong in if / else if branches because only one in the GroupBox can be Checked. Independent CheckBoxes MUST use separate independent if statements so multiple checked boxes accumulate.",
          "commonMistakes": [
            "Using else if between independent CheckBoxes—so checking both GPS and Child Seat ignores Child Seat!",
            "Forgetting to set one default RadioButton Checked = true at design time (or failing to handle the case where none is selected)."
          ],
          "importantDistinctions": "Two sets of RadioButtons (e.g., Size and Crust) MUST sit in two separate GroupBoxes (grpSize, grpCrust); otherwise clicking a Crust option unchecks the Size option!",
          "examExample": "In a booking form, cabin class uses RadioButtons in grpCabin (mutually exclusive), while meal extras use CheckBoxes in grpMeals (combinable).",
          "relatedDefinitions": [
            "def_radiobutton_checkbox_groupbox",
            "def_if_else_nested"
          ]
        },
        {
          "id": "su3_t5_listbox_selection",
          "title": "ListBox Selection: SelectedIndex vs SelectedItem",
          "plainEnglish": "SelectedIndex gives the 0-based integer position (-1 when unselected); SelectedItem gives the selected item object (null when unselected).",
          "terminology": "lst.Items, lst.Items.Count, lst.SelectedIndex, lst.SelectedItem, 0-based indexing.",
          "syntax": "if (lstCities.SelectedIndex != -1)\n{\n    string city = lstCities.SelectedItem.ToString();\n    lblSelected.Text = $\"Destination: {city}\";\n}\nelse\n{\n    MessageBox.Show(\"Please select a destination city.\");\n}",
          "exampleScope": "fragment",
          "minimalExample": "if (lstPackages.SelectedIndex == -1)\n{\n    MessageBox.Show(\"Select a package first.\");\n    return;\n}\nstring pkg = lstPackages.SelectedItem.ToString();\nlblChoice.Text = pkg;",
          "howItWorks": "The first item in a ListBox has SelectedIndex == 0, the second has 1, and the last has lst.Items.Count - 1. When nothing is highlighted, SelectedIndex == -1 and SelectedItem == null.",
          "commonMistakes": [
            "Calling lstCities.SelectedItem.ToString() BEFORE checking SelectedIndex != -1—throws NullReferenceException if the user clicked Submit without picking an item!",
            "Checking if (lstCities.SelectedIndex == 0) to detect \"no selection\"—index 0 is actually the FIRST item!"
          ],
          "importantDistinctions": "SelectedIndex is an int (-1, 0, 1, ...); SelectedItem is an object (null or the item itself, converted to string via .ToString()).",
          "examExample": "In a 4-item ListBox, valid indices are 0, 1, 2, 3, Items.Count is 4, and SelectedIndex == -1 indicates no selection.",
          "relatedDefinitions": [
            "def_listbox_selection",
            "def_error_prevention"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. Relational &amp; Logical Operators, De Morgan's Laws &amp; Range Checks</h4>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Construct</th><th>C# Syntax</th><th>Critical Exam Rules &amp; Traps</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>Equality vs Assignment</strong></td><td><code>==</code> vs <code>=</code>, <code>!=</code></td><td><code>if (x = 5)</code> is a compiler error (<code>CS0029</code>); always use <code>==</code> for equality comparison.</td></tr>\n        <tr><td><strong>Logical Precedence</strong></td><td><code>!</code> &rarr; <code>&amp;&amp;</code> &rarr; <code>||</code></td><td><code>&amp;&amp;</code> (AND: both true) and <code>||</code> (OR: either true) use short-circuit evaluation.</td></tr>\n        <tr><td><strong>Inclusive Valid Range</strong></td><td><code>credits &gt;= 1 &amp;&amp; credits &lt;= 25</code></td><td>Chained comparisons like <code>1 &lt;= credits &lt;= 25</code> are illegal in C# (<code>CS0019</code>).</td></tr>\n        <tr><td><strong>Out-of-Bounds Trap</strong></td><td><code>credits &lt; 1 || credits &gt; 25</code></td><td>Use logical OR (<code>||</code>) to detect when a value violates either boundary.</td></tr>\n        <tr><td><strong>De Morgan's Laws</strong></td><td><code>!(A &amp;&amp; B) &equiv; !A || !B</code></td><td>Also: <code>!(A || B) &equiv; !A &amp;&amp; !B</code>.</td></tr>\n      </tbody>\n    </table></div>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Defensive TryParse Validation, switch, RadioButton &amp; ListBox Guards</h4>\n    <pre class=\"cs-code\"><code>// 1. Defensive Input Validation with TryParse &amp; Range Guard:\nif (!int.TryParse(txtDays.Text, out int days) || days &lt;= 0)\n{\n    MessageBox.Show(\"Rental days must be a positive whole number.\", \"Validation Error\",\n        MessageBoxButtons.OK, MessageBoxIcon.Warning);\n    txtDays.Focus();\n    txtDays.SelectAll();\n    return;\n}\n\n// 2. ListBox Selection Guard &amp; switch Statement (break; required on every case):\nif (lstRoutes.SelectedIndex == -1)\n{\n    MessageBox.Show(\"Please select a route.\", \"Selection Required\");\n    return;\n}\ndecimal basePrice = 0m;\nswitch (lstRoutes.SelectedIndex)\n{\n    case 0: basePrice = 250m; break;\n    case 1: basePrice = 400m; break;\n    case 2: basePrice = 800m; break;\n    default: basePrice = 0m; break;\n}\n\n// 3. Confirmation Dialog Before Closing:\nDialogResult res = MessageBox.Show(\"Are you sure you want to exit?\", \"Confirm Exit\",\n    MessageBoxButtons.YesNo, MessageBoxIcon.Question);\nif (res == DialogResult.Yes)\n{\n    this.Close();\n}</code></pre>\n  </div>\n</div>",
      "topics": [
        "Relational & Logical Operators: = vs ==, && vs ||, ! vs !=",
        "if-else Chains, Nested Decisions & switch-case-break-default",
        "TryParse with out & Defensive Input Validation",
        "RadioButton, CheckBox & GroupBox Mutual Exclusion",
        "ListBox Selection: SelectedIndex vs SelectedItem"
      ]
    },
    {
      "id": "SU4",
      "code": "SU4",
      "shortTitle": "Loops, Files & RNG",
      "title": "Study Unit 4: Loops, Text Files, Dialogs & Random Numbers",
      "weeks": "Weeks 7–9",
      "examWeightPct": 20,
      "iconId": "repeat",
      "accentColor": "#4ade80",
      "diagramId": "svg_su4_loops_files",
      "summary": "Pretest and posttest loops (while, do-while, for), ++/--, counters/accumulators, ListBox iteration, Random, Form1_Load, StreamWriter/StreamReader, and File Dialogs.",
      "learningObjectives": [
        "Write and trace while, do-while, and for loops, distinguishing pretest from posttest execution.",
        "Apply prefix/postfix ++ and --, counters, accumulators, ListBox iteration, and prevent off-by-one or infinite loops.",
        "Generate bounded pseudo-random numbers using Random.Next() and Random.NextDouble(), and initialize forms in Form1_Load.",
        "Create, overwrite, append, and read sequential text files using System.IO StreamWriter and StreamReader (with @ verbatim paths and Close()).",
        "Integrate OpenFileDialog and SaveFileDialog from the Component Tray using ShowDialog() == DialogResult.OK, FileName, and InitialDirectory."
      ],
      "structuredTopics": [
        {
          "id": "su4_t1_loops_pretest_posttest",
          "title": "while, do-while & for Loops (Pretest vs Posttest)",
          "plainEnglish": "while and for test their condition BEFORE each pass (0 or more runs); do-while tests AFTER each pass (always at least 1 run).",
          "terminology": "Pretest loop (while, for), Posttest loop (do-while), Loop control variable, Initialiser, Condition, Iterator.",
          "syntax": "// while (pretest): 0+ runs\nwhile (n <= 5) { n++; }\n// do-while (posttest): 1+ runs (note trailing ;)\ndo { n++; } while (n <= 5);\n// for (count-controlled pretest):\nfor (int i = 1; i <= 5; i++) { ... }",
          "exampleScope": "fragment",
          "minimalExample": "lstYears.Items.Clear();\ndecimal balance = 1000m;\nfor (int year = 1; year <= 4; year++)\n{\n    balance += balance * 0.10m;\n    lstYears.Items.Add($\"Year {year}: {balance:C}\");\n}",
          "howItWorks": "In a for loop, the initialiser runs once, the condition is checked before entering the body, the body executes if true, and the iterator runs at the end of each pass before re-checking the condition.",
          "commonMistakes": [
            "Forgetting to increment the counter inside a while loop, freezing the Windows Form in an infinite loop.",
            "Omitting the trailing semicolon after while (condition); in a do-while loop, or placing a stray semicolon after for (...); / while (...);."
          ],
          "importantDistinctions": "If x starts at 10, while (x < 5) executes 0 times, whereas do { ... } while (x < 5); executes 1 time!",
          "examExample": "Tracing for (int k = 2; k <= 8; k += 3): k takes values 2, 5, 8 (3 iterations) and exits when k becomes 11.",
          "relatedDefinitions": [
            "def_while_loop",
            "def_do_while_loop",
            "def_for_loop",
            "def_infinite_off_by_one"
          ]
        },
        {
          "id": "su4_t2_inc_counters_listbox_loops",
          "title": "Prefix/Postfix ++/--, Counters, Accumulators & ListBox Iteration",
          "plainEnglish": "Track item counts and running totals initialised outside the loop, watch prefix vs postfix order, and iterate ListBox items from 0 to Count - 1.",
          "terminology": "Prefix (++x), Postfix (x++), Counter, Accumulator, Off-by-one error, lst.Items.Count, lst.Items[i].",
          "syntax": "decimal sum = 0m;\nfor (int i = 0; i < lstPrices.Items.Count; i++)\n{\n    sum += decimal.Parse(lstPrices.Items[i].ToString());\n}\nlblTotal.Text = sum.ToString(\"C\");",
          "exampleScope": "fragment",
          "minimalExample": "int count = lstMarks.Items.Count;\nif (count == 0)\n{\n    MessageBox.Show(\"ListBox is empty.\");\n    return;\n}\ndouble total = 0.0;\nfor (int i = 0; i < count; i++)\n{\n    total += double.Parse(lstMarks.Items[i].ToString());\n}\nlblAverage.Text = (total / count).ToString(\"F1\");",
          "howItWorks": "Because ListBox indices are 0-based, index i starts at 0 and continues while i < lstMarks.Items.Count (stopping at Count - 1). Accumulator total is initialised to 0.0 once before the loop.",
          "commonMistakes": [
            "Using i <= lstMarks.Items.Count—on the final pass i equals Count, throwing ArgumentOutOfRangeException (classic off-by-one error)!",
            "Declaring double total = 0.0; INSIDE the for loop body so only the last item remains in total."
          ],
          "importantDistinctions": "Standalone i++; and ++i; have identical effect, but in int y = x++; y gets the OLD x, whereas in int y = ++x; y gets the INCREMENTED x.",
          "examExample": "If int a = 4; int b = a++ * 2;, then b == 8 and a == 5; if int b = ++a * 2;, then a == 5 and b == 10.",
          "relatedDefinitions": [
            "def_increment_decrement",
            "def_accumulators_counters",
            "def_infinite_off_by_one",
            "def_listbox_selection"
          ]
        },
        {
          "id": "su4_t3_random_and_form_load",
          "title": "Random Numbers (Next & NextDouble) & Form1_Load",
          "plainEnglish": "Random.Next(min, max) includes min and EXCLUDES max; Form1_Load runs once automatically right before the form first appears.",
          "terminology": "Random, rand.Next(), rand.Next(max), rand.Next(min, max), rand.NextDouble(), Form1_Load.",
          "syntax": "Random rand = new Random();\nint dieRoll = rand.Next(1, 7);       // 1..6 inclusive\nint zeroToNine = rand.Next(10);      // 0..9 inclusive\ndouble fraction = rand.NextDouble(); // 0.0 <= x < 1.0",
          "exampleScope": "fragment",
          "minimalExample": "private Random rand = new Random(); // Class-level instance\n\nprivate void Form1_Load(object sender, EventArgs e)\n{\n    lstCategories.Items.Add(\"Standard\");\n    lstCategories.Items.Add(\"VIP\");\n    lstCategories.SelectedIndex = 0;\n}\n\nprivate void btnRoll_Click(object sender, EventArgs e)\n{\n    int n = rand.Next(1, 101); // 1 to 100 inclusive\n    lblNumber.Text = n.ToString();\n}",
          "howItWorks": "Declaring Random once as a class-level field avoids reseeding issues on rapid clicks. Next(min, max) returns an int satisfying min <= value < max. NextDouble() returns a double in [0.0, 1.0).",
          "commonMistakes": [
            "Writing rand.Next(1, 100) when 100 must be possible—because 100 is exclusive, the maximum generated number is 99!",
            "Calling Random.Next(1, 7) statically without instantiating Random rand = new Random(); first."
          ],
          "importantDistinctions": "rand.Next(50) generates 0..49 (50 possible integers starting at 0); rand.Next(1, 51) generates 1..50.",
          "examExample": "To simulate a coin toss (0 = Tails, 1 = Heads), call rand.Next(2) or rand.Next(0, 2).",
          "relatedDefinitions": [
            "def_random_class",
            "def_form_load"
          ]
        },
        {
          "id": "su4_t4_text_files_io",
          "title": "Text Files: StreamWriter, StreamReader, Overwrite vs Append & @ Paths",
          "plainEnglish": "Add using System.IO; use StreamWriter (CreateText to overwrite, AppendText to add) to write and StreamReader (OpenText + !EndOfStream) to read, always calling Close().",
          "terminology": "using System.IO;, StreamWriter, File.CreateText, File.AppendText, Write(), WriteLine(), StreamReader, File.OpenText, ReadLine(), EndOfStream, Close(), verbatim @ string.",
          "syntax": "// Writing (Append):\nStreamWriter outFile = File.AppendText(@\"C:\\Data\\log.txt\");\noutFile.WriteLine(txtEntry.Text);\noutFile.Close();\n\n// Reading:\nStreamReader inFile = File.OpenText(@\"C:\\Data\\log.txt\");\nwhile (!inFile.EndOfStream)\n{\n    lstLog.Items.Add(inFile.ReadLine());\n}\ninFile.Close();",
          "exampleScope": "fragment",
          "minimalExample": "try\n{\n    StreamReader reader = File.OpenText(\"marks.txt\");\n    int count = 0;\n    while (!reader.EndOfStream)\n    {\n        string line = reader.ReadLine();\n        lstMarks.Items.Add(line);\n        count++;\n    }\n    reader.Close();\n    lblCount.Text = $\"Loaded {count} records.\";\n}\ncatch (Exception ex)\n{\n    MessageBox.Show(ex.Message, \"File Error\");\n}",
          "howItWorks": "File.CreateText creates the file if absent or truncates (erases) it if present; File.AppendText creates the file if absent or positions the write cursor at the end. WriteLine appends a newline; Write stays on the same line. Close() flushes the buffer and releases the OS handle.",
          "commonMistakes": [
            "Using File.CreateText inside an \"Add Student\" button when keeping previous students was required—erasing all earlier records!",
            "Writing \"C:\\temp\\notes.txt\" without @—turning \\t into a Tab and \\n into a Newline!",
            "Forgetting reader.Close() or writer.Close(), leaving buffered data unsaved or the file locked."
          ],
          "importantDistinctions": "StreamWriter = class type; outFile = object variable; EndOfStream = bool property on StreamReader; ReadLine() = method returning string; File.OpenText() = static factory method returning a StreamReader.",
          "examExample": "If a file has 0 lines, while (!reader.EndOfStream) evaluates !true -> false immediately and executes 0 iterations safely.",
          "relatedDefinitions": [
            "def_streamwriter",
            "def_streamreader",
            "def_verbatim_string"
          ]
        },
        {
          "id": "su4_t5_file_dialogs",
          "title": "OpenFileDialog, SaveFileDialog & Component Tray",
          "plainEnglish": "File dialogs sit in the Designer’s Component Tray and let users browse for a path stored in FileName when ShowDialog() returns DialogResult.OK.",
          "terminology": "OpenFileDialog, SaveFileDialog, Component Tray, ShowDialog(), DialogResult.OK, DialogResult.Cancel, FileName, InitialDirectory.",
          "syntax": "ofdMarks.InitialDirectory = @\"C:\\Data\";\nif (ofdMarks.ShowDialog() == DialogResult.OK)\n{\n    StreamReader inFile = File.OpenText(ofdMarks.FileName);\n    // read lines...\n    inFile.Close();\n}",
          "exampleScope": "fragment",
          "minimalExample": "if (sfdReport.ShowDialog() == DialogResult.OK)\n{\n    StreamWriter outFile = File.CreateText(sfdReport.FileName);\n    for (int i = 0; i < lstReport.Items.Count; i++)\n    {\n        outFile.WriteLine(lstReport.Items[i].ToString());\n    }\n    outFile.Close();\n    MessageBox.Show(\"Report saved successfully.\");\n}",
          "howItWorks": "Dragging OpenFileDialog or SaveFileDialog onto a Form places it in the Component Tray beneath the form because it has no permanent visual box on the form itself. Calling ShowDialog() opens the Windows file picker and returns DialogResult.OK if confirmed or DialogResult.Cancel if cancelled.",
          "commonMistakes": [
            "Writing ofdMarks.Filename with lowercase n—the C# property is strictly .FileName (capital N)!",
            "Calling File.OpenText(ofdMarks.FileName) without checking if (ofdMarks.ShowDialog() == DialogResult.OK)—crashing with ArgumentException if the user clicks Cancel!"
          ],
          "importantDistinctions": "OpenFileDialog.ShowDialog() ONLY selects a path into .FileName—it does NOT read the file contents until you pass .FileName to File.OpenText().",
          "examExample": "If a user clicks Cancel in SaveFileDialog, ShowDialog() returns DialogResult.Cancel, the if block is skipped, and no file is created or overwritten.",
          "relatedDefinitions": [
            "def_file_dialogs",
            "def_dialog_result",
            "def_toolbox"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. Pre-Test (while), Post-Test (do-while) &amp; Count-Controlled (for) Loops (Weeks 7–8)</h4>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Loop Type</th><th>Evaluation Timing</th><th>Min Executions</th><th>Syntax &amp; Key Rules</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>while (cond) { ... }</code></td><td><strong>Pre-test</strong> (before body)</td><td><strong>0 times</strong> (if initially false)</td><td>Must update counter/control variable inside body to prevent an infinite loop; no semicolon after <code>while (cond)</code>.</td></tr>\n        <tr><td><code>do { ... } while (cond);</code></td><td><strong>Post-test</strong> (after body)</td><td><strong>1 time</strong> (guaranteed)</td><td>Body always executes at least once; requires a trailing semicolon after <code>while (cond);</code>.</td></tr>\n        <tr><td><code>for (init; cond; update)</code></td><td><strong>Pre-test</strong> (count-controlled)</td><td><strong>0 times</strong> (if initially false)</td><td><code>for (int i = 1; i &lt;= 5; i++)</code> runs 5 times; can count backward (<code>i--</code>) or step (<code>i += 10</code>).</td></tr>\n      </tbody>\n    </table></div>\n    <ul class=\"cs-list\">\n      <li><strong>Prefix vs Postfix Increment:</strong> <code>++x</code> (prefix mode) increments first then uses the new value; <code>x++</code> (postfix mode) uses the current value first then increments.</li>\n      <li><strong>Random Class (5.8) &amp; Form Load Event (5.9):</strong> <code>Random rand = new Random();</code> &mdash; <code>rand.Next()</code> returns <code>0..2,147,483,647</code>; <code>rand.Next(10)</code> returns <code>0..9</code> (upper bound exclusive); <code>rand.Next(1, 7)</code> returns <code>1..6</code>; <code>rand.NextDouble()</code> returns a <code>double</code> in <code>[0.0, 1.0)</code>. <code>private void Form1_Load(object sender, EventArgs e)</code> executes automatically when the form loads into memory before appearing on screen.</li>\n    </ul>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Using Files for Data Storage (5.6 System.IO) &amp; File Dialog Controls (5.7) (Week 9)</h4>\n    <p class=\"cs-note\"><strong>3 Mandatory File Steps:</strong> 1. Open the file &rarr; 2. Process the file (read/write) &rarr; 3. Close the file (<code>.Close()</code>). Always add <code>using System.IO;</code> at the top of <code>Form1.cs</code>.</p>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Class / Control</th><th>Method / Property</th><th>Exact Behaviour &amp; Exam Rules</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>StreamWriter</code></td><td><code>File.CreateText(\"data.txt\")</code></td><td>Creates a text file and returns a <code>StreamWriter</code>. <strong>If the file already exists, its contents are erased!</strong></td></tr>\n        <tr><td><code>StreamWriter</code></td><td><code>File.AppendText(\"data.txt\")</code></td><td>Opens an existing text file (or creates it) and writes new data at the end <strong>without erasing existing contents</strong>.</td></tr>\n        <tr><td><code>StreamWriter</code></td><td><code>WriteLine(val)</code> vs <code>Write(val)</code></td><td><code>WriteLine</code> writes data followed by a newline character; <code>Write</code> writes data without a newline.</td></tr>\n        <tr><td><code>StreamReader</code></td><td><code>File.OpenText(\"data.txt\")</code></td><td>Opens an existing text file for reading and returns a <code>StreamReader</code> object (throws <code>FileNotFoundException</code> if missing).</td></tr>\n        <tr><td><code>StreamReader</code></td><td><code>ReadLine()</code> &amp; <code>EndOfStream</code></td><td><code>ReadLine()</code> reads the next line as a <code>string</code>. Loop until EOF using <code>while (!inputFile.EndOfStream)</code>.</td></tr>\n        <tr><td><code>OpenFileDialog</code> / <code>SaveFileDialog</code></td><td><code>ShowDialog()</code>, <code>Filename</code>, <code>InitialDirectory</code></td><td>Invisible controls placed in the <strong>component tray</strong>. <code>if (openFile.ShowDialog() == DialogResult.OK)</code> opens <code>openFile.FileName</code>.</td></tr>\n      </tbody>\n    </table></div>\n    <pre class=\"cs-code\"><code>// Populating a 4-Month Installment Schedule into a ListBox:\nlstInstallments.Items.Clear();\nfor (int month = 1; month <= 4; month++)\n{\n    lstInstallments.Items.Add($\"Month {month}: {monthlyInstallment:C}\");\n}\n\n// Required directive at top of file for File I/O:\nusing System.IO;\n\n// 1. Writing to a File with SaveFileDialog &amp; StreamWriter:\nif (saveFile.ShowDialog() == DialogResult.OK)\n{\n    StreamWriter outputFile = File.CreateText(saveFile.FileName);\n    outputFile.WriteLine(\"Introduction to Computer Science\");\n    outputFile.Close(); // Always close connection to flush buffer\n}\n\n// 2. Reading All Lines from a File with OpenFileDialog, StreamReader &amp; EndOfStream:\nif (openFile.ShowDialog() == DialogResult.OK)\n{\n    StreamReader inputFile = File.OpenText(openFile.FileName);\n    lstCourses.Items.Clear();\n    while (!inputFile.EndOfStream)\n    {\n        string line = inputFile.ReadLine();\n        lstCourses.Items.Add(line);\n    }\n    inputFile.Close();\n}</code></pre>\n  </div>\n</div>",
      "topics": [
        "while, do-while & for Loops (Pretest vs Posttest)",
        "Prefix/Postfix ++/--, Counters, Accumulators & ListBox Iteration",
        "Random Numbers (Next & NextDouble) & Form1_Load",
        "Text Files: StreamWriter, StreamReader, Overwrite vs Append & @ Paths",
        "OpenFileDialog, SaveFileDialog & Component Tray"
      ]
    },
    {
      "id": "SU5",
      "code": "SU5",
      "shortTitle": "Modularising with Methods",
      "title": "Study Unit 5: Modularising Your Code with Methods",
      "weeks": "Weeks 10–11",
      "examWeightPct": 15,
      "iconId": "box",
      "accentColor": "#a78bfa",
      "diagramId": "svg_su5_methods",
      "summary": "Method headers and calls, void vs value-returning methods, parameters vs arguments, pass-by-value vs ref vs out, method scope, and debugger stepping.",
      "learningObjectives": [
        "Decompose complex event handlers into clean void and value-returning methods.",
        "Write valid method headers, return statements, and method calls with matching parameter/argument lists.",
        "Distinguish pass-by-value (default) from pass-by-reference using ref and out parameters and initialization rules.",
        "Trace variable scope across caller and callee methods accurately.",
        "Debug method execution using Step Into (F11), Step Over (F10), and Step Out (Shift+F11)."
      ],
      "structuredTopics": [
        {
          "id": "su5_t1_void_methods_headers",
          "title": "Modularisation, Method Headers & void Methods",
          "plainEnglish": "Break long event handlers into focused helper methods declared inside the Form class; void methods perform actions and return no value.",
          "terminology": "Divide and conquer, Modularisation, Top-down design, Method header (Access modifier, Return type, PascalCase name, Parameter list), Method body, Return point.",
          "syntax": "private void DisplayReceipt(string customer, decimal total)\n{\n    lstReceipt.Items.Add($\"Customer: {customer}\");\n    lstReceipt.Items.Add($\"Total Due: {total:C}\");\n}",
          "exampleScope": "fragment",
          "minimalExample": "private void btnReset_Click(object sender, EventArgs e)\n{\n    ClearInputBoxes();\n    ResetLabels();\n}\n\nprivate void ClearInputBoxes()\n{\n    txtName.Clear();\n    txtUnits.Clear();\n    txtName.Focus();\n}\n\nprivate void ResetLabels()\n{\n    lblTotal.Text = string.Empty;\n}",
          "howItWorks": "When btnReset_Click calls ClearInputBoxes(), the runtime saves the return point in btnReset_Click, jumps into ClearInputBoxes(), executes its statements, and returns to execute ResetLabels().",
          "commonMistakes": [
            "Placing a semicolon at the end of a method header: private void ClearInputBoxes(); { ... } (CS0501)!",
            "Writing a custom method declaration nested inside btnCalculate_Click instead of directly inside public partial class Form1."
          ],
          "importantDistinctions": "A void method cannot be assigned to a variable (int x = ClearInputBoxes(); is a compile error), though it may use bare return; to exit early.",
          "examExample": "Event handlers like btnCalculate_Click are themselves private void methods invoked automatically when the Click event fires.",
          "relatedDefinitions": [
            "def_method_structure",
            "def_void_vs_value_method"
          ]
        },
        {
          "id": "su5_t2_value_returning_methods",
          "title": "Value-Returning Methods & Return Path Completeness",
          "plainEnglish": "A value-returning method declares a return type (int, double, decimal, string, bool) and MUST return a compatible value on every reachable path.",
          "terminology": "Return type, return expression;, Boolean method, Method overloading, Reachable completion path.",
          "syntax": "private decimal CalculateDiscount(decimal subtotal, bool isMember)\n{\n    if (isMember)\n    {\n        return subtotal * 0.10m;\n    }\n    return 0m; // Guarantees all paths return a decimal!\n}",
          "exampleScope": "fragment",
          "minimalExample": "private bool IsDistinction(int mark)\n{\n    return mark >= 75;\n}\n\nprivate void btnCheck_Click(object sender, EventArgs e)\n{\n    if (int.TryParse(txtMark.Text, out int mark))\n    {\n        lblStatus.Text = IsDistinction(mark) ? \"Distinction\" : \"Standard\";\n    }\n}",
          "howItWorks": "return expression; evaluates expression, converts/verifies compatibility with the header’s return type, exits the method immediately, and substitutes that value at the call site.",
          "commonMistakes": [
            "Returning inside if (mark >= 50) { return \"Pass\"; } with NO return when mark < 50—causes compiler error CS0161 (\"not all code paths return a value\")!",
            "Calling CalculateDiscount(sub, true); without storing or using the returned value—discarding the calculation completely!"
          ],
          "importantDistinctions": "Method overloading allows two methods to share a name ONLY if their parameter lists differ (e.g., Sum(int, int) vs Sum(decimal, decimal))—differing solely by return type is illegal.",
          "examExample": "A method declared private int GetPoints(decimal spend) cannot return spend * 0.1m directly without converting/casting to int (CS0266).",
          "relatedDefinitions": [
            "def_void_vs_value_method",
            "def_method_overloading"
          ]
        },
        {
          "id": "su5_t3_params_args_pass_by_value",
          "title": "Parameters vs Arguments & Default Pass-by-Value",
          "plainEnglish": "Parameters are variables in the method header; arguments are values passed in the call. By default, C# passes a COPY of the value.",
          "terminology": "Formal parameter, Actual argument, Pass-by-value, Positional matching, Parameter scope.",
          "syntax": "// price and rate are parameters:\nprivate decimal AddTax(decimal price, decimal rate)\n{\n    price = price + (price * rate); // Modifies local copy only!\n    return price;\n}",
          "exampleScope": "fragment",
          "minimalExample": "private void TryMutate(int number)\n{\n    number = 999; // Only changes local parameter copy!\n}\n\nprivate void btnTest_Click(object sender, EventArgs e)\n{\n    int score = 45;\n    TryMutate(score);\n    lblScore.Text = score.ToString(); // Displays \"45\", NOT \"999\"!\n}",
          "howItWorks": "When TryMutate(score) runs, the value 45 is copied into a separate stack variable named number. Changing number to 999 leaves score in btnTest_Click untouched at 45.",
          "commonMistakes": [
            "Including data types in the method call: AddTax(decimal 100m, decimal 0.15m) is invalid C# syntax!",
            "Passing arguments in reversed order—e.g., CalcDiscount(rate, price) when the header expects (decimal price, decimal rate)."
          ],
          "importantDistinctions": "A parameter’s scope is strictly restricted to the body of the method in which it is declared—other methods cannot see it.",
          "examExample": "Widening argument promotion works (passing an int argument to a double parameter), whereas passing a double argument to an int parameter fails to compile without a cast.",
          "relatedDefinitions": [
            "def_parameters_vs_arguments",
            "def_pass_by_value"
          ]
        },
        {
          "id": "su5_t4_ref_and_out",
          "title": "Passing by Reference: ref vs out Parameters",
          "plainEnglish": "ref and out let a method work directly with the caller’s variable: ref must be initialised BEFORE the call; out need not be initialised before the call but MUST be assigned inside the method.",
          "terminology": "ref keyword, out keyword, Two-way reference, Output parameter, Definite assignment (CS0165 / CS0177).",
          "syntax": "private void ApplyBonus(ref decimal salary)\n{\n    salary += 1500m; // Reads & updates caller variable\n}\n\nprivate bool TryReadMark(string input, out int mark)\n{\n    if (int.TryParse(input, out mark) && mark >= 0 && mark <= 100)\n        return true;\n    mark = 0; // Must be assigned before returning!\n    return false;\n}",
          "exampleScope": "fragment",
          "minimalExample": "decimal pay = 10000m;     // Initialised before ref call\nApplyBonus(ref pay);      // pay is now 11500m\n\nint validMark;            // Uninitialised is fine for out\nif (TryReadMark(txtMark.Text, out validMark))\n{\n    lblMark.Text = validMark.ToString();\n}",
          "howItWorks": "Instead of copying a value, ref and out pass the memory alias of the caller’s variable. Both the method declaration AND the method call MUST explicitly write ref (or out).",
          "commonMistakes": [
            "Passing an uninitialised variable to a ref parameter (CS0165)!",
            "Returning from a method with an out parameter without assigning a value to that out parameter first (CS0177)!",
            "Omitting ref or out at the call site: ApplyBonus(pay); instead of ApplyBonus(ref pay); (CS1620)!"
          ],
          "importantDistinctions": "ref = caller MUST initialise before call, callee MAY modify; out = caller NEED NOT initialise before call, callee MUST assign before returning.",
          "examExample": "Using out lets one method validate multiple TextBoxes and output several values while returning a bool success status.",
          "relatedDefinitions": [
            "def_ref_vs_out",
            "def_out_parameter",
            "def_pass_by_value"
          ]
        },
        {
          "id": "su5_t5_scope_and_debugging",
          "title": "Method Scope & Debugger Commands (Step Into, Step Over, Step Out)",
          "plainEnglish": "Variables declared in one method are invisible to other methods; step through method calls cleanly using F11, F10, and Shift+F11.",
          "terminology": "Breakpoint, Step Into (F11), Step Over (F10), Step Out (Shift+F11), Local scope vs Class scope.",
          "syntax": "// Breakpoint paused on: decimal tax = ComputeTax(subtotal);\n// F11       -> Step Into ComputeTax() line-by-line\n// F10       -> Step Over (executes ComputeTax() in one step)\n// Shift+F11 -> Step Out (finishes current method & pauses in caller)",
          "exampleScope": "fragment",
          "minimalExample": "private void btnProcess_Click(object sender, EventArgs e)\n{\n    decimal amount = 500m;\n    decimal vat = CalcVat(amount); // Pause here at breakpoint\n    lblVat.Text = vat.ToString(\"C\");\n}\n\nprivate decimal CalcVat(decimal val)\n{\n    return val * 0.15m;\n}",
          "howItWorks": "Two different methods can each declare a local variable named total without conflict because each method has its own isolated stack frame. During debugging, Step Into enters CalcVat, Step Over runs CalcVat without entering it, and Step Out finishes CalcVat and returns to btnProcess_Click.",
          "commonMistakes": [
            "Trying to read btnProcess_Click’s local variable amount directly inside CalcVat without passing it as a parameter (CS0103).",
            "Confusing Step Over (F10) with skipping execution—Step Over STILL runs CalcVat(amount) completely and assigns vat!"
          ],
          "importantDistinctions": "Step Into (F11) = inspect inside callee; Step Over (F10) = trust callee, stay in caller; Step Out (Shift+F11) = finish rest of current callee and return to caller.",
          "examExample": "If you accidentally pressed F11 into a 40-line helper method you already know works, press Shift+F11 (Step Out) to execute its remaining lines and return immediately to the caller.",
          "relatedDefinitions": [
            "def_debugger_stepping",
            "def_scope_fields_vs_local"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. Modularizing with Methods: Void vs Value-Returning &amp; Parameter Passing (Weeks 10–11)</h4>\n    <p class=\"cs-note\"><strong>Method Header Anatomy:</strong> <code>[AccessModifier] [ReturnType] [PascalCaseName]([ParameterList])</code> &mdash; e.g., <code>private string FormatTime(int totalSeconds)</code>. A <strong>parameter</strong> is the variable declared in the method header; an <strong>argument</strong> is the value or variable passed in the method call.</p>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Passing Mode</th><th>Header &amp; Call Syntax</th><th>Caller Initialization Rule</th><th>Inside-Method Rule &amp; Effect on Caller</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>By Value</strong> (Default)</td><td>Header: <code>(int seconds)</code><br>Call: <code> MyMethod(sec)</code></td><td>Must be initialized before call.</td><td>Receives a <strong>copy</strong> only. Changing the parameter inside the method does <strong>not</strong> change the caller's variable.</td></tr>\n        <tr><td><strong>By Reference (<code>ref</code>)</strong></td><td>Header: <code>(ref int total)</code><br>Call: <code>MyMethod(ref totalSeconds)</code></td><td><strong>Must be initialized</strong> before being passed to the method.</td><td>Passes a reference to the caller's variable. Any change to the <code>ref</code> parameter directly updates the caller's variable.</td></tr>\n        <tr><td><strong>Output (<code>out</code>)</strong></td><td>Header: <code>(out int seconds)</code><br>Call: <code>ReadSeconds(txt, out sec)</code></td><td>Does <strong>not</strong> need to be initialized before the call.</td><td>The method <strong>must assign a value</strong> to the <code>out</code> parameter before returning on every code path (or compiler error <code>CS0177</code>).</td></tr>\n      </tbody>\n    </table></div>\n    <ul class=\"cs-list\">\n      <li><strong>Void vs Value-Returning Methods:</strong> A <code>void</code> method performs an action and returns no value. A value-returning method specifies a return type (<code>int</code>, <code>double</code>, <code>decimal</code>, <code>string</code>, <code>bool</code>) and must execute <code>return expression;</code> on every path.</li>\n      <li><strong>Debugger Stepping Commands:</strong> <strong>Step Into (F11)</strong> enters the called method line-by-line; <strong>Step Over (F10)</strong> executes the whole method call as a single step without entering it; <strong>Step Out (Shift+F11)</strong> finishes the current method and returns to the caller.</li>\n    </ul>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Complete Method Patterns: out Validation, String Formatting &amp; ref Running Totals</h4>\n    <pre class=\"cs-code\"><code>// 1. Method with an out Parameter (Validates whole number in 1..3600):\nprivate bool ReadSeconds(string text, out int seconds)\n{\n    if (int.TryParse(text, out seconds) &amp;&amp; seconds &gt;= 1 &amp;&amp; seconds &lt;= 3600)\n    {\n        return true;\n    }\n    seconds = 0; // Mandatory assignment before returning false!\n    return false;\n}\n\n// 2. Value-Returning Method (Formats totalSeconds as mm:ss, e.g. 65 -> \"1:05\"):\nprivate string FormatTime(int totalSeconds)\n{\n    int minutes = totalSeconds / 60;\n    int seconds = totalSeconds % 60;\n    return (seconds &lt; 10) ? (minutes + \":0\" + seconds) : (minutes + \":\" + seconds);\n}\n\n// 3. Void Method with ref Parameters (Updates running fastest lap and total):\nprivate void RecordLap(int seconds, ref int fastest, ref int total)\n{\n    total += seconds;\n    if (fastest == 0 || seconds &lt; fastest)\n    {\n        fastest = seconds;\n    }\n}</code></pre>\n  </div>\n</div>",
      "topics": [
        "Modularisation, Method Headers & void Methods",
        "Value-Returning Methods & Return Path Completeness",
        "Parameters vs Arguments & Default Pass-by-Value",
        "Passing by Reference: ref vs out Parameters",
        "Method Scope & Debugger Commands (Step Into, Step Over, Step Out)"
      ]
    },
    {
      "id": "SU6",
      "code": "SU6",
      "shortTitle": "Multiform Projects",
      "title": "Study Unit 6: Multiform Projects",
      "weeks": "Weeks 11–12",
      "examWeightPct": 10,
      "iconId": "layers",
      "accentColor": "#60a5fa",
      "diagramId": "svg_su6_multiform",
      "summary": "Multiple Windows Forms, Form1.cs & Designer.cs partial classes, Program.cs startup form, new instantiation, modal ShowDialog() vs modeless Show(), Control Modifiers, Close() vs Hide(), and form lifecycle.",
      "learningObjectives": [
        "Explain how Form1.cs, Form1.Designer.cs (partial classes), and Program.cs (Application.Run) structure a Windows Forms project.",
        "Instantiate secondary forms with new and distinguish modal (ShowDialog) from modeless (Show) behaviour accurately.",
        "Configure cross-form control access using Modifiers (Private vs Public) while recognising production encapsulation practices.",
        "Choose appropriately between Close() and Hide() across startup, modal, and modeless forms.",
        "Trace Form lifecycle events: Load, Activated, and FormClosing."
      ],
      "structuredTopics": [
        {
          "id": "su6_t1_project_structure_startup",
          "title": "Multiple Forms, partial Classes (Form1.cs / Designer.cs) & Program.cs",
          "plainEnglish": "Each Form is a C# partial class split across .cs and .Designer.cs, while Program.cs launches the startup form via Application.Run().",
          "terminology": "Form1.cs, Form1.Designer.cs, partial class, InitializeComponent(), Program.cs, Main(), Application.Run(), Startup form.",
          "syntax": "// In Program.cs:\nstatic void Main()\n{\n    Application.EnableVisualStyles();\n    Application.SetCompatibleTextRenderingDefault(false);\n    Application.Run(new MainForm()); // Sets startup form\n}",
          "exampleScope": "fragment",
          "minimalExample": "// Adding a second form: Project -> Add Form (Windows Forms)... -> SummaryForm.cs\npublic partial class SummaryForm : Form\n{\n    public SummaryForm()\n    {\n        InitializeComponent();\n    }\n}",
          "howItWorks": "Adding a new Windows Form adds a new class (e.g., SummaryForm) split across SummaryForm.cs (your event handlers) and SummaryForm.Designer.cs (IDE control layout). Application.Run(new MainForm()) opens the primary window and keeps the application alive until that startup form closes.",
          "commonMistakes": [
            "Renaming Form1.cs without updating Application.Run(new ...) if the class name changed.",
            "Writing control access code above InitializeComponent(); inside the constructor before controls exist."
          ],
          "importantDistinctions": "Closing a secondary form returns to the application; closing the startup form passed to Application.Run(...) terminates the entire application process!",
          "examExample": "To switch a project’s startup window from Form1 to LoginForm, change Application.Run(new Form1()); to Application.Run(new LoginForm()); inside Program.cs.",
          "relatedDefinitions": [
            "def_partial_form_classes",
            "def_program_cs",
            "def_initialize_component"
          ]
        },
        {
          "id": "su6_t2_instantiation_modal_modeless",
          "title": "Instantiation with new & Modal (ShowDialog) vs Modeless (Show)",
          "plainEnglish": "Instantiate a form class with new first; ShowDialog() displays it modally (blocking other app forms & pausing caller statements), whereas Show() displays it modelessly (continuing caller statements immediately).",
          "terminology": "Class vs Object instance, new operator, Reference variable, Modal form (ShowDialog), Modeless form (Show).",
          "syntax": "ReceiptForm frmReceipt = new ReceiptForm();\nfrmReceipt.ShowDialog(); // Modal: waits here until frmReceipt closes!\nlblStatus.Text = \"Receipt closed.\"; // Runs AFTER frmReceipt closes",
          "exampleScope": "fragment",
          "minimalExample": "// Compare Modal vs Modeless execution order:\nprivate void btnOpenHelp_Click(object sender, EventArgs e)\n{\n    HelpForm frmHelp = new HelpForm();\n    frmHelp.Show(); // Modeless: returns immediately!\n    lblStatus.Text = \"Help is open alongside this form.\"; // Runs right away!\n}",
          "howItWorks": "ShowDialog() blocks focus to other forms WITHIN THE SAME APPLICATION (it does NOT pause the Windows OS or other programs!) and suspends the calling method at that line until the modal form is closed or hidden. Show() opens the window independently so users can click freely between both forms, and the next C# line executes immediately.",
          "commonMistakes": [
            "Calling ReceiptForm.ShowDialog(); on the class name without instantiating new ReceiptForm() first (CS0120)!",
            "Populating frmReceipt.lblTotal.Text AFTER calling frmReceipt.ShowDialog()—so the label stays blank the entire time the user views the modal form!"
          ],
          "importantDistinctions": "Modal (ShowDialog): user must dismiss before touching other forms in the app, and subsequent C# lines wait. Modeless (Show): user switches freely between forms, and subsequent C# lines execute immediately.",
          "examExample": "In a 3-line block—frm2.ShowDialog(); x = 10; lbl.Text = x.ToString();—lbl.Text updates ONLY after the user closes frm2.",
          "relatedDefinitions": [
            "def_form_instantiation",
            "def_modal_vs_modeless"
          ]
        },
        {
          "id": "su6_t3_modifiers_cross_form",
          "title": "Control Modifiers (Private vs Public) & Cross-Form Data Access",
          "plainEnglish": "Form controls have Modifiers = Private by default; changing a target control’s Modifiers to Public enables cross-form access in course exams, whereas production software prefers properties or constructor parameters.",
          "terminology": "Modifiers property, Private (default), Public, Cross-form control access, Encapsulation.",
          "syntax": "// Requires SummaryForm.lblCustomerTotal Modifiers = Public in Designer:\nSummaryForm frmSummary = new SummaryForm();\nfrmSummary.lblCustomerTotal.Text = finalAmount.ToString(\"C\");\nfrmSummary.ShowDialog();",
          "exampleScope": "fragment",
          "minimalExample": "// Examination technique (Modifiers = Public on lblGreeting):\nGreetingsForm frmGreet = new GreetingsForm();\nfrmGreet.lblGreeting.Text = $\"Hello, {txtName.Text}!\";\nfrmGreet.ShowDialog();\n\n// Production software alternative (public property on GreetingsForm):\n// frmGreet.GreetingMessage = $\"Hello, {txtName.Text}!\";",
          "howItWorks": "By default, Visual Studio writes private System.Windows.Forms.Label lblGreeting; in Designer.cs, so Form1 cannot touch frmGreet.lblGreeting (CS0122). Setting Modifiers = Public in the Properties Window changes that field to public.",
          "commonMistakes": [
            "Leaving Modifiers = Private on the second form’s Label and getting CS0122 (\"inaccessible due to its protection level\").",
            "Creating a SECOND new SummaryForm() instance when reading values back, instead of reading from the same reference variable that was shown!"
          ],
          "importantDistinctions": "Course examination technique: set the target control’s Modifiers = Public. Production engineering design: keep controls Private and pass data through constructor arguments or public properties on the Form class so UI refactoring does not break callers.",
          "examExample": "Always assign frmSummary.lblTotal.Text BEFORE frmSummary.ShowDialog(); so the value is ready on screen when the dialog opens.",
          "relatedDefinitions": [
            "def_cross_form_modifiers",
            "def_form_instantiation"
          ]
        },
        {
          "id": "su6_t4_close_vs_hide",
          "title": "Closing vs Hiding Forms: Close() vs Hide()",
          "plainEnglish": "Hide() conceals a form while keeping its object and control values intact in memory; Close() closes the window (and exits the entire app if called on the startup form).",
          "terminology": "this.Close(), this.Hide(), Object disposal, Startup form termination.",
          "syntax": "// Inside a secondary modal input form:\nprivate void btnApply_Click(object sender, EventArgs e)\n{\n    this.Hide(); // Unblocks ShowDialog() in Form1 while keeping controls alive\n}",
          "exampleScope": "fragment",
          "minimalExample": "// Navigating from Form1 to Form2 without terminating the app:\nSummaryForm frm2 = new SummaryForm();\nthis.Hide();\nfrm2.ShowDialog();\nthis.Show(); // Re-displays Form1 once frm2 closes!",
          "howItWorks": "Calling this.Hide() sets Visible = false. If called on a modal form, Hide() also returns control to the caller after ShowDialog() with all control properties intact. Calling this.Close() on the startup form ends Application.Run() and terminates every open window.",
          "commonMistakes": [
            "Writing frm2.Show(); followed by this.Close(); inside the startup form—which immediately shuts down the entire program including frm2!",
            "Hiding the startup form with this.Hide(), opening modeless frm2.Show(), and closing frm2 without ever closing Form1—leaving an invisible zombie process running!"
          ],
          "importantDistinctions": "Hide() = invisible, state retained, startup process stays alive; Close() = window closed, disposes modeless form, terminates app if startup form.",
          "examExample": "Using this.Hide(); -> frmChild.ShowDialog(); -> this.Show(); cleanly hides the parent window while the child is active and restores the parent afterward.",
          "relatedDefinitions": [
            "def_close_vs_hide",
            "def_this_close",
            "def_program_cs"
          ]
        },
        {
          "id": "su6_t5_form_lifecycle",
          "title": "Form Lifecycle Events: Load, Activated & FormClosing",
          "plainEnglish": "Load fires once before initial display; Activated fires every time the form becomes the active window; FormClosing fires before closure and can cancel closing.",
          "terminology": "Constructor, Load event, Activated event, FormClosing event, FormClosingEventArgs, e.Cancel.",
          "syntax": "private void Form1_FormClosing(object sender, FormClosingEventArgs e)\n{\n    DialogResult choice = MessageBox.Show(\n        \"Close without saving?\", \"Confirm Exit\", MessageBoxButtons.YesNo);\n    if (choice == DialogResult.No)\n    {\n        e.Cancel = true; // Aborts closing the form!\n    }\n}",
          "exampleScope": "fragment",
          "minimalExample": "// Lifecycle order when opening a form:\n// 1. public Form2() { InitializeComponent(); }\n// 2. Form2_Load (runs once before first display)\n// 3. Form2_Activated (runs every time Form2 gains focus)\n// 4. Form2_FormClosing (runs when closing; cancellable via e.Cancel = true)",
          "howItWorks": "Load runs once per Form instance before first render. Activated runs on initial focus AND whenever the user clicks back onto the form from another modeless form. FormClosing provides FormClosingEventArgs e where setting e.Cancel = true prevents closure.",
          "commonMistakes": [
            "Expecting Form1_Load to fire again after hiding and re-showing the same Form1 instance or switching between modeless forms.",
            "Putting unsaved-changes confirmation in FormClosed instead of FormClosing—by FormClosed, it is too late to cancel!"
          ],
          "importantDistinctions": "Load = one-time startup setup; Activated = focus-return refresh; FormClosing = pre-close validation/confirmation (cancellable).",
          "examExample": "To prevent accidental data loss when a user clicks the window X button, handle FormClosing and set e.Cancel = true when the user chooses No.",
          "relatedDefinitions": [
            "def_form_lifecycle",
            "def_form_load"
          ]
        }
      ],
      "cheatSheetHtml": "<div class=\"cheatsheet-unit-block\">\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">1. Multiform Projects: Modal vs Modeless Forms &amp; Cross-Form Control Access (Weeks 11–12)</h4>\n    <p class=\"cs-note\"><strong>3 Steps to Display Another Form:</strong> 1. Declare &amp; instantiate the form object (<code>Form2 frm = new Form2();</code>) &rarr; 2. Pass data or set public properties/controls &rarr; 3. Call <code>frm.ShowDialog();</code> (modal) or <code>frm.Show();</code> (modeless).</p>\n    <div class=\"scenario-table-wrap\"><table class=\"test-table\">\n      <thead>\n        <tr><th>Concept / Method</th><th>C# Syntax</th><th>Execution Behaviour &amp; Exam Rules</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>Modal Form</strong></td><td><code>frm.ShowDialog();</code></td><td>Blocks interaction with all other forms in the application until <code>frm</code> is closed. Statements after <code>ShowDialog()</code> pause and execute <strong>only after</strong> the modal form closes.</td></tr>\n        <tr><td><strong>Modeless Form</strong></td><td><code>frm.Show();</code></td><td>Allows the user to switch focus freely between forms. Statements after <code>Show()</code> execute <strong>immediately</strong> without waiting for <code>frm</code> to close.</td></tr>\n        <tr><td><strong>Control Access Across Forms</strong></td><td><code>Modifiers = Public</code></td><td>Controls on a form have <code>Modifiers = Private</code> by default. Change <code>Modifiers</code> to <code>Public</code> in the Properties window to access <code>frm.lblOutput.Text</code> from another form.</td></tr>\n        <tr><td><strong>Close vs Hide</strong></td><td><code>this.Close();</code> vs <code>this.Hide();</code></td><td><code>Close()</code> closes the form and releases resources (terminates the app if called on the startup form). <code>Hide()</code> makes the form invisible while keeping its object in memory.</td></tr>\n        <tr><td><strong>Startup Form</strong></td><td><code>Application.Run(new Form1());</code></td><td>Located inside the <code>Main</code> method in <code>Program.cs</code>; determines which form launches first when the program starts.</td></tr>\n      </tbody>\n    </table></div>\n  </div>\n  <div class=\"cs-section\">\n    <h4 class=\"cs-heading\">2. Multiform Instantiation &amp; Data Passing Code Template</h4>\n    <pre class=\"cs-code\"><code>// Inside MainForm (Form1.cs) - Opening SummaryForm and passing calculated output:\nprivate void btnViewSummary_Click(object sender, EventArgs e)\n{\n    SummaryForm frmSummary = new SummaryForm();\n    // Requires lblCustomerTotal on SummaryForm to have Modifiers = Public:\n    frmSummary.lblCustomerTotal.Text = totalAmount.ToString(\"C\");\n    frmSummary.ShowDialog(); // Displays as a modal dialog box\n    // Code here runs only AFTER the user closes frmSummary:\n    lblStatus.Text = \"Summary reviewed.\";\n}</code></pre>\n  </div>\n</div>",
      "topics": [
        "Multiple Forms, partial Classes (Form1.cs / Designer.cs) & Program.cs",
        "Instantiation with new & Modal (ShowDialog) vs Modeless (Show)",
        "Control Modifiers (Private vs Public) & Cross-Form Data Access",
        "Closing vs Hiding Forms: Close() vs Hide()",
        "Form Lifecycle Events: Load, Activated & FormClosing"
      ]
    }
  ]
};
});
