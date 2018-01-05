import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: flex;
  flex-direction: column;
`;

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
    <Card>
      <Img src={props.item.image} />
      <Body>{props.item.name}</Body>
    </Card>
  );
}
