import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";

const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  background-color: #fff;

  line-height: normal;
  font-size: 14px;
  color: #383838;
`;

class Filters extends React.Component {
  render() {
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
}

export default Filters;
