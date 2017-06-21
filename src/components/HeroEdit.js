import React, {Component} from 'react';
import HeroForm from './HeroForm';

class HeroEdit extends Component {

    componentWillMount() {
      let param = this.props.match.params.id;
      this.props.getHero(param);
    }

    update = (values) => {
      const {id} = this.props.match.params;
      this.props.updateHero(values,id);
      this.props.history.push('/heroes');
    }

    back = () => {
      this.props.history.push('/heroes');
    }

    render() {
        const {hero} = this.props
        let initialValues = {
            initialValues: hero
        }

        return (
          <HeroForm action="Edit" handleBack={this.back} {...initialValues} onSubmit={this.update}/>
        )
    }
}

export default HeroEdit;
