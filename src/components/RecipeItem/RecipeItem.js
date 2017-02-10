import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import './RecipeItem.css';


const RecipeItem = ({recipe}) => {
  return (
    <div>
      <Link to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:false } }}>{recipe.recipeName}</Link>
      {/* <Link className="updateRecipeLink" to={'/recipes/' + recipe.id} query={{ the: 'query' }}><span>Update</span></Link> */}
      <Link className="updateRecipeLink" to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:true } }}><span>Update</span></Link>
    </div>
  );
};

RecipeItem.PropTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeItem;
