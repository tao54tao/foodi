import React from 'react';

// import material UI components
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// set some CSS styles.  if using theme values, must put here and not in external css file
const styles = theme => ({
  itemRow: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemName: {
    flexGrow: 1,
    minWidth: 0,
  },
  noWrap: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  itemQuantity: {
    width: 40,
    paddingLeft: 0,
    paddingRight: theme.spacing.unit,
    textAlign: 'right',    
  },
  itemType: {
    width: 40,
    padding: 0,
    textAlign: 'left',
    paddingRight: theme.spacing.unit,
  },
});

// Shoppingitem component
// returns a div with a lisitem
// in the listItem is a grid row of the items name, quantity, type, done, and delete button
// item shows up with strikethrough and red when marked as done
// takes in item, index, listKey as props
// takes in removeItem and markItemDone functions as props
class ShoppingItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickDel = this.onClickDel.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickDel() {
      var itemIndex = parseInt(this.props.index);
      var listIndex = parseInt(this.props.listKey);
      this.props.removeItem(listIndex,itemIndex);
    }
    onClickDone() {
      var itemIndex = parseInt(this.props.index);
      var listIndex = parseInt(this.props.listKey);
      this.props.markItemDone(listIndex,itemIndex);
    }
    render () {
      const { classes } = this.props;
      var DoneClass = this.props.item.done ? 
          "done" : "undone";

      let checkBoxIcon = this.props.item.done ?
          <i className="material-icons" >
          check_box
          </i> 
        : <i className="material-icons" >
          check_box_outline_blank
          </i>
     
          
      return(
          <div className={DoneClass}>
          <ListItem className={classes.itemRow}>
          <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid item className={classes.itemName}><Typography variant="subheading" color="inherit" className={classes.noWrap}>{this.props.item.name}</Typography></Grid>
          <Grid item className={classes.itemQuantity}><Typography variant="subheading" color="inherit" className={classes.noWrap}>{this.props.item.quantity}</Typography></Grid>
          <Grid item className={classes.itemType}><Typography variant="subheading" color="inherit" >{this.props.item.type}</Typography></Grid>
          <Grid item><IconButton onClick={this.onClickDone} color="inherit" >
          
          {checkBoxIcon}
          </IconButton></Grid>

          <Grid item><IconButton onClick={this.onClickDel} >
          <i className="material-icons" >
          delete
          </i>
          </IconButton></Grid>
          </Grid>
          </ListItem>
          </div>
  
  
      );
    }
  }

  export default withStyles(styles)(ShoppingItem);