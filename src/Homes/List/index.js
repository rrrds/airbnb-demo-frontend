import React from 'react';
import { Col } from 'react-flexbox-grid';
import { createSkeletonProvider } from '@trainline/react-skeletor';
import Card from '../Card';

const SkeletonCard = createSkeletonProvider(
  {
    home: {
      text: '______________ _ _ __ _ ______',
      price: '__',
      stars: false,
      beds: 0,
      type: '________',
      host: '__ _______',
    },
  },
  ({ home }) => home === undefined,
  () => ({
    color: 'grey',
    backgroundColor: 'grey',
    borderRadius: '4px',
    opacity: 0.3,
    width: 'max-content',
  }),
)(Card);

export default function (props) {
  return props.homes.map((home, index) => (
    <Col key={index.toString()} xs={props.xs} md={props.md} lg={props.lg}>
      <SkeletonCard home={home} />
    </Col>
  ));
}
