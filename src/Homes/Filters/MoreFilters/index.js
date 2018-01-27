import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import RoomsBeds from '../RoomsBeds';
import Superhost from '../Superhost';
import Amenities from '../Amenities';
import Facilities from '../Facilities';

const filterId = 'more';

const Popup = styled(ResponsivePopup)`
  padding: 16px;
  left: 0;
  bottom: 0;
`;

const Block = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.15);
  margin-bottom: 23px;
`;

const Title = styled.legend`
  font-family: CircularAir;
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const getButtonText = () => 'More Filters';

export default class MoreFilters extends React.Component {
  state = {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,

    superhost: false,

    heating: false,
    kitchen: false,
    tv: false,
    internet: false,

    elebator: false,
    parking: false,
    pool: false,
    wheelchair: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({});
  }

  onReset = () => {
    this.props.onApply({});

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({});
  };

  onHandleChange = (changes) => {
    this.setState(changes);
  };

  render() {
    const Button = (
      <FilterButton
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive}
      >
        {getButtonText()}
      </FilterButton>
    );

    return (
      <Dropdown>
        <Popup
          isActive={this.props.isActive}
          isMobile={this.props.isMobile}
          onClose={this.props.onClose}
          onApply={this.onApply}
          onReset={this.onReset}
          isLargePopup
        >
          <Block>
            <Title>Rooms and beds</Title>
            <RoomsBeds
              bedrooms={this.state.bedrooms}
              beds={this.state.beds}
              bathrooms={this.state.bathrooms}
              onHandleChange={this.onHandleChange}
            />
          </Block>

          <Block>
            <Title>More options</Title>
            <Superhost superhost={this.state.superhost} onHandleChange={this.onHandleChange} />
          </Block>

          <Block>
            <Title>Amenities</Title>
            <Amenities
              heating={this.state.heating}
              kitchen={this.state.kitchen}
              tv={this.state.tv}
              internet={this.state.internet}
              onHandleChange={this.onHandleChange}
            />
          </Block>

          <Block>
            <Title>Facilities</Title>
            <Facilities
              elebator={this.state.elebator}
              parking={this.state.parking}
              pool={this.state.pool}
              wheelchair={this.state.wheelchair}
              onHandleChange={this.onHandleChange}
            />
          </Block>
        </Popup>

        {Button}
      </Dropdown>
    );
  }
}
