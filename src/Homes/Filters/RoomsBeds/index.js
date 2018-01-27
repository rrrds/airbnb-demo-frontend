import React from 'react';
import styled from 'styled-components';
import { RoundButton, FilterButton } from '../../styled';
import minus from '../minus.svg';
import plus from '../plus.svg';

const filterId = 'roomsbeds';

const SpacedPopupWrapper = styled.div`
  padding: 24px 15px 0 24px;
`;

const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const MinusButton = RoundButton.extend`
  background: url(${minus}) center no-repeat;
`;

const PlusButton = RoundButton.extend`
  background: url(${plus}) center no-repeat;
`;

const Actions = Type.extend`
  margin: 0 0 0 60px;
`;

const Counter = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  min-width: 50px;
  text-align: center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-family: CircularAir;
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

export default class RoomsBeds extends React.Component {
  onDecrease = (type) => {
    this.props.onHandleChange({
      [type]: this.props[type] - 1,
    });
  };

  onIncrease = (type) => {
    this.props.onHandleChange({
      [type]: this.props[type] + 1,
    });
  };

  render() {
    return (
      <SpacedPopupWrapper>
        <Type>
          <Name>Bedrooms</Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('bedrooms')}
              disabled={this.props.bedrooms < 1}
            />
            <Counter>{this.props.bedrooms}+</Counter>
            <PlusButton onClick={() => this.onIncrease('bedrooms')} />
          </Actions>
        </Type>

        <Type>
          <Name>Beds</Name>
          <Actions>
            <MinusButton onClick={() => this.onDecrease('beds')} disabled={this.props.beds < 1} />
            <Counter>{this.props.beds}+</Counter>
            <PlusButton onClick={() => this.onIncrease('beds')} />
          </Actions>
        </Type>

        <Type>
          <Name>Bathrooms</Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('bathrooms')}
              disabled={this.props.bathrooms < 1}
            />
            <Counter>{this.props.bathrooms}+</Counter>
            <PlusButton onClick={() => this.onIncrease('bathrooms')} />
          </Actions>
        </Type>
      </SpacedPopupWrapper>
    );
  }
}
