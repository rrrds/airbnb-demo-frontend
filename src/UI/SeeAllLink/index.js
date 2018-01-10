import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import arrow from "./arrow.svg";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  line-height: 24px;
  font-size: 14px;
  text-align: right;
`;

const ArrowImg = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  height: 10px;
`;

export default function(props) {
  return (
    <StyledLink to={props.to}>
      See All
      <ArrowImg src={arrow} alt="See All" />
    </StyledLink>
  );
}
