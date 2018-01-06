import React from "react";
import styled from "styled-components";
import { CardLink } from "../styled";

const Img = styled.img`
  max-width: 100%;
`;

const Body = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  font-weight: bold;
  margin-top: 8px;

  flex: 1 1 auto;
  justify-content: flex-start;
  text-align: left;
`;

export default function(props) {
  return (
    <CardLink>
      <Img src={props.item.image} />
      <Body>{props.item.name}</Body>
    </CardLink>
  );
}
