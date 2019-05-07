import React from 'react';
import PropTypes from 'prop-types';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

// import other components
import DrawerNav from './DrawerNav';


const styles = theme => ({
  topMenu: {
    flexGrow: 1,
    minWidth: 0,
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hide: {
    visibility: 'hidden',
  }
});


// TopMenuBar component
// returns a app bar component with a menu icon and title area
// takes in title and addButton function as props

class TopMenuBar extends React.Component {

  // function to handle when the add button is clicked
  handleClick = () => {
    // set the addButton prop to handleClick function only if the prop was passed to TopMenuBar component
    if (this.props.addButton) {
      this.props.addButton();

    };
  };
  
  render() {
    const { classes } = this.props;

    // If the addButton prop exists, then set the ButtonExist to to have the show CSS class
    // If it does not exist, set to hide

    var ButtonExist = this.props.addButton ? 
    classes.show : classes.hide;


  return (
    <div className={classes.topMenu}>
      <AppBar position="fixed">
        <Toolbar>
          
          <DrawerNav />
       
          <Typography variant="h6" color="inherit" ml={100} className={classes.grow}>
          {this.props.title}
          </Typography>
          <IconButton color="inherit" onClick={this.handleClick} className={ButtonExist}><AddIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );

  }

}


TopMenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopMenuBar);