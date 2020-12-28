import React, { createContext, useState } from 'react';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
const UserContext = createContext({});

const UserContextProvider = ({ children }: any) => {
  const [currentProject, setCurrentProject] = useState(null);
  const {
    output: taskOutput,
    loading: taskLoading,
  } = useGetProjectSubCollection('Tasks');
  const context = {
    currentProject,
    setCurrentProject,
    taskOutput,
    taskLoading,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
