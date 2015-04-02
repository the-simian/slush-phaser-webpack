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
        
        console.log('cwd',mockGulpDest.cwd())
        
        mockGulpDest.assertDestContains('README.md');
        //gulp.removeListener('task_stop', assertDirectories);
        done();
      }

      gulp
        .on('task_stop', assertDirectories)
        .start('default');
    });

  });

});