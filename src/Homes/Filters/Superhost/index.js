import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from 'react-toggle-switch';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import cross from './cross.svg';
import check from './check.svg';

const filterId = 'superhost';

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

const SpacedPopupWrapper = styled.div`
  padding: 24px 16px 24px 16px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 20px;
  color: #383838;
  margin-bottom: 4px;
  margin-right: 30px;
  min-width: 200px;
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  font-weight: 200;
  color: #383838;
`;

export default class Superhost extends React.Component {
  state = {
    superhost: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      superhost: newProps.superhost,
    });
  }

  onReset = () => {
    this.props.onApply({
      superhost: false,
    });

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({
      superhost: this.state.superhost,
    });
  };

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      superhost: !prevState.superhost,
    }));
  };

  render() {
    return (
      <SpacedPopupWrapper>
        <Label>
          <Name>
            Superhost
            <Description>Stay with recognized hosts.</Description>
            <a href="#">Learn more</a>
          </Name>
          <Switch onClick={this.handleCheckboxChange} on={this.state.superhost} />
        </Label>
      </SpacedPopupWrapper>
    );
  }
}
