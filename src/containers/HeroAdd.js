import {connect} from 'react-redux';
import {saveHeroAndNotify} from '../action/heroes';
import HeroAdd from '../components/HeroAdd';


const mapDispatchToProps = (dispatch) => {
  return {
    saveHero: (hero) => {
       dispatch(saveHeroAndNotify(hero))
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(HeroAdd);
