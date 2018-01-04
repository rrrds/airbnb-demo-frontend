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

  flex: 1 1 auto;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  text-align: start;
`;

const Type = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #383838;

  margin-top: 12px;
  text-align: left;
`;

const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  color: #383838;

  margin-top: 2px;
  text-align: left;
`;

const Price = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  mix-blend-mode: normal;
  opacity: 0.9;
  font-weight: bold;
  color: #383838;

  margin-top: 2px;
  text-align: left;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.item.image} />
      <Type>{props.item.type}</Type>
      <Name>{props.item.name}</Name>
      <Price>About ${props.item.price} per person</Price>
    </Card>
  );
}
