import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ShoppingList.css' 
import { Paper } from 'material-ui';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListMenu from './ListMenu';
import { AvMicNone } from 'material-ui/svg-icons';
import { Button, TextField, ListItemText } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const styles = theme => ({
  ListGrid : {
    width: '100%',
    maxWidth: 400,
    minWidth: 320,

  },
  FullWidth : {
    width: '100%',
  },

  ListTitle: {
    flexGrow: 1,
    minWidth: 0,
    marginLeft: theme.spacing.unit * 2,
  },

  MenuButton: {
    marginRight: theme.spacing.unit * 2,
  },

  ShoppingList: {
    
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
    
  },



 
});


  
class ShoppingList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nameEdit: false,

    };
    this.handleNameChange = this.handleNameChange.bind(this);

  }

  listNameEdit = (listKey) => {
    this.setState({nameEdit: true});

  }

  listNameSave = (listKey) => {
    this.setState({nameEdit: false});

  }

  handleNameChange = (event) =>  {
    this.props.setListName(this.props.index, event.target.value);

  }

  handleKeyPress = (event) => {
 
      if (event.key === 'Enter') {
        this.setState({nameEdit: false});
       
      }

  }

  render() {
    const { classes } = this.props;

    var ListNameHeadClass = this.state.nameEdit ? 
    "hide nowrap" : "nohide nowrap";

    var ListNameFieldClass = this.state.nameEdit ?
    "nohide nowrap" : "hide nowrap";

      

    return (
      
        <Grid  item className={classes.ListGrid}>
        <Paper className={classes.ShoppingList}>
        <Grid className={classes.FullWidth} container direction="column" wrap="nowrap" justify="flex-start">
          <Grid item >
          <Grid container direction="row" alignItems="center"  wrap="nowrap" className={classes.FullWidth}  >
            <Grid item className={classes.ListTitle}>
            <Typography variant="h6" align="center" className={ListNameHeadClass} onClick={this.listNameEdit}>{this.props.ListName}</Typography>
            <div className={ListNameFieldClass} >
              <ClickAwayListener onClickAway={this.listNameSave}>

              <TextField  
              id="listName" 
              ref="listName" 
              value={this.props.ListName}
              onChange={this.handleNameChange}
              onKeyPress={this.handleKeyPress}
              fullWidth
              inputProps={{
                style: {  textAlign: "center",
                          fontSize: "1.25rem",
                          lineHeight: "1.6",
                          letterSpacing: "0.0075em"}
              }}
              
              
              />
              </ClickAwayListener>
            </div> 
            </Grid>
            <Grid item>
            <ListMenu listDel={this.props.listDel} listKey={this.props.index} listName={this.props.ListName} listNameEdit={this.listNameEdit}/>
            </Grid>
          </Grid>
          </Grid>
          <ItemList listKey={this.props.index} items={this.props.ItemList} removeItem={this.props.itemDel} markItemDone={this.props.itemDone}/>
          <AddItemForm listKey={this.props.index} addItem={this.props.itemAdd} />
        </Grid>
        </Paper>
        </Grid>
      
     
    );
  }
}

ShoppingList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ShoppingList);
