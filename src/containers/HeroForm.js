import { connect } from 'react-redux'
import HeroForm from '../components/HeroForm'
import {getAddress} from '../action/geolocation'

const mapStateToProps = (state) => {
    return {
      geo: state.appReducer.geolocationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAddress: (address) => {
      dispatch(getAddress(address))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm)
