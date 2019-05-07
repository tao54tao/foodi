import React from 'react';
import PropTypes from 'prop-types';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from 'material-ui';
import { TextField } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// import other components
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import ListMenu from './ListMenu';
import './ShoppingList.css' 

// set some CSS styles.  if using theme values, must put here and not in external css file
const styles = theme => ({
  ListGrid : {
    width: '100%',
    maxWidth: 400,
    minWidth: 320,
  },
  FullWidth : {
    width: '100%',
  },
  ListTitle: {
    flexGrow: 1,
    minWidth: 0,
    marginLeft: theme.spacing.unit * 2,
  },
  MenuButton: {
    marginRight: theme.spacing.unit * 2,
  },
  ShoppingList: { 
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

// Shoppinglist component
// returns a paper with a grid that is a shopping list
// contains a list title  (clickable to edit) area with button
// list of items with done and delete buttons
// add new item form as bottom element
// keeps track of if the list title is being edited with nameEdit state

class ShoppingList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nameEdit: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  // function to change the list title edit box to active
  listNameEdit = (listKey) => {
    this.setState({nameEdit: true});
  }
  // function to change the list title edit box to not active
  listNameSave = (listKey) => {
    this.setState({nameEdit: false});
  }
  // function to handle when the list title has been changed
  // calls the setListName function with the index prop of the list and the new title text input value
  handleNameChange = (event) =>  {
    this.props.setListName(this.props.index, event.target.value);
  }
  // function to check if enter key was pressed to end name edit
  handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        this.setState({nameEdit: false});
      }
  }

  render() {
    const { classes } = this.props;

    // if the nameEdit state is true, then hide the title field
    // if false then dont hide the title
    var ListNameHeadClass = this.state.nameEdit ? 
    "hide nowrap" : "nohide nowrap";
    // if the nameEdit state is true dont hide the text edit field
    // if false then hide
    var ListNameFieldClass = this.state.nameEdit ?
    "nohide nowrap" : "hide nowrap";

      

    return (
      
        <Grid  item className={classes.ListGrid}>
        <Paper className={classes.ShoppingList}>
        {/* container that holds the title, list items, and item form */}
        <Grid className={classes.FullWidth} container direction="column" wrap="nowrap" justify="flex-start">
          <Grid item >
          <Grid container direction="row" alignItems="center"  wrap="nowrap" className={classes.FullWidth}  >
            <Grid item className={classes.ListTitle}>
            {/* the list title header */}
            <Typography variant="h6" align="center" 
              className={ListNameHeadClass} 
              onClick={this.listNameEdit}>
                {this.props.ListName}
            </Typography>
            <div className={ListNameFieldClass} >
              {/* save name edit if click outside of text field */}
              <ClickAwayListener onClickAway={this.listNameSave}>
              {/* text field that matches the listName prop */}
              <TextField  
                id="listName" 
                ref="listName" 
                value={this.props.ListName}
                onChange={this.handleNameChange}
                onKeyPress={this.handleKeyPress}
                fullWidth
                inputProps={{
                  style: {  textAlign: "center",
                            fontSize: "1.25rem",
                            lineHeight: "1.6",
                            letterSpacing: "0.0075em"}
                            }}
               />
              </ClickAwayListener>
            </div> 
            </Grid>
            {/* top menu of the list.calls ListMenu component 
            passes along the listName and listKey props
            passes the listDel and listNameEdit functions as props */}
            <Grid item>
            <ListMenu 
              listDel={this.props.listDel} 
              listKey={this.props.index} 
              listName={this.props.ListName} 
              listNameEdit={this.listNameEdit}
            />
            </Grid>
          </Grid>
          </Grid>
          {/* the list of items.  calls ItemList component
          passes along the listKey and items as props
          pases the removeItem and markItemDone functions as props */}
          <ItemList 
            listKey={this.props.index} 
            items={this.props.ItemList} 
            removeItem={this.props.itemDel} 
            markItemDone={this.props.itemDone}
          />
          {/* final list item of the addItemForm component
          pass along the listKey prop and the addItem function */}
          <AddItemForm listKey={this.props.index} addItem={this.props.itemAdd} />
        </Grid>
        </Paper>
        </Grid>
    );
  }
}

ShoppingList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ShoppingList);
