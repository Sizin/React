import React, { Component } from 'react';
import RecipeDetail from '../components/RecipeDetail.js';
import {Row, Container, Button} from 'reactstrap';
//Pour importer MOCK il faut utiliser des accolades car c'est un import nommé et non par défaut
import {MOCK} from '../Mock.js';



class RecipeList extends Component {
    state={
        data: MOCK,
        addMode: false
    }

    // Delete fonction, double method
    // Il faut deux niveau de méthode car par défault React appelera la fonction si elle ne possède pas un second niveau
    delete = (id) => () => {
        this.setState({data: this.state.data.filter(recipe => recipe.id !== id)})
    }

    edit = (recipe) => {
        var temp = this.state.data.filter(item => recipe.id !== item.id)
        temp.push(recipe)
        this.setState({data: temp})
    }

    add = (newRecipe) => {

        console.log(newRecipe);
        var temp = this.state.data;
        temp.push(newRecipe);
        this.setState({data: temp})
    }


    toggleAddRecipe = () => {
        // this.state.addMode && this.props.add(this.state.recipe);
        this.setState({addMode: !this.state.addMode})
    }

    render() {
        let {data} = this.state;

        // Le return est forcement qu'UN seul composant avec des sous composants
        return (
        <div className="RecipeList">
            <Container>
            <Row>

                {/* map() est une boucle */}

                {data.map((recipe) => 
                <RecipeDetail recipe={recipe} key={recipe.id} edit={this.edit} delete={this.delete(recipe.id)}/>
                    )}

                {/* Alors içi on donne 'delete' en props, qui sera utilisé dans l'enfant RecipeDetail */}

                {  
                    // If addmode is true then we display recipeDetail card but with empty value
                    this.state.addMode && <RecipeDetail edit={this.edit} delete={this.delete} add={this.add}></RecipeDetail> 
                }

            </Row>

                <Button onClick={this.toggleAddRecipe}> Add </Button> 

            </Container>
        </div>
        );
  }
}

export default RecipeList;
