import styled from "styled-components";
import { Row } from "react-flexbox-grid";
import arrowRight from "./assets/arrow-right.svg";

export const TitleH2 = styled.h2`
  line-height: 34px;
  font-size: 32px;
  margin: 0;
  text-align: left;
`;

export const HeaderRow = styled(Row)`
  margin: 48px 0 25px 0;
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

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
  box-sizing: border-box;
`;
