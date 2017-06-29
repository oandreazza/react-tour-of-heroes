import React, {Component} from 'react';
import _ from 'lodash';
import { Field, reduxForm} from 'redux-form';
import {Form, ControlLabel,FormGroup, Button,ButtonToolbar, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import {Card, CardText, CardHeader} from 'material-ui/Card'
import { Slider } from 'redux-form-material-ui';

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
        <TextField
             hintText={field.placeholder}
             floatingLabelText={field.label}
             fullWidth={true}
             errorText={field.meta.error && field.meta.touched && field.meta.error}
             {...field.input}
           />
      </Col>
    </FormGroup>
  )
}

class HeroForm extends Component{

  componentWillReceiveProps = (nextPros) => {
    if(this.props.geo.address.formatted_address !== nextPros.geo.address.formatted_address)
      this.props.blur('formatted_address', nextPros.geo.address.formatted_address)
  }

  handleLocation = (location) => {
    const {target:{value}} = location;
    if(value !== '')
      this.props.loadAddress(value);

  }

  render() {
    return(
      <div>
          <Card
            style={{marginTop:30,marginBottom:20}}
          >
            <CardText>
              <CardHeader
                title="Personal Info"
                titleStyle={{fontSize:25}}
              />
              <Form horizontal  onSubmit={this.props.handleSubmit}>
                <Field component={renderForm} defaultValue="mauricio" mandatory={true} type="text" name="name" label="Name" placeholder="Type your name..."/>
                <Field component={renderForm} onBlur={ (value) => this.handleLocation(value)} type="text" colSize={8} name="formatted_address" label="Address" placeholder="Type your address..."/>
                <CardHeader
                  title="Power"
                  titleStyle={{fontSize:25}}
                />
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
                <ButtonToolbar>
                  <Button onClick={this.props.handleBack}>Cancel</Button>
                  <Button type="submit" bsStyle="primary" >Save</Button>
                </ButtonToolbar>
            </Form>
            </CardText>
            </Card>
      </div>
    )
  }
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

export default reduxForm({
  form: 'hero',
  enableReinitialize: true,
  fiedls: FIELDS,
  validate
})(HeroForm);
