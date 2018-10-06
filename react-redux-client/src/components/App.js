// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import TodoForm from './TodoForm';
import BooForm from './BookForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
    this.toggleAddBook = this.toggleAddBook.bind(this);

    this.addTodo = this.addTodo.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddTodo();
  }

  toggleAddBook(e){
    e.preventDefault();
     this.props.mappedToggleAddBook();
  }

  addTodo(e){
      e.preventDefault();
      const form = document.getElementById('addTodoForm');
      if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
        const data = new FormData();
       data.append('todoText', form.todoText.value);
        data.append('todoDesc', form.todoDesc.value);
        // const data = {
        //   todoText: form.todoText.value,
        //   todoDesc: form.todoDesc.value
        // }
        this.props.mappedAddTodo(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  addBook(e){
    e.preventDefault();
    const form = document.getElementById('addBookForm');
    console.log(form);
    
    if(form.bookText.value !== ""  && form.bookDesc.value !== ""){
      const data = new FormData();
     data.append('bookText', form.bookText.value);
      data.append('bookDesc', form.bookDesc.value);
      // const data = {
      //   todoText: form.todoText.value,
      //   todoDesc: form.todoDesc.value
      // }
      this.props.mappedAddBook(data);
    form.reset();
    }
    else{
      return ;
    }
}

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Mern Stack Todo App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddTodo}>
         <NavItem eventKey={1}>Add Todo</NavItem>
      </LinkContainer>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddBook}>
         <NavItem eventKey={1}>Add Book</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddTodo &&
    <TodoForm addTodo={this.addTodo} />
  }
  {appState.showAddBook &&
    <BooForm addBook={this.addBook} />
  }
  { /* Each Smaller Components */}
   {/* {this.props.children} */}
  </div>
 </div>
    );
  }
}
