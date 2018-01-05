import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { TitleH2, HeaderRow } from "../styled";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";

export default function() {
  const items = [
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

  const listItems = items.map((item, index) => (
    <Col key={index.toString()} lg={2}>
      <Card item={item} />
    </Col>
  ));

  return (
    <div>
      <HeaderRow between="lg" middle="lg">
        <Col lg={12}>
          <TitleH2>Featured destinations</TitleH2>
        </Col>
      </HeaderRow>
      <Row>{listItems}</Row>
    </div>
  );
}
