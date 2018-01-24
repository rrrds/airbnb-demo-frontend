import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';

const filterId = 'instantbook';

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
      <FilterButton onClick={() => this.props.onButtonClick(filterId)} active={this.props.isActive}>
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
          <input
            type="checkbox"
            checked={this.state.instantBook}
            onChange={this.handleCheckboxChange}
          />
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default InstantBook;
