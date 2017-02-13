import * as types from '../actions/actionTypes';

export default function recipeReducer(state = [], action) {
  switch(action.type) {
    case types.ACTION_TYPES.CREATE_RECIPE:
      return [
        ...state,
        Object.assign({}, action.payload.recipe)
      ];

    case types.ACTION_TYPES.UPDATE_RECIPE:
      return [
        ...state.filter(recipe => recipe.id !== action.payload.recipe.id),
        Object.assign({}, action.payload.recipe)
      ];

    case types.ACTION_TYPES.DELETE_RECIPE:
      return state.filter(recipe => recipe.id !== action.payload.recipeId);

    case types.ACTION_TYPES.LOAD_RECIPES_SUCCESS:
      return action.payload.recipes;

    case types.ACTION_TYPES.LOAD_RECIPES_SEARCH_SUCCESS:
      return action.payload.recipes;

    default:
      return state;
  }
}
