// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const BookForm = (props) => {
  return (
    <form className="form form-horizontal" id="addBookForm" onSubmit={props.addBook}>
    <div className="row">
    <h3 className="centerAlign">Add Your Book</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Book: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter book"
              name="bookText"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="bookDesc"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default BookForm;
