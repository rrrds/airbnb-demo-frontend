import React from "react";
import styled from "styled-components";
import { DayPickerRangeController, isInclusivelyAfterDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { FilterButton } from "../styled";
import moment from "moment";
import arrow from "./arrow.svg";
import Dropdown from "./Dropdown";

const filterId = "dates";

const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  line-height: normal;
  font-size: 18px;
  color: #636363;
`;

const ArrowImg = styled.img`
  margin: 0 16px;
`;

const formatButtonText = (value, defaultText) => {
  return value ? moment(value).format("MMM Do") : defaultText;
};

const getNumberOfMonths = () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    return 2;
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    return 1;
  } else {
    return 4;
  }
};

class Dates extends React.Component {
  state = {
    focusedInput: "startDate",
    startDate: null,
    endDate: null
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      focusedInput: newProps.startDate ? "endDate" : "startDate",
      startDate: newProps.startDate,
      endDate: newProps.endDate
    });
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate: startDate, endDate: endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onReset = () => {
    this.props.onApply({
      startDate: null,
      endDate: null
    });

    this.props.onClose();
  };

  hasSelectedDates = () => {
    return this.props.startDate || this.props.endDate;
  };

  getButtonText = () => {
    return this.props.isActive || this.hasSelectedDates()
      ? formatButtonText(this.state.startDate, "Check in") +
          " — " +
          formatButtonText(this.state.endDate, "Check out")
      : "Dates";
  };

  render() {
    const picker = (
      <DayPickerRangeController
        hideKeyboardShortcutsPanel={true}
        noBorder={true}
        isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.focusedInput}
        onFocusChange={this.onFocusChange}
        numberOfMonths={getNumberOfMonths()}
        orientation={this.props.isMobile ? "verticalScrollable" : "horizontal"}
      />
    );

    const mobileInfoRow = (
      <Info>
        <span>{formatButtonText(this.state.startDate, "Check in")}</span>
        <ArrowImg src={arrow} alt="From — To" />
        <span>{formatButtonText(this.state.endDate, "Check out")}</span>
      </Info>
    );

    const button = (
      <FilterButton
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive || this.hasSelectedDates()}
      >
        {this.getButtonText()}
      </FilterButton>
    );

    return (
      <Dropdown
        isActive={this.props.isActive}
        isMobile={this.props.isMobile}
        filter={picker}
        button={button}
        mobileInfoRow={mobileInfoRow}
        onClose={this.props.onClose}
        onApply={e =>
          this.props.onApply(
            {
              startDate: this.state.startDate,
              endDate: this.state.endDate
            },
            e
          )
        }
        onReset={this.onReset}
      />
    );
  }
}

export default Dates;
