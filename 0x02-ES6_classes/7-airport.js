/**
 * Build initial class
 *
 * @class Airport
 */
// Implement class Airport
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this.code}`;
  }

  get name() {
    return this._name;
  }

  set name(name_value) {
    if (typeof name_value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name_value;
  }

  get code() {
    return this._code;
  }

  set code(code_value) {
    if (typeof code_value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = code_value;
  }
}
