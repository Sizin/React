import React, { Component } from 'react';
import {Row} from 'reactstrap';
import IngredientDetail from '../components/IngredientDetail.js';
import Axios from 'axios';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
    TextField,
    Button
  } from 'react-md';

const DB_URL = 'http://10.0.1.9:8080/api/v1';

class IngredientList extends Component {
    state = {
        ingredients: [],
        addMode: false
    }

    getIngredients(){
        
        Axios.get(`${DB_URL}/ingredients/`).then( response => {
            console.log("Retrieving ingredients", response.data);
            this.setState(
              { ingredients: response.data }
            );
          })
          .catch((err)=> {console.log("Failed retrieve ingredients", err)})
    }

    edit = (ingredient) => {
        Axios.patch(`${DB_URL}/ingredients/`, ingredient).then(() => {
            let temp = this.state.ingredients.filter(item => ingredient.id !== item.id)
            temp.push(ingredient)
            this.setState({ingredients: temp})
        });

    }

    add = (newIngredient) => {
        fetch(`${DB_URL}/ingredients/`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                ...newIngredient
              })
           }).then(result =>{
                var temp = this.state.ingredients;
                temp.push(newIngredient);
                this.setState({ingredients: temp})
           });
    }


    toggleAddRecipe = () => {
        this.state.addMode && this.props.add(this.state.recipe);
        this.setState({addMode: !this.state.addMode})
    }


    //ComonentDidMount always called before render()
    componentDidMount(){
        this.getIngredients();
    }

    render(){
        let {ingredients} = this.state;


        return(
        <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn grow md={8}>Name</TableColumn>
                    <TableColumn md={4}>Actions</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ingredients.map((ingredient) => 
                    <IngredientDetail ingredient={ingredient} key={ingredient.id} edit={this.edit}/>
                        )}


                {
                    this.state.addMode ? 
                <IngredientDetail edit={this.edit} add={this.add} />: 
                <Button flat primary swapTheming onClick={this.toggleAddRecipe}>+</Button>

                }    
            </TableBody> 
        </DataTable>
        )
    }




}
export default IngredientList;