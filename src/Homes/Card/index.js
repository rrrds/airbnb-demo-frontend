import React from 'react';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';

import { CardLink } from '../../UI/styled';
import Stars from '../../UI/Stars';

const CardImg = createSkeletonElement(
  styled.img`
    max-width: 100%;
  `,
  () => ({
    height: '190px',
    width: '100%',
  }),
);

const Info = createSkeletonElement(styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  font-weight: bold;
  color: #383838;

  text-align: left;
  margin-top: 8px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`);

const SubInfo = createSkeletonElement(styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  font-weight: 200;
  color: #383838;

  text-align: left;
  margin-top: 2px;
`);

const Rating = createSkeletonElement(styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;

  margin-top: 6px;
`);

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
