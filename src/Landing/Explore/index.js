import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { TitleH2, HeaderRow } from "../../styled";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

export default function() {
  return (
    <div>
      <HeaderRow between="xs" middle="xs">
        <TitleH2>Explore Airbnb</TitleH2>
      </HeaderRow>
      <Row>
        <Col xs={4}>
          <Card text="Homes" image={image1} linkTo="/homes" />
        </Col>
        <Col xs={4}>
          <Card text="Experiennces" image={image2} linkTo="/experiennces" />
        </Col>
        <Col xs={4}>
          <Card text="Restaurants" image={image3} linkTo="/restaurants" />
        </Col>
      </Row>
    </div>
  );
}
