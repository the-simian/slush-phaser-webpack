'use strict';
var inquirer = require('inquirer');

function mockPrompt(answers) {
  
  function assignAnswer(prompt) {
    if (!(prompt.name in answers)) {
      answers[prompt.name] = prompt.default;
    }
  }
  function inquirerPrompt(prompts, done) {
    [].concat(prompts).forEach(assignAnswer);
    done(answers);
  }
  inquirer.prompt = inquirerPrompt;
}

module.exports = mockPrompt;