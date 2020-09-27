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

    this.xMin = this.radius;
    this.xMax = scene.game.canvas.width - this.radius;
    this.yMin = this.radius;
    this.yMax = scene.game.canvas.height - this.radius;

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
   * 上限値、下限値に基づいて次回移動時に壁にぶつかるかどうかを検証する
   * @returns {boolean}
   */
  collisionWallX() {
    const x = this.x + this.vector.x;

    if (x < this.xMin || this.xMax < x) {
      return true
    }
    return false;
  }

  /**
   * 上限値、下限値に基づいて次回移動時に壁にぶつかるかどうかを検証する
   * @returns {boolean}
   */
  collisionWallY() {
    const y = this.y + this.vector.y;

    if (y < this.yMin || this.yMax < y) {
      return true
    }
    return false;
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
