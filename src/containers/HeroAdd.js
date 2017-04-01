import {connect} from 'react-redux';
import {saveHero} from '../action/heroes';
import HeroAdd from '../components/HeroAdd';

const mapStateToProps = (state) => (
    {
      data: state.appReducer.heroReducer
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    saveHero: (hero) => {
      return dispatch(saveHero(hero))
    }
  }
}


const HeroAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroAdd)

export default HeroAddContainer;
