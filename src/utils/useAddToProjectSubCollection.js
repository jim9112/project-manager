import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

const useAddToProjectSubCollection = (type) => {
  const { user } = useContext(AuthContext);
  const { currentProject } = useContext(UserContext);

  const dbLocation = firestore
    .collection('users')
    .doc(user.uid)
    .collection('Projects')
    .doc(currentProject)
    .collection(type);
  const addToCollection = (data) => {
    dbLocation.add(data).catch((error) => console.log(error));
  };
  return addToCollection;
};

export default useAddToProjectSubCollection;
