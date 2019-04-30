import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {

  handleCancel = () => {
    this.props.handleClose();
  };

  handleConfirm = () => {
    this.props.handleConfirm();
    this.props.handleClose();
    
  };

  render() {
    return (
      <div>
        
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.alertTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {this.props.alertText}
            </DialogContentText>
          </DialogContent>
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
