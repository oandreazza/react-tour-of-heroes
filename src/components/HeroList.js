import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HeroCard from './HeroCard'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import List from './List'
import Modal from './common/Modal'
import CardLoad from './common/CardLoad'

const styles = {
  buttonAction: {
    position:'absolute',
    bottom:50,
    right:50
  }
}

class HeroList extends Component{

  state = {
    modal: false,
    heroId: null
  }

  componentWillMount = () => {
    this.props.getHeroes();
  }

  deleteHeroModal = (heroId) => {
    this.setState({modal: true, heroId})
  }

  confirmDelete = () => {
    this.props.deleteHero(this.state.heroId)
    this.dismissModal()
  }

  dismissModal = () => {
    this.setState({modal:false})
  }

  renderCard = (hero) => {
    return(
      <HeroCard key={hero.id} hero={hero} deleteHandle={this.deleteHeroModal} />
    )
  }

  render() {
    const {heroes, loading} = this.props;
    const {buttonAction} = styles;
    return(
      <div>
        <CardLoad show={loading} quantity={5}></CardLoad>
        <List
          dataSource={heroes}
          render={this.renderCard}
        />
        <Modal
          show={this.state.modal}
          handleConfirm={this.confirmDelete}
          title="Delete Hero"
          description="Are you sure?"
          dismiss={this.dismissModal}
        />
        <Link to="/heroes/add">
          <FloatingActionButton style={buttonAction} >
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}
export default HeroList
