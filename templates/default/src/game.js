global.PIXI = require('pixi.js');
global.p2 = require('p2');
global.Phaser = require('phaser')

game = new Phaser.Game(800, 800, Phaser.AUTO, 'phaser_game');

module.exports = game;
