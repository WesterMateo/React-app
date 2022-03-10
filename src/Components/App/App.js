import React, { useCallback, useState } from "react";
import { robots } from "../../Data/robots";
import CardList from "../CardList/CardList";
import Search from "../Search/Search";
import "./App.css";

// Note: useCallback is completely optional here, but we are creating three functions that are defined on every re-render
// Also, I would change the names of the variables, as they are a little bit generic and sometimes confusing
const App = () => {
  const [dataSource, setDataSource] = useState(() => robots);
  const [searchValue, setSearchValue] = useState("");

  const filterRobots = useCallback((searchValue) => {
    setDataSource(
      robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, []);

  const onCardClick = useCallback(
    (cardName) => {
      setSearchValue(cardName);
      filterRobots(cardName);
    },
    [filterRobots]
  );

  const onSearchChanged = useCallback(
    (event) => {
      onCardClick(event.target.value);
    },
    [onCardClick]
  );

  return (
    <div className="container">
      <h1>Robots something</h1>
      <Search searchChanged={onSearchChanged} value={searchValue} />
      <CardList dataSource={dataSource} cardClick={onCardClick} />
    </div>
  );
};

export default App;
