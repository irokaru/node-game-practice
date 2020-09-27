export default class Block extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, fillColor, fillAlpha) {
    super(scene, x, y, width, height, fillColor, fillAlpha);
    scene.add.existing(this);
    return this;
  }
}
