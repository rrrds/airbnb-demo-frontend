import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';
import { RoundButton, FilterButton } from '../styled';
import { SpacedPopupWrapper } from './styled';
import Dropdown from './Dropdown';
import ResponsivePopup from './Dropdown/ResponsivePopup';
import minus from './minus.svg';
import plus from './plus.svg';

const filterId = 'guests';

const GuestAge = styled.div`
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

const Actions = GuestAge.extend`
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

const Description = Name.extend`
  font-size: 16px;
  font-weight: 200;
  margin-top: 7px;
`;

const getButtonText = (showSelectedData, guestsData) => {
  if (showSelectedData) {
    const adultTotal = guestsData.adultsCount + guestsData.childrenCount;
    const buttonText = `${adultTotal} ${pluralize('guest', adultTotal)}`;

    if (guestsData.infantsCount > 0) {
      return `${buttonText}, ${guestsData.infantsCount} ${pluralize('infant', guestsData.infantsCount)}`;
    }

    return buttonText;
  }

  return 'Guests';
};

class Guests extends React.Component {
  state = {
    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      adultsCount: newProps.adultsCount,
      childrenCount: newProps.childrenCount,
      infantsCount: newProps.infantsCount,
    });
  }

  onDecrease = (guestType) => {
    this.setState(prevState => ({
      [guestType]: prevState[guestType] - 1,
    }));
  };

  onIncrease = (guestType) => {
    this.setState(prevState => ({
      [guestType]: prevState[guestType] + 1,
    }));
  };

  onApply = () => {
    this.props.onApply({
      adultsCount: this.state.adultsCount,
      childrenCount: this.state.childrenCount,
      infantsCount: this.state.infantsCount,
    });
  };

  onReset = () => {
    this.props.onApply({
      adultsCount: 1,
      childrenCount: 0,
      infantsCount: 0,
    });

    this.props.onClose();
  };

  render() {
    const GuestSelect = (
      <SpacedPopupWrapper>
        <GuestAge>
          <Name>Adults</Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('adultsCount')}
              disabled={this.state.adultsCount < 1}
            />
            <Counter>{this.state.adultsCount}</Counter>
            <PlusButton onClick={() => this.onIncrease('adultsCount')} />
          </Actions>
        </GuestAge>

        <GuestAge>
          <Name>
            Children<Description>Ages 2 — 12</Description>
          </Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('childrenCount')}
              disabled={this.state.childrenCount < 1}
            />
            <Counter>{this.state.childrenCount}</Counter>
            <PlusButton onClick={() => this.onIncrease('childrenCount')} />
          </Actions>
        </GuestAge>

        <GuestAge>
          <Name>
            Infants<Description>Under 2</Description>
          </Name>
          <Actions>
            <MinusButton
              onClick={() => this.onDecrease('infantsCount')}
              disabled={this.state.infantsCount < 1}
            />
            <Counter>{this.state.infantsCount}</Counter>
            <PlusButton onClick={() => this.onIncrease('infantsCount')} />
          </Actions>
        </GuestAge>
      </SpacedPopupWrapper>
    );

    const guestsTotal = this.state.adultsCount + this.state.childrenCount + this.state.infantsCount;

    const Button = (
      <FilterButton
        onClick={() => this.props.onButtonClick(filterId)}
        active={this.props.isActive || guestsTotal > 1}
      >
        {getButtonText(this.props.isActive || guestsTotal > 1, this.state)}
      </FilterButton>
    );

    return (
      <Dropdown>
        <ResponsivePopup
          isActive={this.props.isActive}
          isMobile={this.props.isMobile}
          onClose={this.props.onClose}
          onApply={this.onApply}
          onReset={this.onReset}
          name="Guests"
        >
          {GuestSelect}
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default Guests;
