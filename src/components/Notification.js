import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';

class Notification extends Component{

  state = {
    renderNotification: false
  }

  componentWillReceiveProps = (nextProps) => {
      this.setState({
        renderNotification: true
      })
  }

  renderNotification = () => {
    const {renderNotification} = this.state;
    const {notification} = this.props;
      return <Snackbar
          open={renderNotification}
          message={notification.message}
          autoHideDuration={5000}
        />
  }

  render() {
    return(
      <div>
        {this.renderNotification()}
      </div>
    )
  }
}
export default Notification;
