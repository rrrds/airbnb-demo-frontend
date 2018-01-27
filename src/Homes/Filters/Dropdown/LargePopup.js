import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { PopupButton, PopupOverlayWrapper } from '../../styled';

const ActionBbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px 22px 22px;
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 138px;
  bottom: 0;
  width: 66.6%;
  background: #fff;
  z-index: 20;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  overflow-x: hidden;
  overflow-y: auto;
`;

const Popup = onClickOutside(Wrapper, {
  handleClickOutside(instance) {
    return instance.props.handleClickOutside;
  },
});

export default props => (
  <PopupOverlayWrapper>
    <Popup handleClickOutside={props.onClose}>
      {props.children}
      <ActionBbar>
        <PopupButton onClick={props.onClose}>Cancel</PopupButton>
        <PopupButton onClick={props.onApply} primary>
          Apply
        </PopupButton>
      </ActionBbar>
    </Popup>
  </PopupOverlayWrapper>
);
