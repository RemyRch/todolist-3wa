import { React, useState } from "react";

import uniqid from 'uniqid';

function Form({ items, setItems }) {

  const [item, setItem] = useState("");

  const handleNewItem = (event) => {
    event.preventDefault();
    setItems([...items, {name: item, completed: false, id: uniqid()}])
    setItem("");
  };

  const handleChange = (event) => {
    setItem(event.target.value);
  }

  return (
    <>
      <form className="todolist-input fcc">
        <input
          type="text"
          value={item}
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
  