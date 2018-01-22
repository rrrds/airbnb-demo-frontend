import React from "react";
import { Col } from "react-flexbox-grid";

import Card from "../Card";

export default function(props) {
  return props.homes.map((home, index) => (
    <Col key={index.toString()} xs={props.xs} md={props.md} lg={props.lg}>
      <Card home={home} />
    </Col>
  ));
}
