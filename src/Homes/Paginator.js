import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Wrapper = styled.div`
  margin: 48px 0 14px 0;
`;

const Nav = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Button = styled.button`
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

const TextInfo = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #383838;
`;

export default function() {
  return (
    <Wrapper>
      <Nav>
        <Button active>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>&hellip;</Button>
        <Button>17</Button>
        <Button>
          <img src={arrow} alt="Next" />
        </Button>
      </Nav>
      <TextInfo>1 – 18 of 300+ Rentals</TextInfo>
    </Wrapper>
  );
}
