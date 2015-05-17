  var gulp = require('gulp'),
    tasklisting = require('gulp-task-listing');


  require('./gulp/deploy');
  require('./gulp/build');
  require('./gulp/analysis');


  gulp.task('help', tasklisting);
  gulp.task('default', ['help']);
