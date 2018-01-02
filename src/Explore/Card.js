import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Img = styled.div`
  background: url(${props => props.image}) center center no-repeat / contain;
  height: 72px;
`;

const Text = styled.div`
  font-family: Circular;
  line-height: normal;
  font-size: 17px;
  color: #383838;
`;

export default function(props) {
  return (
    <Card>
      <Img image={props.image} />
      <Text>{props.text}</Text>
    </Card>
  );
}
