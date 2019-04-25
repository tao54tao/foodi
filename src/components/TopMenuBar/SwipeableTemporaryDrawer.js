import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    open: false,
       
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {[{text: 'Home', icon: 'home', path: '/'},
            {text: 'Shopping List', icon: 'playlist_add_check', path: '/Shopping'},
            {text: 'Settings', icon: 'settings', path: '/Settings'}].map((link, index) => (
              <ListItem button key={link.text} component={NavLink} to={link.path}>
                <ListItemIcon><i className="material-icons">{link.icon}</i></ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
        </List>
        
      </div>
    );


    return (
      <div>
        <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
        </IconButton>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>

        <SwipeableDrawer
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
