import React from 'react';
import styled from 'styled-components';
import { SpacedPopupWrapper, SeeAll, CheckboxRow } from '../styled';
import iconCheckOn from './check-on.svg';

const filterId = 'facilities';

const StyledWrapper = SpacedPopupWrapper.extend`
  display: flex;
  flex-wrap: wrap;
`;

const Label = styled.label`
  display: flex;
  padding: 0 0 0 36px;
  position: relative;
  cursor: pointer;
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
  white-space: nowrap;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
`;

export default (props) => {
  const handleCheckboxChange = (checkboxId) => {
    props.onHandleChange({
      [checkboxId]: !props[checkboxId],
    });
  };

  return (
    <StyledWrapper>
      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.elevator}
            onChange={() => handleCheckboxChange('elevator')}
          />
          <Indicator className={props.elevator && 'checked'} />
          <Name>Elevator</Name>
        </Label>
      </CheckboxRow>

      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.parking}
            onChange={() => handleCheckboxChange('parking')}
          />
          <Indicator className={props.parking && 'checked'} />
          <Name>Free parking on premises</Name>
        </Label>
      </CheckboxRow>

      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.pool}
            onChange={() => handleCheckboxChange('pool')}
          />
          <Indicator className={props.pool && 'checked'} />
          <Name>Pool</Name>
        </Label>
      </CheckboxRow>

      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.wheelchair}
            onChange={() => handleCheckboxChange('wheelchair')}
          />
          <Indicator className={props.wheelchair && 'checked'} />
          <Name>Wheelchair accessible</Name>
        </Label>
      </CheckboxRow>

      <SeeAll className="hidden-xs">See all facilities</SeeAll>
    </StyledWrapper>
  );
};
