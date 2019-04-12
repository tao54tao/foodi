import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ShoppingList from './ShoppingList'
import '../css/MainWindow.css'



class MainWindow extends Component {
    render() {

      

      return (
        
        
          
        <div className="MainWindow">
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/ShoppingList' component={ShoppingList}/>
        <Route component={() => (<div>404 Not found </div>)}/>
        </Switch>
        
       
        </div>
        
      );
    };

  }
  
  export default (MainWindow);