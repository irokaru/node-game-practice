import Phaser from 'phaser';

import SystemConfig from './Config/System';

import GameScene from './Scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: SystemConfig.WIDTH,
  height: SystemConfig.HEIGHT,
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
};

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener('resize', () => game.scale.refresh());
