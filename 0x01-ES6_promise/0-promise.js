// Return a promise using getResponseFromAPI()
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // if true, resolve to "Stuff worked"
    if (true) {
      resolve("Stuff worked");
    // else reject to "it broke"
    } else {
      reject("It broke");
    }
  });
}

export default getResponseFromAPI;
