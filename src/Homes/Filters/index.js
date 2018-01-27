import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import Dates from './Dates';
import Guests from './Guests';
import RoomType from './RoomType';
import Price from './Price';
import InstantBook from './InstantBook';
import MoreFilters from './MoreFilters';

const isMobile = window.matchMedia('(max-width: 400px)').matches;
const isMdOrLess = window.matchMedia('(max-width: 992px)').matches;

const priceDataMock = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);

class Filters extends React.Component {
  state = {
    activeFilterId: false,

    focusedInput: 'startDate',
    startDate: null,
    endDate: null,

    adultsCount: 1,
    childrenCount: 0,
    infantsCount: 0,

    entireHome: false,
    privateRoom: false,
    sharedRoom: false,

    priceData: priceDataMock,
    selectedRange: [10, 1000],
    minPrice: 10,
    maxPrice: 1000,

    instantBook: false,

    bedrooms: 0,
    beds: 0,
    bathrooms: 0,

    superhost: false,

    heating: false,
    kitchen: false,
    tv: false,
    internet: false,

    elebator: false,
    parking: false,
    pool: false,
    wheelchair: false,
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

            {!isMdOrLess && (<RoomType
              isActive={this.state.activeFilterId === 'roomtype'}
              entireHome={this.state.entireHome}
              privateRoom={this.state.privateRoom}
              sharedRoom={this.state.sharedRoom}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />)}

            {!isMdOrLess && (<Price
              isActive={this.state.activeFilterId === 'price'}
              priceData={this.state.priceData}
              selectedRange={this.state.selectedRange}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />)}

            {!isMdOrLess && (<InstantBook
              isActive={this.state.activeFilterId === 'instantbook'}
              instantBook={this.state.instantBook}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
            />)}

            <MoreFilters
              isActive={this.state.activeFilterId === 'more'}
              onButtonClick={this.toggleOpen}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
              isMobile={isMobile}
              entireHome={this.state.entireHome}
              privateRoom={this.state.privateRoom}
              sharedRoom={this.state.sharedRoom}
              selectedRange={this.state.selectedRange}
              priceData={priceDataMock}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              bedrooms={this.state.bedrooms}
              beds={this.state.beds}
              bathrooms={this.state.bathrooms}
              instantBook={this.state.instantBook}
              superhost={this.state.superhost}
              heating={this.state.heating}
              kitchen={this.state.kitchen}
              tv={this.state.tv}
              internet={this.state.internet}
              elebator={this.state.elebator}
              parking={this.state.parking}
              pool={this.state.pool}
              wheelchair={this.state.wheelchair}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Filters;
