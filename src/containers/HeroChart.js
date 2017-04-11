import {connect} from 'react-redux';
import HeroChart from '../components/HeroChart';

const mapStateToProps = (state) => (
    {
      data: state.appReducer.heroChartReducer
    }
)


export default connect(
  mapStateToProps
)(HeroChart);
