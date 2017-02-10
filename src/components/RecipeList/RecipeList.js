import React, {PropTypes} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div>
      {recipes.map(recipe =>
        <RecipeItem key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
      )}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
