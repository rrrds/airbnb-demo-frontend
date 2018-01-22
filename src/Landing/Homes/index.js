import React from "react";
import { Row } from "react-flexbox-grid";
import { TitleH2, HeaderRow } from "../../UI/styled";
import SeeAllLink from "../../UI/SeeAllLink";
import HomesList from "../../Homes/List";
import Carousel from "../../UI/Carousel";

import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

const homes = [
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

export default function() {
  return (
    <div>
      <HeaderRow between="xs" middle="xs">
        <TitleH2>Homes</TitleH2>
        <SeeAllLink to="/homes" />
      </HeaderRow>
      <Row>
        <Carousel showArrow={true}>
          <HomesList homes={homes} xs={8} md={5} lg={4} />
        </Carousel>
      </Row>
    </div>
  );
}
