import React from "react";
import styled from "styled-components";
import {
  RoundButton,
  PopupButton,
  FilterButton,
  PopupOverlayWrapper,
  PopupWrapper
} from "../styled";

const filterId = "guests";

const Wrapper = styled.div`
  display: inline-block;
`;

const SpacedPopupWrapper = PopupWrapper.extend`
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

  render() {
    return (
      <Wrapper>
        {this.props.activeFilter === filterId && (
          <PopupOverlayWrapper>
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
              <TypeRow>
                <PopupButton>Cancel</PopupButton>
                <PopupButton primary>Apply</PopupButton>
              </TypeRow>
            </SpacedPopupWrapper>
          </PopupOverlayWrapper>
        )}
        <FilterButton
          onClick={e => this.props.onButtonClick(filterId, e)}
          active={this.props.activeFilter === filterId}
        >
          Guests
        </FilterButton>
      </Wrapper>
    );
  }
}

export default Guests;
