// ./react-redux-client/src/routes.js
import React from 'react';
// import { Route, IndexRoute } from 'react-router';
import { Switch, Route } from 'react-router-dom'

import App from './containers/App';
import Todos from './containers/Todos';
import Todo from './containers/Todo';
import Books from './containers/Books';
import Book from './containers/Book';

export default (
   <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/books' component={Books}/>
    <Route path='/todos' component={Todos}/>
    <Route path='/:id' component={Todo}/>
    <Route path='/books/:id' component={Book}/>
  </Switch>
)

  // <Route path="/" component={App}>
     {/* <IndexRoute component={Todos} />
     <Route path="/:id" component={Todo} /> */}
     {/* <Route path="/book" component={Books} />
     <Route path="/:id" component={Book} />
  </Route> */}
