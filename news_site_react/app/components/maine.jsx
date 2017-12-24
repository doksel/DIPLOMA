import React from "react";

class Footer extends React.Component {
    render() {
      return<main>
                <Switch>
                <Route exact path="/" component={Conteiner} />
                <Route path="/conteinernav" component={ConteinerNav} />
                <Route path="/conteinernews" component={ConteinerNews} />
            </Switch>
            </main>;
    }
  }
  module.exports = Footer;