import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '../../styled';
import Dropdown from '../Dropdown';
import ResponsivePopup from '../Dropdown/ResponsivePopup';

const filterId = 'instantbook';

const SpacedPopupWrapper = styled.div`
  padding: 24px 16px 24px 16px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  margin-bottom: 4px;
  min-width: 200px;
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
`;

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
          <SpacedPopupWrapper>
            <Label>
              <Name>
                Instant Book
                <Description>Listings you can book without waiting for host approval.</Description>
              </Name>
              <input
                type="checkbox"
                checked={this.state.instantBook}
                onChange={this.handleCheckboxChange}
              />
            </Label>
          </SpacedPopupWrapper>
        </ResponsivePopup>

        {Button}
      </Dropdown>
    );
  }
}

export default InstantBook;
