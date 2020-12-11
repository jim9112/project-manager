import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

function useGetData() {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  //  to do:
  // take in type of data to get
  // subscribe to changes
  // adjust state accordingly
  // set data in component

  useEffect(() => {
    if (user) {
      const unsubscribe = firestore
        .collection('users')
        .doc(user.uid)
        .collection('Projects')
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const newDoc = doc.data();
            newDoc.id = doc.id;
            console.log('listener triggered');
            return newDoc;
          });
          setOutput(data);
          setLoading(false);
        });

      return unsubscribe;
    }
  }, [user]);

  return { output, loading };
}

export default useGetData;
