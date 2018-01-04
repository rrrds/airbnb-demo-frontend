import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </Grid>
      </div>
    );
  }
}

export default App;
