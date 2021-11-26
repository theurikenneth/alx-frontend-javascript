/* Implement a clas HolbertonCourse
   Constructor attributes are name, length and students
   attributes are scored in underscore attribute */
export default class HolbertonCourse {
  // initialize the constructor
  constructor(name, length, students) {
    // this is similar to self in python
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // get returns name element from map object
  get name() {
    return this._name;
  }

  // set allows storage of unique values
  set name(name_value) {
    // checks whether name_value is a string
    if (typeof name_value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name_value;
  }

  // get returns length element
  get length() {
    return this._length;
  }

  // set allows storage of length value
  set length(length_value) {
    // checks whether length_value is a number
    if (typeof length_value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length_value;
  }

  // get returns students element
  get students() {
    return this._students;
  }

  // set allows storage of student value
  set students(current_students) {
    if (typeof current_students === "object") {
      for (const student in current_students) {
        if (typeof student !== "string") {
          throw new TypeError("Students must be an array");
        }
      }
    } else {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = current_students;
  }
}
