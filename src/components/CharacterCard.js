import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character-detail/${props.id}`}>
      <div>
        <img src={props.img} alt={props.name} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.species}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
