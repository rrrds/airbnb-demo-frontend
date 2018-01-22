import React from "react";
import styled from "styled-components";
import point from "./point.svg";

const MapButton = styled.button`
  position: fixed;
  right: 8px;
  bottom: 24px;

  width: 40px;
  height: 40px;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;

  background-color: #fff;
`;

const ImageWrapper = styled.span`
  display: inline-block;
`;

export default props => {
  return (
    <MapButton className={props.className}>
      <ImageWrapper>
        <img src={point} alt="Open map" />
      </ImageWrapper>
    </MapButton>
  );
};
