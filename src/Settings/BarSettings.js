export default {
  X_SIZE : 100,
  Y_SIZE : 15,
  X_SPEED: 5,
  COLOR  : 0xFFCCCC,

  /**
   * キャンバスの横サイズからBarの初期X座標を返す
   * @param {number} canvasWidth
   * @returns {number}
   */
  getReferenceXPos (canvasWidth) {
    return canvasWidth / 2;
  },

  /**
   * キャンバスの縦サイズからBarの初期Y座標を返す
   * @param {number} canvasHeight
   * @returns {number}
   */
  getReferenceYPos (canvasHeight) {
    return canvasHeight * 13 / 15;
  },
};
