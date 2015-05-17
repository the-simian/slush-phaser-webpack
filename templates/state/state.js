'use strict';
var game = require('../game'),
  Phaser = require('phaser').Phaser;

function create() {

}

function update() {

}

function paused() {

}

function render() {

}

function shutdown() {

}

var <%= varStateName %>State = {
  create: create,
  update: update,
  paused: paused,
  render: render,
  shutdown: shutdown
};


module.exports = <%= varStateName %>State;
