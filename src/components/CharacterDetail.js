import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props.characterInfo);
  const { image, name, status, species, origin = {}, episode = [], id } =
    props.characterInfo || {};

  //Cojo valor que tengo en mi padre y lo guardo en una constante
  const handleBack = () => {
    const localValue = localStorage.getItem("inputText");
    props.onBack(localValue);
  };
  return (
    <div>
      <Link to="/">
        <button onClick={handleBack}>Volver</button>
      </Link>
      {props.characterInfo ? (
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
      ) : (
        <p>No existe</p>
      )}
    </div>
  );
};

export default CharacterDetail;
