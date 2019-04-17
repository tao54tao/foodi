import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ShoppingItem from './ShoppingItem';


class ItemView extends React.Component {
    render () {
  
      var items = this.props.items.map((item, index) => {
        return (
          <ShoppingItem key={index} item={item} index={index} removeItem={this.props.removeItem} markItemDone={this.props.markItemDone} />
        );
      });
      return (
        <List >
        {items}
        </List>
  
  
      );
    }
  }

  export default ItemView;