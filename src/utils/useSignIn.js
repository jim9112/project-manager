const useSignIn = () => {
  // to do: check if user already exsists
  // create account if they dont
  // send user to their page

  const handleSignIn = (signInMethod) => {
    signInMethod();
  };
  return [handleSignIn];
};

export default useSignIn;
