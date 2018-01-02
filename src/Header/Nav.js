import React from "react";
import styled from "styled-components";

const Button = styled.a`
  margin: 0 4px;
  padding: 4px;
`;

export default function() {
  return (
    <div>
      <Button>Become a host</Button>
      <Button>Help</Button>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </div>
  );
}
