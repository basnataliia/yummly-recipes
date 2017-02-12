import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import './RecipeItem.css';


const RecipeItem = ({recipe, deleteRecipe}) => {
  return (
    <div>
      <Link to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:false } }}>{recipe.recipeName}</Link>
      <Link className="updateRecipeLink" to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:true } }}><span>Update</span></Link>
    <span className="deleteRecipeLink" onClick={() => {deleteRecipe(recipe.id);}}>Delete</span>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeItem;
