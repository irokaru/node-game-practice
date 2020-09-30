export default class KeyController {
  /**
   * キー入力のセットアップ用
   * @param {Phaser.Scene} scene
   * @returns {KeyController}
   */
  setup(scene) {
    this.keys = scene.input.keyboard.addKeys({
      left: 'left',
      right: 'right'
    });
    return this;
  }

  /**
   *
   * @param {string} keyName
   * @returns {boolean}
   */
  isDown(keyName) {
    return this.keys[keyName].isDown;
  }
}
