import React from "react";
import styled from "styled-components";

const Nav = styled.a`
  margin: 0 4px;
  padding: 4px;
  cursor: pointer;
`;

export default function() {
  return (
    <div>
      <Nav>Become a host</Nav>
      <Nav>Help</Nav>
      <Nav>Sign Up</Nav>
      <Nav>Log In</Nav>
    </div>
  );
}
