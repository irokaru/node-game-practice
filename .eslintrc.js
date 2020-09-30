module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "globals": {
    "Phaser": true
  },
  "rules": {
    "semi": "error",
    "lines-between-class-members": "error",
  }
};
