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
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Body = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #383838;
  padding: 27px 24px;
  text-align: left;
  flex: 1 0 auto;
`;

const Image = styled(CardImg)`
  display: block;
  max-height: 122px;
  width: 100%;
  max-width: 100%;
  border-radius: 4px 4px 0 0;

  @media screen and (min-width: 768px) {
    max-height: 74px;
    width: auto;
    border-radius: 4px 0 0 4px;
  }
`;

export default function(props) {
  return (
    <Card to={props.to}>
      <Image
        src={props.image2x}
        srcset={`${props.image} 1x, ${props.image2x} 2x`}
        alt={props.text}
      />
      <Body>{props.text}</Body>
    </Card>
  );
}
