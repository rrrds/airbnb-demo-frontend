import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Filters from "./Filters";
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
      <FiltersWrapper>
        <Filters />
      </FiltersWrapper>
      <Content>
        <Row>
          <Col xs={8}>
            <Row>Homes</Row>
            <Row center="xs">Paginator</Row>
            <Row center="xs">info text</Row>
          </Col>
        </Row>
      </Content>
    </div>
  );
};
