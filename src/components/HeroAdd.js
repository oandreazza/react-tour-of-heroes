import React, {Component} from 'react';
import HeroForm from '../containers/HeroForm';

const DEFAULT_HERO = {
  name: "",
  formatted_address: null,
  skills:{
    fire: 0,
    freezing: 0,
    invisibility: 0,
    speed: 0
  }
}
class HeroAdd extends Component{

  save = (values) => {
    this.props.saveHero(values);
    this.props.history.push('/heroes');
  }

  back = () => {
    this.props.history.push('/heroes');
  }


  render() {
    let initialValues = {
        initialValues: DEFAULT_HERO
    }
    return(
      <div>
        <HeroForm action="Add" {...initialValues} handleBack={this.back} onSubmit={this.save} />
      </div>
    )
  }
}
export default HeroAdd;
