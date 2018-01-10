import React from "react";
import { Col } from "react-flexbox-grid";

import Card from "../Card";

export default function(props) {
  return props.homes.map((home, index) => (
    <Col key={index.toString()} xs={4}>
      <Card home={home} />
    </Col>
  ));
}
