import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Link = styled.a`
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
    <Link href="#">
      See All
      <ArrowImg src={arrow} alt="See All" />
    </Link>
  );
}
