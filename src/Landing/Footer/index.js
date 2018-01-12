import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import facebook from "./social/facebook.svg";
import twitter from "./social/twitter.svg";
import instagram from "./social/instagram.svg";
import smallLogo from "./small_logo.svg";
import arrowDown from "./arrow-down.svg";

const FooterBlock = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding-top: 48px;
  margin-top: 64px;
`;

const Nav = styled.nav`
  text-align: left;
`;

const NavTitle = styled.h5`
  font-size: 15px;
  padding: 0;
  margin: 0 0 16px 0;
`;

const CopyrightRow = styled(Row)`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 48px;
  padding: 32px 8px 44px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  font-size: 18px;
  cursor: pointer;
  padding: 10px 16px;
  margin-bottom: 16px;
  display: block;
  width: 100%;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  appearance: none;

  background-image: url(${arrowDown});
  background-position: right 16px center;
  background-repeat: no-repeat;
  background-size: 16px;
`;

const Link = styled.a`
  font-size: 15px;
  color: #636363;
  display: block;
  padding: 4px 0;
`;

const CopyrightLink = styled.a`
  font-size: 15px;
  text-align: right;
  color: #636363;
  margin: 0 16px 0 0;
`;

const Social = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

const Copyright = styled.span`
  font-size: 15px;
  color: #636363;
`;

const SmallLogoLink = styled.a`
  bottom: -5px;
  position: relative;
  display: inline-block;
  margin-right: 12px;
`;

const SmallLogo = styled.img`
  width: 21px;
  height: 22px;
  color: #767676;
  fill: #767676;
`;

export default function() {
  return (
    <FooterBlock>
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <Select>
              <option>English</option>
            </Select>
            <Select>
              <option>United States dollar</option>
            </Select>
          </Col>
          <Col mdOffset={1} md={2} className="hidden-xs">
            <Nav>
              <NavTitle>Airbnb</NavTitle>
              <Link href="#">About us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Help</Link>
              <Link href="#">Diversity & Belonging</Link>
            </Nav>
          </Col>
          <Col mdOffset={1} md={2} className="hidden-xs">
            <Nav>
              <NavTitle>Discover</NavTitle>
              <Link href="#">Trust & Safety</Link>
              <Link href="#">Travel Credit</Link>
              <Link href="#">Gift Cards</Link>
              <Link href="#">Airbnb Citizen</Link>
              <Link href="#">Business Travel</Link>
              <Link href="#">Guidebooks</Link>
              <Link href="#">Airbnbmag</Link>
            </Nav>
          </Col>
          <Col mdOffset={1} md={2} className="hidden-xs">
            <Nav>
              <NavTitle>Hosting</NavTitle>
              <Link href="#">Why Host</Link>
              <Link href="#">Hospitality</Link>
              <Link href="#">Responsible Hosting</Link>
              <Link href="#">Community Center</Link>
            </Nav>
          </Col>
        </Row>

        <CopyrightRow between="xs" middle="xs">
          <FlexWrapper>
            <SmallLogoLink href="#">
              <SmallLogo src={smallLogo} alt="logo" />
            </SmallLogoLink>
            <Copyright>&copy; Airbnb Inc.</Copyright>
          </FlexWrapper>

          <FlexWrapper>
            <CopyrightLink href="#">Terms</CopyrightLink>
            <CopyrightLink href="#">Privacy</CopyrightLink>
            <CopyrightLink href="#">Site map</CopyrightLink>

            <CopyrightLink href="#">
              <Social src={facebook} />
            </CopyrightLink>
            <CopyrightLink href="#">
              <Social src={twitter} />
            </CopyrightLink>
            <CopyrightLink href="#">
              <Social src={instagram} />
            </CopyrightLink>
          </FlexWrapper>
        </CopyrightRow>
      </Grid>
    </FooterBlock>
  );
}
