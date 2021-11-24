/* import uploadPhoto and createUser from utils.js
   resolve all promises and log body, firstName and LastName
*/
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // resolves all promises
  return Promise.all([uploadPhoto(), createUser()])
  // uses .then() to return a promise
    .then((values) => {
      // body is first element of the values
      const { body } = values[0];
      // name is the second element of values
      const { firstName, lastName } = values[1];

      // outputs body and names
      console.log(`${body} ${firstName} ${lastName}`);
    })
    // uses .catch() deals with rejected cases
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
