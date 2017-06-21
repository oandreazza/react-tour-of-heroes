import {connect} from 'react-redux';
import {saveHeroAndNotify} from '../action/heroes';
import {getAddress} from '../action/geolocation'
import HeroAdd from '../components/HeroAdd';

const mapStateToProps = (state) => (
    {
      data: state.appReducer.heroReducer,
      geo: state.appReducer.geolocationReducer
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    saveHero: (hero) => {
       dispatch(saveHeroAndNotify(hero))
    },
    newHero: () => {
      dispatch({ type: "NEW_HERO", payload:null})
    },
    loadAddress: (address) => {
      dispatch(getAddress(address))
    }
  }
}


const HeroAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroAdd)

export default HeroAddContainer;
