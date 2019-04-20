import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import ShoppingList from './components/ShoppingList/ShoppingList';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
      <CssBaseline />
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/ShoppingList' component={ShoppingList}/>
        <Route component={() => (<div>404 Not found </div>)}/>
        </Switch>
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;