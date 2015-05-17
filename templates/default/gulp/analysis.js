var gulp = require('gulp');

require('./analysis/complexity');


gulp.task('analysis', ['complexity']);