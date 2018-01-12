import React from "react";
import styled from "styled-components";

import searchIcon from "./search.svg";

const Input = styled.input`
  height: 48px;
  width: 100%;
  max-width: 392px;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  line-height: 24px;
  font-size: 16px;

  mix-blend-mode: normal;
  opacity: 0.64;

  padding-left: 3em;

  background: url(${searchIcon}) 16px center no-repeat / auto;
`;

export default Input;
