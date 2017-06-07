import _ from 'lodash';
import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {FormGroup,ControlLabel,FormControl,HelpBlock, Button,ButtonToolbar, Panel} from 'react-bootstrap';
import { Slider } from 'redux-form-material-ui';
import HeroChart from '../containers/HeroChart';

const FIELDS = {
  name: {
    label: "Name",
    type: "input"
  }
}

const HeroForm = ({handleSubmit, valid, handleBack, action}) => {
  return (
    <div>
      <Panel header={`${action} Hero`} bsStyle="primary">
        <form onSubmit={handleSubmit}>
          <Field component={renderForm} mandatory={true} type="text" name="name" placeholder="Name"/>
          <FormGroup>
            <ControlLabel>Invisibility</ControlLabel>
            <Field name="skills.invisibility" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Freezing</ControlLabel>
            <Field name="skills.freezing" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Fire</ControlLabel>
            <Field name="skills.fire" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Speed</ControlLabel>
            <Field name="skills.speed" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
          </FormGroup>
          <FormGroup>
            <HeroChart/>
          </FormGroup>
          <ButtonToolbar>
            <Button onClick={handleBack}>Cancel</Button>
            <Button type="submit" bsStyle="primary" disabled={!valid}>Save</Button>
          </ButtonToolbar>
        </form>
      </Panel>
    </div>
  )
}

let renderForm = (field) => {
  return (
    <FormGroup  validationState={field.meta.error && field.meta.touched ? 'error' : null}  >
      <ControlLabel>{field.mandatory && <span>*</span>} {field.placeholder}</ControlLabel>
      <FormControl {...field.input} />
      {field.meta.error && field.meta.touched && <ControlLabel>{field.meta.error}</ControlLabel>}
    </FormGroup>
  )

}

const validate = (values) => {
  let errors = {};

  _.each(FIELDS, (type, field) => {
    let label = type.label;
    if(!values[field]){
      errors[field] = `Enter a ${label}`
    }
  });

  return errors;

}
HeroForm.propTypes = {
  handleBack: React.PropTypes.func.isRequired,
  action: React.PropTypes.string.isRequired
}
export default reduxForm({
  form: 'hero',
  enableReinitialize: true,
  fiedls: FIELDS,
  validate
})(HeroForm);
