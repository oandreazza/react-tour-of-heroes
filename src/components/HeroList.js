import React from 'react';
import { Link } from 'react-router-dom';
import HeroTable from './HeroTable';


class HeroList extends React.Component{
  componentWillMount = () => {
    this.props.getHeroes();
  }

  render() {
    const {heroes, deleteHero} = this.props;
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
        <HeroTable heroes={heroes} deleteFunction={deleteHero}/>
      </div>
    )
  }
}
export default HeroList
