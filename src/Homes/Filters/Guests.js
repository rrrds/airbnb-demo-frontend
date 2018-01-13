import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Button from "./Button";

const FILTER_ID = "guests";

const Wrapper = styled.div`
  display: inline-block;
`;

const DayPickerOverlayWrapper = styled.div`
  position: relative;
  display: inline-block;

  :before {
    content: "";
    position: fixed;
    background: #fff;
    mix-blend-mode: normal;
    opacity: 0.8;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -50;
  }
`;

const DayPickerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 15px;
  background: #fff;
  z-index: 20;
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
          <DayPickerOverlayWrapper>
            <DayPickerWrapper>
              <Grid>
                <Row>
                  <Col>Adults</Col>
                  <Col>
                    <button onClick={e => this.onDecrase("adults", e)}>
                      -
                    </button>
                    <span>{this.state.adults}</span>
                    <button onClick={e => this.onIncrease("adults", e)}>
                      +
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col>Children</Col>
                  <Col>
                    <button onClick={e => this.onDecrase("children", e)}>
                      -
                    </button>
                    <span>{this.state.children}</span>
                    <button onClick={e => this.onIncrease("children", e)}>
                      +
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col>Infants</Col>
                  <Col>
                    <button onClick={e => this.onDecrase("infants", e)}>
                      -
                    </button>
                    <span>{this.state.infants}</span>
                    <button onClick={e => this.onIncrease("infants", e)}>
                      +
                    </button>
                  </Col>
                </Row>
              </Grid>
            </DayPickerWrapper>
          </DayPickerOverlayWrapper>
        )}
        <Button
          onClick={e => this.props.onButtonClick(FILTER_ID, e)}
          active={this.props.activeFilter === FILTER_ID}
        >
          Guests
        </Button>
      </Wrapper>
    );
  }
}

export default Guests;
