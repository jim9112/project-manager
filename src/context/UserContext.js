import React, { createContext, useState } from 'react';
import { sampleProjects, sampleNotes } from '../sampleData';
const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState(null);

  const [projects, setProjects] = useState({
    ...sampleProjects,
  });
  const [notes, setNotes] = useState([...sampleNotes]);

  const context = {
    projects,
    setProjects,
    notes,
    setNotes,
    currentProject,
    setCurrentProject,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
