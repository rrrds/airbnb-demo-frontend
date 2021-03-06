import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import { SpacedPopupWrapper } from '../styled';
import './slider.css';
import Histogram from './Histogram';

const StyledWrapper = SpacedPopupWrapper.extend`
  min-width: 300px;
`;

const StyledHistogram = styled(Histogram)`
  position: relative;
  top: 10px;
`;

const PriceRange = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #383838;
  margin-bottom: 7px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`;

const PriceAverage = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  font-weight: 200;
  color: #383838;
  margin-bottom: 32px;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 12px;
  }
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

const Slider = styled.div`
  padding: 0 16px;
`;

export default (props) => {
  const onChange = ({ values }) => {
    props.onChange({ selectedRange: values });
  };

  return (
    <StyledWrapper>
      <PriceRange>
        ${props.selectedRange[0]} — ${props.selectedRange[1]}+
      </PriceRange>
      <PriceAverage>The average nightly price is $75.</PriceAverage>
      <Slider>
        <StyledHistogram data={props.priceData} />
        <Rheostat
          min={props.minPrice}
          max={props.maxPrice}
          values={props.selectedRange || [0, 0]}
          handle={Handle}
          onChange={onChange}
          onValuesUpdated={onChange}
        />
      </Slider>
    </StyledWrapper>
  );
};
