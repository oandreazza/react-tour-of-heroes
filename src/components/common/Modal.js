import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class Modal extends Component{


  render() {
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.dismiss}
      />,
      <FlatButton
          label="OK"
          primary={true}
          onClick={this.props.handleConfirm}
      />
    ]
    return(
      <Dialog
        title={this.props.title}
        actions={modalActions}
        modal={false}
        open={this.props.show}
      >
        {this.props.description}
      </Dialog>
    )
  }
}
export default Modal;
