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

  // function getProjects() {
  //   if (user) {
  //     firestore
  //       .collection('users')
  //       .doc(user.uid)
  //       .collection('Projects')
  //       .get()
  //       .then((querySnapshot) => {
  //         const data = querySnapshot.docs.map((doc) => {
  //           const newDoc = doc.data();
  //           newDoc.id = doc.id;
  //           return newDoc;
  //         });
  //         setProjects(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }
  // useEffect(() => {
  //   getProjects();
  // }, [user]);

  return { projects, loading };
}

export default useGetAndDisplayProjects;
