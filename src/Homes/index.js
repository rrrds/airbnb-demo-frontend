import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Header from "../Header";

const Content = styled(Grid)`
  padding-top: 80px;
`;

export default () => {
  return (
    <div>
      <Content>
        <div>Homes</div>
      </Content>
    </div>
  );
};
