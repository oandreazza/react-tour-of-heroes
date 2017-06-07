import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

class Notification extends Component{

  state = {
    renderNotification: false
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("props", nextProps);
      this.setState({
        renderNotification: true
      })
      const _this = this;
      setTimeout(function(){
        _this.dismiss();
      },5000)
  }

  dismiss = () => {
    this.setState({
      renderNotification: false
    })
  }

  renderNotification = () => {
    const {renderNotification} = this.state;
    const {notification} = this.props;
    if(renderNotification)
      return  <Alert bsStyle={notification.type} onDismiss={this.dismiss}>{notification.message}</Alert>;
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
