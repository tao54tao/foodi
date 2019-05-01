import React, { Component } from 'react';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './RecipeSearch.css'
import SearchForm from './SearchForm';
import Grid from '@material-ui/core/Grid';
import ResultsGridList from './ResultsGridList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    searchWrap: {
        marginTop: theme.spacing.unit,
     
    },

  });

  


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

    searchRecipe = (terms) => {
        this.setState({isFetching: true,} , () => {

                    
            let baseUrl='https://api.edamam.com/search?app_id=9680102e&app_key=65589c702692d0ca9a4ffdd705fb2dcf&to=30&q='
            // fetch the data using provided search terms argument               
            fetch(baseUrl + terms)
            .then(response => response.json())
            .then(data => this.setState({
                data: data.hits,
                isFetching: false,
                hideResults: false,
            }));
            


        });
    }

    hideSearch = () => {
        this.setState({hideSearch: true});
    }
    showSearch = () => {
        this.setState({hideSearch: false});
    }
     
    render() {   
        
        const { classes } = this.props;

        var resultsClass = this.state.hideResults ? 
        "hide fullWidth" : "nohide fullWidth";

        var searchClass = this.state.hideSearch ?
        "hide fullWidth" : "nohide fullWidth";

        let content= '';

        if (this.state.isFetching) {
            content = <div>Loading...</div>;
        } else {
            content = (
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
        <TopMenuBar title="Foodi - Recipe Search" />
        <div className="MainWindow">
        <div className={classes.searchWrap}>
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={16}
        
        >
        <Grid item className={searchClass}>
            <SearchForm searchDB={this.searchRecipe} />        
        </Grid>

        {content}

        </Grid>
        </div>
        
        </div>
        </div>
                
      );
    }
  }
  
  export default withStyles(styles)(RecipeSearch);