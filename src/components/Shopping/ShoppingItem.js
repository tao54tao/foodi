import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  itemRow: {
    paddingTop: 0,
    paddingBottom: 0,

  },

  itemName: {
    flexGrow: 1,
    minWidth: 0,


  },

  noWrap: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

  },

  itemQuantity: {
    width: 40,
    paddingLeft: 0,
    paddingRight: theme.spacing.unit,
    textAlign: 'right',


    
  },

  itemType: {
    width: 40,
    padding: 0,
    textAlign: 'left',
    paddingRight: theme.spacing.unit,
    
  },

 
});

class ShoppingItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickDel = this.onClickDel.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickDel() {
      var itemIndex = parseInt(this.props.index);
      var listIndex = parseInt(this.props.listKey);
      this.props.removeItem(listIndex,itemIndex);
    }
    onClickDone() {
      var itemIndex = parseInt(this.props.index);
      var listIndex = parseInt(this.props.listKey);
      this.props.markItemDone(listIndex,itemIndex);
    }
    render () {
      const { classes } = this.props;
      var DoneClass = this.props.item.done ? 
          "done" : "undone";
     
          
      return(
          <div className={DoneClass}>
          <ListItem className={classes.itemRow}>
          <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid item className={classes.itemName}><Typography variant="subheading" color="inherit" className={classes.noWrap}>{this.props.item.name}</Typography></Grid>
          <Grid item className={classes.itemQuantity}><Typography variant="subheading" color="inherit" className={classes.noWrap}>{this.props.item.quantity}</Typography></Grid>
          <Grid item className={classes.itemType}><Typography variant="subheading" color="inherit" >{this.props.item.type}</Typography></Grid>
          <Grid item><IconButton onClick={this.onClickDone} color="inherit" >
          <i className="material-icons" >
          check
          </i>
          </IconButton></Grid>
          <Grid item><IconButton onClick={this.onClickDel} >
          <i className="material-icons" >
          delete
          </i>
          </IconButton></Grid>
          </Grid>
          </ListItem>
          </div>
  
  
      );
    }
  }

  export default withStyles(styles)(ShoppingItem);