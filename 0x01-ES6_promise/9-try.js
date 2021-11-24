/* Function named guardrail that accepts
   argument mathFunction(Function). Create and return
   an array named queue
*/
export default function guardrail(mathFunction) {
  // define a variable lst
  const lst = [];

  try {
    lst.push(mathFunction());
  } catch (new_error) {
      lst.push(new_error.toString());
  } finally {
    lst.push('Guardrail was processed');
  }
  return lst;
}
