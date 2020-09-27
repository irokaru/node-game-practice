export default class Validator {
  /**
  * obj内にkeyが存在するか
  * @param {string} key
  * @param {object} obj
  */
  static hasKeyInObject(key, obj) {
   return Object.keys(obj).includes(key);
 }
}
