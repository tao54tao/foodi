import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import { Paper } from 'material-ui';

class Home extends Component {
    render() {
      return (
        <div className="MainWindow">
        <TopMenuBar title="Foodi" />
        <Paper>
          <p>Test Home Page paper</p>
        </Paper>
             
        </div>
                
      );
    }
  }
  
  export default Home;