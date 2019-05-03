import React from 'react';
import PropTypes from 'prop-types';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth from '@material-ui/core/withWidth';
import { Typography } from '@material-ui/core';
import { Paper } from 'material-ui';

// import other react components
import RecipeCard from './RecipeCard';

// import logo for edamam to show source of API
import edamamLogo from './edamamLogo.png';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    maxWidth: 1000,
  },
  gridListTitle: {
    cursor: 'pointer',
  },
  results: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  allignRight: {
    textAlign: 'right',
  },
});

class ResultsGridList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedRecipe: '',
    }
  }

  // function to handle when a grid item is clicked
  // takes in a recipe URI field as argument
  // set sselectedRecipe in state to recipe argument
  //  runs the hideSearch function and scrolls window to the top to ensure top of card is shown
  handleClick = (recipe) => { 
    this.setState({selectedRecipe: recipe});
    this.props.hideSearch();
    window.scrollTo(0, 0);
  }

  // function to handle when a recipe card is closed
  // clears the selectedRecipe from state
  // calls the showSearch function in props to bring the search bar back
  handleCardClose = () =>
  {
    this.setState({selectedRecipe: ''});
    this.props.showSearch();
  }


  render() {
    const { classes, width } = this.props;
    // set default columns to 4
    let columns = 4;
    // if the screen size is extra small, set columns to 2
    if (width === 'xs') {
      columns = 2;
    };
    // if the screen size is small, set columns to 3
    if (width === 'sm') {
      columns = 3;
    };

    // set up the results variable
    let results = '';

    // if the data prop is empty or undefined set results to a message
    if (this.props.data === undefined || this.props.data.length === 0) {
      results = <Typography>No results</Typography>
    }
    // if there are results, then map over them to create a grid item for each result
    // set the onclick to the handleClick function and send the recipe URI 
    // set the title to the recipe label and the subtitle to the source
    
    else {
      results = (
        this.props.data.map(result => (
          <GridListTile 
          key={result.recipe.uri} 
          className={classes.gridListTitle} 
          onClick={() => this.handleClick(result.recipe.uri)}
          >
            <img src={result.recipe.image} alt={result.recipe.label} />
            <GridListTileBar
            title={result.recipe.label}
            subtitle={<span>{result.recipe.source}</span>}
            />
          </GridListTile>
        ))
      )
    };

    // create main content variable
    let content = '';

    // if the selectedRecipe is blank in state, show the results list
    if (this.state.selectedRecipe === '') {
      content = (
        // create paper for entire results grid
        <Paper className={classes.results}>
          {/* create gridlist to show search result
          use columns variable to set width */}
          <GridList cellHeight={180}  cols={columns} className={classes.gridList}>
            <GridListTile key="Subheader" cols={columns} style={{ height: 'auto' }}>
              <ListSubheader component="div">Search Results...</ListSubheader>
            </GridListTile>

            {results}

            {/* Show the edamam logo to credit the API source for data */}
            <GridListTile key="Subheader" cols={columns} style={{ height: 'auto' }}>
              <ListSubheader component="div" className={classes.allignRight}>
                <img src={edamamLogo} alt="Edamam Logo" />
              </ListSubheader>
            </GridListTile>
          </GridList>
      </Paper>

      )
    }

    // if the selectedRecipe is set in state, show a recipe card
    else {
      // find the index of the selected recipe in the results list and set to selectedIndex variable
      let selectedIndex = this.props.data.findIndex(x => x.recipe.uri === this.state.selectedRecipe);
      // create isSaved variable and initialize to false.  will track if selected recipe is in saved recipe list
      let isSaved = false;
      // try to find same recipe in the saved recipe array
      // save index results to savedIndex variable
      // if result is -1 that shows recipe is not in saved list
      let savedIndex = this.props.savedRecipes.findIndex(item => {
        return item.recipe.uri === this.props.data[selectedIndex].recipe.uri
        }
      );
      // if the recipe was found and index assigned, set isSaved variable to true
      if (savedIndex > -1) {
        isSaved= true;
      };

      // set content to be a recipe card component
      // pass along the selected recipe data from data array prop
      // pass along function props
      // send close icon as the close button
      // set the isSaved and savedIndex to variable values
     
      content = (
        
        <RecipeCard 
        recipe={this.props.data[selectedIndex].recipe} 
        close={this.handleCardClose}
        closeIcon='close'
        addRecipe={this.props.addRecipe}
        removeRecipe={this.props.removeRecipe}
        savedRecipes={this.props.savedRecipes}
        isSaved={isSaved}
        savedIndex={savedIndex}/>

      )
    };
  
    // main return displays content variable
  return (
    <div className={classes.root}>
    
    {content}

    </div>
    
  );
}
}

ResultsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(ResultsGridList));
