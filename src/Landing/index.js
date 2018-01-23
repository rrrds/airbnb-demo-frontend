import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Reservations from './Reservations';
import Destinations from './Destinations';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Content = styled(Grid)`
  padding-top: 80px;
`;

export default () => (
  <div>
    <Helmet>
      <title>Airbnb — Main</title>
    </Helmet>

    <Content>
      <Explore />
      <Experiences />
      <Homes />
      <Reservations />
      <Destinations />
    </Content>
    <Footer />
  </div>
);
