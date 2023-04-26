import { useState } from "react";

function Search({search, setSearch}){

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