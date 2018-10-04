// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as bookActions from '../actions/bookActions';
import Book from '../components/Book';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedBookState: state.bookState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Book);
