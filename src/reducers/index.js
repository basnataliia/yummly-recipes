import {combineReducers} from 'redux';
import recipes from './recipeReducer';
import flavours from './flavourReducer';

const rootReducer = combineReducers({
  recipes,
  flavours
});

export default rootReducer;
