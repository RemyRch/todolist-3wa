import Item from "./Item";

function List({ items, setItems, searched }) {
  const result = () => {
    if (
      items.filter((item) => { return item.name.toLowerCase().includes(searched.toLowerCase()) }).length == 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {result() ? <h3 className="list-title">Pas de tache trouvée</h3> : ""}
      <ul className="items-container">
        {items.map((item, index) => {
          if (item.name.toLowerCase().includes(searched.toLowerCase()))
            return (
              <Item
                key={item.id}
                id={item.id}
                items={items}
                setItems={setItems}
                name={item.name}
                completed={item.completed}
              />
            );
        })}
      </ul>
    </>
  );
}

export default List;
