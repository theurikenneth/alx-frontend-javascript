/* Import ClassRoom class from 0-classroom.js
   Implement the function initializeRooms
   Returns an array with sizes 19, 20 and 34 */
import ClassRoom from './0-classroom';

// implement a function initializeRooms
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
