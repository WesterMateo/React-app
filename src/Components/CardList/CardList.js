import React from "react";
import Card from "../Card/Card"
import "./CardList.css"

const CardList = (props) => {
    let cards = []
    if (props.dataSource != undefined)
    cards = props.dataSource.map(item => {
        return <div key={item.id} onClick={props.cardClick.bind("", item.name)}><Card  id={item.id} name={item.name} email= {item.email} linkImage={item.linkImage} /></div>
        })
    return (
        <div className="CardList">
           {cards}       
        </div>
    );
}

export default CardList