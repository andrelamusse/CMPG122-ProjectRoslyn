/**
 * NWU CMPG122 — Modular Data Assembler
 * Assembles Curriculum, Definitions, Calibrated Question Bank, and Code Labs
 * into a unified, schema-consistent dataset while keeping educational content
 * strictly separated into dedicated data modules under js/data/.
 */
(function (root, factory) {
  let curriculum = root && (root.CMPG122_CURRICULUM || (root.window && root.window.CMPG122_CURRICULUM));
  let definitions = root && (root.CMPG122_DEFINITIONS || (root.window && root.window.CMPG122_DEFINITIONS));
  let questionsMod = root && (root.CMPG122_QUESTIONS || (root.window && root.window.CMPG122_QUESTIONS));
  let codeLabs = root && (root.CMPG122_CODELABS || (root.window && root.window.CMPG122_CODELABS));

  if (typeof require === 'function' && (!curriculum || !definitions || !questionsMod || !codeLabs)) {
    try {
      curriculum = curriculum || require('./data/curriculum.js');
      definitions = definitions || require('./data/definitions_data.js');
      questionsMod = questionsMod || require('./data/questions_bank.js');
      codeLabs = codeLabs || require('./data/code_labs_data.js');
    } catch (_e) {
      // Browser or isolated VM context where scripts are loaded sequentially
    }
  }

  const assembled = factory(curriculum || {}, definitions || [], questionsMod || {}, codeLabs || {});
  if (typeof module === 'object' && module.exports) {
    module.exports = assembled;
  }
  if (typeof root !== 'undefined') {
    root.CMPG122_DATA = assembled;
    if (root.window) {
      root.window.CMPG122_DATA = assembled;
    }
  }
})(typeof self !== 'undefined' ? self : this, function (curriculum, definitions, questionsMod, codeLabs) {
  'use strict';

  return {
    moduleCode: curriculum.moduleCode || 'CMPG122',
    moduleTitle: curriculum.moduleTitle || 'User Interface Programming in Visual C#',
    institution: curriculum.institution || 'North-West University',
    version: curriculum.version || '9.0.0',
    examWeightingModel: curriculum.examWeightingModel || {},
    units: curriculum.units || [],
    definitions: definitions || [],
    officialExams: questionsMod.officialExams || [],
    questions: questionsMod.questions || [],
    codeScenarios: codeLabs.codeScenarios || {},
    spotErrors: codeLabs.spotErrors || [],
    auditScenarios: codeLabs.auditScenarios || []
  };
});
