// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as bookActions from '../actions/bookActions';
import Books from '../components/Books';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedBookState: state.bookState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchBooks: () => dispatch(bookActions.fetchBooks()),
    mappedEditBook: todoToEdit => dispatch(bookActions.editBook(todoToEdit)),
    mappedshowEditModal: todoToEdit => dispatch(bookActions.showEditModal(todoToEdit)),
    mappedhideEditModal: () => dispatch(bookActions.hideEditModal()),
    mappedDeleteBook: todoToDelete => dispatch(bookActions.deleteBook(todoToDelete)),
    mappedshowDeleteModal: todoToDelete => dispatch(bookActions.showDeleteModal(todoToDelete)),
    mappedhideDeleteModal: () => dispatch(bookActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);
