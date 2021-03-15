import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

function useGetProjectSubCollection(type: string, projectKey: string) {
  const [output, setOutput] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user }: any = useContext(AuthContext);
  const { currentProject }: any = useContext(UserContext);

  useEffect(() => {
    if (user && currentProject) {
      console.log('sub collection listener triggered');
      const unsubscribe = firestore
        .collection('users')
        .doc(user.uid)
        .collection('Projects')
        .doc(projectKey)
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
