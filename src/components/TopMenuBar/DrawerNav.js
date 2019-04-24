import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from 'material-ui';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';





const styles = theme => ({
  list: {
    width: 400,
    
  },
  
});

class DrawerNav extends React.Component {
  state = {
    open: false,
  };
  

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;
    const MenuLinks = [{text: 'Home', icon: 'home', path: '/'},{text: 'Shopping List', icon: 'home', path: '/Shopping'},{text: 'Settings', icon: 'home', path: '/Settings'}];
    
    const LinkList = MenuLinks.map((link) => (
      
      <ListItem button onClick={this.handleDrawerClose} >
      <NavLink to={link.path}>
        <ListItemIcon><i className="material-icons">{link.icon}</i></ListItemIcon>
        <ListItemText primary={link.text} />
        </NavLink>
      </ListItem>
      
    ))
    

    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          {LinkList}
        </List>
      </div>
    )
  
    return (
      <div>

        <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
            
        <ClickAwayListener onClickAway={this.handleDrawerClose}>
        <Drawer
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={this.state.open}
          onClose={this.state.closed}
        >
                  
          {/* <div tabIndex={0} role="button" onClick={this.handleDrawerClose} onKeyDown={this.handleDrawerClose}> */}
            {sideList}
          {/* </div> */}
          
        </Drawer>
        </ClickAwayListener>
      </div>
    );
  }
}

DrawerNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerNav);
