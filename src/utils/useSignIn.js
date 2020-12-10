import { useContext, useEffect } from 'react';
import { firestore } from '../firebaseIndex';
import AuthContext from '../context/AuthContext';

const useSignIn = () => {
  const { user } = useContext(AuthContext);

  // create account if they dont
  // send user to their page
  const goToHome = (history) => history.push('/home');
  // check to see if user exsists, if not then create user
  const checkForProfile = () => {
    if (user) {
      firestore
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log('its there');
          } else {
            firestore
              .collection('users')
              .doc(user.uid)
              .set({})
              .then(console.log('collection added'));
          }
        });
    }
  };

  const handleSignIn = (signInMethod, history) => {
    signInMethod();
    checkForProfile();
  };
  return [handleSignIn];
};

export default useSignIn;
