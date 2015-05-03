'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;


var rewire = require('rewire');


var defaultTransforms = rewire('./../../slush/default/answers');


describe('slush-phaser-webpack', function () {

  describe('default-answers', function () {

    describe('process is win 32', function () {

      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: 'Jesse_Harlin',
        HOME: 'test/default/fixtures/Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Jesse_Harlin'
      };

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
          authorName: 'fart Blaster',
          authorEmail: 'turdburgular@gmail.com'
        };

      expect(defaults)
        .to
        .eql(out);
    });
    
        describe('process is win 32 but no username', function () {

      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: '',
        HOME: 'test/default/fixtures/Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Jesse_Harlin'
      };

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
          authorName: 'fart Blaster',
          authorEmail: 'turdburgular@gmail.com'
        };

      expect(defaults)
        .to
        .eql(out);
    });
    

    describe('process is not win 32 with no Home', function () {

      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: 'Jesse_Harlin',
        HOMEPATH: 'test/default/fixtures/Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Jesse_Harlin'
      };

      defaultTransforms.__set__({
        process: {
          env: mockEnv,
          cwd: mockCwd,
          platform: 'not_win32'
        }
      });

      var defaults = defaultTransforms(),
        out = {
          appName: 'something',
          userName: 'Jesse_Harlin',
          authorName: 'fart Blaster',
          authorEmail: 'turdburgular@gmail.com'
        };

      expect(defaults)
        .to
        .eql(out);
    });
    
        describe('process is not win 32 with no Home or Homepath', function () {

      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: 'Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Jesse_Harlin'
      };

      defaultTransforms.__set__({
        process: {
          env: mockEnv,
          cwd: mockCwd,
          platform: 'not_win32'
        }
      });

      var defaults = defaultTransforms(),
        out = {
          appName: 'something',
          userName: 'root',
          authorName: '',
          authorEmail: ''
        };

      expect(defaults)
        .to
        .eql(out);
    });
    


    describe('process is other than win 32', function () {

      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: 'Jesse_Harlin',
        HOME: 'test/default/fixtures/Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Jesse_Harlin'
      };

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
          userName: 'Jesse_Harlin',
          authorName: 'fart Blaster',
          authorEmail: 'turdburgular@gmail.com'
        };

      expect(defaults)
        .to
        .eql(out);
    });

    describe('.gitdonfig is present in the user directory', function () {
      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: 'Jesse_Harlin',
        HOME: 'test/default/fixtures/Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Jesse_Harlin'
      };

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
          authorName: 'fart Blaster',
          authorEmail: 'turdburgular@gmail.com'
        };

      expect(defaults)
        .to
        .eql(out);
    });

    describe('.gitdonfig is not present in the user directory', function () {
      function mockCwd() {
        return '/example/of/something';
      }

      var mockEnv = {
        USERNAME: 'Jesse_Harlin',
        HOME: 'test/default/fixtures/Not_Jesse_Harlin',
        USERPROFILE: 'test/default/fixtures/Not_Jesse_Harlin'
      };

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

  });
});
