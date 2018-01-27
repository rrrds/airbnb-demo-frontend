import React from 'react';
import styled from 'styled-components';
import iconCheckOn from './check-on.svg';

const filterId = 'facilities';

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

export default class Amenities extends React.Component {
  state = {
    elebator: false,
    parking: false,
    pool: false,
    wheelchair: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      elebator: newProps.elebator,
      parking: newProps.parking,
      pool: newProps.pool,
      wheelchair: newProps.wheelchair,
    });
  }

  onReset = () => {
    this.props.onApply({
      elebator: false,
      parking: false,
      pool: false,
      wheelchair: false,
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
              checked={this.state.elebator}
              onChange={() => this.handleCheckboxChange('elebator')}
            />
            <Indicator className={this.state.elebator && 'checked'} />
            <Name>Elebator</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.parking}
              onChange={() => this.handleCheckboxChange('parking')}
            />
            <Indicator className={this.state.parking && 'checked'} />
            <Name>Free parking on premises</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.pool}
              onChange={() => this.handleCheckboxChange('pool')}
            />
            <Indicator className={this.state.pool && 'checked'} />
            <Name>Pool</Name>
          </Label>
        </Type>

        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.wheelchair}
              onChange={() => this.handleCheckboxChange('wheelchair')}
            />
            <Indicator className={this.state.wheelchair && 'checked'} />
            <Name>Wheelchair accessible</Name>
          </Label>
        </Type>
      </SpacedPopupWrapper>
    );
  }
}
