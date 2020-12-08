import React, { createContext, useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseIndex';
const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
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
