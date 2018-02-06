import React from 'react';
import styled from 'styled-components';
import { SpacedPopupWrapper, SeeAll, CheckboxRow, Checkbox, Indicator } from '../styled';

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
            checked={props.heating}
            onChange={() => handleCheckboxChange('heating')}
          />
          <Indicator checked={props.heating} />
          <Name>Heating</Name>
        </Label>
      </CheckboxRow>

      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.kitchen}
            onChange={() => handleCheckboxChange('kitchen')}
          />
          <Indicator checked={props.kitchen} />
          <Name>Kitchen</Name>
        </Label>
      </CheckboxRow>

      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.tv}
            onChange={() => handleCheckboxChange('tv')}
          />
          <Indicator checked={props.tv} />
          <Name>TV</Name>
        </Label>
      </CheckboxRow>

      <CheckboxRow>
        <Label>
          <Checkbox
            type="checkbox"
            checked={props.internet}
            onChange={() => handleCheckboxChange('internet')}
          />
          <Indicator checked={props.internet} />
          <Name>Wireless Internet</Name>
        </Label>
      </CheckboxRow>

      <SeeAll className="hidden-xs">See all amenities</SeeAll>
    </StyledWrapper>
  );
};
