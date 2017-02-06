import * as types from '../actions/actionTypes';

export default function recipeReducer(state = [], action) {
  switch(action.type) {
    case types.ACTION_TYPES.CREATE_RECIPE:
      return [
        ...state,
        Object.assign({}, action.payload.recipe)
      ];
    case types.ACTION_TYPES.LOAD_RECIPES_SUCCESS:
      return action.payload.recipes;
    default:
      return state;
  }
}