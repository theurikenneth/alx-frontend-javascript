/* Create a function cleanSet
   REturns startString and accepts two args */
export default function cleanSet(set, startString) {
  // ensure that the type is a string
  if (startString && typeof startString === 'string') {
    const arr = [];
    for (const i of set) {
      if (i.startsWith(startString)) {
        arr.push(i.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return '';
}
