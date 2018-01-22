import React from "react";
import styled from "styled-components";

const Link = styled.a`
  margin: 0 16px;
  padding: 4px;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  color: #383838;
`;

const Nav = styled.nav`
  flex-grow: 1;
  text-align: right;
`;

export default function(props) {
  return (
    <Nav className="hidden-xs hidden-md">
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign Up</Link>
      <Link href="#">Log In</Link>
    </Nav>
  );
}
