import React, { createContext, useState } from 'react';
import { sampleProjects, sampleNotes, sampleTasks } from '../sampleData';
const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState(null);

  const [projects, setProjects] = useState({
    ...sampleProjects,
  });
  const [notes, setNotes] = useState([...sampleNotes]);
  const [todoList, setTodoList] = useState([...sampleTasks]);
  const [bugs, setBugs] = useState([
    {
      archived: false,
      date: 'a date',
      title: 'Some Bug Name',
      desc: 'A few words about my bug',
      priority: 'High',
    },
  ]);

  const context = {
    projects,
    setProjects,
    notes,
    setNotes,
    todoList,
    setTodoList,
    bugs,
    setBugs,
    currentProject,
    setCurrentProject,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
