import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import firebase from 'firebase'

class App extends Component {

  componentWillMount = () => {

    const config = {
      apiKey: "AIzaSyDVxkGi3VdfuxHxXbNMjqW3M9fPrASmSZY",
      authDomain: "tour-of-heroes-reactjs.firebaseapp.com",
      databaseURL: "https://tour-of-heroes-reactjs.firebaseio.com",
      projectId: "tour-of-heroes-reactjs",
      storageBucket: "tour-of-heroes-reactjs.appspot.com",
      messagingSenderId: "1039432694027"
    }
    firebase.initializeApp(config);

  }
  render(){
    return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Tour of Heroes</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem>
                    <Link to="/">
                      Home
                    </Link>
                </NavItem>

                <NavItem>
                    <Link to="/heroes">
                      Heroes
                    </Link>
                </NavItem>
            </Nav>
          </Navbar>
          <div className="container">
              {this.props.children}
          </div>
        </div>
      )
  }

}

export default App;
