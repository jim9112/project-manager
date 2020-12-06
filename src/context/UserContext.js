import React, { createContext, useState } from 'react';
import { sampleProjects } from '../sampleData'
const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [projects, setProjects] = useState({
   ...sampleProjects
  });

  const context = {
    projects,
    setProjects,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
