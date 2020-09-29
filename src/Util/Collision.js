export default class Collision {
  /**
   * 矩形同士の当たり判定
   * @param {Phaser.GameObjects.Rectangle} rect1
   * @param {Phaser.GameObjects.Rectangle} rect2
   * @returns {boolean}
   */
  static rect2rect(rect1, rect2) {
    if (rect1.x - rect2.x < rect1.width / 2 + rect2.width / 2 &&
        rect1.y - rect2.y < rect1.height / 2 + rect2.height / 2) {
      return true;
    }

    return false;
  }

  /**
   * 矩形と円の当たり判定
   * 円が矩形のどの位置と当たったかを返す
   * @param {Phaser.GameObjects.Rectangle} rect
   * @param {Phaser.GameObjects.Arc} circle
   * @returns {string}
   */
  static rect2circle(rect, circle) {
    let x = circle.x;
    let y = circle.y;
    let edge = '';

    if (circle.x < rect.getLeftCenter().x) {
      x = rect.getLeftCenter().x;
      edge = 'left';
    } else if (circle.x > rect.getRightCenter().x) {
      x = rect.getRightCenter().x;
      edge = 'right';
    }

    if (circle.y < rect.getTopCenter().y) {
      y = rect.getTopCenter().y;
      edge = 'top';
    } else if (circle.y > rect.getBottomCenter().y) {
      y = rect.getBottomCenter().y;
      edge ='bottom';
    }

    const dx = circle.x - x;
    const dy = circle.y - y;
    const dist = Math.sqrt((dx*dx) + (dy*dy));

    if (dist < circle.radius) {
      return edge;
    }

    return '';
  }

  /**
   * 水平方向にぶつかったかどうかを返す
   * @param {string} collisionResult
   * @returns {boolean}
   */
  static isHorizon(collisionResult) {
    return collisionResult === 'right' || collisionResult === 'left';
  }

  /**
   * 垂直方向にぶつかったかどうかを返す
   * @param {string} collisionResult
   * @returns {boolean}
   */
  static isVertical(collisionResult) {
    return collisionResult === 'top' || collisionResult === 'bottom';
  }
}
