'use strict';


var path = require('path');

var loaders = path.join(__dirname, '/gulp/build/loaders/'),
  phaserModule = path.join(__dirname, '/node_modules/phaser/');

var phaserWebpackLoader = path.join(loaders, 'phaser.js'),
  phaserWebpackDebugLoader = path.join(loaders, 'phaser-debug.js'),
  glFragmentLoader =   path.join(loaders, 'gl-fragment.js'),
  debugLoader = path.join(loaders, 'debug-file.js');

var phaser = path.join(phaserModule, '/dist/phaser.js'),
  phaserDebug = path.join(__dirname, '/node_modules/phaser-debug/dist/phaser-debug.js');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: 'assets/', // relative path for github pages
    filename: 'index.js', // no hash in main.js because index.html is a static page
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js'
  },
  module: {
    loaders: [
      {
        test: /phaser\.js$/i,
        loader: 'phaser-webpack-loader'
      },
      {
        test: /phaser-debug\.js$/i,
        loader: 'phaser-debug-webpack-loader'
      },
      {
        test: /\.frag$/i,
        loader: 'gl-fragment-loader'
      }
    ]
  },
  resolveLoader: {
    alias: {
      'phaser-webpack-loader': phaserWebpackLoader,
      'phaser-debug-webpack-loader': phaserWebpackDebugLoader,
      'gl-fragment-loader': glFragmentLoader,
      'debug-loader': debugLoader
    }
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'phaser-debug': phaserDebug
    }
  }
};
