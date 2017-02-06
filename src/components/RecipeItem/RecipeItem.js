import React, {PropTypes} from 'react';


const RecipeItem = ({recipe}) => {
  return (
    <div>
      {recipe.recipeName}
    </div>
  );
};

RecipeItem.PropTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeItem;
