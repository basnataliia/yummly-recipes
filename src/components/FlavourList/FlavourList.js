import React, {PropTypes} from 'react';
import FlavourItem from '../FlavourItem/FlavourItem';

const FlavourList = ({allFlavours, onStartClick}) => {
  return (
    <div>
      {allFlavours.map(flavour =>
        <FlavourItem key={flavour.id} flavourId={flavour.id} flavour={flavour} onStartClick={onStartClick} />
      )}
    </div>
  );
};

FlavourList.propTypes = {
  allFlavours: PropTypes.array.isRequired,
  onStartClick: PropTypes.func
};

export default FlavourList;
