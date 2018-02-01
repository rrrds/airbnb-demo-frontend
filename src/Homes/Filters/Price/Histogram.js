import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: inline-block;
  width: 2%;
  background: rgba(118, 118, 118, 0.5);
  height: ${props => props.size}px;
`;

const generateBars = data => data.map((value, index) => <Bar key={index} size={value} />);

export default props => <div className={props.className}>{generateBars(props.data)}</div>;
