class BlockList {
  constructor() {
    this.container = [];
  }

  /**
   * @param {Phaser.GameObjects.Graphics} item
   * @return {void}
   */
  add(item) {
    this.container.push(item);
  }

  /**
   * @param {number} index
   * @return {Phaser.GameObjects.Graphics}
   */
  get(index) {
    return this.container[index];
  }

  /**
   * @returns {array<Phaser.GameObjects.Graphics>}
   */
  all() {
    return this.container;
  }

  moveTo(index, x, y) {
    return this.container[index].moveTo(x, y);
  }
}

export default new BlockList();
