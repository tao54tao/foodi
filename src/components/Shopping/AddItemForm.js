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
import {spacing} from '@material-ui/system';
import { left } from '@material-ui/system/positions';



const styles = theme => ({

  nameField: {
    marginRight: theme.spacing.unit,
  },

  nameFieldWrap: {
    marginLeft: theme.spacing.unit * 2,
    flexGrow: 1,

  },
  
  quantityField: {
    marginLeft: theme.spacing.unit,
    width: 40,
  },

  typeField: {
    marginLeft: theme.spacing.unit,
    width: 60,
    },

  addButton: {
    marginRight: theme.spacing.unit * 2,
  }
  
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
      var newType = this.state.typeFieldValue;
      
      if(newItemName) {
        var newItem = {};
        newItem.name = newItemName;
        newItem.quantity = newQuantity;
        newItem.type = newType;
        
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
        
        
        <form ref="form" onSubmit={this.onSubmit} className="form-inline" >
        <Grid item container direction="row" >
        
        <Grid item className={classes.nameFieldWrap}>
        <TextField className={classes.nameField}
        id="itemName"
        ref="itemName"
        label="add item.."
        value={this.state.textFieldValue} 
        onChange={this.handleTextFieldChange}
        fullWidth
        
        />
        </Grid>
        <Grid item>

        <TextField className={classes.quantityField}
        id="itemQuantity"
        ref="itemQuantity"
        label="qty"
        value={this.state.quantityFieldValue} 
        onChange={this.handleQuantityFieldChange}
        />
        </Grid>
        <Grid item>

        <FormControl className={classes.typeField}>
        <InputLabel htmlFor="type">unit</InputLabel>
          <Select
            value={this.state.typeFieldValue}
            onChange={this.handleTypeFieldChange}
            
          >
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            <MenuItem value="gal">gal</MenuItem>
            <MenuItem value="lb">lb</MenuItem>
            <MenuItem value="box">box</MenuItem>
            <MenuItem value="L">L</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item>
        
        <IconButton className={classes.addButton} type="submit" color="primary" variant="contained">
        <i className="material-icons">
        add_shopping_cart
        </i>
        </IconButton>
        </Grid>
        </Grid>
        </form>

        
      );   
    }
  }

  export default withStyles(styles)(AddItemForm);