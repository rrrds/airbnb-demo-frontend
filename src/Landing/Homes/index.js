import React from 'react';
import { Row } from 'react-flexbox-grid';
import { TitleH2, HeaderRow } from '../../UI/styled';
import SeeAllLink from '../../UI/SeeAllLink';
import HomesList from '../../Homes/List';
import Carousel from '../../UI/Carousel';
import { getList } from '../../Homes/api';

export default class Homes extends React.Component {
  state = {
    homes: [undefined, undefined, undefined, undefined, undefined, undefined],
  };

  componentWillMount = () => {
    getList(6, 0).then((homes) => {
      this.setState({ homes });
    });
  };

  render() {
    return (
      <div>
        <HeaderRow between="xs" middle="xs">
          <TitleH2>Homes</TitleH2>
          <SeeAllLink to="/homes" />
        </HeaderRow>
        <Row>
          <Carousel showArrow>
            <HomesList homes={this.state.homes} xs={8} md={5} lg={4} />
          </Carousel>
        </Row>
      </div>
    );
  }
}
