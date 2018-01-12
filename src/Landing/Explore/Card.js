import React from "react";
import styled from "styled-components";

import { CardLinkRouter, CardImg } from "../../UI/styled";

const Card = styled(CardLinkRouter)`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Body = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  padding: 27px 24px;
  text-align: left;
  flex-grow: 5;
`;

const Image = styled(CardImg)`
  flex-grow: 1;
  width: auto;
`;

export default function(props) {
  return (
    <Card to={props.linkTo}>
      <Image src={props.image} alt={props.text} />
      <Body>{props.text}</Body>
    </Card>
  );
}
