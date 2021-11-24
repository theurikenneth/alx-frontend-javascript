B/* imports the signed up user from 4-user-promise
   imports photo from 5-photo-reject */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// takes three arguments
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // defines the variable userInfo
  // pauses until the promised is settled
  const userInfo = await signUpUser(firstName, lastName).then((info) => ({
    status: 'fulfilled',
    value: info,
  }));

  // defines the variable photoInfo
  // awaits until promise is settled
  const photoInfo = await uploadPhoto(fileName).catch((newError) => ({
    status: 'rejected',
    value: newError.toString(),
  }));

  return Promise.resolve([userInfo, photoInfo]);
}
