import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { FilterButton } from '../styled';
import Dates from './Dates';
import Guests from './Guests';

const isMobile = window.matchMedia('(max-width: 400px)').matches;

class Filters extends React.Component {
  state = {
    activeFilterId: false,

    focusedInput: 'startDate',
    startDate: null,
    endDate: null,

    adults: 1,
    children: 0,
    infants: 0,
  };

  toggleOpen = (filterId) => {
    this.setState(prevState => ({
      activeFilterId: prevState.activeFilterId === filterId ? false : filterId,
    }));
  };

  onCancel = () => {
    this.setState({ activeFilterId: false, startDate: null, endDate: null });
  };

  onApply = (filterState) => {
    this.setState({ activeFilterId: false });

    this.setState(filterState);
  };

  onReset = () => {
    this.setState({
      focusedInput: 'startDate',
      startDate: null,
      endDate: null,
    });
  };

  onClose = () => {
    this.setState({ activeFilterId: false });
  };

  render() {
    return (
      <Grid>
        <Row middle="xs" start="xs">
          <Col xs={12}>
            <Dates
              isActive={this.state.activeFilterId === 'dates'}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.onFocusChange}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />

            <Guests
              isActive={this.state.activeFilterId === 'guests'}
              adults={this.state.adults}
              children={this.state.children}
              infants={this.state.infants}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />

            <FilterButton
              onClick={e => this.toggleOpen('roomtype', e)}
              active={this.state.activeFilterId === 'roomtype'}
              className="hidden-xs hidden-md"
            >
              Room type
            </FilterButton>
            <FilterButton
              onClick={e => this.toggleOpen('price')}
              active={this.state.activeFilterId === 'price'}
              className="hidden-xs hidden-md"
            >
              Price
            </FilterButton>
            <FilterButton
              onClick={e => this.toggleOpen('book')}
              active={this.state.activeFilterId === 'book'}
              className="hidden-xs hidden-md"
            >
              Instant book
            </FilterButton>

            <FilterButton
              onClick={e => this.toggleOpen('more')}
              active={this.state.activeFilterId === 'more'}
            >
              More filters
            </FilterButton>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Filters;
