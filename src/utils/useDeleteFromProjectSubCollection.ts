import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { firestore } from '../firebaseIndex';

const useDeleteFromProjectSubCollection = () => {
  const { user }: any = useContext(AuthContext);
  const { currentProject }: any = useContext(UserContext);

  const removeItem = (type: string, item: string) => {
    firestore
      .collection('users')
      .doc(user.uid)
      .collection('Projects')
      .doc(currentProject)
      .collection(type)
      .doc(item)
      .delete()
      .catch((error) => console.error(error));
  };
  return removeItem;
};

export default useDeleteFromProjectSubCollection;
