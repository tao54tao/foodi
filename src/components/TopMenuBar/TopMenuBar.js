import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TopNav from './TopNav';
import IconButton from '@material-ui/core/IconButton';






const styles = theme => ({
  topMenu: {
    flexGrow: 1,
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
    display: 'none',
  }
});

class TopMenuBar extends React.Component {


  handleClick = () => {
    // set the addButton prop to handleClick function only if the prop was passed to TopMenuBar component
    if (this.props.addButton) {
      this.props.addButton();

    }
    
  }
  
  render() {
    const { classes } = this.props;

    // If the addButton prob exists, then set the ButtonExist to to have the show class
    // If it does not exist, set to hide

    var ButtonExist = this.props.addButton ? 
    classes.show : classes.hide;


  return (
    <div className={classes.topMenu}>
      <AppBar position="static">
        <Toolbar>
          <TopNav />
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