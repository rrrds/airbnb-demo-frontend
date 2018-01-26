import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import './slider.css';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';
import Histogram from './Histogram';

const filterId = 'price';

const SpacedPopupWrapper = styled.div`
  padding: 24px 24px 32px 24px;
  min-width: 350px;
`;

const StyledHistogram = styled(Histogram)`
  position: relative;
  top: 10px;
`;

const PriceRange = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  margin-bottom: 7px;
`;

const PriceAverage = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;
  margin-bottom: 32px;
`;

const selectedCustomRange = (min, max, values) =>
  values !== false && (min !== values[0] || max !== values[1]);

const MyHandle = ({ style, ...passProps }) => (
  <div
    {...passProps}
    style={{
      ...style,
      backgroundColor: '#fff',
      border: '1px solid #008489',
      borderRadius: '16px',
      cursor: 'ew-resize',
      marginLeft: -16,
      marginTop: -13,
      height: 32,
      width: 32,
      zIndex: 3,
    }}
  />
);

class Price extends React.Component {
  state = {
    selectedRange: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      selectedRange: newProps.selectedRange,
    });
  }

  onChange = ({ values }) => {
    this.setState({ selectedRange: values });
  };

  onValuesUpdated = ({ values }) => {
    this.setState({ selectedRange: values });
  };

  onApply = () => {
    this.props.onApply({ selectedRange: this.state.selectedRange });
  };

  render() {
    const Button = (
      <FilterButton
        className={this.props.className}
        onClick={() => this.props.onButtonClick(filterId)}
        active={
          this.props.isActive ||
          selectedCustomRange(this.props.minPrice, this.props.maxPrice, this.state.selectedRange)
        }
      >
        Price
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
            <PriceRange>
              ${this.state.selectedRange[0]} — ${this.state.selectedRange[1]}+
            </PriceRange>
            <PriceAverage>The average nightly price is $75.</PriceAverage>
            <StyledHistogram data={this.props.priceData} />
            <Rheostat
              min={this.props.minPrice}
              max={this.props.maxPrice}
              values={this.state.selectedRange}
              handle={MyHandle}
              onChange={this.onChange}
              onValuesUpdated={this.onValuesUpdated}
            />
          </SpacedPopupWrapper>
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default Price;
