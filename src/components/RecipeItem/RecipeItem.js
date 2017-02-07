import React, {PropTypes} from 'react';
import { Link } from 'react-router';


const RecipeItem = ({recipe}) => {
  return (
    <div>
      <Link to={'/recipes/' + recipe.id}>{recipe.recipeName}</Link>
    </div>
  );
};

RecipeItem.PropTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeItem;
