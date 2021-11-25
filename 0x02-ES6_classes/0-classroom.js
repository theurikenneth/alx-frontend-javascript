/* Implement a class ClassRoom that accepts one attribute
   maxStudentsSize */
export default class ClassRoom {
  /* constructor method helps create and initialize
     an object created with a class */
  constructor(maxStudentsSize) {
    /* https://stackoverflow.com/questions/4484424/is-the-underscore-
       prefix-for-property-and-method-names-merely-a-convention
       this keyword refers to the object it belongs to */
    this._maxStudentsSize = maxStudentsSize;
  }
}
