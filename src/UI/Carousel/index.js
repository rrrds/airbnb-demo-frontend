import React from 'react';
import styled from 'styled-components';
import arrowRight from './arrow-right.svg';

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 1 0 auto;
  flex-basis: 0;
  max-width: 100%;
`;

const Items = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const Arrow = styled.a`
  position: absolute;
  right: -5px;
  top: 40%;
  background-color: white;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 10px 18px;
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export default function (props) {
  return (
    <Wrapper>
      <Items>{props.children}</Items>
      {props.showArrow === true && <Arrow />}
    </Wrapper>
  );
}
