import styled from "styled-components";
import { Row } from "react-flexbox-grid";
import arrowRight from "./assets/arrow-right.svg";

export const TitleH2 = styled.h2`
  font-family: CircularAir;
  line-height: 34px;
  font-size: 32px;
  margin: 0;
  color: #383838;
  text-align: left;
`;

export const HeaderRow = styled(Row)`
  margin-top: 48px;
  margin-bottom: 25px;
`;

export const CarouselRow = styled(Row)`
  position: relative;
`;

export const CarouselArrow = styled.a`
  position: absolute;
  top: 40%;
  right: -5px;
  background-color: white;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 10px 18px;
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
