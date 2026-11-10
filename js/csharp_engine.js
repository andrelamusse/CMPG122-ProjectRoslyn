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
        const u = fmt.toUpperCase();
        if (u === 'C') return Number(val)._toCurrency();
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

  defineHiddenMethod(Number.prototype, '_toCurrency', function() {
    return 'R ' + this.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });
  defineHiddenMethod(Number.prototype, '_toFixed', function(digits) {
    return this.toFixed(digits);
  });
  defineHiddenMethod(Number.prototype, '_toNumber', function(digits) {
    return this.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  });
  defineHiddenMethod(Number.prototype, '_toPercent', function(digits) {
    return (this * 100).toFixed(digits) + '%';
  });
  defineHiddenMethod(Number.prototype, 'ToString', function(format) {
    if (!format) return this.toString();
    const f = String(format).trim().toUpperCase();
    if (f === 'C') return this._toCurrency();
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
    return this.toString();
  });
  defineHiddenMethod(Boolean.prototype, 'ToString', function() {
    return this ? 'True' : 'False';
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
  function unwrapMethodWrapper(code) {
    if (!code) return code;
    let text = code.trim();

    const methodHeaderRegex = /(?:(?:public|private|protected|internal)\s+)?(?:static\s+)?void\s+[a-zA-Z0-9_]+\s*\([^)]*\)\s*\{/i;
    const match = methodHeaderRegex.exec(text);
    if (match) {
      const openBraceIdx = match.index + match[0].length - 1;
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
              return text.slice(openBraceIdx + 1, i).trim();
            }
          }
        }
        i++;
      }
      return text.slice(openBraceIdx + 1).trim();
    }
    return code;
  }

  function analyzeDiagnostics(code, context = {}) {
    code = unwrapMethodWrapper(code);
    const diagnostics = [];
    const lines = code.split(/\r?\n/);
    const tokens = tokenize(code);

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
      if (parenDepth === 0 && /^(if|while|for|foreach|switch)\b/.test(clean)) {
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
      const isControlStatement = (/^(if|else|while|for|foreach|switch|try|catch|finally|lock)\b/.test(clean) || justClosedControlParen) &&
                                 !clean.endsWith(';');
      const isCaseOrDefault = /^(case\s+.+|default)\s*:$/.test(clean);
      const isDirective = clean.startsWith('#') || clean.startsWith('using ');
      const isContinuation = /[+\-*/%&|,\(]$/.test(clean) || isParenContinuation;

      if (!isBlockOpen && !isBlockClose && !isCaseOrDefault && !isDirective && !isContinuation && !justClosedControlParen) {
        if (!clean.endsWith(';')) {
          // If it looks like a while loop header, if statement header, etc.
          if (/^(if|while|for|foreach|switch)\s*\(.*\)$/.test(clean)) {
            return;
          }
          if (/^else(\s+if\s*\(.*\))?$/.test(clean)) {
            return;
          }
          // Exempt class, struct, namespace, interface, and method signature headers
          if (/^(?:public\s+|private\s+|protected\s+|internal\s+)?(?:partial\s+)?(?:class|interface|struct|namespace|enum)\b/.test(clean)) {
            return;
          }
          if (/^(?:public\s+|private\s+|protected\s+|internal\s+)?(?:static\s+|override\s+|virtual\s+)?(?:void|[a-zA-Z0-9_<>]+)\s+[a-zA-Z0-9_]+\s*\([^)]*\)$/.test(clean)) {
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

    // TryParse out variables: e.g. out decimal hours, out int count
    const outVarRegex = /\bout\s+(?:(?:int|double|decimal|string|bool)\s+)?([a-zA-Z_][a-zA-Z0-9_]*)/g;
    while ((match = outVarRegex.exec(code)) !== null) {
      declaredVars.add(match[1]);
    }

    // Loop variables: for (int i = 0; ...)
    const forVarRegex = /\bfor\s*\(\s*(?:int|double|decimal)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
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
    if (context.requiresCurrency && !/\.ToString\s*\(\s*["']C["']\s*\)/i.test(code)) {
      diagnostics.push({
        code: 'NWU_FORMAT01',
        severity: 'warning',
        line: 1,
        col: 1,
        message: `Formatting Standard: Currency amounts must be formatted using .ToString("C") for proper Rand/currency symbol and decimal display.`
      });
    }

    return diagnostics;
  }

  function getLineNumber(str, index) {
    const sub = str.slice(0, index);
    return (sub.match(/\n/g) || []).length + 1;
  }

  /**
   * 3. VIRTUAL C# RUNTIME & TEST CASE SIMULATOR
   */
  function simulateExecution(code, testCases = [], scenarioContext = {}) {
    code = unwrapMethodWrapper(code);
    const results = [];

    // Pre-check for fatal compiler errors
    const diagnostics = analyzeDiagnostics(code, scenarioContext);
    const fatalErrors = diagnostics.filter(d => d.severity === 'error');

    if (fatalErrors.length > 0) {
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

    // Translate C# snippet to JS sandbox
    const jsTranspiled = transpileCSharpToJs(code);

    testCases.forEach(tc => {
      const testResult = runSingleTestCase(jsTranspiled, tc, scenarioContext);
      results.push(testResult);
    });

    const passedCount = results.filter(r => r.passed).length;
    const scorePct = testCases.length > 0 ? Math.round((passedCount / testCases.length) * 100) : 100;

    return {
      success: passedCount === testCases.length,
      diagnostics: diagnostics,
      testResults: results,
      scorePct: scorePct
    };
  }

  function transpileCSharpToJs(code) {
    let js = unwrapMethodWrapper(code);

    // 1. Transpile C# String Interpolation: $"Year {currentYear}: {balance:C}" -> `Year ${currentYear}: ${(balance)._toCurrency()}`
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
          const fmtMatch = expr.match(/^(.+?):([CcFfNnPp]\d*)$/);
          if (fmtMatch) {
            const varExpr = fmtMatch[1].trim();
            const spec = fmtMatch[2].toUpperCase();
            if (spec === 'C') {
              formattedExpr = `(${varExpr})._toCurrency()`;
            } else if (spec.startsWith('F')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toFixed(${isNaN(d) ? 2 : d})`;
            } else if (spec.startsWith('N')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toNumber(${isNaN(d) ? 2 : d})`;
            } else if (spec.startsWith('P')) {
              const d = parseInt(spec.slice(1), 10);
              formattedExpr = `(${varExpr})._toPercent(${isNaN(d) ? 1 : d})`;
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

    // 1b. Verbatim C# string literals @"..." -> escaped JS string literal (handle doubled "" quotes too)
    js = js.replace(/@"((?:[^"]|"")*)"/g, (_m, inner) => JSON.stringify(inner.replace(/""/g, '"')));

    // Track declared C# int variables before type erasure so int / int division truncates like C#
    const intVars = new Set();
    const outIntRe = /\bout\s+int\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
    let im;
    while ((im = outIntRe.exec(js)) !== null) intVars.add(im[1]);
    const intDeclLineRe = /\b(?:const\s+)?int\s+(?!\s*\[)([^;{()]+?)(?=[;)])/g;
    while ((im = intDeclLineRe.exec(js)) !== null) {
      im[1].split(',').forEach(seg => {
        const vm = seg.trim().match(/^([a-zA-Z_][a-zA-Z0-9_]*)\b/);
        if (vm) intVars.add(vm[1]);
      });
    }

    // 2. Identify and hoist inline out variables: e.g. out decimal hours, out var count
    const inlineOutVars = new Set();
    const outTypedRegex = /\bout\s+(?:decimal|double|int|string|bool|float|long|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
    let om;
    while ((om = outTypedRegex.exec(js)) !== null) {
      inlineOutVars.add(om[1]);
    }
    // Normalize inline out parameter syntax: out decimal x -> out x, out var x -> out x
    js = js.replace(/\bout\s+(?:decimal|double|int|string|bool|float|long|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/g, 'out $1');

    // 3. Transpile C# array declarations:
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\{([^}]+)\}/g, 'let $1 = [$2]');
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*new\s+(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s*\{([^}]+)\}/g, 'let $1 = [$2]');
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*new\s+(?:decimal|double|int|string|bool|float|long|char)\s*\[([^\]]+)\]/g, 'let $1 = new Array($2).fill(0)');
    js = js.replace(/\b(?:decimal|double|int|string|bool|float|long|char)\s*\[\s*\]\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 'let $1');

    // 4. Transpile C# type declarations (handling const/readonly, primitive types, StreamWriter/StreamReader, dialogs, Random, and Form types)
    js = js.replace(/\b(?:(const|readonly)\s+)?(?:decimal|double|int|string|bool|float|long|char|DialogResult|Color|StreamWriter|StreamReader|OpenFileDialog|SaveFileDialog|Random|[A-Z][a-zA-Z0-9_]*Form)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, (match, isConst, varName) => {
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

    // Explicit numeric casts BEFORE int-division check so (double)a / b becomes Number(a) / b (float division!)
    // while (double)(a / b) becomes Number(a / b) -> Number(Math.trunc(a / b))!
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
      if (/^\d+$/.test(tok)) return true; // Pure integer literal without . or m/d/f suffix
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

    // 6. Handle numeric literals with C# suffixes: 100.5m -> 100.5, 0.15m -> 0.15, 10d -> 10, 40.0m -> 40.0
    js = js.replace(/(\d+(?:\.\d+)?)[mMDdfF]\b/g, '$1');

    // 7. String methods & helpers
    js = js.replace(/\b(?:string|String)\.IsNullOrEmpty\s*\(\s*([^)]+)\s*\)/g, '(!($1) || ($1).length === 0)');
    js = js.replace(/\b(?:string|String)\.IsNullOrWhiteSpace\s*\(\s*([^)]+)\s*\)/g, '(!($1) || String($1).trim().length === 0)');
    js = js.replace(/\.Trim\s*\(\s*\)/g, '.trim()');
    js = js.replace(/\.ToUpper\s*\(\s*\)/g, '.toUpperCase()');
    js = js.replace(/\.ToLower\s*\(\s*\)/g, '.toLowerCase()');
    js = js.replace(/\.Contains\s*\(/g, '.includes(');
    js = js.replace(/\.StartsWith\s*\(/g, '.startsWith(');
    js = js.replace(/\.EndsWith\s*\(/g, '.endsWith(');

    // 8. Replace TryParse calls (supporting both lowercase and PascalCase):
    js = js.replace(/\b(?:int|Int32)\.TryParse\s*\(\s*([^,]+?)\s*,\s*out\s+(?:let\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/g,
      '((() => { const _raw = ($1); const _v = Number(_raw); if(!isNaN(_v) && Number.isInteger(_v) && String(_raw).trim() !== ""){ $2 = _v; return true; } return false; })())');

    js = js.replace(/\b(?:decimal|Decimal|double|Double)\.TryParse\s*\(\s*([^,]+?)\s*,\s*out\s+(?:let\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/g,
      '((() => { const _raw = ($1); const _v = parseFloat(_raw); if(!isNaN(_v) && isFinite(_v) && String(_raw).trim() !== ""){ $2 = _v; return true; } return false; })())');

    // Simple Parse (supporting lowercase and PascalCase)
    js = js.replace(/\b(?:decimal|Decimal)\.Parse\s*\(\s*([^)]+)\s*\)/g, 'parseFloat($1)');
    js = js.replace(/\b(?:double|Double)\.Parse\s*\(\s*([^)]+)\s*\)/g, 'parseFloat($1)');
    js = js.replace(/\b(?:int|Int32)\.Parse\s*\(\s*([^)]+)\s*\)/g, 'parseInt($1, 10)');

    // Math methods
    js = js.replace(/\bMath\.Pow\s*\(/g, 'Math.pow(');
    js = js.replace(/\bMath\.Sqrt\s*\(/g, 'Math.sqrt(');
    js = js.replace(/\bMath\.Round\s*\(/g, 'Math.round(');
    js = js.replace(/\bMath\.Abs\s*\(/g, 'Math.abs(');
    js = js.replace(/\bMath\.Max\s*\(/g, 'Math.max(');
    js = js.replace(/\bMath\.Min\s*\(/g, 'Math.min(');

    // ToString formatting
    js = js.replace(/\.ToString\s*\(\s*["']C["']\s*\)/gi, '._toCurrency()');
    js = js.replace(/\.ToString\s*\(\s*["']F(\d)?["']\s*\)/gi, '._toFixed($1 || 2)');
    js = js.replace(/\.ToString\s*\(\s*["']N(\d)?["']\s*\)/gi, '._toNumber($1 || 2)');
    js = js.replace(/\.ToString\s*\(\s*["']P(\d)?["']\s*\)/gi, '._toPercent($1 || 1)');
    js = js.replace(/\.ToString\s*\(\s*\)/g, '.toString()');

    // MessageBox.Show(...) -> _msgBox(...)
    js = js.replace(/\bMessageBox\.Show\s*\(/g, '_msgBox(');

    // this.Close() / this.Hide()
    js = js.replace(/\bthis\.Close\s*\(\s*\)/g, '_closeForm()');
    js = js.replace(/\bthis\.Hide\s*\(\s*\)/g, '_hideForm()');

    // 9. Balanced-delimiter Infinite-Loop Guard on braced AND braceless while / for / do loops
    maskedLiterals.length = 0;
    const maskedForLoops = maskLiterals(js);
    js = unmaskLiterals(injectLoopGuardsBalanced(maskedForLoops));

    return js;
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

  function runSingleTestCase(transpiledJs, tc, context) {

    function createListBoxItems(initialItems = []) {
      const itemsArray = (Array.isArray(initialItems) ? [...initialItems] : []).map(x => String(x));
      const target = {
        _items: itemsArray,
        Add: function(item) {
          itemsArray.push(String(item));
        },
        Clear: function() {
          itemsArray.length = 0;
        },
        Remove: function(item) {
          const idx = itemsArray.indexOf(String(item));
          if (idx !== -1) itemsArray.splice(idx, 1);
        },
        RemoveAt: function(idx) {
          if (idx >= 0 && idx < itemsArray.length) {
            itemsArray.splice(idx, 1);
          }
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

    function createControl(name, initialVal) {
      if (name.startsWith('txt')) {
        return {
          Text: initialVal !== undefined ? String(initialVal) : '',
          Focus: function(){},
          Clear: function(){ this.Text = ''; }
        };
      }
      if (name.startsWith('lbl')) {
        return {
          Text: initialVal !== undefined ? String(initialVal) : '',
          ForeColor: 'Black'
        };
      }
      if (name.startsWith('pic')) {
        let isVis = false;
        let sMode = 'Normal';
        if (typeof initialVal === 'boolean') {
          isVis = initialVal;
        } else if (typeof initialVal === 'object' && initialVal !== null) {
          isVis = initialVal.Visible !== undefined ? Boolean(initialVal.Visible) : false;
          sMode = initialVal.SizeMode || 'Normal';
        }
        return {
          Visible: isVis,
          SizeMode: sMode,
          Image: null
        };
      }
      if (name.startsWith('rdo') || name.startsWith('rad') || name.startsWith('chk') || name.startsWith('cb')) {
        return { Checked: Boolean(initialVal) };
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
        const items = createListBoxItems(itemsArray);
        return {
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
          }
        };
      }
      if (name.startsWith('ofd') || name.startsWith('sfd')) {
        const defaultName = name.startsWith('sfd') ? 'Report.txt' : 'Data.txt';
        const fn = (initialVal && typeof initialVal === 'object' && initialVal.FileName)
          ? String(initialVal.FileName)
          : (typeof initialVal === 'string' && initialVal ? initialVal : defaultName);
        const dialogResult = (initialVal && typeof initialVal === 'object' && initialVal.DialogResult !== undefined)
          ? initialVal.DialogResult
          : 1; // DialogResult.OK
        return {
          FileName: fn,
          InitialDirectory: '',
          Filter: '',
          ShowDialog: function() { return dialogResult; }
        };
      }
      return initialVal;
    }

    const sandbox = {
      _messages: [],
      _isClosed: false,
      _cartTotal: 0,
      _msgBox: function(...args) {
        const text = args.map(a => String(a)).join(' | ');
        sandbox._messages.push(text);
        return 1; // DialogResult.OK
      },
      _closeForm: function() {
        sandbox._isClosed = true;
      },
      Close: function() {
        sandbox._isClosed = true;
      },
      BackColor: 'White',
      string: String,
      String: String,
      MessageBoxButtons: { OK: 0, OKCancel: 1, YesNo: 4, YesNoCancel: 3 },
      MessageBoxIcon: { None: 0, Error: 16, Question: 32, Warning: 48, Information: 64 },
      DialogResult: { OK: 1, Cancel: 2, Yes: 6, No: 7 },
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
        Navy: 'Navy'
      },
      Convert: {
        ToDecimal: function(val) { const v = parseFloat(val); if (isNaN(v)) throw new Error("Input string was not in a correct format."); return v; },
        ToDouble: function(val) { const v = parseFloat(val); if (isNaN(v)) throw new Error("Input string was not in a correct format."); return v; },
        ToInt32: function(val) { const v = parseInt(val, 10); if (isNaN(v)) throw new Error("Input string was not in a correct format."); return v; },
        ToString: function(val) { return String(val); },
        ToBoolean: function(val) { return Boolean(val); }
      },
      _hideForm: function() { sandbox._isHidden = true; },
      _loopSteps: 0,
      _guardLoop: function() {
        sandbox._loopSteps++;
        if (sandbox._loopSteps > 10000) {
          throw new Error('Infinite loop halted (>10,000 iterations). Check your loop condition and counter update.');
        }
      },
      _virtualFiles: {},
      File: {
        CreateText: function(fn) {
          const lines = [];
          sandbox._virtualFiles[fn] = lines;
          return {
            Write: function(s) { if (!lines.length) lines.push(String(s)); else lines[lines.length - 1] += String(s); },
            WriteLine: function(s) { lines.push(s === undefined ? '' : String(s)); },
            Close: function() { this._closed = true; }
          };
        },
        AppendText: function(fn) {
          if (!sandbox._virtualFiles[fn]) sandbox._virtualFiles[fn] = [];
          const lines = sandbox._virtualFiles[fn];
          return {
            Write: function(s) { if (!lines.length) lines.push(String(s)); else lines[lines.length - 1] += String(s); },
            WriteLine: function(s) { lines.push(s === undefined ? '' : String(s)); },
            Close: function() { this._closed = true; }
          };
        },
        OpenText: function(fn) {
          const lines = (sandbox._virtualFiles[fn] || ['10', '20', '30']).slice();
          let idx = 0;
          return {
            get EndOfStream() { return idx >= lines.length; },
            ReadLine: function() { return idx < lines.length ? lines[idx++] : null; },
            Close: function() { this._closed = true; }
          };
        }
      },
      OpenFileDialog: function() {
        return { FileName: 'Data.txt', InitialDirectory: '', Filter: '', ShowDialog: function() { return 1; } };
      },
      SaveFileDialog: function() {
        return { FileName: 'Report.txt', InitialDirectory: '', Filter: '', ShowDialog: function() { return 1; } };
      },
      Random: function() {
        return {
          Next: function(a, b) {
            if (a === undefined) return 42;
            if (b === undefined) return Math.floor(a / 2);
            return a;
          },
          NextDouble: function() { return 0.5; }
        };
      },
      SummaryForm: function() {
        return {
          lblSummaryTotal: { Text: '' },
          lblFinalTotal: { Text: '' },
          lblOutput: { Text: '' },
          ShowDialog: function() { this._shownModal = true; return 1; },
          Show: function() { this._shownModeless = true; },
          Close: function() { this._closed = true; },
          Hide: function() { this._hidden = true; }
        };
      },
      ReceiptForm: function() {
        return {
          lblTotal: { Text: '' },
          lblResult: { Text: '' },
          ShowDialog: function() { this._shownModal = true; return 1; },
          Show: function() { this._shownModeless = true; }
        };
      },
      InvoiceForm: function() {
        return {
          lblAmountDue: { Text: '' },
          ShowDialog: function() { this._shownModal = true; return 1; },
          Show: function() { this._shownModeless = true; }
        };
      }
    };

    // Initialize controls from test inputs
    Object.keys(tc.inputs || {}).forEach(k => {
      sandbox[k] = createControl(k, tc.inputs[k]);
    });

    // Initialize expected outputs if not already present
    (context.expectedOutputs || []).forEach(k => {
      if (!sandbox[k]) {
        sandbox[k] = createControl(k, '');
      }
    });

    // Initialize controls list if not already present
    (context.controls || []).forEach(k => {
      if (!sandbox[k]) {
        sandbox[k] = createControl(k, '');
      }
    });

    try {
      const keys = Object.keys(sandbox);
      const vals = keys.map(k => sandbox[k]);
      const runner = new Function(
        ...keys,
        'window', 'document', 'globalThis', 'self', 'fetch', 'XMLHttpRequest', 'localStorage', 'sessionStorage', 'indexedDB',
        `
        "use strict";
        try {
          ${transpiledJs}
        } catch(e) {
          throw e;
        }
      `);
      runner.call(sandbox, ...vals, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

      let passed = true;
      let actualSummary = [];
      let expectedSummary = [];

      Object.keys(tc.expected || {}).forEach(outKey => {
        const expectedVal = tc.expected[outKey];
        let actualVal = '';

        if (outKey === '_messages') {
          actualVal = sandbox._messages.join(' | ');
          const match = expectedVal instanceof RegExp ? expectedVal.test(actualVal) : actualVal.includes(expectedVal);
          actualSummary.push(`MessageBox: "${actualVal}"`);
          expectedSummary.push(`MessageBox: "${expectedVal}"`);
          if (!match) passed = false;
        } else if (outKey.startsWith('lbl') || outKey.startsWith('txt')) {
          actualVal = (sandbox[outKey] && sandbox[outKey].Text) ? sandbox[outKey].Text.trim() : '';
          actualSummary.push(`${outKey}.Text = "${actualVal}"`);
          expectedSummary.push(`${outKey}.Text = "${expectedVal}"`);

          const cleanAct = actualVal.replace(/[^-0-9.]/g, '');
          const cleanExp = String(expectedVal).replace(/[^-0-9.]/g, '');
          if (cleanExp && cleanAct) {
            const numAct = parseFloat(cleanAct);
            const numExp = parseFloat(cleanExp);
            if (Math.abs(numAct - numExp) > 0.05) {
              passed = false;
            }
          } else if (!actualVal.toLowerCase().includes(String(expectedVal).toLowerCase())) {
            passed = false;
          }
        } else if (outKey.startsWith('pic')) {
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
        } else if (outKey === 'BackColor' || outKey === 'Form.BackColor') {
          const actualColor = sandbox.BackColor;
          actualSummary.push(`Form.BackColor = "${actualColor}"`);
          expectedSummary.push(`Form.BackColor = "${expectedVal}"`);
          if (String(actualColor).toLowerCase() !== String(expectedVal).toLowerCase()) passed = false;
        } else if (outKey === '_isClosed' || outKey === 'this.Close') {
          actualSummary.push(`Form.Close called: ${sandbox._isClosed}`);
          expectedSummary.push(`Form.Close called: ${expectedVal}`);
          if (Boolean(sandbox._isClosed) !== Boolean(expectedVal)) passed = false;
        } else if (outKey.startsWith('lst')) {
          const items = sandbox[outKey] ? sandbox[outKey].Items._items : [];
          actualSummary.push(`${outKey} (${items.length} items)`);
          expectedSummary.push(`${outKey} contains target items`);
          if (expectedVal.minItems && items.length < expectedVal.minItems) passed = false;
          if (expectedVal.contains && !items.some(it => it.includes(expectedVal.contains))) passed = false;
        }
      });

      return {
        name: tc.name,
        passed: passed,
        actual: actualSummary.join(', ') || 'OK',
        expected: expectedSummary.join(', ') || 'Expected output',
        reason: passed ? 'All assertions passed.' : 'Output mismatch.'
      };
    } catch (err) {
      return {
        name: tc.name,
        passed: false,
        actual: 'Runtime Exception: ' + err.message,
        expected: tc.expectedDescription || 'Clean execution',
        reason: err.message
      };
    }
  }

  /**
   * 4. COMPREHENSIVE CODEGRADE RUBRIC SCORER
   */
  function evaluateCodeGrade(code, scenario) {
    code = unwrapMethodWrapper(code);
    const diagnostics = analyzeDiagnostics(code, {
      controls: scenario.controls,
      requiresCurrency: scenario.requiresCurrency
    });

    const errors = diagnostics.filter(d => d.severity === 'error');
    const warnings = diagnostics.filter(d => d.severity === 'warning');

    const simResults = simulateExecution(code, scenario.testCases || [], {
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
    const usesTryParse = /\b(?:decimal|double|int)\.TryParse\b/.test(code);
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
      title: `Automated Test Cases (${simResults.testResults.filter(t => t.passed).length}/${scenario.testCases.length} Passed)`,
      pointsEarned: testEarned,
      pointsMax: testWeight,
      passed: simResults.success,
      notes: simResults.success ? 'All runtime test assertions passed successfully.' : 'One or more edge case calculations failed.'
    });

    // 4. GUI & Formatting (15%)
    const guiWeight = scenario.weights ? scenario.weights.gui : 15;
    totalPoints += guiWeight;
    const formatsCurrency = !scenario.requiresCurrency || /\.ToString\s*\(\s*["']C["']\s*\)/i.test(code);
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

  return {
    tokenize: tokenize,
    highlightCSharp: highlightCSharp,
    analyzeDiagnostics: analyzeDiagnostics,
    simulateExecution: simulateExecution,
    evaluateCodeGrade: evaluateCodeGrade,
    CSharpCodeAuditor: CSharpCodeAuditor
  };
});
