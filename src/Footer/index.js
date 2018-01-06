import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import facebook from "./social/facebook.svg";
import twitter from "./social/twitter.svg";
import instagram from "./social/instagram.svg";
import smallLogo from "./small_logo.svg";
import arrowDown from "./arrow-down.svg";

const FooterBlock = styled.div`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding-top: 48px;
  margin-top: 64px;
`;

const StyledRow = styled(Row)`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 48px;
  padding: 32px 0;
`;

const UnstyledList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  text-align: left;
`;

const ListItem = styled.li`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  cursor: pointer;
  padding: 4px 0;
`;

const HeadListItem = ListItem.extend`
  color: #383838;
  font-weight: bold;
  padding: 0 0 16px 0;
  cursor: auto;
`;

const Select = styled.select`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
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

const FooterLink = styled.a`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  text-align: right;
  color: #636363;
  cursor: pointer;
  margin: 0 8px;
`;

const Social = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  cursor: pointer;
`;

const Copyright = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  margin-left: 12px;
`;

const SmallLogo = styled.img`
  display: inline-block;
  width: 21px;
  height: 22px;
  color: #767676;
  fill: #767676;
`;

const FlexCol = styled(Col)`
  display: flex;
`;

export default function() {
  return (
    <FooterBlock>
      <Grid>
        <Row>
          <Col lg={3}>
            <Row>
              <Select>
                <option>English</option>
              </Select>
            </Row>
            <Row>
              <Select>
                <option>United States dollar</option>
              </Select>
            </Row>
          </Col>
          <Col lgOffset={1}>
            <UnstyledList>
              <HeadListItem>Airbnb</HeadListItem>
              <ListItem>About us</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Press</ListItem>
              <ListItem>Policies</ListItem>
              <ListItem>Help</ListItem>
              <ListItem>Diversity & Belonging</ListItem>
            </UnstyledList>
          </Col>
          <Col lgOffset={1}>
            <UnstyledList>
              <HeadListItem>Discover</HeadListItem>
              <ListItem>Trust & Safety</ListItem>
              <ListItem>Travel Credit</ListItem>
              <ListItem>Gift Cards</ListItem>
              <ListItem>Airbnb Citizen</ListItem>
              <ListItem>Business Travel</ListItem>
              <ListItem>Guidebooks</ListItem>
              <ListItem>Airbnbmag</ListItem>
            </UnstyledList>
          </Col>
          <Col lgOffset={1}>
            <UnstyledList>
              <HeadListItem>Hosting</HeadListItem>
              <ListItem>Why Host</ListItem>
              <ListItem>Hospitality</ListItem>
              <ListItem>Responsible Hosting</ListItem>
              <ListItem>Community Center</ListItem>
            </UnstyledList>
          </Col>
        </Row>
        <StyledRow between="lg" middle="lg">
          <FlexCol>
            <SmallLogo src={smallLogo} alt="logo" />
            <Copyright>&copy; Airbnb Inc.</Copyright>
          </FlexCol>
          <Col>
            <FooterLink>Terms</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Site map</FooterLink>

            <FooterLink>
              <Social src={facebook} />
            </FooterLink>
            <FooterLink>
              <Social src={twitter} />
            </FooterLink>
            <FooterLink>
              <Social src={instagram} />
            </FooterLink>
          </Col>
        </StyledRow>
      </Grid>
    </FooterBlock>
  );
}
