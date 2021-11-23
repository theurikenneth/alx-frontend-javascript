// Using the prototype below, return a promise. The parameter is a boolean

export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
    // resolve the promise by passing an object with 2 attributes
      resolve(
        { status: 200, body: 'Success' },
      );
    } else {
    // reject the promise with an error
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise;
}
