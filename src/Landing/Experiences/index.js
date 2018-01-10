import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  TitleH2,
  HeaderRow,
  CarouselRow,
  CarouselArrow
} from "../../UI/styled";
import SeeAllLink from "../../UI/SeeAllLink";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";

const experiences = [
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

const experiencesList = experiences.map((experience, index) => (
  <Col key={index.toString()} xs={3}>
    <Card experience={experience} />
  </Col>
));

export default function() {
  return (
    <div>
      <HeaderRow between="xs" middle="xs">
        <TitleH2>Experiences</TitleH2>
        <SeeAllLink />
      </HeaderRow>
      <CarouselRow>
        {experiencesList}
        <CarouselArrow />
      </CarouselRow>
    </div>
  );
}
