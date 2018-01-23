import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import arrow from './arrow-down.svg';

const Wrapper = styled.div`
  display: flex;
  content-align: center;
  margin-right: 3vw;
`;

const Arrow = styled.button`
  border: none;
  background: url(${arrow}) center center no-repeat / auto;
  margin-left: 5px;
`;

export default function () {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Arrow className="hidden-lg hidden-xl" />
    </Wrapper>
  );
}
