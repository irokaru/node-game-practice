import Validator from '../Util/Validator';

class ControllableObject {
 constructor() {
    this.list = {};
  }

  /**
   * オブジェクトを追加する
   * @param {string} key
   * @param {Phaser.GameObjects} obj
   */
  add(key, obj) {
    if (this._hasKeyInList(key)) {
      throw new Error('key already exists');
    }

    this.list[key] = obj;
  }

  /**
   * オブジェクトを取得する
   * @param {string} key
   * @return {Phaser.GameObjects}
   */
  get(key) {
    if (!this._hasKeyInList(key)) {
      throw new Error('key is not exists');
    }

    return this.list[key];
  }

  /**
   * オブジェクトがあるか確認する
   * @param {string} key
   * @returns {Phaser.GameObjects}
   */
  has(key) {
    return this._hasKeyInList(key);
  }

  /**
   * リスト内のオブジェクトを削除する
   * @param {string} key
   */
  remove(key) {
    if (!this._hasKeyInList(key)) {
      throw new Error('key is not exists');
    }

    delete this.list[key];

    return this;
  }

  /**
   * list内にkeyが存在するか
   * @param {string} key
   */
  _hasKeyInList(key) {
    return Validator.hasKeyInObject(this.list, key);
  }
};

export default new ControllableObject();
