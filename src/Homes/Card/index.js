import React from 'react';
import styled from 'styled-components';

import { CardLink } from '../../UI/styled';
import Stars from '../../UI/Stars';

const CardImg = styled.img`
  max-width: 100%;
`;

const Info = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  font-weight: bold;
  color: #383838;

  text-align: left;
  margin-top: 8px;
`;

const SubInfo = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  font-weight: 200;
  color: #383838;

  text-align: left;
  margin-top: 2px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;

  margin-top: 6px;
`;

export default function (props) {
  return (
    <CardLink>
      <CardImg src={props.home.image} />
      <Info>
        ${props.home.price} {props.home.text}
      </Info>
      <SubInfo>
        {props.home.type} &middot; {props.home.beds} beds
      </SubInfo>
      <Rating>
        <Stars>{props.home.stars}</Stars>
        {props.home.host}
      </Rating>
    </CardLink>
  );
}
