'use strict';

var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  rename = require('gulp-rename'),
  inquirer = require('inquirer');

var debug = require('gulp-debug');

var defaultQuestions = require('./questions');
var transformDefault = require('./transforms');


function DefaultTask(options) {
  function defaultTask(cb) {

    function scaffold(answers) {

      var answers = transformDefault.map(answers);

      function renameFiles(file) {
        if (file.basename[0] === '_') {
          file.basename = '.' + file.basename.slice(1);
        }
      }

      if (!answers.moveon) {
        return cb();
      }

      gulp
        .src(options.templatesDir + '/default/**')
        .pipe(template(answers))
        .pipe(rename(renameFiles))
        //.pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('finish', cb);
    }

    //Ask
    inquirer.prompt(defaultQuestions, scaffold);
  }

  gulp.task('default', defaultTask);

  return gulp;
}

module.exports = DefaultTask;
