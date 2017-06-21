import _ from 'lodash';
import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {FormGroup,Form, ControlLabel,FormControl, Button,ButtonToolbar, Panel, Col} from 'react-bootstrap';
import { Slider } from 'redux-form-material-ui';
import HeroChart from '../containers/HeroChart';

const FIELDS = {
  name: {
    label: "Name",
    type: "input"
  }
}

let renderForm = (field) => {
  return (
    <FormGroup  validationState={field.meta.error && field.meta.touched ? 'error' : null}  >
      <Col md={field.colSize ? field.colSize : 4}>
        <ControlLabel>{field.mandatory && <span>*</span>} {field.label}</ControlLabel>
        <FormControl {...field.input}   />
        {field.meta.error && field.meta.touched && <ControlLabel>{field.meta.error}</ControlLabel>}
      </Col>
    </FormGroup>
  )

}
const HeroForm = ({handleSubmit, valid, handleBack, action, handleLocation}) => {
  return (
    <div>
        <Form horizontal  onSubmit={handleSubmit}>
            <Panel header="Personal Information" bsStyle="primary">
              <Field component={renderForm} mandatory={true} type="text" name="name" label="Name" placeholder="Name"/>
              <Field component={renderForm}  type="text" colSize={8} name="formatted_address" label="Address" placeholder="Type your address..."/>
              <Button onClick={handleLocation}>Find</Button>
            </Panel>
            <Panel header="Power" bsStyle="primary">
              <FormGroup>
                <Col md={6}>
                  <ControlLabel>Invisibility</ControlLabel>
                  <Field name="skills.invisibility" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
                </Col>
                <Col md={6}>
                  <ControlLabel>Freezing</ControlLabel>
                  <Field name="skills.freezing" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col md={6}>
                  <ControlLabel>Fire</ControlLabel>
                  <Field name="skills.fire" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
                </Col>
                <Col md={6}>
                  <ControlLabel>Speed</ControlLabel>
                  <Field name="skills.speed" component={Slider} defaultValue={0} format={(value, name) => value === '' ? 0 : value} min={0} max={50} step={1}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <HeroChart/>
              </FormGroup>
              <ButtonToolbar>
                <Button onClick={handleBack}>Cancel</Button>
                <Button type="submit" bsStyle="primary" >Save</Button>
              </ButtonToolbar>
            </Panel>
          </Form>
    </div>
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
