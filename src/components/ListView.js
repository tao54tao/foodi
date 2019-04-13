import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../css/ListView.css' 
import { Paper } from 'material-ui';

const styles = theme => ({
  ListView: {
    width: '100%',
    maxWidth: 500,
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
    
  },

 
});



var ItemList = [];
ItemList.push({index: 1, name: "milk", category: "dairy", quantity: 1, type: "gal", done: false});
ItemList.push({index: 2, name: "cheese", category: "dairy", quantity: 2, type: "cup", done: true});
ItemList.push({index: 3, name: "wheat bread", category: "general", quantity: 1, type: "whole", done: true});

class ItemView extends React.Component {
  render () {

    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markItemDone={this.props.markItemDone} />
      );
    });
    return (
      <List >
      {items}
      </List>

      /* <ul className="list-group"> {items} </ul> */

    );
  }
}
  
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markItemDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
        
    return(
        <div className={todoClass}>
        <ListItem>
        <ListItemText primary={this.props.item.name} />
        <Button onClick={this.onClickDone} >
        <i className="material-icons" >
        check
        </i>
        </Button>
        <Button onClick={this.onClickClose} >
        <i className="material-icons" >
        delete
        </i>
        </Button>
        </ListItem>
        </div>

      /* <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.name}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>      */
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
    event.preventDefault();
    console.log(this.refs.itemName.input.value);
    var newItemName = this.refs.itemName.input.value;
    
    if(newItemName) {
      this.props.addItem({newItemName});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form 
        ref="form" 
        onSubmit={this.onSubmit} 
        className="form-inline" 
        state={this.state} 
        onChange={changes => this.setState(changes)}>
            <TextField
            id="additem"
            ref="itemName"
            label="add item.."
            margin="dense"
            />
        
        <Button type="submit" color="primary">Add</Button> 
      </form>
    );   
  }
}
  
class TodoHeader extends React.Component {
  render () {
    return <Typography variant="h6" >{this.props.name}</Typography>;
  }
}
  
class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markItemDone = this.markItemDone.bind(this);
    this.state = {ItemList: ItemList};
  }
  addItem(todoItem) {
    ItemList.unshift({
      index: ItemList.length+1, 
      name: todoItem.newItemName, 
      done: false
    });
    this.setState({ItemList: ItemList});
  }
  removeItem (itemIndex) {
    ItemList.splice(itemIndex, 1);
    this.setState({ItemList: ItemList});
  }
  markItemDone(itemIndex) {
    var todo = ItemList[itemIndex];
    ItemList.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? ItemList.push(todo) : ItemList.unshift(todo);
    this.setState({ItemList: ItemList});  
  }
  render() {
    const { classes } = this.props;

    return (
      
        <Grid  item  >
        <Paper className={classes.ListView}>
        <TodoHeader name={"Stop & Shop"} />
        <ItemView  items={ItemList} removeItem={this.removeItem} markItemDone={this.markItemDone}/>
        <TodoForm addItem={this.addItem} />
        </Paper>
        </Grid>
      
     
    );
  }
}

ListView.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ListView);
