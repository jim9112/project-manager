import React, { createContext, useState } from 'react';
const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState(null);

  const context = {
    currentProject,
    setCurrentProject,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
