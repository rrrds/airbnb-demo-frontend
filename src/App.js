import React, { Component } from "react";
import Header from "./Header";
import Explore from "./Explore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Explore />
        </div>
      </div>
    );
  }
}

export default App;
