// function named createReportObject with employeesList
export default function createReportObject(employeesList) {
  return { allEmployees: { ...employeesList } };
}
