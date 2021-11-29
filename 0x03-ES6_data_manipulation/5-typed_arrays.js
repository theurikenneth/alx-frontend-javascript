/* create a function createInt8TypedArray
   returns ArrayBuffer with Int8
   accepts length, position and value arguments */
export default function createInt8TypedArray(length, position, value) {
  // arraybuffer represents length of fixed data buffer
  const buffer = new ArrayBuffer(length);
  // dataview helps read and write different types of arraybuffer
  const view = new DataView(buffer, 0, length);

  if (position >= length) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
