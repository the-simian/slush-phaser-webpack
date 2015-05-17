'use strict';

var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  rename = require('gulp-rename'),
  inquirer = require('inquirer');

var transformDefault = require('./transforms');
var defaultQuestions = require('./questions');

function StateTask(options) {
  function defaultTask(cb) {

    function scaffold(answers) {
      
      var answers = transformDefault.map(answers);

      if (!answers.moveon) {
        return cb();
      }
      
      var outputDir = './src/states/' + answers.kebabStateName;
      
      gulp.src(options.templatesDir + '/state/**')
        .pipe(template(answers))
        .pipe(gulp.dest(outputDir))
        .on('finish', cb);
    }

    //Ask
    inquirer.prompt(defaultQuestions, scaffold);
  }

  gulp.task('state', defaultTask);

  return gulp;
}

module.exports = StateTask;
