// Return a promise using getResponseFromAPI()
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // if true, resolve
    if (true) {
      resolve();
    // else reject
    } else {
      reject();
    }
  });
}

export default getResponseFromAPI;
