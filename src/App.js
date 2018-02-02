import 'react-dates/initialize';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Landing from './Landing';
import Homes from './Homes';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Helmet>
        <title>Airbnb</title>
      </Helmet>

      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/homes" component={Homes} />
    </div>
  </BrowserRouter>
);
