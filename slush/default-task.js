
'use strict';

var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  rename = require('gulp-rename'),
  _ = require('underscore.string'),
  inquirer = require('inquirer');

var moment = require('moment');


var initPrompts = require('./init-prompts');

function defaultTask(cb) {

  function scaffold(answers) {

    if (!answers.moveon) {
      return cb();
    }

    answers.appNameSlug = _.slugify(answers.appName);
    answers.dateYYYY = moment('YYYY');
    answers.githubRepo = answers.githubRepo ||
      'https://github.com/' + answers.userName + '/' + answers.appName;

    gulp.src(__dirname + '/templates/**')
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
  inquirer.prompt(initPrompts, scaffold);
}

gulp.task('default', defaultTask);
