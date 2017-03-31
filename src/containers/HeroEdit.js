import {getUser,updateHero} from '../action/heroes';
import { connect } from 'react-redux';
import HeroEdit from '../components/HeroEdit'


const mapStateToProps = (state) => (
    {
      data: state.appReducer.heroReducer
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => {
      dispatch(getUser(id))
    },
    updateHero: (hero) => {
      dispatch(updateHero(hero))
    }
  }
}

const HeroEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroEdit)

export default HeroEditContainer;
