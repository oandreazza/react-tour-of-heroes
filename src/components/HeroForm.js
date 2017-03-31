import React from 'react';
import { Field, reduxForm} from 'redux-form';

const HeroForm = ({handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
        <Field component="input" type="text" name="name"/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

HeroForm = reduxForm({
  form: 'hero',
  enableReinitialize: true,
})(HeroForm);

export default HeroForm;
