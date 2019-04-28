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


    searchFieldWrap: {
      marginRight: theme.spacing.unit * 2,
      flexGrow: 1,
      
      
     
      
    },

    FullWidth : {
      width: '100%',
      
    },

    container : {
      display: 'flex',
      flexGrow: 1,
    


    },

    searchForm: {
    
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 2,    
    
    
      
    },

    searchField: {
      marginRight: theme.spacing.unit,
      
    },

});


class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerms: '',
            
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSearchTermsChange = this.handleSearchTermsChange.bind(this);
    }

    handleSearchTermsChange(event) {
      this.setState({
          searchTerms: event.target.value
      });
    }

    onSubmit(event) {
      event.preventDefault();
      var newSearchTerms = this.state.searchTerms;
      
      if(newSearchTerms) {
       
        this.setState({
        searchTerms: '',
        
        });

      
        
        
      }
    }



    
    render() {
        const {classes} = this.props;

        return (
        <div className={classes.container}>
        <Paper className={classes.searchForm}>
        <form onSubmit={this.onSubmit} autoComplete='off'>
        <Grid container direction="row" justify="center" alignItems="center">
       
        <Grid item className={classes.searchFieldWrap}>
        
        <TextField 
          id="search-field"
          placeholder="Enter Search Terms Here"
          helperText="ex: grilled chicken"
          fullWidth          
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.searchTerms}
          onChange={this.handleSearchTermsChange}
        />
        
        </Grid>
        <Grid item>
        <Button type="submit" color="primary" variant="contained">
              Search
            </Button>
            </Grid>

     
        </Grid>
        </form>
        </Paper>
        </div>

        
                
      );
    }
  }
  
  export default withStyles(styles)(SearchForm);