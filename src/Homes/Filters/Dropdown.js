import React from "react";
import styled from "styled-components";
import { PortalWithState } from "react-portal";
import { PopupButton, PopupOverlayWrapper } from "../styled";
import Popup from "./Popup";
import cross from "./cross.svg";

const Wrapper = styled.div`
  display: inline-block;
`;

const DayPickerBbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px 22px 22px;
`;

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

const FilterRow = styled.div`
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

export default props => {
  return (
    <Wrapper>
      {props.isActive &&
        (props.isMobile ? (
          <PortalWithState defaultOpen>
            {({ openPortal, closePortal, isOpen, portal }) =>
              portal(
                <StyledPortal>
                  <PortalRow>
                    <Title>
                      <CloseButton
                        onClick={e => {
                          props.onClose();
                          closePortal();
                        }}
                      />
                      Dates
                      <ResetButton onClick={props.onReset}>Reset</ResetButton>
                    </Title>
                    {props.mobileInfoRow}
                  </PortalRow>
                  <FilterRow>{props.filter}</FilterRow>
                  <PortalRow>
                    <SaveButton
                      onClick={e => {
                        props.onApply();
                        closePortal();
                      }}
                    >
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
                props.onClose();
              }}
            >
              {props.filter}

              <DayPickerBbar>
                <PopupButton onClick={props.onReset}>Cancel</PopupButton>
                <PopupButton onClick={props.onApply} primary>
                  Apply
                </PopupButton>
              </DayPickerBbar>
            </Popup>
          </PopupOverlayWrapper>
        ))}

      {props.button}
    </Wrapper>
  );
};