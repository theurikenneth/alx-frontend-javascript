/* Implement a class HolbertonClass
   Constructor: size and location
   stored in an underscore attribute */
export default class HolbertonClass {
  // creates an instance of a class
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return this._location;
    if (hint === 'number') return this._size;
    return 42;
  }
}
