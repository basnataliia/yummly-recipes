import React, {PropTypes} from 'react';
import Rating from 'react-rating';
import './FlavourItem.css';


const FlavourItem = ({flavour, flavourId, onStartClick}) => {
  return (
    <div className="flavourLevel">

        <div className="flavourName">{flavour.name}</div>

        <div className="rating">
          <input type="radio" id={"star1-" + flavourId} name={flavourId} value="1" onClick={() => onStartClick(1, flavour.name)}/>
          <label className="full" htmlFor={"star1-" + flavourId} title="1 star" name={flavourId}></label>

          <input type="radio" id={"star2-" + flavourId} name={flavourId} value="2" onClick={() => onStartClick(2, flavour.name)}/>
          <label className="full" htmlFor={"star2-" + flavourId} title="2 stars" name={flavourId}></label>

          <input type="radio" id={"star3-" + flavourId} name={flavourId} value="3" onClick={() => onStartClick(3, flavour.name)}/>
          <label className="full" htmlFor={"star3-" + flavourId} title="3 stars" name={flavourId}></label>

          <input type="radio" id={"star4-" + flavourId} name={flavourId} value="4" onClick={() => onStartClick(4, flavour.name)}/>
          <label className="full" htmlFor={"star4-" + flavourId} title="4 stars" name={flavourId}></label>

          <input type="radio" id={"star5-" + flavourId} name={flavourId} value="5" onClick={() => onStartClick(5, flavour.name)}/>
          <label className="full" htmlFor={"star5-" + flavourId} title="5 stars" name={flavourId}></label>
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
