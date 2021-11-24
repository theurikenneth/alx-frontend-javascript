/* Function named guardrail that accepts
   argument mathFunction(Function). Create and return
   an array named queue */
export default function guardrail(mathFunction) {
  // define a variable queue
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (new_error) {
    queue.push(new_error.toString());
  } finally {
    queue.push('Guardrail was processed')
  }
  return queue;
}
