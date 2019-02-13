import React, {Component} from 'react';

import {Card, CardBody, CardText, CardTitle, CardSubtitle, CardImg, Col, Button} from 'reactstrap';

class RecipeDetail extends Component{
    render(){
        //Destructration ! LEs noms des arguments doivent matcher ceur de recipe
        // let {name, picture, description} = this.props.recipe;
        let {name: otherName, picture, description} = this.props.recipe;
        return (
            <Col md={4}>
                <Card>
                    <CardImg src={picture}></CardImg>
                    <CardBody>
                        <CardTitle>{otherName}</CardTitle>
                        <CardSubtitle>{description}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
export default RecipeDetail;



