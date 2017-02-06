import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { loadRecipes } from './actions/recipeActions';
import AppContainer from './containers/App-container';
import AddRecipeContainer from './containers/AddRecipe-container';
import './index.css';

const store = configureStore();
store.dispatch(loadRecipes());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}></Route>
         <Route path='add-recipe' component={AddRecipeContainer} />
        {/*<Route path='planets/:name' component={PlanetCardContainer} /> */}

    </Router>
  </Provider>,
  document.getElementById('root')
);
