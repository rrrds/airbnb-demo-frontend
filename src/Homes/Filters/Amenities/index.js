import React from 'react';
import styled from 'styled-components';
import iconCheckOn from './check-on.svg';

const filterId = 'amenities';

const SpacedPopupWrapper = styled.div`
  padding: 24px 16px 0 16px;
`;

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

const Description = Name.extend`
  font-size: 16px;
  font-weight: 200;
  margin-top: 4px;
`;

const Icon = styled.img`
  width: 32px;
  margin: 0 0 0 30px;
`;

export default class Amenities extends React.Component {
  state = {
    heating: false,
    kitchen: false,
    tv: false,
    internet: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      heating: newProps.heating,
      kitchen: newProps.kitchen,
      tv: newProps.tv,
      internet: newProps.internet,
    });
  }

  onReset = () => {
    this.props.onApply({
      heating: false,
      kitchen: false,
      tv: false,
      internet: false,
    });

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({
      ...this.state,
    });
  };

  handleCheckboxChange = (checkboxId) => {
    this.setState(prevState => ({
      [checkboxId]: !prevState[checkboxId],
    }));
  };

  render() {
    return (
      <SpacedPopupWrapper>
        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.heating}
              onChange={() => this.handleCheckboxChange('heating')}
            />
            <Indicator className={this.state.heating && 'checked'} />
            <Name>Heating</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.kitchen}
              onChange={() => this.handleCheckboxChange('kitchen')}
            />
            <Indicator className={this.state.kitchen && 'checked'} />
            <Name>Kitchen</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.tv}
              onChange={() => this.handleCheckboxChange('tv')}
            />
            <Indicator className={this.state.tv && 'checked'} />
            <Name>TV</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.internet}
              onChange={() => this.handleCheckboxChange('internet')}
            />
            <Indicator className={this.state.internet && 'checked'} />
            <Name>Wireless Internet</Name>
          </Label>
        </Type>
      </SpacedPopupWrapper>
    );
  }
}
