import React, { useState } from 'react';
import { TaskContext } from '../Context/TaskContext';

import uniqid from 'uniqid';


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { name: "Faire la cuisine", completed: false, id: uniqid() },
    { name: "Manger le lapin", completed: false, id: uniqid() },
    { name: "Conduire la 2008", completed: false, id: uniqid() },
    { name: "Faire de la moto", completed: false, id: uniqid() },
    { name: "Réparer la voiture", completed: true, id: uniqid() },
    { name: "Réparer le lave vaisselle", completed: true, id: uniqid() },
    { name: "Nourrir le lapin", completed: true, id: uniqid() }
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};