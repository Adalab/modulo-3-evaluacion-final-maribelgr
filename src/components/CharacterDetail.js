import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props.characterInfo);
  const { image, name, status, species, origin = {}, episode = [], id } =
    props.characterInfo || {};

  return (
    <div className="character-detail-container">
      <Link to="/">
        <div className="back-btn-container">
          <button className="back-btn">Volver</button>
        </div>
      </Link>
      {props.characterInfo ? (
        <div className="character-detail">
          <img className="card-img" src={image} alt={name} />
          <div>
            <h2>{name}</h2>
            <p>Estado: {status}</p>
            <p>Especie: {species}</p>
            <p>Planeta: {origin.name}</p>
            <p>Episodios: {episode.length}</p>
          </div>
        </div>
      ) : (
        <p className="no-results">No existe</p>
      )}
    </div>
  );
};

export default CharacterDetail;
