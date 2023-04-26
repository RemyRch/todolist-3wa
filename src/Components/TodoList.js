import Form from "./Form";
import List from "./List";

import uniqid from 'uniqid';

import { React, useState } from "react";

function TodoList() {
  const [items, setItems] = useState([
    { name: "Item 1", completed: false, id: uniqid() },
    { name: "Item 2", completed: true, id: uniqid() },
    { name: "Item 3", completed: false, id: uniqid() },
    { name: "Item 4", completed: true, id: uniqid() },
    { name: "Item 5", completed: true, id: uniqid() },
    { name: "Item 6", completed: false, id: uniqid() },
    { name: "Item 7", completed: false, id: uniqid() },
  ]);

  return (
    <>
      <main>
        <section className="todolist">
          <div className="todolist-header">
            <h1 className="todolist-title">Todo List</h1>
            <Form items={items} setItems={setItems} />
          </div>
          <div className="todolist-items">
            <h2 className="todolist-items-title">A faire :</h2>
            <List items={items} setItems={setItems} />
          </div>
        </section>
      </main>
    </>
  );
}

export default TodoList;
