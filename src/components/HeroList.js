import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap'
import HeroCard from './HeroCard'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class HeroList extends React.Component{
  componentWillMount = () => {
    this.props.getHeroes();
  }

  render() {
    const {heroes, deleteHero} = this.props;
    return(
      <div>
        <Link to="/heroes/add">
          <FloatingActionButton mini={true} >
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <h1>
          Hero List
        </h1>
        <Grid>
          <Row>
            {
              heroes.map( hero => {
                return(
                  <Col md={4} style={{marginTop:50}}>
                    <HeroCard hero={hero} deleteHandle={deleteHero} />
                  </Col>
                )
              })
            }
          </Row>
        </Grid>
      </div>
    )
  }
}
export default HeroList
