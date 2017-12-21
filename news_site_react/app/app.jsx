import React from "react";
import ReactDOM from "react-dom";

var MyNavbar = require ('./components/navbar.jsx');
var TopHeader = require ('./components/top_header.jsx');
var BottomHeader = require ('./components/bottom_header.jsx');
var ConteinerNews = require ('./components/conteiner_news.jsx');

import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Carousel} from "react-bootstrap";

class App extends React.Component {
    render() {
      return <div>
              <TopHeader />
              <MyNavbar />
              <BottomHeader />
              <ConteinerNews />
            </div>;
  }
}

  ReactDOM.render(
      <App />,
      document.getElementById("app")
  )

