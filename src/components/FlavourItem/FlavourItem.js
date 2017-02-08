import React, {PropTypes} from 'react';
import Rating from 'react-rating';
import './FlavourItem.css';


const FlavourItem = ({flavour, flavourId, onStartClick}) => {
  return (
    <div className="flavourLevel">
      <span className="flavourName">{flavour.name}</span>
      {/* <Rating
        empty={"fa fa-star-o"}
        full={"fa fa-star"}
        placeholder={flavour.name}
        onClick={(rate) => onStartClick(rate, flavour.name)}
        /> */}

        <div>
          <input type="radio" name={"hello" + flavourId} value="1" onClick={() => onStartClick(1, flavour.name)}/>
          <input type="radio" name={"hello" + flavourId} value="2" onClick={() => onStartClick(2, flavour.name)}/>
          <input type="radio" name={"hello" + flavourId} value="3" onClick={() => onStartClick(3, flavour.name)}/>
          <input type="radio" name={"hello" + flavourId} value="4" onClick={() => onStartClick(4, flavour.name)}/>
          <input type="radio" name={"hello" + flavourId} value="5" onClick={() => onStartClick(5, flavour.name)}/>
      </div>
    </div>
  );
};

FlavourItem.propTypes = {
  flavour: PropTypes.object.isRequired,
  onStartClick: PropTypes.func,
  flavourId: PropTypes.string,
};

export default FlavourItem;
