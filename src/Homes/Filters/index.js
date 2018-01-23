import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { FilterButton } from '../styled';
import Dates from './Dates';
import Guests from './Guests';
import RoomType from './RoomType';

const isMobile = window.matchMedia('(max-width: 400px)').matches;

class Filters extends React.Component {
  state = {
    activeFilterId: false,

    focusedInput: 'startDate',
    startDate: null,
    endDate: null,

    adultsCount: 1,
    childrenCount: 0,
    infantsCount: 0,

    entireHome: true,
    privateRoom: false,
    sharedRoom: false,
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

  toggleOpen = (filterId) => {
    this.setState(prevState => ({
      activeFilterId: prevState.activeFilterId === filterId ? false : filterId,
    }));
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
              adultsCount={this.state.adultsCount}
              childrenCount={this.state.childrenCount}
              infantsCount={this.state.infantsCount}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />

            <RoomType
              isActive={this.state.activeFilterId === 'roomtype'}
              entireHome={this.state.entireHome}
              privateRoom={this.state.privateRoom}
              sharedRoom={this.state.sharedRoom}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
              className="hidden-xs hidden-md"
            />

            <FilterButton
              onClick={() => this.toggleOpen('price')}
              active={this.state.activeFilterId === 'price'}
              className="hidden-xs hidden-md"
            >
              Price
            </FilterButton>
            <FilterButton
              onClick={() => this.toggleOpen('book')}
              active={this.state.activeFilterId === 'book'}
              className="hidden-xs hidden-md"
            >
              Instant book
            </FilterButton>

            <FilterButton
              onClick={() => this.toggleOpen('more')}
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
