import React, {PropTypes} from 'react';
import FlavourItem from '../FlavourItem/FlavourItem';

const FlavourList = ({allFlavours, onStartClick, recipe, isAddNew, isViewMode}) => {
  if(isAddNew) {
    return (
      <div>
        {allFlavours.map(flavour =>
          <FlavourItem key={flavour.id} flavourId={flavour.id} flavour={flavour} recipe={recipe} onStartClick={onStartClick} />
        )}
      </div>
    );
  }
  else{
    if(!recipe.id){
      return null;
    }
    else{
      return (
        <div>
          {allFlavours.map(flavour =>
            <FlavourItem key={flavour.id} flavourId={flavour.id} flavour={flavour} recipe={recipe} onStartClick={onStartClick} isViewMode={isViewMode}/>
          )}
        </div>
      );
    }
  }
}

FlavourList.propTypes = {
  allFlavours: PropTypes.array.isRequired,
  onStartClick: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  isAddNew: PropTypes.bool,
  isViewMode: PropTypes.bool,
};

export default FlavourList;
