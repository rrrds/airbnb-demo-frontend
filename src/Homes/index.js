import React from "react";
import { Col } from "react-flexbox-grid";
import { TitleH2, HeaderRow, CarouselRow, CarouselArrow } from "../styled";
import SeeAllLink from "../SeeAllLink";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

const homes = [
  {
    image: image1,
    text: "La Salentina, see, nature & relax",
    price: 82,
    rating: 4,
    host: "97 &middot; Superhost",
    type: "Entire house",
    beds: 9
  },
  {
    image: image2,
    text: "Your private 3 bedr. riad and exclusi…",
    price: 82,
    rating: 4,
    host: "161 &middot; Superhost",
    type: "Entire house",
    beds: 5
  },
  {
    image: image3,
    text: "Dreamy Tropical Tree House",
    price: 200,
    rating: 5,
    host: "364 &middot; Superhost",
    type: "Entire treehouse",
    beds: 1
  }
];

const homesList = homes.map((home, index) => (
  <Col key={index.toString()} lg={4}>
    <Card home={home} />
  </Col>
));

export default function() {
  return (
    <div>
      <HeaderRow between="lg" middle="lg">
        <Col lg={11}>
          <TitleH2>Homes</TitleH2>
        </Col>
        <Col lg={1}>
          <SeeAllLink />
        </Col>
      </HeaderRow>
      <CarouselRow>
        {homesList}
        <CarouselArrow />
      </CarouselRow>
    </div>
  );
}
