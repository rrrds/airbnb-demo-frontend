import React from "react";
import styled from "styled-components";

import { CardLink } from "../styled";
import Stars from "../Stars";

const CardImg = styled.img`
  max-width: 100%;
`;

const DetailsRow = styled.div`
  text-align: left;
  margin-top: 8px;

  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #383838;
`;

const DetailsRowFlex = DetailsRow.extend`
  display: flex;
  justify-content: flex-start;
`;

const Price = styled.strong`
  margin-right: 6px;
`;

const Reviews = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

export default function(props) {
  return (
    <CardLink>
      <CardImg src={props.experience.image} />
      <DetailsRow>
        <Price>${props.experience.price}</Price>
        {props.experience.text}
      </DetailsRow>
      <DetailsRowFlex>
        <Stars />
        <Reviews>{props.experience.reviews} reviews</Reviews>
      </DetailsRowFlex>
    </CardLink>
  );
}
