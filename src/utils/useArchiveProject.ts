import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { firestore } from '../firebaseIndex';

const useArchiveProject = () => {
  const { user }: any = useContext(AuthContext);

  const dbLocation = firestore
    .collection('users')
    .doc(user.uid)
    .collection('Projects');

  const archiveProject = (id: string) => {
    dbLocation.doc(id).update({ archived: true });
  };
  return archiveProject;
};

export default useArchiveProject;
