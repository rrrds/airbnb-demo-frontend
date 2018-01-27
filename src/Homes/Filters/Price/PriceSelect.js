import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import './slider.css';
import Histogram from './Histogram';

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
  font-size: 20px;
  color: #383838;
  margin-bottom: 7px;
`;

const PriceAverage = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #383838;
  margin-bottom: 32px;
`;

const Handle = styled.button`
  background: #fff;
  border: 1px solid #008489;
  border-radius: 16px;
  cursor: ew-resize;
  margin-left: -16px;
  margin-top: -13px;
  height: 32px;
  width: 32px;
  z-index: 3;
`;

export default class PriceSelect extends React.Component {
  onChange = ({ values }) => {
    this.props.onChange({ selectedRange: values });
  };

  render() {
    return (
      <SpacedPopupWrapper>
        <PriceRange>
          ${this.props.selectedRange[0]} — ${this.props.selectedRange[1]}+
        </PriceRange>
        <PriceAverage>The average nightly price is $75.</PriceAverage>
        <StyledHistogram data={this.props.priceData} />
        <Rheostat
          min={this.props.minPrice}
          max={this.props.maxPrice}
          values={this.props.selectedRange || [0, 0]}
          handle={Handle}
          onChange={this.onChange}
          onValuesUpdated={this.onChange}
        />
      </SpacedPopupWrapper>
    );
  }
}
