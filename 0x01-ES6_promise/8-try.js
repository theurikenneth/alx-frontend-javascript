/* Function named divideFunction that takes
   two arguments numerator and denominator */
export default function divideFunction(numerator, denominator) {
  // checks if denominator is 0 to through an error
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  // define a variable and return it
  const answer = numerator / denominator;

  return answer;
}
