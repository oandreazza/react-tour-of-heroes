import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => (
    {
      loading: state.appReducer.loadingReducer.loading
    }
)

export default connect(mapStateToProps, {})(Header)
