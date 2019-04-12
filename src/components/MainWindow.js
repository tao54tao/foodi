import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ShoppingList from './ShoppingList'



class MainWindow extends Component {
    render() {

      

      return (
        
        
          
        <div className="MainWindow">
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/ShoppingList' component={ShoppingList}/>
        </Switch>
        
       
        </div>
        
      );
    };

  }
  
  export default (MainWindow);