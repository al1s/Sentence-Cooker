import React from 'react';
import { string } from 'prop-types';

const Card = props => (
  <div className="card">
    {props.text}
  </div>
);

Card.propTypes = {
  text: string.isRequired,
};

export default Card;
