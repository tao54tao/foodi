import React from 'react';
import { Button, TextField, ListItemText } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { List, ListItem } from 'material-ui';


class AddItemForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {textFieldValue: ''};
      this.onSubmit = this.onSubmit.bind(this);
      this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  
    }
  
    handleTextFieldChange(event) {
      this.setState({
          textFieldValue: event.target.value
      });
    }
    
    onSubmit(event) {
      event.preventDefault();
      var newItemName = this.state.textFieldValue;
      
      if(newItemName) {
        var newItem = {};
        newItem.name = newItemName;
        
        this.props.addItem(this.props.listKey,newItem);
        this.refs.form.reset();
        this.setState({
          textFieldValue: ''
        });
      }
    }
    render () {
      return (
        <Grid item>
        
          <form ref="form" onSubmit={this.onSubmit} className="form-inline" >
        
        
          <TextField
        id="additem"
        ref="itemName"
        label="add item.."
        margin="dense"
        value={this.state.textFieldValue} 
        onChange={this.handleTextFieldChange}
        />
        
  
  
        <Button type="submit" color="primary">Add</Button>
        
        </form>


        
        
        
        
        
        </Grid>
      );   
    }
  }

  export default AddItemForm;