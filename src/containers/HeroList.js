import { connect } from 'react-redux';
import HeroList from '../components/HeroList'
import {getHeroes} from '../action/heroes';


const mapStateToProps = (state) =>(
  {
    data: state.appReducer.heroesReducer
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getHeroes: () => {
      dispatch(getHeroes())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList)
