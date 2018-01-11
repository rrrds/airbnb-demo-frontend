import styled from "styled-components";

export default styled.button`
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
