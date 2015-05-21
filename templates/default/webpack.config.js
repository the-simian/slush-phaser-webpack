'use strict';

var path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');

var glFragmentLoader = path.join(__dirname, '/node_modules/phaser-glsl-loader'),
  jsonLoader = path.join(__dirname, '/node_modules/json-loader');

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
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.frag$/i,
        loader: 'gl-fragment-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolveLoader: {
    alias: {
      'gl-fragment-loader': glFragmentLoader,
      'json-loader': jsonLoader
    }
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'phaser-debug': phaserDebug
    }
  }
};
