'use strict'

var gulp = require('gulp'),
  path = require('path'),
  webpack = require('gulp-webpack-build');

var _webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");


var configFile = 'webpack.config.js',
  dest = './dist',
  src = './src/**/*.*';

var formatOpts = {
  version: true,
  timings: true
};

var failOpts = {
  errors: true,
  warnings: false
};

var webpackOptions = {
    debug: true,
    devtool: '#source-map',
    watchDelay: 200
  },
  webpackConfig = {
    useMemoryFs: true,
    progress: true
  };

function assembleScripts() {

  return gulp
    .src(configFile)
    .pipe(webpack.configure(webpackConfig))
    .pipe(webpack.overrides(webpackOptions))
    .pipe(webpack.compile())
    .pipe(webpack.format(formatOpts))
    .pipe(webpack.failAfter(failOpts))
    .pipe(gulp.dest(dest));
}


function updateBuild(eve) {
  if (eve.type !== 'changed') {
    return;
  }


  assembleScripts();
}

function watchScripts() {
  return gulp
    .watch(src)
    .on('change', assembleScripts);
}


gulp.task('watch-scripts', watchScripts);

gulp.task('build-scripts', assembleScripts);