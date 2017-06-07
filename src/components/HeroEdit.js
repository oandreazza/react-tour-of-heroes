import React, {Component} from 'react';
import HeroForm from './HeroForm';

class HeroEdit extends Component {
    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.update = this.update.bind(this);
    }

    componentWillMount() {
        let param = this.props.match.params.id;
        this.props.getUser(param);
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
            <div>
                <HeroForm action="Edit" handleBack={this.back} {...initialValues} onSubmit={this.update}/>
            </div>
        )
    }
}

export default HeroEdit;
