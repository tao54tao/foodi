import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import Typography from 'material-ui/styles/typography';
import { Paper } from 'material-ui';
import Button from '@material-ui/core/Button';

class Settings extends Component {
    render() {
      return (
        <div className="MainWindow">
        <TopMenuBar title="Foodi - Settings" />
        <Paper>
          <p>Test Settings Page paper</p>
          <Button onClick={this.props.resetApp}>Reset App</Button>
          <Button onClick={this.props.setSampleData}>Import Sample Data</Button>
        </Paper>
             
        </div>
                
      );
    }
  }
  
  export default Settings;