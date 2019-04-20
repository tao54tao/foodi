import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import TopNav from './TopNav';
import { Switch, Route } from 'react-router-dom'





const styles = theme => ({
  topMenu: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TopMenuBar extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
  return (
    <div className={classes.topMenu}>
      <AppBar position="static">
        <Toolbar>
          <TopNav />
 

          <Typography variant="h6" color="inherit" ml={100} className={classes.grow}>
          {this.props.title}
          </Typography>
          
          {/* <Button color="inherit"><AddIcon /></Button> */}
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