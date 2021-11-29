/* create the function updateStudentGradeByCity
   accepts list of students, city and newGrades
   combines map and filter */
export default function updateStudentGradeByCity(students_list, city, newGrades) {
  // check whether arguments are arrays
  if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
    return [];
  }
  if (Object.getPrototypeOf(students_list) !== Array.prototype) {
    return [];
  }
  return students_list((students) => students.location ===city).map((students) => {
    const [new_grade] = new_grade.filter((i) => i.students);
    return {students, grade: new_grade};
  });
}
