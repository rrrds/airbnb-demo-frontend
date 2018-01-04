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
      text: "Forest therapy",
      price: 29,
      rating: 4,
      reviews: 44
    },
    {
      image: image2,
      text: "Whale watching",
      price: 69,
      rating: 4,
      reviews: 46
    },
    {
      image: image3,
      text: "Table Mountain Summit, Cable Car Down",
      price: 69,
      rating: 4,
      reviews: 44
    },
    {
      image: image4,
      text: "Salsa Night",
      price: 50,
      rating: 4,
      reviews: 44
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
          <TitleH2>Experiences</TitleH2>
        </Col>
      </Row>
      <Row>{listItems}</Row>
    </div>
  );
}
