import React from 'react';
import ShoppingList from './ShoppingList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './ShoppingHome.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  instructionsGrid : {
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    color: "rgba(0, 0, 0, 0.87)",
    width: '100%',
    padding: '0',
  },

  notFound: {
    flexGrow: 1,
    minWidth: 0,
    textAlign: 'center',
  
    
  },


});


class ShoppingHome extends React.Component {
    
    render() {
      const { classes } = this.props;
      let ShoppingListArray = null;

    if (this.props.listGroup.length === 0) {
    ShoppingListArray = <Grid container item justify="center" wrap="nowrap" direction="column" className={classes.instructionsGrid}>
    
  
    <Grid item className={classes.notFound}>
    <Typography variant="h6" color="inherit">No Lists Found</Typography>
    </Grid>
    
    </Grid>
      
    }
    else {
      ShoppingListArray = this.props.listGroup.map((list, index) => {
        return ( <ShoppingList 
          index={index} 
          ListName={list.ListName} 
          ItemList={list.ItemList} 
          listDel={this.props.listDel} 
          setListName={this.props.setListName}
          itemAdd={this.props.itemAdd} 
          itemDel={this.props.itemDel} 
          itemDone={this.props.itemDone}
  
          />
          );


      });
      
    };
      


    

    
      return (
        
        
        <div>
        <TopMenuBar title="Foodi - Shopping Lists" addButton={this.props.listAdd} />
        <div className="ShoppingWindow">
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16}>

        {ShoppingListArray}
        
        </Grid>
        </div>
        </div>
        
               
        
      );
      
    }


  }
  
  export default withStyles(styles)(ShoppingHome);