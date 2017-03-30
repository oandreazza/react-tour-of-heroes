import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const App = (props) => {

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
            {props.children}
        </div>
      </div>
    );
}

export default App;
