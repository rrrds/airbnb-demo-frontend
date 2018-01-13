import React from "react";
import styled from "styled-components";
import { DayPickerRangeController, isInclusivelyAfterDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {
  FilterButton,
  PopupButton,
  PopupOverlayWrapper,
  PopupWrapper
} from "../styled";
import moment from "moment";
import { PortalWithState } from "react-portal";
import x from "./x.svg";
import arrow from "./arrow.svg";

const FILTER_ID = "dates";

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
  background: url(${x});
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

export default props => {
  const isMobile = window.matchMedia("(max-width: 400px)").matches;

  const picker = (
    <DayPickerRangeController
      startDate={props.startDate}
      endDate={props.endDate}
      onDatesChange={props.onDatesChange}
      focusedInput={props.focusedInput}
      onFocusChange={props.onFocusChange}
      numberOfMonths={isMobile ? 4 : 2}
      hideKeyboardShortcutsPanel={true}
      orientation={isMobile ? "verticalScrollable" : "horizontal"}
      noBorder={true}
      isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
    />
  );

  return (
    <Wrapper>
      {props.activeFilter === FILTER_ID &&
        (isMobile ? (
          <PortalWithState defaultOpen>
            {({ openPortal, closePortal, isOpen, portal }) =>
              portal(
                <StyledPortal>
                  <PortalRow>
                    <Title>
                      <CloseButton onClick={closePortal && props.onClose} />
                      Dates
                      <ResetButton onClick={props.onReset}>Reset</ResetButton>
                    </Title>
                    <Info>
                      <span>
                        {props.startDate
                          ? moment(props.startDate).format("MMM Do")
                          : "Check in"}
                      </span>
                      <ArrowImg src={arrow} alt="From — To" />
                      <span>
                        {props.endDate
                          ? moment(props.endDate).format("MMM Do")
                          : "Check out"}
                      </span>
                    </Info>
                  </PortalRow>
                  <PickerRow>{picker}</PickerRow>
                  <PortalRow>
                    <SaveButton onClick={closePortal && props.onApply}>
                      Save
                    </SaveButton>
                  </PortalRow>
                </StyledPortal>
              )
            }
          </PortalWithState>
        ) : (
          <PopupOverlayWrapper>
            <PopupWrapper>
              {picker}
              <DayPickerBbar>
                <PopupButton onClick={props.onClose}>Cancel</PopupButton>
                <PopupButton onClick={props.onApply} primary>
                  Apply
                </PopupButton>
              </DayPickerBbar>
            </PopupWrapper>
          </PopupOverlayWrapper>
        ))}
      <FilterButton
        onClick={e => props.onButtonClick(FILTER_ID, e)}
        active={
          props.activeFilter === FILTER_ID || props.startDate || props.endDate
        }
      >
        {props.startDate || props.endDate || props.activeFilter === FILTER_ID
          ? (props.startDate
              ? moment(props.startDate).format("MMM Do")
              : "Check in") +
            " — " +
            (props.endDate
              ? moment(props.endDate).format("MMM Do")
              : "Check out")
          : "Dates"}
      </FilterButton>
    </Wrapper>
  );
};
