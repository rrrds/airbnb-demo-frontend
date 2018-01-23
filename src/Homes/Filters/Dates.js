import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { FilterButton } from '../styled';
import arrow from './arrow.svg';
import Dropdown from './Dropdown';
import ResponsivePopup from './Dropdown/ResponsivePopup';

const filterId = 'dates';

const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  line-height: normal;
  font-size: 18px;
  color: #636363;
`;

const ArrowImg = styled.img`
  margin: 0 16px;
`;

const formatButtonText = (value, defaultText) =>
  (value ? moment(value).format('MMM Do') : defaultText);

const getButtonText = (showSelectedData, startDate, endDate) =>
  (showSelectedData
    ? `${formatButtonText(startDate, 'Check in')} — ${formatButtonText(endDate, 'Check out')}`
    : 'Dates');

const getNumberOfMonths = () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    return 2;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    return 1;
  }
  return 4;
};

class Dates extends React.Component {
  state = {
    focusedInput: 'startDate',
    startDate: null,
    endDate: null,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      focusedInput: newProps.startDate ? 'endDate' : 'startDate',
      startDate: newProps.startDate,
      endDate: newProps.endDate,
    });
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = (focusedInput) => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? 'startDate' : focusedInput,
    });
  };

  onReset = () => {
    this.props.onApply({
      startDate: null,
      endDate: null,
    });

    this.props.onClose();
  };

  onApply = () => {
    this.props.onApply({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
  };

  hasSelectedDates = () => this.props.startDate || this.props.endDate;

  render() {
    const Picker = (
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        noBorder
        isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.focusedInput}
        onFocusChange={this.onFocusChange}
        numberOfMonths={getNumberOfMonths()}
        orientation={this.props.isMobile ? 'verticalScrollable' : 'horizontal'}
      />
    );

    const mobileInfoRow = (
      <Info>
        <span>{formatButtonText(this.state.startDate, 'Check in')}</span>
        <ArrowImg src={arrow} alt="From — To" />
        <span>{formatButtonText(this.state.endDate, 'Check out')}</span>
      </Info>
    );

    const Button = (
      <FilterButton
        onClick={e => this.props.onButtonClick(filterId, e)}
        active={this.props.isActive || this.hasSelectedDates()}
      >
        {getButtonText(
          this.props.isActive || this.hasSelectedDates(),
          this.state.startDate,
          this.state.endDate,
        )}
      </FilterButton>
    );

    return (
      <Dropdown>
        <ResponsivePopup
          isActive={this.props.isActive}
          isMobile={this.props.isMobile}
          mobileInfoRow={mobileInfoRow}
          onClose={this.props.onClose}
          onApply={this.onApply}
          onReset={this.onReset}
        >
          {Picker}
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default Dates;
