import React, { Component } from 'react';
import './App.css';
import Column from "./Column"

class App extends Component {

  constructor(props)
  {
    super(props)
    let columns = 
    [
     {id:1,cards: ["col1: abc", "col1:tets", "col1: test3", "col1:test4"], title: "Card1"},
     {id:2, cards: ["col2: abc", "col2:tets"], title: "Card2"},
     {id:30, cards: ["col3: abc", "col3:tets"], title: "Card3"},
     {id:310, cards: ["col344: abc", "col4:tets"], title: "Card5"}
    ]

    this.state = {columns}
    
  }
handleShuffle = (id, text,action) => {
  var {columns} = this.state;
  var idx = columns.findIndex(t => t.id === id);
  columns[idx].cards = columns[idx].cards.filter(t=> t!== text);
  switch(action)
  {
    case "Increment":    
    columns[idx+1].cards.push(text);
   break;
    case 'Decrement':
    columns[idx-1].cards.push(text);
    break;
  }
  this.setState({columns});
}
handleAdd = (id, text) => {
  var {columns} = this.state;
  var idx = columns.findIndex(t => t.id === id);
  columns[idx].cards.push(text);
  this.setState({columns});
}



  render() {
    let {columns} = this.state;
    return (
      <div className = "columns">
      
      {columns.map ((column, index)=> 
      <Column cards = {column.cards} title = {column.title} key = {column.id} id = {column.id} handleShuffle = {this.handleShuffle} handleAdd = {this.handleAdd} showPrevious = {index>0} showNext = {index < columns.length-1}/>     
      )}
       
      </div>
    );
  }
}

export default App;
