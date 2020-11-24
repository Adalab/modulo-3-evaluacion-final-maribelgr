import React from "react";
import api from "../services/api";
import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characterList: [], inputText: "" };
  }
  componentDidMount() {
    //Cuando el componente ha sido montado, cojo el 2º then para setear el estado -modificar valor de ese estado- a la info de la api
    const data = api.getDataFromApi().then((data) => {
      this.setState({ characterList: data.results });
    });
  }

  //Función del evento
  handleInputChange = (ev) => {
    this.setState({ inputText: ev.target.value });
  };

  render() {
    const filteredCharacter = this.state.characterList.filter((character) => {
      return character.name
        .toUpperCase()
        .includes(this.state.inputText.toUpperCase());
    });

    return (
      <div className="App">
        <Header />
        <Filters handleInputChange={this.handleInputChange} />
        <CharacterList data={filteredCharacter} />
      </div>
    );
  }
}

export default App;
