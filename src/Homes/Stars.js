import React from "react";
import styled from "styled-components";

import star from "./star.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 4px;
`;

const StarImg = styled.img`
  margin-right: 4px;
`;

export default function(props) {
  return (
    <Wrapper>
      <StarImg src={star} />
      <StarImg src={star} />
      <StarImg src={star} />
      <StarImg src={star} />
      <StarImg src={star} />
    </Wrapper>
  );
}
