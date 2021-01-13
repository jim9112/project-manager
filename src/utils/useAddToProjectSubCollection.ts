import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

const useAddToProjectSubCollection = (type: 'Bugs' | 'Tasks' | 'Notes') => {
  const { user }: any = useContext(AuthContext);
  const { currentProject }: any = useContext(UserContext);

  const addToCollection = (data: {}) => {
    firestore
      .collection('users')
      .doc(user.uid)
      .collection('Projects')
      .doc(currentProject.projKey)
      .collection(type)
      .add(data)
      .catch((error) => console.error(error));
  };
  return addToCollection;
};

export default useAddToProjectSubCollection;
