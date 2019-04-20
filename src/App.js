import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopMenuBar from './components/TopMenuBar';
import MainWindow from './components/MainWindow';
import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
      <CssBaseline />
      <TopMenuBar />
      <MainWindow />
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;