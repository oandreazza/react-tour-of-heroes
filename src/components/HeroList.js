import React from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HeroList extends React.Component{
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.props.getHeroes();
  }

  render() {
    const {data} = this.props;
    return(
      <div>
        <h1>
          Hero List
        </h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <td>
                #
              </td>
              <td>
                Name
              </td>
              <td>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {
              data.heroes.map( (hero, i) => {
                return (

                    <tr key={i}>
                      <td>{hero.id}</td>
                      <td>{hero.name}</td>
                      <td>
                          <Link to={`/hero/${hero.id}`} >
                            <button>
                              Edit
                            </button>
                          </Link>
                      </td>
                    </tr>

                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
export default HeroList
