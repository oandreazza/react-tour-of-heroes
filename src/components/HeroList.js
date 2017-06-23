import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap'
import HeroCard from './HeroCard'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  buttonAction: {
    position:'absolute',
    bottom:50,
    right:50
  }
}

class HeroList extends React.Component{

  state = {
    dialog: false,
    heroId: null
  }

  componentWillMount = () => {
    this.props.getHeroes();
  }

  deleteHeroModal = (heroId) => {
    this.setState({dialog: true, heroId})
  }

  confirmDelete = () => {
    this.props.deleteHero(this.state.heroId)
    this.dismissModal()
  }

  dismissModal = () => {
    this.setState({dialog:false})
  }

  render() {
    const {heroes} = this.props;
    const {buttonAction} = styles;
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.dismissModal}
      />,
      <FlatButton
          label="OK"
          primary={true}
          onClick={this.confirmDelete}
      />
    ]

    return(
      <div>
        <Link to="/heroes/add">
          <FloatingActionButton style={buttonAction} >
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Dialog
          title="Delete Hero"
          actions={modalActions}
          modal={false}
          open={this.state.dialog}
          onRequestClose={this.dismissModal}
        >
          Are you sure?
        </Dialog>
        <Grid>
          <Row>
            {
              heroes.map( hero => {
                return(
                  <Col md={4} xs={12} sm={6} style={{marginTop:50}}>
                    <HeroCard key={hero.id} hero={hero} deleteHandle={this.deleteHeroModal} />
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
