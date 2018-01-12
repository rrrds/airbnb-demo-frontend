import "react-dates/initialize";

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>Airbnb</title>
          </Helmet>

          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
