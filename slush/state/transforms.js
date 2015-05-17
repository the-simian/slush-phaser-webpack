'use strict';

var _ = require('lodash');
var casing = require('./../casing');

function StateTransform() {
  function map(answers) {

    answers.kebabStateName = casing.kebab(answers.stateName);
    answers.varStateName = casing.var(answers.stateName);

    return answers;
  }

  return {
    map: map
  };
}


module.exports = StateTransform();
