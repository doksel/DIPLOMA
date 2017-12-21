import React from "react";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap";

class MyNavbar extends React.Component {
      render() {
        return <div className="navbar">
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

module.exports = MyNavbar;