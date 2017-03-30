import {connect} from 'react-redux';
import {getUser} from '../action/heroes';
import HeroEdit from '../components/HeroEdit'


const mapStateToProps = (state) => (
    {
      data: state.heroReducer
    }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => {
      dispatch(getUser(id))
    }
  }
}

const HeroEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroEdit)

export default HeroEditContainer;
