import React, {PropTypes} from 'react';
import FlavourList from '../FlavourList/FlavourList';



const RecipeViewDetails = ({recipe, allFlavours, isAddNew}) => {
    function onStartClick(){
      console.log('dd');
      // return;
    }
  return (

    <div>
      <h2>{recipe.name}</h2>
      <FlavourList
        allFlavours={allFlavours}
        recipe={recipe}
        onStartClick={onStartClick}
        isAddNew={isAddNew}
        isViewMode={true}
        />
    </div>
  );
};

RecipeViewDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  allFlavours: PropTypes.array.isRequired,
  isAddNew: PropTypes.bool.isRequired,
};

export default RecipeViewDetails;
