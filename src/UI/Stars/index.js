import React from 'react';
import styled from 'styled-components';

import star from './star.svg';
import starEmpty from './star_empty.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 4px;
`;

const StarImg = styled.img`
  margin-right: 4px;
`;

export default function (props) {
  return (
    <Wrapper>
      {props.children !== false &&
        [...Array(5)].map((e, i) => (
          <StarImg key={i.toString()} src={i < props.children ? star : starEmpty} />
        ))}
    </Wrapper>
  );
}
