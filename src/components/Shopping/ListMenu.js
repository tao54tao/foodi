import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import AlertDialog from '../AlertDialog';



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
    delAlertOpen: false,
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

  handleEditBtn = () => {
    this.setState({ open: false });
    this.props.listNameEdit(this.props.listKey);
    }
    

  handleDelBtn = () => {
    
    this.setState({ open: false, delAlertOpen: true });
    }
  
  handleDelAlertClose = () => {
    this.setState({delAlertOpen: false})
  }

  handleDelConfirm = () => {
    this.props.listDel(this.props.listKey);

  }

    
  
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.ListMenu}>
        <div>
        <AlertDialog 
        open={this.state.delAlertOpen} 
        handleClose={this.handleDelAlertClose} 
        handleConfirm={this.handleDelConfirm}
        alertTitle="Confirm Delete"
        alertText="This will delete the list.  Are you sure?" 
        closeBtnText="cancel"
        confirmBtnText="delete" />
        
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
                      <MenuItem onClick={this.handleEditBtn} >Edit List Title</MenuItem>
                      <MenuItem onClick={this.handleDelBtn} >Delete List</MenuItem>
                      
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
