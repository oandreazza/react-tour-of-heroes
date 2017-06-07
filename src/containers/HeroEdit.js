import {getUser,updateHeroAndNotify} from '../action/heroes';
import { connect } from 'react-redux';
import HeroEdit from '../components/HeroEdit'


const mapStateToProps = (state) => (
    {
      hero: state.appReducer.heroReducer.hero
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => {
      dispatch(getUser(id))
    },
    updateHero: (hero,id) => {
       dispatch(updateHeroAndNotify(hero,id))
    }
  }
}

const HeroEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroEdit)

export default HeroEditContainer;
