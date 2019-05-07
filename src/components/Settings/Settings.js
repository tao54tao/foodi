import React from 'react';
import AlertDialog from '../AlertDialog';

// import material UI components
import { Paper } from 'material-ui';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

// import other components
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './Settings.css';

// set some CSS styles.  if using theme values, must put here and not in external css file
const styles = theme => ({

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 2,
  },
  menuItem: {
    minWidth: 110,
  },
  card: {
    maxWidth: 380,
  },
});

// Settings component
// returns a grid of clickable buttons
// takes in resetApp and setSampleData functions as props
// keeps track of alert boxes status in state


class Settings extends React.Component {
  state = {
    resetAlertOpen: false,
    sampleDataAlertOpen: false,
    
  };

  // function to handle when the reset app button is pressed
  handleResetBtn = () => {
    this.setState({resetAlertOpen: true})
  }
  // function to handle when then set sample data button is pressed
  handleSampleDataBtn = () => {
    this.setState({sampleDataAlertOpen: true})
  }

  // function to handle when either alert is closed
  handleAlertClose = () => {
    this.setState({
      resetAlertOpen: false,
      sampleDataAlertOpen: false,
    })
  }
  // function to handle when the reset app button dialog is confirmed
  handleResetConfirm = () => {
    this.props.resetApp();
  }
  // function to handle when the set sample data button dialog is confirmed
  handleSampleDataConfirm = () => {
    this.props.setSampleData();
  }

    render() {
      const { classes } = this.props;
      return (
        <div>
        {/* aleart dialog box for reset app button */}
        <AlertDialog 
        open={this.state.resetAlertOpen} 
        handleClose={this.handleAlertClose} 
        handleConfirm={this.handleResetConfirm}
        alertTitle="Confirm App Reset"
        alertText={"This will delete all app data.  Are you sure?"}
        closeBtnText="cancel"
        confirmBtnText="delete" />

        {/* alert dialog box for set sample data button */}
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
          {/* main div for settings paper */}
          <div className="settingsWindow">
        
          <Paper className={classes.paper}>
          <Grid container spacing={16} direction="row" justify="center" alignItems="flex-start">
          {/* first card, reset app button */}
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
            {/* second card - set sample data button */}
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