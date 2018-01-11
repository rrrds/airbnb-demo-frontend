import styled from "styled-components";
import { Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";

export const TitleH2 = styled.h2`
  line-height: 34px;
  font-size: 32px;
  margin: 0;
  text-align: left;
`;

export const HeaderRow = styled(Row)`
  margin: 48px 0 0 0;
  flex-wrap: nowrap;
`;

export const CarouselRow = styled(Row)`
  position: relative;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 24px;
`;

export const CardLinkRouter = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
  box-sizing: border-box;
`;

export const FixedWrapper = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: white;
`;
