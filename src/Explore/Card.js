import React from "react";
import styled from "styled-components";

import { CardLink, CardImg } from "../styled";

const Card = styled(CardLink)`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
`;

const Body = styled.div`
  font-size: 17px;
  padding: 27px 24px;
  text-align: left;
`;

export default function(props) {
  return (
    <Card>
      <CardImg src={props.image} alt={props.text} />
      <Body>{props.text}</Body>
    </Card>
  );
}
