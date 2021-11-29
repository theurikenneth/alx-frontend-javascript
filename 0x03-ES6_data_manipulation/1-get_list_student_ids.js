// create function getListStudentsIds
export default function getListStudentIds(arr_students) {
  // confirm that the rg is an array
  if (!Array.isArray(arr_students)) return [];
  return arr_students.map((lst) => lst.id);
}
