import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import GoogleMap from 'google-map-react';
import 'whatwg-fetch';
import times from 'lodash/times';
import Filters from './Filters';
import { FixedWrapper } from '../UI/styled';
import HomesList from './List';
import Paginator from './Paginator';
import MapButton from './MapButton';
import { getList } from './api';

const Content = styled(Grid)`
  padding-top: 136px;
`;

const FiltersWrapper = FixedWrapper.extend`
  top: 80px;
  background-color: #fff;
  z-index: 80;
`;

const Footer = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
  padding: 25px 0;
`;

const GoogleMapWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  padding-top: 136px;
  height: 100%;
  width: calc(50% - 992px / 2 + 992px * 0.333);

  @media only screen and (min-width: 1200px) {
    width: calc(50% - 1200px / 2 + 1200px * 0.333);
  }
`;

export default class Homes extends React.Component {
  state = {
    homes: times(8, () => undefined),
  };

  componentWillMount = () => {
    getList(8, 0).then((homes) => {
      this.setState({ homes });
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Airbnb — Homes</title>
        </Helmet>

        <FiltersWrapper>
          <Filters />
        </FiltersWrapper>
        <Content>
          <Row>
            <Col xs={12} md={12} lg={8}>
              <Row>
                <HomesList homes={this.state.homes} xs={12} md={6} lg={6} />
              </Row>

              <Row center="xs">
                <Paginator />
              </Row>

              <Row center="xs">
                <Footer>
                  Enter dates to see full pricing. Additional fees apply. Taxes may be added.
                </Footer>
              </Row>
            </Col>
          </Row>
        </Content>
        <GoogleMapWrapper className="hidden-xs hidden-md">
          <GoogleMap
            defaultCenter={{ lat: 59.95, lng: 30.33 }}
            defaultZoom={11}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API_KEY,
            }}
          />
        </GoogleMapWrapper>
        <MapButton className="hidden-lg hidden-xl" />
      </div>
    );
  }
}
