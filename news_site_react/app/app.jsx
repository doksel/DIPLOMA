import React from "react";
import ReactDOM from "react-dom";

// import {MyNavbar} from "./components/navbar";

import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Carousel} from "react-bootstrap";

class App extends React.Component {
    render() {
      return <div>
              <TopHeader />
              <MyNavbar />
              <BottomHeader />
            </div>;
  }
}
//--------------------------------------------------------------------------

class TopHeader extends React.Component {
  render() {
    return <div class="topHeader">
              <h1> Travel... " I want to make memories all over the world "</h1>
          </div>;
  }
}

class MyNavbar extends React.Component {
  render() {
    return <div class="navbar">
              <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                      <Navbar.Brand>
                      <a href="#">Главная</a>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                      <Nav>
                      <NavItem eventKey={1} href="#">Новости</NavItem>
                      <NavItem eventKey={2} href="#">Подбор тура</NavItem>
                      <NavDropdown eventKey={3} title="Отдых" id="basic-nav-dropdown">
                          <MenuItem eventKey={3.1}>Пляжный отдых</MenuItem>
                          <MenuItem eventKey={3.2}>Активный отдых</MenuItem>
                          <MenuItem eventKey={3.3}>Туры по Европе</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={3.3}>Акции</MenuItem>
                      </NavDropdown>
                      </Nav>
                      <Nav pullRight>
                      <NavItem eventKey={1} href="#">Контакты</NavItem>
                      <NavItem eventKey={2} href="#">Log in</NavItem>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
           </div>;
  }
}

class BottomHeader extends React.Component {
  render() {
    return <div class="bottomHeader">
              
            </div>;
  }
}

  ReactDOM.render(
      <App />,
      document.getElementById("app")
  )

