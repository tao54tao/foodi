import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ShoppingList.css' 
import { Paper } from 'material-ui';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListMenu from './ListMenu';

const styles = theme => ({
  ListGrid : {
    width: '100%',
    maxWidth: 400,
    minWidth: 320,

  },
  FullWidth : {
    width: '100%',
  },

  ListTitle: {
    flexGrow: 1,
  },

  MenuButton: {
    marginRight: theme.spacing.unit * 2,
  },

  ShoppingList: {
    
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
    
    
  },

 
});


  
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
          <Grid item >
          <Grid container direction="row" alignItems="center" wrap="nowrap" >
            <Grid item className={classes.ListTitle}><Typography variant="h6" align="center">{this.props.ListName}</Typography>
            </Grid>
            <Grid item>
            <ListMenu listDel={this.props.listDel} listKey={this.props.index} />
            </Grid>
          </Grid>
          </Grid>
          <ItemList listKey={this.props.index} items={this.props.ItemList} removeItem={this.props.itemDel} markItemDone={this.props.itemDone}/>
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
