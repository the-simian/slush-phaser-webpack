'use strict';

var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  rename = require('gulp-rename'),
  _ = require('underscore.string'),
  inquirer = require('inquirer');

var moment = require('moment');
var defaultQuestions = require('./questions');


function DefaultTask(options) {
  function defaultTask(cb) {

    function scaffold(answers) {

      console.log('answers', answers);

      if (!answers.moveon) {
        return cb();
      }

      answers.appNameSlug = _.slugify(answers.appName);
      answers.dateYYYY = moment('YYYY');
      answers.githubRepo = answers.githubRepo ||
        'https://github.com/' + answers.userName + '/' + answers.appName;

      gulp.src(options.templatesDir)
        .pipe(template(answers))
        .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1);
          }
        }))
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
