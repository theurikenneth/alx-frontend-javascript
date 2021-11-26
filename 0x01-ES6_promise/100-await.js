/* Import uploadPhoto and createUser from utils.js
    Write an async function asyncUploadUser */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // variable photo and pause it
    const photo = await uploadPhoto();
    // variable use and pause it
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
