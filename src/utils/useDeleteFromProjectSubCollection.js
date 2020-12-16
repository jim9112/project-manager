import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

const useDeleteFromProjectSubCollection = () => {
  const { user } = useContext(AuthContext);
  const { currentProject } = useContext(UserContext);

  const removeItem = (type, item) => {
    console.log('Deleting');
    firestore
      .collection('users')
      .doc(user.uid)
      .collection('Projects')
      .doc(currentProject)
      .collection(type)
      .doc(item)
      .delete()
      .catch((error) => console.log(error));
  };
  return removeItem;
};

export default useDeleteFromProjectSubCollection;
