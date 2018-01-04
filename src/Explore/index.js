import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { TitleH2 } from "../styled";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

export default function() {
  return (
    <div>
      <Row start="lg">
        <Col lg={12}>
          <TitleH2>Explore Airbnb</TitleH2>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card text="Homes" image={image1} />
        </Col>
        <Col lg={4}>
          <Card text="Experiences" image={image2} />
        </Col>
        <Col lg={4}>
          <Card text="Restaurants" image={image3} />
        </Col>
      </Row>
    </div>
  );
}
