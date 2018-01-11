import React from "react";
import styled from "styled-components";
import arrowRight from "./arrow-right.svg";

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  overflow-x: auto;
`;

const Arrow = styled.a`
  position: absolute;
  right: -5px;
  align-self: center;
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

export default function(props) {
  return (
    <Wrapper>
      <Items>{props.children}</Items>
      {props.showArrow === true && <Arrow />}
    </Wrapper>
  );
}
