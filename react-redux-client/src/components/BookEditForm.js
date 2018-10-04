// ./react-redux-client/src/components/TodoEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const BookEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.editTodo}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Book: </ControlLabel>
          <input type="hidden" value={props.bookData._id} name="id"/>
            <FormControl
              type="text" placeholder="Enter todo"
              name="bookText" defaultValue={props.bookData.bookText}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="bookDesc" defaultValue={props.bookData.bookDesc}
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

export default BookEditForm;
