import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import times from 'lodash/times';
import { TitleH2, HeaderRow } from '../../UI/styled';
import SeeAllLink from '../../UI/SeeAllLink';
import { SkeletonCard } from '../../Homes/Card';
import Carousel from '../../UI/Carousel';
import { getList } from '../../Homes/api';

export default class Homes extends React.Component {
  state = {
    homes: times(6, () => undefined),
  };

  componentWillMount = () => {
    getList(6, 0).then((homes) => {
      this.setState({ homes });
    });
  };

  render() {
    const homesList = this.state.homes.map((home, index) => (
      <Col key={index.toString()} xs={8} md={5} lg={4}>
        <SkeletonCard home={home} />
      </Col>
    ));

    return (
      <div>
        <HeaderRow between="xs" middle="xs">
          <TitleH2>Homes</TitleH2>
          <SeeAllLink to="/homes" />
        </HeaderRow>
        <Row>
          <Carousel showArrow>
            {homesList}
          </Carousel>
        </Row>
      </div>
    );
  }
}
