import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { firestore } from '../firebaseIndex';

function useGetAndDisplayProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getProjects = () => {
      if (user) {
        firestore
          .collection('users')
          .doc(user.uid)
          .collection('Projects')
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
              const newDoc = doc.data();
              newDoc.id = doc.id;
              return newDoc;
            });
            setProjects(data);
            setLoading(false);
            console.log(projects);
          });
      }
    };
    getProjects();
  }, [user]);

  return [projects, loading];
}

export default useGetAndDisplayProjects;
