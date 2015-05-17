'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;


var mockPrompt = require('./../inquirer-prompt-fixture'),
  slushfile = require('./../../slushfile');

describe('slush-phaser-webpack', function () {

  var mockGulpDest;

  beforeEach(function () {
    mockGulpDest = require('mock-gulp-dest')(gulp);
  });

  describe('default-task', function () {

    it('should make a readme', function (done) {

      mockPrompt({
        stateName: 'Test State',
        moveon: true
      });

      function assertDirectories() {
        mockGulpDest.assertDestContains('test-state.js');
        done();
      }

      gulp
        .start('state')
        .once('task_stop', assertDirectories);
    });

  });
});
