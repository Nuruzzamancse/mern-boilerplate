// ./react-redux-client/src/reducers/todoReducer.js
const INITIAL_STATE = {
    books:[],
    book:null,
    isFetching: false,
    error: null,
    successMsg:null,
    showDeleteModal: false,
    bookToDelete: null,
    showEditModal: false,
    bookToEdit: null,
    newBook: null
  }
  
  const bookReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_REQUEST':
            return {
              ...currentState,
              books:[],
              book:null,
              isFetching: true,
              error: null,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
            }
  
      case 'FETCH_BOOKS_SUCCESS':
            return {
              ...currentState,
              books:action.books,
              book:null,
              isFetching: false,
              error: null,
              successMsg:action.message,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
            }
  
      case 'FETCH_BOOKS_FAILED':
            return {
              ...currentState,
              books:[],
              book:null,
              isFetching: false,
              error: action.error,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
            }
  
      case 'FETCH_BOOK_REQUEST':
            return {
              ...currentState,
              books:currentState.books,
              book:null,
              isFetching: true,
              error: null,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
            }
  
      case 'FETCH_BOOK_SUCCESS':
            return {
              ...currentState,
              books:currentState.books,
              book:action.book,
              isFetching: false,
              error: null,
              successMsg:action.message,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
            }
  
      case 'FETCH_BOOK_FAILED':
            return {
              ...currentState,
              books:[],
              book:null,
              isFetching: false,
              error: action.error,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
            }
  
      case 'ADD_NEW_BOOK_REQUEST':
            return {
              ...currentState,
              books:currentState.books,
              book:null,
              isFetching: true,
              error: null,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
              newBook: action.book
            }
  
      case 'ADD_NEW_BOOK_REQUEST_FAILED':
            return {
              ...currentState,
              books:currentState.books,
              book:null,
              isFetching: true,
              error: action.error,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
              newBook: null
            }
  
      case 'ADD_NEW_BOOK_REQUEST_SUCCESS':
            const nextState =  {
              ...currentState,
              books:[...currentState.books, action.book],
              book:null,
              isFetching: false,
              error: null,
              successMsg:action.message,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: false,
              bookToEdit: null,
              newBook: action.book
            }
          return nextState;
  
    case 'SHOW_EDIT_MODAL':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            bookToDelete: null,
            showEditModal: true,
            bookToEdit: action.book,
            newBook: null
          }
  
    case 'HIDE_EDIT_MODAL':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            bookToDelete: null,
            showEditModal: false,
            bookToEdit: null,
            newBook: null
          }
  
      case 'EDIT_BOOK_REQUEST':
            return {
              ...currentState,
              books:currentState.books,
              book:null,
              isFetching: true,
              error: null,
              successMsg:null,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: true,
              bookToEdit: action.book,
              newTodo: null
            }
  
      case 'EDIT_BOOK_SUCCESS':
           const updatedTodos = currentState.books.map((book) => {
             if(book._id !== action.book._id){
               //This is not the item we care about, keep it as is
               return book;
             }
             //Otherwise, this is the one we want to return an updated value
             return { ...book, ...action.book }
           })
            return {
              ...currentState,
              books:updatedTodos,
              book:null,
              isFetching: false,
              error: null,
              successMsg:action.message,
              showDeleteModal: false,
              bookToDelete: null,
              showEditModal: true,
              bookToEdit: action.book,
              newTodo: null
            }
  
    case 'EDIT_BOOK_FAILED':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            bookToDelete: null,
            showEditModal: true,
            bookToEdit: currentState.bookToEdit,
            newTodo: null
          }
  
    case 'DELETE_BOOK_REQUEST':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: true,
            bookToDelete: action.book,
            showEditModal: false,
            bookToEdit: null,
            newTodo: null
          }
  
    case 'DELETE_BOOK_SUCCESS':
    const filteredTodos = currentState.books.filter((book) => book._id !== currentState.bookToDelete._id)
          return {
            ...currentState,
            books:filteredTodos,
            book:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: true,
            bookToDelete: null,
            showEditModal: false,
            bookToEdit: null,
            newTodo: null
          }
  
  
    case 'DELETE_BOOK_FAILED':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: true,
            bookToDelete: null,
            showEditModal: false,
            bookToEdit: null,
            newTodo: null
          }
  
    case 'SHOW_DELETE_MODAL':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: true,
            bookToDelete: action.book,
            showEditModal: false,
            bookToEdit: null,
            newTodo: null
          }
  
    case 'HIDE_DELETE_MODAL':
          return {
            ...currentState,
            books:currentState.books,
            book:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            bookToDelete: null,
            showEditModal: false,
            bookToEdit: null,
            newTodo: null
          }
  
  
      default:
         return currentState;
  
    }
  }
  export default bookReducer;
  