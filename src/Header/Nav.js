import React from "react";
import styled from "styled-components";

const Link = styled.a`
  margin: 0 4px;
  padding: 4px;
`;

export default function() {
  return (
    <nav className="hidden-xs hidden-md">
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign Up</Link>
      <Link href="#">Log In</Link>
    </nav>
  );
}
