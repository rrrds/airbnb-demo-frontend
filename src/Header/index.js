import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";

import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";
import { FixedWrapper } from "../UI/styled";

const HeaderRow = styled(Row)`
  padding: 16px 0;
`;

export default function() {
  return (
    <FixedWrapper>
      <Grid>
        <HeaderRow middle="xs" between="xs">
          <Col xs={1}>
            <Logo />
          </Col>
          <Col xs={11} lg={5}>
            <Row start="lg">
              <Search />
            </Row>
          </Col>
          <Col lg={6}>
            <Row end="lg">
              <Nav />
            </Row>
          </Col>
        </HeaderRow>
      </Grid>
    </FixedWrapper>
  );
}
