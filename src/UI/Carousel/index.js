import React from "react";
import styled from "styled-components";
import { CarouselArrow } from "../../UI/styled";

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

export default function(props) {
  return (
    <Wrapper>
      <Items>{props.children}</Items>
      <CarouselArrow />
    </Wrapper>
  );
}
