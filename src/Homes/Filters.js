import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  background-color: ${props => (props.active ? "#008489" : "#fff")};

  line-height: normal;
  font-size: 14px;
  color: ${props => (props.active ? "#fff" : "#383838")};
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
    isOpen: false,

    focusedInput: "startDate",
    startDate: null,
    endDate: null
  };

  toggleOpen = e => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate: startDate, endDate: endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  render() {
    return (
      <Grid>
        <Row middle="xs" start="xs">
          <Col xs={12}>
            {this.state.isOpen && (
              <DayPickerOverlayWrapper>
                <DayPickerWrapper>
                  <DayPickerRangeController
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={2}
                    hideKeyboardShortcutsPanel={true}
                    renderCalendarInfo={() => <div>buttons</div>}
                  />
                </DayPickerWrapper>
              </DayPickerOverlayWrapper>
            )}
            <Button onClick={this.toggleOpen} active={this.state.isOpen}>
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
