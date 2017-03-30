import { connect } from 'react-redux';
import HeroList from '../components/HeroList'
import {getHeroes} from '../action/heroes'


const mapStateToProps = (state) =>(
  {
    data: state.heroesReducer
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getHeroes: () => {
      dispatch(getHeroes())
    }
  }
}


const HeroesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList)

export default HeroesContainer;
