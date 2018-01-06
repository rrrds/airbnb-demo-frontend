import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";

import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Wrapper = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const HeaderRow = styled(Row)`
  padding: 16px 0;
`;

export default function() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
