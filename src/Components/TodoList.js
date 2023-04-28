import Form from "./Form";
import List from "./List";
import Search from "./Search";

import { React, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TodoList() {
    
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <main>
        <section className="todolist">
          <div className="todolist-header">
            <h1 className="todolist-title">Todo List</h1>
            <Form />
          </div>
          <div className="todolist-search">
            <h2 className="todolist-items-title">Rechercher :</h2>
            <Search />
          </div>
          <div className="todolist-items">
            <h2 className="todolist-items-title">A faire :</h2>
            <List showed={tasks.filter(task => task.completed === false)} />
          </div>
          <div className="todolist-items">
            <h2 className="todolist-items-title">Fait :</h2>
            <List showed={tasks.filter(task => task.completed === true)} />
          </div>
        </section>
      </main>
    </>
  );
}

export default TodoList;
