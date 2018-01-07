import React from "react";

class RouterContainer extends React.Component {
    render() {
      return<div>
              <Switch>
                  <Route exact path="/" component={Conteiner} />
                  <Route path="/conteinernav" component={ConteinerNav} />
                  <Route path="/conteinernews" component={ConteinerNews} />
              </Switch>
            </div>
    }
  }
 export default RouterContainer;