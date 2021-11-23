// Using the function prototype append three handlers

export default function handleResponseFromAPI(promise) {
  return promise
    // appends handler .then()   
    .then(() => (
    // has two attributes
    { status: 200, body: 'success' }))
    // appends handler .catch()
    .catch(() => new Error())
    // appends handler .finally()
    .finally(() => {
      console.log('Got a response from the API');
  });
}