import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router-dom'
injectTapEventPlugin();

class Header extends Component{
  state = {
    open: false
  }
  render() {
    return(
      <div>
      <AppBar
        title="Tour of Heroes"
        showMenuIconButton={true}
        onLeftIconButtonTouchTap={ () => this.setState({open:true})}
      />
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <Link to="/">
            <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/heroes">
            <MenuItem>Heroes</MenuItem>
        </Link>
      </Drawer>

    </div>
    )
  }
}
export default Header;
