import * as types from '../actions/actionTypes';

export default function flavourReducer(state = [], action) {
  switch(action.type) {
    case types.ACTION_TYPES.LOAD_FLAVOURS_SUCCESS:
      return action.payload.flavours;

    default:
      return state;
  }
}
