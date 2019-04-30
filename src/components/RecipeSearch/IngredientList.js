import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



class IngredientList extends React.Component {
    render () {
       
      var items = this.props.items.map((item, index) => {
        return (
            <ListItem index={index} >{item}</ListItem>
                    
        );
      });
      return (
        
        <List dense>
        {items}
        </List>
        
  
  
      );
    }
  }

  export default IngredientList;