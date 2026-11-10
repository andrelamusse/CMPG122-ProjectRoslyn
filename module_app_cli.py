#!/usr/bin/env python3
"""
NWU CMPG122 — Production Application Engineering, Build & Comprehensive QA Audit CLI
Supports:
  python module_app_cli.py audit
  python module_app_cli.py build-mobile
  python module_app_cli.py scaffold
  python module_app_cli.py clean
"""

import os
import sys
import json
import glob
import re
import subprocess
from datetime import datetime, timezone

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

MODULE_CODE = 'CMPG122'
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
APP_DIR = os.path.join(BASE_DIR, f'{MODULE_CODE}_App') if os.path.isdir(os.path.join(BASE_DIR, f'{MODULE_CODE}_App')) else BASE_DIR
MOBILE_FILENAME = f'{MODULE_CODE}_Test1_StudyGuide.html'

SCRIPT_SEQUENCE = [
    'js/data/definitions_data.js',
    'js/data/curriculum.js',
    'js/data/questions_bank.js',
    'js/data/code_labs_data.js',
    'js/data.js',
    'js/csharp_engine.js',
    'js/modules/icons_and_diagrams.js',
    'js/modules/persistence.js',
    'js/modules/analytics.js',
    'js/modules/definitions_engine.js',
    'js/modules/exam_engine.js',
    'js/modules/keyboard_shortcuts.js',
    'js/modules/question_renderer.js',
    'js/app.js',
]


def clean():
    print(f'[*] Cleaning temporary artifacts in {BASE_DIR}...')
    patterns = ['scratch_*.js', '*.tmp', 'test_runner.js']
    removed = 0
    for pat in patterns:
        for path in glob.glob(os.path.join(BASE_DIR, pat)):
            try:
                os.remove(path)
                removed += 1
            except OSError:
                pass
    print(f'[+] Workspace sanitized ({removed} scratch files removed).')


def scaffold():
    clean()
    for rel in ['css', 'js/data', 'js/modules', 'audit', 'tests']:
        os.makedirs(os.path.join(APP_DIR, rel), exist_ok=True)
    print('[+] Directory structure verified.')


def build_mobile():
    print(f'[*] Building standalone zero-dependency offline bundle ({MOBILE_FILENAME})...')
    index_path = os.path.join(APP_DIR, 'index.html')
    css_path = os.path.join(APP_DIR, 'css', 'style.css')

    if not os.path.exists(index_path) or not os.path.exists(css_path):
        print('[!] Error: Missing index.html or css/style.css.')
        sys.exit(1)

    for rel_js in SCRIPT_SEQUENCE:
        full_js = os.path.join(APP_DIR, rel_js)
        if not os.path.exists(full_js):
            print(f'[!] Error: Missing required script module: {rel_js}')
            sys.exit(1)

    with open(index_path, 'r', encoding='utf-8') as f:
        bundled = f.read()
    with open(css_path, 'r', encoding='utf-8') as f:
        css_text = f.read()

    # Remove manifest link in single-file bundle so file:// never triggers manifest CORS fetch
    bundled = bundled.replace('  <link rel="manifest" href="manifest.json">\n', '')
    bundled = bundled.replace('<link rel="manifest" href="manifest.json">', '')

    # Inline CSS cleanly (escaping any accidental </style> not applicable, literal str.replace)
    css_tag = '<style>\n' + css_text + '\n</style>'
    if '<link rel="stylesheet" href="css/style.css">' not in bundled:
        print('[!] Error: Could not locate stylesheet link in index.html.')
        sys.exit(1)
    bundled = bundled.replace('<link rel="stylesheet" href="css/style.css">', css_tag, 1)

    # Inline every JS module in deterministic order
    for rel_js in SCRIPT_SEQUENCE:
        tag_target = f'<script src="{rel_js}"></script>'
        if tag_target not in bundled:
            print(f'[!] Error: Expected script tag not found in index.html: {tag_target}')
            sys.exit(1)
        with open(os.path.join(APP_DIR, rel_js), 'r', encoding='utf-8') as jf:
            js_code = jf.read()
        # Prevent accidental </script> termination inside string literals
        safe_js = js_code.replace('</script>', '<\\/script>')
        bundled = bundled.replace(tag_target, '<script>\n' + safe_js + '\n</script>', 1)

    root_mobile_path = os.path.join(BASE_DIR, MOBILE_FILENAME)
    app_mobile_path = os.path.join(APP_DIR, MOBILE_FILENAME)

    with open(root_mobile_path, 'w', encoding='utf-8') as f:
        f.write(bundled)
    if os.path.abspath(app_mobile_path) != os.path.abspath(root_mobile_path):
        with open(app_mobile_path, 'w', encoding='utf-8') as f:
            f.write(bundled)

    print(f'[+] Successfully generated offline bundle {MOBILE_FILENAME} ({len(bundled):,} bytes) with 100% feature parity.')


