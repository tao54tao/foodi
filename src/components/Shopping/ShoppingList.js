import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ShoppingList.css' 
import { Paper } from 'material-ui';
import AddItemForm from './AddItemForm';
import ItemView from './ItemView';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';

const styles = theme => ({
  ListGrid : {
    width: '100%',
    maxWidth: 500,
    minWidth: 320,

  },
  FullWidth : {
    width: '100%',
  },
  ShoppingList: {
    
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
    
    
  },

 
});


  
class ListHeader extends React.Component {

  render () {

        return <Grid item ><Typography variant="h6" align="center">{this.props.name}</Typography></Grid>;
  }
}
  
class ShoppingList extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {
    const { classes } = this.props;
       

    return (
      
        <Grid  item className={classes.ListGrid}>
        <Paper className={classes.ShoppingList}>
        <Grid className={classes.FullWidth} container direction="column" wrap="nowrap" justify="flex-start">
        <ListHeader name={this.props.ListName} />
        {/* need to add the remove list button somewhere */}

        <ItemView listKey={this.props.index} items={this.props.ItemList} removeItem={this.props.itemDel} markItemDone={this.props.itemDone}/>
        <AddItemForm listKey={this.props.index} addItem={this.props.itemAdd} />
        </Grid>
        </Paper>
        </Grid>
      
     
    );
  }
}

ShoppingList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ShoppingList);
