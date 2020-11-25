import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div>
      <Link to={`/character-detail/${props.id}`}>
        <div>
          <img className="card-img" src={props.img} alt={props.name} />
          <div className="card-data">
            <h2 className="card-title">{props.name}</h2>
            <p className="card-description">{props.species}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
