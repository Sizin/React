import React, { Component } from 'react';
import RecipeDetail from '../components/RecipeDetail.js';
import {Row, Container, Button} from 'reactstrap';
import Axios from 'axios';

const DB_URL = 'http://10.0.1.9:8080/api/v1';

class RecipeList extends Component {
    state={
        addMode: false,
        recipes: [],
        ingreditents: []
    }

    // Delete fonction, double method
    // Il faut deux niveau de méthode car par défault React appelera la fonction si elle ne possède pas un second niveau
    delete = (id) => () => {
        Axios.delete(`${DB_URL}/recipes/${id}`);
        this.setState({recipes: this.state.recipes.filter(recipe => recipe.id !== id)})
    }

    edit = (recipe) => {
        Axios.patch(`${DB_URL}/recipes/`, recipe);
        var temp = this.state.recipes.filter(item => recipe.id !== item.id)
        temp.push(recipe)
        this.setState({recipes: temp})
    }

    add = (newRecipe) => {
        fetch(`${DB_URL}/recipes/`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                ...newRecipe,
                "id": 5451,
                "ingredients": [
                {
                    "recipeId": 1,
                    "ingredientId": 1,
                    "name": "Dark rum (Appleton Estate Reserve)",
                    "quantity": 2,
                    "unit": "oz"
                    }
                ]
              })
           }).then(result =>{
                var temp = this.state.recipes;
                temp.push(newRecipe);
                this.setState({recipes: temp})
           });
    }


    

    toggleAddRecipe = () => {
        // this.state.addMode && this.props.add(this.state.recipe);
        this.setState({addMode: !this.state.addMode})
    }

    getRecipes(){
        return fetch(`${DB_URL}/recipes`).then( result => {
            result.json().then(recipes => {
                console.log("Retrieving recipes",recipes);
                this.setState({recipes: recipes});
            });
        }).catch(error => {
            console.log("Error retrieving recipe", error);
        });
    }

    //ComonentDidMount always called before render()
    componentDidMount(){
        this.getRecipes();
    }


    render() {
        let {recipes} = this.state;
        // Le return est forcement qu'UN seul composant avec des sous composants
        return (
        <div >
            <div className="navigationBar">

            </div>

       
            <div className="RecipeList">
                <Container>
                <Row>

                    {/* map() est une boucle */}

                    {recipes.map((recipe) => 
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
        </div>
        );
  }
}

export default RecipeList;
