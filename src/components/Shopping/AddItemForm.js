import React from 'react';
import { Button, TextField, ListItemText } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { List, ListItem } from 'material-ui';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';



const styles = theme => ({

  nameField: {
    margin: theme.spacing.unit,

  },
  
  quantityField: {
    margin: theme.spacing.unit,
    width: 60,
  },

  typeField: {
    margin: theme.spacing.unit,
    },
  
});

class AddItemForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {textFieldValue: '',
                    quantityFieldValue: '',
                    typeFieldValue: ''};
      this.onSubmit = this.onSubmit.bind(this);
      this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
      this.handleQuantityFieldChange = this.handleQuantityFieldChange.bind(this);
      this.handleTypeFieldChange = this.handleTypeFieldChange.bind(this);
  
    }
  
    handleTextFieldChange(event) {
      this.setState({
          textFieldValue: event.target.value
      });
    }

    handleQuantityFieldChange(event) {
      this.setState({
          quantityFieldValue: event.target.value
      });
    }
    
    handleTypeFieldChange(event) {
      this.setState({
          typeFieldValue: event.target.value
      });
    }

    onSubmit(event) {
      event.preventDefault();
      var newItemName = this.state.textFieldValue;
      var newQuantity = this.state.quantityFieldValue;
      
      if(newItemName) {
        var newItem = {};
        newItem.name = newItemName;
        newItem.quantity = newQuantity;
        
        this.props.addItem(this.props.listKey,newItem);
        this.refs.form.reset();
        this.setState({
        textFieldValue: '',
        quantityFieldValue: '',
        typeFieldValue: ''
        });
      }
    }
    render () {
      const {classes} = this.props;
      return (
        <Grid item>
        
        <form ref="form" onSubmit={this.onSubmit} className="form-inline" >
        
        
        <TextField className={classes.nameField}
        id="itemName"
        ref="itemName"
        label="add item.."
        value={this.state.textFieldValue} 
        onChange={this.handleTextFieldChange}
        />

        <TextField className={classes.quantityField}
        id="itemQuantity"
        ref="itemQuantity"
        label="quantity"
        value={this.state.quantityFieldValue} 
        onChange={this.handleQuantityFieldChange}
        />

        <FormControl className={classes.typeField}>
        <InputLabel htmlFor="type">unit</InputLabel>
          <Select
            value={this.state.typeFieldValue}
            onChange={this.handleTypeFieldChange}
            
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="whole">whole</MenuItem>
            <MenuItem value="gal">gal</MenuItem>
            <MenuItem value="lb">lb</MenuItem>
            <MenuItem value="box">box</MenuItem>
            <MenuItem value="L">L</MenuItem>
          </Select>
        </FormControl>
        
        <IconButton type="submit" color="primary"><AddIcon /></IconButton>
        
        </form>


        
        
        
        
        
        </Grid>
      );   
    }
  }

  export default withStyles(styles)(AddItemForm);