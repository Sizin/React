import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { TableRow, TableColumn, TextField, Button} from 'react-md';


class IngredientDetail extends Component{
    state = {
        ingredient: this.props.ingredient,
        editMode: this.props.ingredient ? false : true,
        addMode: false
    }


    toggle = () => {
        this.state.editMode && this.props.edit(this.state.ingredient);
        console.log(this.state.ingredient);
        this.setState({editMode: !this.state.editMode})
    }

    handleEditName = (newValue) => {
        this.setState({ingredient: {...this.state.ingredient, name: newValue}});
    }

    submitNewIngredient = () => {
        this.state.addMode && this.props.add(this.state.ingredient);
        this.setState({addMode: !this.state.addMode})

    }


    render(){
        return(
            <TableRow md={12}>
                <TableColumn md={8}>
                    { 
                        this.state.editMode ? 
                        <TextField id="placeholder-only-title" placeholder={this.state.ingredient && this.state.ingredient.name} value={this.state.ingredient && this.state.ingredient.name} onChange={this.handleEditName} className="md-cell md-cell--bottom" /> : 
                        this.state.ingredient.name 
                    }
                </TableColumn>
                <TableColumn md={4} >
                    {
                        this.state.editMode ? 
                                <Button flat primary swapTheming onClick={this.toggle}>Done</Button>
                            :
                            <div>
                            <FontAwesomeIcon icon={faEdit} onClick={this.toggle} md={2} />
                            <FontAwesomeIcon icon={faTrash} md={2}/>
                            </div>
                    }
                    
                </TableColumn>
                { !this.props.ingredient && <Button flat primary swapTheming onClick={this.submitNewIngredient}>Submit</Button> }
            </TableRow>
        )
    }

}
export default IngredientDetail;