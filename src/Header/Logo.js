import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";

const MainLink = styled(Link)`
  margin-right: 3vw;
`;

export default function() {
  return (
    <MainLink to="/">
      <img src={logo} alt="logo" />
    </MainLink>
  );
}
