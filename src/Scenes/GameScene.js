import Ball from '../Models/Ball';
import Bar   from '../Models/Bar';
import Block from '../Models/Block';

import ControllableObject from '../Repositories/ControllableObject';
import KeyController      from '../Repositories/KeyController';

import BallSettings   from '../Settings/BallSettings';
import BlockSettings  from '../Settings/BlockSettings';
import BarSettings    from '../Settings/BarSettings';
import SystemSettings from '../Settings/SystemSettings';

// -----------------------------------------------------

const keyInput = new KeyController();

export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false });
  }

  preload() {
    // not load image in this project
    console.log('preload phase...');
  }

  create() {
    console.log('create phase...');

    // create blocks
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

    // create bar
    const barXpos = BarSettings.getReferenceXPos(SystemSettings.WIDTH);
    const barYpos = BarSettings.getReferenceYPos(SystemSettings.HEIGHT);
    const bar     = new Bar(this, barXpos, barYpos, BarSettings.X_SIZE, BarSettings.Y_SIZE, BarSettings.COLOR);
    ControllableObject.add('bar', bar);

    // create ball
    const ballXpos = BarSettings.getReferenceXPos(SystemSettings.WIDTH);
    const ballYpos = BarSettings.getReferenceYPos(SystemSettings.HEIGHT) - 150;
    const ball     = new Ball(this, ballXpos, ballYpos, BallSettings.RADIUS, BallSettings.COLOR).setVector(1, 1);
    ControllableObject.add('ball', ball);

    // key setup
    keyInput.setup(this);
  }

  update() {
    const bar  = ControllableObject.get('bar');
    const ball = ControllableObject.get('ball');

    // controll bar
    if (keyInput.isDown('left')) {
      bar.moveRelative(-3, 0, true);
    }
    if (keyInput.isDown('right')) {
      bar.moveRelative(3, 0, true);
    }

    ball.moveByVector();
  }
};
