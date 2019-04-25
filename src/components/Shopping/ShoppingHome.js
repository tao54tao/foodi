import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './ShoppingHome.css';


class ShoppingHome extends React.Component {
  constructor (props) {
    super(props);

  }
    
    render() {

    var ShoppingListArray = this.props.listGroup.map((list, index) => {
      
      return ( <ShoppingList 
        index={index} 
        ListName={list.ListName} 
        ItemList={list.ItemList} 
        listDel={this.props.listDel} 
        itemAdd={this.props.itemAdd} 
        itemDel={this.props.itemDel} 
        itemDone={this.props.itemDone} />
        );
    });

    
      return (
        
        
        <div>
        <TopMenuBar title="Foodi - Shopping Lists" addButton={this.props.listAdd} />
        <div className="MainWindow">
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16}>

        {ShoppingListArray}
        
        </Grid>
        </div>
        </div>
        
               
        
      );
      
    }


  }
  
  export default ShoppingHome;