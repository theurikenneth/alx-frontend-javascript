export default function taskBlock(trueOrFalse) {
  /* changes var to const */
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
  /* eslint-disable */
  const task = true;
  const task2 = false;
}

  return [task, task2];
}
