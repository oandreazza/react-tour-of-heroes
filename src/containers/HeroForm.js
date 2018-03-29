import { connect } from 'react-redux'
import HeroForm from '../components/HeroForm'
import {getAddress} from '../action/geolocation'
import {getCategories} from '../action/categories'
import _ from 'lodash'

const mapStateToProps = (state) => {
    const {categories} = state.appReducer.categoriesReducer;
    const categorieList = _.map(categories, (data, id) => {
      return {id, ...data}
    })
    return {
      geo: state.appReducer.geolocationReducer,
      categories:categorieList
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAddress: (address) => {
      dispatch(getAddress(address))
    },
    getCategories: () => {
      dispatch(getCategories())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm)
