/**
 * NWU CMPG122 C# Diagnostics Engine & CodeGrade Virtual Test Sandbox
 * =========================================================================
  * Comprehensive client-side C# static analyzer, syntax linter, Roslyn-style
  * error flagger, and virtual test runner for Visual C# Windows Forms.
  * 100% Standalone • Zero Server/CORS Dependencies • Offline Compatible
  */

(function(root, factory) {
  const exports = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = exports;
  }
  if (typeof root !== 'undefined') {
    root.CSharpEngine = exports;
    root.CSharpCodeAuditor = exports.CSharpCodeAuditor;
    if (root.window) {
      root.window.CSharpEngine = exports;
      root.window.CSharpCodeAuditor = exports.CSharpCodeAuditor;
    }
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  // Standard C# Keywords
  const CSHARP_KEYWORDS = new Set([
    'abstract', 'as', 'base', 'bool', 'break', 'byte', 'case', 'catch', 'char',
    'checked', 'class', 'const', 'continue', 'decimal', 'default', 'delegate',
    'do', 'double', 'else', 'enum', 'event', 'explicit', 'extern', 'false',
    'finally', 'fixed', 'float', 'for', 'foreach', 'goto', 'if', 'implicit',
    'in', 'int', 'interface', 'internal', 'is', 'lock', 'long', 'namespace',
    'new', 'null', 'object', 'operator', 'out', 'override', 'params', 'private',
    'protected', 'public', 'readonly', 'ref', 'return', 'sbyte', 'sealed',
    'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct', 'switch',
    'this', 'throw', 'true', 'try', 'typeof', 'uint', 'ulong', 'unchecked',
    'unsafe', 'ushort', 'using', 'virtual', 'void', 'volatile', 'while'
  ]);

  const CSHARP_PRIMITIVE_TYPES = new Set([
    'bool', 'byte', 'char', 'decimal', 'double', 'float', 'int', 'long',
    'sbyte', 'short', 'string', 'uint', 'ulong', 'ushort', 'object', 'void'
  ]);

  const NWU_STANDARD_PREFIXES = {
    'btn': 'Button',
    'txt': 'TextBox',
    'lbl': 'Label',
    'lst': 'ListBox',
    'rdo': 'RadioButton',
    'rad': 'RadioButton',
    'chk': 'CheckBox',
    'cb':  'CheckBox',
    'grp': 'GroupBox',
    'pic': 'PictureBox',
    'img': 'PictureBox',
    'tmr': 'Timer',
    'pnl': 'Panel',
    'ofd': 'OpenFileDialog',
    'sfd': 'SaveFileDialog'
  };

  function defineHiddenMethod(proto, name, fn) {
    Object.defineProperty(proto, name, {
      value: fn,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  // Non-enumerable PascalCase Polyfills on String/Number/Boolean prototypes for C# sandbox compatibility
  defineHiddenMethod(String.prototype, 'Trim', function() { return this.trim(); });
  defineHiddenMethod(String.prototype, 'ToUpper', function() { return this.toUpperCase(); });
  defineHiddenMethod(String.prototype, 'ToLower', function() { return this.toLowerCase(); });
  defineHiddenMethod(String.prototype, 'Contains', function(s) { return this.includes(s); });
  defineHiddenMethod(String.prototype, 'StartsWith', function(s) { return this.startsWith(s); });
  defineHiddenMethod(String.prototype, 'EndsWith', function(s) { return this.endsWith(s); });
  defineHiddenMethod(String.prototype, 'CompareTo', function(s) {
    const a = String(this);
    const b = String(s);
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  defineHiddenMethod(String.prototype, 'Substring', function(start, len) {
    if (len === undefined) return this.substring(start);
    return this.substring(start, start + len);
  });
  defineHiddenMethod(String.prototype, 'PadLeft', function(len, ch) { return this.padStart(len, ch || ' '); });
  defineHiddenMethod(String.prototype, 'PadRight', function(len, ch) { return this.padEnd(len, ch || ' '); });
  defineHiddenMethod(String.prototype, 'IndexOf', function(s, start) { return this.indexOf(s, start); });
  defineHiddenMethod(String.prototype, 'LastIndexOf', function(s, start) { return this.lastIndexOf(s, start); });
  defineHiddenMethod(String.prototype, 'Replace', function(oldVal, newVal) { return this.split(oldVal).join(newVal); });
  String.IsNullOrEmpty = function(s) { return s === null || s === undefined || s === ''; };
  String.IsNullOrWhiteSpace = function(s) { return s === null || s === undefined || String(s).trim() === ''; };
  String.Format = function(formatStr, ...args) {
    if (!formatStr) return '';
    return formatStr.replace(/\{(\d+)(?::([^}]+))?\}/g, (match, idx, fmt) => {
      const val = args[Number(idx)];
      if (val === undefined || val === null) return '';
      if (fmt) {
        const u = fmt.trim().toUpperCase();
        if (u.startsWith('C')) {
          const d = parseInt(u.slice(1), 10);
          return Number(val)._toCurrency(isNaN(d) ? 2 : d);
        }
        if (u.startsWith('F')) {
          const d = parseInt(u.slice(1), 10);
          return Number(val)._toFixed(isNaN(d) ? 2 : d);
        }
        if (u.startsWith('N')) {
          const d = parseInt(u.slice(1), 10);
          return Number(val)._toNumber(isNaN(d) ? 2 : d);
        }
        if (u.startsWith('P')) {
          const d = parseInt(u.slice(1), 10);
          return Number(val)._toPercent(isNaN(d) ? 1 : d);
        }
        if (u.startsWith('D')) {
          const d = parseInt(u.slice(1), 10);
          return String(Math.trunc(Number(val))).padStart(isNaN(d) ? 1 : d, '0');
        }
      }
      return String(val);
    });
  };

  if (!Object.getOwnPropertyDescriptor(String.prototype, 'Length')) {
    Object.defineProperty(String.prototype, 'Length', {
      get: function() { return this.length; },
      enumerable: false,
      configurable: true
    });
  }
  if (!Object.getOwnPropertyDescriptor(Array.prototype, 'Length')) {
    Object.defineProperty(Array.prototype, 'Length', {
      get: function() { return this.length; },
      enumerable: false,
      configurable: true
    });
  }
  if (!Object.getOwnPropertyDescriptor(Error.prototype, 'Message')) {
    Object.defineProperty(Error.prototype, 'Message', {
      get: function() { return this.message; },
      enumerable: false,
      configurable: true
    });
  }

  defineHiddenMethod(Number.prototype, '_toCurrency', function(digits) {
    const d = (digits === undefined || isNaN(digits)) ? 2 : Number(digits);
    return 'R ' + this.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  });
  defineHiddenMethod(Number.prototype, '_toFixed', function(digits) {
    return this.toFixed(digits === undefined || isNaN(digits) ? 2 : Number(digits));
  });
  defineHiddenMethod(Number.prototype, '_toNumber', function(digits) {
    const d = (digits === undefined || isNaN(digits)) ? 2 : Number(digits);
    return this.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  });
  defineHiddenMethod(Number.prototype, '_toPercent', function(digits) {
    const d = (digits === undefined || isNaN(digits)) ? 1 : Number(digits);
    return (this * 100).toFixed(d) + '%';
  });
  defineHiddenMethod(Number.prototype, 'ToString', function(format) {
    if (!format) return this.toString();
    const f = String(format).trim().toUpperCase();
    if (f.startsWith('C')) {
      const d = parseInt(f.slice(1), 10);
      return this._toCurrency(isNaN(d) ? 2 : d);
    }
    if (f.startsWith('F')) {
      const d = parseInt(f.slice(1), 10);
      return this._toFixed(isNaN(d) ? 2 : d);
    }
    if (f.startsWith('N')) {
      const d = parseInt(f.slice(1), 10);
      return this._toNumber(isNaN(d) ? 2 : d);
    }
    if (f.startsWith('P')) {
      const d = parseInt(f.slice(1), 10);
      return this._toPercent(isNaN(d) ? 1 : d);
    }
    if (f.startsWith('D')) {
      const d = parseInt(f.slice(1), 10);
      return String(Math.trunc(this)).padStart(isNaN(d) ? 1 : d, '0');
    }
    return this.toString();
  });
  defineHiddenMethod(Boolean.prototype, 'ToString', function() {
    return this ? 'True' : 'False';
  });
  defineHiddenMethod(String.prototype, 'ToString', function() {
    return String(this);
  });

  /**
   * 1. CSHARP TOKENIZER & LEXER
   */
  function tokenize(code) {
    const tokens = [];
    const lines = code.split(/\r?\n/);

    for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
      const line = lines[lineNum - 1];
      let col = 1;
      let i = 0;

      while (i < line.length) {
        // Skip whitespace
        if (/\s/.test(line[i])) {
          col++;
          i++;
          continue;
        }

        // Single-line comment
        if (line[i] === '/' && line[i + 1] === '/') {
          tokens.push({
            type: 'comment',
            value: line.slice(i),
            line: lineNum,
            col: col
          });
          break;
        }

        // Multi-line comment (single-line slice)
        if (line[i] === '/' && line[i + 1] === '*') {
          const endIdx = line.indexOf('*/', i + 2);
          if (endIdx !== -1) {
            tokens.push({
              type: 'comment',
              value: line.slice(i, endIdx + 2),
              line: lineNum,
              col: col
            });
            col += (endIdx + 2 - i);
            i = endIdx + 2;
            continue;
          } else {
            tokens.push({
              type: 'comment',
              value: line.slice(i),
              line: lineNum,
              col: col
            });
            break;
          }
        }

        // String literal
        if (line[i] === '"' || (line[i] === '@' && line[i + 1] === '"') || (line[i] === '$' && line[i + 1] === '"')) {
          const isVerbatim = line[i] === '@' || line[i + 1] === '@';
          const isInterp = line[i] === '$' || line[i + 1] === '$';
          const startCol = col;
          const startI = i;
          let quoteIdx = line.indexOf('"', i);
          if (quoteIdx !== -1) {
            i = quoteIdx + 1;
            col += (quoteIdx + 1 - startI);
            let closed = false;
            while (i < line.length) {
              if (line[i] === '\\' && !isVerbatim) {
                i += 2;
                col += 2;
                continue;
              }
              if (line[i] === '"') {
                i++;
                col++;
                closed = true;
                break;
              }
              i++;
              col++;
            }
            tokens.push({
              type: 'string',
              value: line.slice(startI, i),
              line: lineNum,
              col: startCol,
              isInterp: isInterp,
              isClosed: closed
            });
            continue;
          }
        }

        // Character literal
        if (line[i] === "'") {
          const startCol = col;
          const startI = i;
          let endI = line.indexOf("'", i + 1);
          if (endI !== -1 && endI <= i + 4) {
            tokens.push({
              type: 'char',
              value: line.slice(startI, endI + 1),
              line: lineNum,
              col: startCol
            });
            col += (endI + 1 - startI);
            i = endI + 1;
            continue;
          }
        }

        // Numbers (integers, floats, decimals with suffixes m, d, f)
        if (/\d/.test(line[i]) || (line[i] === '.' && /\d/.test(line[i + 1]))) {
          const startCol = col;
          const startI = i;
          while (i < line.length && /[\d\.a-fA-FxXmMdDfFLluU]/.test(line[i])) {
            i++;
            col++;
          }
          tokens.push({
            type: 'number',
            value: line.slice(startI, i),
            line: lineNum,
            col: startCol
          });
          continue;
        }

        // Identifiers or Keywords
        if (/[a-zA-Z_]/.test(line[i])) {
          const startCol = col;
          const startI = i;
          while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
            i++;
            col++;
          }
          const word = line.slice(startI, i);
          const isKeyword = CSHARP_KEYWORDS.has(word);
          tokens.push({
            type: isKeyword ? 'keyword' : 'identifier',
            value: word,
            line: lineNum,
            col: startCol
          });
          continue;
        }

        // Multi-char operators: ==, !=, <=, >=, &&, ||, ++, --, +=, -=, *=, /=, %=
        const twoChar = line.slice(i, i + 2);
        if (['==', '!=', '<=', '>=', '&&', '||', '++', '--', '+=', '-=', '*=', '/=', '%='].includes(twoChar)) {
          tokens.push({
            type: 'operator',
            value: twoChar,
            line: lineNum,
            col: col
          });
          i += 2;
          col += 2;
          continue;
        }

        // Single-char operators and punctuation
        tokens.push({
          type: 'punctuation',
          value: line[i],
          line: lineNum,
          col: col
        });
        i++;
        col++;
      }
    }

    return tokens;
  }

  /**
   * 2. ROSLYN-STYLE DIAGNOSTIC ENGINE
   * Flags compile errors (CS1002, CS1513, CS1026, CS0029, CS0103, CS1525, etc.)
   * and NWU pedagogical best practice warnings.
   */
  function findMatchingBraceInCode(text, openBraceIdx) {
    let depth = 1;
    let inStr = false;
    let strChar = '';
    let i = openBraceIdx + 1;
    while (i < text.length && depth > 0) {
      const c = text[i];
      if (inStr) {
        if (c === '\\') { i += 2; continue; }
        if (c === strChar) inStr = false;
      } else {
        if (c === '"' || c === "'") {
          inStr = true;
          strChar = c;
        } else if (c === '/' && text[i + 1] === '/') {
          const nl = text.indexOf('\n', i + 2);
          if (nl === -1) break;
          i = nl;
          continue;
        } else if (c === '/' && text[i + 1] === '*') {
          const endC = text.indexOf('*/', i + 2);
          if (endC === -1) break;
          i = endC + 2;
          continue;
        } else if (c === '{') {
          depth++;
        } else if (c === '}') {
          depth--;
          if (depth === 0) {
            return i;
          }
        }
      }
      i++;
    }
    return -1;
  }

  function extractCSharpMethods(code) {
    if (!code) return { methods: [], remainder: '' };
    const text = String(code);
    const methods = [];
    const methodSigRe = /(?:^|\n)\s*(?:(?:public|private|protected|internal)\s+)?(?:(?:static|virtual|override)\s+)?(void|int|decimal|double|float|long|bool|string|char|[A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*\{/g;
    let match;
    const ranges = [];
    while ((match = methodSigRe.exec(text)) !== null) {
      const returnType = match[1];
      const name = match[2];
      if (CSHARP_KEYWORDS.has(name) || ['if', 'while', 'for', 'foreach', 'switch', 'catch', 'using', 'lock'].includes(name)) {
        continue;
      }
      const rawParams = match[3].trim();
      const openBraceIdx = match.index + match[0].length - 1;
      const closeBraceIdx = findMatchingBraceInCode(text, openBraceIdx);
      if (closeBraceIdx === -1) continue;
      if (ranges.some(r => match.index >= r.start && match.index < r.end)) continue;

      const params = [];
      if (rawParams.length > 0) {
        rawParams.split(',').forEach(part => {
          const tokens = part.trim().split(/\s+/).filter(Boolean);
          if (tokens.length >= 2) {
            const isRef = tokens[0] === 'ref';
            const isOut = tokens[0] === 'out';
            const pType = (isRef || isOut) ? tokens[1] : tokens[0];
            const pName = tokens[tokens.length - 1].replace(/\[\]/g, '');
            params.push({ name: pName, type: pType, isRef, isOut });
          }
        });
      }

      const isEventHandler = returnType === 'void' && (
        /_(?:Click|Load|Closing|FormClosing|CheckedChanged|SelectedIndexChanged|TextChanged)$/i.test(name) ||
        (params.length === 2 && /object/i.test(params[0].type) && /EventArgs/i.test(params[1].type))
      );

      ranges.push({ start: match.index, end: closeBraceIdx + 1 });
      methods.push({
        name,
        returnType,
        params,
        isEventHandler,
        body: text.slice(openBraceIdx + 1, closeBraceIdx).trim(),
        fullMatch: text.slice(match.index, closeBraceIdx + 1)
      });
    }

    let remainder = '';
    let cursor = 0;
    ranges.forEach(r => {
      remainder += text.slice(cursor, r.start) + '\n';
      cursor = r.end;
    });
    remainder += text.slice(cursor);

    return { methods, remainder: remainder.trim() };
  }

  function detectUnsupportedConstructs(code) {
    if (!code) return [];
    const unsupported = [];
    const checks = [
      { re: /\basync\s+(?:Task|void)\b|\bawait\s+/g, construct: 'async/await', message: 'Asynchronous programming (async/await) is outside the CMPG122 assessment scope.' },
      { re: /\byield\s+(?:return|break)\b/g, construct: 'yield iterator', message: 'Iterator blocks (yield return) are outside the CMPG122 assessment scope.' },
      { re: /\bfrom\s+[a-zA-Z_][a-zA-Z0-9_]*\s+in\s+[^;]+\bselect\b|\.(?:Where|Select|OrderBy|GroupBy)\s*\(/g, construct: 'LINQ query expression', message: 'LINQ query expressions are outside the CMPG122 assessment scope; use standard loops.' },
      { re: /\b(?:SqlConnection|SqlCommand|SqlDataReader|OleDbConnection)\b/g, construct: 'ADO.NET Database Access', message: 'Database connections are not supported in the CMPG122 sandbox; use sequential text files (StreamReader/StreamWriter).' },
      { re: /\b(?:unsafe|stackalloc|fixed)\b/g, construct: 'unsafe pointer code', message: 'Unsafe pointer constructs are not supported in the assessment sandbox.' },
      { re: /\b(?:BinaryReader|BinaryWriter|FileStream)\b/g, construct: 'Binary file streams', message: 'Only sequential text streams (StreamReader, StreamWriter, File) are required in CMPG122.' }
    ];
    checks.forEach(chk => {
      let m;
      while ((m = chk.re.exec(code)) !== null) {
        unsupported.push({
          construct: chk.construct,
          line: getLineNumber(code, m.index),
          message: chk.message
        });
      }
    });
    return unsupported;
  }

  function unwrapMethodWrapper(code) {
    if (!code) return code;
    let text = code.trim();

    // Unwrap outer class wrapper if a student pasted public partial class Form1 : Form { ... }
    const classHeaderRe = /^(?:using\s+[a-zA-Z0-9_.]+\s*;\s*)*(?:namespace\s+[a-zA-Z0-9_.]+\s*\{\s*)?(?:public\s+|private\s+|internal\s+)?(?:partial\s+)?class\s+[a-zA-Z0-9_]+(?:\s*:\s*[a-zA-Z0-9_]+)?\s*\{/;
    const classMatch = classHeaderRe.exec(text);
    if (classMatch) {
      const openIdx = classMatch.index + classMatch[0].length - 1;
      const closeIdx = findMatchingBraceInCode(text, openIdx);
      if (closeIdx !== -1) {
        text = text.slice(openIdx + 1, closeIdx).trim();
      }
    }

    const extracted = extractCSharpMethods(text);
    // Only unwrap if there is a single method AND it is a standard event handler with no other methods/statements
    if (extracted.methods.length === 1 && extracted.methods[0].isEventHandler && !extracted.remainder) {
      return extracted.methods[0].body;
    }
    return text;
  }

  function hasCurrencyFormatting(code) {
    if (!code) return false;
    return /\.ToString\s*\(\s*["']C\d*["']\s*\)/i.test(code) ||
      /\$"(?:[^"\\]|\\.)*\{[^}]+:C\d*\}[^"]*"/i.test(code) ||
      /\bstring\.Format\s*\(\s*["'][^"']*\{\d+:C\d*\}[^"']*["']/i.test(code);
  }

  function analyzeDiagnostics(code, context = {}) {
    const rawInputCode = String(code || '');
    code = unwrapMethodWrapper(rawInputCode);
    const diagnostics = [];
    const lines = code.split(/\r?\n/);
    const tokens = tokenize(code);

    // 0. Check for unsupported constructs
    const unsupported = detectUnsupportedConstructs(rawInputCode);
    unsupported.forEach(u => {
      diagnostics.push({
        code: 'NWU_LIMIT01',
        severity: 'warning',
        line: u.line,
        col: 1,
        message: u.message
      });
    });

    // 1. Bracket & Parenthesis Balancing
    const stack = [];
    tokens.forEach(tok => {
      if (tok.value === '{' || tok.value === '(' || tok.value === '[') {
        stack.push(tok);
      } else if (tok.value === '}' || tok.value === ')' || tok.value === ']') {
        if (stack.length === 0) {
          diagnostics.push({
            code: tok.value === '}' ? 'CS1513' : 'CS1026',
            severity: 'error',
            line: tok.line,
            col: tok.col,
            message: `Unexpected closing '${tok.value}' without matching opening delimiter.`
          });
        } else {
          const top = stack.pop();
          const matches = (top.value === '{' && tok.value === '}') ||
                          (top.value === '(' && tok.value === ')') ||
                          (top.value === '[' && tok.value === ']');
          if (!matches) {
            diagnostics.push({
              code: 'CS1525',
              severity: 'error',
              line: tok.line,
              col: tok.col,
              message: `Mismatched bracket: opened '${top.value}' on line ${top.line} but closed with '${tok.value}'.`
            });
          }
        }
      }
    });

    stack.forEach(unclosed => {
      diagnostics.push({
        code: unclosed.value === '{' ? 'CS1513' : 'CS1026',
        severity: 'error',
        line: unclosed.line,
        col: unclosed.col,
        message: unclosed.value === '{' ? "} expected (unclosed block opened here)" : ") expected"
      });
    });

    // 2. Line-by-Line Semicolon & Statement Ending Checks (CS1002)
    function stripSingleLineCommentSafe(lineStr) {
      let inStr = false;
      let quoteCh = '';
      let isVerbatim = false;
      for (let k = 0; k < lineStr.length; k++) {
        const ch = lineStr[k];
        if (inStr) {
          if (!isVerbatim && ch === '\\') { k++; continue; }
          if (isVerbatim && ch === '"' && lineStr[k + 1] === '"') { k++; continue; }
          if (ch === quoteCh) { inStr = false; isVerbatim = false; }
        } else {
          if (ch === '/' && lineStr[k + 1] === '/') {
            return lineStr.slice(0, k);
          }
          if (ch === '@' && lineStr[k + 1] === '"') {
            inStr = true;
            quoteCh = '"';
            isVerbatim = true;
            k++;
          } else if (ch === '"' || ch === "'") {
            inStr = true;
            quoteCh = ch;
            isVerbatim = false;
          }
        }
      }
      return lineStr;
    }

    let parenDepth = 0;
    let controlParenActive = false;

    lines.forEach((rawLine, idx) => {
      const lineNum = idx + 1;
      const clean = stripSingleLineCommentSafe(rawLine).trim();

      if (!clean) return; // Skip blank lines

      // Check if this line starts a control statement
      if (parenDepth === 0 && /^(if|while|for|foreach|switch|using|catch)\b/.test(clean)) {
        controlParenActive = true;
      }

      // Count parentheses in non-string, non-char parts of clean line
      let inString = false;
      let stringChar = '';
      for (let cIdx = 0; cIdx < clean.length; cIdx++) {
        const ch = clean[cIdx];
        if (inString) {
          if (ch === '\\') { cIdx++; continue; }
          if (ch === stringChar) inString = false;
        } else {
          if (ch === '"' || ch === "'") {
            inString = true;
            stringChar = ch;
          } else if (ch === '(') {
            parenDepth++;
          } else if (ch === ')') {
            parenDepth = Math.max(0, parenDepth - 1);
          }
        }
      }

      const isParenContinuation = (parenDepth > 0);
      const justClosedControlParen = (controlParenActive && parenDepth === 0);
      if (parenDepth === 0) {
        controlParenActive = false;
      }

      // Lines that do NOT require a semicolon
      const isBlockOpen = clean.endsWith('{');
      const isBlockClose = clean.endsWith('}');
      const isCaseOrDefault = /^(case\s+.+|default)\s*:$/.test(clean);
      const isDirective = clean.startsWith('#') || (clean.startsWith('using ') && !clean.includes('('));
      const isContinuation = /[+\-*/%&|,?:\(]$/.test(clean) || isParenContinuation;
      const isBareBlockKeyword = /^(else|try|finally|do|catch)\b/.test(clean) && !clean.endsWith(';');

      if (!isBlockOpen && !isBlockClose && !isCaseOrDefault && !isDirective && !isContinuation && !justClosedControlParen && !isBareBlockKeyword) {
        if (!clean.endsWith(';')) {
          if (/^(if|while|for|foreach|switch|using|catch)\s*\(.*\)$/.test(clean)) {
            return;
          }
          if (/^else(\s+if\s*\(.*\))?$/.test(clean)) {
            return;
          }
          if (/^(?:public\s+|private\s+|protected\s+|internal\s+)?(?:partial\s+)?(?:class|interface|struct|namespace|enum)\b/.test(clean)) {
            return;
          }
          if (/^(?:public\s+|private\s+|protected\s+|internal\s+)?(?:static\s+|override\s+|virtual\s+)?(?:void|[a-zA-Z0-9_<>\[\]]+)\s+[a-zA-Z0-9_]+\s*\([^)]*\)$/.test(clean)) {
            return;
          }
          diagnostics.push({
            code: 'CS1002',
            severity: 'error',
            line: lineNum,
            col: rawLine.length,
            message: "; expected at end of statement."
          });
        }
      }
    });

    // 3. Variable Declarations & Scope Extraction
    const declaredVars = new Set();
    const typeVarRegex = /\b(int|double|decimal|string|bool|char|float|long)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
    let match;
    while ((match = typeVarRegex.exec(code)) !== null) {
      declaredVars.add(match[2]);
    }

    const outVarRegex = /\bout\s+(?:(?:int|double|decimal|string|bool|var)\s+)?([a-zA-Z_][a-zA-Z0-9_]*)/g;
    while ((match = outVarRegex.exec(code)) !== null) {
      declaredVars.add(match[1]);
    }

    const forVarRegex = /\bfor\s*\(\s*(?:int|double|decimal|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
    while ((match = forVarRegex.exec(code)) !== null) {
      declaredVars.add(match[1]);
    }

    // 4. Type Compatibility & Direct Text Assignment Checks (CS0029)
    const directTextAssignRegex = /\b(?:int|double|decimal|float|long)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([a-zA-Z_][a-zA-Z0-9_]*\.Text)\s*;/g;
    while ((match = directTextAssignRegex.exec(code)) !== null) {
      const lineNum = getLineNumber(code, match.index);
      diagnostics.push({
        code: 'CS0029',
        severity: 'error',
        line: lineNum,
        col: 1,
        message: `Cannot implicitly convert type 'string' (${match[2]}) to numeric. You must parse it (e.g. decimal.TryParse() or decimal.Parse()).`
      });
    }

    // Direct numeric assignment to Label/TextBox.Text without ToString()
    const directNumToTextRegex = /\b([a-zA-Z_][a-zA-Z0-9_]*\.Text)\s*=\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*;/g;
    while ((match = directNumToTextRegex.exec(code)) !== null) {
      const targetControl = match[1];
      const sourceId = match[2];
      if (declaredVars.has(sourceId) && !sourceId.toLowerCase().includes('text') && !sourceId.toLowerCase().includes('name')) {
        const isNumVar = new RegExp('\\b(int|double|decimal|float)\\s+' + sourceId + '\\b').test(code);
        if (isNumVar) {
          const lineNum = getLineNumber(code, match.index);
          diagnostics.push({
            code: 'CS0029',
            severity: 'error',
            line: lineNum,
            col: 1,
            message: `Cannot implicitly convert type numeric (${sourceId}) to 'string' for ${targetControl}. Did you forget '.ToString("C")' or '.ToString()'?"`
          });
        }
      }
    }

    // 5. Common Syntax Errors (CS1525)
    const malformedIfRegex = /\bif\s+([^\(].*?)(?:\{|$)/gm;
    while ((match = malformedIfRegex.exec(code)) !== null) {
      const lineNum = getLineNumber(code, match.index);
      diagnostics.push({
        code: 'CS1525',
        severity: 'error',
        line: lineNum,
        col: 1,
        message: `Invalid 'if' statement syntax. C# conditional expressions must be enclosed in parentheses: if (...)`
      });
    }

    const assignInIfRegex = /\bif\s*\(\s*[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*[^=]/g;
    while ((match = assignInIfRegex.exec(code)) !== null) {
      const lineNum = getLineNumber(code, match.index);
      diagnostics.push({
        code: 'CS1525',
        severity: 'error',
        line: lineNum,
        col: 1,
        message: `Assignment operator '=' used in conditional. Did you mean comparison '=='?`
      });
    }

    // 6. Misspelled C# Built-in Types (CS0246)
    const misspelledTypeRegex = /\b(Int|Double|Decimal|String|Boolean|Float)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
    while ((match = misspelledTypeRegex.exec(code)) !== null) {
      const lineNum = getLineNumber(code, match.index);
      const proper = match[1].toLowerCase();
      diagnostics.push({
        code: 'CS0246',
        severity: 'warning',
        line: lineNum,
        col: 1,
        message: `Type name '${match[1]}' should use C# keyword '${proper}' for standard convention.`
      });
    }

    // 7. NWU Naming Convention Warnings (NWU_CONV01)
    const defaultControlRegex = /\b(button[0-9]+|textBox[0-9]+|label[0-9]+|listBox[0-9]+|radioButton[0-9]+|checkBox[0-9]+)\b/gi;
    while ((match = defaultControlRegex.exec(code)) !== null) {
      const lineNum = getLineNumber(code, match.index);
      diagnostics.push({
        code: 'NWU_CONV01',
        severity: 'warning',
        line: lineNum,
        col: 1,
        message: `Naming Convention Warning: Default control name '${match[1]}' detected. Standard Hungarian prefixes must be used (e.g. btnCalculate, txtHours, lblGrossPay).`
      });
    }

    // 8. Safe Parsing Guidance (NWU_SAFE01)
    if (/\b(?:int|double|decimal)\.Parse\s*\(/.test(code) && !/\btry\s*\{/.test(code) && !/\bTryParse\b/.test(code)) {
      diagnostics.push({
        code: 'NWU_SAFE01',
        severity: 'warning',
        line: 1,
        col: 1,
        message: "Defensive Input Validation: Raw '.Parse()' throws an unhandled FormatException on non-numeric input. Use TryParse() or wrap parsing in a try-catch block."
      });
    }

    // 9. Output Formatting Guidance (NWU_FORMAT01)
    if (context.requiresCurrency && !hasCurrencyFormatting(code)) {
      diagnostics.push({
        code: 'NWU_FORMAT01',
        severity: 'warning',
        line: 1,
        col: 1,
        message: `Formatting Standard: Currency amounts must be formatted using .ToString("C"), .ToString("C2"), string.Format, or currency interpolation.`
      });
    }

    return diagnostics;
  }

  function getLineNumber(str, index) {
    const sub = str.slice(0, index);
    return (sub.match(/\n/g) || []).length + 1;
  }

  function recoverBrokenCSharpForSimulation(rawCode) {
    if (!rawCode) return '';
    const lines = String(rawCode).split(/\r?\n/);
    const fixedLines = lines.map(line => {
      const trimmed = line.replace(/\/\/.*$/, '').trim();
      if (!trimmed) return line;
      if (/[{};:,\(]$/.test(trimmed)) return line;
      if (/^(if|else|while|for|foreach|switch|try|catch|finally|do|using|public|private|protected|internal|class|namespace)\b/.test(trimmed)) {
        return line;
      }
      return line + ';';
    });
    let joined = fixedLines.join('\n');
    const toks = tokenize(joined);
    let braceBalance = 0;
    toks.forEach(t => {
      if (t.value === '{') braceBalance++;
      else if (t.value === '}') braceBalance = Math.max(0, braceBalance - 1);
    });
    while (braceBalance > 0) {
      joined += '\n}';
      braceBalance--;
    }
    return joined;
  }

  /**
   * 3. VIRTUAL C# RUNTIME & TEST CASE SIMULATOR
   */
  function simulateExecution(code, testCases = [], scenarioContext = {}) {
    const rawCode = String(code || '');
    code = unwrapMethodWrapper(rawCode);
    const results = [];

    const diagnostics = analyzeDiagnostics(rawCode, scenarioContext);
    const fatalErrors = diagnostics.filter(d => d.severity === 'error');

    if (fatalErrors.length > 0 && !scenarioContext.allowRecovery) {
      return {
        success: false,
        diagnostics: diagnostics,
        testResults: testCases.map(tc => ({
          name: tc.name,
          passed: false,
          reason: `Compilation Error: ${fatalErrors[0].code} - ${fatalErrors[0].message} (Line ${fatalErrors[0].line})`,
          actual: 'Build Failed',
          expected: tc.expectedDescription || 'Clean Run'
        })),
        scorePct: 0
      };
    }

    const codeToTranspile = (fatalErrors.length > 0 && scenarioContext.allowRecovery)
      ? recoverBrokenCSharpForSimulation(code)
      : code;

    const jsTranspiled = transpileCSharpToJs(codeToTranspile);

    testCases.forEach(tc => {
      const testResult = runSingleTestCase(jsTranspiled, tc, scenarioContext);
      results.push(testResult);
    });

    const passedCount = results.filter(r => r.passed).length;
    const scorePct = testCases.length > 0 ? Math.round((passedCount / testCases.length) * 100) : 100;

    return {
      success: passedCount === testCases.length && fatalErrors.length === 0,
      recoveredExecution: fatalErrors.length > 0 && passedCount > 0,
      diagnostics: diagnostics,
      testResults: results,
      scorePct: scorePct
    };
  }

  function transpileCSharpStatementsToJs(codeSlice) {
    let js = String(codeSlice || '');

    // 1. Transpile C# String Interpolation: $"Year {currentYear}: {balance:C}" or {balance:C2}
    js = js.replace(/\$"(?:[^"\\]|\\.)*"/g, (match) => {
      const inner = match.slice(2, -1);
      let converted = '';
      let i = 0;
      while (i < inner.length) {
        if (inner[i] === '{' && inner[i + 1] === '{') {
          converted += '{';
          i += 2;
          continue;
        }
        if (inner[i] === '}' && inner[i + 1] === '}') {
          converted += '}';
          i += 2;
          continue;
        }
        if (inner[i] === '{') {
          let depth = 1;
          let j = i + 1;
          let inExprStr = false;
          let exprStrChar = '';
          while (j < inner.length && depth > 0) {
            const c = inner[j];
            if (inExprStr) {
              if (c === '\\') { j += 2; continue; }
              if (c === exprStrChar) inExprStr = false;
            } else {
              if (c === '"' || c === "'") {
                inExprStr = true;
                exprStrChar = c;
              } else if (c === '{') {
                depth++;
              } else if (c === '}') {
                depth--;
              }
            }
            if (depth > 0) j++;
          }
          const expr = inner.slice(i + 1, j);
          i = j + 1;

          let formattedExpr = expr;
          const fmtMatch = expr.match(/^(.+?):([CcFfNnPpDd]\d*)$/);
          if (fmtMatch) {
            const varExpr = fmtMatch[1].trim();
            const spec = fmtMatch[2].toUpperCase();
            if (spec.startsWith('C')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toCurrency(${isNaN(d) ? 2 : d})`;
            } else if (spec.startsWith('F')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toFixed(${isNaN(d) ? 2 : d})`;
            } else if (spec.startsWith('N')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toNumber(${isNaN(d) ? 2 : d})`;
            } else if (spec.startsWith('P')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toPercent(${isNaN(d) ? 1 : d})`;
            } else if (spec.startsWith('D')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `String(Math.trunc(${varExpr})).padStart(${isNaN(d) ? 1 : d}, "0")`;
            }
          }
          converted += '${' + formattedExpr + '}';
          continue;
        }
        if (inner[i] === '`') {
          converted += '\\`';
        } else if (inner[i] === '$' && inner[i + 1] === '{') {
          converted += '\\$';
        } else {
          converted += inner[i];
        }
        i++;
      }
      return '`' + converted + '`';
    });

    // 1b. Verbatim C# string literals @"..."
    js = js.replace(/@"((?:[^"]|"")*)"/g, (_m, inner) => JSON.stringify(inner.replace(/""/g, '"')));

    // Track declared C# int variables before type erasure so int / int division truncates like C#
    const intVars = new Set();
    const outIntRe = /\bout\s+(?:int|Int32)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
    let im;
    while ((im = outIntRe.exec(js)) !== null) intVars.add(im[1]);
    const intDeclLineRe = /\b(?:const\s+)?(?:int|Int32)\s+(?!\s*\[)([^;{()]+?)(?=[;)])/g;
    while ((im = intDeclLineRe.exec(js)) !== null) {
      im[1].split(',').forEach(seg => {
        const vm = seg.trim().match(/^([a-zA-Z_][a-zA-Z0-9_]*)\b/);
        if (vm) intVars.add(vm[1]);
      });
    }

    // 2. Identify and hoist inline out variables: e.g. out decimal hours, out var count
    const inlineOutVars = new Set();
    const outTypedRegex = /\bout\s+(?:decimal|Decimal|double|Double|int|Int32|string|String|bool|Boolean|float|long|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
    let om;
    while ((om = outTypedRegex.exec(js)) !== null) {
      inlineOutVars.add(om[1]);
    }
    js = js.replace(/\bout\s+(?:decimal|Decimal|double|Double|int|Int32|string|String|bool|Boolean|float|long|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g, 'out $1');

    // 2b. Transpile C# using (StreamType varName = expr) { ... } blocks so streams auto-close
    js = js.replace(/\busing\s*\(\s*(?:StreamWriter|StreamReader|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([^)]+)\)\s*\{/g,
      '{ let $1 = $2; try {');

    // 2c. Transpile C# catch clauses: catch (ExceptionType ex) -> catch (ex), catch (ExceptionType) -> catch (_ex), bare catch -> catch (_ex)
    js = js.replace(/\bcatch\s*\(\s*[a-zA-Z0-9_.]+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/g, 'catch ($1)');
    js = js.replace(/\bcatch\s*\(\s*([a-zA-Z0-9_.]+)\s*\)/g, (full, ident) => {
      if (/Exception$|^Exception$/i.test(ident)) return 'catch (_ex)';
      return full;
    });
    js = js.replace(/\bcatch\s*(?=\{)/g, 'catch (_ex) ');

    // 3. Transpile C# array declarations:
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\{([^}]+)\}/g, 'let $1 = [$2]');
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*new\s+(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\d*\s*\]\s*\{([^}]+)\}/g, 'let $1 = [$2]');
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*new\s+(?:decimal|double|int|string|bool|float|long|char)\s*\[([^\]]+)\]/g, 'let $1 = new Array($2).fill(0)');
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 'let $1');

    // 4. Transpile C# type declarations
    js = js.replace(/\b(?:(?:private|public|protected|internal|static)\s+)?(?:(const|readonly)\s+)?(?:decimal|Decimal|double|Double|int|Int32|string|String|bool|Boolean|float|long|char|DialogResult|Color|StreamWriter|StreamReader|OpenFileDialog|SaveFileDialog|Random|Form2|[A-Z][a-zA-Z0-9_]*Form)\s+([a-zA-Z_][a-zA-Z0-9_]*)(?!\s*\()/g, (match, isConst, varName) => {
      return (isConst ? 'const ' : 'let ') + varName;
    });

    // Hoist any inline out declarations so they exist in outer function scope without duplicate binding error
    let hoistedDecls = '';
    inlineOutVars.forEach(v => {
      const declPattern = new RegExp(`\\b(?:let|const|var)\\s+${v}\\b`);
      if (!declPattern.test(js)) {
        hoistedDecls += `let ${v};\n`;
      }
    });
    if (hoistedDecls) {
      js = hoistedDecls + js;
    }

    // 5. foreach loops: foreach (string item in lst.Items) -> for (let item of lst.Items)
    js = js.replace(/\bforeach\s*\(\s*(?:(?:string|int|decimal|double|bool|var|[a-zA-Z0-9_]+)\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+([^)]+)\)/g, 'for (let $1 of $2)');

    // Explicit numeric casts BEFORE int-division check
    js = js.replace(/\(\s*int\s*\)\s*([a-zA-Z0-9_\.]+\s*\([^)]*\))/g, 'Math.trunc($1)');
    js = js.replace(/\(\s*(?:double|decimal|float)\s*\)\s*([a-zA-Z0-9_\.]+\s*\([^)]*\))/g, 'Number($1)');
    js = js.replace(/\(\s*int\s*\)\s*(?=\()/g, 'Math.trunc');
    js = js.replace(/\(\s*(?:double|decimal|float)\s*\)\s*(?=\()/g, 'Number');
    js = js.replace(/\(\s*int\s*\)\s*([a-zA-Z0-9_\.]+)(?!\s*\()/g, 'Math.trunc($1)');
    js = js.replace(/\(\s*(?:double|decimal|float)\s*\)\s*([a-zA-Z0-9_\.]+)(?!\s*\()/g, 'Number($1)');

    // Mask comments & string/template literals before integer-division and loop-guard transforms
    const maskedLiterals = [];
    const maskLiterals = (input) => input.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, (m) => {
      const tok = `\x01CSLIT_${maskedLiterals.length}\x01`;
      maskedLiterals.push(m);
      return tok;
    });
    const unmaskLiterals = (input) => input.replace(/\x01CSLIT_(\d+)\x01/g, (_m, idx) => maskedLiterals[Number(idx)]);

    js = maskLiterals(js);

    // 5b. C# Integer Division Truncation (int / int -> Math.trunc(lhs / rhs)) BEFORE stripping m/d/f suffixes!
    const isIntAtom = (tok) => {
      if (/^\d+$/.test(tok)) return true;
      if (intVars.has(tok)) return true;
      if (/\.(?:Count|Length|SelectedIndex)$/.test(tok)) return true;
      return false;
    };
    let prevDiv;
    let safetyPass = 0;
    do {
      prevDiv = js;
      js = js.replace(/(?<![.\w$])([a-zA-Z_][a-zA-Z0-9_.]*|\d+(?:\.\d+)?[mMdDfF]?)\s*\/\s*(?![/*=])([a-zA-Z_][a-zA-Z0-9_.]*|\d+(?:\.\d+)?[mMdDfF]?)(?![.\w$])/g, (full, lhs, rhs) => {
        if (isIntAtom(lhs) && isIntAtom(rhs)) {
          return `Math.trunc(${lhs} / ${rhs})`;
        }
        return full;
      });
      safetyPass++;
    } while (js !== prevDiv && safetyPass < 6);

    js = unmaskLiterals(js);

    // 6. Handle numeric literals with C# suffixes: 100.5m -> 100.5
    js = js.replace(/(\d+(?:\.\d+)?)[mMDdfF]\b/g, '$1');

    // 7. String methods & helpers
    js = js.replace(/\b(?:string|String)\.Format\s*\(/g, 'String.Format(');
    js = js.replace(/\b(?:string|String)\.IsNullOrEmpty\s*\(\s*([^)]+)\s*\)/g, '(!($1) || ($1).length === 0)');
    js = js.replace(/\b(?:string|String)\.IsNullOrWhiteSpace\s*\(\s*([^)]+)\s*\)/g, '(!($1) || String($1).trim().length === 0)');
    js = js.replace(/\.Trim\s*\(\s*\)/g, '.trim()');
    js = js.replace(/\.ToUpper\s*\(\s*\)/g, '.toUpperCase()');
    js = js.replace(/\.ToLower\s*\(\s*\)/g, '.toLowerCase()');
    js = js.replace(/\.Contains\s*\(/g, '.includes(');
    js = js.replace(/\.StartsWith\s*\(/g, '.startsWith(');
    js = js.replace(/\.EndsWith\s*\(/g, '.endsWith(');

    // 8. Replace TryParse calls:
    js = js.replace(/\b(?:int|Int32)\.TryParse\s*\(\s*([^,]+?)\s*,\s*out\s+(?:let\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/g,
      '((() => { const _raw = ($1); const _v = Number(_raw); if(!isNaN(_v) && Number.isInteger(_v) && String(_raw).trim() !== ""){ $2 = _v; return true; } return false; })())');

    js = js.replace(/\b(?:decimal|Decimal|double|Double|float|Single)\.TryParse\s*\(\s*([^,]+?)\s*,\s*out\s+(?:let\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/g,
      '((() => { const _raw = ($1); const _v = parseFloat(_raw); if(!isNaN(_v) && isFinite(_v) && String(_raw).trim() !== ""){ $2 = _v; return true; } return false; })())');

    js = js.replace(/\b(?:bool|Boolean)\.TryParse\s*\(\s*([^,]+?)\s*,\s*out\s+(?:let\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/g,
      '((() => { const _raw = String($1).trim().toLowerCase(); if(_raw === "true" || _raw === "false"){ $2 = (_raw === "true"); return true; } return false; })())');

    // Simple Parse (throws FormatException on invalid non-numeric input so C# try-catch blocks work authentically)
    js = js.replace(/\b(?:decimal|Decimal|double|Double|float|Single)\.Parse\s*\(/g, '_parseFloatStrict(');
    js = js.replace(/\b(?:int|Int32)\.Parse\s*\(/g, '_parseIntStrict(');

    // Remaining custom method call-site ref and out arguments: ref x or out x -> reference box
    js = js.replace(/\b(?:ref|out)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g,
      '{ __isRef: true, get val() { return $1; }, set val(_v) { $1 = _v; } }');

    // Math methods
    js = js.replace(/\bMath\.Pow\s*\(/g, 'Math.pow(');
    js = js.replace(/\bMath\.Sqrt\s*\(/g, 'Math.sqrt(');
    js = js.replace(/\bMath\.Round\s*\(/g, '_mathRound(');
    js = js.replace(/\bMath\.Ceiling\s*\(/g, 'Math.ceil(');
    js = js.replace(/\bMath\.Floor\s*\(/g, 'Math.floor(');
    js = js.replace(/\bMath\.Truncate\s*\(/g, 'Math.trunc(');
    js = js.replace(/\bMath\.Abs\s*\(/g, 'Math.abs(');
    js = js.replace(/\bMath\.Max\s*\(/g, 'Math.max(');
    js = js.replace(/\bMath\.Min\s*\(/g, 'Math.min(');

    // ToString formatting (supports C, C2, F1, F2, N0, N2, P1, D2, etc.)
    js = js.replace(/\.ToString\s*\(\s*["']C(\d)?["']\s*\)/gi, '._toCurrency($1)');
    js = js.replace(/\.ToString\s*\(\s*["']F(\d)?["']\s*\)/gi, '._toFixed($1 || 2)');
    js = js.replace(/\.ToString\s*\(\s*["']N(\d)?["']\s*\)/gi, '._toNumber($1 || 2)');
    js = js.replace(/\.ToString\s*\(\s*["']P(\d)?["']\s*\)/gi, '._toPercent($1 || 1)');
    js = js.replace(/\.ToString\s*\(\s*\)/g, '.toString()');

    // MessageBox.Show(...) -> _msgBox(...)
    js = js.replace(/\bMessageBox\.Show\s*\(/g, '_msgBox(');

    // this.Close() / this.Hide() / this.BackColor / this.Text
    js = js.replace(/\bthis\.Close\s*\(\s*\)/g, '_closeForm()');
    js = js.replace(/\bthis\.Hide\s*\(\s*\)/g, '_hideForm()');
    js = js.replace(/\bthis\.BackColor\b/g, 'BackColor');
    js = js.replace(/\bthis\.Text\b/g, '_formText');

    // 9. Balanced-delimiter Infinite-Loop Guard on braced AND braceless while / for / do loops
    maskedLiterals.length = 0;
    const maskedForLoops = maskLiterals(js);
    js = unmaskLiterals(injectLoopGuardsBalanced(maskedForLoops));

    return js;
  }

  function transpileCSharpToJs(code) {
    const unwrapped = unwrapMethodWrapper(code);
    const extracted = extractCSharpMethods(unwrapped);

    if (extracted.methods.length === 0) {
      return transpileCSharpStatementsToJs(unwrapped);
    }

    let jsOutput = '';
    if (extracted.remainder) {
      jsOutput += transpileCSharpStatementsToJs(extracted.remainder) + '\n';
    }

    let autoEntryHandler = null;
    extracted.methods.forEach(m => {
      const jsParamNames = m.params.map(p => (p.isRef || p.isOut) ? `_ref_${p.name}` : p.name);
      let unpackHeader = '';
      let writeBackFooter = '';
      m.params.forEach(p => {
        if (p.isRef || p.isOut) {
          const defaultVal = p.isOut
            ? (p.type === 'string' ? '""' : (p.type === 'bool' ? 'false' : '0'))
            : `_ref_${p.name}`;
          unpackHeader += `let ${p.name} = (_ref_${p.name} && _ref_${p.name}.__isRef) ? _ref_${p.name}.val : ${defaultVal};\n`;
          writeBackFooter += `if (_ref_${p.name} && _ref_${p.name}.__isRef) { _ref_${p.name}.val = ${p.name}; }\n`;
        }
      });

      const transpiledBody = transpileCSharpStatementsToJs(m.body);
      if (writeBackFooter) {
        jsOutput += `function ${m.name}(${jsParamNames.join(', ')}) {\n${unpackHeader}try {\n${transpiledBody}\n} finally {\n${writeBackFooter}}\n}\n`;
      } else {
        jsOutput += `function ${m.name}(${jsParamNames.join(', ')}) {\n${transpiledBody}\n}\n`;
      }

      if (typeof _customMethods === 'object') {
        jsOutput += `_registerMethod("${m.name}", ${m.name}, ${JSON.stringify(m.params)});\n`;
      }

      if (m.isEventHandler && !autoEntryHandler) {
        autoEntryHandler = m.name;
      }
    });

    if (autoEntryHandler) {
      jsOutput += `if (!_skipAutoEventHandler) { ${autoEntryHandler}({}, {}); }\n`;
    } else if (extracted.methods.length === 1 && extracted.methods[0].params.length === 0 && extracted.methods[0].returnType === 'void') {
      jsOutput += `if (!_skipAutoEventHandler) { ${extracted.methods[0].name}(); }\n`;
    }

    return jsOutput;
  }

  function injectLoopGuardsBalanced(s) {
    function findMatching(str, openPos, openCh, closeCh) {
      let depth = 1;
      for (let k = openPos + 1; k < str.length; k++) {
        if (str[k] === openCh) depth++;
        else if (str[k] === closeCh) {
          depth--;
          if (depth === 0) return k;
        }
      }
      return -1;
    }

    function skipSpaces(str, pos) {
      while (pos < str.length && /\s/.test(str[pos])) pos++;
      return pos;
    }

    function findSingleStatementEnd(str, startPos) {
      let pDepth = 0;
      let bDepth = 0;
      for (let k = startPos; k < str.length; k++) {
        const ch = str[k];
        if (ch === '(') pDepth++;
        else if (ch === ')') pDepth = Math.max(0, pDepth - 1);
        else if (ch === '{') bDepth++;
        else if (ch === '}') {
          bDepth = Math.max(0, bDepth - 1);
          if (pDepth === 0 && bDepth === 0) {
            const after = skipSpaces(str, k + 1);
            if (!str.slice(after).startsWith('else')) return k + 1;
          }
        } else if (ch === ';' && pDepth === 0 && bDepth === 0) {
          return k + 1;
        }
      }
      return str.length;
    }

    const doWhileFooters = new Set();
    let out = '';
    let i = 0;

    while (i < s.length) {
      const prevCh = i > 0 ? s[i - 1] : '';
      const atBoundary = !/[a-zA-Z0-9_$]/.test(prevCh);

      if (atBoundary && /^do(?![a-zA-Z0-9_$])/.test(s.slice(i))) {
        const bodyPos = skipSpaces(s, i + 2);
        if (s[bodyPos] === '{') {
          const closeBrace = findMatching(s, bodyPos, '{', '}');
          if (closeBrace !== -1) {
            const afterClose = skipSpaces(s, closeBrace + 1);
            if (/^while(?![a-zA-Z0-9_$])/.test(s.slice(afterClose))) {
              doWhileFooters.add(afterClose);
            }
          }
          out += 'do { _guardLoop(); ';
          i = bodyPos + 1;
          continue;
        } else if (bodyPos < s.length) {
          const stmtEnd = findSingleStatementEnd(s, bodyPos);
          const afterStmt = skipSpaces(s, stmtEnd);
          if (/^while(?![a-zA-Z0-9_$])/.test(s.slice(afterStmt))) {
            doWhileFooters.add(afterStmt);
          }
          out += 'do { _guardLoop(); ' + injectLoopGuardsBalanced(s.slice(bodyPos, stmtEnd)) + ' } ';
          i = stmtEnd;
          continue;
        }
      }

      const loopKwMatch = atBoundary ? s.slice(i).match(/^(while|for)(?![a-zA-Z0-9_$])/) : null;
      if (loopKwMatch && !(loopKwMatch[1] === 'while' && doWhileFooters.has(i))) {
        const kw = loopKwMatch[1];
        const openParen = skipSpaces(s, i + kw.length);
        if (s[openParen] === '(') {
          const closeParen = findMatching(s, openParen, '(', ')');
          if (closeParen !== -1) {
            out += s.slice(i, closeParen + 1);
            const bodyPos = skipSpaces(s, closeParen + 1);
            if (s[bodyPos] === '{') {
              out += ' { _guardLoop(); ';
              i = bodyPos + 1;
              continue;
            } else if (s[bodyPos] === ';') {
              out += ' { _guardLoop(); }';
              i = bodyPos + 1;
              continue;
            } else if (bodyPos < s.length) {
              const stmtEnd = findSingleStatementEnd(s, bodyPos);
              out += ' { _guardLoop(); ' + injectLoopGuardsBalanced(s.slice(bodyPos, stmtEnd)) + ' }';
              i = stmtEnd;
              continue;
            }
          }
        }
      }

      out += s[i];
      i++;
    }

    return out;
  }

  /**
   * 3b. LAYER 1 VIRTUAL INTERFACES & WINFORMS SANDBOX ENVIRONMENT
   * Supports IFormState, IFormControls, IFileSystem, IFileStreamSandbox,
   * IDialogService, IMessageBoxService, IRandomGenerator, IMultiFormSandbox.
   */
  function createVirtualEnvironment(tc = {}, context = {}) {
    const operationLog = [];

    function createListBoxItems(initialItems = [], ctrlName = 'lst') {
      const itemsArray = (Array.isArray(initialItems) ? [...initialItems] : []).map(x => String(x));
      const target = {
        _items: itemsArray,
        Add: function(item) {
          const val = String(item);
          itemsArray.push(val);
          operationLog.push({ type: 'ListBox.Add', control: ctrlName, value: val });
        },
        Clear: function() {
          itemsArray.length = 0;
          operationLog.push({ type: 'ListBox.Clear', control: ctrlName });
        },
        Remove: function(item) {
          const idx = itemsArray.indexOf(String(item));
          if (idx !== -1) itemsArray.splice(idx, 1);
          operationLog.push({ type: 'ListBox.Remove', control: ctrlName, value: String(item) });
        },
        RemoveAt: function(idx) {
          if (idx >= 0 && idx < itemsArray.length) {
            itemsArray.splice(idx, 1);
          }
          operationLog.push({ type: 'ListBox.RemoveAt', control: ctrlName, index: idx });
        },
        Insert: function(idx, item) {
          itemsArray.splice(idx, 0, String(item));
        },
        Contains: function(item) {
          return itemsArray.includes(String(item));
        },
        IndexOf: function(item) {
          return itemsArray.indexOf(String(item));
        },
        get Count() {
          return itemsArray.length;
        },
        [Symbol.iterator]: function*() {
          for (const it of itemsArray) {
            yield it;
          }
        }
      };

      return new Proxy(target, {
        get(obj, prop) {
          if (typeof prop === 'string' && !isNaN(prop) && prop !== '') {
            const idx = Number(prop);
            return obj._items[idx] !== undefined ? String(obj._items[idx]) : undefined;
          }
          if (prop in obj) {
            return obj[prop];
          }
          return undefined;
        },
        set(obj, prop, value) {
          if (typeof prop === 'string' && !isNaN(prop) && prop !== '') {
            const idx = Number(prop);
            obj._items[idx] = String(value);
            return true;
          }
          obj[prop] = value;
          return true;
        }
      });
    }

    const IFormState = {
      BackColor: 'White',
      ForeColor: 'Black',
      Text: 'MainForm',
      isClosed: false,
      isHidden: false,
      focusedControl: null,
      operationLog: operationLog,
      Close: function() {
        this.isClosed = true;
        operationLog.push({ type: 'Form.Close' });
      },
      Hide: function() {
        this.isHidden = true;
        operationLog.push({ type: 'Form.Hide' });
      }
    };

    const IFormControls = {
      controls: {},
      createControl: function(name, initialVal) {
        if (name.startsWith('txt')) {
          const ctrl = {
            Text: initialVal !== undefined && typeof initialVal !== 'object' ? String(initialVal) : (initialVal && initialVal.Text ? String(initialVal.Text) : ''),
            Enabled: initialVal && initialVal.Enabled !== undefined ? Boolean(initialVal.Enabled) : true,
            ReadOnly: initialVal && initialVal.ReadOnly !== undefined ? Boolean(initialVal.ReadOnly) : false,
            ForeColor: 'Black',
            BackColor: 'White',
            Focus: function() {
              IFormState.focusedControl = name;
              operationLog.push({ type: 'Control.Focus', control: name });
            },
            SelectAll: function() {
              IFormState.selectedAllControl = name;
              operationLog.push({ type: 'Control.SelectAll', control: name });
            },
            Clear: function() {
              this.Text = '';
              operationLog.push({ type: 'Control.Clear', control: name });
            }
          };
          this.controls[name] = ctrl;
          return ctrl;
        }
        if (name.startsWith('lbl')) {
          const ctrl = {
            Text: initialVal !== undefined && typeof initialVal !== 'object' ? String(initialVal) : (initialVal && initialVal.Text ? String(initialVal.Text) : ''),
            ForeColor: (initialVal && initialVal.ForeColor) || 'Black',
            BackColor: (initialVal && initialVal.BackColor) || 'White',
            Visible: (initialVal && initialVal.Visible !== undefined) ? Boolean(initialVal.Visible) : true
          };
          this.controls[name] = ctrl;
          return ctrl;
        }
        if (name.startsWith('pic') || name.startsWith('img')) {
          let isVis = false;
          let sMode = 'Normal';
          if (typeof initialVal === 'boolean') {
            isVis = initialVal;
          } else if (typeof initialVal === 'object' && initialVal !== null) {
            isVis = initialVal.Visible !== undefined ? Boolean(initialVal.Visible) : false;
            sMode = initialVal.SizeMode || 'Normal';
          }
          const ctrl = {
            Visible: isVis,
            SizeMode: sMode,
            Image: null
          };
          this.controls[name] = ctrl;
          return ctrl;
        }
        if (name.startsWith('rdo') || name.startsWith('rad') || name.startsWith('chk') || name.startsWith('cb')) {
          const ctrl = {
            Checked: typeof initialVal === 'object' && initialVal !== null ? Boolean(initialVal.Checked) : Boolean(initialVal),
            Enabled: true,
            Text: ''
          };
          this.controls[name] = ctrl;
          return ctrl;
        }
        if (name.startsWith('lst') || name.startsWith('cbo')) {
          let itemsArray = [];
          let selIdx = -1;
          if (Array.isArray(initialVal)) {
            itemsArray = initialVal;
            selIdx = itemsArray.length > 0 ? 0 : -1;
          } else if (initialVal && typeof initialVal === 'object') {
            itemsArray = initialVal.items || initialVal.Items || [];
            selIdx = initialVal.selectedIndex !== undefined ? initialVal.selectedIndex : (initialVal.SelectedIndex !== undefined ? initialVal.SelectedIndex : (itemsArray.length > 0 ? 0 : -1));
          } else if (initialVal) {
            itemsArray = [initialVal];
            selIdx = 0;
          }
          const items = createListBoxItems(itemsArray, name);
          const ctrl = {
            Items: items,
            SelectedIndex: selIdx,
            get SelectedItem() {
              if (this.SelectedIndex >= 0 && this.SelectedIndex < this.Items._items.length) {
                return this.Items._items[this.SelectedIndex];
              }
              return null;
            },
            set SelectedItem(val) {
              const idx = this.Items._items.indexOf(String(val));
              this.SelectedIndex = idx;
            },
            get Text() {
              return this.SelectedItem || '';
            }
          };
          this.controls[name] = ctrl;
          return ctrl;
        }
        if (name.startsWith('btn') || name.startsWith('grp') || name.startsWith('pnl')) {
          const ctrl = {
            Text: initialVal ? String(initialVal) : '',
            Enabled: true,
            Visible: true,
            BackColor: 'White',
            ForeColor: 'Black',
            Focus: function() { IFormState.focusedControl = name; }
          };
          this.controls[name] = ctrl;
          return ctrl;
        }
        if (name.startsWith('ofd') || name.startsWith('sfd')) {
          return IDialogService.createDialog(name, initialVal);
        }
        this.controls[name] = initialVal;
        return initialVal;
      }
    };

    const initialFiles = {};
    const rawFiles = (tc.inputs && (tc.inputs._files || tc.inputs.virtualFiles)) || context.virtualFiles || {};
    Object.keys(rawFiles).forEach(fn => {
      initialFiles[fn] = Array.isArray(rawFiles[fn]) ? rawFiles[fn].map(String) : String(rawFiles[fn]).split(/\r?\n/);
    });

    const IFileSystem = {
      files: initialFiles,
      exists: function(fn) {
        return Object.prototype.hasOwnProperty.call(this.files, fn);
      },
      readLines: function(fn) {
        if (this.files[fn]) return this.files[fn].slice();
        return ['10', '20', '30'];
      },
      writeLines: function(fn, lines) {
        this.files[fn] = lines.map(String);
      }
    };

    const IFileStreamSandbox = {
      streams: [],
      createWriter: function(fn, append = false) {
        if (!append || !IFileSystem.files[fn]) {
          IFileSystem.files[fn] = [];
        }
        const lines = IFileSystem.files[fn];
        const streamRecord = { type: 'StreamWriter', fileName: fn, mode: append ? 'Append' : 'Create', closed: false, linesWritten: 0 };
        this.streams.push(streamRecord);
        operationLog.push({ type: append ? 'File.AppendText' : 'File.CreateText', fileName: fn });
        return {
          _record: streamRecord,
          _closed: false,
          Write: function(s) {
            if (!lines.length) lines.push(String(s));
            else lines[lines.length - 1] += String(s);
          },
          WriteLine: function(s) {
            lines.push(s === undefined ? '' : String(s));
            streamRecord.linesWritten++;
          },
          Close: function() {
            this._closed = true;
            streamRecord.closed = true;
            operationLog.push({ type: 'StreamWriter.Close', fileName: fn });
          },
          Dispose: function() {
            this.Close();
          }
        };
      },
      createReader: function(fn) {
        const lines = IFileSystem.readLines(fn);
        let idx = 0;
        const streamRecord = { type: 'StreamReader', fileName: fn, mode: 'Read', closed: false, linesRead: 0 };
        this.streams.push(streamRecord);
        operationLog.push({ type: 'File.OpenText', fileName: fn });
        return {
          _record: streamRecord,
          _closed: false,
          get EndOfStream() {
            return idx >= lines.length;
          },
          ReadLine: function() {
            if (idx < lines.length) {
              streamRecord.linesRead++;
              return lines[idx++];
            }
            return null;
          },
          ReadToEnd: function() {
            const rem = lines.slice(idx).join('\n');
            idx = lines.length;
            return rem;
          },
          Close: function() {
            this._closed = true;
            streamRecord.closed = true;
            operationLog.push({ type: 'StreamReader.Close', fileName: fn });
          },
          Dispose: function() {
            this.Close();
          }
        };
      }
    };

    const IDialogService = {
      dialogs: {},
      dialogCalls: [],
      createDialog: function(name, initialVal) {
        const defaultName = name.startsWith('sfd') ? 'Report.txt' : 'Data.txt';
        const fn = (initialVal && typeof initialVal === 'object' && initialVal.FileName)
          ? String(initialVal.FileName)
          : (typeof initialVal === 'string' && initialVal ? initialVal : defaultName);
        const dialogResult = (initialVal && typeof initialVal === 'object' && initialVal.DialogResult !== undefined)
          ? initialVal.DialogResult
          : 1; // DialogResult.OK
        const dlg = {
          FileName: fn,
          InitialDirectory: '',
          Filter: '',
          Title: '',
          ShowDialog: function() {
            IDialogService.dialogCalls.push({ name, fileName: this.FileName, result: dialogResult });
            operationLog.push({ type: 'Dialog.ShowDialog', control: name, result: dialogResult });
            return dialogResult;
          }
        };
        this.dialogs[name] = dlg;
        IFormControls.controls[name] = dlg;
        return dlg;
      }
    };

    const IMessageBoxService = {
      messages: [],
      messageDetails: [],
      Show: function(...args) {
        const text = args.map(a => String(a)).join(' | ');
        this.messages.push(text);
        this.messageDetails.push({
          text: args[0] !== undefined ? String(args[0]) : '',
          caption: args[1] !== undefined ? String(args[1]) : '',
          buttons: args[2],
          icon: args[3]
        });
        operationLog.push({ type: 'MessageBox.Show', text });
        return (tc.inputs && tc.inputs._messageBoxResult !== undefined) ? tc.inputs._messageBoxResult : 1;
      }
    };

    const IRandomGenerator = {
      calls: [],
      sequenceIdx: 0,
      createInstance: function(seed) {
        return {
          Next: function(a, b) {
            let val;
            if (tc.inputs && Array.isArray(tc.inputs._randomSequence) && tc.inputs._randomSequence.length > 0) {
              val = tc.inputs._randomSequence[IRandomGenerator.sequenceIdx % tc.inputs._randomSequence.length];
              IRandomGenerator.sequenceIdx++;
            } else if (a === undefined) {
              val = 42;
            } else if (b === undefined) {
              val = Math.floor(Number(a) / 2);
            } else {
              val = Number(a);
            }
            IRandomGenerator.calls.push({ method: 'Next', min: b === undefined ? 0 : a, max: b === undefined ? a : b, value: val });
            return val;
          },
          NextDouble: function() {
            const val = 0.5;
            IRandomGenerator.calls.push({ method: 'NextDouble', value: val });
            return val;
          }
        };
      }
    };

    const IMultiFormSandbox = {
      instances: [],
      createFormConstructor: function(formClassName) {
        return function(...ctorArgs) {
          const formRecord = {
            className: formClassName,
            ctorArgs: ctorArgs,
            shownModal: false,
            shownModeless: false,
            closed: false,
            hidden: false,
            modalSnapshot: null,
            postModalMutations: [],
            controls: {}
          };

          const ensureChildControl = (prop) => {
            if (!formRecord.controls[prop]) {
              formRecord.controls[prop] = {
                _text: '',
                _visible: true,
                _checked: false,
                get Text() { return this._text; },
                set Text(v) {
                  this._text = String(v);
                  if (formRecord.shownModal) {
                    formRecord.postModalMutations.push({ control: prop, property: 'Text', value: String(v) });
                  }
                },
                get Visible() { return this._visible; },
                set Visible(v) {
                  this._visible = Boolean(v);
                  if (formRecord.shownModal) {
                    formRecord.postModalMutations.push({ control: prop, property: 'Visible', value: Boolean(v) });
                  }
                },
                get Checked() { return this._checked; },
                set Checked(v) {
                  this._checked = Boolean(v);
                }
              };
            }
            return formRecord.controls[prop];
          };

          ['lblSummaryTotal', 'lblFinalTotal', 'lblOutput', 'lblTotal', 'lblResult', 'lblAmountDue', 'lblDetails', 'lblCustomer', 'lblStatus'].forEach(ensureChildControl);

          const baseForm = {
            _record: formRecord,
            _shownModal: false,
            _shownModeless: false,
            _closed: false,
            _hidden: false,
            Text: formClassName,
            ShowDialog: function() {
              this._shownModal = true;
              formRecord.shownModal = true;
              const snap = {};
              Object.keys(formRecord.controls).forEach(k => {
                snap[k] = formRecord.controls[k].Text;
              });
              formRecord.modalSnapshot = snap;
              operationLog.push({ type: 'ChildForm.ShowDialog', form: formClassName, snapshot: snap });
              return 1;
            },
            Show: function() {
              this._shownModeless = true;
              formRecord.shownModeless = true;
              operationLog.push({ type: 'ChildForm.Show', form: formClassName });
            },
            Close: function() {
              this._closed = true;
              formRecord.closed = true;
            },
            Hide: function() {
              this._hidden = true;
              formRecord.hidden = true;
            }
          };

          const proxiedForm = new Proxy(baseForm, {
            get(target, prop) {
              if (prop in target) return target[prop];
              if (typeof prop === 'string' && /^(?:lbl|txt|lst|pic|rdo|rad|chk|cb|btn)[A-Z_]/.test(prop)) {
                return ensureChildControl(prop);
              }
              return target[prop];
            },
            set(target, prop, val) {
              if (formRecord.shownModal && typeof prop === 'string' && !prop.startsWith('_')) {
                formRecord.postModalMutations.push({ control: prop, property: 'Direct', value: val });
              }
              target[prop] = val;
              return true;
            }
          });

          IMultiFormSandbox.instances.push(formRecord);
          operationLog.push({ type: 'ChildForm.Instantiate', form: formClassName });
          return proxiedForm;
        };
      }
    };

    return {
      IFormState,
      IFormControls,
      IFileSystem,
      IFileStreamSandbox,
      IDialogService,
      IMessageBoxService,
      IRandomGenerator,
      IMultiFormSandbox
    };
  }

  function runSingleTestCase(transpiledJs, tc, context = {}) {
    const env = createVirtualEnvironment(tc, context);
    const customMethods = {};

    const sandbox = {
      _env: env,
      _messages: env.IMessageBoxService.messages,
      get _isClosed() { return env.IFormState.isClosed; },
      set _isClosed(v) { env.IFormState.isClosed = Boolean(v); },
      get _isHidden() { return env.IFormState.isHidden; },
      set _isHidden(v) { env.IFormState.isHidden = Boolean(v); },
      _cartTotal: 0,
      _customMethods: customMethods,
      _registerMethod: function(name, fn, params) {
        customMethods[name] = { fn, params };
      },
      _skipAutoEventHandler: Boolean(tc.callMethod || tc.harness),
      _returnValue: undefined,
      _methodOutputs: {},
      _msgBox: function(...args) {
        return env.IMessageBoxService.Show(...args);
      },
      _closeForm: function() {
        env.IFormState.Close();
      },
      Close: function() {
        env.IFormState.Close();
      },
      _hideForm: function() {
        env.IFormState.Hide();
      },
      Hide: function() {
        env.IFormState.Hide();
      },
      get BackColor() { return env.IFormState.BackColor; },
      set BackColor(v) { env.IFormState.BackColor = v; },
      get _formText() { return env.IFormState.Text; },
      set _formText(v) { env.IFormState.Text = String(v); },
      string: String,
      String: String,
      _parseFloatStrict: function(raw) {
        const v = parseFloat(raw);
        if (isNaN(v) || String(raw).trim() === '') {
          throw new Error('FormatException: Input string was not in a correct format.');
        }
        return v;
      },
      _parseIntStrict: function(raw) {
        const v = Number(raw);
        if (isNaN(v) || !Number.isInteger(v) || String(raw).trim() === '') {
          throw new Error('FormatException: Input string was not in a correct format.');
        }
        return v;
      },
      _mathRound: function(val, digits) {
        const n = Number(val);
        if (digits === undefined) return Math.round(n);
        const factor = Math.pow(10, Number(digits));
        return Math.round((n + Number.EPSILON) * factor) / factor;
      },
      MessageBoxButtons: { OK: 0, OKCancel: 1, YesNo: 4, YesNoCancel: 3 },
      MessageBoxIcon: { None: 0, Error: 16, Question: 32, Warning: 48, Information: 64 },
      DialogResult: { OK: 1, Cancel: 2, Yes: 6, No: 7 },
      PictureBoxSizeMode: { Normal: 'Normal', StretchImage: 'StretchImage', AutoSize: 'AutoSize', CenterImage: 'CenterImage', Zoom: 'Zoom' },
      Color: {
        Red: 'Red',
        Green: 'Green',
        Blue: 'Blue',
        Black: 'Black',
        White: 'White',
        Yellow: 'Yellow',
        Amber: 'Amber',
        Pink: 'Pink',
        Orange: 'Orange',
        LightBlue: 'LightBlue',
        LightGreen: 'LightGreen',
        LightGray: 'LightGray',
        Navy: 'Navy'
      },
      Convert: {
        ToDecimal: function(val) { const v = parseFloat(val); if (isNaN(v)) throw new Error("FormatException: Input string was not in a correct format."); return v; },
        ToDouble: function(val) { const v = parseFloat(val); if (isNaN(v)) throw new Error("FormatException: Input string was not in a correct format."); return v; },
        ToInt32: function(val) { const v = parseInt(val, 10); if (isNaN(v)) throw new Error("FormatException: Input string was not in a correct format."); return v; },
        ToString: function(val) { return String(val); },
        ToBoolean: function(val) { return Boolean(val); }
      },
      _loopSteps: 0,
      _guardLoop: function() {
        sandbox._loopSteps++;
        if (sandbox._loopSteps > 10000) {
          throw new Error('Infinite loop halted (>10,000 iterations). Check your loop condition and counter update.');
        }
      },
      _virtualFiles: env.IFileSystem.files,
      File: {
        CreateText: function(fn) { return env.IFileStreamSandbox.createWriter(fn, false); },
        AppendText: function(fn) { return env.IFileStreamSandbox.createWriter(fn, true); },
        OpenText: function(fn) { return env.IFileStreamSandbox.createReader(fn); },
        Exists: function(fn) { return env.IFileSystem.exists(fn); },
        ReadAllLines: function(fn) { return env.IFileSystem.readLines(fn); },
        ReadAllText: function(fn) { return env.IFileSystem.readLines(fn).join('\n'); },
        WriteAllText: function(fn, content) { env.IFileSystem.writeLines(fn, String(content).split(/\r?\n/)); }
      },
      StreamWriter: function(fn, append) {
        return env.IFileStreamSandbox.createWriter(fn, Boolean(append));
      },
      StreamReader: function(fn) {
        return env.IFileStreamSandbox.createReader(fn);
      },
      OpenFileDialog: function() {
        return env.IDialogService.createDialog('ofdDynamic', {});
      },
      SaveFileDialog: function() {
        return env.IDialogService.createDialog('sfdDynamic', {});
      },
      Random: function(seed) {
        return env.IRandomGenerator.createInstance(seed);
      },
      Form2: env.IMultiFormSandbox.createFormConstructor('Form2'),
      ChildForm: env.IMultiFormSandbox.createFormConstructor('ChildForm'),
      SummaryForm: env.IMultiFormSandbox.createFormConstructor('SummaryForm'),
      ReceiptForm: env.IMultiFormSandbox.createFormConstructor('ReceiptForm'),
      InvoiceForm: env.IMultiFormSandbox.createFormConstructor('InvoiceForm'),
      DetailsForm: env.IMultiFormSandbox.createFormConstructor('DetailsForm')
    };

    // Initialize controls from test inputs (skipping internal _ keys)
    Object.keys(tc.inputs || {}).forEach(k => {
      if (k.startsWith('_') || k === 'virtualFiles') return;
      sandbox[k] = env.IFormControls.createControl(k, tc.inputs[k]);
    });

    // Initialize expected outputs if not already present
    (context.expectedOutputs || []).forEach(k => {
      if (!sandbox[k] && !k.startsWith('_')) {
        sandbox[k] = env.IFormControls.createControl(k, '');
      }
    });

    // Initialize controls list if not already present
    (context.controls || []).forEach(k => {
      if (!sandbox[k] && !k.startsWith('_')) {
        sandbox[k] = env.IFormControls.createControl(k, '');
      }
    });

    // Append optional C# harness if test case specifies tc.harness
    let fullJsToRun = transpiledJs;
    if (tc.harness) {
      fullJsToRun += '\n' + transpileCSharpStatementsToJs(tc.harness);
    }

    try {
      const keys = Object.keys(sandbox);
      const vals = keys.map(k => sandbox[k]);
      const runner = new Function(
        ...keys,
        'window', 'document', 'globalThis', 'self', 'fetch', 'XMLHttpRequest', 'localStorage', 'sessionStorage', 'indexedDB',
        `
        "use strict";
        try {
          ${fullJsToRun}
        } catch(e) {
          throw e;
        }
      `);
      runner.call(sandbox, ...vals, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

      // If tc.callMethod is specified, invoke the registered custom method with support for ref/out parameters
      if (tc.callMethod) {
        const targetName = tc.callMethod.name;
        let entry = customMethods[targetName];
        if (!entry && tc.callMethod.allowAnySingleMethod && Object.keys(customMethods).length === 1) {
          entry = customMethods[Object.keys(customMethods)[0]];
        }
        if (!entry) {
          throw new Error(`Required method '${targetName}' was not found or could not be compiled.`);
        }
        const rawArgs = tc.callMethod.args || [];
        const refBoxes = {};
        const invokeArgs = entry.params.map((p, idx) => {
          const initialArg = rawArgs[idx];
          if (p.isRef || p.isOut) {
            let backing = initialArg;
            const box = {
              __isRef: true,
              get val() { return backing; },
              set val(_v) { backing = _v; }
            };
            refBoxes[p.name] = box;
            refBoxes[`arg_${idx}`] = box;
            return box;
          }
          return initialArg;
        });
        sandbox._returnValue = entry.fn(...invokeArgs);
        Object.keys(refBoxes).forEach(k => {
          sandbox._methodOutputs[k] = refBoxes[k].val;
        });
      }

      let passed = true;
      let actualSummary = [];
      let expectedSummary = [];

      Object.keys(tc.expected || {}).forEach(outKey => {
        const expectedVal = tc.expected[outKey];
        let actualVal = '';

        if (outKey === '_messages') {
          actualVal = sandbox._messages.join(' | ');
          const match = expectedVal instanceof RegExp
            ? expectedVal.test(actualVal)
            : actualVal.toLowerCase().includes(String(expectedVal).toLowerCase());
          actualSummary.push(`MessageBox: "${actualVal}"`);
          expectedSummary.push(`MessageBox: "${expectedVal}"`);
          if (!match) passed = false;
        } else if (outKey === '_returnValue') {
          actualVal = sandbox._returnValue;
          actualSummary.push(`Return = ${JSON.stringify(actualVal)}`);
          expectedSummary.push(`Return = ${JSON.stringify(expectedVal)}`);
          if (typeof expectedVal === 'number' && typeof actualVal === 'number') {
            if (Math.abs(actualVal - expectedVal) > 0.05) passed = false;
          } else if (String(actualVal).trim().toLowerCase() !== String(expectedVal).trim().toLowerCase()) {
            passed = false;
          }
        } else if (outKey.startsWith('_out_') || outKey.startsWith('_ref_')) {
          const paramKey = outKey.replace(/^_(?:out|ref)_/, '');
          actualVal = sandbox._methodOutputs[paramKey];
          actualSummary.push(`${paramKey} = ${JSON.stringify(actualVal)}`);
          expectedSummary.push(`${paramKey} = ${JSON.stringify(expectedVal)}`);
          if (typeof expectedVal === 'number' && typeof actualVal === 'number') {
            if (Math.abs(actualVal - expectedVal) > 0.05) passed = false;
          } else if (String(actualVal).trim().toLowerCase() !== String(expectedVal).trim().toLowerCase()) {
            passed = false;
          }
        } else if (outKey === '_fileWritten') {
          const fileLines = env.IFileSystem.files[expectedVal] || [];
          actualSummary.push(`File "${expectedVal}" (${fileLines.length} lines)`);
          expectedSummary.push(`File "${expectedVal}" created/updated`);
          if (!env.IFileSystem.exists(expectedVal) || fileLines.length === 0) passed = false;
        } else if (outKey === '_streamClosed') {
          const allClosed = env.IFileStreamSandbox.streams.length > 0 && env.IFileStreamSandbox.streams.every(s => s.closed);
          actualSummary.push(`Streams closed: ${allClosed}`);
          expectedSummary.push(`Streams closed: ${expectedVal}`);
          if (allClosed !== Boolean(expectedVal)) passed = false;
        } else if (outKey === '_modalShown') {
          const modalForm = env.IMultiFormSandbox.instances.find(f => f.shownModal);
          const hasModal = Boolean(modalForm);
          const noPostModalBug = hasModal && modalForm.postModalMutations.length === 0;
          actualSummary.push(`Modal ShowDialog: ${hasModal && noPostModalBug}`);
          expectedSummary.push(`Modal ShowDialog: ${expectedVal}`);
          if ((hasModal && noPostModalBug) !== Boolean(expectedVal)) passed = false;
        } else if (outKey.startsWith('lbl') || outKey.startsWith('txt')) {
          actualVal = (sandbox[outKey] && sandbox[outKey].Text !== undefined) ? String(sandbox[outKey].Text).trim() : '';
          actualSummary.push(`${outKey}.Text = "${actualVal}"`);
          expectedSummary.push(`${outKey}.Text = "${expectedVal}"`);

          const cleanAct = actualVal.replace(/[^-0-9.]/g, '');
          const cleanExp = String(expectedVal).replace(/[^-0-9.]/g, '');
          if (cleanExp && cleanAct && !/[a-zA-Z]{3,}/.test(String(expectedVal).replace(/^[R$\s]+/, ''))) {
            const numAct = parseFloat(cleanAct);
            const numExp = parseFloat(cleanExp);
            if (Math.abs(numAct - numExp) > 0.05) {
              passed = false;
            }
          } else if (!actualVal.toLowerCase().includes(String(expectedVal).toLowerCase())) {
            passed = false;
          }
        } else if (outKey.startsWith('pic') || outKey.startsWith('img')) {
          const expectedVis = (typeof expectedVal === 'object' && expectedVal.Visible !== undefined) ? Boolean(expectedVal.Visible) : Boolean(expectedVal);
          const actualVis = (sandbox[outKey] && sandbox[outKey].Visible !== undefined) ? Boolean(sandbox[outKey].Visible) : Boolean(sandbox[outKey]);
          actualSummary.push(`${outKey}.Visible = ${actualVis}`);
          expectedSummary.push(`${outKey}.Visible = ${expectedVis}`);
          if (actualVis !== expectedVis) passed = false;
        } else if (outKey.startsWith('rdo') || outKey.startsWith('rad') || outKey.startsWith('chk') || outKey.startsWith('cb')) {
          const expectedChecked = Boolean(expectedVal);
          const actualChecked = (sandbox[outKey] && sandbox[outKey].Checked !== undefined) ? Boolean(sandbox[outKey].Checked) : Boolean(sandbox[outKey]);
          actualSummary.push(`${outKey}.Checked = ${actualChecked}`);
          expectedSummary.push(`${outKey}.Checked = ${expectedChecked}`);
          if (actualChecked !== expectedChecked) passed = false;
        } else if (outKey.startsWith('btn')) {
          const expectedEnabled = (typeof expectedVal === 'object' && expectedVal !== null && expectedVal.Enabled !== undefined) ? Boolean(expectedVal.Enabled) : Boolean(expectedVal);
          const actualEnabled = (sandbox[outKey] && sandbox[outKey].Enabled !== undefined) ? Boolean(sandbox[outKey].Enabled) : true;
          actualSummary.push(`${outKey}.Enabled = ${actualEnabled}`);
          expectedSummary.push(`${outKey}.Enabled = ${expectedEnabled}`);
          if (actualEnabled !== expectedEnabled) passed = false;
        } else if (outKey === 'BackColor' || outKey === 'Form.BackColor') {
          const actualColor = sandbox.BackColor;
          actualSummary.push(`Form.BackColor = "${actualColor}"`);
          expectedSummary.push(`Form.BackColor = "${expectedVal}"`);
          if (String(actualColor).toLowerCase() !== String(expectedVal).toLowerCase()) passed = false;
        } else if (outKey === 'Form.Text' || outKey === '_formText') {
          const actualTitle = sandbox._formText;
          actualSummary.push(`Form.Text = "${actualTitle}"`);
          expectedSummary.push(`Form.Text = "${expectedVal}"`);
          if (String(actualTitle).toLowerCase() !== String(expectedVal).toLowerCase()) passed = false;
        } else if (outKey === '_isClosed' || outKey === 'this.Close') {
          actualSummary.push(`Form.Close called: ${sandbox._isClosed}`);
          expectedSummary.push(`Form.Close called: ${expectedVal}`);
          if (Boolean(sandbox._isClosed) !== Boolean(expectedVal)) passed = false;
        } else if (outKey.startsWith('lst') || outKey.startsWith('cbo')) {
          const items = sandbox[outKey] ? sandbox[outKey].Items._items : [];
          actualSummary.push(`${outKey} (${items.length} items)`);
          expectedSummary.push(`${outKey} contains target items`);
          if (typeof expectedVal === 'object' && expectedVal !== null) {
            if (expectedVal.minItems !== undefined && items.length < expectedVal.minItems) passed = false;
            if (expectedVal.exactItems !== undefined && items.length !== expectedVal.exactItems) passed = false;
            if (expectedVal.contains && !items.some(it => it.toLowerCase().includes(String(expectedVal.contains).toLowerCase()))) passed = false;
          } else if (Array.isArray(expectedVal)) {
            if (items.length < expectedVal.length) passed = false;
          }
        }
      });

      return {
        name: tc.name,
        passed: passed,
        actual: actualSummary.join(', ') || 'OK',
        expected: expectedSummary.join(', ') || 'Expected output',
        reason: passed ? 'All assertions passed.' : 'Output mismatch.',
        environment: env
      };
    } catch (err) {
      return {
        name: tc.name,
        passed: false,
        actual: 'Runtime Exception: ' + err.message,
        expected: tc.expectedDescription || 'Clean execution',
        reason: err.message,
        environment: env
      };
    }
  }

  /**
   * 4. COMPREHENSIVE CODEGRADE RUBRIC SCORER
   */
  function evaluateCodeGrade(code, scenario) {
    const rawCode = String(code || '');
    code = unwrapMethodWrapper(rawCode);
    const diagnostics = analyzeDiagnostics(rawCode, {
      controls: scenario.controls,
      requiresCurrency: scenario.requiresCurrency
    });

    const errors = diagnostics.filter(d => d.severity === 'error');
    const warnings = diagnostics.filter(d => d.severity === 'warning');

    const simResults = simulateExecution(rawCode, scenario.testCases || [], {
      controls: scenario.controls,
      expectedOutputs: scenario.expectedOutputs
    });

    let earnedPoints = 0;
    let totalPoints = 0;
    const rubricItems = [];

    // 1. Syntax & Compilation (25%)
    const syntaxWeight = scenario.weights ? scenario.weights.syntax : 25;
    totalPoints += syntaxWeight;
    const syntaxPassed = errors.length === 0;
    const syntaxEarned = syntaxPassed ? syntaxWeight : Math.max(0, syntaxWeight - (errors.length * 10));
    earnedPoints += syntaxEarned;
    rubricItems.push({
      category: 'Syntax & Compilation',
      title: 'Zero Compiler Errors (Roslyn CS Codes)',
      pointsEarned: syntaxEarned,
      pointsMax: syntaxWeight,
      passed: syntaxPassed,
      notes: syntaxPassed ? 'Clean C# syntax verified. Zero build-breaking errors.' : `${errors.length} fatal syntax error(s) detected.`
    });

    // 2. Input Validation & Safe Parsing (25%)
    const valWeight = scenario.weights ? scenario.weights.validation : 25;
    totalPoints += valWeight;
    const usesTryParse = /\b(?:decimal|Decimal|double|Double|int|Int32|bool|Boolean)\.TryParse\b/.test(code);
    const usesTryCatch = /\btry\s*\{[\s\S]*\}\s*catch\b/.test(code);
    const valPassed = (valWeight === 0 || scenario.requiresValidation === false) ? true : (usesTryParse || usesTryCatch);
    const valEarned = valPassed ? valWeight : Math.round(valWeight * 0.4);
    earnedPoints += valEarned;
    rubricItems.push({
      category: 'Data Validation',
      title: 'Safe Parsing (TryParse / Exception Handling)',
      pointsEarned: valEarned,
      pointsMax: valWeight,
      passed: valPassed,
      notes: valPassed ? 'Robust numeric validation implemented.' : 'Uses raw Parse() without exception guard (risks unhandled FormatException on non-numeric input).'
    });

    // 3. Test Cases & Business Logic (35%)
    const testWeight = scenario.weights ? scenario.weights.tests : 35;
    totalPoints += testWeight;
    const testPct = simResults.scorePct / 100;
    const testEarned = Math.round(testWeight * testPct);
    earnedPoints += testEarned;
    rubricItems.push({
      category: 'Business Logic & Execution',
      title: `Automated Test Cases (${simResults.testResults.filter(t => t.passed).length}/${(scenario.testCases || []).length} Passed)`,
      pointsEarned: testEarned,
      pointsMax: testWeight,
      passed: simResults.success,
      notes: simResults.success ? 'All runtime test assertions passed successfully.' : 'One or more edge case calculations failed.'
    });

    // 4. GUI & Formatting (15%)
    const guiWeight = scenario.weights ? scenario.weights.gui : 15;
    totalPoints += guiWeight;
    const formatsCurrency = !scenario.requiresCurrency || hasCurrencyFormatting(code);
    const nwuPrefixesOk = !warnings.some(w => w.code === 'NWU_CONV01');
    const guiPassed = formatsCurrency && nwuPrefixesOk;
    const guiEarned = guiPassed ? guiWeight : (formatsCurrency ? Math.round(guiWeight * 0.7) : Math.round(guiWeight * 0.3));
    earnedPoints += guiEarned;
    rubricItems.push({
      category: 'GUI Presentation',
      title: 'Formatting Specifiers & NWU Naming Standards',
      pointsEarned: guiEarned,
      pointsMax: guiWeight,
      passed: guiPassed,
      notes: guiPassed ? 'Standard Hungarian naming & format specifiers verified.' : 'Check currency formatting .ToString("C") and Hungarian prefixes.'
    });

    const totalPct = Math.round((earnedPoints / totalPoints) * 100);

    return {
      earnedPoints: earnedPoints,
      totalPoints: totalPoints,
      percentage: totalPct,
      gradeLetter: getGradeLetter(totalPct),
      isPass: totalPct >= 50,
      diagnostics: diagnostics,
      testResults: simResults.testResults,
      rubric: rubricItems
    };
  }

  function getGradeLetter(pct) {
    if (pct >= 75) return 'Distinction (A)';
    if (pct >= 60) return 'Merit (B)';
    if (pct >= 50) return 'Pass (C)';
    if (pct >= 40) return 'Supplementary Eligible (D)';
    return 'Fail (F)';
  }

  // --- C# Code Normalization & Comparison Module ---
  class CSharpCodeAuditor {
    static normalizeLine(line) {
      if (!line) return "";
      return line
        .replace(/\/\/.*/g, "")                                       // Strip single-line comments
        .trim()                                                       // Strip leading/trailing indentations
        .replace(/\s*([;,\(\)\{\}\[\]\+\-\*\/=<>!&\|\$]+)\s*/g, "$1") // Standardize operators & punctuation
        .replace(/\s+/g, " ");                                        // Collapse remaining internal spaces
    }

    static tokenizeCode(codeString) {
      if (!codeString) return [];
      return codeString
        .split(/\r?\n/)
        .map(line => CSharpCodeAuditor.normalizeLine(line))
        .filter(line => line.length > 0);
    }

    static getIndexedLines(codeString) {
      if (!codeString) return [];
      const rawLines = codeString.split(/\r?\n/);
      const result = [];
      rawLines.forEach((raw, idx) => {
        const norm = CSharpCodeAuditor.normalizeLine(raw);
        if (norm.length > 0) {
          result.push({
            lineNum: idx + 1,
            raw: raw,
            norm: norm
          });
        }
      });
      return result;
    }

    static computeLcs(seqA, seqB) {
      const m = seqA.length;
      const n = seqB.length;
      const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (seqA[i] === seqB[j]) {
            dp[i + 1][j + 1] = dp[i][j] + 1;
          } else {
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
          }
        }
      }
      const matchedA = new Set();
      const matchedB = new Set();
      let i = m, j = n;
      while (i > 0 && j > 0) {
        if (seqA[i - 1] === seqB[j - 1]) {
          matchedA.add(i - 1);
          matchedB.add(j - 1);
          i--;
          j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
          i--;
        } else {
          j--;
        }
      }
      return { matchedA, matchedB };
    }

    static gradeSubmission(studentCode, canonicalSolution, errorCatalog, initialCode = "") {
      const studentTokens = CSharpCodeAuditor.tokenizeCode(studentCode);
      const targetTokens = CSharpCodeAuditor.tokenizeCode(canonicalSolution);

      const isPerfectMatch = (studentTokens.join("\n") === targetTokens.join("\n"));

      const studentIndexed = CSharpCodeAuditor.getIndexedLines(studentCode);
      const targetIndexed = CSharpCodeAuditor.getIndexedLines(canonicalSolution);
      const initialIndexed = CSharpCodeAuditor.getIndexedLines(initialCode);

      const sNorms = studentIndexed.map(x => x.norm);
      const tNorms = targetIndexed.map(x => x.norm);
      const { matchedA: matchedTargets, matchedB: matchedStudents } = CSharpCodeAuditor.computeLcs(tNorms, sNorms);

      const rawStudentLines = (studentCode || "").split(/\r?\n/);
      const rawTargetLines = (canonicalSolution || "").split(/\r?\n/);

      let passedChecks = 0;
      let earnedMarks = 0;
      let totalMarks = 0;
      const feedbackReport = [];
      const fixedBugSet = new Set();

      errorCatalog.forEach((bug, index) => {
        const bugMarks = bug.marks || 5;
        totalMarks += bugMarks;

        let isFixed = false;

        if (isPerfectMatch) {
          isFixed = true;
        } else {
          // 1. Direct target line alignment via LCS
          const tIdx = targetIndexed.findIndex(t => t.lineNum === bug.line);
          if (tIdx !== -1 && matchedTargets.has(tIdx)) {
            isFixed = true;
          }

          // 2. Normalized token check fallback for multi-line or distinct expressions
          if (!isFixed && bug.fixedToken && bug.buggyToken) {
            const normFixed = CSharpCodeAuditor.normalizeLine(bug.fixedToken);
            const normBuggy = CSharpCodeAuditor.normalizeLine(bug.buggyToken);
            const normStudentText = sNorms.join("\n");

            if (normFixed.length > 1 && normFixed !== "}" && normFixed !== "break;") {
              if (normStudentText.includes(normFixed)) {
                if (normBuggy !== normFixed && !normStudentText.includes(normBuggy)) {
                  isFixed = true;
                } else if (normBuggy.length > 0 && !normStudentText.includes(normBuggy)) {
                  isFixed = true;
                }
              }
            }
          }
        }

        if (isFixed) {
          passedChecks++;
          earnedMarks += bugMarks;
          fixedBugSet.add(bug.id);
          feedbackReport.push({
            id: bug.id,
            status: "SUCCESS",
            line: bug.line,
            category: bug.category || "General",
            marks: bugMarks,
            message: `[PASSED] Fixed ${bug.description} on line ${bug.line} (+${bugMarks} marks)`
          });
        } else {
          const hintText = (bug.syntaxHint || bug.hint || bug.description).replace(/\.$/, '');
          const formattedHint = hintText.charAt(0).toLowerCase() + hintText.slice(1);
          feedbackReport.push({
            id: bug.id,
            status: "ERROR",
            line: bug.line,
            category: bug.category || "General",
            marks: 0,
            message: `[FAILED] Syntax defect remains near line ${bug.line}: ${formattedHint}`
          });
        }
      });

      // Regressions check
      const regressions = [];
      if (initialIndexed.length > 0) {
        targetIndexed.forEach((tItem, tIdx) => {
          const lineNum = tItem.lineNum;
          const isPlantedBug = errorCatalog.some(b => b.line === lineNum);
          if (!isPlantedBug) {
            const initMatch = initialIndexed.find(init => init.norm === tItem.norm);
            if (initMatch) {
              if (!matchedTargets.has(tIdx)) {
                const regMsg = `[WARNING] You altered a line that was already correct (line ${lineNum})`;
                regressions.push({
                  line: lineNum,
                  expected: tItem.raw,
                  actual: "",
                  message: regMsg
                });
                feedbackReport.push({
                  id: `reg_line_${lineNum}`,
                  status: "WARNING",
                  line: lineNum,
                  marks: 0,
                  message: regMsg
                });
              }
            }
          }
        });
      }

      // Visual line diff inspector breakdown
      const maxLines = Math.max(rawStudentLines.length, rawTargetLines.length);
      const lineDiff = [];
      for (let i = 0; i < maxLines; i++) {
        const lineNum = i + 1;
        const sRaw = rawStudentLines[i] !== undefined ? rawStudentLines[i] : "";
        const tRaw = rawTargetLines[i] !== undefined ? rawTargetLines[i] : "";

        const bugOnLine = errorCatalog.find(b => b.line === lineNum);
        let lineStatus = "clean";
        let note = "";

        if (bugOnLine) {
          if (fixedBugSet.has(bugOnLine.id)) {
            lineStatus = "fixed";
            note = `Resolved: ${bugOnLine.description}`;
          } else {
            lineStatus = "buggy";
            note = `Defect: ${bugOnLine.hint || bugOnLine.description}`;
          }
        } else {
          const isReg = regressions.some(r => r.line === lineNum);
          if (isReg) {
            lineStatus = "regression";
            note = "Altered correct line";
          }
        }

        lineDiff.push({
          line: lineNum,
          studentContent: sRaw,
          targetContent: tRaw,
          status: lineStatus,
          note: note,
          bug: bugOnLine || null
        });
      }

      const score = errorCatalog.length > 0 ? Math.round((passedChecks / errorCatalog.length) * 100) : 100;

      return {
        score,
        earnedMarks,
        totalMarks,
        isPerfectMatch,
        totalBugs: errorCatalog.length,
        fixedBugs: passedChecks,
        regressions,
        feedback: feedbackReport,
        lineDiff
      };
    }

    static audit(studentCode, scenario) {
      if (!scenario) return { score: 0, fixedBugs: 0, totalBugs: 0, feedback: [] };
      return CSharpCodeAuditor.gradeSubmission(
        studentCode,
        scenario.canonicalSolution || scenario.canonicalCode || '',
        scenario.errorCatalog || [],
        scenario.initialCode || scenario.buggyCode || ''
      );
    }
  }

  const FRAMEWORK_TYPES = new Set([
    'Form', 'Form1', 'Form2', 'SummaryForm', 'ReceiptForm', 'InvoiceForm', 'DetailsForm',
    'EventArgs', 'FormClosingEventArgs', 'MessageBox', 'MessageBoxButtons', 'MessageBoxIcon',
    'DialogResult', 'PictureBoxSizeMode', 'Math', 'Convert', 'Random', 'File',
    'StreamWriter', 'StreamReader', 'OpenFileDialog', 'SaveFileDialog', 'Color',
    'Application', 'ListBox', 'Button', 'Label', 'TextBox', 'RadioButton', 'CheckBox',
    'GroupBox', 'PictureBox', 'Exception', 'FormatException', 'DivideByZeroException'
  ]);

  function escapeHtmlSafe(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlightCSharp(rawCode) {
    if (!rawCode) return '';
    const src = String(rawCode);
    const tokenPattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|\$@"[^"]*"|@"[^"]*"|\$"(?:[^"\\]|\\.)*"|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b\d+(?:\.\d+)?[mMdDfF]?\b|\b[a-zA-Z_][a-zA-Z0-9_]*\b)/g;
    let out = '';
    let last = 0;
    let m;
    while ((m = tokenPattern.exec(src)) !== null) {
      if (m.index > last) {
        out += escapeHtmlSafe(src.slice(last, m.index));
      }
      const tok = m[0];
      const nextSlice = src.slice(tokenPattern.lastIndex);
      if (tok.startsWith('//') || tok.startsWith('/*')) {
        out += `<span class="tok-cmt">${escapeHtmlSafe(tok)}</span>`;
      } else if (tok.startsWith('"') || tok.startsWith("'") || tok.startsWith('$') || tok.startsWith('@')) {
        out += `<span class="tok-str">${escapeHtmlSafe(tok)}</span>`;
      } else if (/^\d/.test(tok)) {
        out += `<span class="tok-num">${escapeHtmlSafe(tok)}</span>`;
      } else if (CSHARP_PRIMITIVE_TYPES.has(tok) || FRAMEWORK_TYPES.has(tok)) {
        out += `<span class="tok-type">${escapeHtmlSafe(tok)}</span>`;
      } else if (CSHARP_KEYWORDS.has(tok)) {
        out += `<span class="tok-kw">${escapeHtmlSafe(tok)}</span>`;
      } else if (/^\s*\(/.test(nextSlice)) {
        out += `<span class="tok-fn">${escapeHtmlSafe(tok)}</span>`;
      } else if (/^(?:btn|txt|lbl|lst|rdo|rad|chk|cb|grp|pic|ofd|sfd)[A-Z]/.test(tok)) {
        out += `<span class="tok-ctrl">${escapeHtmlSafe(tok)}</span>`;
      } else {
        out += escapeHtmlSafe(tok);
      }
      last = tokenPattern.lastIndex;
    }
    if (last < src.length) {
      out += escapeHtmlSafe(src.slice(last));
    }
    return out;
  }

  /**
   * 5. LAYER 2 — SYNTAX, TOKEN & STRUCTURAL NORMALIZATION ENGINE
   * Recognizes valid C# solutions across syntactic variations without exact-string matching.
   */
  const PRESERVED_MEMBER_IDENTIFIERS = new Set([
    'Text', 'Checked', 'Visible', 'Enabled', 'ReadOnly', 'Items', 'Count',
    'SelectedIndex', 'SelectedItem', 'ForeColor', 'BackColor', 'SizeMode',
    'Add', 'Clear', 'Remove', 'RemoveAt', 'Insert', 'Contains', 'IndexOf',
    'Focus', 'Close', 'Hide', 'Show', 'ShowDialog', 'ToString', 'TryParse',
    'Parse', 'Format', 'IsNullOrEmpty', 'IsNullOrWhiteSpace', 'Trim',
    'ToUpper', 'ToLower', 'StartsWith', 'EndsWith', 'Substring', 'Replace',
    'CompareTo', 'PadLeft', 'PadRight', 'Length', 'OpenText', 'CreateText',
    'AppendText', 'ReadLine', 'ReadToEnd', 'WriteLine', 'Write', 'EndOfStream',
    'FileName', 'InitialDirectory', 'Filter', 'OK', 'Cancel', 'Yes', 'No',
    'Next', 'NextDouble', 'Pow', 'Sqrt', 'Round', 'Abs', 'Max', 'Min',
    'Ceiling', 'Floor', 'Truncate', 'ToDecimal', 'ToDouble', 'ToInt32',
    'ToBoolean', 'Message', 'Cancel'
  ]);

  function isControlIdentifier(ident, extraControls = []) {
    if (!ident) return false;
    if (extraControls && extraControls.includes(ident)) return true;
    return /^(?:btn|txt|lbl|lst|rdo|rad|chk|cb|grp|pic|img|tmr|pnl|ofd|sfd|cbo)[A-Z_]/.test(ident);
  }

  function normalizeCSharp(code, options = {}) {
    if (!code || !String(code).trim()) return '';
    const preserveControls = options.controls || [];
    const preserveMethods = new Set(options.preserveMethods || []);
    const doAlphaRename = options.alphaRename !== false;

    let src = unwrapMethodWrapper(String(code));

    // Extract custom method names to preserve them unless alphaRenameMethods is requested
    const extracted = extractCSharpMethods(src);
    extracted.methods.forEach(m => preserveMethods.add(m.name));

    // 1. Strip single-line and multi-line comments using tokenizer
    const rawTokens = tokenize(src).filter(t => t.type !== 'comment');
    if (rawTokens.length === 0) return '';

    // Rebuild clean code from non-comment tokens with canonical spacing
    let clean = '';
    for (let i = 0; i < rawTokens.length; i++) {
      const curr = rawTokens[i];
      const prev = i > 0 ? rawTokens[i - 1] : null;
      if (prev) {
        const noSpaceBefore = [';', ',', ')', ']', '}'].includes(curr.value) || curr.value === '.' || prev.value === '.' || prev.value === '(' || prev.value === '[' || prev.value === '!';
        if (!noSpaceBefore) clean += ' ';
      }
      clean += curr.value;
    }

    // 2. Normalize inline out declarations: out decimal x -> out x
    clean = clean.replace(/\bout\s+(?:decimal|Decimal|double|Double|int|Int32|string|String|bool|Boolean|float|long|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g, 'out $1');

    // 3. Normalize numeric suffixes: 100.00m -> 100m, 0.15M -> 0.15m
    clean = clean.replace(/\b(\d+)\.0+[mMdDfF]?\b/g, '$1');
    clean = clean.replace(/\b(\d+\.\d+?)[mMdDfF]\b/g, '$1');

    // 4. Normalize ToString format specifiers: .ToString("C2") / .ToString("c") -> .ToString("C")
    clean = clean.replace(/\.ToString\s*\(\s*["']c2?["']\s*\)/gi, '.ToString("C")');
    clean = clean.replace(/\.ToString\s*\(\s*["']f(\d*)["']\s*\)/gi, (_m, d) => `.ToString("F${d || 2}")`);
    clean = clean.replace(/\.ToString\s*\(\s*["']n(\d*)["']\s*\)/gi, (_m, d) => `.ToString("N${d || 2}")`);
    clean = clean.replace(/\.ToString\s*\(\s*["']p(\d*)["']\s*\)/gi, (_m, d) => `.ToString("P${d || 1}")`);

    // 5. Normalize equivalent increments/decrements: x = x + 1, x += 1, ++x -> x++
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\1\s*\+\s*1\b/g, '$1++');
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\+=\s*1\b/g, '$1++');
    clean = clean.replace(/\+\+\s*([a-zA-Z_][a-zA-Z0-9_]*)\b/g, '$1++');
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\1\s*-\s*1\b/g, '$1--');
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*-=\s*1\b/g, '$1--');
    clean = clean.replace(/--\s*([a-zA-Z_][a-zA-Z0-9_]*)\b/g, '$1--');

    // 6. Normalize equivalent compound assignments: x = x + y; -> x += y;
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\1\s*([+\-*/])\s*([^;)]+)(?=[;)])/g, '$1 $2= $3');

    // 7. Normalize equivalent boolean checks: x == true -> x, x == false -> !x
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_.]*)\s*==\s*true\b/g, '$1');
    clean = clean.replace(/\btrue\s*==\s*([a-zA-Z_][a-zA-Z0-9_.]*)\b/g, '$1');
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_.]*)\s*!=\s*false\b/g, '$1');
    clean = clean.replace(/\bfalse\s*!=\s*([a-zA-Z_][a-zA-Z0-9_.]*)\b/g, '$1');
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_.]*)\s*==\s*false\b/g, '!$1');
    clean = clean.replace(/\bfalse\s*==\s*([a-zA-Z_][a-zA-Z0-9_.]*)\b/g, '!$1');
    clean = clean.replace(/\b([a-zA-Z_][a-zA-Z0-9_.]*)\s*!=\s*true\b/g, '!$1');
    clean = clean.replace(/\btrue\s*!=\s*([a-zA-Z_][a-zA-Z0-9_.]*)\b/g, '!$1');

    // 8. Normalize safe commutative comparisons where literal is on the left: 0 < x -> x > 0
    const flipOp = { '<': '>', '>': '<', '<=': '>=', '>=': '<=', '==': '==', '!=': '!=' };
    clean = clean.replace(/(?<![a-zA-Z0-9_.])(-?\d+(?:\.\d+)?)\s*(<=|>=|==|!=|<|>)\s*([a-zA-Z_][a-zA-Z0-9_.]*)/g,
      (_m, lit, op, ident) => `${ident} ${flipOp[op] || op} ${lit}`);

    // 9. Scope-aware alpha-renaming of local variables and parameters
    if (doAlphaRename) {
      const toks = tokenize(clean);
      const localVars = new Map();
      let varCounter = 0;

      const registerVar = (ident) => {
        if (!ident) return;
        if (CSHARP_KEYWORDS.has(ident) || CSHARP_PRIMITIVE_TYPES.has(ident) || FRAMEWORK_TYPES.has(ident)) return;
        if (PRESERVED_MEMBER_IDENTIFIERS.has(ident) || preserveMethods.has(ident)) return;
        if (isControlIdentifier(ident, preserveControls)) return;
        if (!localVars.has(ident)) {
          localVars.set(ident, `VAR_${varCounter++}`);
        }
      };

      for (let i = 0; i < toks.length; i++) {
        const t = toks[i];
        const prev = i > 0 ? toks[i - 1] : null;
        const next = i + 1 < toks.length ? toks[i + 1] : null;

        if (t.type === 'identifier') {
          // Preceded by a type or 'out' / 'ref'
          if (prev && (CSHARP_PRIMITIVE_TYPES.has(prev.value) || FRAMEWORK_TYPES.has(prev.value) || prev.value === 'var' || prev.value === 'out' || prev.value === 'ref')) {
            if (!next || next.value !== '(') {
              registerVar(t.value);
            }
          }
          // Multi-declarator on same line: int a, b;
          if (prev && prev.value === ',' && i >= 2 && localVars.has(toks[i - 2].value)) {
            registerVar(t.value);
          }
        }
      }

      const renamedTokens = toks.map((t, i) => {
        const prev = i > 0 ? toks[i - 1] : null;
        const next = i + 1 < toks.length ? toks[i + 1] : null;
        if (t.type === 'identifier' && localVars.has(t.value)) {
          if (prev && prev.value === '.') return t.value;
          if (next && next.value === '(' && !preserveMethods.has(t.value)) return t.value;
          return localVars.get(t.value);
        }
        return t.value;
      });

      clean = renamedTokens.join(' ')
        .replace(/\s*([;,\(\)\{\}\[\]\.]+)\s*/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
    } else {
      clean = clean
        .replace(/\s*([;,\(\)\{\}\[\]\.]+)\s*/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
    }

    return clean;
  }

  function compareStructuralEquivalence(studentCode, referenceCode, options = {}) {
    const normStudent = normalizeCSharp(studentCode, options);
    const normRef = normalizeCSharp(referenceCode, options);
    if (!normStudent || !normRef) {
      return { isEquivalent: false, similarity: 0, normStudent, normRef };
    }
    if (normStudent === normRef) {
      return { isEquivalent: true, similarity: 1, normStudent, normRef };
    }
    const sToks = normStudent.split(/([;,\(\)\{\}\[\]\s]+)/).filter(x => x && x.trim());
    const rToks = normRef.split(/([;,\(\)\{\}\[\]\s]+)/).filter(x => x && x.trim());
    const { matchedA } = CSharpCodeAuditor.computeLcs(rToks, sToks);
    const similarity = rToks.length > 0 ? matchedA.size / rToks.length : 0;
    return {
      isEquivalent: similarity >= 0.92,
      similarity: Math.round(similarity * 100) / 100,
      normStudent,
      normRef
    };
  }

  /**
   * 6. LAYER 3 — NWU MEMORANDUM-BASED PARTIAL MARKING ENGINE
   * Supports code-cloze, code-snippet, and code-full assessment with granular partial credit.
   */
  function normalizeClozeFragment(fragment) {
    if (fragment === undefined || fragment === null) return '';
    let s = String(fragment).trim();
    if (s.endsWith(';')) s = s.slice(0, -1).trim();
    return s
      .replace(/\s*([,\(\)\{\}\[\]\.\+\-\*\/=<>!&\|]+)\s*/g, '$1')
      .replace(/\s+/g, ' ')
      .replace(/\.ToString\(["']c2?["']\)/gi, '.ToString("C")')
      .trim();
  }

  function evaluateClozeQuestion(question, blankAnswers = {}, options = {}) {
    const blanks = Array.isArray(question.blanks) ? question.blanks : [];
    const maxMarks = Number(question.marks) || blanks.reduce((acc, b) => acc + (Number(b.marks) || 1), 0) || 1;
    let earnedMarks = 0;
    const blankResults = [];
    const rubricResults = [];

    blanks.forEach((blank, idx) => {
      const bId = blank.id || `blank_${idx + 1}`;
      const bMarks = Number(blank.marks) || 1;
      let rawStudent = '';
      if (Array.isArray(blankAnswers)) {
        rawStudent = blankAnswers[idx] !== undefined ? String(blankAnswers[idx]) : '';
      } else if (blankAnswers && typeof blankAnswers === 'object') {
        if (blankAnswers[bId] !== undefined) rawStudent = String(blankAnswers[bId]);
        else if (blankAnswers[idx] !== undefined) rawStudent = String(blankAnswers[idx]);
        else if (blankAnswers[String(idx + 1)] !== undefined) rawStudent = String(blankAnswers[String(idx + 1)]);
      }

      const studentTrimmed = rawStudent.trim();
      const acceptedList = [blank.expected, ...(Array.isArray(blank.alternatives) ? blank.alternatives : [])].filter(Boolean);
      const normStudent = normalizeClozeFragment(studentTrimmed);
      const normStudentAlpha = normalizeCSharp(studentTrimmed, { alphaRename: false });

      let isExactMatch = false;
      let isCasingOnlyDefect = false;

      for (const candidate of acceptedList) {
        const normCand = normalizeClozeFragment(candidate);
        const normCandAlpha = normalizeCSharp(candidate, { alphaRename: false });
        if (normStudent && (normStudent === normCand || (normStudentAlpha && normStudentAlpha === normCandAlpha))) {
          isExactMatch = true;
          break;
        }
        if (normStudent && normStudent.toLowerCase() === normCand.toLowerCase()) {
          if (blank.caseInsensitive) {
            isExactMatch = true;
            break;
          }
          isCasingOnlyDefect = true;
        }
      }

      let awarded = 0;
      let status = 'failed';
      let feedback = '';

      if (!studentTrimmed) {
        awarded = 0;
        status = 'failed';
        feedback = `Blank ${idx + 1} was left empty. Expected: ${blank.expected}`;
      } else if (isExactMatch) {
        awarded = bMarks;
        status = 'passed';
        feedback = blank.explanation || `Correct C# syntax and logic for Blank ${idx + 1}.`;
      } else if (isCasingOnlyDefect) {
        awarded = Math.round((bMarks * 0.5) * 2) / 2;
        status = awarded > 0 ? 'partial' : 'failed';
        feedback = `Identifier or keyword matches '${blank.expected}' except for C# case sensitivity (C# is strictly case-sensitive).`;
      } else {
        awarded = 0;
        status = 'failed';
        feedback = `Incorrect entry '${studentTrimmed}'. Expected '${blank.expected}'${acceptedList.length > 1 ? ` (or ${acceptedList.slice(1).join(' / ')})` : ''}.`;
      }

      earnedMarks += awarded;
      blankResults.push({
        id: bId,
        index: idx,
        label: blank.label || `Blank ${idx + 1}`,
        studentValue: studentTrimmed,
        expected: blank.expected,
        acceptedAlternatives: acceptedList,
        earnedMarks: awarded,
        maxMarks: bMarks,
        status: status,
        isCorrect: status === 'passed',
        feedback: feedback
      });

      rubricResults.push({
        id: bId,
        criterion: blank.criterion || `Blank ${idx + 1}: ${blank.hint || blank.expected}`,
        category: 'Code Completion',
        availableMarks: bMarks,
        earnedMarks: awarded,
        status: status,
        explanation: feedback,
        expectedBehavior: blank.expected,
        actualBehavior: studentTrimmed || '(Empty)',
        line: blank.line || (idx + 1),
        suggestion: status === 'passed' ? '' : `Use ${blank.expected}`
      });
    });

    earnedMarks = Math.min(maxMarks, Math.round(earnedMarks * 2) / 2);
    const percentage = maxMarks > 0 ? Math.round((earnedMarks / maxMarks) * 100) : 0;

    return {
      questionType: 'code-cloze',
      earnedMarks,
      maxMarks,
      percentage,
      isCorrect: earnedMarks >= maxMarks,
      isPartial: earnedMarks > 0 && earnedMarks < maxMarks,
      blankResults,
      rubricResults,
      testResults: [],
      diagnostics: [],
      unsupportedConstructs: [],
      modelSolution: options.revealSolution === false ? undefined : (question.modelSolution || '')
    };
  }

  function evaluateRubricCriterion(item, rawCode, normCode, simResults, diagnostics, question) {
    const avail = Number(item.marks) || 1;
    const checkType = item.checkType || 'pattern';

    // 1. Syntax check criterion
    if (checkType === 'syntax') {
      const errors = diagnostics.filter(d => d.severity === 'error');
      if (errors.length === 0) {
        return {
          id: item.id,
          criterion: item.criterion,
          category: item.category || 'Syntax & Compilation',
          availableMarks: avail,
          earnedMarks: avail,
          status: 'passed',
          explanation: 'Code compiles cleanly with zero C# syntax errors.',
          expectedBehavior: 'Valid C# statement syntax and balanced delimiters',
          actualBehavior: '0 compiler errors',
          line: 1,
          suggestion: ''
        };
      }
      const deduction = Math.min(avail, errors.length * Math.max(0.5, avail * 0.5));
      const earned = Math.max(0, Math.round((avail - deduction) * 2) / 2);
      return {
        id: item.id,
        criterion: item.criterion,
        category: item.category || 'Syntax & Compilation',
        availableMarks: avail,
        earnedMarks: earned,
        status: earned > 0 ? 'partial' : 'failed',
        explanation: `${errors[0].code} on line ${errors[0].line}: ${errors[0].message}`,
        expectedBehavior: 'Zero C# syntax errors',
        actualBehavior: `${errors.length} syntax error(s) detected`,
        line: errors[0].line || 1,
        suggestion: item.suggestion || 'Ensure every statement ends with a semicolon (;) and all braces/parentheses are balanced.'
      };
    }

    // 2. Behavioral test case criterion
    if (checkType === 'testCase' || checkType === 'behavioral') {
      const tcResults = (simResults && simResults.testResults) || [];
      if (item.testCaseIndex !== undefined && tcResults[item.testCaseIndex]) {
        const tr = tcResults[item.testCaseIndex];
        if (tr.passed) {
          return {
            id: item.id,
            criterion: item.criterion,
            category: item.category || 'Behavioral Execution',
            availableMarks: avail,
            earnedMarks: avail,
            status: 'passed',
            explanation: `Passed runtime verification: ${tr.name}.`,
            expectedBehavior: tr.expected,
            actualBehavior: tr.actual,
            line: 1,
            suggestion: ''
          };
        }
      } else if (tcResults.length > 0) {
        const passedCount = tcResults.filter(t => t.passed).length;
        if (passedCount === tcResults.length) {
          return {
            id: item.id,
            criterion: item.criterion,
            category: item.category || 'Behavioral Execution',
            availableMarks: avail,
            earnedMarks: avail,
            status: 'passed',
            explanation: `All ${tcResults.length} behavioral test cases passed.`,
            expectedBehavior: 'All test vectors pass',
            actualBehavior: `${passedCount}/${tcResults.length} passed`,
            line: 1,
            suggestion: ''
          };
        } else if (passedCount > 0) {
          const partialMarks = Math.round(((avail * passedCount) / tcResults.length) * 2) / 2;
          const firstFailed = tcResults.find(t => !t.passed);
          return {
            id: item.id,
            criterion: item.criterion,
            category: item.category || 'Behavioral Execution',
            availableMarks: avail,
            earnedMarks: partialMarks,
            status: partialMarks > 0 ? 'partial' : 'failed',
            explanation: `${passedCount}/${tcResults.length} test cases passed. Failed: ${firstFailed ? firstFailed.name : ''}`,
            expectedBehavior: firstFailed ? firstFailed.expected : 'Expected output',
            actualBehavior: firstFailed ? firstFailed.actual : 'Mismatch',
            line: 1,
            suggestion: item.suggestion || 'Check boundary conditions and formula calculations.'
          };
        }
      }
      // If behavioral test failed but item also has fallback patterns, check if student wrote partial logic
      if (item.patterns || item.pattern) {
        const pats = item.patterns || [item.pattern];
        const matchedPat = pats.some(p => {
          const re = p instanceof RegExp ? p : new RegExp(p, 'i');
          return re.test(rawCode) || re.test(normCode);
        });
        if (matchedPat) {
          const partialAward = Math.round((avail * 0.5) * 2) / 2;
          return {
            id: item.id,
            criterion: item.criterion,
            category: item.category || 'Memorandum Checkpoint',
            availableMarks: avail,
            earnedMarks: partialAward,
            status: partialAward > 0 ? 'partial' : 'failed',
            explanation: item.errorExplanation || 'Required C# construct is present, but runtime output did not match all test cases.',
            expectedBehavior: item.expectedBehavior || 'Accurate runtime output',
            actualBehavior: 'Construct present with runtime/syntax discrepancy',
            line: 1,
            suggestion: item.suggestion || 'Verify your calculation and variable assignments.'
          };
        }
      }
      const failedTc = (item.testCaseIndex !== undefined && tcResults[item.testCaseIndex]) ? tcResults[item.testCaseIndex] : tcResults[0];
      return {
        id: item.id,
        criterion: item.criterion,
        category: item.category || 'Behavioral Execution',
        availableMarks: avail,
        earnedMarks: 0,
        status: 'failed',
        explanation: item.errorExplanation || (failedTc ? `Test failed: ${failedTc.reason}` : 'Required runtime behavior was not produced.'),
        expectedBehavior: item.expectedBehavior || (failedTc ? failedTc.expected : 'Expected output'),
        actualBehavior: failedTc ? failedTc.actual : 'Incorrect output',
        line: 1,
        suggestion: item.suggestion || 'Review the memorandum requirements for this calculation.'
      };
    }

    // 3. Pattern / Memorandum checkpoint criterion (supports multiple equivalent patterns)
    const patterns = item.patterns || (item.pattern ? [item.pattern] : []);
    const allPatterns = item.allPatterns || [];
    let matched = false;
    let partialMatched = false;

    if (allPatterns.length > 0) {
      const matchCount = allPatterns.filter(p => {
        const re = p instanceof RegExp ? p : new RegExp(p, 'i');
        return re.test(rawCode) || re.test(normCode);
      }).length;
      if (matchCount === allPatterns.length) matched = true;
      else if (matchCount > 0) partialMatched = true;
    } else if (patterns.length > 0) {
      matched = patterns.some(p => {
        const re = p instanceof RegExp ? p : new RegExp(p, 'i');
        return re.test(rawCode) || re.test(normCode);
      });
      if (!matched && item.partialPattern) {
        const pRe = item.partialPattern instanceof RegExp ? item.partialPattern : new RegExp(item.partialPattern, 'i');
        partialMatched = pRe.test(rawCode) || pRe.test(normCode);
      }
    }

    // Check forbidden anti-patterns (e.g., setting modal control AFTER ShowDialog)
    if (matched && item.forbiddenPattern) {
      const fRe = item.forbiddenPattern instanceof RegExp ? item.forbiddenPattern : new RegExp(item.forbiddenPattern, 'i');
      if (fRe.test(rawCode)) {
        matched = false;
        partialMatched = true;
      }
    }

    if (matched) {
      return {
        id: item.id,
        criterion: item.criterion,
        category: item.category || 'Memorandum Checkpoint',
        availableMarks: avail,
        earnedMarks: avail,
        status: 'passed',
        explanation: item.passExplanation || `Verified: ${item.criterion}.`,
        expectedBehavior: item.expectedBehavior || item.criterion,
        actualBehavior: 'Requirement satisfied',
        line: 1,
        suggestion: ''
      };
    }

    if (partialMatched) {
      const partMarks = Math.round((avail * 0.5) * 2) / 2;
      return {
        id: item.id,
        criterion: item.criterion,
        category: item.category || 'Memorandum Checkpoint',
        availableMarks: avail,
        earnedMarks: partMarks,
        status: partMarks > 0 ? 'partial' : 'failed',
        explanation: item.partialExplanation || item.errorExplanation || `Partially satisfied: ${item.criterion}.`,
        expectedBehavior: item.expectedBehavior || item.criterion,
        actualBehavior: 'Partial implementation detected',
        line: 1,
        suggestion: item.suggestion || 'Complete all parts of this memorandum step.'
      };
    }

    return {
      id: item.id,
      criterion: item.criterion,
      category: item.category || 'Memorandum Checkpoint',
      availableMarks: avail,
      earnedMarks: 0,
      status: 'failed',
      explanation: item.errorExplanation || `Missing or incorrect implementation for: ${item.criterion}.`,
      expectedBehavior: item.expectedBehavior || item.criterion,
      actualBehavior: 'Not found in submission',
      line: 1,
      suggestion: item.suggestion || 'Refer to the model solution for the required C# statement.'
    };
  }

  function evaluateCodingQuestion(question, studentCode, options = {}) {
    const qType = question.questionType || 'code-full';
    if (qType === 'code-cloze') {
      return evaluateClozeQuestion(question, studentCode, options);
    }

    const maxMarks = Number(question.marks) || (Array.isArray(question.rubric) ? question.rubric.reduce((s, r) => s + (Number(r.marks) || 0), 0) : 10);
    const rawStr = String(studentCode || '');
    const nonCommentTokens = tokenize(rawStr).filter(t => t.type !== 'comment');

    // Empty or comment-only submission receives 0 marks immediately
    if (!rawStr.trim() || nonCommentTokens.length === 0) {
      const emptyRubric = (question.rubric || []).map((r, i) => ({
        id: r.id || `crit_${i + 1}`,
        criterion: r.criterion,
        category: r.category || 'Memorandum Checkpoint',
        availableMarks: Number(r.marks) || 1,
        earnedMarks: 0,
        status: 'failed',
        explanation: 'No executable C# code was submitted.',
        expectedBehavior: r.expectedBehavior || r.criterion,
        actualBehavior: '(Empty submission)',
        line: 1,
        suggestion: r.suggestion || 'Write the required C# statements in the editor.'
      }));
      return {
        questionType: qType,
        answered: false,
        earnedMarks: 0,
        maxMarks,
        percentage: 0,
        isCorrect: false,
        isPartial: false,
        rubricResults: emptyRubric,
        testResults: (question.testCases || []).filter(tc => !tc.isHidden).map(tc => ({
          name: tc.name,
          passed: false,
          expected: tc.expectedDescription || 'Valid output',
          actual: '(No code submitted)',
          reason: 'Empty submission'
        })),
        diagnostics: [{
          code: 'CS1525',
          severity: 'error',
          line: 1,
          col: 1,
          message: 'No executable C# statements submitted.'
        }],
        unsupportedConstructs: [],
        normalizedStudentCode: '',
        modelSolution: options.revealSolution === false ? undefined : (question.modelSolution || '')
      };
    }

    const diagnostics = analyzeDiagnostics(rawStr, {
      controls: question.controls,
      requiresCurrency: question.requiresCurrency
    });
    const unsupportedConstructs = detectUnsupportedConstructs(rawStr);
    const fatalErrors = diagnostics.filter(d => d.severity === 'error');

    // Run Layer 1 Behavioral Execution (with syntax recovery enabled so broken syntax still evaluates logic for partial credit)
    const simResults = simulateExecution(rawStr, question.testCases || [], {
      controls: question.controls,
      expectedOutputs: question.expectedOutputs,
      virtualFiles: question.virtualFiles,
      allowRecovery: true
    });

    // Run Layer 2 Structural Normalization & Equivalence Comparison
    const normCode = normalizeCSharp(rawStr, { controls: question.controls });
    const equivCheck = compareStructuralEquivalence(rawStr, question.modelSolution || '', { controls: question.controls });
    let matchesAlternative = equivCheck.isEquivalent;
    if (!matchesAlternative && Array.isArray(question.acceptedAlternatives)) {
      matchesAlternative = question.acceptedAlternatives.some(alt =>
        compareStructuralEquivalence(rawStr, alt, { controls: question.controls }).isEquivalent
      );
    }

    const allTestsPassed = (question.testCases && question.testCases.length > 0)
      ? simResults.testResults.every(t => t.passed)
      : false;

    // Layer 3: Evaluate Memorandum Rubric Criteria
    const rubricDefs = Array.isArray(question.rubric) && question.rubric.length > 0
      ? question.rubric
      : [
          { id: 'syn', criterion: 'C# Syntax & Compilation', marks: Math.max(1, Math.round(maxMarks * 0.2)), checkType: 'syntax' },
          { id: 'beh', criterion: 'Behavioral Execution & Output Accuracy', marks: maxMarks - Math.max(1, Math.round(maxMarks * 0.2)), checkType: 'behavioral' }
        ];

    const rubricResults = rubricDefs.map((item, idx) => {
      const res = evaluateRubricCriterion(
        { ...item, id: item.id || `crit_${idx + 1}` },
        rawStr,
        normCode,
        simResults,
        diagnostics,
        question
      );
      // If behavioral tests all passed cleanly with zero syntax errors, or structural equivalence is 100% with zero syntax errors,
      // ensure alternative valid C# constructs (e.g., switch vs if/else, while vs for, C2 vs C) receive full marks on equivalent criteria!
      if ((allTestsPassed || matchesAlternative) && fatalErrors.length === 0 && !item.strictRequirement) {
        res.earnedMarks = res.availableMarks;
        res.status = 'passed';
        res.explanation = item.passExplanation || `Verified via behavioral execution and structural equivalence: ${item.criterion}.`;
        res.suggestion = '';
      }
      return res;
    });

    let earnedMarks = rubricResults.reduce((sum, r) => sum + r.earnedMarks, 0);

    // Apply modest syntax penalty if code had fatal syntax errors but rubric items didn't include an explicit syntax criterion
    const hasExplicitSyntaxCrit = rubricDefs.some(r => r.checkType === 'syntax');
    if (fatalErrors.length > 0 && !hasExplicitSyntaxCrit && earnedMarks > 0) {
      const penalty = Math.min(earnedMarks * 0.35, fatalErrors.length * 1);
      earnedMarks = Math.max(0.5, earnedMarks - penalty);
    }

    earnedMarks = Math.min(maxMarks, Math.max(0, Math.round(earnedMarks * 2) / 2));
    const percentage = maxMarks > 0 ? Math.round((earnedMarks / maxMarks) * 100) : 0;

    // Mask hidden test case details before returning to UI
    const visibleTestResults = (simResults.testResults || []).map((tr, idx) => {
      const tcDef = (question.testCases || [])[idx] || {};
      if (tcDef.isHidden && options.revealSolution === false) {
        return {
          name: `Hidden Memorandum Test Case #${idx + 1}`,
          passed: tr.passed,
          expected: '(Hidden during active assessment)',
          actual: tr.passed ? 'Passed' : 'Failed',
          reason: tr.passed ? 'Passed' : 'Hidden test case assertion failed'
        };
      }
      return {
        name: tr.name,
        passed: tr.passed,
        expected: tr.expected,
        actual: tr.actual,
        reason: tr.reason
      };
    });

    return {
      questionType: qType,
      answered: true,
      earnedMarks,
      maxMarks,
      percentage,
      isCorrect: earnedMarks >= maxMarks,
      isPartial: earnedMarks > 0 && earnedMarks < maxMarks,
      rubricResults,
      testResults: visibleTestResults,
      diagnostics,
      unsupportedConstructs,
      normalizedStudentCode: normCode,
      structuralSimilarity: equivCheck.similarity,
      modelSolution: options.revealSolution === false ? undefined : (question.modelSolution || '')
    };
  }

  return {
    tokenize: tokenize,
    highlightCSharp: highlightCSharp,
    analyzeDiagnostics: analyzeDiagnostics,
    detectUnsupportedConstructs: detectUnsupportedConstructs,
    extractCSharpMethods: extractCSharpMethods,
    createVirtualEnvironment: createVirtualEnvironment,
    simulateExecution: simulateExecution,
    evaluateCodeGrade: evaluateCodeGrade,
    normalizeCSharp: normalizeCSharp,
    compareStructuralEquivalence: compareStructuralEquivalence,
    evaluateClozeQuestion: evaluateClozeQuestion,
    evaluateCodingQuestion: evaluateCodingQuestion,
    CSharpCodeAuditor: CSharpCodeAuditor
  };
});
