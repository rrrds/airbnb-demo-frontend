import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  RoundButton,
  FilterButton,
  PopupOverlayWrapper,
  PopupWrapper
} from "../styled";

const FILTER_ID = "guests";

const Wrapper = styled.div`
  display: inline-block;
`;

const DayPickerBbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px 22px 22px;
`;

const PickerButton = styled.a`
  line-height: normal;
  font-size: 16px;
  text-align: center;

  color: ${props => (props.primary ? "#0F7276" : "#636363")};
`;

class Guests extends React.Component {
  state = {
    adults: 0,
    children: 0,
    infants: 0
  };

  onDecrase = guestType => {
    this.setState(
      prevState =>
        prevState[guestType] < 1
          ? 0
          : {
              [guestType]: prevState[guestType] - 1
            }
    );
  };

  onIncrease = guestType => {
    this.setState(prevState => ({
      [guestType]: prevState[guestType] + 1
    }));
  };

  render() {
    return (
      <Wrapper>
        {this.props.activeFilter === FILTER_ID && (
          <PopupOverlayWrapper>
            <PopupWrapper>
              <Grid>
                <Row>
                  <Col>Adults</Col>
                  <Col>
                    <RoundButton onClick={e => this.onDecrase("adults", e)}>
                      -
                    </RoundButton>
                    <span>{this.state.adults}</span>
                    <RoundButton onClick={e => this.onIncrease("adults", e)}>
                      +
                    </RoundButton>
                  </Col>
                </Row>
                <Row>
                  <Col>Children</Col>
                  <Col>
                    <RoundButton onClick={e => this.onDecrase("children", e)}>
                      -
                    </RoundButton>
                    <span>{this.state.children}</span>
                    <RoundButton onClick={e => this.onIncrease("children", e)}>
                      +
                    </RoundButton>
                  </Col>
                </Row>
                <Row>
                  <Col>Infants</Col>
                  <Col>
                    <RoundButton onClick={e => this.onDecrase("infants", e)}>
                      -
                    </RoundButton>
                    <span>{this.state.infants}</span>
                    <RoundButton onClick={e => this.onIncrease("infants", e)}>
                      +
                    </RoundButton>
                  </Col>
                </Row>
              </Grid>
            </PopupWrapper>
          </PopupOverlayWrapper>
        )}
        <FilterButton
          onClick={e => this.props.onButtonClick(FILTER_ID, e)}
          active={this.props.activeFilter === FILTER_ID}
        >
          Guests
        </FilterButton>
      </Wrapper>
    );
  }
}

export default Guests;
