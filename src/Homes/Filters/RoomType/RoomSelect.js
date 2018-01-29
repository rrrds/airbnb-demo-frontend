import React from 'react';
import styled from 'styled-components';
import { SpacedPopupWrapper } from '../styled';
import iconEntire from './entire.svg';
import iconPrivate from './private.svg';
import iconshared from './shared.svg';
import iconCheckOn from './check-on.svg';

const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const Label = styled.label`
  display: flex;
  padding: 0 0 0 36px;
  position: relative;
  cursor: pointer;
  min-width: 300px;
`;

const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const Indicator = styled.div`
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  cursor: pointer;

  &.checked {
    background: #008489;
    border: 1px solid #008489;

    :before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 22px;
      height: 22px;
      background: url(${iconCheckOn});
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #383838;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const Description = Name.extend`
  font-size: 12px;
  font-weight: 200;
  margin-top: 4px;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Icon = styled.img`
  width: 32px;
  margin: 0 0 0 30px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default (props) => {
  const handleCheckboxChange = (checkboxId) => {
    props.handleCheckboxChange({
      [checkboxId]: !props[checkboxId],
    });
  };

  return (
    <SpacedPopupWrapper>
      <Type>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.entireHome}
            onChange={() => handleCheckboxChange('entireHome')}
          />
          <Indicator className={props.entireHome && 'checked'} />
          <Name>
            Entire home
            <Description>Have a place to yourself</Description>
          </Name>
        </Label>
        <Icon src={iconEntire} alt="Entire home" />
      </Type>

      <Type>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.privateRoom}
            onChange={() => handleCheckboxChange('privateRoom')}
          />
          <Indicator className={props.privateRoom && 'checked'} />
          <Name>
            Private room<Description>Have your own room and share some common spaces</Description>
          </Name>
        </Label>
        <Icon src={iconPrivate} alt="Private room" />
      </Type>

      <Type>
        <Label>
          <Checkbox
            type="checkbox"
            name="sharedRoom"
            checked={props.sharedRoom}
            onChange={() => handleCheckboxChange('sharedRoom')}
          />
          <Indicator className={props.sharedRoom && 'checked'} />
          <Name>
            Shared room<Description>Stay in a shared space, like a common room</Description>
          </Name>
        </Label>
        <Icon src={iconshared} alt="Shared room" />
      </Type>
    </SpacedPopupWrapper>
  );
};
