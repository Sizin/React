import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeDetail from './components/RecipeDetail.js';
import RecipeList from './containers/RecipeList.js';
import {Row, Container} from 'reactstrap';
//Pour importer MOCK il faut utiliser des accolades car c'est un import nommé et non par défaut
import {MOCK} from './Mock.js';


class App extends Component {
  render() {

    // Le return est forcement qu'UN seul composant avec des sous composants
    return (
      <div className="App">
        <Container>
          <RecipeList/>
        </Container>
      </div>
    );
  }
}

export default App;
