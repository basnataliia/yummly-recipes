import React, {PropTypes} from 'react';
import FlavourItem from '../FlavourItem/FlavourItem';

const FlavourList = ({allFlavours}) => {
  return (
    <div>
      {allFlavours.map(flavour =>
        <FlavourItem key={flavour.id} flavour={flavour} />
      )}
    </div>
  );
};

FlavourList.PropTypes = {
  allFlavours: PropTypes.array.isRequired
};

export default FlavourList;
