import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { TitleH2 } from "../styled";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";

export default function() {
  const items = [
    {
      image: image1,
      name: "Chumley’s",
      type: "Speakeasy",
      price: 60
    },
    {
      image: image2,
      name: "Hanjan",
      type: "Korean gastropub",
      price: 50
    },
    {
      image: image3,
      name: "Prime Meats",
      type: "German american",
      price: 55
    },
    {
      image: image4,
      name: "Seaprice",
      type: "Fine seafood",
      price: 70
    }
  ];

  const listItems = items.map((item, index) => (
    <Col key={index.toString()} lg={3}>
      <Card item={item} />
    </Col>
  ));

  return (
    <div>
      <Row start="lg">
        <Col lg={12}>
          <TitleH2>Popular reservations around the world</TitleH2>
        </Col>
      </Row>
      <Row>{listItems}</Row>
    </div>
  );
}
