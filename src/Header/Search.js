import React from "react";
import styled from "styled-components";

import searchIcon from "./search.svg";

const Input = styled.input`
  height: 48px;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  font-family: CircularAir;
  line-height: 24px;
  font-size: 16px;

  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.64;

  padding-left: 3em;
`;

const Label = styled.label`
  position: relative;

  &:before {
    position: absolute;
    width: 1.6em;
    left: 0.7em;
    top: 0;
    bottom: 0;
    content: " ";
    background: url(${props => props.icon}) center center no-repeat / contain;
  }
`;

export default function() {
  return (
    <Label icon={searchIcon}>
      <Input placeholder="Try 'Miami'" />
    </Label>
  );
}
