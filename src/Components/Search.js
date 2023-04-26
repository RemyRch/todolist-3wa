import { useState } from "react";

function Search({search, setSearch}){

    const handleSearch = (event) => setSearch(event.target.value.toLowerCase())

    return(
        <>
            <form className="todolist-input fcc">
                <input
                    type="text"
                    onInput={handleSearch}
                    placeholder="Que voulez vous rechercher ?"
                />
            </form>
        </>
    )
}

export default Search;