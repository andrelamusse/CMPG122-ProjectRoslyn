# Universal ModuleApp Master Engineering Specification, Tech Stack Guide & Exhaustive Compliance Checklist

> **Document Identifier:** `UNIVERSAL-MODULEAPP-MASTER-SPEC-AND-AUDIT-CHECKLIST-V6.00`  
> **Target Audience:** Autonomous AI Engineers, Full-Stack Developers, Academic Curriculum Auditors, and System Architects.  
> **Scope:** Complete engineering blueprint, technology stack specifications, cloud APIs, security & access controls, and exhaustive checklist for building, verifying, and deploying academic module assessment and study platforms (e.g., NWU ECON122, STTN122, CMPG122, ACCF111, LAWS) without trial-and-error recoding.

---

# Table of Contents
1. [Executive Architecture & Engineering Philosophy](#1-executive-architecture--engineering-philosophy)
2. [Complete Technology Stack, Libraries & APIs Guide](#2-complete-technology-stack-libraries--apis-guide)
   - 2.1 [Core Runtime & Zero-Build Stack](#21-core-runtime--zero-build-stack)
   - 2.2 [Mathematical Notation Engine (KaTeX)](#22-mathematical-notation-engine-katex)
   - 2.3 [Real-Time Global Cloud Telemetry API (CountAPI)](#23-real-time-global-cloud-telemetry-api-countapi)
   - 2.4 [Interactive Vector Canvas & Cartesian Spatial Grader](#24-interactive-vector-canvas--cartesian-spatial-grader)
3. [Security, Privacy, Blinding & Access Control Protocols](#3-security-privacy-blinding--access-control-protocols)
   - 3.1 [Admin Telemetry Dashboard Isolation (`admin.html`)](#31-admin-telemetry-dashboard-isolation-adminhtml)
   - 3.2 [GitHub Repository & Source Code Blinding](#32-github-repository--source-code-blinding)
   - 3.3 [Creator Direct Contact & WhatsApp Escalation Modal](#33-creator-direct-contact--whatsapp-escalation-modal)
   - 3.4 [DOM Blinding & Anti-Cheat Inspection Protections](#34-dom-blinding--anti-cheat-inspection-protections)
4. [Master Verification & Implementation Audit Checklist](#4-master-verification--implementation-audit-checklist)
   - [Domain 1: Repository Structure, File Hygiene & Zero-Clutter Invariants](#domain-1-repository-structure-file-hygiene--zero-clutter-invariants)
   - [Domain 2: Frontend Aesthetics, Typography & Dual Dark/Light Tokens](#domain-2-frontend-aesthetics-typography--dual-darklight-tokens)
   - [Domain 3: Mobile-First Zero-Overflow Guardrails & Touch Accessibility](#domain-3-mobile-first-zero-overflow-guardrails--touch-accessibility)
   - [Domain 4: KaTeX Centralized Math Engine & Delimiter Contracts](#domain-4-katex-centralized-math-engine--delimiter-contracts)
   - [Domain 5: Question Database Schema, Provenance & Curricular Matrix](#domain-5-question-database-schema-provenance--curricular-matrix)
   - [Domain 6: Distractor Symmetry, Anti-Triviality & Exam Invariants](#domain-6-distractor-symmetry-anti-triviality--exam-invariants)
   - [Domain 7: Quantitative Calculation Engine & Forgiving Parser](#domain-7-quantitative-calculation-engine--forgiving-parser)
   - [Domain 8: Interactive Vector Canvas & Pedagogical Graph Grader](#domain-8-interactive-vector-canvas--pedagogical-graph-grader)
   - [Domain 9: Bilingual Synchronicity & Linguistic Parity (EN/AF)](#domain-9-bilingual-synchronicity--linguistic-parity-enaf)
   - [Domain 10: Executive Summary, Transmission Steppers & Curve Decoders](#domain-10-executive-summary-transmission-steppers--curve-decoders)
   - [Domain 11: Interactive Glossary Modal & Keyword Underline System](#domain-11-interactive-glossary-modal--keyword-underline-system)
   - [Domain 12: Practice Mode vs Blind Exam State Machine & Timer](#domain-12-practice-mode-vs-blind-exam-state-machine--timer)
   - [Domain 13: Instant Feedback Engine & 5-Second Auto-Fade Stacking](#domain-13-instant-feedback-engine--5-second-auto-fade-stacking)
   - [Domain 14: Global Cloud Telemetry & Anti-Duplicate Device Deduplication](#domain-14-global-cloud-telemetry--anti-duplicate-device-deduplication)
   - [Domain 15: Admin Telemetry Portal (`admin.html`) Metrics & Polling](#domain-15-admin-telemetry-portal-adminhtml-metrics--polling)
   - [Domain 16: Security, Student Blinding & WhatsApp Feedback Channel](#domain-16-security-student-blinding--whatsapp-feedback-channel)
   - [Domain 17: Dual Distribution Architecture (Multi-File & Mobile HTML)](#domain-17-dual-distribution-architecture-multi-file--mobile-html)
   - [Domain 18: Headless Automated 5-Tier Verification Suite (`verify_axiom.py`)](#domain-18-headless-automated-5-tier-verification-suite-verify_axiompy)
   - [Domain 19: Git Version Control Hygiene & GitHub Pages Deployment](#domain-19-git-version-control-hygiene--github-pages-deployment)
   - [Domain 20: Cross-Module Porting Protocol (Zero-Recode Calibration)](#domain-20-cross-module-porting-protocol-zero-recode-calibration)
5. [Rapid Module Porting Playbook (Step-by-Step for New Subjects)](#5-rapid-module-porting-playbook-step-by-step-for-new-subjects)

---

# 1. Executive Architecture & Engineering Philosophy

To eliminate the cycle of repetitive coding, regressed styling, broken LaTeX, and broken telemetry that occurred during early module development, all applications generated for any university module must follow the **ModuleApp Project Axiom Reference Architecture**.

```
[MODULE_CODE]_App/ (or repository root)
├── index.html                 # Main SPA: Student Blind Assessment & Executive Summary
├── admin.html                 # Isolated Admin Telemetry Portal (Zero links from index.html)
├── css/
│   └── axiom.css              # Bespoke Oxford/Cambridge academic tokens, mobile guardrails
├── js/
│   ├── axiom-math.js          # Centralized KaTeX rendering engine & delimiter coordinator
│   ├── exam-engine.js         # Assessment state machine, timer, shuffling, scoring
│   ├── questions-db.js        # Curated master question bank (126–150+ questions)
│   ├── glossary-db.js         # Bilingual terminology database with textbook citations
│   ├── canvas-engine.js       # Interactive vector graphing canvas & spatial grader
│   └── telemetry.js           # Real cloud counter integration & anti-duplicate deduplication
├── assets/
│   ├── canvas_grid_texture.jpg# Subtle background micro-texture
│   └── hero_macro_abstract.jpg# Header banner subtle texture
└── tests/
    ├── verify_axiom.py        # 5-Tier headless opaque-box verification test harness
    ├── stress_test_axiom.py    # Scoring engine & boundary conditions oracle
    └── axiom_test_results.json # Automated test result export
```

### The Seven Unbreakable Laws of ModuleApp:
1. **Zero-Build & Zero-CORS Portability:** The platform runs natively in any browser directly from `file://` or GitHub Pages. No Node.js build steps, no Webpack, no Vite, no local server required.
2. **Absolute Blinding & Isolation:** Students must never be provided links to `admin.html` or the GitHub repository. Telemetry must be completely segregated. Student feedback must route to a creator contact modal (WhatsApp), not public GitHub issues.
3. **Double-Escaped KaTeX Delimiters:** In JavaScript strings, math delimiters must ALWAYS be double-escaped (`\\(` and `\\[`). Single-escaped delimiters silently collapse in JavaScript interpreters.
4. **Distractor Symmetry & Anti-Triviality:** In every multiple choice question, options A, B, C, D must have equal character length (standard deviation $\le 15\%$, max/min ratio $\le 1.25$), equal correct key distribution ($\sim 25\%$ per key), and authentic distractors addressing documented student misconceptions.
5. **Mobile-First Zero-Overflow Guardrail:** `html, body` must enforce `width: 100%; max-width: 100vw; overflow-x: hidden;`. All interactive touch targets must have `min-height: 44px;`.
6. **Real Global Cloud Telemetry:** Zero fake benchmark numbers. True unique devices are counted via Cloud API with persistent `localStorage` deduplication. Active learners are defined strictly as users with $\ge 300\text{ s}$ (5 minutes) of continuous engagement.
7. **Bilingual Academic Parity:** Every question, derivation, option, and glossary entry must exist in both official instructional languages (e.g., English and Academic Afrikaans) with zero untranslated English in translated fields.

---

# 2. Complete Technology Stack, Libraries & APIs Guide

## 2.1 Core Runtime & Zero-Build Stack

| Component | Technology | Version / Source | Purpose |
|:---|:---|:---|:---|
| **Markup** | HTML5 Semantic Standard | Pure Semantic HTML5 | Structured layout, WCAG accessibility, modals |
| **Styling** | Custom CSS3 Custom Properties | Vanilla CSS (Zero Tailwind CDN) | High-performance CSS design system, dark/light themes |
| **Scripting** | Vanilla ECMAScript 2022+ | Native Browser JS (Zero jQuery) | High-speed DOM manipulation, state machines, math grading |
| **Fonts** | Google Fonts (Inter & JetBrains Mono) | `preconnect` + Google Fonts CDN | Prestigious academic readability (`Inter`) and calculation display (`JetBrains Mono`) |
| **Hosting** | GitHub Pages (Custom Branch or `docs/`) | Standard HTTPS static server | Instant worldwide CDN distribution with zero hosting costs |

### Typography CDN Links:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
```

---

## 2.2 Mathematical Notation Engine (KaTeX)

To eliminate unrendered LaTeX (`\frac`, `\Delta`, `\times`), all math formulas must be processed by KaTeX 0.16.8+ via a centralized engine (`js/axiom-math.js`).

### Required CDN Inclusions (`index.html` head):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="if (window.AxiomMath) window.AxiomMath.onKaTeXLoaded();"></script>
<script src="js/axiom-math.js"></script>
```

### Centralized Math Coordinator (`js/axiom-math.js`):
```javascript
(function() {
  'use strict';

  const AxiomMath = {
    isLoaded: false,
    queue: [],

    onKaTeXLoaded: function() {
      this.isLoaded = true;
      while (this.queue.length > 0) {
        const fn = this.queue.shift();
        try { fn(); } catch(e) { console.error('[KaTeX Queue Error]', e); }
      }
    },

    init: function(callback) {
      if (window.renderMathInElement) {
        this.isLoaded = true;
        if (callback) callback();
      } else if (callback) {
        this.queue.push(callback);
      }
    },

    // CRITICAL: Double-escaped backslashes in JavaScript string literals!
    renderElement: function(element) {
      if (!element) return;
      const doRender = () => {
        if (!window.renderMathInElement) return;
        window.renderMathInElement(element, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
          throwOnError: false
        });
      };

      if (this.isLoaded && window.renderMathInElement) {
        doRender();
      } else {
        this.queue.push(doRender);
      }
    }
  };

  window.AxiomMath = AxiomMath;
})();
```

---

## 2.3 Real-Time Global Cloud Telemetry API (CountAPI)

ModuleApp applications require genuine global telemetry tracking unique users, study duration, active engagement, and assessment completions without requiring an expensive backend server or database setup.

### The Cloud API Engine:
- **Provider:** `https://countapi.mileshilliard.com/api/v1` (High-availability open cloud counter)
- **Endpoints:**
  - `GET /hit/:key`: Increments counter by 1 and returns current integer value `{ "value": 128 }`.
  - `GET /get/:key`: Reads current integer value without incrementing `{ "value": 128 }`.

### Production Key Schema:
For each module, use a dedicated key namespace:
- `nwu_[module]_[project]_devices_prod` (Unique devices logged)
- `nwu_[module]_[project]_active_prod` (Active users studying $\ge 300\text{ s}$)
- `nwu_[module]_[project]_minutes_prod` (Total accumulated active minutes)
- `nwu_[module]_[project]_completed_prod` (Total submitted assessments)

### Client Telemetry Engine (`js/telemetry.js`):
```javascript
(function() {
  'use strict';

  const CLOUD_BASE = 'https://countapi.mileshilliard.com/api/v1';
  
  // Replace 'econ122_axiom' with target module identifier
  const KEYS = {
    DEVICES: 'nwu_econ122_axiom_devices_prod',
    ACTIVE: 'nwu_econ122_axiom_active_prod',
    COMPLETED: 'nwu_econ122_axiom_completed_prod',
    MINUTES: 'nwu_econ122_axiom_minutes_prod'
  };

  const STORAGE = {
    DEVICE_LOGGED: 'axiom_cloud_v4_device_logged',
    ACTIVE_LOGGED: 'axiom_cloud_v4_active_logged'
  };

  let sessionSeconds = 0;

  // 1. Anti-Duplicate Device Registration
  async function registerDeviceIfNew() {
    const isRegistered = localStorage.getItem(STORAGE.DEVICE_LOGGED);
    if (!isRegistered) {
      try {
        const res = await fetch(`${CLOUD_BASE}/hit/${KEYS.DEVICES}`, { cache: 'no-store' });
        if (res.ok) {
          localStorage.setItem(STORAGE.DEVICE_LOGGED, 'true');
        }
      } catch (e) {
        console.warn('[Telemetry] Device registration fallback:', e);
      }
    }
  }

  // 2. Active Engagement Heartbeat (Every 10 seconds)
  function startEngagementTimer() {
    setInterval(async () => {
      sessionSeconds += 10;

      // Accumulate total study minutes every 60 seconds
      if (sessionSeconds % 60 === 0) {
        try {
          await fetch(`${CLOUD_BASE}/hit/${KEYS.MINUTES}`, { cache: 'no-store' });
        } catch(e) {}
      }

      // Active Learner Criteria: Continuous engagement >= 300 seconds (5 minutes)
      if (sessionSeconds >= 300) {
        const hasLoggedActive = localStorage.getItem(STORAGE.ACTIVE_LOGGED);
        if (!hasLoggedActive) {
          try {
            const res = await fetch(`${CLOUD_BASE}/hit/${KEYS.ACTIVE}`, { cache: 'no-store' });
            if (res.ok) {
              localStorage.setItem(STORAGE.ACTIVE_LOGGED, 'true');
            }
          } catch(e) {}
        }
      }
    }, 10000);
  }

  // 3. Log Assessment Completion
  async function logAssessmentCompleted() {
    try {
      await fetch(`${CLOUD_BASE}/hit/${KEYS.COMPLETED}`, { cache: 'no-store' });
    } catch(e) {
      console.warn('[Telemetry] Assessment logging fallback:', e);
    }
    updateBadge();
  }

  // 4. Update Student Footer Badge (Read-Only Cloud Numbers)
  async function updateBadge() {
    const el = document.getElementById('telemetry-badge');
    if (!el) return;

    try {
      const [devRes, compRes] = await Promise.all([
        fetch(`${CLOUD_BASE}/get/${KEYS.DEVICES}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.COMPLETED}`, { cache: 'no-store' })
      ]);
      const devData = await devRes.json();
      const compData = await compRes.json();

      el.innerHTML = `<span><span style="color: var(--accent-emerald);">●</span> Live Cloud: <strong>${(devData.value || 1).toLocaleString()}</strong> Unique Devices</span> &nbsp;•&nbsp; <span><strong>${(compData.value || 0).toLocaleString()}</strong> Assessments Completed</span>`;
    } catch (e) {
      el.innerHTML = `<span><span style="color: var(--accent-emerald);">●</span> Live Cloud Connected</span>`;
    }
  }

  // 5. Query Metrics for Isolated Admin Dashboard (admin.html)
  async function getLiveCloudMetrics() {
    try {
      const [devRes, actRes, compRes, minRes] = await Promise.all([
        fetch(`${CLOUD_BASE}/get/${KEYS.DEVICES}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.ACTIVE}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.COMPLETED}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.MINUTES}`, { cache: 'no-store' })
      ]);

      const devData = await devRes.json();
      const actData = await actRes.json();
      const compData = await compRes.json();
      const minData = await minRes.json();

      const totalDevices = devData.value || 0;
      const activeUsers = actData.value || 0;
      const totalMinutes = minData.value || 0;
      const totalCompleted = compData.value || 0;
      const avgActiveMinutes = activeUsers > 0 ? (totalMinutes / activeUsers) : 0;

      return { totalDevices, activeUsers, totalMinutes, totalCompleted, avgActiveMinutes };
    } catch (e) {
      console.error('[Telemetry] Query error:', e);
      return null;
    }
  }

  window.AxiomTelemetry = {
    init: function() {
      registerDeviceIfNew();
      startEngagementTimer();
      updateBadge();
      setInterval(updateBadge, 15000);
    },
    logAssessmentCompleted,
    getLiveCloudMetrics
  };

  document.addEventListener('DOMContentLoaded', window.AxiomTelemetry.init);
})();
```

---

## 2.4 Interactive Vector Canvas & Cartesian Spatial Grader

For disciplines requiring curve drawing or graphical shifts (Economics AD-AS, Statistics distributions, Physics vectors), use native HTML5 Canvas with continuous coordinate mapping.

### Spatial Grading Algorithm (`js/canvas-engine.js`):
1. User interacts with Canvas by dragging a start point $(x_1, y_1)$ and end point $(x_2, y_2)$.
2. The engine calculates the mathematical Cartesian slope:
   $$m = \frac{-(y_2 - y_1)}{x_2 - x_1}$$
   *(Note: Canvas Y-axis is inverted; negative $\Delta y$ corresponds to positive Cartesian slope).*
3. The engine compares measured slope against expected tolerance boundaries:
   - Upward sloping curve (Supply / LM): $m \in [0.60, 1.40]$
   - Downward sloping curve (Demand / IS): $m \in [-1.40, -0.60]$
   - Horizontal curve (Perfect elasticity): $|m| \le 0.15$
   - Vertical curve (Perfect inelasticty): $|x_2 - x_1| \le 15\text{ px}$ and $|y_2 - y_1| \ge 80\text{ px}$
4. Visual feedback: Renders a high-contrast guide arrow, Cartesian grid lines, and an instant diagnostic pill (`Slope: 1.02 • Accurate Upward Shift`).

---

# 3. Security, Privacy, Blinding & Access Control Protocols

## 3.1 Admin Telemetry Dashboard Isolation (`admin.html`)

> [!CAUTION]
> **Strict Student Blinding Invariant:** Under NO circumstance may `index.html` contain a hyperlink, button, menu item, or redirect pointing to `admin.html`. The admin dashboard is an out-of-band administrative URL known only to the instructor / platform creator.

### Enforcement Rules:
1. `index.html` must contain zero instances of `<a href="admin.html">` or `window.location = 'admin.html'`.
2. The footer badge in `index.html` displays plain read-only text:
   `Live Cloud: 142 Unique Devices • 89 Assessments Completed` (unclickable `<span>`, not an anchor).
3. `admin.html` exists as a standalone file with a live cloud dashboard that queries `AxiomTelemetry.getLiveCloudMetrics()` every 3 seconds.
4. `admin.html` contains an institutional header, metric cards, active engagement progress bar, and a button to copy the student share link.

## 3.2 GitHub Repository & Source Code Blinding

> [!WARNING]
> **Zero Public Repo Leaks:** Students must NOT be directed to the GitHub repository or its issue tracker. If students discover the repository, they can read `questions-db.js`, view the answer keys, or discover `admin.html`.

### Enforcement Rules:
1. `index.html` must NEVER link to `https://github.com/.../issues` or `https://github.com/.../tree/main`.
2. Delete any "Report Issue on GitHub" or "View Source on GitHub" buttons from the student UI.
3. The footer copyright block must read:
   `Project Axiom • Academic Simulation Environment • Standardized Examination Framework • North-West University Curricular Calibration • All rights reserved.` (No links to GitHub).

## 3.3 Creator Direct Contact & WhatsApp Escalation Modal

Student feedback and bug reports are handled exclusively through an integrated, professional Creator Contact Modal:
1. Accessible via an unobtrusive button or text trigger in the question card or footer (`💬 Report Question Issue`).
2. Opens a high-contrast modal featuring:
   - Creator name and role: `Andre Lamusse • Platform Creator & Developer`
   - Prominent student instruction:
     > **📸 Important Note:** Please take a **screenshot of all issues** and explain the problem clearly so I can assist and update the engine immediately.
   - High-visibility WhatsApp direct action button:
     ```html
     <a href="https://wa.me/27660673757?text=Hi%20Andre%2C%20I%20have%20feedback%20%2F%20found%20an%20issue%20on%20Project%20Axiom%20ECON122%3A" 
        target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
       💬 Send to Creator on WhatsApp
     </a>
     ```

## 3.4 DOM Blinding & Anti-Cheat Inspection Protections

1. **No Pre-Rendered Answer Attributes:** In Exam Mode, options in the DOM must NOT contain attributes like `data-is-correct="true"` or `data-correct-key="B"`.
2. **State Machine Isolation:** Question memos and step-by-step derivations are rendered into `#feedbackContainer` ONLY after the student clicks "Submit Completed Assessment" or "Check Answer" in Practice Mode.
3. **Dynamic Option Shuffling:** The exam engine shuffles option order randomly on test generation, re-mapping keys A, B, C, D so that physical DOM position never reveals the correct answer.

---

# 4. Master Verification & Implementation Audit Checklist

Use the following exhaustive, itemized checkbox audit to verify every single component of a new module application. Every criterion must be verified before production release.

---

## Domain 1: Repository Structure, File Hygiene & Zero-Clutter Invariants

- [ ] `1.001` Target module folder contains canonical entrypoint: `index.html`.
- [ ] `1.002` Target module folder contains isolated administrative portal: `admin.html`.
- [ ] `1.003` Stylesheet resides strictly at `css/axiom.css` (or `css/style.css`).
- [ ] `1.004` Math coordination script resides strictly at `js/axiom-math.js`.
- [ ] `1.005` Question bank script resides strictly at `js/questions-db.js` (or `js/data.js`).
- [ ] `1.006` Interactive examination engine resides strictly at `js/exam-engine.js` (or `js/app.js`).
- [ ] `1.007` Bilingual terminology database resides strictly at `js/glossary-db.js`.
- [ ] `1.008` Vector graph and canvas engine resides strictly at `js/canvas-engine.js`.
- [ ] `1.009` Cloud telemetry engine resides strictly at `js/telemetry.js`.
- [ ] `1.010` Automated verification suite resides strictly at `tests/verify_axiom.py`.
- [ ] `1.011` Zero temporary scratch scripts (`scratch_*.py`, `temp_*.js`, `test.html`) left in the project root.
- [ ] `1.012` Zero zip archives (`.zip`, `.7z`, `.tar.gz`) permitted anywhere in the repository.
- [ ] `1.013` All raw PDFs, textbooks, past papers, and syllabi relocated into `01_Source_Materials/`.
- [ ] `1.014` Source materials strictly divided into `01_Source_Materials/Textbooks/`, `Past_Papers/`, `Memoranda/`, and `Study_Guides_and_Notes/`.
- [ ] `1.015` `.gitignore` contains standard ignores: `__pycache__/`, `*.pyc`, `.DS_Store`, `Thumbs.db`.
- [ ] `1.016` Root workspace contains zero loose or unorganized media assets.
- [ ] `1.017` All background textures stored in `assets/` (`canvas_grid_texture.jpg`, `hero_macro_abstract.jpg`).
- [ ] `1.018` Image asset sizes optimized (< 250 KB per texture).
- [ ] `1.019` Markdown specification documents adhere to version naming: `MasterPrompt_V6.00.md`.
- [ ] `1.020` Workspace root contains clean automated CLI utility: `module_app_cli.py`.

---

## Domain 2: Frontend Aesthetics, Typography & Dual Dark/Light Tokens

- [ ] `2.001` Visual design breaks away from cliché AI templates (cyan/slate glow eliminated).
- [ ] `2.002` Bespoke Oxford/Cambridge academic design language enforced.
- [ ] `2.003` Primary font family set to `Inter, -apple-system, BlinkMacSystemFont, sans-serif`.
- [ ] `2.004` Numerical and calculation font family set to `'JetBrains Mono', monospace`.
- [ ] `2.005` Google Fonts CDN links include `preconnect` for `fonts.googleapis.com` and `fonts.gstatic.com`.
- [ ] `2.006` Dark theme token `--bg-main` set to Deep Academic Navy `#0b1329`.
- [ ] `2.007` Dark theme token `--bg-surface` set to `#111a38`.
- [ ] `2.008` Dark theme token `--bg-card` set to `#182348`.
- [ ] `2.009` Burnished Gold accent token `--accent-gold` set to `#d4af37`.
- [ ] `2.010` Chalkboard green accent token `--accent-chalkboard` set to `#1b4d3e`.
- [ ] `2.011` Emerald success accent token `--accent-emerald` set to `#2d6a4f` (or `#10b981`).
- [ ] `2.012` Azure highlight token `--accent-azure` set to `#38bdf8`.
- [ ] `2.013` Border subtle token `--border-subtle` set to `rgba(255, 255, 255, 0.08)`.
- [ ] `2.014` Text main token `--text-main` set to `#f1f5f9`.
- [ ] `2.015` Text muted token `--text-muted` set to `#94a3b8`.
- [ ] `2.016` Light theme defined via `[data-theme="light"]` attribute selector.
- [ ] `2.017` Light theme `--bg-main` set to `#f8fafc`.
- [ ] `2.018` Light theme `--bg-surface` set to `#ffffff`.
- [ ] `2.019` Light theme `--bg-card` set to `#f1f5f9`.
- [ ] `2.020` Light theme `--text-main` set to `#0f172a`.
- [ ] `2.021` Light theme text contrast verified to meet WCAG AA standards ($\ge 4.5:1$).
- [ ] `2.022` Theme toggle button `#themeToggleBtn` persists preference to `localStorage.getItem('axiom_theme')`.
- [ ] `2.023` Default theme initialized to `dark` unless user previously toggled to `light`.
- [ ] `2.024` Theme toggle dynamically updates button text (`☀️ Light` when dark, `🌙 Dark` when light).
- [ ] `2.025` Institutional top banner displays faculty attribution: `North-West University • Faculty of [Faculty] • Official [Module] Testbed`.

---

## Domain 3: Mobile-First Zero-Overflow Guardrails & Touch Accessibility

- [ ] `3.001` Viewport meta tag explicitly defined: `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">`.
- [ ] `3.002` CSS root strictly enforces zero horizontal scroll:
  ```css
  html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```
- [ ] `3.003` Universal box-sizing applied to all elements: `*, *::before, *::after { box-sizing: inherit; }`.
- [ ] `3.004` Mobile breakpoint declared for tablets: `@media (max-width: 880px)`.
- [ ] `3.005` Mobile breakpoint declared for phones: `@media (max-width: 480px)`.
- [ ] `3.006` Top header navigation bar stacks vertically on mobile (< 880px) without content clipping.
- [ ] `3.007` Minimum 44px tap target height enforced on `.tab-btn`.
- [ ] `3.008` Minimum 44px tap target height enforced on `.header-select`.
- [ ] `3.009` Minimum 44px tap target height enforced on `.icon-action-btn`.
- [ ] `3.010` Minimum 44px tap target height enforced on `.timer-pill`.
- [ ] `3.011` Minimum 44px tap target height enforced on `.mode-toggle-btn`.
- [ ] `3.012` Minimum 44px tap target height enforced on `.theme-toggle-btn`.
- [ ] `3.013` Minimum 44px tap target height enforced on `.flag-btn`.
- [ ] `3.014` Minimum 44px tap target height enforced on `.tool-btn`.
- [ ] `3.015` Minimum 44px tap target height enforced on `.primary-btn` and `.secondary-btn`.
- [ ] `3.016` Minimum 44px tap target height enforced on all radio option labels (`.option-item`).
- [ ] `3.017` Question palette accordion `#paletteToggleBar` collapsible on mobile screens.
- [ ] `3.018` Palette collapse icon toggles between `▼` and `▲`.
- [ ] `3.019` Question grid `#questionGrid` scrolls smoothly without horizontal blowouts.
- [ ] `3.020` Input fields on mobile maintain `font-size: 16px` to prevent automatic iOS zoom.

---

## Domain 4: KaTeX Centralized Math Engine & Delimiter Contracts

- [ ] `4.001` KaTeX 0.16.8+ stylesheet loaded from CDN in `<head>`.
- [ ] `4.002` KaTeX core JavaScript loaded with `defer`.
- [ ] `4.003` KaTeX `auto-render.min.js` loaded with `defer` and `onload` hook.
- [ ] `4.004` Centralized math manager implemented in `js/axiom-math.js`.
- [ ] `4.005` Display math delimiters support `$$...$$` and `\[...\]`.
- [ ] `4.006` Inline math delimiters support `\(...\)` and single `$..$`.
- [ ] `4.007` In `axiom-math.js`, all backslash delimiters are double-escaped: `{ left: '\\(', right: '\\)', display: false }`.
- [ ] `4.008` Zero unrendered LaTeX syntax (`\frac`, `\text{`, `\Delta`, `\pi`, `\times`) present in rendered DOM text.
- [ ] `4.009` `AxiomMath.renderElement()` invoked upon every question change in the assessment view.
- [ ] `4.010` `AxiomMath.renderElement()` invoked upon opening `#glossaryModal`.
- [ ] `4.011` `AxiomMath.renderElement()` invoked upon switching to `#summaryView`.
- [ ] `4.012` `AxiomMath.renderElement()` invoked upon rendering dynamic feedback cards in `#feedbackContainer`.
- [ ] `4.013` `throwOnError: false` configured so malformed formulas fail gracefully without breaking UI.
- [ ] `4.014` KaTeX formula overflow handled in CSS via `overflow-x: auto; max-width: 100%;`.
- [ ] `4.015` Vector diagram text subscripts use SVG `<tspan dy="3">` or high-grade Unicode instead of raw `_` characters.

---

## Domain 5: Question Database Schema, Provenance & Curricular Matrix

- [ ] `5.001` Question bank defined in `window.AXIOM_MASTER_BANK` (or `window.MODULE_MASTER_BANK`).
- [ ] `5.002` Total question count meets MWAU standard: $\ge 126$ questions (e.g. 150 questions: 50 per chapter/unit).
- [ ] `5.003` Each question object conforms strictly to the `AxiomQuestion` schema:
  ```typescript
  interface AxiomQuestion {
    id: string;
    ch: number | string;
    type: "mcq" | "calculation" | "canvas";
    marks: number;
    difficulty: "Core" | "Exam" | "Advanced";
    stem_en: string;
    stem_af: string;
    options?: Array<{ key: "A"|"B"|"C"|"D"; text_en: string; text_af: string }>;
    correctKey?: "A"|"B"|"C"|"D";
    expectedNumber?: number;
    tolerance?: number;
    unit?: string;
    derivation_en: string;
    derivation_af: string;
    curriculumRef: string;
  }
  ```
- [ ] `5.004` Every question possesses a unique, deterministic ID matching `q{unit}_{index}`.
- [ ] `5.005` Questions balanced across syllabus units (e.g., exactly 42 or 50 questions per unit).
- [ ] `5.006` Difficulty levels evenly distributed: `Core` (~35%), `Exam` (~45%), `Advanced` (~20%).
- [ ] `5.007` Every question references authentic textbook chapter/section in `curriculumRef`.
- [ ] `5.008` Every question includes detailed first-principles mathematical/theoretical derivation in `derivation_en`.
- [ ] `5.009` Every question includes complete step-by-step Afrikaans derivation in `derivation_af`.
- [ ] `5.010` Mark allocations standardized: 2 marks for MCQ, 3 to 5 marks for quantitative calculations / canvas tasks.
- [ ] `5.011` Statutory figures calibrated to current year (e.g., VAT 15%, CIT 27%, SARS tax brackets, SARB repo rate corridor).
- [ ] `5.012` Zero placeholder strings (`"TODO"`, `"TBD"`, `"Same as above"`) anywhere in the question bank.

---

## Domain 6: Distractor Symmetry, Anti-Triviality & Exam Invariants

- [ ] `6.001` Correct key distribution across all MCQs is strictly balanced:
  - Key `A`: 20.0% – 30.0%
  - Key `B`: 20.0% – 30.0%
  - Key `C`: 20.0% – 30.0%
  - Key `D`: 20.0% – 30.0%
- [ ] `6.002` No single option key frequency exceeds 35.0% anywhere in the dataset.
- [ ] `6.003` Zero giveaway stems: Stems dive straight into the problem without meta-labels.
- [ ] `6.004` Prohibited stem prefixes purged: `Problem \d+:`, `Question \d+:`, `Chapter \d+:`.
- [ ] `6.005` Prohibited robotic boilerplate purged: `"According to South African macroeconomic principles,"`.
- [ ] `6.006` Distractor length symmetry: For every MCQ, standard deviation of option character lengths is $\le 15.0\%$ of mean length.
- [ ] `6.007` Option length ratio: Longest option length does not exceed $1.25\times$ the shortest option length in that question.
- [ ] `6.008` Correct option is never visibly longer or more verbose than the three incorrect distractors.
- [ ] `6.009` All four options (A, B, C, D) use formal, rigorous academic terminology.
- [ ] `6.010` Zero strawman options (no humorous, obviously absurd, or trivial options).
- [ ] `6.011` Distractors address authentic, documented student misconceptions (e.g. shifts vs movements along curves, statutory vs economic tax incidence, M1 vs Quasi-Money).
- [ ] `6.012` In extended question sets, the correct key never remains frozen on a single option (e.g. eliminating the 100% Key A anomaly).

---

## Domain 7: Quantitative Calculation Engine & Forgiving Parser

- [ ] `7.001` Quantitative calculation questions flagged with `type: "calculation"`.
- [ ] `7.002` Numeric target defined in `expectedNumber` as a valid float/integer.
- [ ] `7.003` Acceptance boundary defined in `tolerance` (numeric $\ge 0$).
- [ ] `7.004` Calculation engine handles both comma and period decimal separators (`1727.27` and `1 727,27`).
- [ ] `7.005` Currency symbols (`R`, `$`, `€`, `£`) automatically stripped before evaluation.
- [ ] `7.006` Unit suffixes (`%`, `million`, `m`, `billion`, `b`) handled gracefully.
- [ ] `7.007` Space delimiters in thousands (`1 195 000`) stripped before parsing.
- [ ] `7.008` Boundary tests verified at exact limits: `expectedNumber - tolerance` awarded full marks.
- [ ] `7.009` Boundary tests verified at exact limits: `expectedNumber + tolerance` awarded full marks.
- [ ] `7.010` Out-of-bounds inputs (`expectedNumber + tolerance + 0.01`) awarded 0 marks.
- [ ] `7.011` Non-numeric inputs (`"abc"`, `""`, `NaN`) handled without crashing the scoring engine.
- [ ] `7.012` Negative values correctly supported (e.g., negative trade balance, budget deficit).
- [ ] `7.013` Calculation input field includes clear unit indicator placeholder (e.g., `Enter value in R millions`).
- [ ] `7.014` Detailed numerical solution steps shown in feedback card including formula substitution.

---

## Domain 8: Interactive Vector Canvas & Pedagogical Graph Grader

- [ ] `8.001` Vector canvas rendered using standard `<canvas>` element with 2D context.
- [ ] `8.002` Canvas resolution doubled for Retina/High-DPI screens (`canvas.width = rect.width * 2`).
- [ ] `8.003` Continuous coordinate transformation maps screen coordinates to Cartesian model.
- [ ] `8.004` Coordinate axes ($P / Y$, $i / M$, $r / Q$) rendered with crisp labels and arrowheads.
- [ ] `8.005` User drag interaction tracks starting point $(x_1, y_1)$ and endpoint $(x_2, y_2)$.
- [ ] `8.006` Slope calculation correctly accounts for inverted Canvas Y-coordinates: $m = \frac{-(y_2 - y_1)}{x_2 - x_1}$.
- [ ] `8.007` Slope tolerance windows enforced:
  - Upward sloping curve: $m \in [0.60, 1.40]$
  - Downward sloping curve: $m \in [-1.40, -0.60]$
  - Horizontal curve: $|m| \le 0.15$
  - Vertical curve: $|x_2 - x_1| \le 15\text{ px}$ and $|y_2 - y_1| \ge 80\text{ px}$
- [ ] `8.008` Visual indicator arrow updates in real-time as student draws.
- [ ] `8.009` "Reset Curve" button allows students to clear and re-attempt graph drawing.
- [ ] `8.010` Pedagogical feedback diagnostics display measured slope and direction upon check.
- [ ] `8.011` Canvas touch events (`touchstart`, `touchmove`, `touchend`) call `e.preventDefault()` to prevent page scrolling while drawing on mobile.

---

## Domain 9: Bilingual Synchronicity & Linguistic Parity (EN/AF)

- [ ] `9.001` Every question stem exists in both English (`stem_en`) and Afrikaans (`stem_af`).
- [ ] `9.002` Zero untranslated English strings in `stem_af`.
- [ ] `9.003` Every MCQ option contains both English (`text_en`) and Afrikaans (`text_af`).
- [ ] `9.004` Zero untranslated English strings in `text_af`.
- [ ] `9.005` Every derivation contains both English (`derivation_en`) and Afrikaans (`derivation_af`).
- [ ] `9.006` Zero untranslated English strings in `derivation_af`.
- [ ] `9.007` 1:1 option synchronicity: Option arrays match in length (exactly 4 options each).
- [ ] `9.008` Correct answer key refers to identical pedagogical meaning in both language versions.
- [ ] `9.009` Afrikaans economics terminology aligned to NWU standards (*geldvoorraad*, *likiditeitsvoorkeur*, *kostedrukinflasie*, *meelopergedrag*, *depresiasie*, *uitbreidende fiskale beleid*).
- [ ] `9.010` UI displays bilingual stems cleanly stacked or toggled, with high-contrast formatting.

---

## Domain 10: Executive Summary, Transmission Steppers & Curve Decoders

- [ ] `10.001` SPA includes dedicated Executive Summary view (`#summaryView`) accessible via top tab.
- [ ] `10.002` Quick Syllabus Jump Bar fixed at top of summary view for instant unit navigation.
- [ ] `10.003` Publication-grade tabular definition matrices for core concepts across each unit.
- [ ] `10.004` Transmission mechanism steppers formatted as ordered visual flow cards ($1 \rightarrow 2 \rightarrow 3 \rightarrow 4$).
- [ ] `10.005` Complete Curve Decoder Matrix detailing every syllabus curve, its axes, slope, and shift factors.
- [ ] `10.006` Zero text/icon overlapping in summary cards across all viewport sizes.
- [ ] `10.007` Concept titles styled as block elements (`display: block; margin-bottom: 0.5rem;`).
- [ ] `10.008` Mathematical formulas in summary matrices properly wrapped in KaTeX delimiters.
- [ ] `10.009` Table containers use `overflow-x: auto` to prevent viewport clipping on small screens.
- [ ] `10.010` Summary view re-triggers `AxiomMath.renderElement()` upon activation.

---

## Domain 11: Interactive Glossary Modal & Keyword Underline System

- [ ] `11.001` Glossary database defined in `window.AXIOM_GLOSSARY` (`js/glossary-db.js`).
- [ ] `11.002` Glossary contains all core module definitions with bilingual explanations and textbook citations.
- [ ] `11.003` Keywords in Executive Summary tagged with `.glossary-term` and `data-term="key"`.
- [ ] `11.004` `.glossary-term` styled with subtle dotted underline and hover gold glow.
- [ ] `11.005` Clicking any `.glossary-term` opens `#glossaryModal`.
- [ ] `11.006` Modal displays English definition, Afrikaans definition, and official textbook page citation.
- [ ] `11.007` Modal renders all KaTeX formulas inside definitions upon opening.
- [ ] `11.008` Modal dismissible via close button, clicking outside backdrop, or pressing Escape key.
- [ ] `11.009` Keyboard accessibility: Enter or Space key on focused `.glossary-term` triggers modal.
- [ ] `11.010` Focus trapped appropriately and returned to trigger element upon modal closure.

---

## Domain 12: Practice Mode vs Blind Exam State Machine & Timer

- [ ] `12.001` Mode toggle button `#modeToggleBtn` switches between "Practice Mode" and "Exam Mode".
- [ ] `12.002` Practice Mode provides instant "Check Answer" button on each question.
- [ ] `12.003` Exam Mode hides instant feedback until full assessment is submitted.
- [ ] `12.004` Test size selector `#testSizeSelect` allows choices: 10, 25, 50, 100, or All questions.
- [ ] `12.005` Unit focus selector `#unitFocusSelect` allows testing specific units or All units.
- [ ] `12.006` "New Test" button `#newTestBtn` generates fresh randomized question slice with shuffled options.
- [ ] `12.007` Countdown timer `#timerPill` automatically calibrated to selected test size (e.g. 1.5 min per question).
- [ ] `12.008` Timer countdown formatted as `MM:SS`.
- [ ] `12.009` Timer changes color to amber when $< 5\text{ mins}$ remain, red pulse when $< 1\text{ min}$ remains.
- [ ] `12.010` Automatic exam submission triggered if timer reaches `00:00`.
- [ ] `12.011` Flag button `#flagBtn` allows students to bookmark questions for review (`🏳️ Flag` / `🚩 Flagged`).
- [ ] `12.012` Palette buttons reflect states: unanswered, answered, flagged, and currently active.
- [ ] `12.013` Final submission modal presents total score, percentage, mark tally, and question-by-question breakdown.

---

## Domain 13: Instant Feedback Engine & 5-Second Auto-Fade Stacking

- [ ] `13.001` Feedback cards rendered inside `#feedbackContainer`.
- [ ] `13.002` New feedback cards prepended to the TOP of the container (`top-stacking`).
- [ ] `13.003` Previous feedback attempt cards automatically fade out after 5 seconds:
  ```css
  .feedback-card.faded {
    opacity: 0.4;
    transition: opacity 0.5s ease;
  }
  ```
- [ ] `13.004` The latest feedback card remains at full 100% opacity.
- [ ] `13.005` Correct submissions highlight with emerald border and clear success banner.
- [ ] `13.006` Incorrect submissions highlight with amber/red border and explain the exact misconception.
- [ ] `13.007` Feedback cards display complete mathematical derivations with all KaTeX steps rendered.
- [ ] `13.008` Distractor breakdown explains why each incorrect option is invalid.

---

## Domain 14: Global Cloud Telemetry & Anti-Duplicate Device Deduplication

- [ ] `14.001` Telemetry script implemented in `js/telemetry.js`.
- [ ] `14.002` Cloud API pointed to `https://countapi.mileshilliard.com/api/v1`.
- [ ] `14.003` Production keys scoped uniquely to module (e.g. `nwu_econ122_axiom_*_prod`).
- [ ] `14.004` Unique device registration guarded by `localStorage.getItem('..._device_logged')`.
- [ ] `14.005` Zero duplicate hits on device counter when user refreshes or re-opens the page.
- [ ] `14.006` Engagement timer ticks every 10 seconds.
- [ ] `14.007` Continuous active engagement threshold strictly enforced at $\ge 300\text{ seconds}$ (5 minutes).
- [ ] `14.008` Active user counter incremented ONLY once per device via `localStorage.getItem('..._active_logged')`.
- [ ] `14.009` Cumulative study minutes incremented every 60 seconds of session time.
- [ ] `14.010` Total completed assessments incremented upon final test submission via `AxiomTelemetry.logAssessmentCompleted()`.
- [ ] `14.011` Footer telemetry badge `#telemetry-badge` updates via read-only cloud queries (`/get/:key`).
- [ ] `14.012` Footer telemetry badge refreshes every 15 seconds.
- [ ] `14.013` Telemetry network failures fail silently without throwing unhandled exceptions or disrupting the student exam.

---

## Domain 15: Admin Telemetry Portal (`admin.html`) Metrics & Polling

- [ ] `15.001` `admin.html` exists as a segregated, independent administrative page.
- [ ] `15.002` `admin.html` loads `axiom.css` and inherits academic navy styling.
- [ ] `15.003` `admin.html` queries `AxiomTelemetry.getLiveCloudMetrics()` on load.
- [ ] `15.004` Live cloud polling set to every 3 seconds (`setInterval(updateDashboard, 3000)`).
- [ ] `15.005` Metric 1: Total Unique Devices displayed accurately.
- [ ] `15.006` Metric 2: Active Learners (> 5 Mins) displayed in emerald accent.
- [ ] `15.007` Metric 3: Average Time of Active Learners calculated as `totalMinutes / activeUsers` and formatted (`Xh Ym`).
- [ ] `15.008` Metric 4: Total Cumulative Time displayed in hours and minutes.
- [ ] `15.009` Metric 5: Total Assessments Completed displayed accurately.
- [ ] `15.010` Active Engagement Ratio calculated: `(activeUsers / totalDevices) * 100%`.
- [ ] `15.011` Dynamic engagement progress bar `#engagementBar` animates to calculated percentage.
- [ ] `15.012` Engagement gauge includes reference milestones: `0% Fleeting Clicks`, `Target: > 40% Deep Study Sessions`, `100% Fully Engaged`.
- [ ] `15.013` "Copy Class Link" button `#copyShareBtn` copies live production URL with 2-second "✅ Copied!" feedback.
- [ ] `15.014` Manual "Refresh" button `#refreshBtn` triggers immediate dashboard update.
- [ ] `15.015` Theme toggle synchronized with student app via `axiom_theme` local storage token.

---

## Domain 16: Security, Student Blinding & WhatsApp Feedback Channel

- [ ] `16.001` Zero links from `index.html` to `admin.html`.
- [ ] `16.002` Footer telemetry badge in `index.html` is plain non-clickable text (no link wrapper).
- [ ] `16.003` Zero links from `index.html` to the GitHub repository or commit logs.
- [ ] `16.004` Zero links to GitHub issue tracker (`github.com/.../issues`).
- [ ] `16.005` Student feedback button opens `#feedbackModal` (WhatsApp Contact Modal).
- [ ] `16.006` Feedback modal features Creator attribution: `Andre Lamusse • Platform Creator & Developer`.
- [ ] `16.007` Prominent screenshot instruction displayed: *"Please take a screenshot of all issues and explain the problem clearly..."*
- [ ] `16.008` WhatsApp direct link formatted with encoded greeting and module identifier:
  `https://wa.me/27660673757?text=Hi%20Andre%2C%20I%20have%20feedback%20%2F%20found%20an%20issue%20on%20Project%20Axiom%20[MODULE]%3A`
- [ ] `16.009` WhatsApp button styled in official green (`#25D366`) with WhatsApp SVG icon.
- [ ] `16.010` Options in DOM do not leak correct key before submission.

---

## Domain 17: Dual Distribution Architecture (Multi-File & Mobile HTML)

- [ ] `17.001` Multi-file suite generated in module directory (`index.html`, `css/`, `js/`).
- [ ] `17.002` Standalone single-file mobile study guide generated: `[MODULE]_Test1_StudyGuide.html`.
- [ ] `17.003` Single-file study guide inlines all CSS inside `<style>...</style>`.
- [ ] `17.004` Single-file study guide inlines all question data inside `<script>...</script>`.
- [ ] `17.005` Single-file study guide inlines core JavaScript logic.
- [ ] `17.006` Single-file guide size verified < 600 KB for rapid transmission via WhatsApp / AirDrop.
- [ ] `17.007` Single-file guide operates 100% offline from local phone filesystem (`file://` URI).
- [ ] `17.008` `module_app_cli.py build-mobile` command automates single-file bundling.

---

## Domain 18: Headless Automated 5-Tier Verification Suite (`verify_axiom.py`)

- [ ] `18.001` Automated test runner implemented in `tests/verify_axiom.py`.
- [ ] `18.002` Tests run in pure Python without external dependencies (`urllib`, `re`, `json`, `math`).
- [ ] `18.003` Strict adherence to `GEMINI.md` Rule 1: Zero-inline PowerShell scripting.
- [ ] `18.004` Tier 1 asserts: Total question count, chapter distribution, complete schema, KaTeX escaping, zero raw LaTeX.
- [ ] `18.005` Tier 2 asserts: Key distribution (20–30% per key), distractor length symmetry (StDev $\le 15\%$, ratio $\le 1.25$), zero giveaway stems, calculation tolerances.
- [ ] `18.006` Tier 3 asserts: Bilingual linguistic parity (zero English in Afrikaans fields), language-option synchronicity, difficulty matrix, scoring logic simulation.
- [ ] `18.007` Tier 4 asserts: Mobile zero-overflow CSS (100vw, overflow-x hidden), 44px tap targets, 300s telemetry threshold, simulated 25-question student exam.
- [ ] `18.008` Tier 5 asserts: Adversarial fuzzing, boundary inputs, malformed strings, extreme multipliers.
- [ ] `18.009` Test harness returns exit code `0` on 100% pass, `1` on failure.
- [ ] `18.010` Test harness exports structured execution report: `tests/axiom_test_results.json`.

---

## Domain 19: Git Version Control Hygiene & GitHub Pages Deployment

- [ ] `19.001` Default git branch set to `main` (not `master`).
- [ ] `19.002` Git commit messages use conventional commit format (`feat:`, `fix:`, `refactor:`, `docs:`).
- [ ] `19.003` All working changes staged and committed with descriptive changelog.
- [ ] `19.004` Remote points to official user repository: `https://github.com/andrelamusse/[REPO].git`.
- [ ] `19.005` Changes pushed cleanly to `origin/main`.
- [ ] `19.006` GitHub Pages configured to serve from `main` root or `/docs`.
- [ ] `19.007` Live deployment verified via HTTP request: HTTP 200 OK.
- [ ] `19.008` Zero broken links, missing CSS, or missing scripts on live deployment URL.
- [ ] `19.009` Custom domain (if configured) enforces HTTPS.
- [ ] `19.010` Zero `.zip` files committed to repository history.

---

## Domain 20: Cross-Module Porting Protocol (Zero-Recode Calibration)

- [ ] `20.001` Template files copied into target module folder (e.g. `c:/NWU/SM2/STTN122/`).
- [ ] `20.002` `index.html` title and banners updated with new module code and subject name.
- [ ] `20.003` `admin.html` title and banners updated with new module code.
- [ ] `20.004` `telemetry.js` keys updated with module namespace (e.g. `nwu_sttn122_axiom_*`).
- [ ] `20.005` `questions-db.js` populated with target module questions (adhering to MWAU volume).
- [ ] `20.006` `glossary-db.js` populated with target module terminology and prescribed textbook citations.
- [ ] `20.007` Specialized visualizer configured for module (e.g., Gaussian/Boxplot for Statistics, C# sandbox for CS, T-accounts for Accounting).
- [ ] `20.008` `tests/verify_axiom.py` adjusted for new chapter numbers and question counts.
- [ ] `20.009` Automated test runner executed: `python tests/verify_axiom.py` -> 100% pass.
- [ ] `20.010` WhatsApp contact link updated with target module code in default message string.

---

# 5. Rapid Module Porting Playbook (Step-by-Step for New Subjects)

When scaffolding an assessment application for a new academic module, execute this 5-step protocol to deploy in under 60 minutes without trial-and-error recoding:

### Step 1: Clone Framework Architecture
Copy the verified `project_axiom/` file structure into the new module directory:
```powershell
Copy-Item -Recurse c:\NWU\SM2\ECON122\project_axiom c:\NWU\SM2\[NEW_MODULE]\[NEW_MODULE]_App
```

### Step 2: Configure Telemetry Namespace
In `js/telemetry.js`, update the `KEYS` object:
```javascript
const KEYS = {
  DEVICES: 'nwu_[newmodule]_axiom_devices_prod',
  ACTIVE: 'nwu_[newmodule]_axiom_active_prod',
  COMPLETED: 'nwu_[newmodule]_axiom_completed_prod',
  MINUTES: 'nwu_[newmodule]_axiom_minutes_prod'
};
```

### Step 3: Populate Question & Glossary Banks
Write a dedicated Python synthesis script to generate `js/questions-db.js` and `js/glossary-db.js` directly from course materials:
- Ensure 20%–30% key distribution.
- Enforce character length symmetry ($\le 15\%$ standard deviation).
- Zero giveaway prefixes.
- Double-escaped KaTeX delimiters (`\\(` and `\\[`).

### Step 4: Run Automated Verification Suite
Run the 5-tier test suite to confirm zero regressions:
```powershell
python [NEW_MODULE]_App/tests/verify_axiom.py
```
Iterate until all assertions report **PASS** (Exit code 0).

### Step 5: Deploy to GitHub Pages
```powershell
git add .
git commit -m "feat([newmodule]): Initial production release of Active Assessment Platform"
git push origin main
```
Verify live URL: `https://andrelamusse.github.io/[NEW_MODULE]-ProjectAxiom/`.

---
*End of Universal ModuleApp Master Engineering Specification and Compliance Checklist.*
