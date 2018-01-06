import React from "react";
import styled from "styled-components";

import { CardLink } from "../styled";

const CardImg = styled.img`
  max-width: 100%;
`;

const Type = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #383838;

  margin-top: 12px;
  text-align: left;
`;

const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  color: #383838;

  margin-top: 2px;
  text-align: left;
`;

const Price = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  mix-blend-mode: normal;
  opacity: 0.9;
  font-weight: bold;
  color: #383838;

  margin-top: 2px;
  text-align: left;
`;

export default function(props) {
  return (
    <CardLink>
      <CardImg src={props.reservation.image} />
      <Type>{props.reservation.type}</Type>
      <Name>{props.reservation.name}</Name>
      <Price>About ${props.reservation.price} per person</Price>
    </CardLink>
  );
}
