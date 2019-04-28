import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import { typography } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import { Paper } from 'material-ui';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
    maxWidth: 1000,
    
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

  }


  render() {
    const { classes, width } = this.props;
    let columns = 4;
    
    if (width === 'xs') {
      columns = 2;

    }
    if (width === 'sm') {
      columns = 3;
    }

    if (this.props.data == undefined || this.props.data.length == 0) {
      var results = <Typography>No results</Typography>
      
      
    }

    else {
      
      var results = (
        

        this.props.data.map(result => (
          
          <GridListTile key={result.recipe.uri}>
          
            <img src={result.recipe.image} alt={result.recipe.label} />
            <GridListTileBar
              title={result.recipe.label}
              subtitle={<span>{result.recipe.source}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))


      )
    };
    

  return (
    <div className={classes.root}>
    <Paper className={classes.results}>
      <GridList cellHeight={180}  cols={columns} className={classes.gridList}>
         <GridListTile key="Subheader" cols={columns} style={{ height: 'auto' }}>
          <ListSubheader component="div">Search Results...</ListSubheader>
        </GridListTile>
        
        {results}
      </GridList>
      </Paper>
    </div>
    
  );
}
}

ResultsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(ResultsGridList));
