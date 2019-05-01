import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// reusable alert dialog component
// takes in the following props

/* 
open = should alert be open, true or false 
handleClose= function to run when alert is closed
handleConfirm= function to run when alert confirm button is clicked
alertTitle= the alert title
alertText= the alert body text
closeBtnText= the close button text
confirmBtnText= the confirm button text 
*/

class AlertDialog extends React.Component {

  // function when alert box is canceled
  handleCancel = () => {
    // run the close function provided as prop
    this.props.handleClose();
  };

  // function when alert box is confirmed
  handleConfirm = () => {
    // run the confirm function provided as prop
    this.props.handleConfirm();
    // run the close function provided as prop
    this.props.handleClose();
    
  };

  render() {
    return (
      <div>
        {/* dialog box element */}
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.alertTitle}</DialogTitle>
          <DialogContent><DialogContentText id="alert-dialog-description">
              {this.props.alertText}
          </DialogContentText></DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              {this.props.closeBtnText}
            </Button>
            <Button onClick={this.handleConfirm} color="secondary" autoFocus>
              {this.props.confirmBtnText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;