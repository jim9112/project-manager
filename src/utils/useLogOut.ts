import { useContext } from 'react';
import { auth } from '../firebaseIndex';
import AuthContext from '../context/AuthContext';

const useLogOut = () => {
  const { setUser }: any = useContext(AuthContext);

  const handleLogOut = (history: { push: (loaction: string) => void }) => {
    auth.signOut();
    setUser(null);
    history.push('/');
  };
  return [handleLogOut];
};

export default useLogOut;
