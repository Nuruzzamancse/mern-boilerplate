// ./react-redux-client/src/components/Todo.js
import React from 'react';

export default class Todo extends React.Component {
  componentDidMount(){
    this.props.mappedfetchBookById(this.props.params.id);
  }

  render(){
    const todoState = this.props.mappedBookState;
    console.log(this.props.mappedBookState);
    return(
      <div className="todoDetail">
       <h2>Todo Detail</h2>
         {!todoState.book && todoState.isFetching &&
           <div>
             <p>Loading todo....</p>
           </div>
         }
       {todoState.book && !todoState.isFetching &&
         <div>
           <h3>{todoState.book.bookText}</h3>
           <p>{todoState.book.bookDesc}</p>
         </div>
       }
      </div>
    );
  }
}
