import React from 'react';
import List from '@material-ui/core/List';
import ShoppingItem from './ShoppingItem';
import { Grid } from '@material-ui/core';


class ItemList extends React.Component {
    render () {
       
      var items = this.props.items.map((item, index) => {
        return (
          <ShoppingItem item={item} index={index} listKey={this.props.listKey} removeItem={this.props.removeItem} markItemDone={this.props.markItemDone} />
          
        );
      });
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