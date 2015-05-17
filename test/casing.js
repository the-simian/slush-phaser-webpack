'use strict';
var chai = require('chai'),
  gulp = require('gulp'),
  expect = chai.expect;

var casing = require('./../slush/casing');

describe('casing-utilities', function () {
  describe('camel', function () {

    it('should camel case a string', function () {

      var input = 'I.am a.string-woot',
        output = 'i.amA.string-woot',
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

  describe('var', function () {
    it('should var case a string', function () {

      var input = 'I.am a.string',
        output = 'iAmAString',
        operation = 'var';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });
  describe('varName', function () {
    it('should folder case a string', function () {

      var input = 'I.am a.string',
        output = 'string',
        operation = 'varName';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });
  describe('classify', function () {
    it('should folder case a string', function () {

      var input = 'I.am a.string',
        output = 'i-am-a-string',
        operation = 'classify';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });
  describe('folderName', function () {
    it('should folder case a string', function () {

      var input = 'I.am a.string',
        output = 'string',
        operation = 'folderName';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });
  describe('snake', function () {
    it('should folder case a string', function () {

      var input = 'I.am a.string',
        output = 'i_am_a_string',
        operation = 'snake';

      expect(casing[operation](input))
        .to
        .eql(output);
    });
  });

});
