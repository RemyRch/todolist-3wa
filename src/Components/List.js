import { useContext, useState } from "react";
import Item from "./Item";
import { SearchContext } from "../Context/SearchContext";

function List({ showed }) {

    const { search } = useContext(SearchContext);

    const result = () => {
        if (showed.filter((task) => { return task.name.toLowerCase().includes(search.toLowerCase()) }).length == 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
        {result() ? <h3 className="list-title">Pas de tache trouvée</h3> : ""}
        <ul className="items-container">
            {showed.map((item, index) => {
            if (item.name.toLowerCase().includes(search.toLowerCase()))
                return (
                <Item
                    key={item.id}
                    id={item.id}
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
