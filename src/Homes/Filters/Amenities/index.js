import React from 'react';
import styled from 'styled-components';
import iconCheckOn from './check-on.svg';

const filterId = 'amenities';

const SpacedPopupWrapper = styled.div`
  padding: 24px 16px 0 16px;
  display: flex;
  flex-wrap: wrap;
`;

const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 23px;
  width: 50%;
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
  font-size: 20px;
  color: #383838;
`;

export default class Amenities extends React.Component {
  handleCheckboxChange = (checkboxId) => {
    this.props.onHandleChange({
      [checkboxId]: !this.props[checkboxId],
    });
  };

  render() {
    return (
      <SpacedPopupWrapper>
        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.props.heating}
              onChange={() => this.handleCheckboxChange('heating')}
            />
            <Indicator className={this.props.heating && 'checked'} />
            <Name>Heating</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.props.kitchen}
              onChange={() => this.handleCheckboxChange('kitchen')}
            />
            <Indicator className={this.props.kitchen && 'checked'} />
            <Name>Kitchen</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.props.tv}
              onChange={() => this.handleCheckboxChange('tv')}
            />
            <Indicator className={this.props.tv && 'checked'} />
            <Name>TV</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.props.internet}
              onChange={() => this.handleCheckboxChange('internet')}
            />
            <Indicator className={this.props.internet && 'checked'} />
            <Name>Wireless Internet</Name>
          </Label>
        </Type>
      </SpacedPopupWrapper>
    );
  }
}
