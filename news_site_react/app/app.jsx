import React from "react";
import ReactDOM from "react-dom";
import {MyNavbar} from "./components/navbar";

class App extends React.Component {
    render() {
      return <div>
               <MyNavbar />
            </div>;
    }
  }
  ReactDOM.render(
      <App />,
      document.getElementById("app")
  )

