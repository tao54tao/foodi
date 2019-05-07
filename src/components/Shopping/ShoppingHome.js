import React from 'react';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import other components
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import ShoppingList from './ShoppingList';
import './ShoppingHome.css';

// set some CSS styles.  if using theme values, must put here and not in external css file
const styles = theme => ({

  instructionsGrid : {
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    color: "rgba(0, 0, 0, 0.87)",
    width: '100%',
    padding: '0',
  },
  notFound: {
    flexGrow: 1,
    minWidth: 0,
    textAlign: 'center',
  },

  listContainer: {
    marginTop: 0,
  },

});

// ShoppingHome component
// shows a top menu with a add button 
// shows a grid list of saved shopping lists below
// takes in listDel, listAdd, setListName, itemAdd, itemDel, itemDone functions as props
// takes in listGroup array as prop

class ShoppingHome extends React.Component {
    
    render() {
      const { classes } = this.props;
      // initialize the shopping lists to null
      let ShoppingListArray = null;
    // if the listgroup is empty, return grid item with text No Lists Found
    if (this.props.listGroup.length === 0) {
      ShoppingListArray = 
      <Grid container item justify="center" wrap="nowrap" direction="column" className={classes.instructionsGrid}>
      <Grid item className={classes.notFound}>
      <Typography variant="h6" color="inherit">No Lists Found</Typography>
      </Grid>
      </Grid>
      
    }
    // if the listgroup has entries, return a shoppinglist component for each
    else {
      ShoppingListArray = this.props.listGroup.map((list, index) => {
        return ( <ShoppingList 
          index={index} 
          ListName={list.ListName} 
          ItemList={list.ItemList} 
          listDel={this.props.listDel} 
          setListName={this.props.setListName}
          itemAdd={this.props.itemAdd} 
          itemDel={this.props.itemDel} 
          itemDone={this.props.itemDone}
          />
          );
      });
      
    };
      // main return.  show menu bar with add new list assigned to assButton
      // show content from ShoppinglistArray in a grid
      return (

        <div>
        <TopMenuBar title="Foodi - Shopping Lists" addButton={this.props.listAdd} />
        <div className="ShoppingWindow">
        <div className={classes.listContainer}>
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16} className={classes.listContainer}>
        
        {ShoppingListArray}
        
        </Grid>
        </div>
        </div>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(ShoppingHome);