import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';

class Header extends Component{
  render() {
    const {loading} = this.props
    return(
      <AppBar
        title="Tour of Heroes"
        iconElementRight={loading ? <CircularProgress size={35} thickness={4} color="#FFF" /> : <span/>}
      />
    )
  }
}
export default Header;
