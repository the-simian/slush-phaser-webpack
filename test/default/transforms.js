'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;

var  moment = require('moment');
var defaultTransforms = require('./../../slush/default/transforms');

describe('slush-phaser-webpack', function () {

  describe('default-transform', function () {
    var mockAnswers;

    beforeEach(function () {
      mockAnswers = {
        appName: 'Test Application',
        userName: 'the-simian',
        authorName: 'Fancypants Harlin',
        authorEmail: 'derp@derp.derp',
        appDescription: 'A Super Rad Description',
        moveon: true
      };
    });

    it('should return a transformed answer set for templating', function () {


      var transformedAnswers = defaultTransforms.map(mockAnswers);

      expect(transformedAnswers).to.eql({
        appName: 'Test Application',
        userName: 'the-simian',
        authorName: 'Fancypants Harlin',
        authorEmail: 'derp@derp.derp',
        appDescription: 'A Super Rad Description',
        moveon: true,
        dateYYYY: new Date().getFullYear(),
        githubRepo: 'https://github.com/the-simian/Test Application',
        slugifiedAppname: 'test-application'
      });


    });


  });
});
