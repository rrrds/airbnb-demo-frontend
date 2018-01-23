import React from 'react';
import styled from 'styled-components';

import { CardLink, CardImg } from '../../UI/styled';
import Stars from '../../UI/Stars';

const DetailsRow = styled.div`
  text-align: left;
  margin-top: 8px;
  font-size: 15px;
`;

const DetailsRowFlex = DetailsRow.extend`
  display: flex;
  justify-content: flex-start;
`;

const Price = styled.strong`
  margin-right: 6px;
`;

const Reviews = styled.span`
  font-size: 12px;
`;

export default function (props) {
  return (
    <CardLink>
      <CardImg src={props.experience.image} />
      <DetailsRow>
        <Price>${props.experience.price}</Price>
        {props.experience.text}
      </DetailsRow>
      <DetailsRowFlex>
        <Stars />
        <Reviews>{props.experience.reviews} reviews</Reviews>
      </DetailsRowFlex>
    </CardLink>
  );
}
