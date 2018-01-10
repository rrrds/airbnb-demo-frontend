import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Filters from "./Filters";
import { FixedWrapper } from "../UI/styled";
import HomesList from "./List";
import Paginator from "./Paginator";
import GoogleMap from "google-map-react";

import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";

const Content = styled(Grid)`
  padding-top: 136px;
`;

const FiltersWrapper = FixedWrapper.extend`
  top: 80px;
  background-color: #fff;
  z-index: 10;
`;

const Footer = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
  padding: 25px 0;
`;

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
  },
  {
    image: image4,
    text: "La Salentina, see, nature & relax",
    price: 82,
    rating: 4,
    host: "97 · Superhost",
    type: "Entire house",
    beds: 9
  },
  {
    image: image5,
    text: "Your private 3 bedr. riad and exclusi…",
    price: 82,
    rating: 4,
    host: "161 · Superhost",
    type: "Entire house",
    beds: 5
  },
  {
    image: image6,
    text: "Dreamy Tropical Tree House",
    price: 200,
    rating: 5,
    host: "364 · Superhost",
    type: "Entire treehouse",
    beds: 1
  }
];

const homesRows = homes
  .map((home, index) => index % 2 === 0 && homes.slice(index, index + 2))
  .filter(subArray => subArray)
  .map((rowItems, index) => (
    <Row>
      <HomesList homes={rowItems} xs={12} md={6} lg={6} />
    </Row>
  ));

const WebMap = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;

  height: 100%;
  width: 33.3333%;
  padding-top: 136px;
`;

export default () => {
  return (
    <div>
      <FiltersWrapper>
        <Filters />
      </FiltersWrapper>
      <Content>
        <Row>
          <Col xs={8}>
            {homesRows}

            <Row center="xs">
              <Paginator />
            </Row>
            <Row center="xs">
              <Footer>
                Enter dates to see full pricing. Additional fees apply. Taxes
                may be added.
              </Footer>
            </Row>
          </Col>
        </Row>
      </Content>
      <WebMap>
        <GoogleMap
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        />
      </WebMap>
    </div>
  );
};
