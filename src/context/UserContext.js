import React, { createContext, useState } from 'react';
const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    project1: {
      name: 'My first project',
      desc: 'Here is some info about my first project',
    },
    project2: {
      name: 'My second project',
      desc: 'Here is a project that is much better than my first project',
    },
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
