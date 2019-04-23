import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ShoppingList.css' 
import { Paper } from 'material-ui';
import AddItemForm from './AddItemForm';
import ItemView from './ItemView';

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


  
class ListHeader extends React.Component {

  render () {

        return <Grid item><Typography variant="h6" align="center">{this.props.name}</Typography></Grid>;
  }
}
  
class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markItemDone = this.markItemDone.bind(this);
    this.state={ItemList: this.props.ItemList};
    
  }
  addItem(todoItem) {
    this.props.ItemList.unshift({
      index: this.props.ItemList.length+1, 
      name: todoItem.newItemName, 
      done: false
    });
    this.setState({ItemList: this.props.ItemList});
  }
  removeItem (ItemKey) {
    this.props.ItemList.splice(ItemKey, 1);
    this.setState({ItemList: this.props.ItemList});
  }
  markItemDone(ItemKey) {
    var item = this.props.ItemList[ItemKey];
    this.props.ItemList.splice(ItemKey, 1);
    item.done = !item.done;
    item.done ? this.props.ItemList.push(item) : this.props.ItemList.unshift(item);
    this.setState({ItemList: this.props.ItemList});  
  }
  render() {
    const { classes } = this.props;
     

    return (
      
        <Grid  item  >
        <Paper className={classes.ListView}>
        <Grid container direction="column" justify="flex-start">
        <ListHeader name={this.props.ListName} />
        <ItemView items={this.props.ItemList} removeItem={this.removeItem} markItemDone={this.markItemDone}/>
        <AddItemForm addItem={this.addItem} />
        </Grid>
        </Paper>
        </Grid>
      
     
    );
  }
}

ListView.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ListView);
