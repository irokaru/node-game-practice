import Bar   from '../Models/Bar';
import Block from '../Models/Block';

import ControllableObject from '../Repositories/ControllableObject';

import BlockSettings  from '../Settings/BlockSettings';
import BarSettings    from '../Settings/BarSettings';
import SystemSettings from '../Settings/SystemSettings';

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
    const blockRefX = BlockSettings.getReferenceXPos(SystemSettings.WIDTH);
    const blockRefY = BlockSettings.getReferenceYPos(SystemSettings.HEIGHT);

    for (let y = 0; y < BlockSettings.Y_NUM; y++) {
      for (let x = 0; x < BlockSettings.X_NUM; x++) {
        const xPos = x * (BlockSettings.X_SIZE + 1) + BlockSettings.X_SIZE / 2 + blockRefX;
        const yPos = y * (BlockSettings.Y_SIZE + 1) + BlockSettings.Y_SIZE / 2 + blockRefY;

        const block = new Block(this, xPos, yPos, BlockSettings.X_SIZE, BlockSettings.Y_SIZE, BlockSettings.COLOR);
        const blockNumber = x + y * BlockSettings.X_NUM;

        ControllableObject.add(`block${blockNumber}`, block);
      }
    }

    // draw bar
    const barXpos = BarSettings.getReferenceXPos(SystemSettings.WIDTH);
    const barYpos = BarSettings.getReferenceYPos(SystemSettings.HEIGHT);
    const bar     = new Bar(this, barXpos, barYpos, BarSettings.X_SIZE, BarSettings.Y_SIZE, BarSettings.COLOR);

    ControllableObject.add('bar', bar);

    // keyboard controller settings
    this.keys = this.input.keyboard.addKeys({
      left: 'left',
      right: 'right'
    });
  }

  update() {
    // controll bar
    const bar = ControllableObject.get('bar');

    if (this.keys.left.isDown) {
      bar.moveRelative(-3, 0, true);
    }
    if (this.keys.right.isDown) {
      bar.moveRelative(3, 0, true);
    }
  }
};
