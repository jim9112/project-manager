import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { firestore } from '../firebaseIndex';

const useWriteToDatabase = () => {
  const { user } = useContext(AuthContext);

  const dbLocation = firestore
    .collection('users')
    .doc(user.uid)
    .collection('Projects');
  const addToCollection = (data) => {
    dbLocation.add(data).catch((error) => console.log(error));
  };
  return [addToCollection];
};

export default useWriteToDatabase;
