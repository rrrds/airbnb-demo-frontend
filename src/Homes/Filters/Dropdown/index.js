import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;

export default props => <Wrapper>{props.children}</Wrapper>;
