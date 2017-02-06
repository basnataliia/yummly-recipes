import React, {PropTypes} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipeList = ({recipes}) => {
  return (
    <div>
      {recipes.map(recipe =>
        <RecipeItem key={recipe.id} recipe={recipe} />
      )}
    </div>
  );
};

RecipeList.PropTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;
