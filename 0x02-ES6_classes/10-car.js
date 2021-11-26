/* Implement class Car
   Constructor attributes: brand, motor, color
   attribute stored in an underscore attribute */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* define a static method get
     Symbol is an object whose constructor
     returns a symbol primitive
     Symbol.species specifies a function-valued
     property that the constructor function uses
     to create derived objects */
  static get [Symbol.species]() {
    return this;
  }

  // Add method cloneCar
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
