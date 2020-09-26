import Block     from '../Models/Block';
import BlockList from '../Repositories/BlockList';

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

    const initialXpos = Block.getInitialXPos(SystemConfig.WIDTH);
    const initialYpos = Block.getInitialYPos(SystemConfig.HEIGHT);
    const blockColor  = 0xCCCCCC;

    for (let x = 0; x < Block.X_NUM; x++) {
      for (let y = 0; y < Block.Y_NUM; y++) {
        const xPos = x * (Block.X_SIZE + 1) + initialXpos;
        const yPos = y * (Block.Y_SIZE + 1) + initialYpos;

        const block = this.add.graphics().fillStyle(blockColor, 1).fillRect(xPos, yPos, Block.X_SIZE, Block.Y_SIZE);

        BlockList.add(block);
      }
    }
  }
};
