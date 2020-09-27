export default class Bar extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, fillColor, fillAlpha) {
    super(scene, x, y, width, height, fillColor, fillAlpha);
    scene.add.existing(this);

    this.xMin = this.width / 2;
    this.xMax = scene.game.canvas.width - this.width / 2;

    return this;
  }

  /**
   * Barを相対移動させる
   * @param {number} x
   * @param {number} y
   * @param {boolean} fitting
   * @returns {Bar}
   */
  moveRelative(x = 0, y = 0, fitting = false) {
    this.x += x;
    this.y += y;

    if (fitting) {
      this.fitInCanvas();
    }

    return this;
  }

  /**
   * 上限値、下限値に基づいて座標を画面内に収める
   * @returns {Bar}
   */
  fitInCanvas() {
    if (this.x < this.xMin) {
      this.x = this.xMin;
    }
    if (this.x > this.xMax) {
      this.x = this.xMax;
    }
    return this;
  }
}
