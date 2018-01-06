import React from "react";
import styled from "styled-components";
import { CardLink, CardImg } from "../styled";

const CardBody = styled.div`
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
      <CardImg src={props.destination.image} />
      <CardBody>{props.destination.name}</CardBody>
    </CardLink>
  );
}
