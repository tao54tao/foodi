import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../css/App.css';
import TopMenu from './TopMenu';
import MainWindow from './MainWindow';


class App extends Component {
  render() {
    return (
      
      <div className="App">
      <CssBaseline />
      <TopMenu />
      <MainWindow />
      </div>
      
    );
  }
}

export default App;