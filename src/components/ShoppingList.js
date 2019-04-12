import React, { Component } from 'react';
import ListView from './ListView';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ShoppingList extends Component {
    render() {
      


      return (
        
        <div>
        
        <Typography variant="h5" >Shopping List</Typography>
        <Grid container spacing={16} flexgrow={1}>
        <Grid item xs={12}>
        <Grid container direction='row' justify='center' alignItems='flex-start' spacing={16}>

        <ListView />
        <ListView />
        <ListView />
        <ListView />
        </Grid>
        </Grid>
        </Grid>
        
        </div>
        
      );

      
    }





  }
  
  export default ShoppingList;