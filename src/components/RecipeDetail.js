import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, CardText, CardTitle, Input, CardImg, Col, Row, Button } from 'reactstrap';

class RecipeDetail extends Component{
    state = {
        recipe: this.props.recipe,
        editMode: this.props.recipe ? false : true,
        addMode: false
    }

    toggle = () => {
        this.state.editMode && this.props.edit(this.state.recipe);
        this.setState({editMode: !this.state.editMode})

    }


    submitNewRecipe = () => {
        this.state.addMode && this.props.add(this.state.recipe);
        this.setState({addMode: !this.state.addMode})

    }

    handleEditName = (event) => {
        this.setState({recipe: {...this.state.recipe, name: event.target.value}});
    }

    handleEditPicture = (event) => {
        this.setState({recipe: {...this.state.recipe, picture: event.target.value}})
    }

    handleEditDescription = (event) => {
        this.setState({recipe: {...this.state.recipe, description: event.target.value}})
    }

    
    render(){
        //Destructration ! LEs noms des arguments doivent matcher ceur de recipe
        // let {name, picture, description} = this.props.recipe;
        // let {name: otherName, picture, description} = this.state.recipe;
        return (
                <Col md={4}>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col>
                                    {
                                        this.state.editMode ? 
                                        <Input defaultValue={this.state.recipe && this.state.recipe.name} onChange={this.handleEditName} /> : 
                                        <CardTitle>{this.state.recipe.name}</CardTitle>
                                    }
                                </Col>
                                <FontAwesomeIcon icon={faEdit} onClick={this.toggle}/>
                                <FontAwesomeIcon icon={faTrash} onClick={this.props.delete}/>
                            </Row>
                        </CardBody>

                        <CardBody>
                            {
                                this.state.editMode ?
                                <Input defaultValue={this.state.recipe && this.state.recipe.picture} onChange={this.handleEditPicture} /> :
                                <CardImg src={this.state.recipe.picture}></CardImg>
                            }
                        </CardBody>


                        <CardBody>
                            {
                                this.state.editMode ?
                                <Input defaultValue={this.state.recipe && this.state.recipe.description} onChange={this.handleEditDescription} /> :
                                <CardText>{this.state.recipe.description}</CardText>
                            }
                            
                        </CardBody>
                        <CardBody>
                         { !this.props.recipe && <Button onClick={this.submitNewRecipe}>Submit</Button> }
                        </CardBody>
                    </Card>
                </Col>
        )
    }
}
export default RecipeDetail;



