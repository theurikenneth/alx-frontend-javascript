// Return a promise using thus prototype function getResponseFromAPI()
export default function getResponseFRomAPI() {
  const responsePromise = new Promise(
    // if true, resolve to "Stuff worked"    
    (resolve) => {
      resolve("Stuff worked!");
    // no need for reject resolve to "it broke"
    },  
 );

  return responsePromise;
}

