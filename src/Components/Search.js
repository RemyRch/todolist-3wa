import { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchContext";

function Search(){
    
    const { search, setSearch } = useContext(SearchContext);

    const handleSearch = (event) => setSearch(event.target.value.toLowerCase())

    return(
        <>
            <form className="todolist-input fcc">
                <input
                    type="search"
                    onInput={handleSearch}
                    placeholder="Que voulez vous rechercher ?"
                />
            </form>
        </>
    )
}

export default Search;