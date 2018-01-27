import React from 'react';
import styled from 'styled-components';
import { PopupButton, PopupOverlayWrapper } from '../../styled';
import Popup from '../Popup';

const Overlay = PopupOverlayWrapper.extend`
  position: relative;
  display: inline-block;
`;

const ActionBbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px 22px 22px;
`;

export default props => (
  <Overlay>
    <Popup handleClickOutside={props.onClose}>
      {props.children}
      <ActionBbar>
        <PopupButton onClick={props.onClose}>Cancel</PopupButton>
        <PopupButton onClick={props.onApply} primary>
          Apply
        </PopupButton>
      </ActionBbar>
    </Popup>
  </Overlay>
);