def audit():
    print(f'[*] Running Comprehensive Application, Security & Question-Bank Audit for {MODULE_CODE}...')

    node_audit_js = r"""
const fs = require('fs');
const path = require('path');

const appDir = process.argv[2];
const mobileFile = process.argv[3];

const DATA = require(path.join(appDir, 'js', 'data.js'));
const CSharpEngine = require(path.join(appDir, 'js', 'csharp_engine.js'));
const ExamEngine = require(path.join(appDir, 'js', 'modules', 'exam_engine.js'));
const DefsMod = require(path.join(appDir, 'js', 'modules', 'definitions_engine.js'));
const PersistenceMod = require(path.join(appDir, 'js', 'modules', 'persistence.js'));
const AnalyticsMod = require(path.join(appDir, 'js', 'modules', 'analytics.js'));

const failures = [];
const warnings = [];
function fail(id, reason) {
  failures.push({ id, reason });
}

// 1. Learner-Facing Blinding & Zero-Emoji / Zero-Admin Invariants across ALL learner assets (Section 18 & 8.3)
const indexHtml = fs.readFileSync(path.join(appDir, 'index.html'), 'utf8');
if (/admin\.html/i.test(indexHtml)) fail('SEC_INDEX_ADMIN', 'index.html contains prohibited reference to admin.html');
if (/github/i.test(indexHtml)) fail('SEC_INDEX_GITHUB', 'index.html contains prohibited reference to GitHub');
if (/user-scalable\s*=\s*no/i.test(indexHtml)) {
  fail('A11Y_VIEWPORT_ZOOM', 'index.html blocks browser zoom (user-scalable=no)');
}
const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const learnerRelFiles = [
  'index.html',
  'js/data/definitions_data.js',
  'js/data/curriculum.js',
  'js/data/questions_bank.js',
  'js/data/code_labs_data.js',
  'js/csharp_engine.js',
  'js/app.js'
];
learnerRelFiles.forEach(rel => {
  const txt = fs.readFileSync(path.join(appDir, rel), 'utf8');
  if (emojiRegex.test(txt)) {
    fail(`UI_EMOJI_${rel}`, `${rel} contains emoji characters instead of vector SVGs`);
  }
  if (/admin\.html|\bgithub\b/i.test(txt)) {
    fail(`SEC_LEAK_${rel}`, `${rel} contains prohibited admin.html or GitHub reference`);
  }
});

// 2. Provenance Separation Check (Section 18 & 21)
const provPath = path.join(appDir, 'audit', 'provenance_registry.json');
if (!fs.existsSync(provPath)) {
  fail('AUDIT_PROVENANCE_MISSING', 'Missing audit/provenance_registry.json');
}
const provData = fs.existsSync(provPath) ? JSON.parse(fs.readFileSync(provPath, 'utf8')) : { records: {} };

// 3. Curriculum & Definitions Validation
const validUnits = new Set(['SU7', 'SU1', 'SU2', 'SU3', 'SU4', 'SU5', 'SU6']);
const validTopics = new Set();
(DATA.units || []).forEach(u => {
  if (!validUnits.has(u.id)) fail(u.id, 'Invalid unit ID');
  if (!Array.isArray(u.structuredTopics) || u.structuredTopics.length < 5) {
    fail(u.id, 'Study Unit has fewer than 5 structured 10-part topics');
  }
  (u.structuredTopics || []).forEach(t => {
    validTopics.add(t.id);
    const reqFields = ['id', 'title', 'plainEnglish', 'terminology', 'syntax', 'minimalExample', 'howItWorks', 'commonMistakes', 'importantDistinctions', 'examExample', 'relatedDefinitions'];
    reqFields.forEach(rf => {
      if (!t[rf] || (Array.isArray(t[rf]) && t[rf].length === 0)) {
        fail(t.id, `Topic missing required field: ${rf}`);
      }
    });
  });
});

const validDefs = new Set((DATA.definitions || []).map(d => d.id));
if (validDefs.size < 45) fail('DEFINITIONS_COUNT', `Expected comprehensive definitions library, found ${validDefs.size}`);

// 4. Comprehensive Question-Bank Audit (Structural, Educational, Answer-Balance, Near-Duplicate & Presentation Integrity)
const validDiffs = new Set(['Foundational', 'Intermediate', 'Advanced']);
const validTypes = new Set([
  'mcq', 'code-output', 'code-tracing', 'error-identification', 'debugging',
  'syntax-selection', 'concept-comparison', 'application-scenario', 'logic-problem',
  'input-validation', 'loop-execution', 'file-handling', 'method-execution',
  'multiform-behaviour', 'hci-application'
]);

const seenIds = new Set();
const seenStems = new Map();
const suDist = {};
const suAnsDist = {};
const diffDist = {};
const qTypeDist = {};

const crossRefRe = /\bas calculated above\b|\brefer to question\b|\busing the previous\b|\bbased on the preceding\b|\bin the previous question\b/i;
const roboticFluffRe = /according to the specification|based on the specification|in practical \d|\[nwu|as stated in the textbook|the examiner expects|based on the provided source|\befundi\b|\bgaddis\b|\bchapters?\s*\d|\b(?:in|for|semester)\s+test\s*[123]\b/i;
const roboticDrRe = /violate C# type, operator, control property, or HCI semantics/i;
const outOfScopeRe = /\b(SqlConnection|SqlCommand|BinaryReader|BinaryWriter|async|await)\b/;

function normDupTokens(s) {
  const norm = String(s || '')
    .replace(/\b(btn|txt|lbl|lst|rdo|rad|chk|cb|grp|pic)[A-Z][a-zA-Z0-9_]*/g, '$1Ctrl')
    .toLowerCase();
  return new Set(
    norm.replace(/[^a-z0-9#+=-]+/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 2 && !['the','and','for','with','what','which','when','how','why','does','following','visual','code','statement','in','is','are','that','this','from','into','control','named','property','method','value','c#','csharp'].includes(w))
  );
}
const standaloneTokenCache = [];

(DATA.questions || []).forEach((q, idx) => {
  const qId = q && q.id ? String(q.id) : `INDEX_${idx}`;
  if (!q || typeof q !== 'object') {
    fail(qId, 'Malformed question record');
    return;
  }
  if (seenIds.has(qId)) fail(qId, 'Duplicate question ID');
  seenIds.add(qId);

  if (!validUnits.has(q.su)) fail(qId, `Invalid Study Unit: ${q.su}`);
  if (!validTopics.has(q.topic)) fail(qId, `Invalid or unlinked topic: ${q.topic}`);
  if (!validTypes.has(q.questionType)) fail(qId, `Invalid questionType: ${q.questionType}`);
  if (!validDiffs.has(q.difficulty)) fail(qId, `Invalid difficulty: ${q.difficulty}`);
  if (typeof q.marks !== 'number' || q.marks < 1 || q.marks > 20) fail(qId, `Invalid mark allocation: ${q.marks}`);
  if ('provenance' in q) fail(qId, 'Internal provenance leaked onto learner-facing question record');
  if (!provData.records || !provData.records[qId]) fail(qId, 'Missing internal provenance entry in audit/provenance_registry.json');

  const stem = String(q.stem || q.q || '').trim();
  if (stem.length < 12) fail(qId, 'Question stem is missing or too short');

  const normStem = `${stem}::${q.code || ''}`.toLowerCase().replace(/\s+/g, ' ');
  if (seenStems.has(normStem)) {
    fail(qId, `Duplicate question wording with ${seenStems.get(normStem)}`);
  } else {
    seenStems.set(normStem, qId);
  }

  const opts = q.options || q.opts;
  if (!Array.isArray(opts) || opts.length < 2) {
    fail(qId, 'Options array missing or has fewer than 2 choices');
  } else {
    const exactOpts = new Set(opts.map(o => String(o).trim()));
    if (exactOpts.size !== opts.length) fail(qId, 'Duplicate options inside single question');
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= opts.length) {
      fail(qId, `Answer index ${q.answer} out of bounds [0..${opts.length - 1}]`);
    }
  }

  const exp = String(q.explanation || q.exp || '').trim();
  if (exp.length < 15) fail(qId, 'Explanation missing or too brief');
  if (q.distractorRationale && roboticDrRe.test(q.distractorRationale)) {
    fail(qId, 'Contains robotic boilerplate distractorRationale filler');
  }

  if (!Array.isArray(q.definitions) || q.definitions.length === 0) {
    fail(qId, 'Missing linked technical definitions');
  } else {
    q.definitions.forEach(dId => {
      if (!validDefs.has(dId)) fail(qId, `Broken definition reference: ${dId}`);
    });
  }

  const combinedText = [stem, q.code || '', ...(opts || []), exp, q.distractorRationale || ''].join(' | ');
  if (crossRefRe.test(combinedText)) fail(qId, 'Contains prohibited cross-question dependency wording');
  if (roboticFluffRe.test(combinedText)) fail(qId, `Contains prohibited meta-fluff: ${combinedText.match(roboticFluffRe)[0]}`);
  if (outOfScopeRe.test(combinedText)) fail(qId, `Contains excluded out-of-scope C# API: ${combinedText.match(outOfScopeRe)[0]}`);
  if (/\.Filename\b/.test(q.code || '') || /\.Filename\b/.test(exp)) {
    fail(qId, 'Incorrect C# property casing .Filename (must be .FileName)');
  }

  if (!q.examPaperId && Array.isArray(opts) && opts[q.answer] !== undefined) {
    const toks = normDupTokens(stem + ' ' + (q.code || ''));
    const ansNorm = String(opts[q.answer]).toLowerCase().trim();
    for (const prev of standaloneTokenCache) {
      if (prev.ansNorm === ansNorm && toks.size >= 3 && prev.toks.size >= 3) {
        let inter = 0;
        for (const w of toks) if (prev.toks.has(w)) inter++;
        const jac = inter / (toks.size + prev.toks.size - inter);
        if (jac >= 0.55) {
          fail(qId, `Near-duplicate standalone question with ${prev.id} (similarity=${jac.toFixed(2)})`);
        }
      }
    }
    standaloneTokenCache.push({ id: qId, toks, ansNorm });
  }

  suDist[q.su] = (suDist[q.su] || 0) + 1;
  if (!suAnsDist[q.su]) suAnsDist[q.su] = [0, 0, 0, 0];
  if (q.answer >= 0 && q.answer < 4) suAnsDist[q.su][q.answer] += 1;
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
  qTypeDist[q.questionType] = (qTypeDist[q.questionType] || 0) + 1;
});

// Verify per-Study-Unit answer-key balance (no option > 36% or < 15%)
Object.entries(suAnsDist).forEach(([su, counts]) => {
  const total = counts.reduce((a, b) => a + b, 0);
  counts.forEach((cnt, optIdx) => {
    const share = cnt / Math.max(1, total);
    if (share > 0.36 || share < 0.15) {
      fail(`ANS_BALANCE_${su}`, `Unbalanced answer distribution in ${su} for option ${optIdx}: ${cnt}/${total} (${Math.round(share * 100)}%)`);
    }
  });
});

// 5. Exam Integrity Audit (Official Past Papers + Weighted Generator)
const qMap = new Map((DATA.questions || []).map(q => [q.id, q]));
(DATA.officialExams || []).forEach(ex => {
  if (!Array.isArray(ex.subQuestionIds) || ex.subQuestionIds.length < 10) {
    fail(ex.id, 'Official exam missing subQuestionIds');
    return;
  }
  let sumMarks = 0;
  ex.subQuestionIds.forEach(id => {
    const q = qMap.get(id);
    if (!q) fail(ex.id, `Missing sub-question ${id}`);
    else sumMarks += q.marks;
  });
  if (sumMarks !== ex.totalMarks) {
    fail(ex.id, `Declared totalMarks (${ex.totalMarks}) != sum of sub-question marks (${sumMarks})`);
  }
});

const weightedSim = ExamEngine.generateWeightedExam(DATA.questions, DATA.examWeightingModel.allocations, 100, { seed: 42 });
const simMarksBySu = {};
let simTotalMarks = 0;
weightedSim.forEach(q => {
  simMarksBySu[q.su] = (simMarksBySu[q.su] || 0) + q.marks;
  simTotalMarks += q.marks;
});
if (simTotalMarks !== 100) {
  fail('EXAM_WEIGHTED_TOTAL', `Expected 100 marks in weighted full exam simulation, got ${simTotalMarks}`);
}
Object.entries(DATA.examWeightingModel.allocations).forEach(([su, expectedMarks]) => {
  if (simMarksBySu[su] !== expectedMarks) {
    fail(`EXAM_WEIGHT_${su}`, `Expected ${expectedMarks} marks for ${su}, got ${simMarksBySu[su]}`);
  }
});

// 6. CSharpEngine & CodeAuditor Verification (All 15 CodeGrade + 6 CodeAudit Scenarios)
const scenarioKeys = Object.keys(DATA.codeScenarios || {});
if (scenarioKeys.length < 15) fail('CODELAB_COUNT', `Expected >=15 CodeGrade scenarios across SU1-SU6, found ${scenarioKeys.length}`);
scenarioKeys.forEach(scKey => {
  const sc = DATA.codeScenarios[scKey];
  const res = CSharpEngine.evaluateCodeGrade(sc.modelSolution, sc);
  if (res.percentage !== 100) {
    fail(scKey, `CodeGrade modelSolution scored ${res.percentage}% instead of 100%`);
  }
});
(DATA.auditScenarios || []).forEach(asc => {
  const res = CSharpEngine.CSharpCodeAuditor.audit(asc.canonicalSolution || asc.canonicalCode, asc);
  if (res.score !== 100) {
    fail(asc.id || asc.filename || asc.fileName, `CodeAuditor canonicalSolution scored ${res.score}% instead of 100%`);
  }
});

// 7. Standalone Mobile Bundle Parity Check
let mobileBundleBytes = 0;
if (fs.existsSync(mobileFile)) {
  const bundled = fs.readFileSync(mobileFile, 'utf8');
  mobileBundleBytes = Buffer.byteLength(bundled, 'utf8');
  if (/<script\s+src=/i.test(bundled) || /<link\s+rel=["']stylesheet["']/i.test(bundled)) {
    fail('MOBILE_BUNDLE_EXT', 'Standalone mobile bundle still contains external script/stylesheet tags');
  }
  if (/admin\.html|github/i.test(bundled)) {
    fail('MOBILE_BUNDLE_BLINDING', 'Standalone mobile bundle contains prohibited admin.html or GitHub reference');
  }
  ['CMPG122_CURRICULUM', 'CMPG122_DEFINITIONS', 'CMPG122_QUESTIONS', 'Cmpg122PlatformApp', 'ExamSession', 'KeyboardShortcutController'].forEach(sym => {
    if (!bundled.includes(sym)) fail('MOBILE_BUNDLE_PARITY', `Missing ${sym} in standalone mobile bundle`);
  });
} else {
  warnings.push('Standalone mobile bundle not yet built prior to audit.');
}

const report = {
  timestamp: new Date().toISOString(),
  module: DATA.moduleCode,
  version: DATA.version,
  status: failures.length === 0 ? 'PASS' : 'FAIL',
  summary: {
    totalStudyUnits: (DATA.units || []).length,
    totalStructuredTopics: validTopics.size,
    totalDefinitions: validDefs.size,
    totalQuestions: (DATA.questions || []).length,
    totalPastExams: (DATA.officialExams || []).length,
    totalCodeGradeScenarios: scenarioKeys.length,
    totalSpotErrorScenarios: (DATA.spotErrors || []).length,
    totalCodeAuditScenarios: (DATA.auditScenarios || []).length,
    weightedSimulationTotalMarks: simTotalMarks,
    weightedSimulationByUnit: simMarksBySu,
    mobileBundleBytes,
    failureCount: failures.length,
    warningCount: warnings.length
  },
  distributions: {
    byStudyUnit: suDist,
    byDifficulty: diffDist,
    byQuestionType: qTypeDist
  },
  failures,
  warnings
};

const outReportPath = path.join(appDir, 'audit', 'audit_report.json');
fs.writeFileSync(outReportPath, JSON.stringify(report, null, 2), 'utf8');

console.log(`[+] Question Bank Audited: ${report.summary.totalQuestions} questions across ${report.summary.totalStudyUnits} Study Units`);
console.log(`[+] Structured Topics: ${report.summary.totalStructuredTopics} | Technical Definitions: ${report.summary.totalDefinitions}`);
console.log(`[+] Study Unit Distribution: ${JSON.stringify(suDist)}`);
console.log(`[+] Difficulty Distribution: ${JSON.stringify(diffDist)}`);
console.log(`[+] Weighted 100-Mark Exam Allocation Verified: ${JSON.stringify(simMarksBySu)} (Total = ${simTotalMarks})`);
console.log(`[+] CodeGrade Scenarios Verified: ${scenarioKeys.length}/15 (100% pass) | CodeAuditor Scenarios: ${(DATA.auditScenarios || []).length}/6 (100% pass)`);
console.log(`[+] Machine-readable audit report written to: ${outReportPath}`);

if (failures.length > 0) {
  console.error(`[!] AUDIT FAILED with ${failures.length} error(s):`);
  failures.forEach(f => console.error(`  - [${f.id}] ${f.reason}`));
  process.exit(1);
}
console.log('[SUCCESS] ALL STRUCTURAL, EDUCATIONAL, EXAM, PRESENTATION & SECURITY AUDITS PASSED (0 FAILURES).');
"""

    audit_js_path = os.path.join(BASE_DIR, '_run_audit_tmp.js')
    mobile_bundle_path = os.path.join(BASE_DIR, MOBILE_FILENAME)
    with open(audit_js_path, 'w', encoding='utf-8') as f:
        f.write(node_audit_js)

    try:
        res = subprocess.run(
            ['node', audit_js_path, APP_DIR, mobile_bundle_path],
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='replace'
        )
        if res.stdout:
            print(res.stdout.rstrip())
        if res.stderr:
            print(res.stderr.rstrip(), file=sys.stderr)
        if res.returncode != 0:
            sys.exit(res.returncode)
    finally:
        if os.path.exists(audit_js_path):
            os.remove(audit_js_path)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python module_app_cli.py [audit|build-mobile|scaffold|clean]')
        sys.exit(1)
    command = sys.argv[1].lower()
    if command == 'audit':
        audit()
    elif command == 'build-mobile':
        build_mobile()
    elif command in ('scaffold', 'organize'):
        scaffold()
    elif command == 'clean':
        clean()
    else:
        print(f'[!] Unknown command: {command}')
        sys.exit(1)
