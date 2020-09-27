import Bar   from '../Models/Bar';
import Block from '../Models/Block';

import BlockSettings from '../Settings/BlockSettings';
import BarSettings   from '../Settings/BarSettings';
import SystemConfig  from '../Config/System';

// -----------------------------------------------------

export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false })
  }

  preload() {
    // not load image in this project
    console.log('preload phase...');
  }

  create() {
    console.log('create phase...');

    // draw blocks
    const blockRefX = BlockSettings.getReferenceXPos(SystemConfig.WIDTH);
    const blockRefY = BlockSettings.getReferenceYPos(SystemConfig.HEIGHT);

    for (let x = 0; x < BlockSettings.X_NUM; x++) {
      for (let y = 0; y < BlockSettings.Y_NUM; y++) {
        const xPos = x * (BlockSettings.X_SIZE + 1) + BlockSettings.X_SIZE / 2 + blockRefX;
        const yPos = y * (BlockSettings.Y_SIZE + 1) + BlockSettings.Y_SIZE / 2 + blockRefY;

        new Block(this, xPos, yPos, BlockSettings.X_SIZE, BlockSettings.Y_SIZE, BlockSettings.COLOR);
      }
    }

    // draw bar
    const barXpos = BarSettings.getReferenceXPos(SystemConfig.WIDTH);
    const barYpos = BarSettings.getReferenceYPos(SystemConfig.HEIGHT);
    this.bar = new Bar(this, barXpos, barYpos, BarSettings.X_SIZE, BarSettings.Y_SIZE, BarSettings.COLOR);

    // keyboard controller settings
    this.keys = this.input.keyboard.addKeys({
      left: 'left',
      right: 'right'
    });
    console.log(this);
  }

  update() {
    // controll bar
    if (this.keys.left.isDown) {
      this.bar.moveRelative(-2, 0, true);
      this.bar.fitInCanvas();
    }
    if (this.keys.right.isDown) {
      this.bar.moveRelative(2, 0, true);
      this.bar.fitInCanvas();
    }
  }
};
