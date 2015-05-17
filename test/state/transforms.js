'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;


var defaultTransforms = require('./../../slush/state/transforms');



  describe('state-transform', function () {
    var mockAnswers;

    beforeEach(function () {
      mockAnswers = {
        stateName: 'Test State',
        moveon: true
      };
    });

    it('should return a transformed answer set for templating', function () {

      var transformedAnswers = defaultTransforms.map(mockAnswers);

      expect(transformedAnswers).to.eql({
        stateName: 'Test State',
        kebabStateName : 'test-state',
        varStateName : 'testState',
        moveon: true
      });

    });

  });
