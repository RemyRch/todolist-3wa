import { React, useState } from "react";

function Item({items, setItems, name, completed, id}) {

  const [item, setItem] = useState({name, completed, id});
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    setItems(items.filter((e) => e.id !== id))
  }
    
  const handleChecked = (event) => {
    setItem({...item, completed: event.target.checked})
  }

  return (
    <>
      <div className="item-container">
        <div className="item-selection">
          <input id={id} type="checkbox" disabled={edit} checked={item.completed} onChange={handleChecked}/>
          <label htmlFor={id} contentEditable={edit} suppressContentEditableWarning={true} >{item.name}</label>
        </div>
        <div className="item-actions">
          <span className="material-symbols-sharp" onClick={handleEdit}>edit</span>
          <span className="material-symbols-sharp" onClick={handleDelete}>delete</span>
        </div>
      </div>
    </>
  );
}
  
export default Item;
  