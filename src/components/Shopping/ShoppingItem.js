import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

class ShoppingItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickDel = this.onClickDel.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickDel() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markItemDone(index);
    }
    render () {
      var DoneClass = this.props.item.done ? 
          "done" : "undone";
          
      return(
          <div className={DoneClass}>
          <ListItem>
          <ListItemText primary={this.props.item.name} />
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

  export default ShoppingItem;