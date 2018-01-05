import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  max-height: 100%;
`;

const Body = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 17px;
  color: #383838;

  padding: 27px 24px;

  flex: 1 1 auto;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  text-align: left;
`;

export default function(props) {
  return (
    <Card>
      <Img image={props.image} src={props.image} />
      <Body>{props.text}</Body>
    </Card>
  );
}
