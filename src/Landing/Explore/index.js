import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { TitleH2, HeaderRow } from "../../UI/styled";
import Carousel from "../../UI/Carousel";

import Card from "./Card";
import image1 from "./1.png";
import image1x2 from "./1@2x.png";
import image2 from "./2.png";
import image2x2 from "./2@2x.png";
import image3 from "./3.png";
import image3x2 from "./3@2x.png";

const explore = [
  {
    name: "Homes",
    image: image1,
    image2x: image1x2,
    to: "/homes"
  },
  {
    name: "Experiences",
    image: image2,
    image2x: image2x2,
    to: "/experiences"
  },
  {
    name: "Restaurants",
    image: image3,
    image2x: image3x2,
    to: "/restaurants"
  }
];

const exploreList = explore.map((exp, index) => (
  <Col key={index.toString()} xs={6} md={5} lg={4}>
    <Card text={exp.name} image={exp.image} to={exp.to} />
  </Col>
));

export default function() {
  return (
    <div>
      <HeaderRow between="xs" middle="xs">
        <TitleH2>Explore Airbnb</TitleH2>
      </HeaderRow>
      <Row>
        <Carousel>{exploreList}</Carousel>
      </Row>
    </div>
  );
}
