import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import iconEntire from './entire.svg';
import iconPrivate from './private.svg';
import iconshared from './shared.svg';
import iconCheckOn from './check-on.svg';

const filterId = 'roomtype';

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
  line-height: normal;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;

  color: #383838;
`;

const Description = Name.extend`
  font-size: 12px;
  margin-top: 4px;
`;

const Icon = styled.img`
  width: 32px;
  margin: 0 0 0 30px;
`;

const typeToText = {
  entireHome: 'Entire Home',
  privateRoom: 'Private Room',
  sharedRoom: 'Shared Room',
};

const getButtonText = (showSelectedData, values) => {
  if (showSelectedData) {
    const seletedData = Object.entries(values).reduce(
      (prev, cur) => {
        const [key, value] = cur;

        if (value === true) {
          return {
            selectedCount: prev.selectedCount + 1,
            selectedType: key,
          };
        }

        return prev;
      },
      { selectedCount: 0, selectedType: null },
    );

    if (seletedData.selectedCount > 1) {
      return `Room type · ${seletedData.selectedCount}`;
    }

    if (seletedData.selectedCount === 1) {
      return typeToText[seletedData.selectedType];
    }
  }

  return 'Room type';
};

const hasSelectedType = values => values.entireHome || values.privateRoom || values.sharedRoom;

export default class RoomType extends React.Component {
  state = {
    entireHome: false,
    privateRoom: false,
    sharedRoom: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      entireHome: newProps.entireHome,
      privateRoom: newProps.privateRoom,
      sharedRoom: newProps.sharedRoom,
    });
  }

  onReset = () => {
    this.props.onApply({
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
    });

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({
      entireHome: this.state.entireHome,
      privateRoom: this.state.privateRoom,
      sharedRoom: this.state.sharedRoom,
    });
  };

  handleCheckboxChange = (checkboxId) => {
    this.setState(prevState => ({
      [checkboxId]: !prevState[checkboxId],
    }));
  };

  render() {
    const RoomSelect = (
      <SpacedPopupWrapper>
        <Type>
          <Label>
            <Checkbox
              type="checkbox"
              checked={this.state.entireHome}
              onChange={() => this.handleCheckboxChange('entireHome')}
            />
            <Indicator className={this.state.entireHome && 'checked'} />
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
              checked={this.state.privateRoom}
              onChange={() => this.handleCheckboxChange('privateRoom')}
            />
            <Indicator className={this.state.privateRoom && 'checked'} />
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
              checked={this.state.sharedRoom}
              onChange={() => this.handleCheckboxChange('sharedRoom')}
            />
            <Indicator className={this.state.sharedRoom && 'checked'} />
            <Name>
              Shared room<Description>Stay in a shared space, like a common room</Description>
            </Name>
          </Label>
          <Icon src={iconshared} alt="Shared room" />
        </Type>
      </SpacedPopupWrapper>
    );

    const Button = (
      <FilterButton
        className={this.props.className}
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive || hasSelectedType(this.state)}
      >
        {getButtonText(hasSelectedType(this.state), this.state)}
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
          {RoomSelect}
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}
