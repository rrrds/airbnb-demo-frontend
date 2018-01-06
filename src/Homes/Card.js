import React from "react";
import styled from "styled-components";

import { CardLink } from "../styled";
import Stars from "../Stars";

const Img = styled.img`
  max-width: 100%;
`;

const Info = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  font-weight: bold;

  text-align: left;
  margin-top: 8px;
`;

const SubInfo = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #383838;

  text-align: left;
  margin-top: 2px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;

  margin-top: 6px;
`;

export default function(props) {
  return (
    <CardLink>
      <Img src={props.item.image} />
      <Info>
        ${props.item.price} {props.item.text}
      </Info>
      <SubInfo>
        {props.item.type} &middot; {props.item.beds} beds
      </SubInfo>
      <Rating>
        <Stars />
        {props.item.host}
      </Rating>
    </CardLink>
  );
}
