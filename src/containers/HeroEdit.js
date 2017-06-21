import {getHero,updateHeroAndNotify} from '../action/heroes';
import { connect } from 'react-redux';
import HeroEdit from '../components/HeroEdit'


const mapStateToProps = (state) => (
    {
      hero: state.appReducer.heroReducer.hero
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getHero: (id) => {
      dispatch(getHero(id))
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
