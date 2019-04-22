import React, { Component } from 'react';
import ListView from './ListView';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import './ShoppingList.css';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      listGroup: [],
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  // function to make new list in component state.  takes in ListName and ItemList array as arguments
  addList = (ListName="Shopping List", ItemList=[]) => {
    var listGroup = this.state.listGroup;
    listGroup.push({ListName, ItemList});
    this.setState({listGroup: listGroup});      
    
  }

  // function to remove list.  takes in listkey as argument. 
  // not tested or implemented

  removeList = (ListKey) => {
    var listGroup = this.state.listGroup;
    listGroup.splice(ListKey, 1);
    this.setState({listGroup: listGroup});
  }

  // function to remove item from specified list in state.  takes in ListKey and ItemKey as arguments
  // not tested yet or implemented
  removeItem = (ListKey, ItemKey) => {

    var listGroup = this.state.listGroup;
    var List = this.state.listGroup[ListKey].ItemList;
    List.splice(ItemKey, 1);
    listGroup[ListKey].ItemList = List; 
    this.setState({listGroup: listGroup});
  }


    
  


  fetchData = () => {
    this.setState({...this.state, isFetching: true})


    { // this is where fetch command would run 
    }
    {/* https://code.tutsplus.com/tutorials/fetching-data-in-your-react-application--cms-30670 
      fetch(QUOTE_SERVICE_URL)
    .then(response => response.json())
    .then(result => this.setState({quotes: result, 
                                   isFetching: false}))
    .catch(e => console.log(e)); */}

    var ListName1 = "Stop & Shop";
    var ItemList1 = [];
    ItemList1.push({index: 1, name: "milk", category: "dairy", quantity: 1, type: "gal", done: false});
    ItemList1.push({index: 2, name: "cheese", category: "dairy", quantity: 2, type: "cup", done: true});
    ItemList1.push({index: 3, name: "wheat bread", category: "general", quantity: 1, type: "whole", done: true});
    
  
    var ListName2 = "Shaws";
    var ItemList2 = [];
    ItemList2.push({index: 1, name: "soda", category: "general", quantity: 2, type: "L", done: false});
    ItemList2.push({index: 2, name: "sour worms", category: "general", quantity: 1, type: "unit", done: false});
    ItemList2.push({index: 3, name: "ground beef", category: "meat", quantity: 1, type: "lb", done: true});

    this.addList(ListName1,ItemList1);
    this.addList(ListName2,ItemList2);    
    this.setState({isFetching: false});

    }





    
    render() {

    var ListGroupView = this.state.listGroup.map((list, index) => {
      return ( <ListView key={index} ListName={list.ListName} ItemList={list.ItemList} />
        );
    });

    
      return (
        
        
        <div>
        <TopMenuBar title="Foodi - Shopping Lists" addButton={this.addList} />
        <div className="MainWindow">
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16}>

        {ListGroupView}
        
        </Grid>
        </div>
        </div>
        
        
        
        
      );

      
    }





  }
  
  export default ShoppingList;