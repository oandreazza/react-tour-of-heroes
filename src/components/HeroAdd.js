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

  getAddress = () => {
    this.props.loadAddress('Porto Alegre')
  }

  render() {

    return(
      <div>
        <HeroForm action="Add" handleBack={this.back} handleLocation={this.getAddress} onSubmit={this.save} />
      </div>
    )
  }
}
export default HeroAdd;
