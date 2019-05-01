// import React and React Router
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

// import base CSS for material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles';

// import the main route components
import Home from './components/Home/Home';
import ShoppingHome from './components/Shopping/ShoppingHome';
import Settings from "./components/Settings/Settings";
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import SavedRecipes from './components/SavedRecipes/SavedRecipes';

class App extends Component {
  
  constructor(props) {
    super(props);
    // set empty arrays for initial state of the shopping lists and saved recipes
    this.state = {
      listGroup: [],
      savedRecipes: [],
    };
  }

  // function automatically runs after component mounts
  componentDidMount() {
    // load any previously saved state from local storage into current state
    this.hydrateStateWithLocalStorage();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  // function automatcially runs when leaving page
  componentWillUnmount() {
    // remove the event listener
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  // function to save current state to local storage
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  // function to save state from local stoage into current state
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  // function to reset the app state to empty arrays
  resetApp = () => {
    this.setState({listGroup: [],
                  savedRecipes: [],});
  }

  // function to make new list in component state.  takes in ListName and ItemList array as arguments
  // has default values for when add new list button is clicked
  addList = (ListName="New Shopping List", ItemList=[]) => {
    var listGroup = this.state.listGroup;
    listGroup.push({ListName, ItemList});
    this.setState({listGroup: listGroup});      
  }

  // function to remove list from state.  takes in ListKey as argument. 
  removeList = (ListKey) => {
    var listGroup = this.state.listGroup;
    // remove the entry based on ListKey
    listGroup.splice(ListKey, 1);
    this.setState({listGroup: listGroup});
  }

  // function to set ListName for a paticular List in state listGroup
  setListName = (ListKey, name) => {
    var listGroup = this.state.listGroup;
    // set the  ListName value for the list matching ListKey
    listGroup[ListKey].ListName = name;
    this.setState({listGroup: listGroup});
  }

  // function to remove item from specified list in state.  takes in ListKey and ItemKey as arguments
  removeItem = (ListKey, ItemKey) => {
    var listGroup = this.state.listGroup;
    var List = this.state.listGroup[ListKey].ItemList;
    // remove item based on ItemKey
    List.splice(ItemKey, 1);
    listGroup[ListKey].ItemList = List; 
    this.setState({listGroup: listGroup});
  }

  // function to add item to specified list in state.  takes in ListKey, ListItem as arguments
  // ListItem has these props:  item.name, item.quantity, item.type, item.done
  // default values for list Item quantity and type of blank
  addItem = (ListKey, ListItem={quantity: "", type: ""}) => {
    var listGroup = this.state.listGroup;
    var List = this.state.listGroup[ListKey].ItemList;
    // add new item to the end of the list
    List.unshift({
      name: ListItem.name,
      quantity: ListItem.quantity,
      type: ListItem.type,
      done: false
    });
    listGroup[ListKey].ItemList = List;
    this.setState({listGroup: listGroup});
  }

  // function to mark an item as done.  takes in ListKey, ItemKey as arguments
  markItemDone = (ListKey, ItemKey) => {
    var listGroup = this.state.listGroup;
    var List = this.state.listGroup[ListKey].ItemList;
    var item = List[ItemKey];
    // toggle the done state and save it back
    item.done = !item.done;
    List[ItemKey] = item;
    listGroup[ListKey].ItemList = List;
    this.setState({listGroup: listGroup});
  }

  // function to generate two shopping lists as sample data for testing
  setSampleData = () => {
    // sample list 1
    var ListName1 = "Trader Joes";
    var ItemList1 = [];
    ItemList1.push({name: "milk", quantity: 1, type: "gal", done: false});
    ItemList1.push({name: "cheese", quantity: 2, type: "cup", done: true});
    ItemList1.push({name: "wheat bread", quantity: 1, type: "", done: true});
    // sample list 2
    var ListName2 = "Shaws";
    var ItemList2 = [];
    ItemList2.push({name: "soda", quantity: 2, type: "L", done: false});
    ItemList2.push({name: "sour worms", quantity: 1, type: "", done: false});
    ItemList2.push({name: "ground beef", quantity: 1, type: "lb", done: true});
    // use the addList function to add both lists to state
    this.addList(ListName1,ItemList1);
    this.addList(ListName2,ItemList2);    
    }

    // function to add recipe to SavedRecipes state
    // takes in recipe as argument
    addRecipe = (recipe) => {
      var savedRecipes = this.state.savedRecipes;
      savedRecipes.push({recipe});
      this.setState({savedRecipes: savedRecipes}); 
    }

    // function to remove recipe from SavedRecipes state
    // takes in recipeKey as argument
    removeRecipe = (recipeKey) => {
      var savedRecipes = this.state.savedRecipes;
      // remove recipe from array based on recipeKey
      savedRecipes.splice(recipeKey, 1);
      this.setState({savedRecipes: savedRecipes});
    }

  render() {

    return (
      // set base theme
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      
      <div className="App">
      {/* import base CSS */}
      <CssBaseline />
      
      {/*    set up main app routes
      use Switch component to check path from top to bottom of list
      if no path is found for url provided, show home page
      set up each route path and pass functions and state as props as needed
      this is how react router will determine which component is shown in this Div */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Shopping' 
          render={(props) => <ShoppingHome {...props} 
          listGroup={this.state.listGroup}
          listDel={this.removeList} 
          listAdd={this.addList}
          setListName={this.setListName}
          itemAdd={this.addItem} 
          itemDel={this.removeItem} 
          itemDone={this.markItemDone}
        />}
        />
        <Route path='/RecipeSearch' 
          render={(props) => <RecipeSearch {...props} 
          addRecipe={this.addRecipe}
          removeRecipe={this.removeRecipe}
          savedRecipes={this.state.savedRecipes}
        />}
        />
        <Route path='/SavedRecipes' 
          render={(props) => <SavedRecipes {...props} 
          removeRecipe={this.removeRecipe}
          savedRecipes={this.state.savedRecipes}
        />}
        />
        <Route path='/Settings' 
          render={(props) => <Settings {...props} 
          resetApp={this.resetApp}
          setSampleData={this.setSampleData}
        />}
        />
        {/* if no match, just show home */}
        <Route component={Home}/>
        
      </Switch>
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;