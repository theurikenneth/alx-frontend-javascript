/* Create a function getStudentIdsSum
   Should accept students' list */
export default function getStudentIdsSum(students) {
  // confirm that the argument is an array
  if (Object.getPrototypeOf(students) === Array.prototype) {
    // gathering of ids using map
    const student_ids = students.map((i) => i.student_id);
    // adding all elements
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return student_ids.reduce(reducer);
  }
  return [];
}
