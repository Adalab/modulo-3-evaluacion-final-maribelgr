import React from "react";
import api from "../services/api";
import { Link, Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characterList: [], inputText: "", loading: "loading" };
  }
  componentDidMount() {
    //Cuando el componente ha sido montado, cojo el 2º then para setear el estado -modificar valor de ese estado- a la info de la api
    const data = api.getDataFromApi().then((data) => {
      this.setState({ characterList: data.results, loading: "done" });
    });
  }

  //Función del evento
  handleInputChange = (ev) => {
    this.setState({ inputText: ev.target.value });
    localStorage.setItem("inputText", ev.target.value);
  };

  renderDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    console.log(routeCharacterId);
    const foundCharacter = this.state.characterList.find((character) => {
      return parseInt(routeCharacterId) === character.id;
    });
    console.log(foundCharacter);
    return (
      <CharacterDetail
        characterInfo={foundCharacter}
        onBack={this.handleBack}
      />
    );
  };

  render() {
    const filteredCharacter = this.state.characterList.filter((character) => {
      return character.name
        .toUpperCase()
        .includes(this.state.inputText.toUpperCase());
    });

    return (
      <>
        <Header />
        {this.state.loading === "loading" ? (
          <p>Cargando datos</p>
        ) : (
          <Switch>
            <Route exact path="/">
              <Filters
                handleInputChange={this.handleInputChange}
                inputValue={this.state.inputText}
              />
              <CharacterList data={filteredCharacter} />
            </Route>
            <Route
              path="/character-detail/:characterId"
              component={this.renderDetail}
            ></Route>
          </Switch>
        )}
      </>
    );
  }
}

export default App;
