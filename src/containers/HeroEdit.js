import {getUser,updateHeroAndNotify} from '../action/heroes';
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
      return dispatch(updateHeroAndNotify(hero))
    }
  }
}

const HeroEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroEdit)

export default HeroEditContainer;
