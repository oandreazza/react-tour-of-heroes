import {connect} from 'react-redux';
import {saveHeroAndNotify} from '../action/heroes';
import HeroAdd from '../components/HeroAdd';

const mapStateToProps = (state) => (
    {
      data: state.appReducer.heroReducer
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    saveHero: (hero) => {
       dispatch(saveHeroAndNotify(hero))
    },
    newHero: () => {
      dispatch({ type: "NEW_HERO", payload:null})
    }
  }
}


const HeroAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroAdd)

export default HeroAddContainer;
