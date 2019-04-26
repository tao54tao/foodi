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
            data: null,
        }
    }

    searchRecipe = (terms) => {
        this.setState.isFetching(true);

        // fetch the data

        let returnedData = [{stuff: 'stuff'},{stuff: 'stuff2'}];
        this.setState.data(returnedData);
        console.log(this.state);
        this.setState.isFetching(false);


    }

    
    render() {
      return (
      
        <div>
        <TopMenuBar title="Foodi - Recipe Search" />
        <div className="MainWindow">
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        >
        <Grid item>
            <SearchForm />        
        </Grid>
        <Grid item>
            <ResultsGridList />
        </Grid>

        

        </Grid>
        </div>
        </div>
                
      );
    }
  }
  
  export default RecipeSearch;