import React from "react";
import styled from "styled-components";
import { CardLink, CardImg } from "../styled";

const CardBody = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
  text-align: left;
`;

export default function(props) {
  return (
    <CardLink>
      <CardImg src={props.destination.image} />
      <CardBody>{props.destination.name}</CardBody>
    </CardLink>
  );
}
