import React, { Component } from 'react';
import {Row, Container, Button} from 'reactstrap';



class NavigationBar extends Component{
    state = {
        data: "page"
    }


    render(){

        return(
            <div className="NavigationBar">
                    <Button>Recipe</Button>
                    <Button>Ingredients</Button>
            </div>
        )

    }
}
export default NavigationBar;