import React from 'react';
import styled from 'styled-components';
import { RoundButton } from '../../styled';
import { SpacedPopupWrapper } from '../styled';
import minus from '../minus.svg';
import plus from '../plus.svg';

const filterId = 'roomsbeds';

const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const MinusButton = RoundButton.extend`
  background: url(${minus}) center no-repeat;
`;

const PlusButton = RoundButton.extend`
  background: url(${plus}) center no-repeat;
`;

const Actions = Type.extend`
  margin: 0 0 0 60px;
`;

const Counter = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  min-width: 50px;
  text-align: center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
`;

export default (props) => {
  const onDecrease = (type) => {
    props.onHandleChange({
      [type]: props[type] - 1,
    });
  };

  const onIncrease = (type) => {
    props.onHandleChange({
      [type]: props[type] + 1,
    });
  };

  return (
    <SpacedPopupWrapper>
      <Type>
        <Name>Bedrooms</Name>
        <Actions>
          <MinusButton onClick={() => onDecrease('bedrooms')} disabled={props.bedrooms < 1} />
          <Counter>{props.bedrooms}+</Counter>
          <PlusButton onClick={() => onIncrease('bedrooms')} />
        </Actions>
      </Type>

      <Type>
        <Name>Beds</Name>
        <Actions>
          <MinusButton onClick={() => onDecrease('beds')} disabled={props.beds < 1} />
          <Counter>{props.beds}+</Counter>
          <PlusButton onClick={() => onIncrease('beds')} />
        </Actions>
      </Type>

      <Type>
        <Name>Bathrooms</Name>
        <Actions>
          <MinusButton onClick={() => onDecrease('bathrooms')} disabled={props.bathrooms < 1} />
          <Counter>{props.bathrooms}+</Counter>
          <PlusButton onClick={() => onIncrease('bathrooms')} />
        </Actions>
      </Type>
    </SpacedPopupWrapper>
  );
};
