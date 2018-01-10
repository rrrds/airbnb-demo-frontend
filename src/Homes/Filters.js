import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  background-color: #fff;

  line-height: normal;
  font-size: 14px;
  color: #383838;
`;

const DayPickerOverlayWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DayPickerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 15px;
  background: #fff;
`;

class Filters extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = e => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Grid>
        <Row middle="xs" start="xs">
          <Col xs={12}>
            {this.state.isOpen && (
              <DayPickerOverlayWrapper>
                <DayPickerWrapper>
                  <DayPicker />
                </DayPickerWrapper>
              </DayPickerOverlayWrapper>
            )}
            <Button onClick={this.toggleOpen}>
              {this.state.isOpen ? "Check in — Check out" : "Dates"}
            </Button>

            <Button>Guests</Button>
            <Button>Room type</Button>
            <Button>Price</Button>
            <Button>Instant book</Button>
            <Button>More filters</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Filters;
