import { connect } from 'react-redux';
import HeroList from '../components/HeroList'
import {getHeroes,deleteHeroAndRefresh } from '../action/heroes';


const mapStateToProps = (state) =>(
  {
    data: state.appReducer.heroesReducer
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getHeroes: () => {
      dispatch(getHeroes())
    },
    deleteHero: (id) => {
      dispatch(deleteHeroAndRefresh(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList)
