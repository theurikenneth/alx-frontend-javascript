// function createIteratorObject
export default function createIteratorObject(report) {
  const staff = [];
  for (const [dep, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      staff.push(employee);
    }
  }
  return staff;
}
