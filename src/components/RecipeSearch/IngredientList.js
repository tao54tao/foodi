import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



class IngredientList extends React.Component {
    render () {
       
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