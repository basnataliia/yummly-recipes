import React from 'react';
import FlavourList from '../FlavourList/FlavourList';

function onStartClick(){
  console.log('star is cliked');
}

const RecipeViewDetails = ({recipe, allFlavours, isAddNew}) => {
    console.log(recipe);
  return (

    <div>
      <h2>{recipe.recipeName}</h2>
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

export default RecipeViewDetails;
