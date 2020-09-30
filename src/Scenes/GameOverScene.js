import SystemSettings from '../Settings/SystemSettings';

// -----------------------------------------------------

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameOver', active: false });
  }

  create() {
    this.add.text(SystemSettings.WIDTH / 2, SystemSettings.HEIGHT / 2, 'GAME OVER', {fontSize: '48px'}).setOrigin(0.5);
  }
}
