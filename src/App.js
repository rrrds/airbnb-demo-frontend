import React, { Component } from "react";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Explore />
          <Experiences />
        </div>
      </div>
    );
  }
}

export default App;
