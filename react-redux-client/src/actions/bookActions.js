// ./react-redux-client/src/actions/todoActions.js

const apiUrl = "/api/book/";

export const toggleAddBook = () => {
  console.log('toggle book from bookactions');
  return {
    type: 'TOGGLE_ADD_BOOK'
  }
}

export const addNewBook = (book) => {
  console.log('Add new book');
  console.log(book);
  return (dispatch) => {
    dispatch(addNewBookRequest(book));
    return fetch(apiUrl, {
      method:'post',
      body: book,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          console.log(data.book);
          dispatch(addNewBookRequestSuccess(data.book, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewBookRequestFailed(error))
        })
      }
    })
  }
}

export const addNewBookRequest = (book) => {
  return {
    type: 'ADD_NEW_BOOK_REQUEST',
    book
  }
}

export const addNewBookRequestSuccess = (book,message) => {
  return {
    type: 'ADD_NEW_BOOK_REQUEST_SUCCESS',
    book:book,
    message:message
  }
}

export const addNewBookRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_BOOK_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  console.log('Foul fetch');
  return (dispatch) => {

    dispatch(fetchBooksRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchBooksSuccess(data.books,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchBooksFailed(error));
                    })
                  }
                })


  }
}

export const fetchBooksRequest = () => {
  return {
    type:'FETCH_BOOKS_REQUEST'
  }
}


//Sync action
export const fetchBooksSuccess = (books,message) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books: books,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchBooksFailed = (error) => {
  return {
    type:'FETCH_BOOKS_FAILED',
    error
  }
}

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    dispatch(fetchBookRequest());
      // Returns a promise
      return fetch(apiUrl + bookId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchBookSuccess(data.book[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchBookFailed(error));
                 })
               }
             })

  }
}

export const fetchBookRequest = () => {
  return {
    type:'FETCH_BOOK_REQUEST'
  }
}


//Sync action
export const fetchBookSuccess = (book,message) => {
  return {
    type: 'FETCH_BOOK_SUCCESS',
    book: book,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchBookFailed = (error) => {
  return {
    type:'FETCH_BOOK_FAILED',
    error
  }
}

export const showEditModal = (bookToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    book:bookToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editBook = (book) => {
    return (dispatch) => {
      dispatch(editBookRequest(book));
      return fetch(apiUrl, {
        method:'put',
        body:book
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editBookSuccess(data.book,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editBookFailed(error));
          })
        }
      })
    }
}

export const editBookRequest = (book) => {
   return {
     type:'EDIT_BOOK_REQUEST',
     book
   }
}

export const editBookSuccess = (book,message) => {
  return {
    type:'EDIT_BOOK_SUCCESS',
    book:book,
    message:message
  }
}

export const editBookFailed = (error) => {
  return {
    type:'EDIT_BOOK_FAILED',
    error
  }
}

export const deleteBook = (book) => {
  return (dispatch) => {
    dispatch(deleteBookRequest(book));
    return fetch(apiUrl + book._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteBookSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteBookFailed(error));
        })
      }
    })

  }
}

export const deleteBookRequest = (book) => {
   return {
     type:'DELETE_BOOK_REQUEST',
     book
   }
}

export const deleteBookSuccess = (message) => {
  return {
    type:'DELETE_BOOK_SUCCESS',
    message:message
  }
}

export const deleteBookFailed = (error) => {
  return {
    type:'DELETE_BOOK_FAILED',
    error
  }
}

export const showDeleteModal = (bookToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    book:bookToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
