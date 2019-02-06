import React, {Component} from 'react';


class Card extends Component {
    state = {  }
    render() { 
        let {text, showPrevious, showNext, id, onClick} = this.props
        return ( 
            <div className = "card">
        {showPrevious && <button className = "button" onClick = {()=> onClick(id,text, "Decrement")}>Previous</button>}
        {text}
        {showNext &&  <button className = "button"  onClick = {()=> onClick(id, text,"Increment")}>Next</button>}
        </div>
         );
    }
}
 
export default Card;