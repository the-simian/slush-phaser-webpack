var game = require('../game'),
    Phaser = require('phaser').Phaser;


var fragmentSrc = require('../shaders/example.frag'),
  filter,
  sprite;

function createBootState() {
  var headerText = 'Boot State';

  var headerTextStyle = {
    font: '26pt Helvetica',
    fill: '#e0e4f0',
    align: 'center'
  };


  filter = new Phaser.Filter(game, null, fragmentSrc);
  filter.setResolution(800, 600);

  sprite = game.add.sprite();
  sprite.width = 800;
  sprite.height = 600;

  sprite.filters = [filter];


  var headText = game.add.text(game.world.centerX, 32, headerText, headerTextStyle);


}


function updateBootState() {

  filter.update(game.input.activePointer);
}


var boot = {
  create: createBootState,
  update: updateBootState
};


module.exports = boot;
