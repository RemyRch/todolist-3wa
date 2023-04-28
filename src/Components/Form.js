import { React, useContext, useState } from "react";

import uniqid from 'uniqid';
import { TaskContext } from "../Context/TaskContext";

function Form() {

  const { tasks, setTasks } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleNewItem = (event) => {
    event.preventDefault();
    setTasks([...tasks, {name: task, completed: false, id: uniqid()}])
    setTask("");
  };

  const handleChange = (event) => setTask(event.target.value);

  return (
    <>
      <form className="todolist-input fcc">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Que voulez vous ajouter ?"
        />
        <button
          type="submit"
          onClick={handleNewItem}
          className="fcc"
        >
          <span className="material-symbols-sharp">add</span>
        </button>
      </form>
    </>
  );
}
  
export default Form;
  