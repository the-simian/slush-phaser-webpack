'use strict';



function StateQuestions() {

  var prompts = [{
    name: 'stateName',
    message: 'What is the name of this state?',
    default: 'example'
  },{
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];

  return prompts;
}



module.exports = StateQuestions();
