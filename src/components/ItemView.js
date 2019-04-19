import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ShoppingItem from './ShoppingItem';
import { Grid } from '@material-ui/core';


class ItemView extends React.Component {
    render () {
  
      var items = this.props.items.map((item, index) => {
        return (
          <ShoppingItem key={index} item={item} index={index} removeItem={this.props.removeItem} markItemDone={this.props.markItemDone} />
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

  export default ItemView;