import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import { Paper } from 'material-ui';
import './Home.css'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { NavLink } from 'react-router-dom';

const styles = theme => ({

  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit,
    
  },

  menuItem: {
    minWidth: 110,
  },

  card: {
    maxWidth: 380,
    
  },

  menuCards: {
    marginTop: theme.spacing.unit * 2,
  }
});


class Home extends React.Component {
  
    render() {
      const { classes } = this.props;
      
      return (
        <div >
        <TopMenuBar title="Foodi" />
        <div className="HomeWindow">
        
        <Paper className={classes.paper}>       
          <Typography variant='h4' align='center'>Welcome to Foodi</Typography>
          <Grid container spacing={24} direction="row" justify="center" alignItems="flex-start" className={classes.menuCards}>
            <Grid item className={classes.menuItem}>
            <Card className={classes.card}>
            <CardActionArea component={NavLink} to='/Shopping' >
         
            <CardContent>
            <i className="material-icons menuIcon" >shopping_cart</i>
              <Typography gutterBottom variant="h5" component="h2">
              Shopping Lists
             </Typography>
            <Typography component="p">
            Create shopping lists to keep track of what you need.  Mark items as complete as you shop.
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
    
            </Grid>
            <Grid item className={classes.menuItem}>
            <Card className={classes.card}>
            <CardActionArea component={NavLink} to='/RecipeSearch' >
            <CardContent>
            <i className="material-icons menuIcon">search</i>
              <Typography gutterBottom variant="h5" component="h2">
              Recipe Search
             </Typography>
            <Typography component="p">
            Search for recipes across multiple online cooking websites.  Narrow results based on dietary restrictions.
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>

            </Grid>
            <Grid item className={classes.menuItem}>
            <Card className={classes.card}>
            <CardActionArea component={NavLink} to='/SavedRecipes' >
            <CardContent>
            <i className="material-icons menuIcon">list</i>
              <Typography gutterBottom variant="h5" component="h2">
              Saved Recipies
             </Typography>
            <Typography component="p">
            View recipes that have been saved from the receipe search feature.  
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>

            </Grid>
            <Grid item className={classes.menuItem}>
            <Card className={classes.card}>
            <CardActionArea component={NavLink} to='/Settings' >
            
            <CardContent>
            <i className="material-icons menuIcon">settings</i>
              <Typography gutterBottom variant="h5" component="h2">
              Settings
             </Typography>
            <Typography component="p">
            Perform application wide changes such as deleting all data.
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>

            </Grid>
          </Grid>
        </Paper>
        </div>     
        </div>
                
      );
    }
  }
  
  export default withStyles(styles)(Home);