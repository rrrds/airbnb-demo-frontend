import React from 'react';
import styled from 'styled-components';
import { createSkeletonElement, createSkeletonProvider } from '@trainline/react-skeletor';
import pluralize from 'pluralize';
import { kindToText } from '../helpers';
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

export const Card = props => (
  <CardLink>
    <CardImg src={props.home.image} />
    <Info>
      ${props.home.price} {props.home.text}
    </Info>
    <SubInfo>
      {kindToText[props.home.type]} &middot; {props.home.beds} {pluralize('bed', props.home.beds)}
    </SubInfo>
    <Rating>
      <Stars>{props.home.stars}</Stars>
      {props.home.reviewsCount}
      {props.home.isSuperhost && ' · Superhost'}
    </Rating>
  </CardLink>
);

export const SkeletonCard = createSkeletonProvider(
  {
    home: {
      text: '______________ _ _ __ _ ______',
      price: '__',
      stars: false,
      beds: 0,
      type: '________',
      host: '__ _______',
      reviewsCount: 0,
      isSuperhost: false,
    },
  },
  ({ home }) => home === undefined,
  () => ({
    color: 'grey',
    backgroundColor: 'grey',
    borderRadius: '4px',
    opacity: 0.3,
    width: 'max-content',
  }),
)(Card);
