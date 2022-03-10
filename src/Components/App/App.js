import React, { useState } from "react";
import { robots } from "../../Data/robots";
import CardList from "../CardList/CardList";
import Search from "../Search/Search";
import "./App.css";

const App = () => {
  const [dataSource, setDataSource] = useState(() => robots);
  const [searchValue, setSearchValue] = useState("");

  const filterRobots = (searchValue) => {
    setDataSource(
      robots.filter((x) => {
        return x.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };
  const onSearchChanged = (event) => {
    filterRobots(event.target.value);
    setSearchValue(event.target.value);
  };

  const onCardClick = (cardName) => {
    console.log(cardName);
    setSearchValue(cardName);
    filterRobots(cardName);
  };

  return (
    <div className="container">
      <h1>My first app in React</h1>
      <Search searchChanged={onSearchChanged} value={searchValue} />
      <CardList dataSource={dataSource} cardClick={onCardClick} />
    </div>
  );
};

export default App;
