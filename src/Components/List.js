import Item from "./Item";


function List({items, setItems}){
    return(
        <>
            <ul className="items-container">
                {items.map((item, index) => (
                    <Item key={item.id} id={item.id} items={items} setItems={setItems} name={item.name} completed={item.completed} />
                ))}
            </ul>
        </>
    )
}

export default List;