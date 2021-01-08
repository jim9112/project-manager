import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { firestore } from '../firebaseIndex';

const useEditProject = () => {
  const { user }: any = useContext(AuthContext);

  const dbLocation = firestore
    .collection('users')
    .doc(user.uid)
    .collection('Projects');

  const editProject = (id: string, input: {}) => {
    dbLocation
      .doc(id)
      .set(input)
      .catch((error) => console.error(error));
  };
  return editProject;
};

export default useEditProject;
