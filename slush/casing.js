'use strict';
var _ = require('lodash');

function Casing() {

  function camelCase(str) {
    return str
      .replace(/\s(.)/g, function($1) {
        return $1.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, function($1) {
        return $1.toLowerCase();
      });
  }

  function caseIt(st) {
    return st
      .charAt(0)
      .toUpperCase() + st.slice(1);
  }

  function varNameCase(str) {
    var stringList = str.split('.'),
      lastStr = stringList[stringList.length - 1];
    return varCase(lastStr);
  }

  function varCase(str) {
    var stringList = str.split('.');
    
    var newString = _.map(stringList, caseIt);
    
    newString = newString
      .join('')
      .split('-');

    newString = _.map(newString, caseIt);
    
    newString = newString
      .join('')
      .replace(/^(.)/, function($1) {
        return $1.toLowerCase();
      });
    
    newString = camelCase(newString);

    return newString;
  }

  function kebabCase(str) {
    return str
      .split(' ')
      .join('-')
      .toLowerCase();
  }

  function folderCase(str) {
    return kebabCase(str)
      .split('.')
      .join('/');
  }

  function classifyCase(str) {
    return kebabCase(str)
      .split('.')
      .join('-');
  }

  function snakeCase(str) {
    return classifyCase(str)
      .split('-')
      .join('_');
  }

  function folderCaseLast(str) {
    var segments = folderCase(str)
      .split('/'),
      segLength = segments.length;

    return segments[segLength - 1];
  }

  return {
    camel: camelCase,
    kebab: kebabCase,
    folder: folderCase,
    var: varCase,
    varName: varNameCase,
    classify: classifyCase,
    folderName: folderCaseLast,
    snake: snakeCase
  };

}


module.exports = new Casing();
