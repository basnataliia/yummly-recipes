import React, {PropTypes} from 'react';

export default function RecipeSearch({
  searchForRecipe,
}) {
  let recipeQuery = '';
  return (
  	<div className="Recipe-search" style={{textAlign:'center'}}>
       <input onChange={(e) => {
       	 recipeQuery = e.target.value;
       	 searchForRecipe(recipeQuery);
       }
     } type="text" placeholder="Find a recipe..."/>
  	</div>
  	);
}

RecipeSearch.propTypes = {
  searchForRecipe: PropTypes.func.isRequired,
};
