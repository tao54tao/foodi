import React, { Component } from 'react';
import ListView from './ListView';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



class ShoppingList extends Component {
    render() {
      


      return (
        
        
        
        <Grid container flexgrow={1} spacing={24}>
        <Grid item xs={12}>
        <Grid container direction='row' justify='center' alignItems='flex-start' spacing={16}>

        <ListView />
        <ListView />
        <ListView />
        <ListView />
        </Grid>
        </Grid>
        </Grid>
        
        
        
      );

      
    }





  }
  
  export default ShoppingList;