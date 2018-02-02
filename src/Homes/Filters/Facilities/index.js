import React from 'react';
import styled from 'styled-components';
import { SpacedPopupWrapper, SeeAll, CheckboxRow, Checkbox, Indicator } from '../styled';

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
          <Indicator checked={props.elevator} />
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
          <Indicator checked={props.parking} />
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
          <Indicator checked={props.pool} />
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
          <Indicator checked={props.wheelchair} />
          <Name>Wheelchair accessible</Name>
        </Label>
      </CheckboxRow>

      <SeeAll className="hidden-xs">See all facilities</SeeAll>
    </StyledWrapper>
  );
};
