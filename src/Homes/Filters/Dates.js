import React from "react";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Button from "./Button";
import moment from "moment";

const FILTER_ID = "dates";

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

const PickerButton = styled.button`
  line-height: normal;
  font-size: 16px;
  text-align: center;

  color: ${props => (props.primary ? "#0F7276" : "#636363")};

  border: none;
  background: none;
  cursor: pointer;
`;

export default props => {
  return (
    <Wrapper>
      {props.activeFilter === FILTER_ID && (
        <DayPickerOverlayWrapper>
          <DayPickerWrapper>
            <DayPickerRangeController
              startDate={props.startDate}
              endDate={props.endDate}
              onDatesChange={props.onDatesChange}
              focusedInput={props.focusedInput}
              onFocusChange={props.onFocusChange}
              numberOfMonths={2}
              hideKeyboardShortcutsPanel={true}
              orientation={
                window.matchMedia("(max-width: 400px)").matches
                  ? "vertical"
                  : "horizontal"
              }
              renderCalendarInfo={() => (
                <DayPickerBbar>
                  <PickerButton onClick={props.onCancel}>Cancel</PickerButton>
                  <PickerButton onClick={props.onApply} primary>
                    Apply
                  </PickerButton>
                </DayPickerBbar>
              )}
            />
          </DayPickerWrapper>
        </DayPickerOverlayWrapper>
      )}
      <Button
        onClick={e => props.onButtonClick(FILTER_ID, e)}
        active={props.activeFilter === FILTER_ID}
      >
        {props.startDate || props.endDate || props.activeFilter === FILTER_ID
          ? (props.startDate
              ? moment(props.startDate).format("MMM Do")
              : "Check in") +
            " - " +
            (props.endDate
              ? moment(props.endDate).format("MMM Do")
              : "Check out")
          : "Dates"}
      </Button>
    </Wrapper>
  );
};
