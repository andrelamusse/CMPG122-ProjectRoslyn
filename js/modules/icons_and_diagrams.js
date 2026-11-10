/**
 * NWU CMPG122 — Coherent Vector SVG Icon System & Educational Diagram Library
 * Zero-emoji, SVG-first architecture using crisp 24x24 stroke-consistent icons
 * and theme-aware educational vector diagrams for SU7 and SU1–SU6.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_ICONS = api;
    if (root.window) root.window.CMPG122_ICONS = api;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Coherent 24x24 Lucide-style stroke icons (stroke-width 1.85, round caps/joins)
  const ICON_PATHS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9 21v-6h6v6"/>',
    study: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/>',
    practice: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    exams: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m9 10 2 2 4-4"/><path d="M9 16h6"/>',
    codelab: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/>',
    definitions: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    progress: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M3 20h18"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.02 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="8.01" y2="11"/><line x1="12" y1="11" x2="12.01" y2="11"/><line x1="16" y1="11" x2="16.01" y2="11"/><line x1="8" y1="15" x2="8.01" y2="15"/><line x1="12" y1="15" x2="12.01" y2="15"/><line x1="16" y1="15" x2="16" y2="18"/>',
    'git-branch': '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    repeat: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    play: '<polygon points="6 4 20 12 6 20 6 4"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'x-circle': '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'arrow-left': '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
    'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
    keyboard: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    'rotate-ccw': '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
    sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    'graduation-cap': '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'
  };

  function icon(name, opts = {}) {
    const size = opts.size || 18;
    const cls = opts.className ? ` class="ui-icon ${opts.className}"` : ' class="ui-icon"';
    const label = opts.ariaLabel ? ` role="img" aria-label="${opts.ariaLabel}"` : ' aria-hidden="true"';
    const body = ICON_PATHS[name] || ICON_PATHS.info;
    return `<svg${cls} width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"${label}>${body}</svg>`;
  }

  function renderCSharpShield(size = 76) {
    return `<svg class="csharp-shield-svg" width="${size}" height="${size}" viewBox="0 0 96 96" role="img" aria-label="Visual C# Hexagon Emblem">
      <defs>
        <linearGradient id="csHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="55%" stop-color="#6d4aff"/>
          <stop offset="100%" stop-color="#4338ca"/>
        </linearGradient>
      </defs>
      <polygon points="48,5 86,26.5 86,69.5 48,91 10,69.5 10,26.5" fill="url(#csHexGrad)" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
      <polygon points="48,5 86,26.5 48,48 10,26.5" fill="rgba(255,255,255,0.1)"/>
      <text x="41" y="61" text-anchor="middle" fill="#ffffff" font-family="system-ui,-apple-system,sans-serif" font-weight="800" font-size="38">C</text>
      <text x="69" y="51" text-anchor="middle" fill="#e0e7ff" font-family="monospace" font-weight="800" font-size="22">#</text>
    </svg>`;
  }

  function renderNwuMark() {
    return `<svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="rgba(124,58,237,0.18)" stroke="var(--accent-primary)" stroke-width="1.6"/>
      <path d="M9 21V11l6 7.5V11M17 11v6.5a3.5 3.5 0 0 0 7 0V11" stroke="var(--accent-primary)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function renderProgressRing(pct, accentColor, size = 62) {
    const clamped = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
    const stroke = 5.5;
    const r = (size - stroke * 2) / 2;
    const c = 2 * Math.PI * r;
    const offset = c - (clamped / 100) * c;
    const color = accentColor || 'var(--accent-primary)';
    const checkBadge = clamped >= 100
      ? `<span class="su-ring-complete" title="Completed">${icon('check', { size: 11 })}</span>`
      : '';
    return `<div class="su-ring-wrap" style="width:${size}px;height:${size}px;">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--ring-track)" stroke-width="${stroke}"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${clamped > 0 ? color : 'transparent'}"
          stroke-width="${stroke}" stroke-linecap="round"
          stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
          transform="rotate(-90 ${size / 2} ${size / 2})"/>
      </svg>
      <span class="su-ring-label">${clamped}%</span>
      ${checkBadge}
    </div>`;
  }

  function renderExamTrendSvg(examResults) {
    if (!Array.isArray(examResults) || examResults.length === 0) {
      return '';
    }
    const items = examResults.slice(-8);
    const w = 520;
    const h = 180;
    const padL = 42;
    const padR = 20;
    const padT = 18;
    const padB = 34;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const pts = items.map((r, i) => {
      const x = items.length === 1 ? padL + plotW / 2 : padL + (i / (items.length - 1)) * plotW;
      const pct = Math.max(0, Math.min(100, Number(r.percentage) || 0));
      const y = padT + plotH - (pct / 100) * plotH;
      return { x, y, pct, label: `#${i + 1}` };
    });
    const poly = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

    return `<svg class="edu-svg-diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="Examination Score Trend Chart">
      <title>Examination Percentage Trend Over Recent Attempts</title>
      <line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="var(--border-strong)" stroke-width="1"/>
      <line x1="${padL}" y1="${padT + plotH * 0.5}" x2="${w - padR}" y2="${padT + plotH * 0.5}" stroke="var(--border-subtle)" stroke-dasharray="4 4"/>
      <line x1="${padL}" y1="${padT}" x2="${w - padR}" y2="${padT}" stroke="var(--border-subtle)" stroke-dasharray="4 4"/>
      <text x="8" y="${padT + 4}" fill="var(--text-muted)" font-size="11">100%</text>
      <text x="14" y="${padT + plotH * 0.5 + 4}" fill="var(--text-muted)" font-size="11">50%</text>
      <text x="20" y="${padT + plotH + 4}" fill="var(--text-muted)" font-size="11">0%</text>
      ${pts.length > 1 ? `<polyline fill="none" stroke="var(--accent-primary)" stroke-width="2.5" points="${poly}"/>` : ''}
      ${pts.map(p => `
        <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5" fill="var(--accent-primary)" stroke="var(--surface-1)" stroke-width="2"/>
        <text x="${p.x.toFixed(1)}" y="${Math.max(12, p.y - 9).toFixed(1)}" text-anchor="middle" fill="var(--text-primary)" font-size="11" font-weight="700">${p.pct}%</text>
        <text x="${p.x.toFixed(1)}" y="${h - 10}" text-anchor="middle" fill="var(--text-muted)" font-size="11">${p.label}</text>
      `).join('')}
    </svg>`;
  }

  // 7 Educational Vector SVG Diagrams (one per Study Unit, 100% theme-token-aware for Dark & Light WCAG AA contrast)
  const EDUCATIONAL_DIAGRAMS = {
    svg_su7_hci: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 210" role="img" aria-labelledby="svg_su7_t svg_su7_d">
      <title id="svg_su7_t">Norman's Action Cycle: Gulf of Execution and Gulf of Evaluation</title>
      <desc id="svg_su7_d">Shows user goal flowing across the Gulf of Execution via Windows Forms input controls to system state, and returning via output Labels across the Gulf of Evaluation.</desc>
      <rect x="16" y="58" width="160" height="92" rx="12" fill="var(--surface-2)" stroke="var(--status-info-text)" stroke-width="2"/>
      <text x="96" y="96" text-anchor="middle" fill="var(--text-primary)" font-weight="700" font-size="14">USER GOAL</text>
      <text x="96" y="118" text-anchor="middle" fill="var(--text-muted)" font-size="12">Intention &amp; Evaluation</text>

      <rect x="504" y="58" width="160" height="92" rx="12" fill="var(--surface-2)" stroke="var(--accent-primary)" stroke-width="2"/>
      <text x="584" y="96" text-anchor="middle" fill="var(--text-primary)" font-weight="700" font-size="14">WINDOWS FORM</text>
      <text x="584" y="118" text-anchor="middle" fill="var(--text-muted)" font-size="12">Controls &amp; C# State</text>

      <path d="M184 74 C 280 22, 400 22, 494 74" fill="none" stroke="var(--status-info-text)" stroke-width="2.5"/>
      <polygon points="496,75 485,68 488,79" fill="var(--status-info-text)"/>
      <rect x="235" y="14" width="210" height="34" rx="8" fill="var(--surface-3)" stroke="var(--border-subtle)"/>
      <text x="340" y="35" text-anchor="middle" fill="var(--status-info-text)" font-weight="700" font-size="12">Gulf of Execution (btn, rad, TabIndex)</text>

      <path d="M496 136 C 400 188, 280 188, 186 136" fill="none" stroke="var(--status-success-text)" stroke-width="2.5"/>
      <polygon points="184,135 195,142 192,131" fill="var(--status-success-text)"/>
      <rect x="230" y="162" width="220" height="34" rx="8" fill="var(--surface-3)" stroke="var(--border-subtle)"/>
      <text x="340" y="183" text-anchor="middle" fill="var(--status-success-text)" font-weight="700" font-size="12">Gulf of Evaluation (lblStatus, MessageBox)</text>
    </svg>`,

    svg_su1_ide: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 215" role="img" aria-labelledby="svg_su1_t">
      <title id="svg_su1_t">Visual Studio Windows Form Anatomy &amp; Event Dispatch</title>
      <rect x="18" y="18" width="290" height="178" rx="10" fill="var(--surface-2)" stroke="var(--accent-primary)" stroke-width="2"/>
      <rect x="18" y="18" width="290" height="28" rx="8" fill="var(--accent-primary-strong)"/>
      <text x="30" y="37" fill="var(--text-on-accent)" font-size="12" font-weight="700">Form1 (Text = "Quote Calculator")</text>
      <rect x="34" y="60" width="110" height="24" rx="4" fill="var(--surface-3)" stroke="var(--border-strong)"/>
      <text x="42" y="76" fill="var(--text-secondary)" font-family="monospace" font-size="11">txtAmount</text>
      <rect x="158" y="60" width="132" height="24" rx="4" fill="var(--surface-3)" stroke="var(--status-info-text)"/>
      <text x="166" y="76" fill="var(--status-info-text)" font-family="monospace" font-size="11">lblTotal</text>
      <rect x="34" y="102" width="126" height="32" rx="6" fill="var(--accent-primary-strong)"/>
      <text x="97" y="122" text-anchor="middle" fill="var(--text-on-accent)" font-family="monospace" font-size="11" font-weight="700">btnCalc (&amp;Calc)</text>
      <rect x="174" y="98" width="116" height="78" rx="6" fill="var(--surface-3)" stroke="var(--border-subtle)" stroke-dasharray="4 3"/>
      <text x="232" y="135" text-anchor="middle" fill="var(--text-muted)" font-family="monospace" font-size="11">picLogo</text>
      <text x="232" y="152" text-anchor="middle" fill="var(--text-muted)" font-size="10">SizeMode: Zoom</text>

      <line x1="316" y1="118" x2="378" y2="118" stroke="var(--status-warning-text)" stroke-width="2.5"/>
      <polygon points="382,118 372,112 372,124" fill="var(--status-warning-text)"/>
      <text x="348" y="108" text-anchor="middle" fill="var(--status-warning-text)" font-size="11" font-weight="700">Click</text>

      <rect x="386" y="34" width="276" height="146" rx="10" fill="var(--surface-2)" stroke="var(--status-warning-text)" stroke-width="1.8"/>
      <text x="402" y="60" fill="var(--accent-tertiary)" font-family="monospace" font-size="11.5">private void btnCalc_Click(...)</text>
      <text x="402" y="80" fill="var(--text-primary)" font-family="monospace" font-size="11.5">{</text>
      <text x="416" y="102" fill="var(--status-success-text)" font-family="monospace" font-size="11.5">lblTotal.Text = "R 250.00";</text>
      <text x="416" y="124" fill="var(--status-info-text)" font-family="monospace" font-size="11.5">picLogo.Visible = true;</text>
      <text x="402" y="146" fill="var(--text-primary)" font-family="monospace" font-size="11.5">}</text>
    </svg>`,

    svg_su2_types: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 200" role="img" aria-labelledby="svg_su2_t">
      <title id="svg_su2_t">C# Integer Division Truncation vs Explicit Cast &amp; Decimal Currency</title>
      <rect x="18" y="22" width="308" height="156" rx="10" fill="var(--surface-2)" stroke="var(--status-error-text)" stroke-width="1.8"/>
      <text x="34" y="48" fill="var(--status-error-text)" font-weight="700" font-size="13">Integer Division Trap (int / int)</text>
      <text x="34" y="78" fill="var(--text-primary)" font-family="monospace" font-size="12">double d = 15 / 2;</text>
      <text x="34" y="104" fill="var(--text-muted)" font-size="12">1. 15 / 2 runs as int / int = 7</text>
      <text x="34" y="126" fill="var(--text-muted)" font-size="12">2. Fraction .5 is truncated FIRST</text>
      <text x="34" y="152" fill="var(--status-error-text)" font-family="monospace" font-weight="700" font-size="12">Result: d == 7.0 (NOT 7.5!)</text>

      <rect x="354" y="22" width="308" height="156" rx="10" fill="var(--surface-2)" stroke="var(--status-success-text)" stroke-width="1.8"/>
      <text x="370" y="48" fill="var(--status-success-text)" font-weight="700" font-size="13">Explicit Cast &amp; Decimal Money</text>
      <text x="370" y="78" fill="var(--text-primary)" font-family="monospace" font-size="12">double d = (double)15 / 2; // 7.5</text>
      <text x="370" y="106" fill="var(--text-primary)" font-family="monospace" font-size="12">decimal price = 149.95m;</text>
      <text x="370" y="132" fill="var(--text-muted)" font-size="12">Exact base-10 money with m suffix</text>
      <text x="370" y="156" fill="var(--status-success-text)" font-family="monospace" font-weight="700" font-size="12">price.ToString("C") -&gt; R 149.95</text>
    </svg>`,

    svg_su3_decisions: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 205" role="img" aria-labelledby="svg_su3_t">
      <title id="svg_su3_t">Defensive TryParse Validation Pipeline</title>
      <rect x="18" y="76" width="132" height="52" rx="8" fill="var(--surface-2)" stroke="var(--border-strong)"/>
      <text x="84" y="99" text-anchor="middle" fill="var(--text-primary)" font-family="monospace" font-size="12">txtQty.Text</text>
      <text x="84" y="116" text-anchor="middle" fill="var(--text-muted)" font-size="11">(string input)</text>

      <line x1="150" y1="102" x2="196" y2="102" stroke="var(--text-muted)" stroke-width="2"/>
      <polygon points="200,102 191,97 191,107" fill="var(--text-muted)"/>

      <polygon points="315,38 430,102 315,166 200,102" fill="var(--surface-2)" stroke="var(--status-warning-text)" stroke-width="2"/>
      <text x="315" y="98" text-anchor="middle" fill="var(--text-primary)" font-family="monospace" font-size="11.5">int.TryParse(..., out n)</text>
      <text x="315" y="115" text-anchor="middle" fill="var(--status-warning-text)" font-family="monospace" font-size="11.5">&amp;&amp; n &gt; 0</text>

      <line x1="430" y1="102" x2="492" y2="62" stroke="var(--status-success-text)" stroke-width="2.2"/>
      <text x="454" y="70" fill="var(--status-success-text)" font-size="11" font-weight="700">true</text>
      <rect x="494" y="34" width="168" height="54" rx="8" fill="var(--surface-2)" stroke="var(--status-success-text)" stroke-width="1.8"/>
      <text x="578" y="58" text-anchor="middle" fill="var(--status-success-text)" font-weight="700" font-size="12">Safe Calculation</text>
      <text x="578" y="76" text-anchor="middle" fill="var(--text-secondary)" font-family="monospace" font-size="11">total = n * rate;</text>

      <line x1="430" y1="102" x2="492" y2="144" stroke="var(--status-error-text)" stroke-width="2.2"/>
      <text x="454" y="142" fill="var(--status-error-text)" font-size="11" font-weight="700">false</text>
      <rect x="494" y="118" width="168" height="58" rx="8" fill="var(--surface-2)" stroke="var(--status-error-text)" stroke-width="1.8"/>
      <text x="578" y="141" text-anchor="middle" fill="var(--status-error-text)" font-weight="700" font-size="12">No Crash Recovery</text>
      <text x="578" y="160" text-anchor="middle" fill="var(--text-secondary)" font-family="monospace" font-size="10.5">MessageBox + Focus()</text>
    </svg>`,

    svg_su4_loops_files: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 210" role="img" aria-labelledby="svg_su4_t">
      <title id="svg_su4_t">Pretest vs Posttest Loops &amp; Sequential File I/O</title>
      <rect x="18" y="20" width="204" height="170" rx="10" fill="var(--surface-2)" stroke="var(--status-success-text)" stroke-width="1.8"/>
      <text x="120" y="45" text-anchor="middle" fill="var(--status-success-text)" font-weight="700" font-size="12.5">while / for (Pretest: 0+ runs)</text>
      <text x="32" y="74" fill="var(--text-primary)" font-family="monospace" font-size="11">1. Check condition FIRST</text>
      <text x="32" y="98" fill="var(--text-primary)" font-family="monospace" font-size="11">2. Run body if true</text>
      <text x="32" y="122" fill="var(--text-primary)" font-family="monospace" font-size="11">3. Update counter (i++)</text>
      <text x="32" y="156" fill="var(--text-muted)" font-size="11">do-while (Posttest): body</text>
      <text x="32" y="172" fill="var(--text-muted)" font-size="11">runs AT LEAST ONCE first!</text>

      <rect x="238" y="20" width="204" height="170" rx="10" fill="var(--surface-2)" stroke="var(--status-info-text)" stroke-width="1.8"/>
      <text x="340" y="45" text-anchor="middle" fill="var(--status-info-text)" font-weight="700" font-size="12.5">StreamWriter &amp; StreamReader</text>
      <text x="250" y="74" fill="var(--status-error-text)" font-family="monospace" font-size="10.8">CreateText -&gt; Overwrites!</text>
      <text x="250" y="96" fill="var(--status-success-text)" font-family="monospace" font-size="10.8">AppendText -&gt; Keeps data</text>
      <text x="250" y="124" fill="var(--text-primary)" font-family="monospace" font-size="10.8">while (!sr.EndOfStream)</text>
      <text x="250" y="144" fill="var(--text-primary)" font-family="monospace" font-size="10.8">  line = sr.ReadLine();</text>
      <text x="250" y="170" fill="var(--status-warning-text)" font-family="monospace" font-size="10.8">sr.Close(); // Mandatory!</text>

      <rect x="458" y="20" width="204" height="170" rx="10" fill="var(--surface-2)" stroke="var(--accent-tertiary)" stroke-width="1.8"/>
      <text x="560" y="45" text-anchor="middle" fill="var(--accent-tertiary)" font-weight="700" font-size="12.5">Random.Next(min, max)</text>
      <text x="472" y="78" fill="var(--text-primary)" font-family="monospace" font-size="11">rand.Next(1, 7)</text>
      <text x="472" y="104" fill="var(--status-success-text)" font-size="11.5">min = 1 (INCLUSIVE)</text>
      <text x="472" y="126" fill="var(--status-error-text)" font-size="11.5">max = 7 (EXCLUSIVE)</text>
      <text x="472" y="156" fill="var(--text-secondary)" font-family="monospace" font-size="11">Outputs: 1, 2, 3, 4, 5, 6</text>
    </svg>`,

    svg_su5_methods: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 205" role="img" aria-labelledby="svg_su5_t">
      <title id="svg_su5_t">C# Parameter Passing Modes: Value vs ref vs out</title>
      <rect x="16" y="22" width="204" height="162" rx="10" fill="var(--surface-2)" stroke="var(--status-info-text)" stroke-width="1.8"/>
      <text x="118" y="48" text-anchor="middle" fill="var(--status-info-text)" font-weight="700" font-size="13">Pass-by-Value (Default)</text>
      <text x="30" y="76" fill="var(--text-primary)" font-family="monospace" font-size="11">Calc(x)</text>
      <text x="30" y="102" fill="var(--text-muted)" font-size="11.5">• Copies value into callee</text>
      <text x="30" y="124" fill="var(--text-muted)" font-size="11.5">• Caller variable UNCHANGED</text>
      <text x="30" y="146" fill="var(--text-muted)" font-size="11.5">• Accepts literals &amp; exprs</text>

      <rect x="238" y="22" width="204" height="162" rx="10" fill="var(--surface-2)" stroke="var(--accent-tertiary)" stroke-width="1.8"/>
      <text x="340" y="48" text-anchor="middle" fill="var(--accent-tertiary)" font-weight="700" font-size="13">Pass-by-Reference (ref)</text>
      <text x="252" y="76" fill="var(--text-primary)" font-family="monospace" font-size="11">Update(ref x)</text>
      <text x="252" y="102" fill="var(--status-warning-text)" font-size="11.5">• MUST init BEFORE call</text>
      <text x="252" y="124" fill="var(--text-muted)" font-size="11.5">• Two-way memory alias</text>
      <text x="252" y="146" fill="var(--text-muted)" font-size="11.5">• Callee MAY modify x</text>

      <rect x="460" y="22" width="204" height="162" rx="10" fill="var(--surface-2)" stroke="var(--status-success-text)" stroke-width="1.8"/>
      <text x="562" y="48" text-anchor="middle" fill="var(--status-success-text)" font-weight="700" font-size="13">Output Reference (out)</text>
      <text x="474" y="76" fill="var(--text-primary)" font-family="monospace" font-size="11">TryRead(s, out x)</text>
      <text x="474" y="102" fill="var(--text-muted)" font-size="11.5">• Init NOT needed before call</text>
      <text x="474" y="124" fill="var(--status-success-text)" font-size="11.5">• Callee MUST assign x</text>
      <text x="474" y="146" fill="var(--text-muted)" font-size="11.5">• Keyword at header &amp; call</text>
    </svg>`,

    svg_su6_multiform: () => `<svg class="edu-svg-diagram" viewBox="0 0 680 210" role="img" aria-labelledby="svg_su6_t">
      <title id="svg_su6_t">Multiform Execution: Program.cs Startup, Modal ShowDialog vs Modeless Show</title>
      <rect x="16" y="64" width="154" height="84" rx="10" fill="var(--surface-2)" stroke="var(--status-info-text)" stroke-width="1.8"/>
      <text x="93" y="92" text-anchor="middle" fill="var(--status-info-text)" font-weight="700" font-size="12">Program.cs</text>
      <text x="93" y="114" text-anchor="middle" fill="var(--text-primary)" font-family="monospace" font-size="10.5">Application.Run(</text>
      <text x="93" y="130" text-anchor="middle" fill="var(--text-primary)" font-family="monospace" font-size="10.5">  new Form1());</text>

      <line x1="170" y1="106" x2="212" y2="106" stroke="var(--status-info-text)" stroke-width="2"/>
      <polygon points="216,106 207,101 207,111" fill="var(--status-info-text)"/>

      <rect x="218" y="42" width="176" height="128" rx="10" fill="var(--surface-2)" stroke="var(--accent-primary)" stroke-width="2"/>
      <text x="306" y="68" text-anchor="middle" fill="var(--text-primary)" font-weight="700" font-size="12.5">Form1 (Startup Form)</text>
      <text x="230" y="94" fill="var(--text-secondary)" font-family="monospace" font-size="10.5">var f2 = new Form2();</text>
      <text x="230" y="114" fill="var(--status-success-text)" font-family="monospace" font-size="10.5">f2.lblOut.Text = val;</text>
      <text x="230" y="134" fill="var(--status-warning-text)" font-family="monospace" font-size="10.5">f2.ShowDialog();</text>
      <text x="230" y="154" fill="var(--text-muted)" font-size="10">Closing Form1 exits app!</text>

      <line x1="394" y1="80" x2="454" y2="58" stroke="var(--status-warning-text)" stroke-width="2"/>
      <rect x="456" y="20" width="208" height="76" rx="9" fill="var(--surface-2)" stroke="var(--status-warning-text)" stroke-width="1.8"/>
      <text x="560" y="44" text-anchor="middle" fill="var(--status-warning-text)" font-weight="700" font-size="12">Modal: f2.ShowDialog()</text>
      <text x="560" y="64" text-anchor="middle" fill="var(--text-muted)" font-size="11">Blocks other app forms &amp; pauses</text>
      <text x="560" y="80" text-anchor="middle" fill="var(--text-muted)" font-size="11">next C# line until f2 closes</text>

      <line x1="394" y1="132" x2="454" y2="152" stroke="var(--status-info-text)" stroke-width="2"/>
      <rect x="456" y="114" width="208" height="76" rx="9" fill="var(--surface-2)" stroke="var(--status-info-text)" stroke-width="1.8"/>
      <text x="560" y="138" text-anchor="middle" fill="var(--status-info-text)" font-weight="700" font-size="12">Modeless: f2.Show()</text>
      <text x="560" y="158" text-anchor="middle" fill="var(--text-muted)" font-size="11">Free focus switching &amp; next C#</text>
      <text x="560" y="174" text-anchor="middle" fill="var(--text-muted)" font-size="11">line executes IMMEDIATELY</text>
    </svg>`
  };

  function renderDiagram(diagramId) {
    const fn = EDUCATIONAL_DIAGRAMS[diagramId];
    return fn ? fn() : '';
  }

  return {
    ICON_PATHS,
    icon,
    renderCSharpShield,
    renderNwuMark,
    renderProgressRing,
    renderExamTrendSvg,
    renderDiagram
  };
});
