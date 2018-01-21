import React from "react";
import styled from "styled-components";
import { PopupButton, PopupOverlayWrapper } from "../../styled";
import Popup from "../Popup";

const ActionBbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px 22px 22px;
`;

export default props => {
  return (
    <PopupOverlayWrapper>
      <Popup
        handleClickOutside={() => {
          props.onClose();
        }}
      >
        {props.filterComponent}

        <ActionBbar>
          <PopupButton onClick={props.onReset}>Cancel</PopupButton>
          <PopupButton onClick={props.onApply} primary>
            Apply
          </PopupButton>
        </ActionBbar>
      </Popup>
    </PopupOverlayWrapper>
  );
};
