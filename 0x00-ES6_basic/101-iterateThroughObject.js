// function iterateThroughObject
export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const x, val] of reportWithIterator.entries()) {
    if (x !== reportWithIterator.length - 1) {
      employees += `${val} | `;
    } else {
      employees += val;
    }
  }
}
