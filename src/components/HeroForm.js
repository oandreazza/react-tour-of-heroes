import React from 'react';
import { Field, reduxForm} from 'redux-form';

const HeroForm = ({handleSubmit, valid}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field component={renderForm} type="text" name="name" placeholder="Name"/>
        <button type="submit" disabled={!valid}>Save</button>
      </form>
    </div>
  )
}

let renderForm = (field) => {
  console.log(field);
  return (
    <div>
      <label>{field.placeholder}</label>
      <input {...field.input} />
      {field.meta.error && field.meta.touched && <span>{field.meta.error}</span>}

    </div>

  )

}

const validate = (values) => {
  let errors = {};
  if(!values.name)
    errors.name = "Enter name";

  return errors;

}

export default reduxForm({
  form: 'hero',
  enableReinitialize: true,
  validate
})(HeroForm);;
