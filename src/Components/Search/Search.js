import React from "react";
import './Search.css'

const Search = (props) => {
    console.log(props.value)
    return (
        <div className="Search">
            <input type="search" placeholder="Search" onChange={props.searchChanged} value={props.value} />
        </div>
    );
}

export default Search