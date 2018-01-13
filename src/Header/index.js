import React from "react";
import styled from "styled-components";
import { Row, Grid } from "react-flexbox-grid";

import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";
import { FixedWrapper } from "../UI/styled";

const HeaderRow = styled(Row)`
  padding: 16px 8px;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export default function() {
  return (
    <FixedWrapper>
      <Grid>
        <HeaderRow middle="xs" between="xs">
          <MainWrapper>
            <Logo />
            <Search placeholder="Try “Miami”" />
          </MainWrapper>
          <Nav />
        </HeaderRow>
      </Grid>
    </FixedWrapper>
  );
}
