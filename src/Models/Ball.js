export default class Ball extends Phaser.GameObjects.Arc {
  /**
   * ボールを生成する
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @returns {Ball}
   */
  constructor(scene, x, y, radius, fillColor, fillAlpha) {
    super(scene, x, y, radius, 0, 360, false, fillColor, fillAlpha);
    scene.add.existing(this);

    this.setVector(0, 0);

    this.xMin = this.radius / 2;
    this.xMax = scene.game.canvas.width - this.radius / 2;
    this.yMin = this.radius / 2;
    this.yMax = scene.game.canvas.height - this.radius / 2;

    return this;
  }

  /**
   * ベクトルを設定する
   * @param {number} x
   * @param {number} y
   */
  setVector(x = 0, y = 0) {
    this.vector = {x: x, y: y};
    return this;
  }

  /**
   * ベクトルに合わせて動く
   * @returns {Ball}
   */
  moveByVector() {
    return this.moveRelative(this.vector.x, this.vector.y, true);
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
    if (this.y < this.yMin) {
      this.y = this.yMin;
    }
    if (this.y > this.yMax) {
      this.y = this.yMax;
    }
    return this;
  }
}
