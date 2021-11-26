/* Implement the class Currency
   with attributes code and name and store using an underscore
   implement a getter and setter for each attribute
   implement a method displayFullCurrency */
export default class Currency {
  constructor(code, name) {
  // creates objects using this
    this._code = code;
    this._name = name;
  }

  // getter for code object
  get code() {
    return this._code;
  }

  // setter for code
  set code(code_value) {
    this._code = code_value;
  }

  // getter for name object
  get name() {
    return this._name;
  }

  set name(name_value) {
    this._name = name_value;
  }

  // implement the method displayFullCurrency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
