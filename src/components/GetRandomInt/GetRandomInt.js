import React, {PropTypes} from 'react';

export default function GetRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


GetRandomInt.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};
