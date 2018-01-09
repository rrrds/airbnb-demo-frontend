import React from "react";
import { Col } from "react-flexbox-grid";
import { TitleH2, HeaderRow, CarouselRow, CarouselArrow } from "../styled";
import SeeAllLink from "../SeeAllLink";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";

const reservations = [
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

const reservationsList = reservations.map((reservation, index) => (
  <Col key={index.toString()} xs={3}>
    <Card reservation={reservation} />
  </Col>
));

export default function() {
  return (
    <div>
      <HeaderRow between="xs" middle="xs">
        <TitleH2>Popular reservations around the world</TitleH2>
        <SeeAllLink />
      </HeaderRow>
      <CarouselRow>
        {reservationsList}
        <CarouselArrow />
      </CarouselRow>
    </div>
  );
}
