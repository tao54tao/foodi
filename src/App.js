import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import ShoppingHome from './components/Shopping/ShoppingHome';
import Settings from "./components/Settings/Settings";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      listGroup: [],
    };
  }

  componentDidMount() {

    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

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

  resetApp = () => {
    
    this.setState({listGroup: []});
    
  }


  // function to make new list in component state.  takes in ListName and ItemList array as arguments
  addList = (ListName="New Shopping List", ItemList=[]) => {
    var listGroup = this.state.listGroup;
    listGroup.push({ListName, ItemList});
    this.setState({listGroup: listGroup});      
    
  }

  // function to remove list.  takes in ListKey as argument. 

  removeList = (ListKey) => {
    var listGroup = this.state.listGroup;
    listGroup.splice(ListKey, 1);
    this.setState({listGroup: listGroup});
  }

  // function to remove item from specified list in state.  takes in ListKey and ItemKey as arguments
  removeItem = (ListKey, ItemKey) => {

    var listGroup = this.state.listGroup;
    var List = this.state.listGroup[ListKey].ItemList;
    List.splice(ItemKey, 1);
    listGroup[ListKey].ItemList = List; 
    this.setState({listGroup: listGroup});
  }

  // function to add item from specified list in state.  takes in ListKey, ListItem as arguments
  // ListItem has these props:  item.name, item.quantity, item.type, item.done

  addItem = (ListKey, ListItem={quantity: "", type: ""}) => {
    var listGroup = this.state.listGroup;
    var List = this.state.listGroup[ListKey].ItemList;
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
    item.done = !item.done;
    List[ItemKey] = item;
    listGroup[ListKey].ItemList = List;
    this.setState({listGroup: listGroup});
  }



  setSampleData = () => {
    
    var ListName1 = "Trader Joes";
    var ItemList1 = [];
    ItemList1.push({name: "milk", quantity: 1, type: "gal", done: false});
    ItemList1.push({name: "cheese", quantity: 2, type: "cup", done: true});
    ItemList1.push({name: "wheat bread", quantity: 1, type: "", done: true});
    
  
    var ListName2 = "Shaws";
    var ItemList2 = [];
    ItemList2.push({name: "soda", quantity: 2, type: "L", done: false});
    ItemList2.push({name: "sour worms", quantity: 1, type: "", done: false});
    ItemList2.push({name: "ground beef", quantity: 1, type: "lb", done: true});

    this.addList(ListName1,ItemList1);
    this.addList(ListName2,ItemList2);    
    this.setState({isFetching: false});

    }


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
      <CssBaseline />
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Shopping' 
        render={(props) => <ShoppingHome {...props} 
        listGroup={this.state.listGroup}
        listDel={this.removeList} 
        listAdd={this.addList}
        itemAdd={this.addItem} 
        itemDel={this.removeItem} 
        itemDone={this.markItemDone}
        />}
        />
        <Route path='/Settings' 
        render={(props) => <Settings {...props} 
        resetApp={this.resetApp}
        setSampleData={this.setSampleData}
        />}
        />
        <Route component={() => (<div>404 Not found </div>)}/>
        </Switch>
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;