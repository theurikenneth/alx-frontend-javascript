/* export uploadPhoto function and accepts 
   one argument fileName */
export default function uploadPhoto(filename) {
  return Promise.reject(
    Error(`${filename} cannot be processed`),
  );
}
