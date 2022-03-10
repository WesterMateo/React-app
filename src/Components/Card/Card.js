import React from "react";
import "./Card.css";

const Card = (props) => {
  const { id, name, email, linkImage } = props;
  return (
    <div className="Card" key={id}>
      <div>
        <img src={linkImage} alt="No data" />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
