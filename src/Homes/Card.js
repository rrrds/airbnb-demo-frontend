import React from "react";
import styled from "styled-components";

const Card = styled.div`
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

  flex: 1 1 auto;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  text-align: start;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.item.image} />
      <Body>
        ${props.item.price} {props.item.text}
      </Body>
      <Body>
        {props.item.type} - {props.item.beds} beds
      </Body>
      <Body>{props.item.host}</Body>
    </Card>
  );
}
