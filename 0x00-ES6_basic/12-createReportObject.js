// function named createReportObject whose parameter, employeesList
export default function createReportObject(employeesList) {
  return { allEmployees: { ...employeesList } };
}
