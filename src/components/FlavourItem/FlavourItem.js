import React, {PropTypes} from 'react';
import Rating from 'react-rating';
import './FlavourItem.css';


const FlavourItem = ({flavour, flavourId, onStartClick}) => {
  return (
    <div className="flavourLevel">
      <span className="flavourName">{flavour.name}</span>
      <Rating
        empty={"fa fa-star-o"}
        full={"fa fa-star"}
        placeholder={flavour.name}
        onClick={(rate) => onStartClick(rate, flavour.name)}
        />
    </div>
  );
};

FlavourItem.propTypes = {
  flavour: PropTypes.object.isRequired,
  onStartClick: PropTypes.func,
  flavourId: PropTypes.string,
};

export default FlavourItem;
