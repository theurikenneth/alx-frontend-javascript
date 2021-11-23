export function taskFirst() {
  /* change var to const  */
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  /* change var to let */
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
