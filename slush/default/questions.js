'use strict';

var defaults = require('./answers')();

function DefaultQuestions() {

  var prompts = [{
    name: 'appName',
    message: 'What is the name of your project?',
    default: defaults.appName
  }, {
    name: 'appDescription',
    message: 'What is the description?'
  }, {
    name: 'appVersion',
    message: 'What is the version of your project?',
    default: '0.1.0'
  }, {
    name: 'authorName',
    message: 'What is the author name?',
    default: defaults.userName
  }, {
    name: 'authorEmail',
    message: 'What is the author email?',
    default: defaults.authorEmail
  }, {
    name: 'userName',
    message: 'What is the github username?',
    default: defaults.authorName
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];

  return prompts;
}



module.exports = DefaultQuestions();
