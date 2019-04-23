import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  itemRow: {
    paddingTop: 0,
    paddingBottom: 0,

  },

  itemName: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

  },

  itemQuantity: {
    maxWidth: 40,
    paddingLeft: 0,
    paddingRight: theme.spacing.unit,
    textAlign: 'right',


    
  },

  itemType: {
    maxWidth: 40,
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
      console.log(this.props.item.type)
          
      return(
          <div className={DoneClass}>
          <ListItem className={classes.itemRow}>
          <ListItemText className={classes.itemName}primary={this.props.item.name} />
          <ListItemText primary={this.props.item.quantity} className={classes.itemQuantity} />
          <ListItemText primary={this.props.item.type} className={classes.itemType} />
          <IconButton onClick={this.onClickDone} >
          <i className="material-icons" >
          check
          </i>
          </IconButton>
          <IconButton onClick={this.onClickDel} >
          <i className="material-icons" >
          delete
          </i>
          </IconButton>
          </ListItem>
          </div>
  
  
      );
    }
  }

  export default withStyles(styles)(ShoppingItem);