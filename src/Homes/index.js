import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { TitleH2 } from "../styled";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

export default function() {
  const items = [
    {
      image: image1,
      text: "La Salentina, see, nature & relax",
      price: 82,
      rating: 4,
      host: "97 · Superhost",
      type: "Entire house",
      beds: 9
    },
    {
      image: image2,
      text: "Your private 3 bedr. riad and exclusi…",
      price: 82,
      rating: 4,
      host: "161 · Superhost",
      type: "Entire house",
      beds: 5
    },
    {
      image: image3,
      text: "Dreamy Tropical Tree House",
      price: 200,
      rating: 5,
      host: "364 · Superhost",
      type: "Entire treehouse",
      beds: 1
    }
  ];

  const listItems = items.map((item, index) => (
    <Col key={index.toString()} lg={4}>
      <Card item={item} />
    </Col>
  ));

  return (
    <div>
      <Row start="lg">
        <Col lg={12}>
          <TitleH2>Homes</TitleH2>
        </Col>
      </Row>
      <Row>{listItems}</Row>
    </div>
  );
}
