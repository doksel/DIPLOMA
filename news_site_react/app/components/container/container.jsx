import React from "react";

import ContainerNav from "./container_nav.jsx";
import ContainerNews from "./container_news.jsx";

// import './style.css';

class Container extends React.Component {
    render() {
      return <div>
                <ContainerNews />
                <ContainerNav />
             </div>;
    }
  }
export default Container;
