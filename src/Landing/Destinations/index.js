import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { TitleH2, HeaderRow } from "../../UI/styled";
import Carousel from "../../UI/Carousel";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";

const destinations = [
  {
    image: image1,
    name: "Paris"
  },
  {
    image: image2,
    name: "Miami"
  },
  {
    image: image3,
    name: "Miami"
  },
  {
    image: image4,
    name: "Cape town"
  },
  {
    image: image5,
    name: "Seoul"
  },
  {
    image: image6,
    name: "Los Angeles"
  }
];

const destinationsList = destinations.map((destination, index) => (
  <Col key={index.toString()} xs={4} md={3} lg={2}>
    <Card destination={destination} />
  </Col>
));

export default function() {
  return (
    <div>
      <HeaderRow between="xs" middle="xs">
        <TitleH2>Featured destinations</TitleH2>
      </HeaderRow>
      <Row>
        <Carousel showArrow={true}>{destinationsList}</Carousel>
      </Row>
    </div>
  );
}
