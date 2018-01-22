import React from "react";
import styled from "styled-components";
import { RoundButton, FilterButton } from "../styled";
import Dropdown from "./Dropdown";

const filterId = "guests";

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

const pluralize = (word, count) => {
  return count > 1 ? word + "s" : word;
};

const getButtonText = (showSelectedData, guestsTotal) => {
  return showSelectedData
    ? `${guestsTotal} ${pluralize("guest", guestsTotal)}`
    : "Guests";
};

class Guests extends React.Component {
  state = {
    adults: 0,
    children: 0,
    infants: 0
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      adults: newProps.adults,
      children: newProps.children,
      infants: newProps.infants
    });
  }

  onDecrease = guestType => {
    this.setState(prevState => ({
      [guestType]: prevState[guestType] - 1
    }));
  };

  onIncrease = guestType => {
    this.setState(prevState => ({
      [guestType]: prevState[guestType] + 1
    }));
  };

  onReset = e => {
    this.props.onApply({
      adults: 1,
      children: 0,
      infants: 0
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
              onClick={e => this.onDecrease("adults", e)}
              disabled={this.state.adults < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.adults}</Counter>
            <RoundButton onClick={e => this.onIncrease("adults", e)}>
              +
            </RoundButton>
          </Actions>
        </GuestAge>

        <GuestAge>
          <Name>
            Children<Description>Ages 2 — 12</Description>
          </Name>
          <Actions>
            <RoundButton
              onClick={e => this.onDecrease("children", e)}
              disabled={this.state.children < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.children}</Counter>
            <RoundButton onClick={e => this.onIncrease("children", e)}>
              +
            </RoundButton>
          </Actions>
        </GuestAge>

        <GuestAge>
          <Name>
            Infants<Description>Under 2</Description>
          </Name>
          <Actions>
            <RoundButton
              onClick={e => this.onDecrease("infants", e)}
              disabled={this.state.infants < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.infants}</Counter>
            <RoundButton onClick={e => this.onIncrease("infants", e)}>
              +
            </RoundButton>
          </Actions>
        </GuestAge>
      </SpacedPopupWrapper>
    );

    const guestsTotal =
      this.state.adults + this.state.children + this.state.infants;

    const button = (
      <FilterButton
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive || guestsTotal > 1}
      >
        {getButtonText(this.props.isActive || guestsTotal > 1, guestsTotal)}
      </FilterButton>
    );

    return (
      <Dropdown
        isActive={this.props.isActive}
        isMobile={this.props.isMobile}
        filterComponent={GuestSelect}
        button={button}
        onClose={this.props.onClose}
        onApply={e =>
          this.props.onApply(
            {
              adults: this.state.adults,
              children: this.state.children,
              infants: this.state.infants
            },
            e
          )
        }
        onReset={this.onReset}
      />
    );
  }
}

export default Guests;
