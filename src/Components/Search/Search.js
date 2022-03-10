import React from "react";
import "./Search.css";

const Search = (props) => {
  const { searchChanged = () => {}, value = "" } = props;
  return (
    <div className="Search">
      <input
        type="search"
        placeholder="Search"
        onChange={searchChanged}
        value={value}
      />
    </div>
  );
};

export default Search;
