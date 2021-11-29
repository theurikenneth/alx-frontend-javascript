// create a function getStudentsByLocation
// accepts getListStudents and city
export default function getStudentsByLocation(student_array, city) {
  return student_array.filter((x) => x.location === city);
}
