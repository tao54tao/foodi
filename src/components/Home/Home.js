import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import { Paper } from 'material-ui';
import './Home.css'

class Home extends Component {
    render() {
      return (
        <div >
        <TopMenuBar title="Foodi" />
        <div className="HomeWindow">
        
        <Paper>
          <p>Test Home Page paper</p>
        </Paper>
        </div>     
        </div>
                
      );
    }
  }
  
  export default Home;