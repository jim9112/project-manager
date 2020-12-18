import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

const useEditProjectSubCollection = (type) => {
  const { user } = useContext(AuthContext);
  const { currentProject } = useContext(UserContext);

  const dbLocation = firestore
    .collection('users')
    .doc(user.uid)
    .collection('Projects')
    .doc(currentProject)
    .collection(type);
  const editCollection = (id, data) => {
    dbLocation
      .doc(id)
      .set(data)
      .catch((error) => console.log(error));
  };
  return editCollection;
};

export default useEditProjectSubCollection;
