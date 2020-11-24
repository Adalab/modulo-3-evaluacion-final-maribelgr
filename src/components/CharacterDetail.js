import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props);
  const {
    image,
    name,
    status,
    species,
    origin,
    episode,
    id,
  } = props.characterInfo;
  return (
    <div>
      <Link to="/">
        <button>Volver</button>
      </Link>
      <div>
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>Estado: {status}</p>
          <p>Especie: {species}</p>
          <p>Planeta: {origin.name}</p>
          <p>Episodios: {episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
