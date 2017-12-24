import React from "react";
import {Link, BrowserRouter}  from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap";

class MyNavbar extends React.Component {
      render() {
        return <div className="navbar">
                  <Navbar inverse collapseOnSelect>
                      <Navbar.Header>
                          <Navbar.Brand>
                          <Link to="/">Главная</Link> 
                          </Navbar.Brand>
                          <Navbar.Toggle />
                      </Navbar.Header>
                      <Navbar.Collapse>
                          <Nav>
                          <LinkContainer to="/containernews">
                            <NavItem eventKey={1}>Новости</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/containernav">
                            <NavItem eventKey={2}>Контакты</NavItem>
                          </LinkContainer>
                          <NavDropdown eventKey={3} title="Отдых" id="basic-nav-dropdown">
                              <MenuItem eventKey={3.1}>Пляжный отдых</MenuItem>
                              <MenuItem eventKey={3.2}>Активный отдых</MenuItem>
                              <MenuItem eventKey={3.3}>Туры по Европе</MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey={3.3}>Акции</MenuItem>
                          </NavDropdown>
                          </Nav>
                          <Nav pullRight>
                          <LinkContainer to="/registerform">
                            <NavItem eventKey={1}>Регистрация</NavItem>
                          </LinkContainer>
                          <NavItem eventKey={2} href="#">Войти</NavItem>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>
               </div>;
      }
    }

export default MyNavbar;