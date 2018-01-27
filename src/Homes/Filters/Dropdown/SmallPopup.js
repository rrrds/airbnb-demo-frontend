import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { PopupButton, PopupOverlayWrapper, PopupWrapper } from '../../styled';

const Overlay = PopupOverlayWrapper.extend`
  position: relative;
  display: inline-block;
`;

const Popup = onClickOutside(PopupWrapper, {
  handleClickOutside(instance) {
    return instance.props.handleClickOutside;
  },
});

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
