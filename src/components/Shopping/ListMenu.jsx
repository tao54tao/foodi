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



const styles = theme => ({
  ListMenu: {
    display: 'flex',
    
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  MenuButton: {
    marginRight: theme.spacing.unit * 2,
  },
});

class ListMenu extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
        return;
    }
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.ListMenu}>
        <div>

        <IconButton 
        className={classes.MenuButton} 
        color="inherit" 
        aria-label="Menu"
        buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle} >
           
           <i className="material-icons" >
            more_vert
            </i>
                     
           
          
        </IconButton>



          <Popper open={open} anchorEl={this.anchorEl} transition >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose} >Edit List Title</MenuItem>
                      <MenuItem onClick={this.handleClose} >Delete List</MenuItem>
                      
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

ListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListMenu);
