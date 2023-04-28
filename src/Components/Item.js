import { React, useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

function Item({name, completed, id}) {

  const { tasks, setTasks } = useContext(TaskContext);
  const [item, setItem] = useState({name, completed, id});
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleChange = (event) => {
    setEdit(!edit);

    const text = document.getElementById(`content-${id}`).innerText;

    setItem({...item, name: text})
    setTasks(tasks.map((element) => element.id === id ? {...element, name: text} : element));
  }

  const handleDelete = () => setTasks(tasks.filter((item) => item.id !== id))
    
  const handleChecked = (event) => {
    const checked = event.target.checked
    setTasks(tasks.map((element) => element.id === id ? {...element, completed: checked} : element));
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
  