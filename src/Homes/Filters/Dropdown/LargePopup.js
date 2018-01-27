import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { PopupButton, PopupOverlayWrapper } from '../../styled';

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
  display: flex;
  flex-direction: column;
`;

const Popup = onClickOutside(Wrapper, {
  handleClickOutside(instance) {
    return instance.props.handleClickOutside;
  },
});

const MainContainer = styled.div`
  flex: 1 1 auto;
  padding: 47px 16px 0 81px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ActionBbar = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  padding: 8px 16px;
  background: #fff;
`;

const Button = PopupButton.extend`
  font-size: 18px;
  font-weight: ${props => (props.primary ? 'bold' : 'normal')};
  color: ${props => (props.primary ? '#fff' : '#383838')};
  background: ${props => (props.primary ? '#008489' : '#fff')};
  border-radius: 4px;
  padding: ${props => (props.primary ? '12px 28px' : '12px')};
  margin-left: 16px;
`;

export default props => (
  <PopupOverlayWrapper>
    <Popup handleClickOutside={props.onClose}>
      <MainContainer>{props.children}</MainContainer>
      <ActionBbar>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onApply} primary>
          See homes
        </Button>
      </ActionBbar>
    </Popup>
  </PopupOverlayWrapper>
);
