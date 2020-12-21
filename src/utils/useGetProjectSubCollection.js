import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

function useGetProjectSubCollection(type) {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { currentProject } = useContext(UserContext);

  useEffect(() => {
    if (user && currentProject) {
      console.log('sub collection listener triggered');
      const unsubscribe = firestore
        .collection('users')
        .doc(user.uid)
        .collection('Projects')
        .doc(currentProject)
        .collection(type)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const newDoc = doc.data();
            newDoc.id = doc.id;
            return newDoc;
          });
          setOutput(data);
          setLoading(false);
        });

      return unsubscribe;
    } else {
      console.log(type);
    }
  }, [user, currentProject, type]);

  return { output, loading };
}

export default useGetProjectSubCollection;
