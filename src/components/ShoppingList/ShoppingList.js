import React, { Component } from 'react';
import ListView from './ListView';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      listgroup: [],
    };
  }

  componentDidMount() {
    this.fetchData()
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
    
        
    class ListData {
      constructor(ListName, ListItems) {
        this.ListName = ListName;
        this.ItemList = [];
        ListItems.forEach(item => {
          this.ItemList.push({index: item.index, name: item.name, category: item.category, quantity: item.quantity, type: item.type, done: item.done});
  
        });
      }
    };

    var ListGroup = [];
    ListGroup.push(new ListData(ListName1, ItemList1));
    ListGroup.push(new ListData(ListName2, ItemList2));
    ListGroup.push(new ListData(ListName1, ItemList1));
    ListGroup.push(new ListData(ListName2, ItemList2));

    this.setState({listgroup: ListGroup,
                    isFetching: false});

    }

    
    render() {

    var ListGroupView = this.state.listgroup.map((list, index) => {
      return ( <ListView key={index} ListName={list.ListName} ItemList={list.ItemList} />
        );
    });

    
      return (
        
        
        <div>
        
        <Grid container direction='row' justify='space-evenly' alignItems='flex-start' spacing={16}>

        {ListGroupView}
        
        </Grid>
        
        </div>
        
        
        
      );

      
    }





  }
  
  export default ShoppingList;