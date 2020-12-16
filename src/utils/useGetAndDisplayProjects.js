import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { firestore } from '../firebaseIndex';

function useGetAndDisplayProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

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
          setProjects(data);
          setLoading(false);
        });

      return unsubscribe;
    }
  }, [user]);

  return { projects, loading };
}

export default useGetAndDisplayProjects;
