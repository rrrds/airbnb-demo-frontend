import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Wrapper = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const HeaderRow = styled.div`
  padding: 16px 0;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <HeaderRow className="row middle-lg between-lg">
          <Col lg={1}>
            <Logo />
          </Col>
          <Col lg={5}>
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
      </div>
    </Wrapper>
  );
}
