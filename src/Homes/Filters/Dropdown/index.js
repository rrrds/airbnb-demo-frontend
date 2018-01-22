import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
`;

export default props => {
  return <Wrapper>{props.children}</Wrapper>;
};
