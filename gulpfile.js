'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var plato = require('gulp-plato');
var runSequence = require('run-sequence');
var coveralls = require('gulp-coveralls');
var taskListing = require('gulp-task-listing');


var src = [
  './slushfile.js',
  './slush/**/*.js'
];


function test(cb) {

  
  
  var mochaOpts = {
    reporter: 'nyan'
  };

  function runner() {
    
    
    gulp
      .src(['./test/**/*.js'])
      .pipe(mocha(mochaOpts))
      .pipe(istanbul.writeReports())

    .on('end', cb);
  }

  gulp
    .src(src)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', runner);
}


function complexity() {

  var jsHintArgs = {
      options: {
        strict: true
      }
    },
    complexityArgs = {
      trycatch: true
    },
    platoArgs = {
      jshint: jsHintArgs,
      complexity: complexityArgs
    };


  gulp.src(['slushfile.js'])
    .pipe(plato('plato', platoArgs));
}

function lcov() {
  gulp
    .src('coverage/**/lcov.info')
    .pipe(coveralls());
}


function ci(cb) {
  runSequence('test', 'complexity', cb);
}

gulp
  .task('default', taskListing)
  .task('test', test)
  .task('complexity', complexity)
  .task('coveralls', lcov)
  .task('ci', ci);
