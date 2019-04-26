import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import Typography from 'material-ui/styles/typography';
import { Paper } from 'material-ui';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, ListItemText } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        width: '100%',
        maxWidth: 400,
        minWidth: 320,

    },

});


class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            saerchTerms: '',
            
        }
    }



    
    render() {
        const {classes} = this.props;

        return (
      
        <div>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          
          style={{ margin: 8 }}
          placeholder="Enter Search Terms Here"
          helperText="ex: grilled chicken"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        </form>
        </div>
                
      );
    }
  }
  
  export default withStyles(styles)(SearchForm);