import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { loadRecipes } from './actions/recipeActions';
import { loadFlavours } from './actions/flavourActions';
import AppContainer from './containers/App-container';
import AddRecipeContainer from './containers/AddRecipe-container';
import ManageRecipeContainer from './containers/ManageRecipe-container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadRecipes());
store.dispatch(loadFlavours());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}/>
        <Route path='add-recipe' component={AddRecipeContainer} />
      <Route path='recipes/:id' component={ManageRecipeContainer} />
      </Router>
     </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
