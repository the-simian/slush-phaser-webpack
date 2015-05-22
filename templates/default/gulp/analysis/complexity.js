'use strict';

var gulp = require('gulp');
var plato = require('plato');
var _ = require('lodash');


var defaultJsHintOpts = {
  strict: true,
  curly: true,
  unused: true,
  undef: true,
  node: true
};

var defaultComplexity = {
  trycatch: true,
  newmi: true
};

var outputDir = './artifacts/plato';

var src = './src/**/*.js';


var platoArgs = {
  jshint: defaultJsHintOpts,
  complexity: defaultComplexity
};


function analysisComplexity() {
  function callback() {

  }

  plato.inspect(src, outputDir, platoArgs, callback);
}


gulp.task('analysis-complexity', analysisComplexity);
