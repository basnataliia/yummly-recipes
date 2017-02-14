import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import './RecipeItem.css';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';

// const styles = {
//
//   .deleteRecipeLink: {
//     position:'absolute',
//     zIndex:'1000',
//     color:'red'
//   },
// };


const RecipeItem = ({recipe, deleteRecipe}) => {
  let imgUrl = recipe.imageUrlsBySize[90];
  let n = imgUrl.indexOf('=');
  imgUrl = imgUrl.substring(0, n !== -1 ? n : imgUrl.length);
  imgUrl = imgUrl + '=s320-c-e365';
  // console.log('imgUrl', imgUrl);

  let ingredients = recipe.ingredients;
  ingredients = ingredients.join(', ');
  return (
    // <div>
    //       <Link to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:false } }}>{recipe.recipeName}</Link>
    //       <img src={imgUrl} alt={recipe.recipeName} />
    //       <Link className="updateRecipeLink" to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:true } }}><span>Update</span></Link>
    //       <span className="deleteRecipeLink" onClick={() => {deleteRecipe(recipe.id);}}>Delete</span>
    // </div>



        <GridTile
          key={recipe.recipeName}
          title={recipe.recipeName}
          subtitle={
            <span><b>{ingredients}</b></span>
        }


          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={recipe.recipeName ? 2 : 1}
          rows={recipe.recipeName ? 2 : 1}
        >
          <Link to={{ pathname: '/recipes/' + recipe.id, state: { updateRecipeView:false } }}>
          <Paper zDepth={5}>
            <img src={imgUrl} />
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
          </Paper>
        </Link>
        </GridTile>

  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeItem;
