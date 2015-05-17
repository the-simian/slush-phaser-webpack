'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;

var casing = require('./../slush/casing');

describe('casing-utilities', function () {
  describe('camel', function () {

    it('should camel case a string', function () {

      var input = 'I am a string',
        output = 'iAmAString',
        operation = 'camel';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });

  describe('kebab', function () {
    it('should kebab case a string', function () {

      var input = 'I am a string',
        output = 'i-am-a-string',
        operation = 'kebab';

      expect(casing[operation](input))
        .to
        .eql(output);

    });
  });

  describe('folder', function () {
    it('should folder case a string', function () {

      var input = 'I.am a.string',
        output = 'i/am-a/string',
        operation = 'folder';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });



});
