import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth from '@material-ui/core/withWidth';
import { Typography } from '@material-ui/core';
import { Paper } from 'material-ui';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


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


});



 

class ResultsGridList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedRecipe: '',
    }

  }

  handleClick = (recipe) => { 
    this.setState({selectedRecipe: recipe});
  }

  handleClickAway = () =>
  {
    this.setState({selectedRecipe: ''});
  }


  render() {
    const { classes, width } = this.props;
    let columns = 4;
    
    if (width === 'xs') {
      columns = 2;
    };
    if (width === 'sm') {
      columns = 3;
    };

    let results = '';

    if (this.props.data === undefined || this.props.data.length === 0) {
      results = <Typography>No results</Typography>
    }

    else {
      results = (
        this.props.data.map(result => (
          
          <GridListTile key={result.recipe.uri} className={classes.gridListTitle} onClick={() => this.handleClick(result.recipe.uri)}>
          
            <img src={result.recipe.image} alt={result.recipe.label} />
            <GridListTileBar
              title={result.recipe.label}
              subtitle={<span>{result.recipe.source}</span>}
              // actionIcon={
              //  <IconButton className={classes.icon} >
              //    <InfoIcon />
              //  </IconButton>
              // }
            />
          </GridListTile>
   
        ))
      )
    };

    let content = '';

    if (this.state.selectedRecipe === '') {
      content = (
        <Paper className={classes.results}>
        <GridList cellHeight={180}  cols={columns} className={classes.gridList}>
        <GridListTile key="Subheader" cols={columns} style={{ height: 'auto' }}>
        <ListSubheader component="div">Search Results...</ListSubheader>
        </GridListTile>
        {results}
      </GridList>
      </Paper>

      )
    }

    else {
      content = (
        <ClickAwayListener onClickAway={this.handleClickAway}>
        <Paper className={classes.results}>
        <div>This is where the recipe details</div>
        
        </Paper>
        </ClickAwayListener>
      )
    };
  
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
