'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  mockGulpDest = require('mock-gulp-dest')(gulp),
  expect = chai.expect;


var mockPrompt = require('./../inquirer-prompt-fixture'),
  slushfile = require('./../../slushfile');

describe('slush-phaser-webpack', function () {

  describe('default-task', function () {

    beforeEach(function () {
      mockPrompt({
        appName: 'Test Application',
        userName: 'the-simian',
        authorName: 'Fancypants Harlin',
        authorEmail: 'derp@derp.derp',
        appDescription: 'A Super Rad Description',
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
