import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';
import { RoundButton } from './styled';

const Wrapper = styled.div`
  margin: 48px 0 14px 0;
`;

const Nav = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const TextInfo = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #383838;
`;

export default function () {
  return (
    <Wrapper>
      <Nav>
        <RoundButton active>1</RoundButton>
        <RoundButton>2</RoundButton>
        <RoundButton>3</RoundButton>
        <RoundButton>&hellip;</RoundButton>
        <RoundButton>17</RoundButton>
        <RoundButton>
          <img src={arrow} alt="Next" />
        </RoundButton>
      </Nav>
      <TextInfo>1 – 6 of 100+ Rentals</TextInfo>
    </Wrapper>
  );
}
