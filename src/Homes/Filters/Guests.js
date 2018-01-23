import React from 'react';
import styled from 'styled-components';
import { RoundButton, FilterButton } from '../styled';
import Dropdown from './Dropdown';
import ResponsivePopup from './Dropdown/ResponsivePopup';

const filterId = 'guests';

const SpacedPopupWrapper = styled.div`
  padding: 24px 15px 0 24px;
`;

const GuestAge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const Actions = GuestAge.extend`
  margin: 0 0 0 85px;
`;

const Counter = styled.div`
  min-width: 50px;
  text-align: center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: nowrap;
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const Description = Name.extend`
  font-size: 16px;
  margin-top: 7px;
`;

const pluralize = (word, count) => (count > 1 ? `${word}s` : word);

const getButtonText = (showSelectedData, guestsTotal) =>
  (showSelectedData ? `${guestsTotal} ${pluralize('guest', guestsTotal)}` : 'Guests');

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
            <RoundButton
              onClick={() => this.onDecrease('adultsCount')}
              disabled={this.state.adultsCount < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.adultsCount}</Counter>
            <RoundButton onClick={() => this.onIncrease('adultsCount')}>+</RoundButton>
          </Actions>
        </GuestAge>

        <GuestAge>
          <Name>
            Children<Description>Ages 2 — 12</Description>
          </Name>
          <Actions>
            <RoundButton
              onClick={() => this.onDecrease('childrenCount')}
              disabled={this.state.childrenCount < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.childrenCount}</Counter>
            <RoundButton onClick={() => this.onIncrease('childrenCount')}>+</RoundButton>
          </Actions>
        </GuestAge>

        <GuestAge>
          <Name>
            Infants<Description>Under 2</Description>
          </Name>
          <Actions>
            <RoundButton
              onClick={() => this.onDecrease('infantsCount')}
              disabled={this.state.infantsCount < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.infantsCount}</Counter>
            <RoundButton onClick={() => this.onIncrease('infantsCount')}>+</RoundButton>
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
        {getButtonText(this.props.isActive || guestsTotal > 1, guestsTotal)}
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
        >
          {GuestSelect}
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default Guests;
