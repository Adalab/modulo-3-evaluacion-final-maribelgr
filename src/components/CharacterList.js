import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterItem = props.data.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard
          img={character.image}
          name={character.name}
          species={character.species}
        />
      </li>
    );
  });

  return props.data.length > 0 ? (
    <ul>{characterItem}</ul>
  ) : (
    <p>No hay resultados que coincidan con tu búsqueda</p>
  );
};

export default CharacterList;
