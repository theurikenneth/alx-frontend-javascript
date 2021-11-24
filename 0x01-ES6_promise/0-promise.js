// Return a promise using thus prototype function getResponseFromAPI()
export default function getResponseFromAPI() {
  const myPromise = new Promise(
    // if true, resolve to "Stuff worked"    
    (resolve) => {
      resolve();
    // no need for reject resolve to "it broke"
    },  
  );

  return myPromise;
}

