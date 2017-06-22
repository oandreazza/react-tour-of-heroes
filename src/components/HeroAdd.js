import React, {Component} from 'react';
import HeroForm from './HeroForm';


class HeroAdd extends Component{

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

  getAddress = (el) => {
    const {target:{value}} = el;
    this.props.loadAddress(value)
  }

  render() {
    const {address} = this.props.geo
    let initialValues = {
        initialValues: address
    }
    return(
      <div>
        <HeroForm action="Add" {...initialValues} handleBack={this.back} handleLocation={this.getAddress} onSubmit={this.save} />
      </div>
    )
  }
}
export default HeroAdd;
