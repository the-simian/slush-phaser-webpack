'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  mockGulpDest = require('mock-gulp-dest')(gulp),
  expect = chai.expect;


var mockPrompt = require('./inquirer-prompt-fixture');

require('../slushfile');

describe('slush-phaser-webpack', function () {

  describe('default', function () {

    beforeEach(function () {
      mockPrompt({
        appName: 'test-app',
        userName: 'the-simian',
        authorName: 'Fancypants Harlin',
        authorEmail: 'derp@derp.derp',
        appDescription: 'some description',
        moveon: true
      });
    });

    it('should make a readme', function (done) {

      function assertDirectories() {
        mockGulpDest.assertDestContains('README.md');
        done();
      }

      gulp
        .start('default')
        .once('task_stop', assertDirectories);
    });

    it('should make a package.json', function (done) {

      function assertDirectories() {
        mockGulpDest.assertDestContains('package.json');
        done();
      }

      gulp
        .start('default')
        .once('task_stop', assertDirectories);
    });


  });

});



//store340@lumberliquidators.com