import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";

const Button = styled.button``;

export default function() {
  return (
    <Grid>
      <Row middle="xs" start="xs">
        <Col xs={12}>
          <Button>Dates</Button>
          <Button>Guests</Button>
          <Button>Room type</Button>
          <Button>Price</Button>
          <Button>Instant book</Button>
          <Button>More filters</Button>
        </Col>
      </Row>
    </Grid>
  );
}
