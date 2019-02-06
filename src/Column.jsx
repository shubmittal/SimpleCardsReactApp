import React, { Component } from 'react';
import Card from './Card'

class Column extends Component {
    state = {  }
    handleClick = () => {
        let task = prompt("Enter a new card title");
        if(task && task.trim().length >0)
        {
            this.props.handleAdd(this.props.id, task);

        }
    }
    render() { 
        let {cards, handleShuffle, id,title, showPrevious, showNext} = this.props;
        return ( 
            <div className="column">
        <h1>{title}</h1>
        <button className = "button" onClick = {this.handleClick}>New</button>
        {cards.map((card, index) =><Card text = {card} key = {index} id = {id} showPrevious= {showPrevious} showNext= {showNext} onClick = {handleShuffle}/>)}
        
        </div>
         );
    }
}
 
export default Column;