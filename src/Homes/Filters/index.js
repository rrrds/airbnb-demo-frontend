import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Button from "./Button";
import Dates from "./Dates";

class Filters extends React.Component {
  state = {
    activeFilter: false,

    focusedInput: "startDate",
    startDate: null,
    endDate: null
  };

  toggleOpen = buttonId => {
    this.setState(prevState => ({
      activeFilter: prevState.activeFilter === buttonId ? false : buttonId
    }));
  };

  onCancel = e => {
    this.setState({ activeFilter: false, startDate: null, endDate: null });
  };

  onApply = e => {
    this.setState({ activeFilter: false });
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
            <Dates
              activeFilter={this.state.activeFilter}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.onFocusChange}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onCancel={this.onCancel}
            />
            <Button
              onClick={e => this.toggleOpen("guests", e)}
              active={this.state.activeFilter === "guests"}
            >
              Guests
            </Button>
            <Button
              onClick={e => this.toggleOpen("roomtype", e)}
              active={this.state.activeFilter === "roomtype"}
            >
              Room type
            </Button>
            <Button
              onClick={e => this.toggleOpen("price", e)}
              active={this.state.activeFilter === "price"}
            >
              Price
            </Button>
            <Button
              onClick={e => this.toggleOpen("book", e)}
              active={this.state.activeFilter === "book"}
            >
              Instant book
            </Button>
            <Button
              onClick={e => this.toggleOpen("more", e)}
              active={this.state.activeFilter === "more"}
            >
              More filters
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Filters;
