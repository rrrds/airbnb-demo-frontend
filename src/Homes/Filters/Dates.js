import React from "react";
import styled from "styled-components";
import { DayPickerRangeController, isInclusivelyAfterDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { FilterButton, PopupButton, PopupOverlayWrapper } from "../styled";
import moment from "moment";
import { PortalWithState } from "react-portal";
import Popup from "./Popup";
import cross from "./cross.svg";
import arrow from "./arrow.svg";

const filterId = "dates";

const StyledPortal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  z-index: 2000;
  overflow-y: hidden;

  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
`;

const PortalRow = styled.div`
  flex: 1 0 auto;
  padding: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #d5d5d5;
`;

const PickerRow = styled.div`
  flex: 0 1 auto;
  flex-basis: 100%;
`;

const Title = styled.div`
  line-height: normal;
  font-size: 14px;
  color: #383838;
  padding: 8px 0 40px 0;
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  line-height: normal;
  font-size: 18px;
  color: #636363;
`;

const SaveButton = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  line-height: normal;
  font-size: 18px;
  color: #fff;
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  background: url(${cross});
  width: 16px;
  height: 16px;
`;

const ResetButton = styled.button`
  line-height: normal;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  color: #0f7276;
`;

const ArrowImg = styled.img`
  margin: 0 16px;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const DayPickerBbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px 22px 22px;
`;

const isActiveFilter = currentFilterId => {
  return currentFilterId === filterId;
};

class Dates extends React.Component {
  hasSelectedDates() {
    return this.props.startDate || this.props.endDate;
  }

  render() {
    const picker = (
      <DayPickerRangeController
        hideKeyboardShortcutsPanel={true}
        noBorder={true}
        isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        onDatesChange={this.props.onDatesChange}
        focusedInput={this.props.focusedInput}
        onFocusChange={this.props.onFocusChange}
        numberOfMonths={this.props.isMobile ? 4 : 2}
        orientation={this.props.isMobile ? "verticalScrollable" : "horizontal"}
      />
    );

    return (
      <Wrapper>
        {isActiveFilter(this.props.activeFilter) &&
          (this.props.isMobile ? (
            <PortalWithState defaultOpen>
              {({ openPortal, closePortal, isOpen, portal }) =>
                portal(
                  <StyledPortal>
                    <PortalRow>
                      <Title>
                        <CloseButton
                          onClick={closePortal && this.props.onClose}
                        />
                        Dates
                        <ResetButton onClick={this.props.onReset}>
                          Reset
                        </ResetButton>
                      </Title>
                      <Info>
                        <span>
                          {this.props.startDate
                            ? moment(this.props.startDate).format("MMM Do")
                            : "Check in"}
                        </span>
                        <ArrowImg src={arrow} alt="From — To" />
                        <span>
                          {this.props.endDate
                            ? moment(this.props.endDate).format("MMM Do")
                            : "Check out"}
                        </span>
                      </Info>
                    </PortalRow>
                    <PickerRow>{picker}</PickerRow>
                    <PortalRow>
                      <SaveButton onClick={closePortal && this.props.onApply}>
                        Save
                      </SaveButton>
                    </PortalRow>
                  </StyledPortal>
                )
              }
            </PortalWithState>
          ) : (
            <PopupOverlayWrapper>
              <Popup
                handleClickOutside={() => {
                  this.props.onReset();
                  this.props.onClose();
                }}
              >
                {picker}
                <DayPickerBbar>
                  <PopupButton onClick={this.props.onClose}>Cancel</PopupButton>
                  <PopupButton onClick={this.props.onApply} primary>
                    Apply
                  </PopupButton>
                </DayPickerBbar>
              </Popup>
            </PopupOverlayWrapper>
          ))}

        <FilterButton
          onClick={e => this.props.onButtonClick(filterId, e)}
          active={
            isActiveFilter(this.props.activeFilter) || this.hasSelectedDates()
          }
        >
          {isActiveFilter(this.props.activeFilter) || this.hasSelectedDates()
            ? (this.props.startDate
                ? moment(this.props.startDate).format("MMM Do")
                : "Check in") +
              " — " +
              (this.props.endDate
                ? moment(this.props.endDate).format("MMM Do")
                : "Check out")
            : "Dates"}
        </FilterButton>
      </Wrapper>
    );
  }
}

export default Dates;
