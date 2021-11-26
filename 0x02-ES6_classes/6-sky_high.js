/* Import Building from 5-building.js
   Implement class SkyHighBuilding with
   constructor attributes with underscore
   attribute */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter for sqft object
  get sqft() {
    return this._sqft;
  }

  // getter for floors object
  get floors() {
    return this._floors;
  }

  // Overide the method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
