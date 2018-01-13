import styled from "styled-components";

export const RoundButton = styled.button`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: ${props => (props.active ? "#fff" : "#0f7276")};
  background: ${props => (props.active ? "#008489" : "transparent")};
  border-radius: 16px;
  border: none;
  width: 32px;
  height: 32px;
  margin: 0 8px;

  &:hover {
    border: 1px solid #008489;
  }
`;

export const FilterButton = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  background-color: ${props => (props.active ? "#008489" : "#fff")};

  line-height: normal;
  font-size: 14px;
  color: ${props => (props.active ? "#fff" : "#383838")};
`;

export const PopupOverlayWrapper = styled.div`
  position: relative;
  display: inline-block;

  :before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    mix-blend-mode: normal;
    opacity: 0.8;
    height: 100vh;
    width: 100vw;
    z-index: -50;
  }
`;

export const PopupWrapper = styled.div`
  position: absolute;
  left: -1px;
  top: 15px;
  background: #fff;
  z-index: 20;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;
