import React from 'react';

// import material UI components
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';

// set some CSS styles.  if using theme values, must put here and not in external css file
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

// AddItemForm component
// returns a grid item element that is a form
// the form has a name text field, quanatity text field
// unit drop down selection box and add button
// takes in a listKey value and addItem function as props
// uses state to track the field values


class AddItemForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nameFieldValue: '',
                    quantityFieldValue: '',
                    typeFieldValue: '',
                    nameFieldInputRef: '',
                    };
      this.onSubmit = this.onSubmit.bind(this);
      this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
      this.handleQuantityFieldChange = this.handleQuantityFieldChange.bind(this);
      this.handleTypeFieldChange = this.handleTypeFieldChange.bind(this);

    }

    // function to handle when the text field changes
    handleTextFieldChange(event) {
      this.setState({
          nameFieldValue: event.target.value
      });
    }
    // function to handle when the quantity field changes
    handleQuantityFieldChange(event) {
      this.setState({
          quantityFieldValue: event.target.value
      });
    }
    // function to hadnle when the type field changes
    handleTypeFieldChange(event) {
      this.setState({
          typeFieldValue: event.target.value
      });
    }

    // function to handle when the add item button is clicked
    onSubmit(event) {
      event.preventDefault();
      // set variables for each of the values in state
      var newItemName = this.state.nameFieldValue;
      var newQuantity = this.state.quantityFieldValue;
      var newType = this.state.typeFieldValue;
      
      // if a newItemName exists, create a newItem object
      
      if(newItemName) {
        var newItem = {};
        newItem.name = newItemName;
        newItem.quantity = newQuantity;
        newItem.type = newType;
        // call the addItem function with the new item object
        this.props.addItem(this.props.listKey,newItem);
        // clear the value of the form fields
        this.setState({
        nameFieldValue: '',
        quantityFieldValue: '',
        typeFieldValue: ''
        });

        // set the focus of the web browser to the name field
        this.state.nameFieldInputRef.focus();
      
      }
    }
    render () {
      const {classes} = this.props;
      
      return (
        
        <Grid item>
        <form onSubmit={this.onSubmit} autoComplete='off'>
        {/* grid container of the form elements in a row */}
        <Grid container direction="row" wrap="nowrap">

        {/* the name field textbox         */}
        <Grid item className={classes.nameFieldWrap}>
          <TextField className={classes.nameField}
          id="itemName"
          ref="itemName"
          label="add item.."
          value={this.state.nameFieldValue} 
          onChange={this.handleTextFieldChange}
          fullWidth
          inputRef={el => this.setState({nameFieldInputRef: el})}
          />
        </Grid>
        {/* the quantify field text box */}
        <Grid item>
          <TextField className={classes.quantityField}
          id="itemQuantity"
          ref="itemQuantity"
          label="qty"
          value={this.state.quantityFieldValue} 
          onChange={this.handleQuantityFieldChange}
          />
        </Grid>
        {/* the type field selection dropdown */}
        <Grid item>
          <FormControl className={classes.typeField}>
          <InputLabel htmlFor="type">unit</InputLabel>
            <Select
              value={this.state.typeFieldValue}
              onChange={this.handleTypeFieldChange}
            >
              <MenuItem value=""><em>none</em></MenuItem>
              <MenuItem value="gal">gal</MenuItem>
              <MenuItem value="lb">lb</MenuItem>
              <MenuItem value="box">box</MenuItem>
              <MenuItem value="L">L</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* the add item button */}
        <Grid item>
          <IconButton className={classes.addButton} type="submit" color="primary" variant="contained">
          <i className="material-icons">
          add_shopping_cart
          </i>
          </IconButton>
        </Grid>
        </Grid>
        </form>
        </Grid>
        
      );   
    }
  }

  export default withStyles(styles)(AddItemForm);