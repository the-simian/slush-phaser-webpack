'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;


var rewire = require('rewire'),
  mockFs = require('mock-fs');


var defaultTransforms = rewire('./../../slush/default/answers');


describe('slush-phaser-webpack', function () {

  describe('default-answers', function () {

    function mockCwd() {
      return '/example/of/something';
    }

    var mockEnv = {
      USERNAME: 'Jesse_Harlin',
      HOME: '/Users/YOURMOM',
      USERPROFILE: 'C:\Users\Jesse_Harlin'
    };


    describe('process is win 32', function () {
      defaultTransforms.__set__({
        process: {
          env: mockEnv,
          cwd: mockCwd,
          platform: 'win32'
        }
      });

      var defaults = defaultTransforms(),
        out = {
          appName: 'something',
          userName: 'Jesse_Harlin',
          authorName: '',
          authorEmail: ''
        };

      expect(defaults)
        .to
        .eql(out);
    });

    describe('process is other than win 32', function () {
      defaultTransforms.__set__({
        process: {
          env: mockEnv,
          cwd: mockCwd,
          platform: 'notWin32'
        }
      });

      var defaults = defaultTransforms(),
        out = {
          appName: 'something',
          userName: 'YOURMOM',
          authorName: '',
          authorEmail: ''
        };

      expect(defaults)
        .to
        .eql(out);
    });

  });
});
