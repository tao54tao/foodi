import React from 'react';

// import material UI components
import List from '@material-ui/core/List';
import { Grid } from '@material-ui/core';

// import other components
import ShoppingItem from './ShoppingItem';

// ItemList component
// returns a grid item that is a list of ShoppingItems
// takes in listKey and items props
// takes in removeItem and markItemDone functions as props
// the Shoppingitems are generated from the items prop passed to ItemList

class ItemList extends React.Component {
    render () {

      var items = this.props.items.map((item, index) => {
        return (
          <ShoppingItem 
            item={item} 
            index={index} 
            listKey={this.props.listKey} 
            removeItem={this.props.removeItem} 
            markItemDone={this.props.markItemDone} />
          
        );
      });

      // return the array of shopping items inside of a list inside a grid item
      return (
        <Grid item>
        <List >
        {items}
        </List>
        </Grid>
  
  
      );
    }
  }

  export default ItemList;