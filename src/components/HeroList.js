import React from 'react';
import { Link } from 'react-router-dom';
import HeroTable from './HeroTable';


class HeroList extends React.Component{
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount(){
    this.props.getHeroes();
  }

  render() {
    const {data,notification, deleteHero} = this.props;
    return(
      <div>
        <Link to="/heroes/add">
          <button>
              add
          </button>
        </Link>
        <h1>
          Hero List
        </h1>
        <HeroTable heroes={data.heroes} deleteFunction={deleteHero}/>
      </div>
    )
  }
}
export default HeroList
