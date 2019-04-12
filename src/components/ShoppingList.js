import React, { Component } from 'react';
import ListView from './ListView';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



class ShoppingList extends Component {
    render() {
      


      return (
        
        
        <div>
        
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16}>

        <ListView />
        <ListView />
        <ListView />
        <ListView />
        </Grid>
        
        </div>
        
        
        
      );

      
    }





  }
  
  export default ShoppingList;