import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import Typography from 'material-ui/styles/typography';
import { Paper } from 'material-ui';
import './RecipeSearch.css'
import SearchForm from './SearchForm';
import Grid from '@material-ui/core/Grid';
import ResultsGridList from './ResultsGridList';


class RecipeSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            data: [],
            hideResults: true,
        }
    }

    searchRecipe = (terms) => {
        this.setState({isFetching: true});

        // fetch the data
        let baseUrl='https://api.edamam.com/search?app_id=9680102e&app_key=65589c702692d0ca9a4ffdd705fb2dcf&to=30&q='
                
         fetch(baseUrl + terms)
         .then(response => response.json())
         .then(data => this.setState({data: data.hits}));

       
        this.setState({isFetching: false,
                        hideResults: false});

    }

    
    render() {
        const {classes} = this.props;

        var resultsClass = this.state.hideResults ? 
        "hide" : "nohide";

      return (
        
        <div>
        <TopMenuBar title="Foodi - Recipe Search" />
        <div className="MainWindow">
        
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={16}
        
        >
        <Grid item >
            <SearchForm searchDB={this.searchRecipe}/>        
        </Grid>

        <Grid item className={resultsClass}>
            <ResultsGridList data={this.state.data}/>
        </Grid>

        </Grid>
        
        </div>
        </div>
                
      );
    }
  }
  
  export default RecipeSearch;