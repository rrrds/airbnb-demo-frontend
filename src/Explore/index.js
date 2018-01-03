import React from "react";
import styled from "styled-components";
import { TitleH2 } from "../styled";

import Card from "./Card";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

export default function() {
  return (
    <div>
      <div className="row start-lg">
        <div className="col-lg">
          <TitleH2>Explore Airbnb</TitleH2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <Card text="Homes" image={image1} />
        </div>
        <div className="col-lg">
          <Card text="Experiences" image={image2} />
        </div>
        <div className="col-lg">
          <Card text="Restaurants" image={image3} />
        </div>
      </div>
    </div>
  );
}
