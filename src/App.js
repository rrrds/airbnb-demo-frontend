import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

const Content = styled(Grid)`
  padding-top: 80px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
