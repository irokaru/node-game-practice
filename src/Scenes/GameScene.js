import Ball from '../Models/Ball';
import Bar   from '../Models/Bar';
import Block from '../Models/Block';

import KeyController      from '../Repositories/KeyController';

import BallSettings   from '../Settings/BallSettings';
import BlockSettings  from '../Settings/BlockSettings';
import BarSettings    from '../Settings/BarSettings';
import SystemSettings from '../Settings/SystemSettings';

import Collision from '../Util/Collision';

// -----------------------------------------------------

const keyInput = new KeyController();

export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false });
    this.$ = {};
  }

  create() {
    // create blocks
    this.$.blocks   = this.add.group();
    const blockRefX = BlockSettings.getReferenceXPos(SystemSettings.WIDTH);
    const blockRefY = BlockSettings.getReferenceYPos(SystemSettings.HEIGHT);

    for (let y = 0; y < BlockSettings.Y_NUM; y++) {
      for (let x = 0; x < BlockSettings.X_NUM; x++) {
        const xPos = x * (BlockSettings.X_SIZE + 1) + BlockSettings.X_SIZE / 2 + blockRefX;
        const yPos = y * (BlockSettings.Y_SIZE + 1) + BlockSettings.Y_SIZE / 2 + blockRefY;

        const block = new Block(this, xPos, yPos, BlockSettings.X_SIZE, BlockSettings.Y_SIZE, BlockSettings.COLOR);
        this.$.blocks.add(block);
      }
    }

    // create bar
    const barXpos = BarSettings.getReferenceXPos(SystemSettings.WIDTH);
    const barYpos = BarSettings.getReferenceYPos(SystemSettings.HEIGHT);
    this.$.bar    = new Bar(this, barXpos, barYpos, BarSettings.X_SIZE, BarSettings.Y_SIZE, BarSettings.COLOR);

    // create ball
    const ballXpos = BarSettings.getReferenceXPos(SystemSettings.WIDTH);
    const ballYpos = BarSettings.getReferenceYPos(SystemSettings.HEIGHT) - 150;
    this.$.ball    = new Ball(this, ballXpos, ballYpos, BallSettings.RADIUS, BallSettings.COLOR).setVector(3, 3);

    // key setup
    keyInput.setup(this);
  }

  update() {
    const bar  = this.$.bar;
    const ball = this.$.ball;

    const adjustBallPos = {
      top   : (blockObj) => blockObj.getTopCenter().y    - ball.radius - 1,
      bottom: (blockObj) => blockObj.getBottomCenter().y + ball.radius + 1,
      left  : (blockObj) => blockObj.getLeftCenter().x   - ball.radius - 1,
      right : (blockObj) => blockObj.getRightCenter().x  + ball.radius + 1,
    };

    // controll bar
    if (keyInput.isDown('left')) {
      bar.moveRelative(-BarSettings.X_SPEED, 0, true);
    }
    if (keyInput.isDown('right')) {
      bar.moveRelative(BarSettings.X_SPEED, 0, true);
    }

    // bound ball
    if (ball.collisionWallX()) {
      ball.setVector(-ball.vector.x, ball.vector.y);
    }
    if (ball.collisionWallY()) {
      ball.setVector(ball.vector.x, -ball.vector.y);
    }

    const barCollision = Collision.rect2circle(bar, ball);
    if (Collision.isVertical(barCollision)) {
      ball.y = adjustBallPos[collision](bar);
      ball.setVector(ball.vector.x, -ball.vector.y);
    } else if (Collision.isHorizon(barCollision)) {
      ball.x = adjustBallPos[collision](bar);
      ball.setVector(-ball.vector.x, ball.vector.y);
    } else {
      ball.moveByVector();
    }

    for (const block of this.$.blocks.getChildren()) {
      const blockCollision = Collision.rect2circle(block, ball);

      if (Collision.isVertical(blockCollision)) {
        ball.y = adjustBallPos[blockCollision](block);
        ball.setVector(ball.vector.x, -ball.vector.y);
      } else if (Collision.isHorizon(blockCollision)) {
        ball.x = adjustBallPos[blockCollision](block);
        ball.setVector(-ball.vector.x, ball.vector.y);
      }

      if (blockCollision !== '') {
        block.destroy();
        break;
      }
    }

    // gameover check
    if (this.$.blocks.getChildren().length === 0) {
      this.scene.start('GameOver');
    }
  }
};
