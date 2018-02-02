import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrow from './arrow.svg';

const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  line-height: 24px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const ArrowImg = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  height: 10px;
`;

export default function (props) {
  return (
    <StyledLink to={props.to}>
      See All
      <ArrowImg src={arrow} alt="See All" />
    </StyledLink>
  );
}
