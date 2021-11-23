// Return a promise using thus prototype function getResponseFromAPI()
function getResponseFRomAPI() {
  return new Promise(function(resolve, reject) => {
    if (true) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });
}

export default getResponseFromAPI;
