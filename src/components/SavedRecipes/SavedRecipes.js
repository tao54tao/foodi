import React from 'react';
import AlertDialog from '../AlertDialog';

// import material UI components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// import other components
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import RecipeCard from '../RecipeSearch/RecipeCard';
import './SavedRecipes.css';

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
});

// SavedRecipies component
// returns a grid of recipe cards for saved recipies
// takes in removeRecipe function as a prop to remove from saved
// takes in savedRecipies as prop
// stores the state of the alert box and the selected list key in state


class SavedRecipes extends React.Component {
  state = {
    delAlertOpen: false,
    listKey: '',
  };

  // function to handle when delete button is pressed
  // takes in a list key for the recipe where button was pressed
  handleDelBtn = (listkey) => {
    
    // set the delAlertOpen to true and set the listkey to the value passed to function
    this.setState({delAlertOpen: true,
                  listKey: listkey.index,
                  });
    
    }
  
  // function to handle when the alert box is closed
  handleDelAlertClose = () => {
    this.setState({delAlertOpen: false})
  }

  // function to handle when delete is confirmed from alert box
  // runs the removeRecipe function and passes the listKey for the recipe
  handleDelConfirm = () => {  
    this.props.removeRecipe(this.state.listKey);
  }

  render() {
      
    const { classes } = this.props;
    // make an empty array for recipe list
    let RecipeListArray = null;

    // if the savedRecipes prop has no values, set RecipeListArray
    // to be a grid item with a message
    if (this.props.savedRecipes.length === 0) {
      RecipeListArray = 
        <Grid container item 
              justify="center" wrap="nowrap" 
              direction="column" 
              className={classes.instructionsGrid}> 
        <Grid item className={classes.notFound}>
         <Typography variant="h6" color="inherit">No Saved Recipes Found</Typography>
        </Grid>
        </Grid>
    }
    // if there are items in the RecipeListArray, then map over the list
    // create a RecipeCard component for each entry and save to RecipeListArray
    else { 
      RecipeListArray = this.props.savedRecipes.map((list, index) => {
        return ( 
            
            <RecipeCard 
            recipe={list.recipe} 
            close={this.handleDelBtn}
            closeIcon='delete'
            savedRecipes={this.props.savedRecipes}
            isSaved={true}
            savedIndex={index}
            />
          ); 
      }); 
    };
      
      return (
 
        <div>
        {/* create the alertDialog box but only shows when opened */}
        <AlertDialog 
        open={this.state.delAlertOpen} 
        handleClose={this.handleDelAlertClose} 
        handleConfirm={this.handleDelConfirm}
        alertTitle="Confirm Delete"
        alertText={"This will delete the saved recipe.  Are you sure?"}
        closeBtnText="cancel"
        confirmBtnText="delete" />

        <TopMenuBar title="Foodi - Saved Recipes" />
        {/* main div for the saved recipe list
        use the RecipeListArray as content */}
        <div className="SavedRecipeWindow">
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16}>

        {RecipeListArray}
        
        </Grid>
        </div>
        </div>

      );
      
    }


  }
  
  export default withStyles(styles)(SavedRecipes);