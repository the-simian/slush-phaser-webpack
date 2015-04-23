'use strict';

var _ = require('lodash');
var moment = require('moment');

function DefaultTransform() {
  function map(answers) {


    answers.slugifiedAppname = 'fart';

    answers.slugifiedAppname = answers.appName.split(' ').join('-').toLowerCase();
    answers.dateYYYY = new Date().getFullYear();
    answers.githubRepo = answers.githubRepo || 'https://github.com/' + answers.userName + '/' + answers.appName;


    return answers;
  }

  return {
    map: map
  };
}


module.exports = DefaultTransform();
