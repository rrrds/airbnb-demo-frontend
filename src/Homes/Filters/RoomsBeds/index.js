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
  margin: 0 0 0 85px;
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
  state = {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      bedrooms: newProps.bedrooms,
      beds: newProps.beds,
      bathrooms: newProps.bathrooms,
    });
  }

  onDecrease = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] - 1,
    }));
  };

  onIncrease = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  onApply = () => {
    this.props.onApply({
      ...this.state
    });
  };

  onReset = () => {
    this.props.onApply({
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    });

    this.props.onClose();
  };

  render() {
    return (
      <SpacedPopupWrapper>
        <Type>
          <Name>Bedrooms</Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('bedrooms')}
              disabled={this.state.bedrooms < 1}
            />
            <Counter>{this.state.bedrooms}</Counter>
            <PlusButton onClick={() => this.onIncrease('bedrooms')} />
          </Actions>
        </Type>

        <Type>
          <Name>Beds</Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('beds')}
              disabled={this.state.beds < 1}
            />
            <Counter>{this.state.beds}</Counter>
            <PlusButton onClick={() => this.onIncrease('beds')} />
          </Actions>
        </Type>

        <Type>
          <Name>
            Bathrooms
          </Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('bathrooms')}
              disabled={this.state.bathrooms < 1}
            />
            <Counter>{this.state.bathrooms}</Counter>
            <PlusButton onClick={() => this.onIncrease('bathrooms')} />
          </Actions>
        </Type>
      </SpacedPopupWrapper>
    );
  }
}
