import React from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroTable = ({heroes, deleteFunction}) => (
  <div>
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
          heroes.map( (hero, i) => {
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

                        <button onClick={() => deleteFunction(hero.id)}>
                          Delete
                        </button>
                  </td>
                </tr>
            )
          })
        }
      </tbody>
    </Table>
  </div>
)

export default HeroTable;
