// Using the prototype below, return a promise. The parameter is a boolean

export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve(
        { status: 200, body: 'Success' },
      );
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise;
}
