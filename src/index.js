import Phaser from 'phaser';

import SystemSettings from './Settings/SystemSettings';

import GameScene     from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene';

// -----------------------------------------------------

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: SystemSettings.WIDTH,
  height: SystemSettings.HEIGHT,
  scene: [GameScene, GameOverScene],
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
