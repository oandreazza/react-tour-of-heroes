import React, {Component} from 'react';
import HeroForm from './HeroForm';
import {BrowserHistory} from 'react-router-dom';


class HeroAdd extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.newHero()
  }

  save = (values) => {
    this.props.saveHero(values);
    this.props.history.push('/heroes');
  }

  back = () => {
    this.props.history.push('/heroes');
  }

  render() {
    return(
      <div>
        <HeroForm action="Add" handleBack={this.back} onSubmit={this.save} />
      </div>
    )
  }
}
export default HeroAdd;
