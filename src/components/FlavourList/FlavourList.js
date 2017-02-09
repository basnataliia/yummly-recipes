import React, {PropTypes} from 'react';
import FlavourItem from '../FlavourItem/FlavourItem';

const FlavourList = ({allFlavours, onStartClick, recipe}) => {
  return (
    <div>
      {allFlavours.map(flavour =>
        <FlavourItem key={flavour.id} flavourId={flavour.id} flavour={flavour} recipe={recipe} onStartClick={onStartClick} />
      )}
    </div>
  );
};

FlavourList.propTypes = {
  allFlavours: PropTypes.array.isRequired,
  onStartClick: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
};

export default FlavourList;
