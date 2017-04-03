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
        this.props.updateHero(values)
          .then( () => {
            this.props.location.push('/heroes')
          });
    }

    back = () => {
      this.props.history.push('/heroes');
    }

    render() {
        const {data} = this.props
        let initialValues = {
            initialValues: data.hero
        }
        return (
            <div>
                <HeroForm action="Edit" handleBack={this.back} {...initialValues} onSubmit={this.update}/>
            </div>
        )
    }
}

export default HeroEdit;
