import React from 'react';
import PropTypes from 'prop-types';
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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import IngredientList from './IngredientList';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './RecipeCard.css'

const styles = theme => ({
  card: {
    maxWidth: 400,
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

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      expanded: false,
      };
    }

 

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleSave = () => {
    if (this.props.isSaved) {
      let index = this.props.savedIndex;
      this.props.removeRecipe({index});

    }

    else {
      this.props.addRecipe(this.props.recipe);

    }


  }

  handleClose = () => {
    let index = this.props.savedIndex;
    this.props.close({index});

  }




  render() {
    const { classes } = this.props;
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

    let dietLabels = '';
    

    if (this.props.recipe.dietLabels.length > 0) {
      dietLabels = this.props.recipe.dietLabels.map(name => {
        return <Grid item className={classes.dietList}><Typography variant='subtitle1' >{name}</Typography></Grid>
      });

    }

    let healthLabels = '';

    if (this.props.recipe.healthLabels.length > 0) {
    healthLabels = this.props.recipe.healthLabels.map(name => {
      return <Grid item className={classes.dietList}><Typography variant='subtitle1'>{name}</Typography></Grid>

      });
    }

    let noneMessage = '';
    if (dietLabels.length < 1 && healthLabels.length < 1) {
      noneMessage= <Grid item className={classes.dietList}><Typography variant='subtitle1'>no diet or health categories found</Typography></Grid>
    }
    

   
    
    let savedClass = "hide";

    if (this.props.addRecipe !== undefined) {
      savedClass = this.props.isSaved ?
    "saved" : "notSaved";

    }
    




    return (
      <Card className={classes.card}>
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
        <CardMedia
          className={classes.media}
          image={this.props.recipe.image}
          title={this.props.recipe.label}
        />
        <CardContent>
          <Grid container
          direction="row"
          justify="space-between"
          alignItems="flex-start">
            <Grid item><Typography variant='subtitle1'>{this.props.recipe.yield} Servings</Typography></Grid>
            <Grid item><Typography variant='subtitle1'>{Math.round(this.props.recipe.calories / this.props.recipe.yield)} Calories per Serving</Typography></Grid>
            </Grid>
            <Typography variant="h6" className='topPadding'>Diet & Health Categories</Typography>
        <Divider />
            <Grid container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={16}>
            {noneMessage}
            {dietLabels}
            {healthLabels}
            </Grid>
          <IngredientList items={this.props.recipe.ingredientLines}/>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          
          <Button className="recipeButton" label="Full Recipe" color="primary" onClick={() => {window.open(this.props.recipe.url,'_blank')}}>
            Full Recipe
          </Button>
          <Button className="alignRight" label="Nutrition Facts" onClick={this.handleExpandClick}>
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
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h4" >Nutrition Facts</Typography>
            <Divider  />
            <Typography variant='subtitle2'>Amount Per Serving</Typography>
            <Typography variant='subtitle1'>Calories {Math.round(this.props.recipe.calories / this.props.recipe.yield)}</Typography>
            <Divider  />
            <Table className='nutritionFacts'>
              
             
              
              <TableBody>
              <TableRow>
                  <TableCell colspan={2} align="right">% Daily Values</TableCell>
              </TableRow>
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