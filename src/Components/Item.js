import { React, useState } from "react";

function Item({items, setItems, name, completed, id}) {

  const [item, setItem] = useState({name, completed, id});
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleChange = (event) => {
    setEdit(!edit);

    const text = document.getElementById(`content-${id}`).innerText;

    setItem({...item, name: text})
    setItems(items.map((element) => element.id === id ? {...element, name: text} : element));
  }

  const handleDelete = () => {
    setItems(items.filter((item) => item.id !== id))
  }
    
  const handleChecked = (event) => {

    const checked = event.target.checked

    setItems(items.map((element) => element.id === id ? {...element, completed: checked} : element));

  }

  return (
    <>
      <div className="item-container">
        <div className="item-selection">
          <input id={id} type="checkbox" disabled={edit} checked={item.completed} onChange={handleChecked} />
          <label htmlFor={id} id={`content-${id}`} contentEditable={edit} suppressContentEditableWarning={true} >{item.name}</label>
        </div>
        <div className="item-actions">
          {edit ? <span className="material-symbols-sharp" onClick={handleChange}>done</span> : <span className="material-symbols-sharp" onClick={handleEdit}>edit</span>}
          <span className="material-symbols-sharp" onClick={handleDelete}>delete</span>
        </div>
      </div>
    </>
  );
}
  
export default Item;
  