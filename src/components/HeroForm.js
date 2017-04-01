import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {FormGroup,ControlLabel,FormControl,HelpBlock, Button, Panel} from 'react-bootstrap';

const HeroForm = ({handleSubmit, valid, handleBack, action}) => {
  return (
    <div>
      <Panel header={`${action} Hero`} bsStyle="primary">
        <form onSubmit={handleSubmit}>
          <Field component={renderForm} type="text" name="name" placeholder="Name"/>
          <Button onClick={handleBack}>Cancel</Button>
          <Button type="submit" bsStyle="primary" disabled={!valid}>Save</Button>
        </form>
      </Panel>
    </div>
  )
}

let renderForm = (field) => {
  return (
    <FormGroup  validationState={field.meta.error && field.meta.touched ? 'error' : null}  >
      <ControlLabel>{field.placeholder}</ControlLabel>
      <FormControl {...field.input} />
      {field.meta.error && field.meta.touched && <ControlLabel>{field.meta.error}</ControlLabel>}
    </FormGroup>
  )

}

const validate = (values) => {
  let errors = {};
  if(!values.name)
    errors.name = "Enter name";

  return errors;

}
HeroForm.propTypes = {
  handleBack: React.PropTypes.func.isRequired,
  action: React.PropTypes.string.isRequired
}
export default reduxForm({
  form: 'hero',
  enableReinitialize: true,
  validate
})(HeroForm);
