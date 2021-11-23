// Return a promise using thus prototype function getResponseFromAPI()
function getResponseFRomAPI() {
  return new Promise(function(resolve, reject) => {
    // if true, resolve to "Stuff worked"    
    if (true) {
      resolve("Stuff worked!");
    } else {
    // if false, reject with the message "it broke"
      reject(Error("It broke"));
    }
  });
}

export default getResponseFromAPI;
