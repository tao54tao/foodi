import React, { Component } from 'react';

// import material UI components
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// import other components
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import SearchForm from './SearchForm';
import ResultsGridList from './ResultsGridList';

// import css
import './RecipeSearch.css'
import './loading-spinner.css';

// set some CSS styles.  if using theme values, must put here and not in external css file
const styles = theme => ({

    searchWrap: {
        marginTop: theme.spacing.unit,
    },
  });

// RecipeSearch component
// returns a search field and a list of results
// takes in savedRecipies as a prop
// takes in addRecipe and removeRecipe functions as props
// keeps track of internal state with isFetching, hideResults, and hideSearch
// stores returned data in state data

class RecipeSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            data: [],
            hideResults: true,
            hideSearch: false,  
        }  
    }

    // function to search for recipies of edamam.com
    // uses a free limited usage developer API
    // takes in search keyword terms as a string argument
    searchRecipe = (terms) => {
        // set the state to fetching before making fetch request
        this.setState({isFetching: true,} , () => {

            // set the api key and q= for search terms        
            let baseUrl='https://api.edamam.com/search?app_id=9680102e&app_key=65589c702692d0ca9a4ffdd705fb2dcf&to=30&q='
            // fetch the data using provided search terms argument               
            fetch(baseUrl + terms)
            // turn results into json 
            .then(response => response.json())
            // set the hits objects to the data state
            // set isfetching as false and set hideResults to false so results Div shows up
            .then(data => this.setState({
                data: data.hits,
                isFetching: false,
                hideResults: false,
            }));
            
        });
    }

    // function to hide the search form div by settings state of hideSearch
    hideSearch = () => {
        this.setState({hideSearch: true});
    }
    // function to show the search form div by settings state of hideSearch
    showSearch = () => {
        this.setState({hideSearch: false});
    }
     
    render() {   
        
        const { classes } = this.props;

        // set the results div to hide or show class based on hideResults state
        var resultsClass = this.state.hideResults ? 
        "hide fullWidth" : "nohide fullWidth";

        // set the search form div to hide or show class based on hideSearch state
        var searchClass = this.state.hideSearch ?
        "hide fullWidth" : "nohide fullWidth";

        // create blank content variable for the div below the search field
        // this will show nothing, the loading grahic, or the search results depending on state
        let content= '';

        // if fetching data, show the content loader div
        // className loader uses loading-spinner.css to create graphic

        // if not fetching data, show the results div

        if (this.state.isFetching) {
            content = <div className='loader'>Loading...</div>;
            
        } else {
            content = (
                // create a result grid list react component with the result data
                // pass the functions of this compoenent to it as props
                <Grid item className={resultsClass}  >
                <ResultsGridList 
                data={this.state.data} 
                hideSearch={this.hideSearch} 
                showSearch={this.showSearch}
                addRecipe={this.props.addRecipe}
                removeRecipe={this.props.removeRecipe}
                savedRecipes={this.props.savedRecipes}/>
                </Grid>
            );
            }


      return (
        
        <div>
        {/* create a topmenubar react component with search title */}
        <TopMenuBar title="Foodi - Recipe Search" />
        <div className="MainWindow">
        <div className={classes.searchWrap}>
        {/* create a grid column layout for the search and results components */}
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={16}
        >
        <Grid item className={searchClass}>
            {/* create a search form react component */}
            <SearchForm searchDB={this.searchRecipe} />        
        </Grid>

        {/* display the content that was set in the render area above
        will show nothing, the loading grahic, or the search results depending on state */}
        {content}

        </Grid>
        </div>
        
        </div>
        </div>
                
      );
    }
  }
  
  export default withStyles(styles)(RecipeSearch);