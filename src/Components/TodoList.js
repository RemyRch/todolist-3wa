import Form from "./Form";
import List from "./List";
import Search from "./Search";

import uniqid from 'uniqid';

import { React, useState } from "react";

function TodoList() {
  const [items, setItems] = useState([
    { name: "Faire la cuisine", completed: false, id: uniqid() },
    { name: "Réparer la voiture", completed: true, id: uniqid() },
    { name: "Manger le lapin", completed: false, id: uniqid() },
    { name: "Réparer le lave vaisselle", completed: true, id: uniqid() },
    { name: "Nourrir le lapin", completed: true, id: uniqid() },
    { name: "Conduire la 2008", completed: false, id: uniqid() },
    { name: "Faire de la moto", completed: false, id: uniqid() }
  ]);

  const [search, setSearch] = useState("");

  return (
    <>
      <main>
        <section className="todolist">
          <div className="todolist-header">
            <h1 className="todolist-title">Todo List</h1>
            <Form items={items} setItems={setItems} />
          </div>
          <div className="todolist-search">
            <h2 className="todolist-items-title">Rechercher :</h2>
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="todolist-items">
            <h2 className="todolist-items-title">A faire :</h2>
            <List items={items} setItems={setItems} searched={search} />
          </div>
        </section>
      </main>
    </>
  );
}

export default TodoList;
