import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Header from "../Header";
import { FixedWrapper } from "../UI/styled";

const Content = styled(Grid)`
  padding-top: 136px;
`;

const FiltersWrapper = FixedWrapper.extend`
  top: 81px;
`;

export default () => {
  return (
    <div>
      <FiltersWrapper>Filters</FiltersWrapper>
      <Content>
        <div>Homes</div>
      </Content>
    </div>
  );
};
