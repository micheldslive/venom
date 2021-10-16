import React, { Component } from "react";
import GlobalStyle from "assets/styles/global";
import Loader from "components/loader";
import Header from "components/header";
import Video from "components/video";
import Venom from "pages/venom";
import NotFound from "pages/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Loader />
        <Header />
        <Video />
        <HelmetProvider>
          <Switch>
            <Route exact path="/" component={Venom} />
            <Route component={NotFound} />
          </Switch>
        </HelmetProvider>
      </Router>
    );
  }
}
