/**
 * NWU CMPG122 — CodeGrade Scenarios, Spot-The-Error & Code-Audit Data Module
 * Covers SU1–SU6 event handlers, File I/O, Methods (ref/out), and Multiforms.
 */
(function (root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_CODELABS = data;
    if (root.window) root.window.CMPG122_CODELABS = data;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  return {
  "codeScenarios": {
    "scenario_racing_light": {
      "id": "scenario_racing_light",
      "title": "Racing Light Trainer (SU1)",
      "studyUnits": [
        "SU1"
      ],
      "requiresCurrency": false,
      "requiresValidation": false,
      "description": "Develop the event handler for btnStop_Click in the Racing Light Trainer: when the Stop button is clicked, display the red traffic light (picRed.Visible = true), hide the amber, green, and dark lamps (Visible = false), and set lblInstruction.Text to \"STOP\".",
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
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: PictureBox picRed, picAmber, picGreen, picDark; Label lblInstruction; Button btnStop;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnStop_Click(object sender, EventArgs e)\n    {",
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
      ],
      "methodSignature": "private void btnStop_Click(object sender, EventArgs e)"
    },
    "scenario_braai_master": {
      "id": "scenario_braai_master",
      "title": "Braai Master 3000 (SU1–SU2)",
      "studyUnits": [
        "SU1",
        "SU2"
      ],
      "requiresCurrency": true,
      "requiresValidation": true,
      "description": "Develop the event handler for btnCalculate_Click (Braai Master 3000). Read kilograms of wors from txtWorsKg, butcher price per kg from txtPricePerKg, and price per roll from txtPricePerRoll using decimal.TryParse(). If any value fails to parse or is <= 0, display 'Please enter valid positive numbers.' using MessageBox.Show(\"Please enter valid positive numbers.\", \"Input Error\") and exit. Declare a constant for roll capacity: const decimal GRAMS_PER_ROLL = 120m;. Calculate: wors cost = kg * price/kg; total grams = kg * 1000m; rolls needed = (int)(totalGrams / GRAMS_PER_ROLL); rolls cost = rolls needed * price/roll; total cost = wors cost + rolls cost. Format total cost using .ToString(\"C\") and display in lblTotalCost.",
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
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: TextBox txtName, txtWorsKg, txtPricePerKg, txtPricePerRoll; Label lblTotalCost; Button btnCalculate;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnCalculate_Click(object sender, EventArgs e)\n    {",
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
      ],
      "methodSignature": "private void btnCalculate_Click(object sender, EventArgs e)"
    },
    "scenario_speedtrap": {
      "id": "scenario_speedtrap",
      "title": "SpeedTrap Potchefstroom R30 (SU1–SU3)",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "requiresValidation": true,
      "description": "Develop btnCheck_Click (SpeedTrap R30). Parse recorded speed from txtSpeed and limit from txtLimit using int.TryParse(). If invalid, display an error message with MessageBox.Show(). Calculate speedOver = speed - limit. If speedOver <= 0, set lblKmOver to '0 km/h', lblCategory to 'Within the limit', and lblFine to 'No fine. Safe driving.'. Otherwise, set lblKmOver to speedOver.ToString() + ' km/h' and evaluate the band: 1-10 is R250 ('Minor'), 11-20 is R750 ('Serious'), 21-30 is R1500 ('Severe'), >30 is R2500 ('Court appearance'). If zone (txtZone.Text) is 'School' or 'Town' AND speedOver > 20, double the fine and append ' - built-up area' to the category. If txtRepeat.Text is 'yes', add class constant REPEAT_FINE (500m) to the fine. Output category to lblCategory and fine formatted with .ToString('C') to lblFine.",
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
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: TextBox txtSpeed, txtLimit, txtZone, txtRepeat; Label lblKmOver, lblCategory, lblFine; Button btnCheck;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnCheck_Click(object sender, EventArgs e)\n    {",
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
      ],
      "methodSignature": "private void btnCheck_Click(object sender, EventArgs e)"
    },
    "scenario_vaal_cruise": {
      "id": "scenario_vaal_cruise",
      "title": "Vaal River Cruises Booking (SU1–SU4)",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3",
        "SU4"
      ],
      "requiresCurrency": true,
      "requiresValidation": true,
      "description": "Develop btnBook_Click (Vaal River Cruises). Validate that a cruise route is selected from lstRoutes (lstRoutes.SelectedIndex != -1). If none selected, show 'Please select a cruise route.' using MessageBox.Show() and exit. Validate passenger count from txtPassengers using int.TryParse(); if invalid or < 1, display 'Please enter a valid passenger count of at least 1.' and return. Use a switch statement on lstRoutes.SelectedIndex: 0 is R250 (Sunset Leisure Cruise), 1 is R400 (Speedboat Adventure), 2 is R800 (Private Pontoon Charter). Subtotal = passengers * ticketPrice. If passengers >= 6, apply a 10% group discount. Final due = subtotal - discount. Display final due formatted with .ToString('C') in lblTotalDue.",
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
      "classScaffolding": "// =========================================================================\n// [READ-ONLY SCAFFOLDING] Form Plumbing & Control Declarations\n// (Students are only assessed on the inside logic of the event handler)\n// =========================================================================\npublic partial class MainForm : Form\n{\n    // Controls: ListBox lstRoutes; TextBox txtPassengers; RadioButton radDaytime, radSunset; Label lblTotalDue; Button btnBook;\n    public MainForm()\n    {\n        InitializeComponent();\n    }\n\n    private void btnBook_Click(object sender, EventArgs e)\n    {",
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
      ],
      "methodSignature": "private void btnBook_Click(object sender, EventArgs e)"
    },
    "scenario_wages": {
      "id": "scenario_wages",
      "title": "Gross Wage & Overtime Calculator",
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
      ],
      "methodSignature": "private void btnCalculate_Click(object sender, EventArgs e)"
    },
    "scenario_grades": {
      "id": "scenario_grades",
      "title": "Student Mark & Grade Classifier",
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
      ],
      "methodSignature": "private void btnClassify_Click(object sender, EventArgs e)"
    },
    "scenario_investment": {
      "id": "scenario_investment",
      "title": "Compound Investment Growth Loop",
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
      ],
      "methodSignature": "private void btnCalculate_Click(object sender, EventArgs e)"
    },
    "scenario_pos": {
      "id": "scenario_pos",
      "title": "Retail POS & ListBox Shopping Cart",
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
      ],
      "methodSignature": "private void btnAddItem_Click(object sender, EventArgs e)"
    },
    "scenario_temperature": {
      "id": "scenario_temperature",
      "title": "Temperature Converter with RadioButtons",
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
      ],
      "methodSignature": "private void btnConvert_Click(object sender, EventArgs e)"
    },
    "scenario_accumulator": {
      "id": "scenario_accumulator",
      "title": "Number Accumulator & Average Score Loop",
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
      "modelSolution": "decimal score;\nif (decimal.TryParse(txtScore.Text, out score) && score >= 0 && score <= 100)\n{\n    lstScores.Items.Add(score.ToString(\"F1\"));\n    int count = lstScores.Items.Count;\n    decimal total = 0m;\n    for (int i = 0; i < count; i++)\n    {\n        total += decimal.Parse(lstScores.Items[i].ToString());\n    }\n    decimal avg = total / count;\n    lblCount.Text = count.ToString();\n    lblAverage.Text = avg.ToString(\"F2\");\n}\nelse\n{\n    MessageBox.Show(\"Enter a valid score between 0 and 100.\", \"Validation Error\");\n}",
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
      ],
      "methodSignature": "private void btnAddScore_Click(object sender, EventArgs e)"
    },
    "scenario_car_rental": {
      "id": "scenario_car_rental",
      "title": "Car Rental Mileage Surcharge Terminal",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "description": "Calculate car rental bill. Read rental days from txtDays (int.TryParse) and total kilometers driven from txtKms (decimal.TryParse). Base rate determined by vehicle radio button: rdoSedan (R450/day), rdoSuv (R650/day), rdoBakkie (R750/day). Mileage allowance is 150 km per day included free. Any excess kilometers driven over (days * 150) are billed at R3.50 per km. If chkGps.Checked is true, add R80 per day. Calculate total, format and output to lblTotalDue with .ToString('C').",
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
      ],
      "methodSignature": "private void btnCalculate_Click(object sender, EventArgs e)"
    },
    "scenario_tuition": {
      "id": "scenario_tuition",
      "title": "Tuition Fee & Bursary Assessment",
      "studyUnits": [
        "SU1",
        "SU2",
        "SU3"
      ],
      "requiresCurrency": true,
      "description": "Read credit count from txtCredits (int.TryParse). Cost per credit is R850.00. Faculty radio buttons: rdoScience (add R2,500 lab levy), rdoCommerce (add R1,000 IT levy). If chkBursary.Checked is true, read bursary percentage from txtBursaryPercent and deduct from total. Display final net tuition in lblNetTuition formatted with .ToString('C').",
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
      ],
      "methodSignature": "private void btnCompute_Click(object sender, EventArgs e)"
    },
    "scenario_file_sales": {
      "id": "scenario_file_sales",
      "su": "SU4",
      "title": "Sequential Text File Sales Appender & Counter (SU4)",
      "methodSignature": "private void btnSaveSale_Click(object sender, EventArgs e)",
      "description": "Validate txtSaleAmount using decimal.TryParse (must be > 0). Append the formatted currency line to \"sales.txt\" using File.AppendText, close the StreamWriter, and display \"Saved: \" + formatted amount in lblStatus. On invalid input, show a MessageBox.",
      "requiresCurrency": true,
      "controls": [
        "txtSaleAmount",
        "lblStatus"
      ],
      "expectedOutputs": [
        "lblStatus"
      ],
      "starterCode": "// Validate txtSaleAmount, append to \"sales.txt\", close file, and update lblStatus\n",
      "modelSolution": "decimal sale;\nif (decimal.TryParse(txtSaleAmount.Text, out sale) && sale > 0m)\n{\n    StreamWriter writer = File.AppendText(\"sales.txt\");\n    writer.WriteLine(sale.ToString(\"C\"));\n    writer.Close();\n    lblStatus.Text = \"Saved: \" + sale.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Please enter a valid positive sale amount.\");\n}",
      "testCases": [
        {
          "name": "Valid Sale R 250.00 Appended",
          "inputs": {
            "txtSaleAmount": "250"
          },
          "expected": {
            "lblStatus": "250.00"
          },
          "expectedDescription": "lblStatus displays R 250.00 and closes StreamWriter"
        },
        {
          "name": "Invalid Non-Numeric Input Guarded",
          "inputs": {
            "txtSaleAmount": "abc"
          },
          "expected": {
            "_messages": "valid"
          },
          "expectedDescription": "Displays validation MessageBox without crashing"
        }
      ],
      "methodHeader": "private void btnSaveSale_Click(object sender, EventArgs e)\n{"
    },
    "scenario_methods_ref_out": {
      "id": "scenario_methods_ref_out",
      "su": "SU5",
      "title": "Modular Loyalty Discount & VAT Calculator (SU5)",
      "methodSignature": "private void btnQuote_Click(object sender, EventArgs e)",
      "description": "Read subtotal from txtSubtotal with decimal.TryParse (> 0). If chkLoyalty is Checked, apply a 10% discount, then add 15% VAT to the discounted amount and display the final total formatted as currency (\"C\") in lblFinalQuote. Show a MessageBox if invalid.",
      "requiresCurrency": true,
      "controls": [
        "txtSubtotal",
        "chkLoyalty",
        "lblFinalQuote"
      ],
      "expectedOutputs": [
        "lblFinalQuote"
      ],
      "starterCode": "// Parse subtotal, apply 10% loyalty discount if chkLoyalty.Checked, add 15% VAT, display as currency\n",
      "modelSolution": "decimal sub;\nif (decimal.TryParse(txtSubtotal.Text, out sub) && sub > 0m)\n{\n    if (chkLoyalty.Checked)\n    {\n        sub = sub * 0.90m;\n    }\n    decimal finalTotal = sub * 1.15m;\n    lblFinalQuote.Text = finalTotal.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Invalid subtotal.\");\n}",
      "testCases": [
        {
          "name": "Loyalty Member R 1,000 -> R 1,035.00",
          "inputs": {
            "txtSubtotal": "1000",
            "chkLoyalty": true
          },
          "expected": {
            "lblFinalQuote": "1035.00"
          },
          "expectedDescription": "1000 * 0.90 * 1.15 = R 1,035.00"
        },
        {
          "name": "Standard Customer R 1,000 -> R 1,150.00",
          "inputs": {
            "txtSubtotal": "1000",
            "chkLoyalty": false
          },
          "expected": {
            "lblFinalQuote": "1150.00"
          },
          "expectedDescription": "1000 * 1.15 = R 1,150.00"
        }
      ],
      "methodHeader": "private void btnQuote_Click(object sender, EventArgs e)\n{"
    },
    "scenario_multiform_dispatch": {
      "id": "scenario_multiform_dispatch",
      "su": "SU6",
      "title": "Multiform Modal Summary Dispatcher (SU6)",
      "methodSignature": "private void btnShowSummary_Click(object sender, EventArgs e)",
      "description": "Validate txtUnits (int > 0). Compute total = units * 150m. Instantiate SummaryForm frmSummary = new SummaryForm(), assign the currency total to frmSummary.lblSummaryTotal.Text BEFORE calling frmSummary.ShowDialog(), and update lblDispatchStatus.Text = \"Dispatched: \" + total.ToString(\"C\").",
      "requiresCurrency": true,
      "controls": [
        "txtUnits",
        "lblDispatchStatus"
      ],
      "expectedOutputs": [
        "lblDispatchStatus"
      ],
      "starterCode": "// Validate txtUnits, instantiate SummaryForm, set lblSummaryTotal.Text, call ShowDialog(), update lblDispatchStatus\n",
      "modelSolution": "int units;\nif (int.TryParse(txtUnits.Text, out units) && units > 0)\n{\n    decimal total = units * 150m;\n    SummaryForm frmSummary = new SummaryForm();\n    frmSummary.lblSummaryTotal.Text = total.ToString(\"C\");\n    frmSummary.ShowDialog();\n    lblDispatchStatus.Text = \"Dispatched: \" + total.ToString(\"C\");\n}\nelse\n{\n    MessageBox.Show(\"Enter a positive whole number of units.\");\n}",
      "testCases": [
        {
          "name": "4 Units Dispatched Modally (R 600.00)",
          "inputs": {
            "txtUnits": "4"
          },
          "expected": {
            "lblDispatchStatus": "600.00"
          },
          "expectedDescription": "SummaryForm instantiated, lblSummaryTotal populated before ShowDialog(), lblDispatchStatus = R 600.00"
        },
        {
          "name": "Invalid Zero Units Rejected",
          "inputs": {
            "txtUnits": "0"
          },
          "expected": {
            "_messages": "positive"
          },
          "expectedDescription": "Displays validation MessageBox"
        }
      ],
      "methodHeader": "private void btnShowSummary_Click(object sender, EventArgs e)\n{"
    }
  },
  "spotErrors": [
    {
      "id": "err_01",
      "title": "Spot-the-Error: Missing Semicolon in Declaration",
      "code": "1: private void btnCalculate_Click(object sender, EventArgs e)\n2: {\n3:     decimal hours = 40.5m\n4:     decimal rate = 120.00m;\n5:     lblGrossPay.Text = (hours * rate).ToString(\"C\");\n6: }",
      "question": "Which line contains a syntax error preventing this C# project from compiling?",
      "options": [
        "Line 3: Missing terminating semicolon ';' at the end of statement (CS1002)",
        "Line 1: Event handler signature is missing public modifier",
        "Line 4: 'm' suffix cannot be used with decimal literals",
        "Line 5: '.ToString(\"C\")' is invalid syntax for currency"
      ],
      "answer": 0,
      "explanation": "Line 3 is missing the required semicolon ';'. In C#, every statement must terminate with a semicolon. The compiler reports CS1002: ; expected.",
      "su": "SU3"
    },
    {
      "id": "err_02",
      "title": "Spot-the-Error: Assigning String Directly to Numeric Variable",
      "code": "1: private void btnSubmit_Click(object sender, EventArgs e)\n2: {\n3:     decimal price;\n4:     price = txtPrice.Text;\n5:     lblTotal.Text = price.ToString(\"C\");\n6: }",
      "question": "What error occurs on Line 4?",
      "options": [
        "CS0103: The name 'txtPrice' does not exist.",
        "CS0029: Cannot implicitly convert type 'string' to 'decimal'. Must use decimal.Parse() or decimal.TryParse().",
        "Runtime NullReferenceException because Text is null.",
        "No error; C# automatically converts strings to decimals in assignments."
      ],
      "answer": 1,
      "explanation": "The Text property of a TextBox returns a string. C# is strongly typed and does not perform implicit string-to-numeric conversions. You must use decimal.Parse(txtPrice.Text) or decimal.TryParse(txtPrice.Text, out price).",
      "su": "SU3"
    },
    {
      "id": "err_03",
      "title": "Spot-the-Error: Assignment Operator Used in if Condition",
      "code": "1: int mark = 65;\n2: if (mark = 50)\n3: {\n4:     lblResult.Text = \"Pass\";\n5: }",
      "question": "Why will Line 2 fail to compile in Visual C#?",
      "options": [
        "mark cannot be compared to an integer",
        "if statements cannot have integer conditions in any circumstance",
        "Single '=' is the assignment operator; comparison requires the relational '==' operator (CS0029 / CS0266)",
        "Parentheses around mark = 50 are not allowed in C#"
      ],
      "answer": 2,
      "explanation": "In C#, '=' assigns the value 50 to mark and yields an int (50). The if statement strictly requires a boolean expression. Since int cannot be converted to bool, the compiler flags an error. Comparison requires '==': if (mark == 50).",
      "su": "SU3"
    },
    {
      "id": "err_04",
      "title": "Spot-the-Error: Missing 'out' Keyword in TryParse",
      "code": "1: decimal hours;\n2: if (decimal.TryParse(txtHours.Text, hours))\n3: {\n4:     lblResult.Text = \"Valid\";\n5: }",
      "question": "What is wrong with the TryParse call on Line 2?",
      "options": [
        "TryParse only accepts int variables, not decimal",
        "TryParse does not return a boolean value",
        "txtHours.Text must be cast to an object first",
        "The second argument must be preceded by the 'out' keyword: decimal.TryParse(txtHours.Text, out hours)"
      ],
      "answer": 3,
      "explanation": "The C# TryParse method passes the target variable by reference using the 'out' keyword. Omitting 'out' causes a compiler error CS1503: Argument 2 must be passed with the 'out' keyword.",
      "su": "SU3"
    },
    {
      "id": "err_05",
      "title": "Spot-the-Error: Integer Division Truncation Bug",
      "code": "1: int totalMarks = 85;\n2: int maxMarks = 100;\n3: double percentage = (totalMarks / maxMarks) * 100;\n4: lblPercent.Text = percentage.ToString(\"P\");",
      "question": "What logical bug occurs on Line 3 when totalMarks is 85?",
      "options": [
        "Integer division '85 / 100' evaluates to 0 due to truncation, making percentage equal 0.0",
        "A runtime DivideByZeroException is thrown",
        "The code will not compile because double cannot hold an int calculation",
        "The multiplication by 100 causes an arithmetic overflow"
      ],
      "answer": 0,
      "explanation": "When dividing two integers in C# (totalMarks / maxMarks), integer division occurs and truncates any fractional part: 85 / 100 = 0. Multiplying 0 by 100 gives 0.0. To fix, cast at least one operand to double: ((double)totalMarks / maxMarks) * 100.",
      "su": "SU3"
    },
    {
      "id": "err_06",
      "title": "Spot-the-Error: Missing 'break' in switch Statement",
      "code": "1: switch (gradeLevel)\n2: {\n3:     case 1:\n4:         rate = 100.0m;\n5:     case 2:\n6:         rate = 150.0m;\n7:         break;\n8: }",
      "question": "What compiler error is generated for case 1 on Lines 3-4?",
      "options": [
        "gradeLevel must be a string",
        "CS0163: Control cannot fall through from one case label ('case 1:') to another; a 'break;' statement is required",
        "case values cannot be integers",
        "default label is mandatory in all switch blocks"
      ],
      "answer": 1,
      "explanation": "C# strictly prohibits implicit fall-through between non-empty case statements. Case 1 contains executable statements (rate = 100.0m;) and must end with a jump statement such as 'break;', 'return;', or 'goto case;'.",
      "su": "SU3"
    },
    {
      "id": "err_07",
      "title": "Spot-the-Error: Using Local Variable Outside its Declared Scope",
      "code": "1: private void btnCalculate_Click(object sender, EventArgs e)\n2: {\n3:     if (chkDiscount.Checked)\n4:     {\n5:         decimal discount = 50.0m;\n6:     }\n7:     lblTotal.Text = discount.ToString(\"C\");\n8: }",
      "question": "Why does Line 7 fail to compile?",
      "options": [
        "lblTotal cannot display currency",
        "chkDiscount does not have a Checked property",
        "The variable 'discount' is declared inside the if block and is not visible outside that block (CS0103: The name 'discount' does not exist in current context)",
        "discount must be declared as static"
      ],
      "answer": 2,
      "explanation": "In C#, variables declared inside curly braces '{ }' have block scope and cease to exist once the block terminates. Line 7 attempts to use 'discount' outside the if block where it was declared, triggering CS0103.",
      "su": "SU3"
    },
    {
      "id": "err_08",
      "title": "Spot-the-Error: Infinite while Loop Due to Missing Counter Increment",
      "code": "1: int count = 1;\n2: decimal total = 0.0m;\n3: while (count <= 10)\n4: {\n5:     total += 100.0m;\n6:     lstItems.Items.Add(total.ToString(\"C\"));\n7: }",
      "question": "What critical runtime defect exists in this while loop?",
      "options": [
        "The condition count <= 10 causes an index out of bounds error",
        "lstItems.Items.Add does not accept string arguments",
        "total should be declared inside the while loop",
        "The loop counter 'count' is never incremented (missing count++;), causing an infinite loop that freezes the application"
      ],
      "answer": 3,
      "explanation": "The variable 'count' remains 1 forever because there is no 'count++;' or update statement inside the loop body. The condition '1 <= 10' remains perpetually true, resulting in an infinite loop that locks the UI thread.",
      "su": "SU3"
    },
    {
      "id": "err_09",
      "title": "Spot-the-Error: Default Control Name Violation (NWU Rubric)",
      "code": "1: private void button1_Click(object sender, EventArgs e)\n2: {\n3:     decimal hours = decimal.Parse(textBox1.Text);\n4:     label1.Text = hours.ToString();\n5: }",
      "question": "What NWU CMPG122 coding standard violation is committed in this event handler?",
      "options": [
        "Default control names (button1, textBox1, label1) violate the prescribed NWU Hungarian notation standards (btnCalculate, txtHours, lblOutput), resulting in rubric penalties",
        "Event handlers cannot be named button1_Click",
        "textBox1 cannot be parsed to decimal",
        "label1.Text only accepts integers"
      ],
      "answer": 0,
      "explanation": "The official NWU CMPG122 naming conventions strictly mandate Hungarian prefixes: 'btn' for buttons, 'txt' for textboxes, 'lbl' for labels, and meaningful descriptive identifiers. Using default control names incurs penalties in Windows Forms development.",
      "su": "SU3"
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
      "explanation": "When nothing is selected in a ListBox, SelectedIndex is -1 and SelectedItem is null. Calling .ToString() on null throws a NullReferenceException, and RemoveAt(-1) throws ArgumentOutOfRangeException. You must guard with 'if (lstStudents.SelectedIndex != -1)'.",
      "su": "SU3"
    },
    {
      "id": "err_11",
      "title": "Spot-the-Error: Use of Unassigned Local Variable",
      "code": "1: decimal discountRate;\n2: if (chkLoyalty.Checked)\n3: {\n4:     discountRate = 0.10m;\n5: }\n6: decimal finalPrice = 1000m * (1 - discountRate);",
      "question": "Why does Line 6 fail to compile?",
      "options": [
        "1000m cannot be multiplied by a parenthesized expression",
        "chkLoyalty.Checked is read-only",
        "CS0165: Use of unassigned local variable 'discountRate'. If chkLoyalty.Checked is false, discountRate is never assigned a value.",
        "discountRate cannot be subtracted from 1"
      ],
      "answer": 2,
      "explanation": "In C#, local variables are not given default values automatically. If chkLoyalty.Checked is false, discountRate remains unassigned when evaluated on line 6. The compiler flags CS0165. To fix, initialize it upon declaration: 'decimal discountRate = 0.0m;' or add an else block.",
      "su": "SU3"
    },
    {
      "id": "err_12",
      "title": "Spot-the-Error: Off-By-One Error in for Loop",
      "code": "1: string[] months = { \"Jan\", \"Feb\", \"Mar\", \"Apr\" };\n2: for (int i = 0; i <= months.Length; i++)\n3: {\n4:     lstMonths.Items.Add(months[i]);\n5: }",
      "question": "What runtime error occurs on the final iteration of this for loop?",
      "options": [
        "StackOverflowException",
        "NullReferenceException",
        "InvalidCastException",
        "IndexOutOfRangeException: Array indices range from 0 to Length - 1; using '<=' accesses index 4 which does not exist"
      ],
      "answer": 3,
      "explanation": "The array contains 4 items with valid indices 0, 1, 2, 3. The condition 'i <= months.Length' allows 'i' to reach 4. Evaluating months[4] throws an IndexOutOfRangeException. The condition must be 'i < months.Length'.",
      "su": "SU3"
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
      "explanation": "The opening curly brace on Line 2 has no corresponding closing curly brace on Line 7. The C# compiler reports CS1513: } expected.",
      "su": "SU3"
    },
    {
      "id": "err_14",
      "title": "Spot-the-Error: Incorrect Literal Suffix for Decimal",
      "code": "1: decimal price = 199.99;\n2: decimal vat = price * 0.15;\n3: lblTotal.Text = (price + vat).ToString(\"C\");",
      "question": "Why do Lines 1 and 2 fail to compile in Visual C#?",
      "options": [
        "decimal is not a valid C# keyword",
        "Double literals without 'm' (199.99 and 0.15) cannot be implicitly converted to decimal (CS0664 / CS0029)",
        "Labels cannot display decimal values",
        "vat is a reserved C# keyword"
      ],
      "answer": 1,
      "explanation": "By default, real numeric literals containing a decimal point are treated as type 'double'. C# does not allow implicit conversion from double to decimal. Suffix 'm' or 'M' must be appended: '199.99m' and '0.15m'.",
      "su": "SU3"
    },
    {
      "id": "err_15",
      "title": "Spot-the-Error: Re-declaring Variable Inside Same Scope",
      "code": "1: decimal total = 0m;\n2: decimal rate = 50m;\n3: int count = 5;\n4: decimal total = rate * count;\n5: lblTotal.Text = total.ToString(\"C\");",
      "question": "What compiler error occurs on Line 4?",
      "options": [
        "Cannot multiply decimal by int",
        "count must be declared as decimal",
        "CS0128: A local variable named 'total' is already defined in this scope",
        "lblTotal.Text only accepts strings"
      ],
      "answer": 2,
      "explanation": "The variable 'total' was already declared on Line 1. Line 4 attempts to declare it again with 'decimal total = ...'. In C#, you cannot declare two local variables with the same name in the same scope. Line 4 should simply be an assignment: 'total = rate * count;'.",
      "su": "SU3"
    },
    {
      "id": "err_16",
      "title": "Spot-the-Error: Duplicate Method Signature in Form Class (CS0111)",
      "code": "1: private void btnClear_Click(object sender, EventArgs e)\n2: {\n3:     txtTest1.Text = \"\";\n4:     txtTest2.Text = \"\";\n5:     lblAverage.Text = \"\";\n6: }\n7: private void btnClear_Click(object sender, EventArgs e)\n8: {\n9:     this.Close();\n10: }",
      "question": "Why does this C# Form class fail to compile with Roslyn error CS0111?",
      "options": [
        "Line 1: Event handlers cannot be declared with 'private' access modifier",
        "Line 5: Assigning empty string \"\" to a Label is invalid syntax",
        "Line 9: 'this.Close();' cannot be called inside a Form class",
        "Line 7: Two methods in the same class cannot share the identical identifier 'btnClear_Click' and parameter list"
      ],
      "answer": 3,
      "explanation": "In C#, declaring two methods in the same class with the same name and parameter list causes CS0111: Type already defines a member called 'btnClear_Click' with the same parameter types. The second method should be named 'btnExit_Click'.",
      "su": "SU3"
    },
    {
      "id": "err_17",
      "title": "Spot-the-Error: Invalid Catch Syntax and String Formatting Typo",
      "code": "1: try\n2: {\n3:     double test1 = double.Parse(txtTest1.Text);\n4:     double test2 = double.Parse(txtTest2.Text);\n5:     double avg = (test1 + test2) / 2.0;\n6:     lblAverage.Text = avg.toString(''n2'');\n7: }\n8: catch except(ex e)\n9: {\n10:    MessageBox.Show(\"Please enter valid numeric marks.\");\n11: }",
      "question": "Which two lines contain syntax errors that prevent this event handler from compiling?",
      "options": [
        "Line 6 (lowercase 'toString' with single quotes ''n2'') and Line 8 (invalid 'catch except(ex e)' syntax)",
        "Line 3 (double.Parse does not exist in C#) and Line 5 (division by 2.0 is illegal)",
        "Line 1 (try cannot be lowercase) and Line 10 (MessageBox.Show requires 3 arguments)",
        "Line 4 (txtTest2.Text is read-only) and Line 8 (missing finally block)"
      ],
      "answer": 0,
      "explanation": "Line 6 violates C# PascalCase naming (must be ToString) and uses two single quotes (''n2'') instead of double quotes (\"n2\"). Line 8 has invalid catch syntax; C# requires 'catch (FormatException ex)' or 'catch (Exception ex)'.",
      "su": "SU3"
    },
    {
      "id": "err_18",
      "title": "Bug #18: StreamWriter Overwrite & Missing Close() (SU4 Week 9)",
      "unit": "SU4",
      "question": "This handler is meant to append a new student name to the end of `Names.txt` without erasing existing entries and ensure the buffer is saved to disk. What two defects exist?",
      "options": [
        "`StreamWriter` must be replaced with `StreamReader`, and `WriteLine` must be replaced with `ReadLine`.",
        "`File.CreateText` erases the existing file contents (should be `File.AppendText(\"Names.txt\")`), and `outputFile.Close();` is missing at the end.",
        "`txtStudentName.Text` must be parsed with `int.TryParse` before calling `WriteLine`.",
        "`Names.txt` must be passed to `MessageBox.Show` before opening."
      ],
      "answer": 1,
      "fix": "StreamWriter outputFile = File.AppendText(\"Names.txt\");\noutputFile.WriteLine(txtStudentName.Text);\noutputFile.Close();",
      "explanation": "`File.CreateText` overwrites any existing file and erases its contents; `File.AppendText` preserves existing lines and writes at the end. Additionally, `outputFile.Close();` is required to flush the buffer and release the file lock.",
      "code": "private void btnSaveLog_Click(object sender, EventArgs e)\n{\n    // Append new student name to existing Names.txt log without erasing old names:\n    StreamWriter outputFile = File.CreateText(\"Names.txt\");\n    outputFile.WriteLine(txtStudentName.Text);\n}",
      "su": "SU3"
    },
    {
      "id": "err_19",
      "title": "Bug #19: Unassigned out Parameter (CS0177) & Missing ref Keyword (CS1620) (SU5 Week 10)",
      "unit": "SU5",
      "question": "Why does the C# compiler reject `return false;` with error `CS0177: The out parameter 'seconds' must be assigned to before control leaves the current method`?",
      "options": [
        "Because `ReadSeconds` must have a `void` return type when using `out`.",
        "Because `int.TryParse` does not work inside custom methods.",
        "Because when the `if` condition is false, execution reaches `return false;` without ever assigning a value to the `out` parameter `seconds` (must add `seconds = 0;` before `return false;`).",
        "Because `3600` exceeds the maximum value of an `int`."
      ],
      "answer": 2,
      "fix": "seconds = 0;\nreturn false;",
      "explanation": "Every code path in a method with an `out` parameter must assign a value to that parameter before returning. Assigning `seconds = 0;` before `return false;` (or passing `out seconds` directly to `int.TryParse`) satisfies the compiler.",
      "code": "private bool ReadSeconds(string text, out int seconds)\n{\n    int parsed;\n    if (int.TryParse(text, out parsed) && parsed >= 1 && parsed <= 3600)\n    {\n        seconds = parsed;\n        return true;\n    }\n    return false; // Compiler Error CS0177!\n}",
      "su": "SU3"
    },
    {
      "id": "err_20",
      "title": "Bug #20: Multiform Post-ShowDialog Assignment & Private Control Access (SU6 Week 12)",
      "unit": "SU6",
      "question": "Assume `lblFinalTotal` on `SummaryForm` has `Modifiers = Public`. Why does `lblFinalTotal` appear empty while the user is looking at `SummaryForm`?",
      "options": [
        "Because `new SummaryForm()` deletes `totalDue`.",
        "Because `ToString(\"C\")` cannot be used in multiform projects.",
        "Because `SummaryForm` must be opened with `this.Close()`.",
        "Because `frmSummary.ShowDialog()` blocks execution until the user closes `SummaryForm`, so `frmSummary.lblFinalTotal.Text` is assigned *after* the form has already been closed."
      ],
      "answer": 3,
      "fix": "SummaryForm frmSummary = new SummaryForm();\nfrmSummary.lblFinalTotal.Text = totalDue.ToString(\"C\");\nfrmSummary.ShowDialog();",
      "explanation": "A modal `ShowDialog()` call pauses the calling event handler until the modal form is closed. Any data or control text must be assigned to `frmSummary` **before** calling `frmSummary.ShowDialog()`.",
      "code": "private void btnShowSummary_Click(object sender, EventArgs e)\n{\n    SummaryForm frmSummary = new SummaryForm();\n    frmSummary.ShowDialog();\n    frmSummary.lblFinalTotal.Text = totalDue.ToString(\"C\");\n}",
      "su": "SU3"
    },
    {
      "id": "spot_21_filedialog_casing",
      "su": "SU4",
      "title": "OpenFileDialog Property Casing & Cancel Bug",
      "code": "private void btnLoad_Click(object sender, EventArgs e)\n{\n    ofdInput.ShowDialog();\n    StreamReader sr = File.OpenText(ofdInput.Filename);\n    lblFirst.Text = sr.ReadLine();\n    sr.Close();\n}",
      "question": "Identify the TWO defects in this file-opening event handler:",
      "options": [
        "(1) ShowDialog() is not checked against DialogResult.OK (crashing if the user clicks Cancel), and (2) .Filename uses a lowercase \"n\" instead of .FileName (CS1061).",
        "StreamReader should be StreamWriter, and Close() should be Dispose().",
        "ofdInput must be instantiated with new on every click, and ReadLine() returns an int.",
        "File.OpenText overwrites the file instead of reading it."
      ],
      "answer": 0,
      "explanation": "Always check if (ofdInput.ShowDialog() == DialogResult.OK) before opening the file, and spell the C# property with exact PascalCase: ofdInput.FileName."
    },
    {
      "id": "spot_22_ref_uninitialized",
      "su": "SU5",
      "title": "Uninitialised ref Argument & Missing Call Keyword",
      "code": "private void AddFee(ref decimal amount)\n{\n    amount += 45.00m;\n}\n\nprivate void btnApply_Click(object sender, EventArgs e)\n{\n    decimal feeTotal;\n    AddFee(feeTotal);\n    lblOut.Text = feeTotal.ToString(\"C\");\n}",
      "question": "Why does btnApply_Click produce TWO compiler errors?",
      "options": [
        "decimal cannot be passed with ref, and += is invalid on decimals.",
        "(1) feeTotal is uninitialised before being passed as ref (CS0165), and (2) the call AddFee(feeTotal) omits the required ref keyword (CS1620).",
        "AddFee must return decimal instead of void.",
        "feeTotal must be declared as a class-level field."
      ],
      "answer": 1,
      "explanation": "Initialise decimal feeTotal = 0m; before the call AND write ref at the call site: AddFee(ref feeTotal);."
    },
    {
      "id": "spot_23_out_unassigned",
      "su": "SU5",
      "title": "Unassigned out Parameter on False Path",
      "code": "private bool TryParseRate(string input, out decimal rate)\n{\n    decimal temp;\n    if (decimal.TryParse(input, out temp) && temp > 0m)\n    {\n        rate = temp;\n        return true;\n    }\n    return false;\n}",
      "question": "Why does the C# compiler refuse to compile TryParseRate (error CS0177)?",
      "options": [
        "A bool method cannot declare an out decimal parameter.",
        "decimal.TryParse cannot be called inside another method.",
        "When the if condition is false, the method returns false without ever assigning a value to the out parameter rate!",
        "temp must be declared as double."
      ],
      "answer": 2,
      "explanation": "Every out parameter must be assigned before control leaves the method on ALL return paths—assign rate = 0m; before return false;."
    },
    {
      "id": "spot_24_modal_order_bug",
      "su": "SU6",
      "title": "Premature Modal ShowDialog() Before Populating Public Label",
      "code": "private void btnInvoice_Click(object sender, EventArgs e)\n{\n    InvoiceForm frm = new InvoiceForm();\n    frm.ShowDialog();\n    frm.lblAmountDue.Text = (450m * 1.15m).ToString(\"C\");\n}",
      "question": "Assuming lblAmountDue has Modifiers = Public on InvoiceForm, why does the user see an empty/default label while InvoiceForm is open?",
      "options": [
        "ShowDialog() resets all Public labels to empty strings.",
        "450m * 1.15m overflows decimal.",
        "InvoiceForm must be opened with Application.Run().",
        "ShowDialog() suspends execution at line 4 until the user CLOSES InvoiceForm, so line 5 assigns lblAmountDue.Text only after the window has already been dismissed!"
      ],
      "answer": 3,
      "explanation": "Assign frm.lblAmountDue.Text = ... BEFORE calling frm.ShowDialog(); so the value is already in the label while the modal form is displayed."
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
      "title": "Scenario 6: Tuition Bursary & Surcharge Terminal",
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
  ]
};
});
