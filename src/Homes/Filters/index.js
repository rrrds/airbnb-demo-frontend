import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import { FilterButton } from "../styled";
import Dates from "./Dates";
import Guests from "./Guests";

const isMobile = window.matchMedia("(max-width: 400px)").matches;

class Filters extends React.Component {
  state = {
    activeFilter: false,

    focusedInput: "startDate",
    startDate: null,
    endDate: null
  };

  toggleOpen = filterId => {
    this.setState(prevState => ({
      activeFilter: prevState.activeFilter === filterId ? false : filterId
    }));
  };

  onCancel = e => {
    this.setState({ activeFilter: false, startDate: null, endDate: null });
  };

  onApply = e => {
    this.setState({ activeFilter: false });
  };

  onReset = e => {
    this.setState({
      focusedInput: "startDate",
      startDate: null,
      endDate: null
    });
  };

  onClose = e => {
    this.setState({ activeFilter: false });
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
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />
            <Guests
              onButtonClick={this.toggleOpen}
              activeFilter={this.state.activeFilter}
              isMobile={isMobile}
            />
            <FilterButton
              onClick={e => this.toggleOpen("roomtype", e)}
              active={this.state.activeFilter === "roomtype"}
              className="hidden-xs hidden-md"
            >
              Room type
            </FilterButton>
            <FilterButton
              onClick={e => this.toggleOpen("price", e)}
              active={this.state.activeFilter === "price"}
              className="hidden-xs hidden-md"
            >
              Price
            </FilterButton>
            <FilterButton
              onClick={e => this.toggleOpen("book", e)}
              active={this.state.activeFilter === "book"}
              className="hidden-xs hidden-md"
            >
              Instant book
            </FilterButton>

            <FilterButton
              onClick={e => this.toggleOpen("more", e)}
              active={this.state.activeFilter === "more"}
            >
              More filters
            </FilterButton>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Filters;
