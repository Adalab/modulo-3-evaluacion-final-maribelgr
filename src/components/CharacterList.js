import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterItem = props.data.map((character) => {
    return (
      <li key={character.id} className="character-card">
        <CharacterCard
          id={character.id}
          img={character.image}
          name={character.name}
          species={character.species}
        />
      </li>
    );
  });

  return props.data.length > 0 ? (
    <ul className="character-list">{characterItem}</ul>
  ) : (
    <span className="no-results">
      <p>No hay resultados que coincidan con tu búsqueda</p>
    </span>
  );
};

export default CharacterList;
