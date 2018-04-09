import { connect } from 'react-redux';
import HeroList from '../components/HeroList'
import {getHeroes,deleteHeroAndRefresh } from '../action/heroes';
import _ from 'lodash'


const mapStateToProps = (state) =>{
  const {heroes} = state.appReducer.heroesReducer
  const heroesMap = _.map(heroes, (data,id) => {
    return {id, ...data}
  })
  return{
      heroes: heroesMap,
      loading: state.appReducer.loadingReducer.loading
  }

}

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
