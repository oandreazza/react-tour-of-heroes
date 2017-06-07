import {connect} from 'react-redux';
import HeroChart from '../components/HeroChart';

const mapStateToProps = (state) => (
    {
      data: state.appReducer.heroReducer.hero.skills
    }
)


export default connect(
  mapStateToProps
)(HeroChart);
