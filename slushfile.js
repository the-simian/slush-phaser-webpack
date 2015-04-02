/*
 * slush-phaser-webpack
 * https://github.com/the-simian/slush-phaser-webpack
 *
 * Copyright (c) 2015, Jesse Harlin <harlinjesse@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  rename = require('gulp-rename'),
  _ = require('underscore.string'),
  inquirer = require('inquirer'),
  path = require('path');

var moment = require('moment');

function format(string) {
  var username = string.toLowerCase();
  return username.replace(/\s/g, '');
}

var defaults = (function () {
  var workingDirName = path.basename(process.cwd()),
    homeDir, osUserName, configFile, user;

  if (process.platform === 'win32') {
    homeDir = process.env.USERPROFILE;
    osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
  } else {
    homeDir = process.env.HOME || process.env.HOMEPATH;
    osUserName = homeDir && homeDir.split('/').pop() || 'root';
  }

  configFile = path.join(homeDir, '.gitconfig');
  user = {};

  if (require('fs').existsSync(configFile)) {
    user = require('iniparser').parseSync(configFile).user;
  }

  return {
    appName: workingDirName,
    userName: osUserName || format(user.name || ''),
    authorName: user.name || '',
    authorEmail: user.email || ''
  };
})();




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
    default: defaults.authorName
    }, {
    name: 'authorEmail',
    message: 'What is the author email?',
    default: defaults.authorEmail
    }, {
    name: 'userName',
    message: 'What is the github username?',
    default: defaults.userName
    }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
    }];
  //Ask
  inquirer.prompt(prompts, scaffold);
}

gulp.task('default', defaultTask);