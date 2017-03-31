import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';

class HeroEdit extends Component{
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    let param = this.props.match.params.id;
    this.props.getUser(param);
  }

  submit = (values) => {
    this.props.updateHero(values);
  }

  render() {

    const { pristine, submitting, handleSubmit } = this.props
    return(
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          Name:
          <Field component="input" type="text" name="name"/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
HeroEdit = reduxForm({
  form: 'contact',
  enableReinitialize: true

})(HeroEdit);

HeroEdit = connect(
  state => (
    {
    initialValues: state.appReducer.heroReducer.hero // pull initial values from account reducer
  })
)(HeroEdit)

export default HeroEdit;
