import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Explore />
          <Experiences />
        </Grid>
      </div>
    );
  }
}

export default App;
