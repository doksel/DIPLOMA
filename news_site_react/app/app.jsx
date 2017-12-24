import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyNavbar from './components/header/navbar.jsx';
import TopHeader from './components/header/top_header.jsx';
import BottomHeader from './components/header/bottom_header.jsx';

import Container from "./components/container/container.jsx";
import ContainerNav from "./components/container/container_nav.jsx";
import ContainerNews from "./components/container/container_news.jsx";
import RegisterForm from "./components/registerForm.jsx";
import Footer from "./components/footer/footer.jsx";


class App extends React.Component {
    render() {
      return <div>
              <TopHeader />
              <Router>
                <div>
              <MyNavbar />
              <BottomHeader />
                    <Switch>
                        <Route exact path="/" component={Container} />
                        <Route path="/containernav" component={ContainerNav} />
                        <Route path="/containernews" component={ContainerNews} />
                        <Route path="/registerform" component={RegisterForm} />
                    </Switch>
                </div>
              </Router>
              <Footer />
            </div>;
  }
}

  ReactDOM.render(
      <App />,
      document.getElementById("app")
  )

