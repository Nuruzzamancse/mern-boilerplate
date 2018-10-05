// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as todoActions from '../actions/todoActions';
import * as bookActions from '../actions/bookActions';


// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo()),
    mappedToggleAddBook: () => dispatch(appActions.toggleAddBook()),
    mappedAddTodo: todo => dispatch(todoActions.addNewTodo(todo)),
    mappedAddBook: book => dispatch(bookActions.addNewBook(book))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
