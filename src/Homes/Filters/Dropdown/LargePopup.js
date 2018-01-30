import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { PopupButton, PopupOverlayWrapper } from '../../styled';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 138px;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 20;
  border: none;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
    width: -webkit-calc(50% - 992px / 2 + 992px * 0.66);
    width: -o-calc(50% - 992px / 2 + 992px * 0.66);
    width: calc(50% - 992px / 2 + 992px * 0.66);
  }

  @media only screen and (min-width: 1200px) {
    width: -webkit-calc(50% - 1200px / 2 + 1200px * 0.66);
    width: -o-calc(50% - 1200px / 2 + 1200px * 0.66);
    width: calc(50% - 1200px / 2 + 1200px * 0.66);
  }
`;

const Popup = onClickOutside(Wrapper, {
  handleClickOutside(instance) {
    return instance.props.handleClickOutside;
  },
});

const MainContainer = styled.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ActionBbar = styled.div`
  display: flex;
  flex: 0 0 auto;
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
