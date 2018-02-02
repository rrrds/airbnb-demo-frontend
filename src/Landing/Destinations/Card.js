import React from 'react';
import styled from 'styled-components';
import { CardLink, CardImg } from '../../UI/styled';

const Body = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
  text-align: left;
`;

export default function (props) {
  return (
    <CardLink>
      <CardImg src={props.destination.image} />
      <Body>{props.destination.name}</Body>
    </CardLink>
  );
}
