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
import './RecipeCard.css'

const styles = theme => ({
  card: {
    maxWidth: 400,
    flexGrow: 1,
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
    marginLeft: 'auto',
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
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const NutrientList = [
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

    const NutrientFacts = NutrientList.map(row => {
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


    return (
      <Card className={classes.card}>
        <CardHeader
      
          action={
            <IconButton onClick={this.props.close}>
              <i class="material-icons">
            close
            </i>
            </IconButton>
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
          <Typography component="p">
            Servings: {this.props.recipe.yield} 
          </Typography>
          <IngredientList items={this.props.recipe.ingredientLines}/>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
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
            <Typography variant="h4">Nutrition Facts</Typography>
            <Divider  />
            <Typography variant='subtitle2'>Amount Per Serving</Typography>
            <Typography variant='subtitle1'>Calories {Math.round(this.props.recipe.totalNutrients.ENERC_KCAL.quantity / this.props.recipe.yield)}</Typography>
            <Divider  />
            <Table className='nutrientFacts'>
              
             
              
              <TableBody>
              <TableRow>
                  <TableCell colspan={2} align="right">% Daily Values</TableCell>
              </TableRow>
               {NutrientFacts.map(row => (
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