import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// import other components
import './DrawerNav.css';

const styles = theme => ({
  list: {
    width: 250,
  },
  topGraphic: {
    textAlign: 'center',
    padding: theme.spacing.unit,
  }, 
  menuActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
});

// DrawerNav component
// returns a drawer menu that slides out from the left of the screen
// stores the status of if the menu is open or not in state
class DrawerNav extends React.Component {
  state = {
    open: false,
       
  };

  // function to open the drawer and make it slide out
  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  render() {
    const { classes } = this.props;

    // create sideList variable that holds the content of the slide out menu
    const sideList = (
      <div className={classes.list}>
      {/* div for top app icon area */}
      <div className={classes.topGraphic}>
        <Grid container direction="column">
        <Grid item>
        <i class="material-icons topIcon">
        local_dining
        </i>
        </Grid>
        <Grid item>Foodi</Grid>
        </Grid>
      </div>
      <Divider />
      {/* list of the main app navigation areas.  Icons with text */}
      {/* map an array to a list Item Icon and Text component for each menu item */}
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

    // main div return
    return (
      <div>
        <IconButton onClick={this.toggleDrawer(true)} 
        className={classes.menuButton} 
        color="inherit" aria-label="Menu">
        <MenuIcon />
        </IconButton>
        {/* the side drawer element itself.  only shown when toggleDrawer is true */}
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
