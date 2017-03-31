import React, {Component} from 'react';
import HeroForm from './HeroForm';
import {BrowserHistory} from 'react-router-dom';

class HeroAdd extends Component{
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  save = (values) => {
    this.props.saveHero(values);
    this.props.history.push('/heroes');
  }

  render() {
    return(
      <div>
      <HeroForm onSubmit={this.save} />
    </div>
    )
  }
}
export default HeroAdd;
