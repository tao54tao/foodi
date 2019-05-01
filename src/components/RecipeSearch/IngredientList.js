import React from 'react';

// import material UI components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


// IngredientList component
// returns div with a headding, divider, then a list of ingredients
// takes in a array of ingredients as a prop

class IngredientList extends React.Component {
    render () {
      
      // create an array called items that containes a list item for each of the items in props
      var items = this.props.items.map((item, index) => {
        return (
            <ListItem index={index} >{item}</ListItem>       
        );
      });

      return (
        <div>
          <Typography variant="h6" className='extratopPadding'>Ingredient List</Typography>
          <Divider />
          <List dense>
            {items}
          </List>
        </div>
        
  
  
      );
    }
  }

  export default IngredientList;