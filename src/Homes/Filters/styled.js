import styled from 'styled-components';
import iconArrow from './arrow-down.svg';
import iconCheckOn from './check-on.svg';

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
  display: none;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 23px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    display: flex;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const Indicator = styled.div`
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: ${props => (props.checked ? '#008489' : '#fff')};
  border: ${props => (props.checked ? '1px solid #008489' : '1px solid rgba(72, 72, 72, 0.3)')};
  border-radius: 4px;
  cursor: pointer;

  :before {
    display: ${props => (props.checked ? 'block' : 'none')};
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 22px;
    background: url(${iconCheckOn});
    background-position: center;
    background-repeat: no-repeat;
  }
`;
