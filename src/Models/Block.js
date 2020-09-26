class Block {
  constructor() {
    this.X_NUM  = 10;
    this.Y_NUM  = 5;
    this.X_SIZE = 50;
    this.Y_SIZE = 20;
  }

  getInitialXPos(canvasSize) {
    return (canvasSize - (BlockConfig.X_NUM * (BlockConfig.X_SIZE + 1))) / 2;
  }

  getInitialYPos(canvasSize) {
    return canvasSize / 15;
  }
}

export default new Block();
