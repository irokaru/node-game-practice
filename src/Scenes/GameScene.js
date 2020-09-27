import Block from '../Models/Block';

import BS           from '../Settings/BlockSettings';
import SystemConfig from '../Config/System';

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
    const blockRefX = BS.getReferenceXPos(SystemConfig.WIDTH);
    const blockRefY = BS.getReferenceYPos(SystemConfig.HEIGHT);

    for (let x = 0; x < BS.X_NUM; x++) {
      for (let y = 0; y < BS.Y_NUM; y++) {
        const xPos = x * (BS.X_SIZE + 1) + BS.X_SIZE / 2 + blockRefX;
        const yPos = y * (BS.Y_SIZE + 1) + BS.Y_SIZE / 2 + blockRefY;

        new Block(this, xPos, yPos, BS.X_SIZE, BS.Y_SIZE, BS.COLOR);
      }
    }

    console.log(this.children.getAll());
  }
};
