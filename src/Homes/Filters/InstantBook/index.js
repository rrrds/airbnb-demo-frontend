import React from 'react';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import InstantBookSelect from './InstantBookSelect';

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
          <InstantBookSelect
            onClick={this.handleCheckboxChange}
            instantBook={this.state.instantBook}
          />
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default InstantBook;
