import React, { Component } from 'react';
import { Paper } from 'material-ui';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Checkbox, FormControlLabel, RadioGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({


    searchFieldWrap: {
      marginRight: theme.spacing.unit * 2,
      flexGrow: 1,
      
    },

    fullWidth : {
      width: '100%',
      
    },

    searchForm: {
    
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 2,
        

    },

    searchField: {
      marginRight: theme.spacing.unit,
      
    },

    dietRadioGroup: {
      flexDirection: 'row',
    },

    dietWrap: {
      paddingTop: 24,

    },

});


class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerms: '',
            hideResults: true,
            searchFieldInputRef: '',
            dietValue: 'no-restriction',
            veganChecked: false,
            vegetarianChecked: false,
            peanutFreeChecked: false,
            
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSearchTermsChange = this.handleSearchTermsChange.bind(this);
    }

    handleSearchTermsChange(event) {
      this.setState({
          searchTerms: event.target.value
      });
    }

    handleCheckboxChange = name => event => {
      this.setState({ [name]: event.target.checked });
    }

    handleRadioChange = event => {
      this.setState({ dietValue: event.target.value })
    }

    onSubmit(event) {
      event.preventDefault();
      var newSearchTerms = this.state.searchTerms;
      
      
      if(newSearchTerms) {
        if (this.state.dietValue !== 'no-restriction') {
          newSearchTerms = newSearchTerms+"&diet="+this.state.dietValue;
        }
        if (this.state.veganChecked) {
          newSearchTerms = newSearchTerms+"&health=vegan";
        }
        if (this.state.vegetarianChecked) {
          newSearchTerms = newSearchTerms+"&health=vegetarian";
        }
        if (this.state.peanutFreeChecked) {
          newSearchTerms = newSearchTerms+"&health=peanut-free";
        }
        console.log(newSearchTerms);
        this.props.searchDB(newSearchTerms);
        this.state.searchFieldInputRef.blur();
               
      }
    }

    



    
    render() {
        const {classes} = this.props;

        return (
        <div className={classes.fullWidth}>
        <Paper className={classes.searchForm}>
        <form onSubmit={this.onSubmit} autoComplete='off'>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
        <Grid item className={classes.fullWidth}>
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
          inputRef={el => this.setState({searchFieldInputRef: el})}
          onFocus={this.props.hideResults}
        />
        
        </Grid>
        <Grid item>
        <Button type="submit" color="primary" variant="contained">
              Search
            </Button>
            </Grid>
            </Grid>
            </Grid>

        <Grid item className={classes.dietWrap}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
            <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Diet Type</FormLabel>
            <RadioGroup
              aria-label="Diet Type"
              name="dietType"
              value={this.state.dietValue}
              onChange={this.handleRadioChange}
              className={classes.dietRadioGroup}
              >
              <FormControlLabel value="no-restriction" control={<Radio />} label="No Restriction" />
              <FormControlLabel value="balanced" control={<Radio />} label="Balanced" />
              <FormControlLabel value="high-protein" control={<Radio />} label="High Protein" />
              <FormControlLabel value="low-fat" control={<Radio />} label="Low Fat" />
              <FormControlLabel value="low-carb" control={<Radio />} label="Low Carb" />
              
              </RadioGroup>
            </FormControl>
            </Grid>

          </Grid>
        </Grid>


          

          <Grid item className={classes.DietWrap}>
          <FormControl fullWidth component="fieldset">
            <FormLabel component="legend">Additional Diet Filters</FormLabel>
          <Grid container direction="row" justify="center" alignItems="center">
          



          <Grid item><FormControlLabel
            control={
              <Checkbox 
                checked={this.state.veganChecked}
                onChange={this.handleCheckboxChange('veganChecked')}
                value='vegan'
                />
            }
            label='Vegan'/>
          </Grid>

          <Grid item><FormControlLabel
            control={
              <Checkbox 
                checked={this.state.vegetarianChecked}
                onChange={this.handleCheckboxChange('vegetarianChecked')}
                value='vegetarian'
                />
            }
            label='Vegetarian'/>
          </Grid>

          

          <Grid item><FormControlLabel
            control={
              <Checkbox 
                checked={this.state.peanutFreeChecked}
                onChange={this.handleCheckboxChange('peanutFreeChecked')}
                value='peanutFree'
                />
            }
            label='Peanut Free'/>
          </Grid>

          
          
          </Grid>
          </FormControl>
          </Grid>

        </Grid>

     
        
        
        </form>
        </Paper>
        </div>

        
                
      );
    }
  }
  
  export default withStyles(styles)(SearchForm);