// Using prototype to resolve promise to signup
function signUpUser(firstName, lastName) {
  return Promise.resolve(
    {
      firstName,
      lastName,
    },
  );
}

export default signUpUser;
