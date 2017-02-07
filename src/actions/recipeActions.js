import { GET_ALL_RECIPES_URL } from '../constants/api-url';
import * as types from './actionTypes';
import $ from 'jquery';

export function createRecipe(recipe) {
  return {
    type: types.ACTION_TYPES.CREATE_RECIPE,
    payload: {
      recipe
    }
  };
}

export function updateRecipe(recipe) {
  return {
    type: types.ACTION_TYPES.UPDATE_RECIPE,
    payload: {
      recipe
    }
  };
}

export function loadRecipesSuccess(recipes) {
  return {
    type: types.ACTION_TYPES.LOAD_RECIPES_SUCCESS,
    payload: {
      recipes
    }
  };
}

export function loadRecipes() {
  return function(dispatch) {
    $.get(GET_ALL_RECIPES_URL)
      .then(response => {
        dispatch(loadRecipesSuccess(response.matches))
    }).catch(error => {
      throw(error);
    });
  };
}
