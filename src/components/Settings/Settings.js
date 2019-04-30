import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import { Paper } from 'material-ui';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Settings.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AlertDialog from '../AlertDialog';

const styles = theme => ({

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },

  menuItem: {
    minWidth: 110,
  },

  card: {
    maxWidth: 400,
    
  },

  menuCards: {
    marginTop: theme.spacing.unit * 2,
  }
});

class Settings extends React.Component {
  state = {
    resetAlertOpen: false,
    sampleDataAlertOpen: false,
    
  };

  handleResetBtn = () => {
    this.setState({resetAlertOpen: true})
  }

  handleSampleDataBtn = () => {
    this.setState({sampleDataAlertOpen: true})
  }

  handleAlertClose = () => {
    this.setState({
      resetAlertOpen: false,
      sampleDataAlertOpen: false,
      
    })
  }

  handleResetConfirm = () => {
    this.props.resetApp();
  }

  handleSampleDataConfirm = () => {
    this.props.setSampleData();
  }

    render() {
      const { classes } = this.props;
      return (
        <div>
        <AlertDialog 
        open={this.state.resetAlertOpen} 
        handleClose={this.handleAlertClose} 
        handleConfirm={this.handleResetConfirm}
        alertTitle="Confirm App Reset"
        alertText={"This will delete all app data.  Are you sure?"}
        closeBtnText="cancel"
        confirmBtnText="delete" />

        <AlertDialog 
        open={this.state.sampleDataAlertOpen} 
        handleClose={this.handleAlertClose} 
        handleConfirm={this.handleSampleDataConfirm}
        alertTitle="Confirm Sample Data Import"
        alertText={"This will delete create new shopping lists.  Are you sure?"}
        closeBtnText="cancel"
        confirmBtnText="import" />
        <div>
          <TopMenuBar title="Foodi - Settings" />
        <div className="settingsWindow">
        
        <Paper className={classes.paper}>
        <Grid container spacing={16} direction="row" justify="center" alignItems="flex-start" className={classes.menuCards}>
        <Grid item className={classes.menuItem}>
        <Card className={classes.card}>
            <CardActionArea onClick={this.handleResetBtn} >
         
            <CardContent>
            <i className="material-icons menuIcon" >delete_sweep</i>
              <Typography gutterBottom variant="h5" component="h2">
              Reset App
             </Typography>
            <Typography component="p">
            This function will delete all app data.  All saved shopping lists and recipes will be deleted.
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
        <Grid item className={classes.menuItem}>
        <Card className={classes.card}>
            <CardActionArea onClick={this.handleSampleDataBtn} >
         
            <CardContent>
            <i className="material-icons menuIcon" >import_export</i>
              <Typography gutterBottom variant="h5" component="h2">
              Set Sample Data
             </Typography>
            <Typography component="p">
            This function will add two sample shopping lists to the state.
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </Grid>

        
          
          
          </Grid>
        </Paper>
             
        </div>
        </div>
        </div>
                
      );
    }
  }
  
  export default withStyles(styles)(Settings);