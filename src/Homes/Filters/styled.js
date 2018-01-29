import styled from 'styled-components';
import iconArrow from './arrow-down.svg';

export const SpacedPopupWrapper = styled.div`
  padding: 0;
  margin-bottom: 32px;
`;

export const SeeAll = styled.button`
  background: none;
  border: none;
  padding: 0 20px 0 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;

  background: url(${iconArrow}) right 9px no-repeat;
`;

export const CheckboxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 23px;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;
