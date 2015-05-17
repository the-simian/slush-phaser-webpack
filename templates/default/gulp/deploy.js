'use strict';

var gulp = require('gulp'),
  ghPages = require('gulp-gh-pages');

function deploy() {
  return gulp
    .src('./dist/**/*')
    .pipe(ghPages());
}

gulp.task('deploy', deploy);