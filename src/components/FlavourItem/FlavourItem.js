import React, {PropTypes} from 'react';
// import { Link } from 'react-router';

const FlavourItem = ({flavour}) => {
  return (
    <div className="flavourLevel">
      {flavour.name}
        <input type="radio" name="flavourLevel" value="0"/>0
        <input type="radio" name="flavourLevel" value="0.2"/>0.2
        <input type="radio" name="flavourLevel" value="0.5"/>0.5
        <input type="radio" name="flavourLevel" value="0.7"/>0.7
        <input type="radio" name="flavourLevel" value="1"/>1
    </div>
  );
};

FlavourItem.PropTypes = {
  flavour: PropTypes.object.isRequired
};

export default FlavourItem;
