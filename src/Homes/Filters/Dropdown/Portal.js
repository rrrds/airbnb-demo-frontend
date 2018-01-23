import React from 'react';
import styled from 'styled-components';
import { PortalWithState } from 'react-portal';
import cross from './cross.svg';

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

const Header = styled.div`
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

const FilterRow = styled.div`
  flex: 0 1 auto;
  flex-basis: 100%;
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

export default props => (
  <PortalWithState defaultOpen>
    {({ closePortal, portal }) => {
      const onClose = () => {
        props.onClose();
        closePortal();
      };

      const onApply = () => {
        props.onApply();
        closePortal();
      };

      const PortalContent = (
        <StyledPortal>
          <PortalRow>
            <Header>
              <CloseButton onClick={onClose} />
              Dates
              <ResetButton onClick={props.onReset}>Reset</ResetButton>
            </Header>
            {props.mobileInfoRow}
          </PortalRow>
          <FilterRow>{props.children}</FilterRow>
          <PortalRow>
            <SaveButton onClick={onApply}>Save</SaveButton>
          </PortalRow>
        </StyledPortal>
      );

      portal(PortalContent);
    }}
  </PortalWithState>
);
