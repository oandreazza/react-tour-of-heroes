import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap'
import HeroCard from './HeroCard'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  buttonAction: {
    position:'absolute',
    bottom:50,
    right:50
  }
}

class HeroList extends React.Component{

  componentWillMount = () => {
    this.props.getHeroes();
  }

  render() {
    const {heroes, deleteHero} = this.props;
    const {buttonAction} = styles;
    return(
      <div>
        <Link to="/heroes/add">
          <FloatingActionButton style={buttonAction} >
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Grid>
          <Row>
            {
              heroes.map( hero => {
                return(
                  <Col md={4} xs={12} sm={6} style={{marginTop:50}}>
                    <HeroCard key={hero.id} hero={hero} deleteHandle={deleteHero} />
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
