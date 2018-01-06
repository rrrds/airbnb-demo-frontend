import React from "react";
import styled from "styled-components";

import { CardLink, CardImg } from "../styled";

const Type = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;

  margin-top: 12px;
  text-align: left;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;

  margin-top: 2px;
  text-align: left;
`;

const Price = styled.div`
  font-size: 18px;
  mix-blend-mode: normal;
  opacity: 0.9;
  font-weight: bold;

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
