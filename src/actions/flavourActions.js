import FlavourApi from '../api/mockFlavourApi';
import * as types from './actionTypes';
// import $ from 'jquery';


export function loadFlavoursSuccess(flavours) {
  return {
    type: types.ACTION_TYPES.LOAD_FLAVOURS_SUCCESS,
    payload: {
      flavours
    }
  };
}

export function loadFlavours() {
  return dispatch => {
    return FlavourApi.getAllFlavours()
      .then(response => {
        dispatch(loadFlavoursSuccess(response))
    }).catch(error => {
      throw(error);
    });
  };
}
