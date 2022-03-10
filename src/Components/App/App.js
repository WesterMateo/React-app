import React, { useState } from "react";
import { robots }  from '../../Data/robots';
import CardList from '../CardList/CardList';
import Search from "../Search/Search";
import './App.css'

const App = () => { 
    const [dataSource, setDataSource] = useState(robots) 
    const [searchValue, setSearchValue] = useState("") 

    const onSearchChanged = (event) => {
        setDataSource(robots.filter(x => {
            return x.name.toLowerCase().includes(event.target.value.toLowerCase())
        }));
    }

    const onCardClick = (event) => {
        console.log(event)
        setSearchValue(event)
    }
    
    return (    
        <div className="container"> 
            <h1>My first app in React</h1>
            <Search  searchChanged={ onSearchChanged } value={searchValue}/>           
            <CardList dataSource = { dataSource } cardClick={ onCardClick } />
        </div>    
    );
}

export default App