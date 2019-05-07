import React from 'react';
import PropTypes from 'prop-types';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// import other components
import IngredientList from './IngredientList';
import './RecipeCard.css'

// set some CSS styles.  if using theme values, must put here and not in external css file
const styles = theme => ({
  card: {
    maxWidth: 460,
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  dietList: {
    paddingBottom: '0px !important',
  }
});

// Recipe Review Card Component
// shows a recipe on a card
// card has buttons to save recipe, close card
// card can expand to show nutrition facts from recipe
// card has button with link to full recipe source
// takes in the following props

/* 
recipe= recipe object
close= function called when closed button is clicked
closeIcon= type of icon to show for close button
addRecipe= function to add recipe to saved array in app state
removeRecipe= function to remove recipe from saved array in app state
savedRecipes= the saved recipes array from app state
isSaved= bool value for if the recipe is already in saved list
savedIndex= index of the item in the saved recipe array/>
*/



class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      expanded: false,
      };
    }

  // function to handle when the expansion button is clicked
  // toggles the state of the expanded value
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  // function to handle when the saved icon is clicked
  // checks to see if the currenent recipe is already saved
  // if it is saved, then remove from the saved list
  // if it is not already saved, then add to saved list
  handleSave = () => {
    if (this.props.isSaved) {
      let index = this.props.savedIndex;
      this.props.removeRecipe({index});
    }

    else {
      this.props.addRecipe(this.props.recipe);
    }
  }

  // function to handle the closed button click
  // returns the current recipe index back to parent element and calls close prop
  handleClose = () => {
    let index = this.props.savedIndex;
    this.props.close({index});

  }




  render() {
    const { classes } = this.props;
    // set up the nutrition list names and codes
    const nutritionList = [
      {name:'Total Fat', code:'FAT'},
      {name:'Saturated Fat', code:'FASAT'},
      {name:'Trans Fat', code:'FATRN'},
      {name:'Cholesterol', code:'CHOLE'},
      {name:'Sodium', code:'NA'},
      {name:'Total Carbohydrate', code:'CHOCDF'},
      {name:'Dietary Fiber', code:'FIBTG'},
      {name:'Sugars', code:'SUGAR'},
      {name:'Protein', code:'PROCNT'},
    ];

    // use the nutritionList code values to pick out specific entries from the recipe nutrient list
    // return a object for each row of the nutrient facts table that has the 
    //    name, code, quantity, unit, and % daily value

    const nutritionFacts = nutritionList.map(row => {
      let totalNutrients = this.props.recipe.totalNutrients[row.code];
      if (totalNutrients === undefined) {
        totalNutrients = {quantity: 0}
      }
      let totalDaily = this.props.recipe.totalDaily[row.code];
      if (totalDaily === undefined) {
        totalDaily = {quantity: 0}
      }
      
      return {name: row.name, 
              code: row.code, 
              quantity: Math.round(totalNutrients.quantity / this.props.recipe.yield),
              unit: totalNutrients.unit,
              daily: Math.round(totalDaily.quantity / this.props.recipe.yield) 
              }
      
    });

    // set up array of possible diet labels for recipe
    let dietLabels = '';
    
    // if the recipe has dietLabels entries, use map to return a grid item for each
    if (this.props.recipe.dietLabels.length > 0) {
      dietLabels = this.props.recipe.dietLabels.map(name => {
        return <Grid item className={classes.dietList}>
          <Typography variant='subtitle1' >{name}</Typography>
          </Grid>
      });

    }
    // set up array of possible health labels for recipe
    let healthLabels = '';
    //  if the recipe has healthLabels entries, use map to return a grid item for each
    if (this.props.recipe.healthLabels.length > 0) {
    healthLabels = this.props.recipe.healthLabels.map(name => {
      return <Grid item className={classes.dietList}>
        <Typography variant='subtitle1'>{name}</Typography>
        </Grid>

      });
    }

    // if there are no entries for health or diet labels, return a grid item entry that says none found
    let noneMessage = '';
    if (dietLabels.length < 1 && healthLabels.length < 1) {
      noneMessage= <Grid item className={classes.dietList}>
        <Typography variant='subtitle1'>no diet or health categories found</Typography>
        </Grid>
    }
    

   
    // create variable for if the recipe card should show the saved icon or not
    // set to hide by default
    
    let savedClass = "hide";
    // if a addRecipe prop was passed, set class to show as saved or notSaved
    // if not then still keep as hide.  this is how cards display on saved recipe page
    if (this.props.addRecipe !== undefined) {
      savedClass = this.props.isSaved ?
        "saved" : "notSaved";

    }

    return (
      <Card className={classes.card}>
      {/* headder section for the recipe card.  
          this shows the title, the website source, a favorite button, a delete button */}
        <CardHeader      
          action={
            <div>
            <IconButton aria-label="Add to favorites" onClick={this.handleSave} className={savedClass}>
            <FavoriteIcon />
            </IconButton>
            <IconButton onClick={this.handleClose}>
              <i className="material-icons">
              {this.props.closeIcon}
              </i>
            </IconButton>
            </div>
          }
          title={this.props.recipe.label}
          subheader={this.props.recipe.source}
        />
        {/* card media area for recipe card
        this showd the image from the recipe object */}
        <CardMedia
          className={classes.media}
          image={this.props.recipe.image}
          title={this.props.recipe.label}
        />
        {/* main card content area
        this shows the servings, and calories per serving
        the diet and health categories
        the ingredient list */}


        <CardContent>
          <Grid container
          direction="row"
          justify="space-between"
          alignItems="flex-start">
            <Grid item><Typography variant='subtitle1'>
              {this.props.recipe.yield} Servings</Typography>
            </Grid>
            <Grid item><Typography variant='subtitle1'>
              {Math.round(this.props.recipe.calories / this.props.recipe.yield)} Calories per Serving</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" className='topPadding'>Diet & Health Categories</Typography>
          <Divider />
          <Grid container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={16}
          >
            {/* add in elements generated in component render code */}
            {noneMessage}
            {dietLabels}
            {healthLabels}
          </Grid>
          {/* create ingredient List react component with the item list in props */}
          <IngredientList items={this.props.recipe.ingredientLines}/>
        </CardContent>
          {/* Bottom of the card actions area 
              this shows buttons for the full recipe source URL and nutrition facts expansion section
              */}
        <CardActions className={classes.actions} disableActionSpacing>
          <Button className="recipeButton" 
          label="Full Recipe" 
          color="primary" 
          onClick={() => {window.open(this.props.recipe.url,'_blank')}}
          >
            Full Recipe
          </Button>
          <Button className="alignRight" 
          label="Nutrition Facts" 
          onClick={this.handleExpandClick}
          >
            Nutrition Facts
          </Button>
          <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
            })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        {/* this is the expansion area on the bottom of the recipe card
        the nutrion facts table is shown here */}
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h4" >Nutrition Facts</Typography>
            <Divider  />
            <Typography variant='subtitle2'>Amount Per Serving</Typography>
            <Typography variant='subtitle1'>
              Calories {Math.round(this.props.recipe.calories / this.props.recipe.yield)}
            </Typography>
            <Divider  />
            <Table className='nutritionFacts'>
            <TableBody>
            <TableRow>
                <TableCell colspan={2} align="right">% Daily Values</TableCell>
            </TableRow>
            {/* loop over the nutrionFacts object and make a table row for each item
            cell 1 show the name, quantity, and unit of measure
            cell 2 show the daily % value */}

              {nutritionFacts.map(row => (
                <TableRow>
                  <TableCell>
                    {row.name} {row.quantity}{row.unit}  
                  </TableCell>
                  <TableCell align="right">
                    {row.daily}%
                  </TableCell>
                </TableRow>
              ))} 
            </TableBody>
            </Table>
            </CardContent>
          </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);