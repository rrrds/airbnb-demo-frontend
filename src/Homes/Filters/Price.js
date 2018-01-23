import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '../styled';
import Dropdown from './Dropdown';
import ResponsivePopup from './Dropdown/ResponsivePopup';

const filterId = 'price';

const getButtonText = showSelectedData => (showSelectedData ? '' : 'Price');

class Price extends React.Component {
  render() {
    const Button = (
      <FilterButton onClick={() => this.props.onButtonClick(filterId)} active={this.props.isActive}>
        {getButtonText()}
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
          null
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default Price;
