import React, { createContext, useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseIndex';

interface AuthInterface {
  uid: string;
}

const AuthContext = createContext<AuthInterface | {}>({});

const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthInterface | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth: any) => {
      setUser(userAuth);
    });
  }, []);
  if (user) {
    firestore
      .collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Its there!!');
        } else {
          firestore.collection('users').doc(user.uid).set({});
        }
      })
      .catch((err) => console.error(err));
  }
  const context = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
