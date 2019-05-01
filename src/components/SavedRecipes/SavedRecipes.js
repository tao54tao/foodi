import React from 'react';
import RecipeCard from '../RecipeSearch/RecipeCard';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './SavedRecipes.css';
import { withStyles } from '@material-ui/core/styles';
import AlertDialog from '../AlertDialog';

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


class SavedRecipes extends React.Component {
  state = {
    delAlertOpen: false,
    listKey: '',
    
  };

  handleDelBtn = (listkey) => {
    
    this.setState({delAlertOpen: true,
                  listKey: listkey.index,
                  });
    
    }
  
  handleDelAlertClose = () => {
    this.setState({delAlertOpen: false})
  }

  handleDelConfirm = () => {
    
    this.props.removeRecipe(this.state.listKey);

  }

    
    render() {
      
      const { classes } = this.props;
      let RecipeListArray = null;

    if (this.props.savedRecipes.length === 0) {
    RecipeListArray = <Grid container item justify="center" wrap="nowrap" direction="column" className={classes.instructionsGrid}>
    
  
    <Grid item className={classes.notFound}>
    <Typography variant="h6" color="inherit">No Saved Recipes Found</Typography>
    </Grid>
    
    </Grid>
      
    }
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
        <AlertDialog 
        open={this.state.delAlertOpen} 
        handleClose={this.handleDelAlertClose} 
        handleConfirm={this.handleDelConfirm}
        alertTitle="Confirm Delete"
        alertText={"This will delete the saved recipe.  Are you sure?"}
        closeBtnText="cancel"
        confirmBtnText="delete" />

        <TopMenuBar title="Foodi - Saved Recipes" />
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