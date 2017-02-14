import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import './RecipeItem.css';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const RecipeItem = ({recipe, deleteRecipe}) => {
  let imgUrl = '';
  let ingredients = '';
  if(recipe.imageUrlsBySize) {
    imgUrl = recipe.imageUrlsBySize[90];
    let n = imgUrl.indexOf('=');
    imgUrl = imgUrl.substring(0, n !== -1 ? n : imgUrl.length);
    imgUrl = `${imgUrl}=s320-c-e365`;
  }
  else {
    imgUrl = 'http://i.imgur.com/gUv5Ne4.png';
  }

  if(recipe.ingredients){
    ingredients = recipe.ingredients;
    ingredients = ingredients.join(', ');
  }

  // <div style={{width:'100px', height:'100px', backgroundColor:'rgba(0,0,0,0.3)', border:'1px solid black'}}>
  //      <Link to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:false } }}>{recipe.recipeName}</Link>
  //       <img src={imgUrl} alt={recipe.recipeName} />
  //       <Link className="updateRecipeLink" to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:true } }}><span>Update</span></Link>
  //       <span className="deleteRecipeLink" onClick={() => {deleteRecipe(recipe.id);}}>Delete</span>
  // </div>

  return (

        <GridTile
          style={{width:'320px', margin:'20px'}}
          key={recipe.recipeName}
          title={<Link style={{color:'white', textDecoration:'none'}} to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:false } }}>{recipe.recipeName}</Link>}
          subtitle={<span><b>{ingredients}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={recipe.recipeName ? 2 : 1}
          rows={recipe.recipeName ? 2 : 1}
          >
            <img src={imgUrl} alt={recipe.recipeName}/>
            <div style={{position:'absolute', backgroundColor: 'rgba(0,0,0,0.3)', bottom:'5px', width:'125px', 'height':'30px', right:'15px'}}>
                <Link  className="updateRecipeLink"
                      to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:true } }}
                      style={{position:'absolute', color:'white', bottom:'5px', right:'65px'}}
                      ><span>Update</span></Link>
                <a className="deleteRecipeLink"
                      onClick={(e) => {deleteRecipe(e, recipe.id);}}
                      style={{position:'absolute', color:'white', bottom:'5px', right:'10px', zIndex:'1000', textDecoration:'underline'}}
                      >Delete</a>
            </div>
        </GridTile>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeItem;
