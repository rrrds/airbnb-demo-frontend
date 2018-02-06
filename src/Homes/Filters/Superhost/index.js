import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from 'react-toggle-switch';
import { SpacedPopupWrapper } from '../styled';
import cross from './cross.svg';
import check from './check.svg';

const Switch = styled(ToggleSwitch)`
  width: 64px;
  min-width: 64px;
  height: 40px;
  background: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 24px;
  cursor: pointer;
  display: inline-block;

  .switch-toggle {
    top: -1px;
    left: -1px;
    position: relative;
    transition: left 0.2s ease-in-out;

    background: #fff url(${props => (props.on ? check : cross)}) center no-repeat;
    border: 1px solid rgba(72, 72, 72, 0.3);
    box-sizing: border-box;
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }

  &.on {
    background: #008489;
    border: 1px solid rgba(0, 132, 137, 0.3);

    .switch-toggle {
      left: 23px;
    }
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 368px;
`;

const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #383838;
  margin-bottom: 4px;
  margin-right: 30px;
  min-width: 200px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 992px) {
    font-weight: normal;
  }
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  font-weight: 200;
  color: #383838;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 992px) {
    font-weight: normal;
  }
`;

const MoreLink = styled.a`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #0f7276;
  cursor: pointer;
`;

export default (props) => {
  const handleCheckboxChange = () => {
    props.onHandleChange({
      superhost: !props.superhost,
    });
  };

  return (
    <SpacedPopupWrapper>
      <Label>
        <Name>
          Superhost
          <Description>Stay with recognized hosts.</Description>
          <MoreLink>Learn more</MoreLink>
        </Name>
        <Switch onClick={handleCheckboxChange} on={props.superhost} />
      </Label>
    </SpacedPopupWrapper>
  );
};
