import React from "react";
import styled from "styled-components";
import { Row, Grid } from "react-flexbox-grid";

import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";
import { FixedWrapper } from "../UI/styled";

const HeaderRow = styled(Row)`
  padding: 16px 8px;
  justify-content: baseline;
  flex-wrap: nowrap;
`;

export default function() {
  return (
    <FixedWrapper>
      <Grid>
        <HeaderRow middle="xs" between="xs">
          <Logo />
          <Search placeholder="Try “Miami”" />
          <Nav />
        </HeaderRow>
      </Grid>
    </FixedWrapper>
  );
}
