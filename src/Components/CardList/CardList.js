import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = (props) => {
  const { dataSource, cardClick } = props;
  let cards = null;

  if (Array.isArray(dataSource)) {
    cards = dataSource.map((item) => {
      const { id, name, email, linkImage } = item;
      return (
        <div key={id} onClick={() => cardClick(name)}>
          <Card id={id} name={name} email={email} linkImage={linkImage} />
        </div>
      );
    });

    return <div className="CardList">{cards}</div>;
  }
};

export default CardList;
