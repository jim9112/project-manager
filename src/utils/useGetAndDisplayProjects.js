import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { firestore } from '../firebaseIndex';

function useGetAndDisplayProjects() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const updatedProjects = { ...projects };
  useEffect(() => {
    if (user) {
      firestore
        .collection('users')
        .doc(user.uid)
        .collection('Projects')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            updatedProjects[doc.id] = {
              name: doc.data().name,
              desc: doc.data().desc,
            };
          });
        })
        .then(setProjects(updatedProjects));
    }
  }, [user]);

  return [projects, loading];
}

export default useGetAndDisplayProjects;
