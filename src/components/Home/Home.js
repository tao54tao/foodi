import React from 'react';
import { NavLink } from 'react-router-dom';

// import material UI components
import { Paper } from 'material-ui';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

// import custom components
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './Home.css'

// set some CSS styles.  if using theme values, must put here and not in external css file
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

// Homepage component - no props and no state
class Home extends React.Component {
  
    render() {
      const { classes } = this.props;
      
      return (
        <div >
        {/* call the top menu bar with title text */}
        <TopMenuBar title="Foodi" />

        <div className="HomeWindow">
        
        {/* set up paper for main home elements */}
        <Paper className={classes.paper}>       
          <Typography variant='h4' align='center'>Welcome to Foodi</Typography>
          <Grid 
          container spacing={24} 
          direction="row" 
          justify="center" 
          alignItems="flex-start" 
          className={classes.menuCards}
          >

            {/* Grid item that is a card for the Shopping List Menu Options */}
            <Grid item className={classes.menuItem}>
              <Card className={classes.card}>
                <CardActionArea component={NavLink} to='/Shopping' >
                  <CardContent>
                    <i className="material-icons menuIcon" >shopping_cart</i>
                    <Typography gutterBottom variant="h5" component="h2">
                      Shopping Lists
                    </Typography>
                    <Typography component="p">
                      Create shopping lists to keep track of what you need.  
                      Mark items as complete as you shop.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Grid item that is a card for the Recipe Search Menu Options */}
            <Grid item className={classes.menuItem}>
              <Card className={classes.card}>
                <CardActionArea component={NavLink} to='/RecipeSearch' >
                  <CardContent>
                    <i className="material-icons menuIcon">search</i>
                    <Typography gutterBottom variant="h5" component="h2">
                      Recipe Search
                    </Typography>
                    <Typography component="p">
                      Search for recipes across multiple online cooking websites.  
                      Narrow results based on dietary restrictions.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Grid item that is a card for the Saved Recipes Menu Options */}
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

            {/* Grid item that is a card for the settings Menu Options */}
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