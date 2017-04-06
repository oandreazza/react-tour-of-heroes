import {connect} from 'react-redux';
import Notification from '../components/Notification'

const mapStateToPros = (state) => {
  return {
    notification: state.appReducer.notificationReducer
  }

}
export default connect(
  mapStateToPros
)(Notification);
