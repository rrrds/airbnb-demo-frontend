import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from 'react-toggle-switch';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import cross from './cross.svg';
import check from './check.svg';

const filterId = 'instantbook';

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

class InstantBook extends React.Component {
  state = {
    instantBook: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      instantBook: newProps.instantBook,
    });
  }

  onReset = () => {
    this.props.onApply({
      instantBook: false,
    });

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({
      instantBook: this.state.instantBook,
    });
  };

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      instantBook: !prevState.instantBook,
    }));
  };

  render() {
    const Button = (
      <FilterButton
        className={this.props.className}
        onClick={() => this.props.onButtonClick(filterId)}
        active={this.props.isActive || this.state.instantBook}
      >
        Instant Book
      </FilterButton>
    );

    return (
      <Dropdown>
        <ResponsivePopup
          isActive={this.props.isActive}
          isMobile={this.props.isMobile}
          onClose={this.props.onClose}
          onApply={this.onApply}
          onReset={this.onReset}
        >
          <SpacedPopupWrapper>
            <Label>
              <Name>
                Instant Book
                <Description>Listings you can book without waiting for host approval.</Description>
              </Name>
              <Switch onClick={this.handleCheckboxChange} on={this.state.instantBook} />
            </Label>
          </SpacedPopupWrapper>
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default InstantBook;
