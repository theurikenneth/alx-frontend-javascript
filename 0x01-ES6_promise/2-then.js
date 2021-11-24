// Using the function prototype append three handlers

function handleResponseFromAPI(promise) {
  return promise
    // appends handler .then()   
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    // appends handler .catch()
    .catch(() => Error())
    // appends handler .finally()
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
