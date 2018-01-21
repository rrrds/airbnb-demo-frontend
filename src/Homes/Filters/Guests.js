import React from "react";
import styled from "styled-components";
import { RoundButton, FilterButton } from "../styled";
import Dropdown from "./Dropdown";

const filterId = "guests";

const SpacedPopupWrapper = styled.div`
  padding: 24px 15px 0 24px;
`;

const TypeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const ActionRow = TypeRow.extend`
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

const NameAside = Name.extend`
  font-size: 16px;
  margin-top: 7px;
`;

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

  onDecrase = guestType => {
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
    const guestSelect = (
      <SpacedPopupWrapper>
        <TypeRow>
          <Name>Adults</Name>
          <ActionRow>
            <RoundButton
              onClick={e => this.onDecrase("adults", e)}
              disabled={this.state.adults < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.adults}</Counter>
            <RoundButton onClick={e => this.onIncrease("adults", e)}>
              +
            </RoundButton>
          </ActionRow>
        </TypeRow>

        <TypeRow>
          <Name>
            Children<NameAside>Ages 2 — 12</NameAside>
          </Name>
          <ActionRow>
            <RoundButton
              onClick={e => this.onDecrase("children", e)}
              disabled={this.state.children < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.children}</Counter>
            <RoundButton onClick={e => this.onIncrease("children", e)}>
              +
            </RoundButton>
          </ActionRow>
        </TypeRow>

        <TypeRow>
          <Name>
            Infants<NameAside>Under 2</NameAside>
          </Name>
          <ActionRow>
            <RoundButton
              onClick={e => this.onDecrase("infants", e)}
              disabled={this.state.infants < 1}
            >
              -
            </RoundButton>
            <Counter>{this.state.infants}</Counter>
            <RoundButton onClick={e => this.onIncrease("infants", e)}>
              +
            </RoundButton>
          </ActionRow>
        </TypeRow>
      </SpacedPopupWrapper>
    );

    const button = (
      <FilterButton
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive}
      >
        Guests
      </FilterButton>
    );

    return (
      <Dropdown
        isActive={this.props.isActive}
        isMobile={this.props.isMobile}
        filter={guestSelect}
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
