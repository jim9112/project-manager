import { useContext } from 'react';
import { firestore } from '../firebaseIndex';
import AuthContext from '../context/AuthContext';

const useSignIn = () => {
  const { user }: any = useContext(AuthContext);

  // check to see if user exsists, if not then create user
  const checkForProfile = () => {
    if (user) {
      firestore
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
          } else {
            firestore.collection('users').doc(user.uid).set({});
          }
        });
    }
  };

  const handleSignIn = (signInMethod: () => void) => {
    signInMethod();
    checkForProfile();
  };
  return [handleSignIn];
};

export default useSignIn;
