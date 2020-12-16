import { useContext } from 'react';
import { auth } from '../firebaseIndex';
import AuthContext from '../context/AuthContext';

const useLogOut = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogOut = (history) => {
    auth.signOut();
    setUser(null);
    history.push('/');
  };
  return [handleLogOut];
};

export default useLogOut;
