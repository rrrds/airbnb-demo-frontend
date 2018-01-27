import React from 'react';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import RoomsBeds from '../RoomsBeds';
import Superhost from '../Superhost';
import Amenities from '../Amenities';
import Facilities from '../Facilities';
import RoomSelect from '../RoomType/RoomSelect';
import Price from '../Price';
import InstantBook from '../InstantBook';

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

const isSomethingChanged = (obj1, obj2) => !isEqual(obj1, obj2);

const isMdOrLess = window.matchMedia('(max-width: 992px)').matches;

export default class MoreFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entireHome: props.entireHome,
      privateRoom: props.privateRoom,
      sharedRoom: props.sharedRoom,

      bedrooms: props.bedrooms,
      beds: props.beds,
      bathrooms: props.bathrooms,

      superhost: props.superhost,

      heating: props.heating,
      kitchen: props.kitchen,
      tv: props.tv,
      internet: props.internet,

      elebator: props.elebator,
      parking: props.parking,
      pool: props.pool,
      wheelchair: props.wheelchair,
    };
    this.baseState = this.state;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      entireHome: newProps.entireHome,
      privateRoom: newProps.privateRoom,
      sharedRoom: newProps.sharedRoom,

      bedrooms: newProps.bedrooms,
      beds: newProps.beds,
      bathrooms: newProps.bathrooms,

      superhost: newProps.superhost,

      heating: newProps.heating,
      kitchen: newProps.kitchen,
      tv: newProps.tv,
      internet: newProps.internet,

      elebator: newProps.elebator,
      parking: newProps.parking,
      pool: newProps.pool,
      wheelchair: newProps.wheelchair,
    });
  }

  onReset = () => {
    this.props.onApply(this.baseState);

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({ ...this.state });

    this.props.onClose();
  };

  onHandleChange = (changes) => {
    this.setState(changes);
  };

  render() {
    const Button = (
      <FilterButton
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive || isSomethingChanged(this.baseState, this.state)}
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
          {isMdOrLess && (
            <Block>
              <Title>Room type</Title>
              <RoomSelect
                entireHome={this.state.entireHome}
                privateRoom={this.state.privateRoom}
                sharedRoom={this.state.sharedRoom}
                handleCheckboxChange={this.onHandleChange}
              />
            </Block>
          )}

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
            {/* {isMdOrLess && <InstantBook />} */}
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
