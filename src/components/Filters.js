import React from "react";

const Filters = (props) => {
  //Declaro el evento del onChange. No necesito el value porque estoy recogiendo la funcion del evento del padre App. El evento aquí no hace nada, sólo se lo paso a su padre. Recibo evento y se lo paso donde estoy llamando -aquí- pero la estoy creando en el padre.
  const handleInputChange = (ev) => {
    props.handleInputChange(ev);
  };

  //Submit intro
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Busca aquí tu personaje"
          onChange={handleInputChange}
          value={props.inputValue}
        ></input>
      </form>
    </div>
  );
};

export default Filters;
