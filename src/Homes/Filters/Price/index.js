import React from 'react';
import Rheostat from 'rheostat';
import './slider.css';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import PriceSelect from './PriceSelect';

const filterId = 'price';

const isSelectedCustomRange = (min, max, values) =>
  values !== false && (min !== values[0] || max !== values[1]);

const getButtonText = (showSelectedData, values) =>
  (showSelectedData ? `Up to $${values[1]}` : 'Price');

class Price extends React.Component {
  state = {
    selectedRange: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      selectedRange: newProps.selectedRange,
    });
  }

  onChange = (data) => {
    this.setState(data);
  };

  onApply = () => {
    this.props.onApply({ selectedRange: this.state.selectedRange });
  };

  render() {
    const selectedCustomRange = isSelectedCustomRange(
      this.props.minPrice,
      this.props.maxPrice,
      this.state.selectedRange,
    );
    const Button = (
      <FilterButton
        className={this.props.className}
        onClick={() => this.props.onButtonClick(filterId)}
        active={this.props.isActive || selectedCustomRange}
      >
        {getButtonText(selectedCustomRange, this.state.selectedRange)}
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
          <PriceSelect
            selectedRange={this.state.selectedRange}
            priceData={this.props.priceData}
            minPrice={this.props.minPrice}
            maxPrice={this.props.maxPrice}
            onChange={this.onChange}
          />
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default Price;
