import React from "react";

const CharacterCard = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
