import Phaser from 'phaser';

import SystemSettings from './Settings/SystemSettings';

import GameScene from './Scenes/GameScene';

// -----------------------------------------------------

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: SystemSettings.WIDTH,
  height: SystemSettings.HEIGHT,
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
};

// -----------------------------------------------------

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener('resize', () => game.scale.refresh());
