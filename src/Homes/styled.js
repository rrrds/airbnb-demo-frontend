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
