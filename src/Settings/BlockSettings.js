export default {
  X_NUM : 10,
  Y_NUM : 5,
  X_SIZE: 50,
  Y_SIZE: 20,
  COLOR : 0xCCCCCC,

  /**
   * キャンバスの横サイズからBlockの初期X座標を返す
   * @param {number} canvasWidth
   * @returns {number}
   */
  getReferenceXPos (canvasWidth) {
    return (canvasWidth - (this.X_NUM * (this.X_SIZE + 1))) / 2;
  },

  /**
   * キャンバスの縦サイズからBlockの初期Y座標を返す
   * @param {number} canvasHeight
   * @returns {number}
   */
  getReferenceYPos (canvasHeight) {
    return canvasHeight / 15;
  },
};
