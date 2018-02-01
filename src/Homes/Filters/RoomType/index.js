import React from 'react';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import RoomSelect from './RoomSelect';

const filterId = 'roomtype';

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

  handleCheckboxChange = (data) => {
    this.setState(data);
  };

  render() {
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
          <RoomSelect
            entireHome={this.state.entireHome}
            privateRoom={this.state.privateRoom}
            sharedRoom={this.state.sharedRoom}
            handleCheckboxChange={this.handleCheckboxChange}
          />
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}
