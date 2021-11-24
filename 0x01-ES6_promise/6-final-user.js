/* imports the signed up user from 4-user-promise
   imports photo from 5-photo-reject */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// takes three arguments
function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  // settles the promises and returns an array
  return Promise.allSettled([uploadPhoto(filename), signUpUser(firstName, lastName)]);
}

export default handleProfileSignup;
