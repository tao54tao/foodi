import React, { Component } from 'react';

// import material UI components
import { Paper } from 'material-ui';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Checkbox, FormControlLabel, RadioGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// set some CSS styles.  if using theme values, must put here and not in external css file
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


// SearchForm component
// returns a search form on a card
// takjes in searchDB as a prop, function to search the database

// stores the search terms and state of the diet and health form fields in state


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

    // function to handle when the search text box field is changed
    // sets the searchTerms state to be the text input value
    handleSearchTermsChange(event) {
      this.setState({
          searchTerms: event.target.value
      });
    }

    // function to handle when a checkbox is clicked
    // sets the state of the checkbox name to checked status
    handleCheckboxChange = name => event => {
      this.setState({ [name]: event.target.checked });
    }

    // function to handle when radio button is clicked
    // sets the state of the dietValue to be the value of the radio button
    handleRadioChange = event => {
      this.setState({ dietValue: event.target.value })
    }

    // function to handle the submit of the search form
    // uses the form element states to create search terms
    // calls the searchDB function with the search string created
    onSubmit(event) {
      event.preventDefault();
      // set newSearchTerms to be the saerchTerms state
      var newSearchTerms = this.state.searchTerms;
      
      // if newSearchTerms exists, check form elements
      // for each element, check the state
      // add appropriate terms to search based on state
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
        
        // run the searchDB function with the newSearchTerms
        this.props.searchDB(newSearchTerms);
        // clear the focus from the search field
        this.state.searchFieldInputRef.blur();
               
      }
    }

    // search form main render
    render() {
        const {classes} = this.props;

        return (
        <div className={classes.fullWidth}>
        {/* create paper for whole search form */}
        <Paper className={classes.searchForm}>
        <form onSubmit={this.onSubmit} autoComplete='off'>
        {/* set up grid for form elements */}
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Grid item className={classes.fullWidth}>
            {/* set up grid for text field and search button */}
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item className={classes.searchFieldWrap}>
                {/* search term text box - set value and inputFef to appropriate fields in state
                set onChange to handle function */}
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
                  {/* search button.  will call forms submit function */}
                <Button type="submit" color="primary" variant="contained">
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.dietWrap}>
            {/* set up grid for radio buttons */}
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Diet Type</FormLabel>
                  {/* assign values and functions to the radio button group */}
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
          {/* set up grid for the additional diet filter checkboxes */}
            <FormControl fullWidth component="fieldset">
              <FormLabel component="legend">Additional Diet Filters</FormLabel>
              <Grid container direction="row" justify="center" alignItems="center">
                {/* create grid item for each checkbox and set state and onchange to state and function */}
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox 
                              checked={this.state.veganChecked}
                              onChange={this.handleCheckboxChange('veganChecked')}
                              value='vegan'
                            />}
                    label='Vegan'
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox 
                              checked={this.state.vegetarianChecked}
                              onChange={this.handleCheckboxChange('vegetarianChecked')}
                              value='vegetarian'
                            />}
                    label='Vegetarian'
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox 
                              checked={this.state.peanutFreeChecked}
                              onChange={this.handleCheckboxChange('peanutFreeChecked')}
                              value='peanutFree'
                            />}
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