// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const NameForm = (props) => {
  return (
    <form className="form form-horizontal" id="nametodoForm">
    <div className="row">
    <h3 className="centerAlign">Add Your Name</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>First Name: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Your First Name"
              name="todoText"
               />
    </FormGroup>
        </div>
        
        <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Last Name: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Your Last Name"
              name="todoText"
               />
    </FormGroup>
        </div>

          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Add Name</Button>
          </FormGroup>
    </form>
  );
}

export default NameForm;
