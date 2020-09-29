export default class BaseRectangle extends Phaser.GameObjects.Rectangle {
  /**
   * 矩形を生成する
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {number} fillColor
   * @param {number} fillAlpha
   * @returns {BaseRectangle}
   */
  constructor(scene, x, y, width, height, fillColor, fillAlpha) {
    super(scene, x, y, width, height, fillColor, fillAlpha);
    scene.add.existing(this);

    this.xMin = this.width / 2;
    this.xMax = scene.game.canvas.width - this.width / 2;
    this.yMin = this.height / 2;
    this.yMax = scene.game.canvas.height - this.height / 2;

    return this;
  }

  /**
   * Rectangleを相対移動させる
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
