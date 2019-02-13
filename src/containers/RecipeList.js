import React, { Component } from 'react';
import RecipeDetail from '../components/RecipeDetail.js';
import {Row, Container} from 'reactstrap';
//Pour importer MOCK il faut utiliser des accolades car c'est un import nommé et non par défaut
import {MOCK} from '../Mock.js';


class RecipeList extends Component {
  render() {

    // Le return est forcement qu'UN seul composant avec des sous composants
    return (
      <div className="RecipeList">
        <Container>
          <Row>
            {MOCK.map((recipe) => 
              <RecipeDetail recipe={recipe} key={recipe.id}/>
                )}
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecipeList;
