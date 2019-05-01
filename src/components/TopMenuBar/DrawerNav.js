import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './DrawerNav.css';

const styles = {
  list: {
    width: 250,
  },
  topGraphic: {
    textAlign: 'center',

  }, 
  menuActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',

  },

  
  
};

class DrawerNav extends React.Component {
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
      <div className={classes.topGraphic}>
      <Grid container direction="column">
      <Grid item>
      <i class="material-icons topIcon">
      local_dining
      </i>
      </Grid>
      <Grid item>Foodi</Grid>
      </Grid>
      <Divider />
      </div>
        <List>
          {[{text: 'Home', icon: 'home', path: '/'},
            {text: 'Shopping Lists', icon: 'shopping_cart', path: '/Shopping'},
            {text: 'Recipe Search', icon: 'search', path: '/RecipeSearch'},
            {text: 'Saved Recipes', icon: 'list', path: '/SavedRecipes'},
            {text: 'Settings', icon: 'settings', path: '/Settings'}].map((link, index) => (
              <ListItem button key={link.text} component={NavLink} to={link.path} exact={true}activeClassName={classes.menuActive}>
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

DrawerNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerNav);
